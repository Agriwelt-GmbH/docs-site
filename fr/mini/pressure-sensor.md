---
title: Capteur de pression
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/pressure-sensor.html
---

# Capteur de pression

Les réglages d'un capteur de pression (dépression) du Hectare Mini — filtre, pression minimale et maximale — et le moment où le boîtier déclenche ses alarmes.

Un capteur de pression mesure la dépression (ou la surpression) du circuit d'air — par exemple à la sortie de la turbine ou dans les éléments de distribution d'un semoir monograine à dépression. Le boîtier travaille avec la valeur absolue : **une valeur plus élevée signifie plus de dépression.** **Chaque capteur de pression a ses propres réglages.**

Ouvrez son menu contextuel comme dans [Réglages des capteurs](sensor-settings.md).

![Le menu contextuel d'un capteur de pression.](figures/ctx-pressure)

| **Paramètre** | **Niveau** | **Fonction** | **Plage · valeur par défaut** |
| --- | --- | --- | --- |
| **« Filter »** | Agronomist | Durée pendant laquelle le capteur mesure et moyenne la pression. Augmentez-la si la valeur fait de grands écarts. | 1 … 16 · 1 |
| **« Minimum, Pa »** | Operator | En dessous de cette pression — pas assez de dépression — le boîtier déclenche **« Low pressure »** (pression trop basse). **« No »** désactive le contrôle. | **« No »**, 100 … 10000 Pa, par pas de 100 · **« No »** |
| **« Maximum, Pa »** | Operator | Au-dessus de cette pression — trop de dépression — le boîtier déclenche **« High pressure »** (pression trop élevée). **« No »** désactive le contrôle. | **« No »**, 100 … 10000 Pa, par pas de 100 · **« No »** |

Les deux limites ne sont surveillées que tant que la machine sème, ou avance en position de travail — voir [Quand le boîtier surveille le semis](seed-and-fertilizer-sensors.md#when-the-panel-controls-the-seeding). Sans capteur de vitesse, elles sont surveillées tant que le boîtier voit un semis.

Les limites se règlent en pascals ; l'écran d'état affiche la pression en kilopascals : 1 kPa = 1000 Pa.

## L'écran d'état {#the-status-screen}

Affiche la pression mesurée **P=** en kPa, uniquement tant que le capteur répond — [L'écran d'état d'un capteur](sensor-status-screen.md).

![L'écran d'état d'un capteur de pression qui ne répond pas : la ligne de liaison est rouge, aucune pression n'est affichée.](figures/status-pressure)

Les alarmes et ce qu'il faut contrôler : [Alarmes de pression](alarms-pressure.md). Un capteur de pression neuf ou remplacé doit d'abord recevoir son adresse — [Configurer un capteur de pression](configure-pressure-sensor.md).
