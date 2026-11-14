---
title: Ce que fait le système Hectare 5
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/overview.html
---

# Ce que fait le système Hectare 5

Le système de contrôle de semis avec le panneau Hectare 5 en une page — ce qu'il surveille, ce qu'il pilote et ce qu'il enregistre.

Le système de contrôle de semis avec le panneau Hectare 5 surveille le semis et l'épandage d'engrais solide et liquide sur les semoirs en ligne et les semoirs monograines. Lorsque la machine est équipée de moteurs électriques de doseur ou d'une pompe d'engrais liquide, il les pilote aussi, pour que la dose réglée soit réellement appliquée.

![Le panneau Hectare 5. Il se commande uniquement par le toucher.](figures/five-panel)

Le panneau se trouve dans la cabine et se commande du bout des doigts sur son écran — il n'a pas de boutons. Tout le reste est sur la machine : un capteur de graines par section, et ce dont la machine a besoin en plus. Ce que porte votre machine est saisi dans le [profil](profile.md) ; les écrans montrent exactement cela.

## Semences {#seed}

- Applique les semences à la dose réglée par l'opérateur, par les moteurs électriques des doseurs.
- Surveille le semis réel par rapport à cette dose et signale une section qui prend du retard.
- Signale un tube bouché ou vide **par son numéro**.
- Compte les graines, les **doubles et les manques** en mode **« Precise »** (précis) — sur les semoirs monograines.

## Engrais solide et liquide {#dry-and-liquid-fertilizer}

- Applique l'engrais liquide à la dose réglée par la pompe électrique.
- Surveille les conduites d'engrais solide et liquide et signale par numéro une section qui prend du retard ou se bouche.

## La machine autour du produit {#the-machine-around-the-product}

- Niveau de la trémie, rotation de l'arbre du doseur, vitesse de la turbine, pression ou dépression d'air, vitesse d'avancement — chacun par rapport à ses propres limites.
- Les capteurs d'un moteur autonome d'entraînement de la turbine : pression d'huile, charge de la batterie, allumage, niveau de carburant, filtre à air.
- Position de travail ou de transport de la machine, et traceurs.

## Jalonnage {#tramline}

- Crée le jalonnage avec des actionneurs ou en arrêtant des moteurs de doseur.
- Fait avancer le passage de jalonnage tout seul à partir des capteurs de traceurs ou du capteur de position de travail.
- Continue de surveiller les sections coupées, de sorte qu'une section qui sème dans le jalonnage est tout de même signalée.

## Vitesse par le récepteur GPS intégré {#speed-from-the-built-in-gps-receiver}

Le panneau possède son propre récepteur GPS. Il peut prendre la vitesse d'avancement aux satellites au lieu d'un capteur de roue, et il indique combien de satellites il reçoit. Voir [GPS](gps.md).

## Enregistrements {#records}

- Surface traitée, séparée en surface semée, non semée et inconnue.
- Statistiques détaillées du travail, conservées pour cinq parcelles.
- Rapports écrits sur la carte mémoire.

> **REMARQUE**
>
> Le système applique **un produit en mode « Precise »** (graines par mètre), **jusqu'à quatre produits en masse** (kilogrammes par hectare) et **un produit liquide** (litres par hectare).

> **VOIR AUSSI**
>
> [Le panneau](front-panel.md) · [Démarrage rapide](quick-start.md) · [Termes](terms.md)
