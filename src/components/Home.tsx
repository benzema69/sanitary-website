import React, { useState, useRef, useEffect } from 'react';
import AIChat, { AIChatHandle } from './AIChat';
import { FAQ_ITEMS } from '../data';
import { sendProjectEmail } from '../services/emailService';

// Component Imports
import Hero from './sections/Hero';
import ServicesSection from './sections/Services';
import Partners from './sections/Partners';
import About from './sections/About';
import Locations from './sections/Locations';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import ScrollToTop from './ScrollToTop';
import Toast, { ToastType } from './Toast';
import SplashScreen from './SplashScreen';

const Home: React.FC = () => {
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', description: '' });
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    // const [areServicesLoading, setAreServicesLoading] = useState(true); // REMOVED
    const [showSplash, setShowSplash] = useState(true);

    // UX State
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
        // Dismiss splash screen
        const splashTimer = setTimeout(() => setShowSplash(false), 2000);
        return () => { clearTimeout(splashTimer); };
    }, []);

    // Scroll function for internal links usage (like Hero buttons)
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
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

    const handleAIProjectData = (data: { name: string; phone: string; email: string; description: string }) => {
        setFormData(data);
        setFormSuccess(true);
        setTimeout(() => {
            const el = document.getElementById('projets');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <>
            <SplashScreen isVisible={showSplash} />
            <AIChat ref={aiChatRef} onProjectData={handleAIProjectData} />
            <ScrollToTop />
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={closeToast}
            />

            <div className="pt-20">
                <Hero scrollTo={scrollTo} />
                <ServicesSection />
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
            </div>
        </>
    );
};

export default Home;
