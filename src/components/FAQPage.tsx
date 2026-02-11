
import React from 'react';
import FAQ from './sections/FAQ';

const FAQPage: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = React.useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <FAQ
            toggleAccordion={toggleAccordion}
            activeAccordion={activeAccordion}
        />
    );
};

export default FAQPage;
