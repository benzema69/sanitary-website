// Data structure for Programmatic SEO
export interface Location {
    name: string;
    slug: string; // URL friendly name
    zip: string;
    region: 'center' | 'east' | 'west' | 'north';
    travelTime: string; // Estimated travel time from Rolle (HQ)
    type: 'ville' | 'village';
}

export const TARGET_LOCATIONS: Location[] = [
    // CENTRE (Rolle & Alentours - < 10 min)
    { name: "Rolle", slug: "rolle", zip: "1180", region: "center", travelTime: "5 min", type: "ville" },
    { name: "Mont-sur-Rolle", slug: "mont-sur-rolle", zip: "1185", region: "center", travelTime: "5 min", type: "village" },
    { name: "Perroy", slug: "perroy", zip: "1166", region: "center", travelTime: "7 min", type: "village" },
    { name: "Gilly", slug: "gilly", zip: "1182", region: "center", travelTime: "8 min", type: "village" },
    { name: "Tartegnin", slug: "tartegnin", zip: "1180", region: "center", travelTime: "8 min", type: "village" },
    { name: "Essertines-sur-Rolle", slug: "essertines-sur-rolle", zip: "1186", region: "center", travelTime: "10 min", type: "village" },
    { name: "Bursinel", slug: "bursinel", zip: "1195", region: "center", travelTime: "8 min", type: "village" },
    { name: "Dully", slug: "dully", zip: "1195", region: "center", travelTime: "8 min", type: "village" },
    { name: "Bursins", slug: "bursins", zip: "1183", region: "center", travelTime: "9 min", type: "village" },
    { name: "Vinzel", slug: "vinzel", zip: "1184", region: "center", travelTime: "9 min", type: "village" },
    { name: "Luins", slug: "luins", zip: "1184", region: "center", travelTime: "9 min", type: "village" },

    // EST (Vers Nyon / Terre Sainte - 10-20 min)
    { name: "Gland", slug: "gland", zip: "1196", region: "east", travelTime: "10 min", type: "ville" },
    { name: "Nyon", slug: "nyon", zip: "1260", region: "east", travelTime: "15 min", type: "ville" },
    { name: "Prangins", slug: "prangins", zip: "1197", region: "east", travelTime: "12 min", type: "ville" },
    { name: "Begnins", slug: "begnins", zip: "1268", region: "east", travelTime: "12 min", type: "village" },
    { name: "Vich", slug: "vich", zip: "1267", region: "east", travelTime: "11 min", type: "village" },
    { name: "Coinsins", slug: "coinsins", zip: "1267", region: "east", travelTime: "12 min", type: "village" },
    { name: "Duillier", slug: "duillier", zip: "1266", region: "east", travelTime: "14 min", type: "village" },
    { name: "Eysins", slug: "eysins", zip: "1262", region: "east", travelTime: "16 min", type: "village" },
    { name: "Signy-Avenex", slug: "signy-avenex", zip: "1274", region: "east", travelTime: "16 min", type: "village" },
    { name: "Grens", slug: "grens", zip: "1274", region: "east", travelTime: "18 min", type: "village" },
    { name: "Trélex", slug: "trelex", zip: "1270", region: "east", travelTime: "18 min", type: "village" },
    { name: "Gingins", slug: "gingins", zip: "1276", region: "east", travelTime: "20 min", type: "village" },
    { name: "Genolier", slug: "genolier", zip: "1272", region: "east", travelTime: "15 min", type: "village" },
    { name: "Crans-près-Céligny", slug: "crans-pres-celigny", zip: "1299", region: "east", travelTime: "18 min", type: "village" },
    { name: "Céligny", slug: "celigny", zip: "1298", region: "east", travelTime: "20 min", type: "village" },
    { name: "Founex", slug: "founex", zip: "1297", region: "east", travelTime: "20 min", type: "village" },
    { name: "Coppet", slug: "coppet", zip: "1296", region: "east", travelTime: "22 min", type: "ville" },
    { name: "Commugny", slug: "commugny", zip: "1291", region: "east", travelTime: "22 min", type: "village" },
    { name: "Mies", slug: "mies", zip: "1295", region: "east", travelTime: "24 min", type: "village" },
    { name: "Tannay", slug: "tannay", zip: "1295", region: "east", travelTime: "24 min", type: "village" },
    { name: "Versoix", slug: "versoix", zip: "1290", region: "east", travelTime: "25 min", type: "ville" },

    // OUEST (Vers Morges / Ouest Lausannois - 10-25 min)
    { name: "Morges", slug: "morges", zip: "1110", region: "west", travelTime: "15 min", type: "ville" },
    { name: "Aubonne", slug: "aubonne", zip: "1170", region: "west", travelTime: "10 min", type: "ville" },
    { name: "Allaman", slug: "allaman", zip: "1165", region: "west", travelTime: "8 min", type: "village" },
    { name: "Etoy", slug: "etoy", zip: "1163", region: "west", travelTime: "10 min", type: "village" },
    { name: "Saint-Prex", slug: "saint-prex", zip: "1162", region: "west", travelTime: "12 min", type: "ville" },
    { name: "Buchillon", slug: "buchillon", zip: "1164", region: "west", travelTime: "11 min", type: "village" },
    { name: "Féchy", slug: "fechy", zip: "1173", region: "west", travelTime: "10 min", type: "village" },
    { name: "Bougy-Villars", slug: "bougy-villars", zip: "1172", region: "west", travelTime: "11 min", type: "village" },
    { name: "Lavigny", slug: "lavigny", zip: "1175", region: "west", travelTime: "12 min", type: "village" },
    { name: "Lussy-sur-Morges", slug: "lussy-sur-morges", zip: "1167", region: "west", travelTime: "14 min", type: "village" },
    { name: "Denens", slug: "denens", zip: "1135", region: "west", travelTime: "15 min", type: "village" },
    { name: "Yens", slug: "yens", zip: "1169", region: "west", travelTime: "16 min", type: "village" },
    { name: "Vufflens-le-Château", slug: "vufflens-le-chateau", zip: "1134", region: "west", travelTime: "16 min", type: "village" },
    { name: "Lonay", slug: "lonay", zip: "1027", region: "west", travelTime: "18 min", type: "village" },
    { name: "Préverenges", slug: "preverenges", zip: "1028", region: "west", travelTime: "18 min", type: "ville" },
    { name: "Saint-Sulpice", slug: "saint-sulpice", zip: "1025", region: "west", travelTime: "20 min", type: "village" },
    { name: "Ecublens", slug: "ecublens", zip: "1024", region: "west", travelTime: "22 min", type: "ville" },
    { name: "Bussigny", slug: "bussigny", zip: "1030", region: "west", travelTime: "22 min", type: "ville" },

    // NORD (Pied du Jura & Vallée - 15-35 min)
    { name: "Gimel", slug: "gimel", zip: "1188", region: "north", travelTime: "15 min", type: "village" },
    { name: "Saint-George", slug: "saint-george", zip: "1188", region: "north", travelTime: "18 min", type: "village" },
    { name: "Longirod", slug: "longirod", zip: "1261", region: "north", travelTime: "18 min", type: "village" },
    { name: "Marchissy", slug: "marchissy", zip: "1261", region: "north", travelTime: "18 min", type: "village" },
    { name: "Le Vaud", slug: "le-vaud", zip: "1261", region: "north", travelTime: "18 min", type: "village" },
    { name: "Bassins", slug: "bassins", zip: "1269", region: "north", travelTime: "18 min", type: "village" },
    { name: "Arzier-Le Muids", slug: "arzier-le-muids", zip: "1273", region: "north", travelTime: "20 min", type: "village" },
    { name: "Bière", slug: "biere", zip: "1145", region: "north", travelTime: "20 min", type: "village" },
    { name: "Apples", slug: "apples", zip: "1143", region: "north", travelTime: "18 min", type: "village" },
    { name: "Cossonay", slug: "cossonay", zip: "1304", region: "north", travelTime: "25 min", type: "ville" },
    { name: "La Sarraz", slug: "la-sarraz", zip: "1315", region: "north", travelTime: "28 min", type: "village" },
    { name: "Le Sentier", slug: "le-sentier", zip: "1347", region: "north", travelTime: "35 min", type: "village" },
    { name: "Le Pont", slug: "le-pont", zip: "1342", region: "north", travelTime: "35 min", type: "village" },
    { name: "Le Brassus", slug: "le-brassus", zip: "1348", region: "north", travelTime: "38 min", type: "village" },
];

export const SERVICE_SLUGS = [
    { slug: "plombier", title: "Plombier", description: "Votre plombier de confiance" },
    { slug: "sanitaire", title: "Sanitaire", description: "Installation sanitaire" },
    { slug: "depannage-urgence", title: "Dépannage Urgence", description: "Dépannage plomberie 24/7" },
    { slug: "renovation-salle-de-bain", title: "Rénovation Salle de Bain", description: "Rénovation complète" },
    { slug: "traitement-eau", title: "Adoucisseur d'eau", description: "Traitement de l'eau" },
    { slug: "boiler", title: "Chauffe-eau & Boiler", description: "Détartrage & Remplacement" },
    { slug: "debouchage", title: "Débouchage", description: "Débouchage canalisation" }
];
