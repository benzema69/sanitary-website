
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Section from '../Section';
import { useTranslation } from '../../contexts/LanguageContext';

const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const About: React.FC = () => {
    const { t } = useTranslation();
    const bulletKeys = ['about.bullet.1', 'about.bullet.2', 'about.bullet.3', 'about.bullet.4'];

    return (
        <Section id="apropos" className="bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="absolute inset-0 bg-cyan-600 rounded-lg transform translate-x-3 translate-y-3"></div>
                        <picture>
                            <source srcSet="/images/about-profile.webp" type="image/webp" />
                            <img
                                src="/images/about-profile.jpg"
                                alt="Travail de plomberie de précision"
                                className="rounded-lg shadow-xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full bg-slate-200"
                                loading="lazy"
                            />
                        </picture>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('about.title')}</h2>
                        <div className="space-y-6">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {t('about.text.1')}
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {t('about.text.2')}
                            </p>

                            <ul className="space-y-4 mt-4">
                                {bulletKeys.map((key, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1">
                                            <ShieldCheck className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <span>{t(key)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default About;
