<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index(Request $request)
    {
        // Locale is now handled by middleware
        $locale = app()->getLocale();

        $services = Service::active()
            ->ordered()
            ->get()
            ->map(function ($service) use ($locale) {
                return [
                    'id' => $service->id,
                    'icon' => $service->icon,
                    'title' => $service->getTranslation('title', $locale, false) ?: $service->getTranslation('title', 'en', false),
                    'description' => $service->getTranslation('description', $locale, false) ?: $service->getTranslation('description', 'en', false),
                    'category' => $service->getTranslation('category', $locale, false) ?: $service->getTranslation('category', 'en', false),
                    'features' => $service->getTranslation('features', $locale, false) ?: $service->getTranslation('features', 'en', false) ?: [],
                ];
            });

        return Inertia::render('Services', [
            'services' => $services,
        ]);
    }

    public function show(Service $service, Request $request)
    {
        // Locale is now handled by middleware
        $locale = app()->getLocale();

        $serviceData = [
            'id' => $service->id,
            'icon' => $service->icon,
            'title' => $service->getTranslation('title', $locale, false) ?: $service->getTranslation('title', 'en', false),
            'description' => $service->getTranslation('description', $locale, false) ?: $service->getTranslation('description', 'en', false),
            'category' => $service->getTranslation('category', $locale, false) ?: $service->getTranslation('category', 'en', false),
            'features' => $service->getTranslation('features', $locale, false) ?: $service->getTranslation('features', 'en', false) ?: [],
        ];

        return Inertia::render('Services', [
            'service' => $serviceData,
        ]);
    }
}
