
import React from 'react';
import Contact from './sections/Contact';

const ContactPage: React.FC = () => {
    // Contact attends scrollTo prop pour le bouton devis qui scrolle vers "projets"
    // Ici, "projets" n'est pas sur la page.
    // Si on est sur /contact, le bouton devis devrait rediriger vers /projets ou ouvrir un formulaire.
    // Mais ContactSection a un bouton "Demander un devis" (Quote).
    // Sur la page Home, ça scrolle vers #projets.
    // Sur la page Contact dédiée, nous n'avons pas la section Projets.
    // Solution : Rediriger vers /projets.

    // Mais wait, ContactSection a 3 "pastilles".
    // 1. Appeler -> href tel:
    // 2. Devis -> onClick scrollTo('projets')
    // 3. Trouver -> href maps

    // On doit adapter ContactSection ou passer une fonction qui navigue.
    // Je vais passer une fonction qui fait window.location = '/projets' ou navigate('/projets').
    // Mais ContactSection attend (id: string) => void.

    const simpleScrollTo = (id: string) => {
        if (id === 'projets') {
            window.location.href = '/projets';
        }
    };

    return (
        <Contact scrollTo={simpleScrollTo} />
    );
};

export default ContactPage;
