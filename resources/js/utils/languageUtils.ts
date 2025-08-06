/**
 * Language and direction utilities
 */

export const initializeLanguageAndDirection = (language: string) => {
  const isRtl = language === 'ar';

  // Set document direction
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  // Set document language
  document.documentElement.lang = language;

  // Add class for CSS targeting if needed
  document.documentElement.classList.toggle('rtl', isRtl);
  document.documentElement.classList.toggle('ltr', !isRtl);

  // Store in localStorage for consistency
  localStorage.setItem('i18nextLng', language);

  console.log(`Language initialized: ${language}, Direction: ${isRtl ? 'RTL' : 'LTR'}`);
};

export const getStoredLanguage = (): string => {
  // Check localStorage first, then fallback to document lang, then default to 'en'
  return localStorage.getItem('i18nextLng') ||
         document.documentElement.lang ||
         'en';
};

export const isRtlLanguage = (language: string): boolean => {
  return language === 'ar';
};
