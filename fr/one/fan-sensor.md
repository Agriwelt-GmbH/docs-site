---
title: Capteur de turbine
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/fan-sensor.html
---

# Capteur de turbine

Les paramètres du capteur de vitesse de la turbine — la plage de vitesse admise et le nombre d'impulsions par tour.

Le capteur de turbine surveille la vitesse de la turbine d'un semoir pneumatique, en ligne ou monograine. Ouvrez son menu contextuel comme dans [Réglages des capteurs](sensor-settings.md) — l'image qui s'y trouve montre exactement ce menu.

| Paramètre | Ce qu'il fait | Plage | Niveau |
| --- | --- | --- | --- |
| **« Minimum, rpm »** (minimum, tr/min) | En dessous, le boîtier déclenche **« Low speed of rotation »** (vitesse de rotation trop faible). | 500 … 9000, par pas de 500 | Operator |
| **« Maximum, rpm »** (maximum, tr/min) | Au-dessus, le boîtier déclenche **« High speed of rotation »** (vitesse de rotation trop élevée). | 500 … 9000, par pas de 500 | Operator |
| **« Pulses »** (impulsions) | Combien d'impulsions donne un tour de turbine. | 1 … 60 | Agronomist |

L'écran d'état affiche la fréquence d'impulsions **F=** en Hz. Alarmes : [Turbine ou arbre de doseur : alarmes de vitesse](alarms-rotation.md).
