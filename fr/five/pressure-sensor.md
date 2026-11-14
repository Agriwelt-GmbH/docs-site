---
title: Capteur de pression
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/pressure-sensor.html
---

# Capteur de pression

Les paramètres du capteur de pression d'air — le filtre de lissage et la plage de pression permise — avec plages, valeurs par défaut et conditions de surveillance de la plage.

Le capteur de pression mesure la surpression ou la dépression du circuit d'air. Maintenez le doigt sur l'icône de pression de l'écran d'accueil pour ouvrir son menu contextuel ([Réglages des capteurs](sensor-settings.md)).

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Filter »** | Avec quelle force le capteur lisse sa mesure (filtre). | 1 … 16 ; 1 | Agronomist |
| **« Minimum, Pa »** | La limite basse de la plage permise. **« No »** (0) désactive le contrôle de pression basse. | 0 … 10000, par pas de 100 ; **« No »** | Operator |
| **« Maximum, Pa »** | La limite haute de la plage permise. **« No »** (0) désactive le contrôle de pression haute. | 0 … 10000, par pas de 100 ; **« No »** | Operator |

La plage n'est surveillée que pendant le semis, ou pendant le déplacement avec l'outil en position de travail. Les deux limites portent sur la valeur de la pression ou de la dépression, quelle qu'elle soit. Les limites se règlent en pascals ; l'écran d'accueil et l'écran d'état affichent la pression **P=** en kilopascals (1 kPa = 1000 Pa).

Alarmes : [Pression d'air](alarms-pressure.md). Donner son adresse à un nouveau capteur de pression : [Configurer un capteur de pression](configure-pressure-sensor.md).
