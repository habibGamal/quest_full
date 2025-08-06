<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get locale from various sources
        $locale = $request->header('X-Locale') ?? // From frontend localStorage via header
                  $request->get('locale') ??         // From URL parameter
                  session('locale') ??               // From session
                  config('app.locale');              // Default locale

        // Validate locale
        $supportedLocales = ['en', 'ar'];
        if (!in_array($locale, $supportedLocales)) {
            $locale = config('app.locale');
        }

        // Set application locale
        app()->setLocale($locale);

        // Store in session for future requests
        session(['locale' => $locale]);

        return $next($request);
    }
}
