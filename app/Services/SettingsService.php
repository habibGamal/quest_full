<?php

namespace App\Services;

use App\Models\Setting;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class SettingsService
{
    const CACHE_KEY = 'app_settings';
    const CACHE_TTL = 0; // 1 hour

    /**
     * Get all settings with caching
     */
    public function getSettings(): array
    {
        return Cache::remember(self::CACHE_KEY, self::CACHE_TTL, function () {
            $settings = Setting::getAll();

            // Set defaults
            $settings['title'] = $settings['title'] ?? config('app.name');
            $settings['social_media_links'] = $settings['social_media_links'] ?? [];

            return $settings;
        });
    }

    /**
     * Update multiple settings
     */
    public function updateSettings(array $data): void
    {
        foreach ($data as $key => $value) {
            $this->updateSetting($key, $value);
        }

        $this->clearCache();
    }

    /**
     * Update a single setting
     */
    public function updateSetting(string $key, $value): void
    {
        $type = $this->getSettingType($key);
        $description = $this->getSettingDescription($key);

        Setting::set($key, $value, $type, $description);
    }

    /**
     * Get a specific setting value
     */
    public function get(string $key, $default = null)
    {
        $settings = $this->getSettings();
        return $settings[$key] ?? $default;
    }

    /**
     * Clear settings cache
     */
    public function clearCache(): void
    {
        Cache::forget(self::CACHE_KEY);
        Setting::clearCache();
    }

    /**
     * Get formatted social media links
     */
    public function getSocialMediaLinks(): array
    {
        $links = $this->get('social_media_links', []);

        return collect($links)->filter(function ($link) {
            return !empty($link['url']);
        })->toArray();
    }

    /**
     * Handle file uploads for settings
     */
    public function handleFileUpload($file, string $disk = 'public', string $path = 'settings'): ?string
    {
        if (!$file) {
            return null;
        }

        return $file->store($path, $disk);
    }

    /**
     * Get setting type based on key
     */
    protected function getSettingType(string $key): string
    {
        $types = [
            'logo_image' => 'file',
            'favicon' => 'file',
            'social_media_links' => 'json',
            'whatsapp_number' => 'string',
            'official_email' => 'string',
            'meta_description' => 'string',
            'title' => 'string',
        ];

        return $types[$key] ?? 'string';
    }

    /**
     * Get setting description based on key
     */
    protected function getSettingDescription(string $key): string
    {
        $descriptions = [
            'logo_image' => 'Site logo image',
            'favicon' => 'Site favicon',
            'social_media_links' => 'Social media links in JSON format',
            'whatsapp_number' => 'WhatsApp contact number',
            'official_email' => 'Official contact email',
            'meta_description' => 'Meta description for SEO',
            'title' => 'Site title',
        ];

        return $descriptions[$key] ?? '';
    }

    /**
     * Initialize default settings
     */
    public function initializeDefaults(): void
    {
        $defaults = [
            'title' => config('app.name'),
            'meta_description' => '',
            'official_email' => '',
            'whatsapp_number' => '',
            'social_media_links' => [
                ['platform' => 'Facebook', 'url' => ''],
                ['platform' => 'Twitter', 'url' => ''],
                ['platform' => 'Instagram', 'url' => ''],
                ['platform' => 'LinkedIn', 'url' => ''],
                ['platform' => 'YouTube', 'url' => ''],
            ],
        ];

        foreach ($defaults as $key => $value) {
            if (!Setting::where('key', $key)->exists()) {
                $this->updateSetting($key, $value);
            }
        }
    }
}
