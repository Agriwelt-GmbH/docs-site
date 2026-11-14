---
title: Capteurs de traceur
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/marker-sensors.html
---

# Capteurs de traceur

Les deux réglages des capteurs de bras de traceur du Hectare Mini — quel bras surveille un capteur unique, et quel signal signifie que le bras est abaissé.

Les capteurs de traceur indiquent au boîtier si les bras de traceur sont relevés ou abaissés. L'écran d'accueil dessine les deux bras ; les deux relevés sont affichés en jaune — voir [Indicateurs](indicators.md#markers). Le nombre de capteurs qui surveillent les bras se règle sous **« Markers »** (traceurs) dans le [profil](profile.md) : **« One »** (un) ou **« Both »** (les deux).

Ouvrez le menu contextuel d'un capteur de traceur comme dans [Réglages des capteurs](sensor-settings.md). Les deux réglages exigent le niveau **« Agronomist »** (agronome).

| **Paramètre** | **Fonction** | **Valeurs · valeur par défaut** |
| --- | --- | --- |
| **« Connected marker »** | Le bras que surveille le capteur unique : **« Left »** (gauche) ou **« Right »** (droite). Affiché uniquement avec **« Markers »** sur **« One »**. | · **« Left »** |
| **« Signal "down" »** | Le niveau sur l'entrée, **0** ou **1**, qui signifie que le bras est abaissé. Réglez-le sur ce que donne le capteur avec le bras baissé. | 0 / 1 · 0 |

L'écran d'état d'un capteur de traceur n'affiche que les lignes communes — type, liaison et alarmes ([L'écran d'état d'un capteur](sensor-status-screen.md)). Un capteur de traceur ne déclenche que les alarmes que tout appareil peut déclencher : **« Connection lost »** et **« Wrong device type! »** — voir [Appareil qui ne répond pas](alarms-any-device.md).
