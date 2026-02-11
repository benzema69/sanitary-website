
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Section from '../Section';
import { PHONE_DISPLAY, PHONE_HREF } from '../../data';
import { useTranslation } from '../../contexts/LanguageContext';

interface HeroProps {
    scrollTo: (id: string) => void;
}

const statsKeys = [
    { numericValue: 5000, suffix: '+', labelKey: 'stats.interventions' },
    { numericValue: 5, suffix: '★', labelKey: 'stats.satisfaction' },
    { numericValue: 20, suffix: 'min', labelKey: 'stats.urgency' },
    { displayValue: '7j/7', labelKey: 'stats.availability' },
    { numericValue: 100, suffix: '%', labelKey: 'stats.quality' },
];

/** Hook: counts from 0 → target when element is visible */
const useCountUp = (target: number, duration = 2000, inView: boolean) => {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!inView || hasAnimated.current) return;
        hasAnimated.current = true;

        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const interval = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, interval);

        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return count;
};

const AnimatedStat: React.FC<{ stat: typeof statsKeys[0]; inView: boolean }> = ({ stat, inView }) => {
    const { t } = useTranslation();
    const numTarget = (stat as any).numericValue ?? 0;
    const count = useCountUp(numTarget, numTarget > 1000 ? 2500 : 1500, inView);
    const displayValue = (stat as any).displayValue
        ? (stat as any).displayValue
        : `${count.toLocaleString('fr-CH')}${(stat as any).suffix || ''}`;

    return (
        <motion.div
            whileHover={{ y: -4, borderColor: '#06b6d4' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white border-2 border-slate-200 rounded-2xl px-5 py-6 text-center cursor-default"
        >
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1 tabular-nums">
                {displayValue}
            </p>
            <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide leading-tight">
                {t(stat.labelKey)}
            </p>
        </motion.div>
    );
};

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
    const { t } = useTranslation();
    const statsRef = useRef<HTMLDivElement>(null);
    const [statsInView, setStatsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Section id="hero" className="min-h-[92vh] flex flex-col justify-center relative overflow-hidden bg-white">
            {/* Background - Rich Gradient Mesh */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/50">
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-100/40 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-cyan-50 rounded-full blur-3xl opacity-50 animate-blob" style={{ animationDelay: '4s' }} />
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center flex-1">
                {/* Left Column: Typography & Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                        {t('hero.title.1')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">{t('hero.title.2')}</span> {t('hero.title.3')}
                    </h1>

                    <p className="text-3xl md:text-5xl font-bold text-slate-300 mb-4 tracking-tight whitespace-nowrap">
                        {t('hero.experience')}
                    </p>

                    <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight">
                        {t('hero.location')}
                    </p>

                    <div className="border-l-4 border-cyan-200 pl-6 mb-12 max-w-lg">
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                            {t('hero.tagline')}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollTo('contact')}
                            className="group w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3"
                        >
                            {t('hero.cta.project')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            href={PHONE_HREF}
                            className="group w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-full text-lg font-semibold hover:border-cyan-400 hover:text-cyan-700 transition-all flex items-center justify-center gap-3"
                        >
                            <Phone className="w-5 h-5 group-hover:text-cyan-600 transition-colors" />
                            {PHONE_DISPLAY}
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Column: Visuals */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative hidden lg:block h-[600px]"
                >
                    <motion.div
                        whileHover={{ scale: 1.02, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="absolute top-10 right-0 w-[420px] h-[560px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/40 rotate-2"
                    >
                        <picture>
                            <source srcSet="/images/hero-card.webp" type="image/webp" />
                            <img
                                src="/images/hero-card.jpg"
                                alt="Salle de bain luxe"
                                className="w-full h-full object-cover"
                            />
                        </picture>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Stats Row — Animated Counters */}
            <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="container mx-auto px-6 pb-10 relative z-20"
            >
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {statsKeys.map((stat, i) => (
                        <AnimatedStat key={i} stat={stat} inView={statsInView} />
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};

export default Hero;
