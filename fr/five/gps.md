---
title: Le récepteur GPS intégré
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/gps.html
---

# Le récepteur GPS intégré

Ce que vous dit le symbole de satellite sur l'écran d'accueil, comment le panneau peut prendre la vitesse d'avancement au GPS, et ce qui se passe quand le signal est mauvais.

L'Hectare 5 possède son propre récepteur GPS. Le panneau l'utilise de deux façons : il indique combien de satellites il reçoit et — s'il est réglé pour — il prend la **vitesse d'avancement** aux satellites au lieu d'un capteur de roue.

## Le symbole de satellite {#the-satellite-symbol}

Sur une machine dont le profil comporte un capteur de vitesse, un **symbole de satellite** figure dans la colonne de droite de l'écran d'accueil, avec à côté le nombre de satellites utilisés.

| **Ce que vous voyez** | **Ce que cela signifie** |
| --- | --- |
| Satellite **gris** | Le récepteur fonctionne, mais la vitesse n'en provient pas. Le nombre indique ce qu'il reçoit. |
| Satellite **vert** | La vitesse provient du GPS ; plus de 6 satellites — bon signal. |
| Satellite **jaune** | La vitesse provient du GPS ; 4 à 6 satellites. Utilisable, à surveiller. |
| Satellite **rouge** | La vitesse provient du GPS ; moins de 4 satellites. La vitesse n'est pas fiable. |

![Le symbole de satellite dans ses quatre états — gris, vert, jaune, rouge — avec le nombre de satellites utilisés.](figures/five-gps-icon)

## Vitesse par GPS {#speed-from-gps}

Que la vitesse provienne du récepteur est le réglage **« GPS internal »** (GPS interne) du menu contextuel du capteur de vitesse (maintenez le doigt sur le champ de vitesse). Il exige le niveau Agronomist. Voir [Capteur de vitesse](speed-sensor.md).

Quand le GPS est la source de vitesse et que moins de quatre satellites sont reçus, le panneau déclenche l'alarme **« Poor GPS signal quality »** (mauvaise qualité du signal GPS). Tout ce que le panneau calcule à partir de la vitesse — surface, doses, écarts, pilotage des moteurs de doseur — dépend alors d'un signal faible. Dégagez-vous en terrain découvert, ou revenez au capteur de roue.

![L'alarme de signal GPS faible.](figures/five-gps-alarm-poor-signal)

> **IMPORTANT**
>
> **Sous des arbres, des bâtiments ou le toit d'un hangar, le récepteur perd des satellites.** Ne commencez le travail que lorsque le symbole de satellite est vert ou jaune.

## L'écran GPS {#the-gps-screen}

Sur le [second écran d'accueil](second-home-screen.md), un toucher sur le symbole GPS ouvre un écran avec les données propres du récepteur : la vitesse qu'il mesure, la date et l'heure qu'il reçoit (UTC, et non l'heure locale du panneau), et le nombre de satellites utilisés et en vue. En dessous défile un journal du récepteur destiné au technicien de service. Les textes de cet écran sont en anglais dans toutes les langues du panneau. Quittez-le par un long glissement vers le haut.

![L'écran GPS ouvert depuis le second écran d'accueil.](figures/five-gps-test)
