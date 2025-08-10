<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\StaticPageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $locale = app()->getLocale();

    $featuredPortfolioItems = \App\Models\PortfolioItem::active()
        ->featured()
        ->ordered()
        ->take(3)
        ->get()
        ->map(function ($item) use ($locale) {
            return [
                'id' => $item->id,
                'title' => $item->getTranslation('title', $locale, false) ?: $item->getTranslation('title', 'en', false),
                'description' => $item->getTranslation('description', $locale, false) ?: $item->getTranslation('description', 'en', false),
                'category' => $item->getTranslation('category', $locale, false) ?: $item->getTranslation('category', 'en', false),
                'image' => $item->image,
                'tags' => $item->tags ?? [],
                'results' => $item->getTranslation('results', $locale, false) ?: $item->getTranslation('results', 'en', false),
            ];
        });

    return Inertia::render('Index', [
        'featuredProjects' => $featuredPortfolioItems,
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{service}', [ServiceController::class, 'show']);

Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::get('/portfolio/{portfolioItem}', [PortfolioController::class, 'show']);

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::post('/contact', [App\Http\Controllers\ContactController::class, 'store'])->name('contact.store');

// Static Pages
Route::get('/privacy-policy', fn() => inertia()->render('PrivacyPolicy'))->name('privacy-policy');
Route::get('/terms-of-service', fn() => inertia()->render('TermsOfService'))->name('terms-of-service');

require __DIR__ . '/auth.php';
