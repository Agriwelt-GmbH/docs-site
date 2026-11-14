---
title: Couleurs des colonnes et les quatre états d'une section
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/section-states.html
---

# Couleurs des colonnes et les quatre états d'une section

Ce que signifient chaque couleur et chaque symbole d'une colonne du diagramme des sections, et les quatre combinaisons de surveillance et d'application du produit dans lesquelles une section peut se trouver.

La construction du diagramme — ligne de dose, repères, ligne de contrôle — est décrite dans [Le diagramme des sections](section-diagram.md). Cette page énumère les aspects que peut prendre une colonne isolée.

## Couleurs des colonnes {#column-colours}

| **Ce que vous voyez** | **Ce que cela signifie** |
| --- | --- |
| Colonne verte | Le rang sème normalement. |
| Colonne bleue | Le rang sème **plus** que ne le permet la consigne (« Precise » et « Hybrid »). |
| Colonne jaune | Le rang sème **moins** que ne le permet la consigne (« Precise » et « Hybrid »). |
| Fond clignotant rouge foncé, pas de colonne | Le rang ne sème presque rien alors que la machine sème — tube bouché ou vide. |
| Colonne blanche avec **!** | La surveillance de cette section est désactivée. Rien à son sujet n'est surveillé. |
| **×** rouge | Le capteur ne répond pas. |
| **?** rouge, colonne clignotant en rouge | Un appareil d'un mauvais type répond à la place de ce capteur. |
| **?** jaune | Le capteur vient de recevoir ses réglages, ou il compte des graines mais le panneau n'a pas de vitesse pour les évaluer. |
| Hachures grises sur toute la colonne | La section est coupée pour le jalonnage, ou son application du produit est désactivée. |
| Hachures vertes en bas d'une colonne grise | Un faible débit dans une section coupée, encore dans les limites tolérées. |
| Hachures rouges dans une colonne grise | La section coupée sème dans le jalonnage. |

## Les quatre états d'une section {#the-four-states-of-a-section}

Chaque section a deux commutateurs indépendants : le panneau la **surveille**-t-il (surveillance) et la machine **applique**-t-elle par elle (application du produit).

| **Surveillance** | **Application** | **Ce que cela signifie** | **Ce que montre la colonne** |
| --- | --- | --- | --- |
| oui | oui | Travail normal. | La colonne normale. |
| oui | non | Jalonnage : le rang ne sème volontairement pas, et le panneau le sait. | Hachures grises. |
| non | oui | Le rang sème, mais personne ne le contrôle. | Blanche avec **!** |
| non | non | La section est entièrement hors du travail. | Blanche avec **!** |

La surveillance se commute dans le menu contextuel du capteur : [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md). **« Product application »** (application du produit) est un élément du même menu, au niveau Agronomist ; en mode jalonnage, les actionneurs ou les moteurs commutent eux-mêmes les sections et cet élément est ignoré.
