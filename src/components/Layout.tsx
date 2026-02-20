
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { PhoneCall } from 'lucide-react';
import { PHONE_HREF } from '../data';
import LegalModal from './LegalModal';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';
import { LegalPage } from '../types';

const Layout: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLegalPage, setActiveLegalPage] = useState<LegalPage>(null);

    // Hash Scroll Handler with Retry & Cross-page support (max 5 retries)
    useEffect(() => {
        let retryCount = 0;
        const maxRetries = 5;

        const handleHashScroll = () => {
            if (location.hash) {
                const id = location.hash.replace('#', '');
                const el = document.getElementById(id);
                if (el) {
                    const offset = 80;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                } else if (retryCount < maxRetries) {
                    retryCount++;
                    setTimeout(handleHashScroll, 100);
                }
            }
        };

        // Attempt scroll immediately and after a short delay to allow rendering
        handleHashScroll();
        const timer = setTimeout(handleHashScroll, 300);

        return () => clearTimeout(timer);
    }, [location]);

    const handleNavigation = (id: string) => {
        if (location.pathname === '/') {
            const el = document.getElementById(id);
            if (el) {
                const offset = 80;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        } else {
            navigate(`/#${id}`);
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 selection:text-cyan-900 font-sans pb-20 md:pb-0">
            <AnimatePresence>
                {activeLegalPage && (
                    <LegalModal page={activeLegalPage} onClose={() => setActiveLegalPage(null)} />
                )}
            </AnimatePresence>

            <Header />

            {/* MOBILE STICKY BAR (CONVERSION BOOSTER) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <button
                    onClick={() => handleNavigation('projets')}
                    className="flex-1 bg-white border border-slate-300 text-slate-900 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                    {t('mobile.quote')}
                </button>
                <a
                    href={PHONE_HREF}
                    className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg animate-pulse active:scale-95 transition-transform"
                >
                    <PhoneCall className="w-4 h-4" />
                    {t('mobile.call')}
                </a>
            </div>

            <main>
                <Outlet />
            </main>

            <Footer scrollTo={handleNavigation} setActiveLegalPage={setActiveLegalPage} />
        </div>
    );
};

export default Layout;
