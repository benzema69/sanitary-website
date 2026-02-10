
import React from 'react';

interface Partner {
    name: string;
    type: string;
    url?: string;
    style?: string;
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
    if (partner.type === 'image' && partner.url) {
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
        <div className={`text-white text-xl opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap ${partner.style || ''}`}>
            {partner.name}
        </div>
    );
};

export default PartnerLogo;
