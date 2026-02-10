
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import Section from '../Section';
import { PHONE_DISPLAY, PHONE_HREF } from '../../data';

interface HeroProps {
    scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
    return (
        <Section id="hero" className="min-h-[92vh] flex items-center relative overflow-hidden bg-slate-50">
            {/* Organic Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-cyan-100/40 rounded-full blur-3xl animate-blob opacity-60 mix-blend-multiply" />
                <div className="absolute top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-blue-100/40 rounded-full blur-3xl animate-blob animation-delay-2000 opacity-60 mix-blend-multiply" />
                <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-slate-200/40 rounded-full blur-3xl animate-blob animation-delay-4000 opacity-60 mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Typography & Call to Action */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full mb-8 shadow-sm"
                    >
                        <Star className="w-3 h-3 text-cyan-600 fill-cyan-600" />
                        Excellence Sanitaire depuis 2004
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
                        Chappuis <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Sanitaire</span> Sàrl.
                    </h1>

                    <p className="text-2xl md:text-3xl font-medium text-slate-700 mb-8">
                        L'Art du Sanitaire Suisse. <span className="text-slate-400 font-normal">Expérience depuis 1980.</span>
                    </p>

                    <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed font-light">
                        Expertise technique et finition haut de gamme pour vos projets les plus exigeants sur La Côte.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <button
                            onClick={() => scrollTo('contact')}
                            className="group bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3"
                        >
                            Démarrer un projet
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href={PHONE_HREF}
                            className="group px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl text-lg font-semibold hover:border-cyan-200 hover:bg-cyan-50/50 hover:text-cyan-800 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse group-hover:bg-cyan-500" />
                            {PHONE_DISPLAY}
                        </a>
                    </div>

                    <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-cyan-600" />
                            <span>Garantie SIA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-cyan-600" />
                            <span>Intervention 7j/7</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Dynamic Visuals (Glassmorphism Cards) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block h-[600px]"
                >
                    {/* Main Image Card */}
                    <div className="absolute top-10 right-10 w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-20">
                        <img
                            src="https://images.unsplash.com/photo-1620626012053-15332153f871?q=80&w=800&auto=format&fit=crop"
                            alt="Salle de bain luxe"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Réalisation</p>
                            <p className="text-xl font-bold">Salle de Bain Master</p>
                        </div>
                    </div>

                    {/* Floating Glass Element 1 */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 left-0 w-64 bg-white/80 backdrop-blur-md p-5 rounded-xl border border-white/50 shadow-xl z-30"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-sm">Satisfaction Client</p>
                                <p className="text-xs text-slate-500 mt-1">"Un travail d'orfèvre, merci pour cette rénovation incroyable."</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Glass Element 2 */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-0 right-0 w-48 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-2xl z-10 text-white"
                    >
                        <div className="text-center">
                            <p className="text-3xl font-bold text-cyan-400">20+</p>
                            <p className="text-xs font-medium text-slate-300 uppercase tracking-wider mt-1">Années d'expérience</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
