---
title: Réglages des capteurs
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/sensor-settings.html
---

# Réglages des capteurs

Comment accéder aux réglages d'un capteur du Hectare Mini, ce que contient chaque menu contextuel, quels réglages sont communs à un groupe et quels étalonnages existent.

Chaque capteur, moteur et actionneur possède son propre **menu contextuel** : son écran d'état, ses paramètres et, pour certains, un étalonnage. Les paramètres de chaque type de capteur figurent dans les rubriques qui suivent.

## Accéder à un capteur {#reach-a-sensor}

::: steps
1. Sur l'écran d'accueil, **maintenez « MENU » enfoncé** jusqu'à ce que l'indicateur de vitesse passe sur fond blanc. Le boîtier est en mode de réglage des capteurs. Relâchez la touche.

   ![Le mode de réglage des capteurs, capteur de vitesse sélectionné.](figures/sensor-mode-enter)

2. Sélectionnez le capteur avec **« UP »** / **« DOWN »**. Un capteur de graines ou d'engrais sélectionné affiche son numéro sous la colonne, sur fond blanc.

3. Appuyez sur **« MENU »**. Le menu contextuel du capteur sélectionné s'ouvre.

4. Modifiez une valeur avec **« UP »** / **« DOWN »** et **« PLUS »** / **« MINUS »**, comme dans tout menu. **« BACK »** ferme le menu contextuel ; un nouvel appui sur **« BACK »** quitte le mode de réglage des capteurs.
:::

Ce que contient le menu contextuel dépend du type de capteur, de la machine et du niveau d'accès. Un paramètre que vous ne voyez pas est soit au-dessus de votre niveau, soit sans objet — la rubrique de chaque capteur le précise.

## Le menu contextuel {#the-context-menu}

::: {.anatomy fig="ctx-speed"}
1. **« Information »** — ouvre l'écran d'état de ce capteur. Chaque menu contextuel commence par elle. [L'écran d'état d'un capteur](sensor-status-screen.md)
2. **Une action propre à ce type de capteur** — ici **« Speed calibration »** (étalonnage de la vitesse). Un capteur de doseur a à la place **« Dispenser calibration(weight) »** ; les capteurs de graines et d'engrais ont **« Product application »** (application du produit).
3. **Un paramètre** — ici **« Pulses »** (impulsions) du capteur de vitesse.
4. **Sa valeur.** Sélectionnez la ligne ; la valeur se trouve entre **−** et **+** et se modifie avec **« MINUS »** / **« PLUS »**.
5. **Barre de défilement.** D'autres paramètres suivent ; la dernière rubrique est **« Reset to defaults »** (valeurs par défaut).

Le menu contextuel du capteur de vitesse au niveau **« Agronomist »** (agronome).
:::

**« Reset to defaults »** remet les paramètres de ce capteur à leurs valeurs d'usine. Elle exige le niveau **« Service »** (service après-vente) et agit aussitôt, sans demander.

Le menu contextuel atteint depuis l'[écran d'état](sensor-status-screen.md) avec **« MENU »** a pour première rubrique **« Disable control »** ou **« Enable control »** à la place de **« Information »** — voir [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md).

## Un jeu pour un groupe, ou un jeu par capteur {#one-set-for-a-group-or-one-per-sensor}

| **Capteurs** | **Réglages** |
| --- | --- |
| Capteurs de graines | Un seul jeu pour tous. Modifiez-le sur n'importe quel capteur de graines — il s'applique à tous. Seule **« Product application »** se règle ligne par ligne. |
| Capteurs d'engrais | Un seul jeu pour tous les capteurs d'engrais, distinct de celui des capteurs de graines. **« Product application »** ligne par ligne. |
| Tous les autres capteurs | Chaque capteur a ses propres réglages — réglez chaque capteur de doseur, de turbine ou de pression séparément. |

## Étalonnages {#calibrations}

| **Ce qu'il corrige** | **Où** | **Niveau** | **Machine** |
| --- | --- | --- | --- |
| Vitesse d'avancement — **« Factor, % »** du capteur de vitesse, sur 100 m. [Étalonner le capteur de vitesse](calibrate-speed.md) | **« Seeding machine parameters »** → **« Speed calibration »**, ou menu contextuel du capteur de vitesse | Agronomist ; depuis le menu contextuel aussi Operator avec un code PIN | roule sur 100 m |
| Rotation du doseur — **« Wheel, pulses »** par rapport à **« Dispenser pulses »**. [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md) | **« Seeding machine parameters »** → **« Dispenser calibration »** | Agronomist | roue d'entraînement tournée |
| Doseur au poids — **« Weight, gr »** et **« Weight, pulses »**. [Étalonner le doseur au poids](calibrate-dispenser-weight.md) | menu contextuel du capteur de doseur → **« Dispenser calibration(weight) »** | Operator | à l'arrêt |
| Moteur de doseur au poids. [Étalonner un moteur au poids](calibrate-motor-weight.md) | menu contextuel du moteur | Operator | à l'arrêt |

Les deux étalonnages au poids sont au niveau **« Operator »** (opérateur) parce qu'il faut les refaire chaque fois que le produit change.

## Les types de capteurs {#the-kinds-of-sensor}

[Capteur de vitesse](speed-sensor.md) · [Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md) · [Capteur de doseur](dispenser-sensor.md) · [Capteur de turbine](fan-sensor.md) · [Capteur de pression](pressure-sensor.md) · [Capteurs de trémie et de position de travail](hopper-and-work-position-sensors.md) · [Capteurs du moteur](engine-sensors.md) · [Capteurs de traceur](marker-sensors.md) · [Moteurs de doseur](motor-context-menu.md)
