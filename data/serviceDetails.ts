/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import urgencesHeroImage from '../assets/services/urgences/hero.svg';
import urgencesReparationFuiteImage from '../assets/services/urgences/projects/reparation-fuite-encastree.svg';
import urgencesSauvetageBoilerImage from '../assets/services/urgences/projects/sauvetage-boiler.svg';
import sdbHeroImage from '../assets/services/sdb/hero.svg';
import sdbTransformationDoucheImage from '../assets/services/sdb/projects/transformation-douche.svg';
import sdbRenovationCompleteVillaImage from '../assets/services/sdb/projects/renovation-complete-villa.svg';
import traitementHeroImage from '../assets/services/traitement/hero.svg';
import traitementAdoucisseurBwtVillaImage from '../assets/services/traitement/projects/adoucisseur-bwt-villa.svg';
import traitementEauDeBoissonImage from '../assets/services/traitement/projects/eau-de-boisson.svg';
import techniqueHeroImage from '../assets/services/technique/hero.svg';
import techniqueRemplacementBoilerPacImage from '../assets/services/technique/projects/remplacement-boiler-pac.svg';
import techniqueDetartrageManuelImage from '../assets/services/technique/projects/detartrage-manuel.svg';
import cuisineHeroImage from '../assets/services/cuisine/hero.svg';
import cuisineIlotImage from '../assets/services/cuisine/projects/cuisine-ilot.svg';
import cuisineRobinetterieIndustrielleImage from '../assets/services/cuisine/projects/robinetterie-industrielle.svg';
import canalisationsHeroImage from '../assets/services/canalisations/hero.svg';
import canalisationsRemplacementColonneImage from '../assets/services/canalisations/projects/remplacement-colonne.svg';
import canalisationsDiagnosticCameraImage from '../assets/services/canalisations/projects/diagnostic-camera.svg';

export interface ServiceProject {
  title: string;
  description: string;
  image: string;
}

export interface ServiceDetailContent {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  fullDescription: string;
  seoKeywords: string[];
  technicalList: string[];
  benefits: string[];
  specificProjects: ServiceProject[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  urgences: {
    id: 'urgences',
    title: 'Dépannage Sanitaire d\'Urgence',
    subtitle: 'J\'interviens personnellement et rapidement sur La Côte',
    heroImage: urgencesHeroImage,
    fullDescription: `
      Face à une urgence sanitaire, vous n'avez pas envie de tomber sur un standard téléphonique. En m'appelant, vous tombez directement sur moi.
      La réactivité et la compétence sont mes priorités pour limiter vos dégâts. 
      
      J'interviens avec mon véhicule atelier parfaitement équipé, ce qui me permet de résoudre 90% des pannes (fuites, débouchages, pannes d'eau chaude) dès ma première visite. Je connais parfaitement les installations de la région pour y travailler depuis des décennies.
      
      Que ce soit pour une inondation ou une canalisation bouchée, je sécurise les lieux moi-même et je répare durablement. Pas de bricolage provisoire qui dure, mais du travail soigné, même dans l'urgence.
    `,
    seoKeywords: ['Plombier urgence Rolle', 'Fuite d\'eau Nyon', 'Débouchage WC Gland', 'Panne boiler', 'Recherche de fuite'],
    technicalList: [
      "Arrêt d'eau d'urgence et mise en sécurité par mes soins",
      "Débouchage mécanique et haute pression (Hydrocurage)",
      "Remplacement immédiat de joints et robinetterie",
      "Réparation experte de chasse d'eau (Geberit, etc.)",
      "Recherche de fuite (caméra thermique/acoustique)",
      "Dégel de conduites en hiver"
    ],
    benefits: [
      "Contact direct avec le patron (pas d'intermédiaire)",
      "Intervention rapide (Je priorise les urgences vitales)",
      "Tarifs annoncés clairement avant travaux",
      "Je fournis le rapport pour votre assurance"
    ],
    specificProjects: [
      {
        title: "Réparation Fuite Encastrée",
        description: "J'ai localisé et réparé cette fuite sous carrelage en minimisant la casse.",
        image: urgencesReparationFuiteImage
      },
      {
        title: "Sauvetage Boiler",
        description: "Intervention un dimanche pour un groupe de sécurité qui inondait la cave.",
        image: urgencesSauvetageBoilerImage
      }
    ]
  },
  sdb: {
    id: 'sdb',
    title: 'Création & Rénovation de Salle de Bains',
    subtitle: 'Je réalise votre projet de A à Z : un seul interlocuteur, une finition parfaite',
    heroImage: sdbHeroImage,
    fullDescription: `
      La salle de bains est une pièce intime qui demande une confiance totale en l'artisan.
      Je vous accompagne personnellement dans votre projet, de la première visite technique à la pose du dernier joint de silicone.
      
      Pas de valse des sous-traitants : je coordonne tout. Je travaille avec les marques suisses et européennes les plus fiables (Laufen, Geberit, KWC) pour que votre salle de bains dure 20 ans.
      Spécialiste des transformations, je remplace votre vieille baignoire par une douche à l'italienne moderne, ou j'adapte votre espace pour plus de sécurité (PMR), toujours avec le souci du détail qui fait ma réputation.
    `,
    seoKeywords: ['Rénovation salle de bain Vaud', 'Douche italienne', 'Installation sanitaire', 'Salle de bain PMR', 'Agencement salle de bain'],
    technicalList: [
      "Démolition et évacuation soignée de l'ancien",
      "Modification précise des arrivées et évacuations",
      "Pose experte de receveurs extra-plats",
      "Installation de baignoires (Îlot, Angle, Balnéo)",
      "Pose de meubles et armoires de toilette",
      "Montage de robinetterie encastrée complexe"
    ],
    benefits: [
      "Un seul interlocuteur : Moi-même",
      "Je vous conseille en showroom partenaires",
      "Chantier propre et protégé chaque soir",
      "Respect strict des délais annoncés"
    ],
    specificProjects: [
      {
        title: "Transformation Douche",
        description: "J'ai remplacé cette baignoire par une douche spacieuse pour un couple de retraités.",
        image: sdbTransformationDoucheImage
      },
      {
        title: "Rénovation Complète Villa",
        description: "Refonte totale de la salle de bain principale : carrelage, sanitaire et meubles posés par mes soins.",
        image: sdbRenovationCompleteVillaImage
      }
    ]
  },
  traitement: {
    id: 'traitement',
    title: 'Traitement de l\'Eau & Adoucisseurs',
    subtitle: 'Je protège votre maison contre le calcaire de La Côte',
    heroImage: traitementHeroImage,
    fullDescription: `
      Habitant la région, je connais parfaitement la dureté de notre eau. Le calcaire est l'ennemi n°1 de vos installations.
      Je ne me contente pas de vendre une boîte : je dimensionne et installe moi-même l'adoucisseur adapté à votre consommation réelle.
      
      C'est un investissement que je rentabilise pour vous en prolongeant la vie de vos appareils.
      Je propose aussi des solutions de filtration pour l'eau de boisson. Plus besoin de porter des packs d'eau, je vous installe une eau pure directement au robinet.
    `,
    seoKeywords: ['Adoucisseur d\'eau Rolle', 'Anticalcaire', 'Osmoseur', 'Filtration eau', 'Sel adoucisseur'],
    technicalList: [
      "Installation d'adoucisseurs volumétriques performants",
      "Pose de filtres anti-sédiments (protection réseau)",
      "Systèmes d'osmose inverse sous évier",
      "Maintenance annuelle réalisée par mes soins",
      "Livraison de sel et vérification des réglages"
    ],
    benefits: [
      "Installation dimensionnée par un pro",
      "Protection de tout votre capital sanitaire",
      "Économies réelles (produits, énergie, pannes)",
      "Service après-vente assuré par le patron"
    ],
    specificProjects: [
      {
        title: "Adoucisseur BWT Villa",
        description: "Installation complète dans un local technique exigu. L'eau est désormais douce dans toute la maison.",
        image: traitementAdoucisseurBwtVillaImage
      },
      {
        title: "Eau de Boisson",
        description: "Pose d'un système de filtration sous évier. Mes clients ne comprent plus de bouteilles en plastique.",
        image: traitementEauDeBoissonImage
      }
    ]
  },
  technique: {
    id: 'technique',
    title: 'Installations Techniques & Chauffe-eau',
    subtitle: 'Mon expertise thermique pour votre eau chaude',
    heroImage: techniqueHeroImage,
    fullDescription: `
      La production d'eau chaude, c'est le cœur technique de votre maison.
      Je m'occupe personnellement du remplacement, de l'entretien et du détartrage de vos boilers. Je ne délègue pas cette tâche technique.
      
      Un boiler que je détartre est un boiler qui consomme moins. Je vous conseille aussi sur les nouvelles technologies comme les chauffe-eau thermodynamiques (PAC) pour réduire votre facture électrique.
      Je réalise aussi les bouclages sanitaires pour que vous n'attendiez plus l'eau chaude sous la douche.
    `,
    seoKeywords: ['Détartrage boiler', 'Chauffe-eau pompe à chaleur', 'Remplacement boiler', 'Plomberie technique'],
    technicalList: [
      "Remplacement soigné de boilers (toutes capacités)",
      "Installation de chauffe-eau Pompe à Chaleur",
      "Détartrage méticuleux avec remplacement de joint/anode",
      "Contrôle de sécurité (soupapes, groupes)",
      "Pose de pompes de circulation (confort immédiat)"
    ],
    benefits: [
      "Expertise technique certifiée",
      "Travail propre (je ne laisse pas de calcaire derrière moi)",
      "Eau chaude optimisée et constante",
      "Devis honnête : je ne remplace que si nécessaire"
    ],
    specificProjects: [
      {
        title: "Remplacement Boiler PAC",
        description: "J'ai remplacé ce vieux modèle électrique énergivore par une PAC moderne.",
        image: techniqueRemplacementBoilerPacImage
      },
      {
        title: "Détartrage Manuel",
        description: "Voici les 15kg de calcaire que j'ai retiré manuellement de ce chauffe-eau.",
        image: techniqueDetartrageManuelImage
      }
    ]
  },
  cuisine: {
    id: 'cuisine',
    title: 'Cuisine & Électroménager',
    subtitle: 'La précision suisse pour vos raccordements',
    heroImage: cuisineHeroImage,
    fullDescription: `
      Dans une cuisine, la plomberie doit être invisible mais infaillible. Une fuite sous un meuble encastré peut faire des ravages.
      C'est pourquoi je réalise moi-même tous les raccordements de vos appareils : lave-vaisselle, lave-linge, frigos américains.
      
      Je pose vos éviers et robinetteries (Quooker, douchettes) avec une précision millimétrique. Je collabore souvent directement avec votre cuisiniste pour que les attentes d'eau soient exactement au bon endroit lors de la pose.
    `,
    seoKeywords: ['Plombier cuisine', 'Raccordement lave-vaisselle', 'Pose évier', 'Installation Quooker', 'Fuite cuisine'],
    technicalList: [
      "Pose d'éviers et étanchéité par mes soins",
      "Installation de robinetterie cuisine haute qualité",
      "Raccordement sécurisé lave-vaisselle/lave-linge",
      "Alimentation eau pour frigo américain",
      "Installation de broyeurs (si autorisé)",
      "Modification précise des écoulements PVC"
    ],
    benefits: [
      "Aucun risque de fuite cachée",
      "Travail soigné à l'intérieur des meubles",
      "Je respecte scrupuleusement les plans du cuisiniste",
      "Garantie totale sur les raccordements"
    ],
    specificProjects: [
      {
        title: "Cuisine Îlot",
        description: "J'ai dû créer des arrivées d'eau au sol précises pour cet îlot central.",
        image: cuisineIlotImage
      },
      {
        title: "Robinetterie Industrielle",
        description: "Pose d'un mitigeur complexe avec douchette. Ajustement parfait.",
        image: cuisineRobinetterieIndustrielleImage
      }
    ]
  },
  canalisations: {
    id: 'canalisations',
    title: 'Réseaux & Canalisations',
    subtitle: 'J\'inspecte et rénove vos réseaux invisibles',
    heroImage: canalisationsHeroImage,
    fullDescription: `
      Quand un problème survient sous terre ou dans un mur, il faut un expert équipé.
      Je dispose de ma propre caméra endoscopique pour inspecter vos canalisations. C'est moi qui tiens la caméra et qui interprète ce que je vois : racine, cassure, bouchon.
      
      Je réalise également les travaux lourds : modification de conduites de gaz (je suis agréé), raccordements communaux ou remplacement de vieilles colonnes en fonte bruyantes par du matériel moderne et silencieux.
    `,
    seoKeywords: ['Inspection caméra canalisation', 'Plombier gaz agréé', 'Raccordement eau communal', 'Rénovation colonne chute'],
    technicalList: [
      "Inspection vidéo réalisée par mes soins",
      "Remplacement de colonnes de chute (Silent)",
      "Installations gaz (Je suis certifié SSIGE)",
      "Création de réseaux d'arrosage extérieur",
      "Pose de clapets anti-retour",
      "Sondage de réseaux"
    ],
    benefits: [
      "Diagnostic immédiat par le patron",
      "Matériel d'inspection professionnel en main propre",
      "Sécurité gaz garantie par ma certification",
      "Travail durable et aux normes"
    ],
    specificProjects: [
      {
        title: "Remplacement Colonne",
        description: "J'ai changé cette vieille colonne en fonte fissurée dans un immeuble habité.",
        image: canalisationsRemplacementColonneImage
      },
      {
        title: "Diagnostic Caméra",
        description: "C'est moi qui ai repéré cette racine qui bloquait tout l'écoulement de la villa.",
        image: canalisationsDiagnosticCameraImage
      }
    ]
  }
};