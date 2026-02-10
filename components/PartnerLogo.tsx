import React from 'react';

interface Partner {
    name: string;
    type: string;
    url?: string;
    lightUrl?: string;
    theme?: string;
    logoClassName?: string;
    style?: string;
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
    const [imgError, setImgError] = React.useState(false);

    if (partner.type === 'image' && partner.url && !imgError) {
        const logoSource = partner.theme === 'light' && partner.lightUrl ? partner.lightUrl : partner.url;

        return (
            <img
                src={logoSource}
                alt={`Logo ${partner.name}`}
                className={`h-12 md:h-16 w-auto object-contain mix-blend-multiply ${partner.logoClassName || ''}`.trim()}
                loading="lazy"
                onError={() => setImgError(true)}
            />
        );
    }

    return (
        <div className={`text-slate-900 text-xl font-bold hover:scale-110 transition-transform whitespace-nowrap ${partner.style || ''}`}>
            {partner.name}
        </div>
    );
};

export default PartnerLogo;
