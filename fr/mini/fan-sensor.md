---
title: Capteur de turbine
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/fan-sensor.html
---

# Capteur de turbine

Les réglages d'un capteur de vitesse de turbine du Hectare Mini — vitesse minimale et maximale de la turbine et impulsions par tour — et le moment où le boîtier déclenche ses alarmes.

Un capteur de turbine compte les tours de la turbine d'un semoir pneumatique ou monograine. L'écran d'accueil affiche la vitesse de la turbine en tr/min. **Chaque capteur de turbine a ses propres réglages.**

Ouvrez son menu contextuel comme dans [Réglages des capteurs](sensor-settings.md).

![Le menu contextuel d'un capteur de turbine.](figures/ctx-fan)

| **Paramètre** | **Niveau** | **Fonction** | **Plage · valeur par défaut** |
| --- | --- | --- | --- |
| **« Minimum, rpm »** | Operator | Vitesse minimale admise de la turbine. En dessous, le boîtier déclenche **« Low speed of rotation »** (vitesse de rotation trop faible) — mais seulement tant que la machine sème, ou avance en position de travail. | 500 … 9000 tr/min, par pas de 500 · 3000 |
| **« Maximum, rpm »** | Operator | Vitesse maximale admise de la turbine. Au-dessus, le boîtier déclenche **« High speed of rotation »** (vitesse de rotation trop élevée) — à tout moment, même à l'arrêt. | 500 … 9000 tr/min, par pas de 500 · 5000 |
| **« Pulses »** | Agronomist | Impulsions du capteur par tour de la turbine. | 1 … 60 · 2 |

Une vitesse de turbine qui semble correcte mais déclenche des alarmes indique en général un **« Pulses »** (impulsions) erroné : deux fois plus d'impulsions affichent une vitesse deux fois plus faible.

Ce que signifient semer et avancer pour le boîtier — [Quand le boîtier surveille le semis](seed-and-fertilizer-sensors.md#when-the-panel-controls-the-seeding). Sans capteur de vitesse, le minimum est surveillé tant que le boîtier voit un semis. Avec un capteur de position de travail dont **« Alarms criteria »** est sur **« Yes »**, le minimum n'est pas surveillé en position de transport.

## L'écran d'état {#the-status-screen}

Affiche la fréquence d'impulsions **F=** en Hz — [L'écran d'état d'un capteur](sensor-status-screen.md). La vitesse de la turbine en tr/min est cette fréquence × 60 ÷ **« Pulses »**.

![L'écran d'état d'un capteur de turbine.](figures/status-fan)

Les alarmes de la turbine et ce qu'il faut contrôler : [Turbine ou arbre de doseur : alarmes de vitesse](alarms-rotation.md).
