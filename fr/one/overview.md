---
title: Ce que fait le système Hectare One
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/overview.html
---

# Ce que fait le système Hectare One

Le système de contrôle de semis avec le panneau Hectare One en une page — ce qu'il surveille, ce qu'il pilote et ce qu'il enregistre.

Le système de contrôle de semis avec le panneau Hectare One est fabriqué par Agriwelt. Il surveille le semis et l'épandage d'engrais solide et liquide sur des machines portées et traînées — semoirs en ligne, semoirs monograines, cultivateurs — et il pilote les doseurs et la pompe pour que la dose réglée soit réellement appliquée.

![Le panneau Hectare One : l'unique point de contact de l'opérateur avec le système.](figures/hw/display)

Le panneau se trouve dans la cabine. Tout le reste est sur la machine : un capteur de graines par section, et ce dont la machine a besoin en plus — voir [Ce qui est fourni](whats-supplied.md).

## Semences {#seed}

- Applique les semences à la dose réglée par l'opérateur, par les moteurs électriques des doseurs — sur les semoirs monograines comme sur les semoirs à céréales.
- Surveille le semis réel par rapport à cette dose et signale une section qui prend du retard.
- Signale un tube bouché ou vide **par son numéro**.
- Compte les graines, les **doubles et les manques** — sur les semoirs monograines.
- Accepte un signal de coupure de section d'un système de guidage tiers.

![Capteur de graines pour tubes de descente ronds de 25 à 35 mm.](figures/hw/seed-sensor)

## Engrais solide et liquide {#dry-and-liquid-fertilizer}

- Applique l'engrais liquide à la dose réglée par la pompe électrique.
- Surveille les conduites d'engrais solide et liquide et signale par numéro une section qui prend du retard ou se bouche.

## La machine autour du produit {#the-machine-around-the-product}

- Niveau de la trémie, rotation de l'arbre du doseur, vitesse de la turbine, pression ou dépression d'air, vitesse d'avancement — chacun par rapport à ses propres limites.
- Les capteurs d'un moteur autonome d'entraînement de la turbine : pression d'huile, charge de la batterie, allumage, niveau de carburant, filtre à air.
- Position de travail ou de transport de la machine.

## Jalonnage {#tramline}

- Crée le jalonnage avec des actionneurs ou en arrêtant des moteurs de doseur.
- Fait avancer le passage de jalonnage tout seul à partir des capteurs de traceurs.
- Continue de surveiller les sections coupées, de sorte qu'une section qui fuit dans la trace de jalonnage est tout de même signalée.

## Enregistrements {#records}

- Surface traitée, séparée en surface semée et surface perdue à cause des manques.
- Statistiques détaillées du travail et rapports écrits sur la carte mémoire.
- Micrologiciel des appareils du système, mis à jour depuis la même carte.

> **REMARQUE**
>
> Le système applique **un produit en mode « Precise »** (graines par mètre), **jusqu'à quatre produits en masse** (kilogrammes par hectare) et **un produit liquide** (litres par hectare).

> **VOIR AUSSI**
>
> [Le panneau et ses sept boutons](front-panel.md) · [Démarrage rapide](quick-start.md) · [Termes](terms.md)
