
import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: { src: string; title: string; tag: string }[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
        if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    }, [currentIndex, images.length, onClose, onNavigate]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    const prev = () => onNavigate((currentIndex - 1 + images.length) % images.length);
    const next = () => onNavigate((currentIndex + 1) % images.length);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={onClose}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Navigation — previous */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            className="absolute left-4 z-10 p-3 text-white/50 hover:text-white transition-all hover:bg-white/10 rounded-full"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    )}

                    {/* Image */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl max-h-[85vh] px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].title}
                            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="text-center mt-4">
                            <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">{images[currentIndex].tag}</span>
                            <h3 className="text-white font-bold text-lg mt-1">{images[currentIndex].title}</h3>
                            <p className="text-white/40 text-sm mt-1">{currentIndex + 1} / {images.length}</p>
                        </div>
                    </motion.div>

                    {/* Navigation — next */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            className="absolute right-4 z-10 p-3 text-white/50 hover:text-white transition-all hover:bg-white/10 rounded-full"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
