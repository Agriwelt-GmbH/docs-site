---
title: Réglages des capteurs
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/sensor-settings.html
---

# Réglages des capteurs

Comment atteindre au toucher les réglages d'un capteur, ce que contient son menu contextuel, et quels étalonnages existent et où.

Chaque capteur, actionneur et moteur de la machine a ses propres réglages et son propre écran d'état. Les deux s'atteignent par son **menu contextuel**. Les paramètres de chaque type de capteur figurent dans les rubriques qui suivent celle-ci.

## Atteindre un capteur {#reach-a-sensor}

**Maintenez le doigt sur l'appareil** plus d'une demi-seconde :

- sur l'**écran d'accueil** — son icône, ou sa colonne sur un diagramme ;
- sur l'**écran Motors** ou le **second écran d'accueil** — la tuile d'un moteur ou d'un actionneur de jalonnage.

Le menu contextuel s'ouvre. Un toucher bref ne fait rien. Un maintien du doigt sur un indicateur de kg/ha, sur la consigne d'un diagramme ou sur un emplacement vide de la colonne de droite fait autre chose — voir [Zones tactiles et gestes](buttons-and-gestures.md).

![Le menu contextuel d'un capteur de turbine au niveau Agronomist.](figures/five-ctx-fan)

## Le menu contextuel {#the-context-menu}

| **Élément** | **Ce qu'il fait** | **Niveau** |
| --- | --- | --- |
| **« Information »** | Ouvre l'écran d'état de cet appareil (informations). [L'écran d'état d'un capteur](sensor-status-screen.md) | Operator |
| **« Disable control »** / **« Enable control »** | Met l'appareil hors surveillance, ou de nouveau sous surveillance (désactiver / activer la surveillance). Non proposé pour le capteur de vitesse. [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md) | Operator |
| **« Registers »** | Une vue brute des registres de l'appareil (registres), pour le service après-vente. Ne fait partie d'aucune procédure. Pour un moteur ou le contrôleur de pompe, l'élément s'appelle **« Electric motors »** (moteurs électriques) et ouvre l'écran de diagnostic des contrôleurs. | Agronomist |
| Les éléments propres à l'appareil | Par exemple **« Speed calibration »** (étalonnage de la vitesse) pour le capteur de vitesse. | selon l'élément |
| Les paramètres | Ceux que vous voyez dépendent du niveau d'accès. Modifiez celui qui est sélectionné par un glissement vers la droite ou vers la gauche. | selon l'élément |
| **« Reset to defaults »** | Remet les paramètres de cet appareil aux valeurs d'usine (valeurs par défaut). | Service |

Touchez en dehors du menu pour le quitter. Les valeurs modifiées s'enregistrent d'elles-mêmes.

## L'écran d'état {#the-status-screen}

**« Information »** ouvre l'écran d'état de l'appareil : son identité, sa liaison, ses valeurs en direct et ses alarmes actives. Comment le lire : [L'écran d'état d'un capteur](sensor-status-screen.md).

## Étalonnages {#calibrations}

Il existe quatre étalonnages. Ce ne sont pas les variantes d'une même procédure : chacun écrit d'autres paramètres et s'atteint autrement.

| **Ce qu'il corrige** | **Où** | **Niveau** | **Machine** |
| --- | --- | --- | --- |
| La vitesse d'avancement — réécrit **« Factor, % »** (facteur, %) du capteur de vitesse. [Étalonner le capteur de vitesse](calibrate-speed.md) | **« Settings »** → **« Seeding machine parameters »** → **« Speed calibration »**, ou **« Speed calibration »** dans le menu contextuel du capteur de vitesse | Agronomist dans le menu, Operator dans le menu contextuel | roule sur 100 m |
| La rotation du doseur — **« Wheel, pulses »** (impulsions de la roue) par rapport à **« Dispenser pulses »** (impulsions du doseur). [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md) | **« Settings »** → **« Seeding machine parameters »** → **« Dispenser calibration »** | Agronomist | roue et arbre du doseur tournés ensemble |
| La masse du doseur — **« Weight, gr »** (poids, g) et **« Weight, pulses »** (impulsions du poids). [Étalonner le doseur au poids](calibrate-dispenser-weight.md) | menu contextuel du capteur de doseur | Operator | à l'arrêt |
| La masse du rouleau doseur — **« Weight, gr »** et **« Rotations »** (rotations) d'un moteur. [Étalonner un moteur de dosage au poids](calibrate-motor-weight.md) | menu contextuel du moteur électrique du doseur | Operator | à l'arrêt |

Les éléments **« Speed calibration »** du menu contextuel et l'étalonnage du moteur ne sont proposés que machine à l'arrêt. Les deux étalonnages de masse sont au niveau **« Operator »** parce qu'il faut les refaire à chaque changement de produit.
