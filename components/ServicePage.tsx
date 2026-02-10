
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Star, ChevronDown, CheckCircle } from 'lucide-react';
import { ServiceDetail } from '../data/serviceDetails';
import { useTranslation } from '../contexts/LanguageContext';

interface ServicePageProps {
    content: ServiceDetail;
    onBack: () => void;
    onOpenChat: () => void;
    testimonials: any[];
    faqItems: any[];
}

const ServicePage: React.FC<ServicePageProps> = ({ content, onBack, onOpenChat }) => {
    const { t } = useTranslation();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [content.id]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-24 pb-20 min-h-screen bg-white"
        >
            <div className="container mx-auto max-w-4xl px-6">

                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-cyan-700 transition-colors mb-8 group font-medium"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    {t('service_page.back')}
                </button>

                {/* Header */}
                <div className="mb-12">
                    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                        <content.benefitIcon className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {t(content.title)}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-cyan-500 pl-6">
                        {t(content.fullDescription)}
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            Avantages
                        </h3>
                        <ul className="space-y-4">
                            {content.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                                    <span className="text-slate-700 font-medium">{t(benefit)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <content.processIcon className="w-32 h-32" />
                        </div>
                        <h3 className="text-xl font-bold mb-6 relative z-10">Notre Processus</h3>
                        <ol className="space-y-6 relative z-10">
                            {content.process.map((step, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white font-bold text-sm shrink-0">
                                        {idx + 1}
                                    </span>
                                    <span className="pt-1 text-slate-200">{t(step)}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-12 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Besoin de ce service ?</h2>
                        <p className="text-cyan-100 mb-8 max-w-lg mx-auto">
                            Contactez-nous directement ou utilisez notre assistant virtuel pour obtenir un devis rapide.
                        </p>
                        <button
                            onClick={onOpenChat}
                            className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto"
                        >
                            <MessageCircle className="w-5 h-5" />
                            {t('service_page.cta')}
                        </button>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ServicePage;
