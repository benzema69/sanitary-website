import React from 'react';

interface Partner {
    name: string;
    type: string;
    url?: string;
    lightUrl?: string;
    theme?: 'light' | 'dark' | 'native';
    logoClassName?: string;
    style?: string;
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
<<<<<<< HEAD
    const [imgError, setImgError] = React.useState(false);

    if (partner.type === 'image' && partner.url && !imgError) {
=======
    if (partner.type === 'image' && partner.url) {
        const logoSource = partner.theme === 'light' && partner.lightUrl ? partner.lightUrl : partner.url;
>>>>>>> 90422f1a0f9d07f57ba851d1d2c3d45a776d983e
        return (
            <img
                src={logoSource}
                alt={`Logo ${partner.name}`}
                className={`h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300 ${partner.logoClassName || ''}`.trim()}
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
