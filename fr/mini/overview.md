---
title: Ce que fait le système Hectare Mini
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/overview.html
---

# Ce que fait le système Hectare Mini

Le système de contrôle de semis avec le panneau Hectare Mini en une page — ce qu'il surveille, ce qu'il pilote, ce qu'il enregistre et à qui s'adresser.

Le système de contrôle de semis avec le panneau Hectare Mini est fabriqué par Agriwelt GmbH. Il surveille en temps réel le semis et l'épandage d'engrais sur des semoirs en ligne et des semoirs monograines de toutes marques ; sur les machines équipées de moteurs de doseur électriques, il pilote aussi le dosage pour que la dose réglée soit réellement appliquée.

Le panneau se trouve dans la cabine : un écran couleur de 320 × 240 et sept boutons tactiles autour de lui — voir [Le panneau et ses sept boutons](front-panel.md). Tout le reste est sur la machine : un capteur par rang de semis, et ce dont la machine a besoin en plus.

## Semences {#seed}

- Affiche en direct le débit de semences dans chaque rang, sous la forme d'une colonne du [diagramme des sections](section-diagram.md).
- Déclenche une alarme lorsque le débit d'un rang diminue ou s'arrête, **avec le numéro du rang**.
- Compare le semis à la dose de consigne réglée par l'opérateur (modes **« Hybrid »** et **« Precise »**) et déclenche une alarme lorsque l'écart dépasse la tolérance.
- Compte les graines, les **doubles et les manques** à chaque soc (mode **« Precise »**).
- Sépare la surface traitée en surface semée et surface non semée.

## Engrais {#fertilizer}

- Affiche le débit d'engrais solide dans chaque rang et déclenche une alarme, avec le numéro du rang, lorsqu'il diminue ou s'arrête.
- Surveille les conduites d'engrais liquide, lorsque la machine en possède.

## La machine autour de la semence {#the-machine-around-the-seed}

- Niveau de la trémie, rotation de l'arbre du doseur, vitesse de la turbine, pression d'air à la sortie de la turbine, vitesse d'avancement — chacun par rapport à ses propres limites.
- En option : la vitesse de l'arbre par rapport à la vitesse d'avancement, et le poids de semences appliqué par les doseurs.
- Position de travail ou de transport du semoir.
- Les capteurs d'un moteur séparé d'entraînement de la turbine — pression d'huile, charge de la batterie, allumage, niveau de carburant, filtre à air. Ils sont optionnels et prévus pour les combinaisons de semoirs dotées de leur propre moteur diesel.

## Pilotage du dosage et du jalonnage {#driving-the-metering-and-the-tramline}

- Sur les machines à moteurs de doseur électriques : applique jusqu'à trois produits à la dose en kg/ha, ou la semence à la dose en graines par mètre — voir [L'écran de régulation de dose](rate-control-screen.md) et [L'écran Motors](motors-screen.md).
- Crée le jalonnage avec des actionneurs de jalonnage ou en arrêtant des moteurs — voir [Régler le rythme de jalonnage](tramline-rhythm.md).

## Vitesse {#speed}

La vitesse d'avancement vient d'un capteur de roue ou d'un radar, ou du récepteur GPS intégré au panneau. Lorsque le GPS est configuré, il est utilisé tant que la position est valide, et le capteur reprend de lui-même lorsque le signal est perdu — voir [Réception GPS](gps-receiver.md).

## Enregistrements {#records}

Statistiques détaillées de chaque parcelle, conservées après l'arrêt — voir [L'écran Statistics](statistics-screen.md).

## Contact {#contact}

Agriwelt GmbH · Hackhofergasse 1 · 1190 Wien, Autriche · téléphone +43 664 156 4910 · info@agriwelt.com · www.agriwelt.com. C'est aussi l'adresse à laquelle ce manuel vous renvoie pour le service technique.

> **VOIR AUSSI**
>
> [Démarrage rapide](quick-start.md) · [Mise en service](commissioning.md) · [Termes](terms.md)
