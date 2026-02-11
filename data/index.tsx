
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
    title: 'services.urgences.title',
    description: 'services.urgences.description',
    icon: Wrench,
    highlight: true,
    features: [
      "services.urgences.features.0",
      "services.urgences.features.1",
      "services.urgences.features.2",
      "services.urgences.features.3",
      "services.urgences.features.4",
      "services.urgences.features.5",
      "services.urgences.features.6"
    ]
  },
  {
    id: 'sdb',
    title: 'services.sdb.title',
    description: 'services.sdb.description',
    icon: Bath,
    features: [
      "services.sdb.features.0",
      "services.sdb.features.1",
      "services.sdb.features.2",
      "services.sdb.features.3",
      "services.sdb.features.4",
      "services.sdb.features.5",
      "services.sdb.features.6"
    ]
  },
  {
    id: 'traitement',
    title: 'services.traitement.title',
    description: 'services.traitement.description',
    icon: Waves,
    features: [
      "services.traitement.features.0",
      "services.traitement.features.1",
      "services.traitement.features.2",
      "services.traitement.features.3",
      "services.traitement.features.4",
      "services.traitement.features.5"
    ]
  },
  {
    id: 'technique',
    title: 'services.technique.title',
    description: 'services.technique.description',
    icon: Sun,
    features: [
      "services.technique.features.0",
      "services.technique.features.1",
      "services.technique.features.2",
      "services.technique.features.3",
      "services.technique.features.4"
    ]
  },
  {
    id: 'cuisine',
    title: 'services.cuisine.title',
    description: 'services.cuisine.description',
    icon: WashingMachine,
    features: [
      "services.cuisine.features.0",
      "services.cuisine.features.1",
      "services.cuisine.features.2",
      "services.cuisine.features.3",
      "services.cuisine.features.4",
      "services.cuisine.features.5"
    ]
  },
  {
    id: 'canalisations',
    title: 'services.canalisations.title',
    description: 'services.canalisations.description',
    icon: Flame,
    features: [
      "services.canalisations.features.0",
      "services.canalisations.features.1",
      "services.canalisations.features.2",
      "services.canalisations.features.3",
      "services.canalisations.features.4",
      "services.canalisations.features.5",
      "services.canalisations.features.6"
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "faq.q1.question",
    answer: "faq.q1.answer"
  },
  {
    question: "faq.q2.question",
    answer: "faq.q2.answer"
  },
  {
    question: "faq.q3.question",
    answer: "faq.q3.answer"
  },
  {
    question: "faq.q4.question",
    answer: "faq.q4.answer"
  },
  {
    question: "faq.q5.question",
    answer: "faq.q5.answer"
  }
];

// --- ASSETS ---
import geberitLogo from '../assets/partners/geberit.png';
import kwcLogo from '../assets/partners/kwc.png';
import getazLogo from '../assets/partners/getaz.png';
import laufenLogo from '../assets/partners/laufen.png';

// Project Images (using public folder)
const project1 = '/images/project-1.jpg';
const project2 = '/images/project-2.jpg';
const project3 = '/images/project-3.jpg';

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
    text: 'testimonials.reviews.1',
    stars: 5,
    date: 'testimonials.date.1mo'
  },
  {
    name: 'Simo Bendidi',
    context: 'Local Guide',
    text: 'testimonials.reviews.2',
    stars: 5,
    date: 'testimonials.date.3yr'
  },
  {
    name: 'Philippe Rosset',
    context: 'Local Guide',
    text: 'testimonials.reviews.3',
    stars: 5,
    date: 'testimonials.date.2yr'
  }
];

export const LOCATIONS = {
  center: [
    "Rolle", "Mont-sur-Rolle", "Perroy", "Gilly", "Tartegnin", "Essertines-sur-Rolle",
    "Bursinel", "Dully", "Bursins", "Vinzel", "Luins"
  ],
  east: [
    // Vers Nyon / Terre Sainte
    "Begnins", "Vich", "Coinsins", "Duillier", "Gland", "Prangins", "Nyon", "Eysins",
    "Signy-Avenex", "Gren", "Trélex", "Gingins", "Genolier", "Crans-près-Céligny",
    "Céligny", "Arnex-sur-Nyon", "Borex", "Crassier", "La Rippe", "Chéserex",
    "Givrins", "Founex", "Coppet", "Commugny", "Tannay", "Mies",
    "Chavannes-de-Bogis", "Chavannes-des-Bois", "Bogis-Bossey", "Versoix"
  ],
  west: [
    // Vers Morges / Ouest Lausannois
    "Allaman", "Féchy", "Bougy-Villars", "Aubonne", "Lavigny", "Etoy", "Buchillon",
    "Saint-Prex", "Lussy-sur-Morges", "Villars-sous-Yens", "Denens", "Yens",
    "Morges", "Vufflens-le-Château", "Lonay", "Préverenges", "Tolochenaz",
    "Saint-Sulpice", "Denges", "Echandens", "Ecublens", "Chavannes-près-Renens",
    "Bussigny", "Villars-Sainte-Croix", "Mex", "Vufflens-la-Ville", "Aclens",
    "Romanel-sur-Morges", "Bremblens", "Chigny", "Vullierens"
  ],
  north: [
    // Pied du Jura & Vallée de Joux
    "Burtigny", "Le Vaud", "Marchissy", "Longirod", "Saint-George", "Gimel",
    "Saint-Oyens", "Saubraz", "Bière", "Berolle", "Mollens", "Ballens", "Apples",
    "Bussy-Chardonney", "Reverolle", "Clarmont", "Arzier-Le Muids", "Bassins",
    // Extension Pied du Jura
    "Cossonay", "Penthalaz", "Penthaz", "Daillens", "Lussery-Villars", "Gollion",
    "Senarclens", "Grancy", "Cottens", "Sévery", "Pampigny", "Mauraz", "L'Isle",
    "Mont-la-Ville", "La Praz", "Cuarnens", "Moiry", "Chevilly", "La Sarraz",
    "Ferreyres", "Eclépens", "Orny",
    // Vallée de Joux
    "Le Chenit", "Le Sentier", "Le Brassus", "L'Orient", "L'Abbaye", "Les Bioux",
    "Le Lieu", "Les Charbonnières"
  ]
};

export const PROJECTS = [
  {
    title: 'projects.i1.title',
    img: project1,
    tag: 'Rénovation'
  },
  {
    title: 'projects.i2.title',
    img: project2,
    tag: 'Installation'
  },
  {
    title: 'projects.i3.title',
    img: project3,
    tag: 'Sanitaire'
  }
];
