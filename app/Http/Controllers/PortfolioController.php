<?php

namespace App\Http\Controllers;

use App\Models\PortfolioItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index(Request $request)
    {
        // Locale is now handled by middleware
        $locale = app()->getLocale();

        $portfolioItems = PortfolioItem::active()
            ->ordered()
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
                    'is_featured' => $item->is_featured,
                ];
            });

        $featuredItems = $portfolioItems->where('is_featured', true);

        return Inertia::render('Portfolio', [
            'portfolioItems' => $portfolioItems,
            'featuredItems' => $featuredItems,
        ]);
    }

    public function show(PortfolioItem $portfolioItem, Request $request)
    {
        // Locale is now handled by middleware
        $locale = app()->getLocale();

        $item = [
            'id' => $portfolioItem->id,
            'title' => $portfolioItem->getTranslation('title', $locale, false) ?: $portfolioItem->getTranslation('title', 'en', false),
            'description' => $portfolioItem->getTranslation('description', $locale, false) ?: $portfolioItem->getTranslation('description', 'en', false),
            'category' => $portfolioItem->getTranslation('category', $locale, false) ?: $portfolioItem->getTranslation('category', 'en', false),
            'image' => $portfolioItem->image,
            'tags' => $portfolioItem->tags ?? [],
            'results' => $portfolioItem->getTranslation('results', $locale, false) ?: $portfolioItem->getTranslation('results', 'en', false),
            'is_featured' => $portfolioItem->is_featured,
        ];

        return Inertia::render('Portfolio', [
            'portfolioItem' => $item,
        ]);
    }
}
