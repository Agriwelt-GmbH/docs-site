---
title: Couleurs des colonnes et les quatre états d'une section
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/section-states.html
---

# Couleurs des colonnes et les quatre états d'une section

Ce que signifient chaque couleur et chaque symbole d'une colonne du diagramme des sections, et les quatre combinaisons de surveillance et d'application du produit dans lesquelles une section peut se trouver.

La construction du diagramme — ligne de dose, repères, ligne de contrôle — est décrite dans [Le diagramme des sections](section-diagram.md). Cette page énumère les aspects que peut prendre une colonne isolée.

## Couleurs des colonnes {#column-colours}

| **Ce que vous voyez** | **Ce que cela signifie** |
| --- | --- |
| Colonne verte | Le rang sème normalement. |
| Colonne bleue | Le rang sème **plus** que ne le permet la consigne (**« Precise »** et **« Hybrid »**). |
| Colonne jaune | Le rang sème **moins** que ne le permet la consigne (**« Precise »** et **« Hybrid »**). |
| Fond clignotant rouge foncé, pas de colonne | Le rang ne sème presque rien alors que la machine sème — tube bouché ou vide. |
| Colonne blanche avec **!** | La surveillance de cette section est désactivée. Rien à son sujet n'est surveillé. |
| **×** rouge | Le capteur ne répond pas. |
| **?** rouge, colonne clignotant en rouge | Un appareil d'un mauvais type répond à la place de ce capteur. |
| **?** jaune | Le capteur vient de recevoir ses réglages, ou il compte des graines mais le panneau n'a pas de vitesse pour les évaluer. |
| Hachures grises sur toute la colonne | La section est coupée pour le jalonnage, ou son application du produit est désactivée. |
| Hachures vertes en bas d'une colonne grise | Un faible débit dans une section coupée, encore dans les limites tolérées. |
| Hachures rouges dans une colonne grise | La section coupée sème dans le jalonnage. |

![Un diagramme avec une section hors surveillance, un capteur muet et une section coupée.](figures/five-diagram-states)

## Les quatre états d'une section {#the-four-states-of-a-section}

Chaque section a deux commutateurs indépendants : le panneau la **surveille**-t-il (surveillance), et la machine **applique**-t-elle par elle (application du produit).

| **Surveillance** | **Application** | **Ce que cela signifie** | **Ce que montre la colonne** |
| --- | --- | --- | --- |
| oui | oui | Travail normal. | La colonne normale. |
| oui | non | Le rang ne sème volontairement pas — un rang de jalonnage — et le panneau le sait. | Hachures grises. |
| non | oui | Le rang sème, mais personne ne le contrôle. | Blanche avec **!** |
| non | non | La section est entièrement hors du travail. | Blanche avec **!** |

Les deux commutateurs sont des éléments du menu contextuel du capteur — maintenez le doigt sur la colonne de la section :

- **« Disable control »** (désactiver la surveillance) / **« Enable control »** (activer la surveillance), au niveau Operator. Voir [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md).
- **« Product application »** (application du produit), au niveau Agronomist. Voir [Niveaux d'accès](access-levels.md).

> **IMPORTANT**
>
> **Une colonne blanche avec ! paraît tranquille, mais elle est aveugle.** Quoi qu'il arrive dans ce rang — tube bouché, capteur cassé — le panneau ne signale rien.
