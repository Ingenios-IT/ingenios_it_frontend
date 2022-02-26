# Quickstart

## Prérequis 

  Ce tutoriel à été écris pour mettre en place un environement de developpement linux.

  - node (v16.14.0 utilisé pour creer ler projet)

  >source : https://nodejs.org/en/

## Installation

Clonez le repository puis se rendre dans le dossier app .
Installez les bibliotèques requises en lancant la commande suivante : 

```bash
npm install
```

Une fois les dépendances installées vous pouvez run le projet via la commande : 

```bash
npm start
```

Vous pouvez alors constater que le site est lancé à l'adresse http://localhost:3001

> :warning: le port est défini sur 3001 pour pouvoir être lancé en parallèle du backend. Si vous le changez faites attention à ne pas utiliser deux fois le même port.

# Contribuer au projet

## Règles de developpement

  - Développement en javascript (pas de TypeScript).
  - Utiliser au maximum des functional components. (pas de class component).
  - Minimiser au maximum l'ajout de librairies externes.
  - Effectuer les requêttes via axios.
  - Referencer les routes **UNIQUEMENT** dans `Routes.js`
  - :warning: **INTERDICTION STRICTE D'UTILISER DES FRAMEWORS CSS TYPE BOOSTRAP**
  - Placer **tous** les fichier css, images et polices dans le dossier `assets`
  - **AUCUNE IMAGE > 1Mo**. Compressez vos images avant de les insérer.

  >### sources :
  > - Doc officielle react : https://fr.reactjs.org/
  > - Doc axios : https://axios-http.com/docs/intro
  > - Compresseur d'image en ligne : https://compressjpeg.com/fr/

