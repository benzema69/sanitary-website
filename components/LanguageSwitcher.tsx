
import React from 'react';
import { useTranslation, Locale } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const flags: Record<Locale, string> = {
    fr: '🇫🇷',
    en: '🇬🇧',
    de: '🇩🇪',
};

const labels: Record<Locale, string> = {
    fr: 'FR',
    en: 'EN',
    de: 'DE',
};

const LanguageSwitcher: React.FC = () => {
    const { locale, setLocale } = useTranslation();
    const locales: Locale[] = ['fr', 'en', 'de'];

    return (
        <div className="relative group">
            <button
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                aria-label="Changer de langue"
            >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold">{labels[locale]}</span>
            </button>
            <div className="absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px] z-50 py-1">
                {locales.map((loc) => (
                    <button
                        key={loc}
                        onClick={() => setLocale(loc)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 ${locale === loc ? 'text-cyan-600 font-bold' : 'text-slate-700 dark:text-slate-300'
                            }`}
                    >
                        <span>{flags[loc]}</span>
                        <span>{labels[loc]}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
