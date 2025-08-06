import { useTranslation } from 'react-i18next';
import { Button } from '@/Components/ui/button';
import { useEffect, useState } from 'react';

export default function LanguageTest() {
  const { t, i18n } = useTranslation();
  const [docInfo, setDocInfo] = useState({
    dir: '',
    lang: '',
    localStorage: ''
  });

  useEffect(() => {
    const updateDocInfo = () => {
      setDocInfo({
        dir: document.documentElement.dir,
        lang: document.documentElement.lang,
        localStorage: localStorage.getItem('i18nextLng') || 'not set'
      });
    };

    updateDocInfo();
    const interval = setInterval(updateDocInfo, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">{t('nav.home')}</h1>

      {/* Debug Information */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Debug Information:</h3>
        <p>i18n language: {i18n.language}</p>
        <p>i18n direction: {i18n.dir()}</p>
        <p>Document lang: {docInfo.lang}</p>
        <p>Document dir: {docInfo.dir}</p>
        <p>LocalStorage: {docInfo.localStorage}</p>
      </div>

      <div className="space-x-4 rtl:space-x-reverse">
        <Button onClick={toggleLanguage}>
          Switch to {i18n.language === 'en' ? 'العربية' : 'English'}
        </Button>
        <Button onClick={refreshPage} variant="outline">
          Refresh Page
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">{t('hero.title.mystical')} {t('hero.title.marketing')}</h2>
        <p>{t('hero.subtitle')}</p>

        {/* Arabic Text Samples */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Font Test:</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Current font family will change based on language</p>
            <p className="text-lg">English: The quick brown fox jumps over the lazy dog</p>
            <p className="text-lg" lang="ar">العربية: النص العربي يستخدم خط تجوال</p>
            <p className="text-lg">Mixed: Hello مرحبا Welcome أهلا وسهلا</p>
          </div>
        </div>
      </div>
    </div>
  );
}
