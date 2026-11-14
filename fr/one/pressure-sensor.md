---
title: Capteur de pression
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/pressure-sensor.html
---

# Capteur de pression

Les paramètres du capteur de pression d'air — le filtre de lissage et la plage de pression admise.

Le capteur de pression mesure la surpression ou la dépression du circuit d'air. Ouvrez son menu contextuel comme dans [Réglages des capteurs](sensor-settings.md).

| Paramètre | Ce qu'il fait | Plage | Niveau |
| --- | --- | --- | --- |
| **« Filter »** (filtre) | Le degré de lissage de la mesure. | 1 … 16 | Agronomist |
| **« Minimum, Pa »** (minimum) | La limite basse de la plage admise. | 0 … 10000, par pas de 100 | Operator |
| **« Maximum, Pa »** (maximum) | La limite haute de la plage admise. | 0 … 10000, par pas de 100 | Operator |

L'écran d'état affiche la pression **P=** en kPa. Alarmes : [Pression d'air](alarms-pressure.md). Attribuer son adresse à un nouveau capteur de pression : [Configurer un capteur de pression](configure-pressure-sensor.md).
