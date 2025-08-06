import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/ui/popover';
import { initializeLanguageAndDirection } from '@/utils/languageUtils';
import { changeLocale } from '@/utils/locale';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
  },
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (languageCode: string) => {
    // Update i18n for immediate UI change
    i18n.changeLanguage(languageCode);

    // Store locale and reload page to get fresh backend data
    changeLocale(languageCode);

    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 w-full justify-start bg-background/50 backdrop-blur-sm border-border/50 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-200"
          aria-label={t('common.language')}
        >
          <Globe className="h-4 w-4" />
          <span className="inline">{currentLanguage.flag}</span>
          <span className="inline">{currentLanguage.nativeName}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-1 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl" align="end">
        <div className="space-y-0.5">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant="ghost"
              className={`w-full justify-start gap-3 h-auto py-3 px-3 rounded-lg transition-all duration-200 ${
                i18n.language === language.code
                  ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15"
                  : "hover:bg-primary/5 hover:text-primary text-foreground"
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="text-lg min-w-[24px]">{language.flag}</span>
              <div className="flex flex-col items-start space-y-0.5 flex-1">
                <span className="text-sm font-medium leading-none">{language.nativeName}</span>
                <span className="text-xs text-muted-foreground leading-none">{language.name}</span>
              </div>
              {i18n.language === language.code && (
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              )}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
