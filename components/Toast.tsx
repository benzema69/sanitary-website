import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

export type ToastType = 'success' | 'error';

interface ToastProps {
    message: string;
    type: ToastType;
    isVisible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 20, x: '-50%' }}
                    className={`fixed bottom-8 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-xl border ${type === 'success'
                            ? 'bg-white border-green-100 text-slate-800'
                            : 'bg-white border-red-100 text-slate-800'
                        }`}
                >
                    <div className={`p-1 rounded-full ${type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                    </div>

                    <p className="font-medium text-sm">{message}</p>

                    <button
                        onClick={onClose}
                        className="ml-4 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={16} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
