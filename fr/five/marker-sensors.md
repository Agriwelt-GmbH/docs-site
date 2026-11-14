---
title: Capteurs de traceurs
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/marker-sensors.html
---

# Capteurs de traceurs

Les paramètres des capteurs de traceurs — quel traceur surveille un capteur et quel état de l'entrée signifie abaissé.

Les capteurs de traceurs indiquent au panneau quel traceur est abaissé. Le profil déclare **« No »** (aucun), **« One »** (un) ou **« Both »** (les deux) ([Le profil](profile.md)). Maintenez le doigt sur l'icône du traceur de l'écran d'accueil pour ouvrir le menu contextuel d'un capteur de traceur ([Réglages des capteurs](sensor-settings.md)).

| **Paramètre** | **Ce qu'il fait** | **Valeurs, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Connected marker »** | Quel traceur surveille le capteur unique (traceur raccordé). Masqué quand le profil a les deux traceurs. | **« Left »** (gauche) / **« Right »** (droite) ; **« Left »** | Agronomist |
| **« Signal "down" »** | Quel état de l'entrée signifie que le traceur est abaissé (signal *abaissé*). | 0 / 1 ; 0 | Agronomist |

L'écran d'état d'un capteur de traceur ne montre que les lignes communes. Sur une machine qui fait des jalonnages, le changement de position du traceur met fin à un passage — voir [Régler le rythme de jalonnage](tramline-rhythm.md#how-the-bout-changes).

> **REMARQUE**
>
> **Les capteurs de traceurs sont câblés au contrôleur de l'actionneur de jalonnage.** Un seul de ces contrôleurs porte l'actionneur **et** les deux capteurs de traceurs — voir [Configurer un contrôleur d'actionneur de jalonnage](configure-tramline-actuator.md).
