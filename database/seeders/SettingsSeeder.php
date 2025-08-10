<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            [
                'key' => 'title',
                'value' => config('app.name', 'Laravel'),
                'type' => 'string',
                'description' => 'Site title displayed in browser tab and header'
            ],
            [
                'key' => 'meta_description',
                'value' => 'Welcome to our amazing platform. Discover incredible features and services.',
                'type' => 'string',
                'description' => 'Meta description for SEO purposes'
            ],
            [
                'key' => 'official_email',
                'value' => 'info@quest-ad.com',
                'type' => 'string',
                'description' => 'Official contact email address'
            ],
            [
                'key' => 'whatsapp_number',
                'value' => '+201091115510',
                'type' => 'string',
                'description' => 'WhatsApp contact number'
            ],
            [
                'key' => 'social_media_links',
                'value' => json_encode([
                    ['platform' => 'Facebook', 'url' => 'https://facebook.com/yourpage'],
                    ['platform' => 'Twitter', 'url' => 'https://twitter.com/yourhandle'],
                    ['platform' => 'Instagram', 'url' => 'https://instagram.com/yourprofile'],
                    ['platform' => 'LinkedIn', 'url' => 'https://linkedin.com/company/yourcompany'],
                ]),
                'type' => 'json',
                'description' => 'Social media platform links'
            ],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                [
                    'value' => $setting['value'],
                    'type' => $setting['type'],
                    'description' => $setting['description'],
                ]
            );
        }
    }
}
