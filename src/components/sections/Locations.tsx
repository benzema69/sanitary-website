
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { TARGET_LOCATIONS } from '../../data/zones';
import { useTranslation } from '../../contexts/LanguageContext';

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
};

const Locations: React.FC = () => {
    const { t } = useTranslation();

    // Derive lists from single source of truth
    const regions = {
        center: TARGET_LOCATIONS.filter(l => l.region === 'center').map(l => l.name),
        east: TARGET_LOCATIONS.filter(l => l.region === 'east').map(l => l.name),
        west: TARGET_LOCATIONS.filter(l => l.region === 'west').map(l => l.name),
        north: TARGET_LOCATIONS.filter(l => l.region === 'north').map(l => l.name),
    };

    return (
        <div className="py-16 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto max-w-6xl px-6">
                <motion.div
                    className="flex flex-col md:flex-row md:items-center gap-3 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100">
                        <MapPin className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">{t('locations.title')}</h2>
                        <p className="text-slate-500 text-sm">{t('locations.subtitle')}</p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { title: t('locations.center'), list: regions.center, color: "border-cyan-500" },
                        { title: t('locations.east'), list: regions.east, color: "border-slate-300" },
                        { title: t('locations.west'), list: regions.west, color: "border-slate-300" },
                        { title: t('locations.north'), list: regions.north, color: "border-slate-300" },
                    ].map((zone, i) => (
                        <motion.div
                            key={i}
                            variants={scaleIn}
                            className={`bg-white p-6 rounded-xl border-t-4 shadow-sm ${zone.color}`}
                        >
                            <h3 className="font-bold text-slate-900 mb-4 text-base">{zone.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {zone.list.map(loc => (
                                    <span key={loc} className="inline-block px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="mt-8 text-xs text-center text-slate-400 italic">
                    {t('locations.note')}
                </p>
            </div>
        </div>
    );
};

export default Locations;
