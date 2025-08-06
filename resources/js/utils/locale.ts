// Utility to handle locale in requests

import { router } from "@inertiajs/react";

export const getStoredLocale = (): string => {
  return localStorage.getItem('locale') || 'en';
};

export const setStoredLocale = (locale: string): void => {
  localStorage.setItem('locale', locale);
};

// Add locale header to Inertia requests
export const setupLocaleInterceptor = () => {
  // Setup Axios interceptor if you use Axios
  if (typeof window !== 'undefined' && window.axios) {
    window.axios.interceptors.request.use((config) => {
      config.headers['X-Locale'] = getStoredLocale();
      return config;
    });
  }

  // Setup fetch interceptor
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const [resource, config = {}] = args;

    config.headers = {
      ...config.headers,
      'X-Locale': getStoredLocale(),
    };

    return originalFetch(resource, config);
  };
};

// Function to change locale and reload page
export const changeLocale = (newLocale: string) => {
  setStoredLocale(newLocale);
  // Reload the page to apply the new locale
  router.reload();
};
