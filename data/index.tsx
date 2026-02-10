
import { Wrench, Waves, Sun, Flame, Bath, WashingMachine } from 'lucide-react';


// --- CONSTANTS ---
export const PHONE_DISPLAY = "078 657 73 65";
export const PHONE_HREF = "tel:+41786577365";
export const EMAIL = "chappuis.san@bluewin.ch";
export const MAPS_LINK = "https://www.google.com/maps/place/Chappuis+Sanitaire+S%C3%A0rl/@46.4570452,6.3314501,15z/data=!4m6!3m5!1s0x478c479c2696a1bf:0x2e187da6cbb56e61!8m2!3d46.4621692!4d6.342086!16s%2Fg%2F11fmsgpshf?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D";

export const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'A Propos', id: 'apropos' },
  { label: 'Projets', id: 'projets' },
  { label: 'Témoignages', id: 'temoignages' },
  { label: 'FAQ', id: 'faq' },
];

export const SERVICES = [
  {
    id: 'urgences',
    title: 'Intervention Rapide & Dépannage',
    description: 'Le "Sauveur" local : Je suis disponible 7j/7 pour vos urgences vitales sur La Côte.',
    icon: Wrench,
    highlight: true,
    features: [
      "Intervention en 2h à 4h sur zone (Rolle - Nyon - Morges)",
      "Véhicule atelier : 90% des pannes résolues immédiatement",
      "Recherche de fuites (Visuelle & Technique)",
      "Débouchage express (WC, éviers, colonnes)",
      "Remplacement robinetterie & vannes d'arrêt",
      "Réparation chasses d'eau (Geberit & autres)",
      "Dépannage production d'eau chaude (Boilers)"
    ]
  },
  {
    id: 'sdb',
    title: 'Création de Salle de Bains "Clé en main"',
    description: 'Votre projet de A à Z, géré par mon expertise. Du design à la pose du dernier joint.',
    icon: Bath,
    features: [
      "Conception complète & Conseil personnalisé",
      "Transformation Baignoire en Douche à l'italienne",
      "Pose de baignoires (Îlot, Balnéo, Angle)",
      "Installation WC suspendus Geberit & WC Lavants",
      "Adaptation PMR & Seniors (Maintien à domicile sécurisé)",
      "Finitions soignées 'Swiss Finish'",
      "Coordination des travaux avec le carrelage"
    ]
  },
  {
    id: 'traitement',
    title: 'Traitement de l\'Eau & Adoucisseurs',
    description: 'Protégez votre patrimoine immobilier contre le calcaire agressif de notre région.',
    icon: Waves,
    features: [
      "Expertise dureté de l'eau locale",
      "Installation Adoucisseurs & Osmoseurs",
      "Maintenance & Livraison de sel",
      "Filtres anti-boue et anti-tartre",
      "Systèmes de filtration d'eau de boisson",
      "Protection durable de votre tuyauterie"
    ]
  },
  {
    id: 'technique',
    title: 'Chauffe-eau & Thermique',
    description: 'Solutions durables pour votre eau chaude sanitaire. Installation & Transition énergétique.',
    icon: Sun,
    features: [
      "Remplacement Boilers électriques (Toutes marques)",
      "Installation Chauffe-eau Pompe à Chaleur (PAC)",
      "Détartrage & Maintenance préventive",
      "Remplacement groupes de sécurité",
      "Bouclage ECS (Eau chaude instantanée)",
      "Conseil en économie d'énergie"
    ]
  },
  {
    id: 'cuisine',
    title: 'Cuisine & Raccordements Précis',
    description: 'La touche finale de votre cuisine : raccordements invisibles et sécurisés.',
    icon: WashingMachine,
    features: [
      "Collaboration précise avec votre cuisiniste",
      "Raccordement Lave-linge & Lave-vaisselle",
      "Pose éviers & robinetterie (KWC, etc.)",
      "Installation broyeurs d'évier",
      "Raccordement frigos américains",
      "Modifications des arrivées d'eau sur mesure"
    ]
  },
  {
    id: 'canalisations',
    title: 'Inspection & Gaz (Certifié)',
    description: 'Haute technicité : Inspection par caméra et travaux sur gaz certifiés SSIGE.',
    icon: Flame,
    features: [
      "Inspection vidéo par caméra endoscopique",
      "Détection précise de cassures ou racines",
      "Curage haute pression des réseaux",
      "Installations Gaz certifiées SSIGE (Sécurité maximale)",
      "Remise à neuf colonnes de chute",
      "Raccordement aux réseaux communaux"
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "Qui réalisera les travaux chez moi ?",
    answer: "Moi-même, Monsieur Chappuis. Je suis votre interlocuteur unique, de la prise de rendez-vous à la réalisation des travaux. C'est l'assurance d'un travail cohérent, sans sous-traitance, et d'une responsabilité totale engagée sur le résultat."
  },
  {
    question: "Les devis sont-ils gratuits ?",
    answer: "Oui, totalement. Je me déplace gratuitement pour évaluer vos projets de rénovation ou d'installation. C'est l'occasion de vous conseiller sur le meilleur matériel. Seules les recherches de fuites complexes avec matériel spécifique peuvent faire l'objet d'un forfait diagnostic (annoncé à l'avance)."
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Je reste fidèle à ma région : La Côte. J'interviens de Versoix à Morges, en passant par Nyon, Gland, Rolle (mon siège), Aubonne et le pied du Jura. Cette proximité géographique est la clé de ma réactivité et de ma ponctualité."
  },
  {
    question: "Quelles marques installez-vous ?",
    answer: "Je privilégie la qualité durable. Je travaille principalement avec des marques suisses et leaders comme Geberit, KWC, Laufen, ou internationaux comme Villeroy & Boch. Je refuse le matériel 'low-cost' qui ne tient pas dans le temps. Votre tranquillité est ma priorité."
  },
  {
    question: "Travaillez-vous avec des régies ?",
    answer: "Oui, je suis le partenaire de confiance de plusieurs régies immobilières de la région. J'ai l'habitude de gérer la maintenance de parcs immobiliers, avec le tact nécessaire pour intervenir chez les locataires."
  }
];

// --- ASSETS ---
import geberitLogo from '../assets/partners/geberit.png';
import kwcLogo from '../assets/partners/kwc.png';
import getazLogo from '../assets/partners/getaz.png';
import laufenLogo from '../assets/partners/laufen.png';

export const PARTNERS = [
  {
    name: "Sanitas Troesch",
    type: "text",
    style: "font-bold tracking-tight italic"
  },
  {
    name: "Geberit",
    type: "image",
    url: geberitLogo,
    theme: "light"
  },
  {
    name: "Laufen",
    type: "image",
    url: laufenLogo,
    theme: "light"
  },
  {
    name: "KWC",
    type: "image",
    url: kwcLogo,
    theme: "native",
    logoClassName: "opacity-90"
  },
  {
    name: "Getaz-Miauton",
    type: "image",
    url: getazLogo,
    theme: "light"
  }
];


export const TESTIMONIALS = [
  {
    name: 'Jérémie Sordet',
    context: 'Rolle',
    text: 'Service excellent merci beaucoup du travail effectué chez moi. Excellent travail.',
    stars: 5,
    date: 'Il y a 1 mois'
  },
  {
    name: 'Simo Bendidi',
    context: 'Local Guide',
    text: 'Super rapide, serviable et travail minutieux.',
    stars: 5,
    date: 'Il y a 3 ans'
  },
  {
    name: 'Philippe Rosset',
    context: 'Local Guide',
    text: '(Avis 5 étoiles sans commentaire textuel - Client vérifié Google)',
    stars: 5,
    date: 'Il y a 2 ans'
  }
];

export const LOCATIONS = {
  center: ["Rolle", "Mont-sur-Rolle", "Perroy", "Gilly", "Tartegnin", "Essertines-sur-Rolle", "Bursinel", "Dully", "Bursins", "Vinzel", "Luins"],
  east: ["Begnins", "Vich", "Coinsins", "Duillier", "Gland", "Prangins", "Nyon", "Eysins", "Signy-Avenex", "Gren", "Trélex", "Gingins", "Genolier", "Crans-près-Céligny"],
  west: ["Allaman", "Féchy", "Bougy-Villars", "Aubonne", "Lavigny", "Etoy", "Buchillon", "Saint-Prex", "Lussy-sur-Morges", "Villars-sous-Yens", "Denens", "Yens", "Morges", "Vufflens-le-Château"],
  north: ["Burtigny", "Le Vaud", "Marchissy", "Longirod", "Saint-George", "Gimel", "Saint-Oyens", "Saubraz", "Biere", "Berolle", "Mollens", "Ballens", "Apples", "Bussy-Chardonney", "Reverolle", "Clarmont", "Arzier-Le Muids", "Bassins"]
};

export const PROJECTS = [
  {
    title: 'Rénovation Complète',
    img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop',
    tag: 'Rénovation'
  },
  {
    title: 'Installation Technique',
    img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600&auto=format&fit=crop',
    tag: 'Installation'
  },
  {
    title: 'Robinetterie KWC',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=600&auto=format&fit=crop',
    tag: 'Sanitaire'
  }
];
