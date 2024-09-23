# Projet 12 - SportSee

- React
- TypeScript
- Vite
- Recharts
- Axios

## Missions

L’objectif est de refaire la page profil avec React :

- Refaire la page profil avec `React`.
- Intégrer le KANBAN avec les User Stories de la partie TODO :
  `https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e`
- Intégrer les graphiques en utilisant `D3` ou `Recharts*`.
- Pour le `CSS`, se concentrer sur la partie desktop, projet doit être visible sur les écrans d'au moins `1204*780px`.
- Utiliser `Fecth` ou `Axios*` pour faire les calls API.
- Réaliser les calls en dehors des composants React, en créant un service dédié à ça.
- Commencer le projet en faisant un mock des données de l'API. (Faire attention au schéma de données qui change d'un
  utilisateur à l'autre).
- Standardiser les données venant de l'API pour les formatter correctement avant de les utiliser.

## Changement données API / Mocks

Afin de pouvoir choisir si nous voulons les données API ou mocks, un context à était utilisé pour choisir le type de
donnés sur la page d'accueil, via un bouton.

## Standardisation des données

Afin de standardiser les données, les interfaces de Typescript ont été utilisé. Un fichier à part `requestsDto.ts` a été
créer dans un dossier `utils`. Il nous permet de recevoir les données BRUTES et de les transformer en données
standardisées.

## Service API

Afin de faire les bons calls. Un système de `Factory` à était mis en place. Selon si `isMock` est `true` ou `false`, la
factory nous renvoie sur la bonne class.