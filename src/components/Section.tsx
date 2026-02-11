
import React from 'react';

const Section: React.FC<{
    id: string;
    className?: string;
    children: React.ReactNode
}> = ({ id, className = '', children }) => {
    return (
        <section
            id={id}
            className={`py-20 scroll-mt-20 ${className}`} // Added scroll-mt-20 for perfect anchor positioning
        >
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
};

export default Section;
