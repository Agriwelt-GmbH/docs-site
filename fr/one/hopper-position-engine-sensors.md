---
title: Capteurs de trémie, de position de travail et de moteur
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/hopper-position-engine-sensors.html
---

# Capteurs de trémie, de position de travail et de moteur

Les réglages des capteurs à deux états — niveau de trémie, position de travail de l'outil et les cinq capteurs du moteur du tracteur.

Ces capteurs signalent l'un de deux états, et rien de plus. Ouvrez le menu contextuel de l'un d'eux comme dans [Réglages des capteurs](sensor-settings.md). Leur écran d'état affiche **Pin:** et le niveau à l'entrée, **"0"** ou **"1"**.

## Capteur de trémie {#hopper-sensor}

Le capteur de trémie n'a **aucun paramètre propre** — son menu contextuel ne contient que les trois rubriques communes.

![Le menu contextuel d'un capteur de trémie.](figures/ctx-hopper)

Alarme : [Trémie vide](alarms-hopper.md).

## Capteur de position de travail {#work-position-sensor}

Le capteur de position de travail indique au boîtier si l'outil est abaissé pour le travail ou relevé pour le transport. L'écran d'état affiche **Position: Working** ou **Position: Transporting**.

![Le menu contextuel du capteur de position de travail.](figures/ctx-work-position)

| Paramètre | Ce qu'il fait | Plage | Niveau |
| --- | --- | --- | --- |
| **« Transporting position signal »** (signal de position de transport) | Quel état de l'entrée signifie la position de transport. | 0 / 1 | Agronomist |

Le menu peut aussi contenir **« Alarms criteria »** (critère d'alarmes ; **« Yes »** / **« No »**, niveau **« Agronomist »**) : avec **« Yes »**, la valeur par défaut, les alarmes des capteurs de graines, d'engrais et d'arbre de doseur ne se déclenchent pas tant que l'outil est en position de transport ; la rubrique est masquée, et toujours sur **« Yes »**, sur les machines à moteurs de dosage ou à contrôleur de pompe d'engrais liquide.

## Capteurs du moteur {#engine-sensors}

**« No battery charge »** (batterie non chargée), **« Emergency oil pressure »** (pression d'huile critique), **« Ignition »** (contact), **« Low fuel »** (carburant bas) et **« Air filter »** (filtre à air) sont cinq entrées distinctes, chacune activée séparément dans le profil ([Le profil](profile.md)).

![Le menu contextuel du capteur de pression d'huile.](figures/ctx-oil-pressure)

| Paramètre | Ce qu'il fait | Niveau |
| --- | --- | --- |
| **« Activation signal »** (signal d'activation) | Quel état de l'entrée mérite d'être signalé. | Agronomist |
| **« Signal delay, sec »** (temporisation du signal) | Combien de temps cet état doit durer avant d'être pris en compte. Valeurs par défaut : **15 s** pour le niveau de carburant, **5 s** pour le filtre à air. | Agronomist |

Alarmes : [Alarmes du moteur du tracteur](alarms-tractor.md).
