
import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
                        404
                    </p>
                    <h1 className="text-2xl font-bold text-slate-900 mb-3">
                        Page introuvable
                    </h1>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        La page que vous cherchez n'existe pas ou a été déplacée.
                        Pas de panique — retournez à l'accueil pour trouver ce qu'il vous faut.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                    >
                        <Home className="w-4 h-4" />
                        Retour à l'accueil
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
