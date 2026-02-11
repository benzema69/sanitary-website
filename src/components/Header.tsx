
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHONE_DISPLAY, PHONE_HREF, NAV_LINKS } from '../data';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../contexts/LanguageContext';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Simplified Navigation Logic
    const handleNavigation = (id: string) => {
        setMobileMenuOpen(false);
        navigate(`/${id}`);
    };

    const isHome = location.pathname === '/';

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 flex items-center shadow-sm transition-all duration-300 ${isHome ? 'h-20' : 'h-16'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex flex-col cursor-pointer group select-none" onClick={() => handleNavigation('hero')}>
                        <span className="font-bold text-xl tracking-tight text-slate-900 uppercase leading-none group-hover:text-cyan-700 transition-colors duration-300">Chappuis</span>
                        <span className="text-xs tracking-widest text-slate-500 uppercase mt-1">Sanitaire Sàrl</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
                        {NAV_LINKS.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => handleNavigation(item.id)}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${location.pathname === `/${item.id}`
                                    ? 'bg-cyan-50 text-cyan-700 font-semibold'
                                    : 'hover:text-cyan-700 hover:bg-slate-50'
                                    }`}
                            >
                                {t(`nav.${item.id}`)}
                            </button>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a
                            href={PHONE_HREF}
                            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                        >
                            <Phone className="w-4 h-4" />
                            <span>{PHONE_DISPLAY}</span>
                        </a>
                        <LanguageSwitcher />

                        <button
                            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-md transition-transform active:scale-90"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-6 overflow-y-auto pb-32"
                    >
                        {NAV_LINKS.concat({ label: 'Contact', id: 'contact' }).map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className={`text-2xl font-bold text-left py-4 border-b border-slate-100 ${location.pathname === `/${item.id}` ? 'text-cyan-600' : 'text-slate-900'
                                    }`}
                            >
                                {t(`nav.${item.id}`)}
                            </button>
                        ))}
                        <div className="mt-4 p-6 bg-slate-50 rounded-xl">
                            <p className="text-sm text-slate-500 mb-2 font-bold uppercase">Urgences 24/7</p>
                            <a href={PHONE_HREF} className="text-2xl font-bold text-slate-900 block">{PHONE_DISPLAY}</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
