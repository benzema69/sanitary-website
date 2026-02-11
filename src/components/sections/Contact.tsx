
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, FileText, MapPin, ArrowRight } from 'lucide-react';
import Section from '../Section';
import { PHONE_HREF, PHONE_DISPLAY, MAPS_LINK } from '../../data';
import { useTranslation } from '../../contexts/LanguageContext';

interface ContactProps {
    scrollTo: (id: string) => void;
}

const Contact: React.FC<ContactProps> = ({ scrollTo }) => {
    const { t } = useTranslation();
    return (
        <Section id="contact" className="bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/10 skew-x-12 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-cyan-900/10 -skew-x-12 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Pastille 1: Phone */}
                    <motion.a
                        href={PHONE_HREF}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer group"
                    >
                        <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-900/20">
                            <PhoneCall className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('contact.call.title')}</h3>
                        <p className="text-slate-400 text-sm mb-4">{t('contact.call.text')}</p>
                        <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{PHONE_DISPLAY}</span>
                    </motion.a>

                    {/* Pastille 2: Quote (Scrolls to form) */}
                    <motion.button
                        onClick={() => scrollTo('projets')}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer group"
                    >
                        <div className="w-16 h-16 bg-white text-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('contact.quote.title')}</h3>
                        <p className="text-slate-400 text-sm mb-4">{t('contact.quote.text')}</p>
                        <span className="inline-flex items-center gap-2 text-white font-bold border-b border-white/20 pb-1 group-hover:border-white transition-colors">
                            {t('contact.quote.btn')} <ArrowRight className="w-4 h-4" />
                        </span>
                    </motion.button>

                    {/* Pastille 3: Address */}
                    <motion.a
                        href={MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer group"
                    >
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('contact.find.title')}</h3>
                        <p className="text-slate-400 text-sm mb-4">{t('contact.find.text')}</p>
                        <div className="text-white font-bold leading-tight">
                            Ch. de Plein-Air 1<br />1180 Rolle
                        </div>
                    </motion.a>
                </motion.div>

                {/* D2: Google Maps Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-12 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
                >
                    <iframe
                        title="Chappuis Sanitaire - Rolle"
                        src="https://maps.google.com/maps?q=Chemin+de+Plein-Air+1,+1180+Rolle&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="280"
                        style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </Section >
    );
};

export default Contact;
