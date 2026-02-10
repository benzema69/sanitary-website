
# Chappuis Sanitaire Sàrl - Site Web

Bienvenue sur le dépôt du site web vitrine de **Chappuis Sanitaire Sàrl**, artisan plombier à Rolle et sur La Côte.
Ce projet est développé avec **React 19**, **Vite**, **TypeScript** et **Tailwind CSS**. Il intègre des animations fluides (Framer Motion) et un assistant virtuel alimenté par Google Gemini.

## 🌟 Fonctionnalités Clés

- **Design Premium & Réactif** : Interface moderne, mobile-first, avec un soin particulier apporté à l'UX (glassmorphism, scrollbar personnalisée).
- **Animations Fluides** : Transitions douces et éléments interactifs pour une expérience utilisateur engageante.
- **Formulaire de Contact Intelligent** :
  - Envoi d'emails via **EmailJS**.
  - Assistant Chatbot (Gemini) capable de pré-remplir le formulaire en discutant avec l'utilisateur.
- **Contenu Dynamique** : Sections gérées via des fichiers de données centralisés pour une maintenance aisée.
- **SEO Optimisé** : Structure sémantique, méta-tags et données structurées (Schema.org) pour le référencement local.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (v18+)
- npm ou yarn

### Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/benzema69/sanitary-website.git
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

### Configuration (.env)
Pour que toutes les fonctionnalités (Chatbot, Email) soient actives, créez un fichier `.env.local` à la racine :

```env
# Clé API Google Gemini (pour le chat) - Requis
VITE_GEMINI_API_KEY=votre_cle_api_gemini_ici

# Configuration EmailJS (pour le formulaire de contact) - Requis
# Créez un compte sur https://www.emailjs.com/
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```
> **Note** : Le fichier `src/services/emailService.ts` doit être mis à jour pour utiliser ces variables d'environnement (actuellement configuré avec des placeholders pour la démo).

### Lancement en local
```bash
npm run dev
```
Accédez à `http://localhost:5173`.

## 🏗️ Structure du Projet

```
./
├── assets/          # Images (Logos, Photos Unsplash)
├── components/      # Composants React
│   ├── sections/    # Hero, Services, Projets, Contact...
│   └── ...          # Composants UI (AIChat, Modal, etc.)
├── data/            # Données statiques (Textes, Tarifs, Liens)
├── services/        # Logique métier (API Gemini, EmailJS)
├── App.tsx          # Layout principal & Routing
└── main.tsx         # Point d'entrée
```

## 📦 Déploiement

Le projet est prêt à être déployé sur Vercel, Netlify ou GitHub Pages.

1. Construire le projet :
   ```bash
   npm run build
   ```
2. Prévisualiser le build :
   ```bash
   npm run preview
   ```

## 📄 Crédits & Licence
- **Développement** : [Généré par Agent AI]
- **Images** : Unsplash (Licence gratuite) & Logos partenaires respectifs.
- **Licence** : Propriétaire - Tous droits réservés à Chappuis Sanitaire Sàrl.
