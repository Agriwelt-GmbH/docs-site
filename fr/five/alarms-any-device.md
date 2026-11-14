---
title: Tout appareil : connexion perdue ou mauvais type d'appareil
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-any-device.html
---

# Tout appareil : connexion perdue ou mauvais type d'appareil

Les deux alarmes que peut déclencher n'importe quel capteur, actionneur, contrôleur ou appareil d'entrée — aucune réponse de l'appareil, ou réponse d'un mauvais type d'appareil.

Ces deux alarmes ne sont pas liées à un type d'appareil. Le nom de l'appareil dans la fenêtre d'alarme vous dit lequel est concerné. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Connection lost » — connexion perdue {#connection-lost}

**Ce que cela signifie.** Le panneau n'a reçu aucune réponse de l'appareil à trois interrogations de suite. Cela vaut pour les capteurs, les actionneurs, les contrôleurs et les appareils d'entrée.

**À vérifier, dans cet ordre :**

1. L'appareil est raccordé au réseau.
2. Le câble et le connecteur de l'appareil.
3. L'alimentation de l'appareil. Elle doit respecter les valeurs du passeport de l'appareil.
4. L'appareil doit bien être là : un appareil du [profil](profile.md) qui n'est pas monté déclenche aussi cette alarme. Laissez un tel appareil hors surveillance ([Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md)).

## « Wrong device type! » — mauvais type d'appareil {#wrong-device-type}

**Ce que cela signifie.** Un appareil d'un autre type répond là où le panneau attend un appareil de ce type. La cause est soit un mauvais réglage du profil du système, soit une mauvaise configuration de l'appareil lui-même.

**Que faire :** appelez le service d'assistance. N'essayez pas de corriger en modifiant au hasard le profil ou la configuration de l'appareil — voir [Configuration des appareils](device-configuration.md).

> **VOIR AUSSI**
>
> L'écran d'état d'un appareil montre en rouge les mêmes deux états sous la forme **« No connection »** et **« Wrong device type! »** — voir [L'écran d'état d'un capteur](sensor-status-screen.md).
