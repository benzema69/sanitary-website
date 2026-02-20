
import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_HREF, PHONE_DISPLAY, EMAIL, NAV_LINKS } from '../data';
import { TARGET_LOCATIONS } from '../data/zones';
import { useTranslation } from '../contexts/LanguageContext';
import { LegalPage } from '../types';

interface FooterProps {
    scrollTo: (id: string) => void;
    setActiveLegalPage: (page: LegalPage) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollTo, setActiveLegalPage }) => {
    const { t } = useTranslation();
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 pb-24 md:pb-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <div className="font-bold text-xl text-white uppercase tracking-tight mb-4">Chappuis Sanitaire</div>
                    <p className="text-sm leading-relaxed mb-4">
                        {t('footer.description')}
                    </p>
                </div>

                {/* Nav */}
                <div>
                    <h4 className="font-bold text-white mb-4">{t('footer.nav')}</h4>
                    <ul className="space-y-2 text-sm">
                        {NAV_LINKS.map((item) => (
                            <li key={item.id}>
                                <button onClick={() => scrollTo(item.id)} className="hover:text-cyan-400 transition-colors text-left">
                                    {t(`nav.${item.id}`)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-white mb-4">{t('footer.contact')}</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href={PHONE_HREF} className="hover:text-cyan-400 transition-colors">{PHONE_DISPLAY}</a></li>
                        <li><a href={`mailto:${EMAIL}`} className="hover:text-cyan-400 transition-colors">{EMAIL}</a></li>
                        <li>{t('footer.location')}</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-bold text-white mb-4">{t('footer.legal')}</h4>
                    <ul className="space-y-2 text-sm">
                        <li><button onClick={() => setActiveLegalPage('mentions')} className="hover:text-cyan-400 transition-colors">{t('legal.mentions')}</button></li>
                        <li><button onClick={() => setActiveLegalPage('privacy')} className="hover:text-cyan-400 transition-colors">{t('legal.privacy')}</button></li>
                        <li><button onClick={() => setActiveLegalPage('cookies')} className="hover:text-cyan-400 transition-colors">{t('legal.cookies')}</button></li>
                    </ul>
                </div>

                {/* SEO LINKS - HIDDEN ON MOBILE BUT VISIBLE FOR BOTS/DESKTOP */}
                <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-slate-800">
                    <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">{t('footer.interventions')}</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
                        {TARGET_LOCATIONS.slice(0, 30).map((loc) => (
                            <Link
                                key={loc.slug}
                                to={`/plombier/${loc.slug}`}
                                className="hover:text-cyan-500 transition-colors"
                            >
                                {t('footer.plumber')} {loc.name}
                            </Link>
                        ))}
                        <span className="text-slate-700 mx-2">|</span>
                        {TARGET_LOCATIONS.slice(0, 15).map((loc) => (
                            <Link
                                key={`san-${loc.slug}`}
                                to={`/sanitaire/${loc.slug}`}
                                className="hover:text-cyan-500 transition-colors"
                            >
                                {t('footer.sanitary')} {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Chappuis Sanitaire Sàrl. {t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
