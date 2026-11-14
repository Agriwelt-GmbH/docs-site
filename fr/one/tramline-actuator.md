---
title: Actionneur de jalonnage
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/tramline-actuator.html
---

# Actionneur de jalonnage

Les deux paramètres de l'actionneur de jalonnage, l'endroit où se trouvent ses autres réglages et ce que montre son écran d'état.

L'actionneur de jalonnage ferme les tronçons du passage de jalonnage. Il a deux paramètres propres, dans son menu contextuel ([Réglages des capteurs](sensor-settings.md)) :

| Paramètre | Valeurs | Niveau |
| --- | --- | --- |
| **« Cutoff position »** (position de coupure) | **« Pulled out »** (sorti) / **« Pulled in »** (rentré) — la position de l'actionneur dans laquelle ses tronçons sont fermés. Par défaut **« Pulled out »**. | Agronomist |
| **« Switch »** (commutation) | **« when seeding »** (pendant le semis) / **« always »** (toujours) — quand l'actionneur est commuté. Par défaut **« when seeding »**. | Agronomist |

Le reste de ses réglages se trouve ailleurs :

| Quoi | Où |
| --- | --- |
| L'adresse et les canaux de traceurs de son contrôleur | [Configurer un contrôleur d'actionneur de jalonnage](configure-tramline-actuator.md) |
| Le rythme — quel passage ferme quel actionneur | [Rythme de jalonnage](tramline-rhythm.md) |
| Quels tronçons appartiennent à l'actionneur | **« Actuators to sensors mapping »** (affectation des capteurs aux actionneurs) — [Paramètres du semoir](seeding-machine-parameters.md#actuators-to-sensors-mapping) |

L'écran d'état de l'actionneur affiche **Status:** **Pulled in**, **Pulled out**, **Working** pendant que l'obturateur bouge, ou **Unknown**. Alarmes : [Alarmes de jalonnage](alarms-tramline.md).

> **REMARQUE**
>
> **Un contrôleur d'actionneur porte trois éléments :** l'actionneur lui-même et **les deux** capteurs de traceurs du passage. C'est pourquoi une machine à traceurs et à jalonnage n'a besoin que d'un seul contrôleur de ce type.
