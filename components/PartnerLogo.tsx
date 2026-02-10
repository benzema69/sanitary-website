
import React from 'react';

interface Partner {
    name: string;
    type: 'image' | 'text';
    url?: string;
    style?: string;
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
    if (partner.url) {
        return (
            <img
                src={partner.url}
                alt={`Logo ${partner.name}`}
                className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                loading="lazy"
            />
        );
    }

    return (
        <div className={`text-slate-900 text-xl hover:scale-110 transition-transform whitespace-nowrap ${partner.style || ''}`} aria-label={`Fallback logo ${partner.name}`}>
            {partner.name}
        </div>
    );
};

export default PartnerLogo;
