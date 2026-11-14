---
title: Pression d'air trop haute ou trop basse
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-pressure.html
---

# Pression d'air trop haute ou trop basse

Que faire quand le capteur de pression du circuit d'air signale une pression ou une dépression hors de la plage permise.

Le capteur de pression mesure la surpression ou la dépression du circuit d'air. Les deux alarmes portent sur la valeur de la pression ou de la dépression, quelle qu'elle soit, et seulement pendant le semis ou le déplacement avec l'outil en position de travail. Les limites sont décrites dans [Capteur de pression](pressure-sensor.md). Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « High pressure » — pression élevée {#high-pressure}

**Ce que cela signifie.** La pression ou la dépression mesurée dépasse **« Maximum, Pa »**.

**À vérifier, dans cet ordre :**

1. Réduisez la vitesse de la turbine.
2. La position du volet de réglage de l'admission d'air, s'il y en a un.
3. Le tuyau du capteur de pression est correctement raccordé, et la ligne de mesure n'est pas obstruée.

## « Low pressure » — pression basse {#low-pressure}

**Ce que cela signifie.** La pression ou la dépression mesurée est inférieure à **« Minimum, Pa »**.

**À vérifier, dans cet ordre :**

1. Augmentez la vitesse de la turbine.
2. La position du volet de réglage de l'admission d'air, s'il y en a un.
3. La gaine d'air : fuites.
4. Le tuyau du capteur de pression est correctement raccordé, et la ligne de mesure n'est pas obstruée.

> **REMARQUE**
>
> Le contrôleur de la pompe d'engrais liquide a sa propre alarme **« High pressure »** pour la conduite de liquide. C'est une autre alarme — voir [Pompe d'engrais liquide](alarms-pump-controller.md).
