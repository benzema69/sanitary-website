import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import fr from '../locales/fr.json';
import en from '../locales/en.json';
import de from '../locales/de.json';

export type Locale = 'fr' | 'en' | 'de';

const translations: Record<Locale, Record<string, string>> = { fr, en, de };

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
    locale: 'fr',
    setLocale: () => { },
    t: (key: string) => key,
});

export const useTranslation = () => useContext(LanguageContext);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [locale, setLocaleState] = useState<Locale>(() => {
        const saved = localStorage.getItem('lang') as Locale;
        return saved && translations[saved] ? saved : 'fr';
    });

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('lang', newLocale);
        document.documentElement.lang = newLocale;
    }, []);

    const t = useCallback((key: string): string => {
        return translations[locale]?.[key] || translations['fr']?.[key] || key;
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
