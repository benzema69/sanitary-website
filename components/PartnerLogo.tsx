
import React from 'react';
import SafeImage from './ui/SafeImage';

interface Partner {
    name: string;
    type: string;
    url?: string;
    style?: string;
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
    if (partner.type === 'image' && partner.url) {
        return (
            <SafeImage
                src={partner.url}
                alt={`Logo ${partner.name}`}
                className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                containerClassName="h-16 md:h-20 w-auto bg-transparent overflow-visible"
                fallbackText={`Logo ${partner.name} indisponible`}
            />
        );
    }

    return (
        <div className={`text-slate-900 text-xl hover:scale-110 transition-transform whitespace-nowrap ${partner.style || ''}`}>
            {partner.name}
        </div>
    );
};

export default PartnerLogo;
