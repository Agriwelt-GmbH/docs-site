---
title: Capteur de turbine
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/fan-sensor.html
---

# Capteur de turbine

Les paramètres du capteur de vitesse de la turbine — la plage de vitesse permise et les impulsions par tour — avec plages et valeurs par défaut.

Le capteur de turbine surveille la vitesse de la turbine d'un semoir pneumatique ou d'un semoir monograine. Maintenez le doigt sur l'icône de la turbine de l'écran d'accueil pour ouvrir son menu contextuel ([Réglages des capteurs](sensor-settings.md)).

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Minimum, rpm »** | En dessous, le panneau déclenche **« Low speed of rotation »** (vitesse de rotation trop faible). Minimum, tr/min. | 500 … 9000, par pas de 500 ; 3000 | Operator |
| **« Maximum, rpm »** | Au-dessus, le panneau déclenche **« High speed of rotation »** (vitesse de rotation trop élevée). Maximum, tr/min. | 500 … 9000, par pas de 500 ; 5000 | Operator |
| **« Pulses »** | Combien d'impulsions donne un tour de turbine (impulsions). | 1 … 60 ; 2 | Agronomist |

![Le menu contextuel d'un capteur de turbine au niveau Agronomist.](figures/five-ctx-fan)

L'écran d'accueil montre la vitesse de la turbine en tr/min à côté de l'icône ; l'écran d'état montre la fréquence des impulsions **F=** en Hz. Alarmes : [Arbre de turbine ou de doseur : alarmes de vitesse](alarms-rotation.md).
