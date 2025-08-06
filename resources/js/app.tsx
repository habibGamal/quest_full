import '../css/app.css';
import './bootstrap';
import './i18n';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeLanguageAndDirection, getStoredLanguage } from './utils/languageUtils';
import { setupLocaleInterceptor } from './utils/locale';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Initialize language and direction as early as possible
const initializeAppLanguage = () => {
  const storedLanguage = getStoredLanguage();
  initializeLanguageAndDirection(storedLanguage);
};

// Setup locale interceptor to send locale in headers
setupLocaleInterceptor();

// Run immediately
initializeAppLanguage();

// Also ensure it runs when DOM is ready (in case the above runs before DOM is available)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAppLanguage);
} else {
  // DOM is already ready
  initializeAppLanguage();
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
