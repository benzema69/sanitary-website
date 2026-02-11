import React, { useState, useRef, useEffect } from 'react';
import { Phone, Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AIChat, { AIChatHandle } from './AIChat';
import { PHONE_DISPLAY, PHONE_HREF, NAV_LINKS, FAQ_ITEMS, TESTIMONIALS } from '../data';
import { sendProjectEmail } from '../services/emailService';

// Component Imports
import LegalModal from './LegalModal';
import Hero from './sections/Hero';
import ServicesSection from './sections/Services';
import Partners from './sections/Partners';
import About from './sections/About';
import Locations from './sections/Locations';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Toast, { ToastType } from './Toast';
import SplashScreen from './SplashScreen';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../contexts/LanguageContext';

// Types
type LegalPage = 'mentions' | 'privacy' | 'cookies' | null;

const Home: React.FC = () => {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', description: '' });
    const [activeLegalPage, setActiveLegalPage] = useState<LegalPage>(null);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [areServicesLoading, setAreServicesLoading] = useState(true);
    const [showSplash, setShowSplash] = useState(true);

    // UX State
    const [activeSection, setActiveSection] = useState('hero');
    const [toast, setToast] = useState<{ message: string; type: ToastType; isVisible: boolean }>({
        message: '',
        type: 'success',
        isVisible: false
    });

    // SEO Management
    useEffect(() => {
        document.title = "Chappuis Sanitaire Sàrl | Plombier Rolle & La Côte (Vaud)";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', "Artisan sanitaire qualifié depuis 2004. Dépannage urgence 7j/7, rénovation salle de bain, détartrage boiler et adoucisseurs. Intervention rapide à Rolle, Nyon, Morges et Aubonne.");
        }

        // Inject JSON-LD Schema for LocalBusiness
        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            "name": "Chappuis Sanitaire Sàrl",
            "image": "https://chappuis-sanitaire.ch/images/hero-card.jpg",
            "@id": "https://chappuis-sanitaire.ch",
            "url": "https://chappuis-sanitaire.ch",
            "telephone": "+41786577365",
            "email": "chappuis.san@bluewin.ch",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chemin de Plein-Air 1",
                "addressLocality": "Rolle",
                "postalCode": "1180",
                "addressCountry": "CH"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.4621692,
                "longitude": 6.342086
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "07:30",
                "closes": "18:00"
            },
            "sameAs": [
                "https://www.local.ch/fr/d/rolle/1180/sanitaire/chappuis-sanitaire-sarl-8m2"
            ]
        });
        document.head.appendChild(schemaScript);

        return () => {
            document.head.removeChild(schemaScript);
        };
    }, []);

    // Scroll Spy for Active Link
    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_LINKS.map(link => link.id);

            // Find the current section
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            // Special case for Hero (top of page)
            if (window.scrollY < 100) {
                setActiveSection('hero');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const showToast = (message: string, type: ToastType) => {
        setToast({ message, type, isVisible: true });
    };

    const closeToast = () => {
        setToast(prev => ({ ...prev, isVisible: false }));
    };

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const aiChatRef = useRef<AIChatHandle>(null);

    useEffect(() => {
        // Simulate data loading delay for services
        const timer = setTimeout(() => {
            setAreServicesLoading(false);
        }, 1500);
        // Dismiss splash screen
        const splashTimer = setTimeout(() => setShowSplash(false), 2000);
        return () => { clearTimeout(timer); clearTimeout(splashTimer); };
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitting(true);

        const success = await sendProjectEmail(formData);

        setIsFormSubmitting(false);
        if (success) {
            setFormSuccess(true);
            showToast("Message envoyé avec succès ! Nous vous recontacterons rapidement.", 'success');
        } else {
            showToast("Erreur lors de l'envoi. Veuillez nous appeler directement.", 'error');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAIProjectStart = () => {
        if (aiChatRef.current) {
            aiChatRef.current.openWithContext("Je souhaite décrire mon projet pour obtenir un devis. Peux-tu m'aider ?");
        }
    };

    const handleOpenChatWithContext = (context: string) => {
        if (aiChatRef.current) {
            aiChatRef.current.openWithContext(context);
        }
    };

    const handleAIProjectData = (data: { name: string; phone: string; email: string; description: string }) => {
        setFormData(data);
        setFormSuccess(true);
        // Optionally scroll to the success message (we might need to switch back to home if we are on service page)
        setTimeout(() => {
            const el = document.getElementById('projets');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 selection:text-cyan-900 font-sans pb-20 md:pb-0">
            <SplashScreen isVisible={showSplash} />
            <AIChat ref={aiChatRef} onProjectData={handleAIProjectData} />
            <ScrollToTop />
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={closeToast}
            />

            <AnimatePresence>
                {activeLegalPage && (
                    <LegalModal page={activeLegalPage} onClose={() => setActiveLegalPage(null)} />
                )}
            </AnimatePresence>

            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20 flex items-center shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex flex-col cursor-pointer group select-none" onClick={() => { window.scrollTo(0, 0); }}>
                        <span className="font-bold text-xl tracking-tight text-slate-900 uppercase leading-none group-hover:text-cyan-700 transition-colors duration-300">Chappuis</span>
                        <span className="text-xs tracking-widest text-slate-500 uppercase mt-1">Sanitaire Sàrl</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
                        {NAV_LINKS.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollTo(item.id)}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${activeSection === item.id
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

            {/* MOBILE STICKY BAR (CONVERSION BOOSTER) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <button
                    onClick={() => scrollTo('projets')}
                    className="flex-1 bg-white border-slate-300 text-slate-900 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                    Devis gratuit
                </button>
                <a
                    href={PHONE_HREF}
                    className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg animate-pulse active:scale-95 transition-transform"
                >
                    <PhoneCall className="w-4 h-4" />
                    Appeler
                </a>
            </div>

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
                                onClick={() => scrollTo(item.id)}
                                className={`text-2xl font-bold text-left py-4 border-b border-slate-100 ${activeSection === item.id ? 'text-cyan-600' : 'text-slate-900'
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

            {/* MAIN CONTENT SWITCHER */}
            <main className="pt-20">
                <Hero scrollTo={scrollTo} />
                <ServicesSection
                    areServicesLoading={areServicesLoading}
                />
                <Partners />
                <About />
                <Locations />
                <Projects
                    handleAIProjectStart={handleAIProjectStart}
                    formSuccess={formSuccess}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    setFormSuccess={setFormSuccess}
                    setFormData={setFormData}
                    isFormSubmitting={isFormSubmitting}
                />
                <Testimonials />
                <FAQ
                    toggleAccordion={toggleAccordion}
                    activeAccordion={activeAccordion}
                />
                <Contact scrollTo={scrollTo} />
            </main>

            <Footer scrollTo={scrollTo} setActiveLegalPage={setActiveLegalPage} />
        </div>
    );
};

export default Home;
