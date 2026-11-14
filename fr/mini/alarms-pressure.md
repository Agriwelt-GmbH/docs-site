---
title: Alarmes de pression : High pressure, Low pressure
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-pressure.html
---

# Alarmes de pression : High pressure, Low pressure

Que faire quand la dépression mesurée par un capteur de pression du Hectare Mini est trop élevée ou trop faible.

Le boîtier compare la valeur absolue de la pression mesurée à **« Minimum, Pa »** et **« Maximum, Pa »** du capteur ([Capteur de pression](pressure-sensor.md)), tant que la machine sème ou avance en position de travail. La ligne d'appareil désigne le capteur : **Pressure sensor: #1**.

## « High pressure » — pression trop élevée {#high-pressure}

**Ce que cela signifie.** La pression mesurée dépasse **« Maximum, Pa »** — trop de dépression.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Diminuez la vitesse de la turbine.
2. Le volet d'admission d'air, si la machine en a un.
3. Le tuyau vers le capteur de pression : raccordé au bon endroit, non plié, non obstrué.
4. **« Maximum, Pa »** du capteur.

## « Low pressure » — pression trop basse {#low-pressure}

**Ce que cela signifie.** La pression mesurée est inférieure à **« Minimum, Pa »** — pas assez de dépression.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Augmentez la vitesse de la turbine.
2. Le volet d'admission d'air, si la machine en a un.
3. Les gaines d'air et les éléments de distribution : fuites — flexibles, joints, couvercles.
4. Le tuyau vers le capteur de pression : raccordé au bon endroit, non plié, non obstrué.
5. **« Minimum, Pa »** du capteur.

La pression mesurée figure sur l'écran d'état du capteur, **P=** en kPa — comparez-la aux limites, qui se règlent en Pa (1 kPa = 1000 Pa).
