---
title: Actionneur de jalonnage
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/tramline-actuator.html
---

# Actionneur de jalonnage

Les deux paramètres de l'actionneur de jalonnage, où se trouve le reste de ses réglages, et ce que montre son écran d'état.

L'actionneur de jalonnage coupe les sections du passage de jalonnage. Il a deux paramètres propres, dans son menu contextuel — maintenez le doigt sur sa tuile de l'écran Motors ([Réglages des capteurs](sensor-settings.md)) :

| **Paramètre** | **Valeurs** | **Niveau** |
| --- | --- | --- |
| **« Cutoff position »** | **« Pulled out »** (sorti) / **« Pulled in »** (rentré) — la position de l'actionneur dans laquelle ses sections sont coupées (position de coupure). **« Pulled out »** par défaut. | Agronomist |
| **« Switch »** | **« when seeding »** (pendant le semis) / **« always »** (toujours) — quand l'actionneur est commuté (commutation). **« when seeding »** par défaut. | Agronomist |

Le reste de ses réglages se trouve ailleurs :

| **Quoi** | **Où** |
| --- | --- |
| L'adresse et les voies de traceurs de son contrôleur | [Configurer un contrôleur d'actionneur de jalonnage](configure-tramline-actuator.md) |
| Le rythme — quel passage coupe quel actionneur | [Régler le rythme de jalonnage](tramline-rhythm.md) |
| Quelles sections appartiennent à l'actionneur | **« Relation of sensors to actuators »** (correspondance des capteurs et des actionneurs) — [Paramètres du semoir](seeding-machine-parameters.md#relation-of-sensors-to-actuators) |

L'écran d'état de l'actionneur affiche **Status:** **Pulled in**, **Pulled out**, **Working** pendant que l'obturateur se déplace, ou **Unknown**. Alarmes : [Alarmes de jalonnage](alarms-tramline.md).

> **REMARQUE**
>
> **Un contrôleur d'actionneur porte trois choses :** l'actionneur lui-même et **les deux** capteurs de traceurs du passage. C'est pourquoi une machine à traceurs et à jalonnage n'a besoin que d'un seul de ces contrôleurs.
