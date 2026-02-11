
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServicePage from './ServicePage';
import { SERVICE_DETAILS } from '../data/serviceDetails';
import { TESTIMONIALS, FAQ_ITEMS } from '../data';
import NotFound from './NotFound';
import { useTranslation } from '../contexts/LanguageContext';

const ServicePageWrapper: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    // We need translation context here to translate title/desc for SEO
    // Assuming useTranslation is available from the parent provider
    // But we need to import it.
    const { t } = useTranslation();

    // Check if service exists
    if (!id || !SERVICE_DETAILS[id]) {
        return <NotFound />;
    }

    const serviceContent = SERVICE_DETAILS[id];

    // SEO Management for Service Pages
    React.useEffect(() => {
        const title = `${t(serviceContent.title)} | Chappuis Sanitaire Sàrl`;
        const description = t(serviceContent.description);

        document.title = title;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }

        // Restore to default on unmount is handled by Home component mounting
    }, [serviceContent, t]);

    const handleOpenChat = () => {
        // We need a way to open chat from here, but AIChat is in Home.
        // For now, let's navigate to home with a hash or state to open chat
        // OR better: The wrapper shouldn't assume it's inside Home.
        // But the previous implementation had ServicePage INSIDE Home.
        // We will navigate back to home to open chat for now, or implement Context for Chat.
        navigate('/#contact');
    };

    return (
        <ServicePage
            content={serviceContent}
            onBack={() => navigate('/')}
            onOpenChat={handleOpenChat}
            testimonials={TESTIMONIALS}
            faqItems={FAQ_ITEMS}
        />
    );
};

export default ServicePageWrapper;
