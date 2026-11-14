---
title: Capteurs de trémie, de position de travail et du moteur
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/hopper-position-engine-sensors.html
---

# Capteurs de trémie, de position de travail et du moteur

Les réglages des capteurs à deux états — niveau de la trémie, position de travail de l'outil, et les cinq capteurs du moteur d'entraînement de la turbine.

Ces capteurs signalent l'un de deux états, rien de plus. Maintenez le doigt sur l'icône de l'un d'eux sur l'écran d'accueil pour ouvrir son menu contextuel ([Réglages des capteurs](sensor-settings.md)). Leur écran d'état montre **Pin:** et le niveau sur l'entrée, **"0"** ou **"1"**.

## Capteur de trémie {#hopper-sensor}

Le capteur de trémie n'a **aucun paramètre propre** — son menu contextuel ne contient que les éléments communs.

Alarme : [Trémie vide](alarms-hopper.md).

## Capteur de position de travail {#work-position-sensor}

Le capteur de position de travail indique au panneau si l'outil est abaissé au travail ou relevé pour le transport. L'écran d'état affiche **« Position: Working »** ou **« Position: Transporting »** (position : au travail / en transport).

| **Paramètre** | **Ce qu'il fait** | **Valeurs, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Transporting position signal »** | Quel état de l'entrée signifie la position de transport (signal de position de transport). | 0 / 1 ; 0 | Agronomist |
| **« Alarms criteria »** | **« Yes »** — tant que l'outil est relevé, les alarmes de section ne sont pas surveillées. **« No »** — la position n'influence pas les alarmes (critère des alarmes). Masqué, et toujours sur **« Yes »**, sur une machine à moteurs de doseur ou à pompe. | **« No »** / **« Yes »** ; **« Yes »** | Agronomist |

Sur une machine sans traceurs qui fait des jalonnages, relever l'outil met fin à un passage — voir [Régler le rythme de jalonnage](tramline-rhythm.md#how-the-bout-changes).

## Capteurs du moteur {#engine-sensors}

**« No battery charge »** (pas de charge de la batterie), **« Emergency oil pressure »** (pression d'huile critique), **« Ignition »** (allumage), **« Low fuel »** (niveau de carburant bas) et **« Air filter »** (filtre à air) sont cinq entrées distinctes, chacune activée dans le profil séparément ([Le profil](profile.md)).

![Le menu contextuel du capteur de pression d'huile.](figures/five-ctx-oil-pressure)

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Activation signal »** | Quel état de l'entrée est celui qui mérite d'être signalé (signal d'activation). | 0 / 1 ; 1 | Agronomist |
| **« Signal delay, sec »** | Combien de temps cet état doit durer avant d'être pris en compte (temporisation du signal, s). | 1 … 30 ; **15 s** pour le niveau de carburant, **5 s** pour le filtre à air, **1 s** pour les autres | Agronomist |

La pression d'huile et la charge de la batterie ne sont surveillées que contact mis ; le niveau de carburant et le filtre à air, toujours. Alarmes : [Tractor engine alarms](alarms-tractor.md).
