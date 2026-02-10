
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
    isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900"
                >
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/30" />

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        {/* Logo monogram */}
                        <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="48" stroke="url(#splash-grad)" strokeWidth="2" />
                                <text x="50" y="58" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="36" fill="white">CS</text>
                                <defs>
                                    <linearGradient id="splash-grad" x1="0" y1="0" x2="100" y2="100">
                                        <stop offset="0%" stopColor="#06b6d4" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>

                        {/* Company name */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <h1 className="text-2xl font-bold text-white tracking-tight">
                                Chappuis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Sanitaire</span>
                            </h1>
                            <p className="text-slate-500 text-sm mt-1 font-medium">Sàrl — Rolle, La Côte</p>
                        </motion.div>

                        {/* Loading bar */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 120 }}
                            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
