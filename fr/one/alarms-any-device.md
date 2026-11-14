---
title: Tout appareil : liaison perdue ou type d'appareil incorrect
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-any-device.html
---

# Tout appareil : liaison perdue ou type d'appareil incorrect

Les deux alarmes que tout capteur, actionneur, contrôleur ou dispositif d'entrée peut déclencher — aucune réponse de l'appareil, ou un autre type d'appareil qui répond.

Ces deux alarmes ne sont pas liées à un type d'appareil particulier. Le nom de l'appareil dans la fenêtre d'alarme vous dit lequel est concerné. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Connection lost » — liaison perdue {#connection-lost}

**Ce que cela signifie.** Le boîtier n'a reçu aucune réponse de l'appareil à trois interrogations de suite. Cela vaut aussi bien pour les capteurs, les actionneurs, les contrôleurs que pour le dispositif d'entrée.

**À vérifier, dans cet ordre :**

1. L'appareil est raccordé au réseau.
2. Le câble et le connecteur de l'appareil.
3. L'alimentation de l'appareil. Elle doit respecter les valeurs du passeport de l'appareil.

## « Wrong device type! » — type d'appareil incorrect {#wrong-device-type}

**Ce que cela signifie.** Un appareil d'un autre type répond là où le boîtier attend un appareil de ce type. La cause est soit un mauvais réglage du profil du système, soit une mauvaise configuration de l'appareil lui-même.

**Que faire :** appelez le support technique. N'essayez pas de corriger en modifiant au hasard le profil ou la configuration de l'appareil — voir [Configuration des appareils](device-configuration.md).

> **VOIR AUSSI**
>
> L'écran d'état d'un capteur affiche les deux mêmes états sous la forme **« No connection »** et **« Wrong device type! »** en rouge — voir [L'écran d'état du capteur](sensor-status-screen.md).
