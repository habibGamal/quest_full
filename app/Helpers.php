<?php

/*
 * Here you can define your own helper functions.
 * Make sure to use the `function_exists` check to not declare the function twice.
 */

if (! function_exists('example')) {
    function example(): string
    {
        return 'This is an example function you can use in your project.';
    }
}

if (! function_exists('settings')) {
    function settings(?string $key = null, $default = null)
    {
        $settingsService = app(\App\Services\SettingsService::class);

        if ($key === null) {
            return $settingsService->getSettings();
        }

        return $settingsService->get($key, $default);
    }
}
