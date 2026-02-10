<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Chappuis Sanitaire Sàrl - Site Web

Bienvenue sur le dépôt du site web de Chappuis Sanitaire Sàrl.
Ce projet est développé avec React, Vite, et Tailwind CSS.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

### Installation
1. Clonez le dépôt (si ce n'est pas déjà fait) :
   ```bash
   git clone https://github.com/benzema69/sanitary-website.git
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

### Lancement en local
Pour lancer le serveur de développement :
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:5173`.

### Configuration
Créez un fichier `.env.local` à la racine pour configurer vos clés API (si nécessaire) :
```
VITE_GEMINI_API_KEY=votre_cle_api_gemini
```

## 🏗️ Structure du Projet

Le projet a été refactorisé pour une meilleure maintenabilité :

- `src/components/` : Composants Réutilisables (UI)
  - `src/components/sections/` : Sections principales de la page d'accueil (Hero, Services, Contact, etc.)
- `src/data/` : Données statiques (Services, FAQ, Partenaires)
- `src/services/` : Services API (Gemini, etc.)
- `src/App.tsx` : Point d'entrée principal (Layout)

## 📦 Build pour la Production

Pour créer une version optimisée pour la production :
```bash
npm run build
```
Les fichiers seront générés dans le dossier `dist`.

## 📄 Licence
Tous droits réservés © Chappuis Sanitaire Sàrl.
