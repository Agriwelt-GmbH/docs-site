---
title: Configuration des appareils — avant de commencer
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/device-configuration.html
---

# Configuration des appareils — avant de commencer

Ce qu'est la configuration des appareils, la préparation qu'elle exige, et le schéma en trois éléments que suit chaque menu de configuration.

À la mise en service d'un système, ou au remplacement d'un capteur, chaque nouvel appareil doit recevoir son adresse — le numéro par lequel le panneau le retrouve sur le réseau de capteurs. Cela se fait dans **« Service »** → **« Sensors Configuration »** (configuration des capteurs), un appareil à la fois.

> **AVERTISSEMENT**
>
> **Réservé aux techniciens de service agréés.** Un appareil qui reçoit une mauvaise adresse disparaît du panneau ou prend la place d'un autre. Suivez ces rubriques ou les instructions d'un technicien d'Agriwelt GmbH, et n'essayez pas des éléments de menu au hasard.

## Préparer {#prepare}

::: steps
1. **Débranchez tous les capteurs** du connecteur réseau du panneau.

2. **Branchez seulement l'appareil** qui doit recevoir une nouvelle adresse.

3. Allumez le panneau. Des alarmes de communication perdue apparaissent — fermez-les toutes avec **« Close »** (fermer) ([Fonctionnement des alarmes](how-alarms-work.md)).

4. Montez le niveau d'accès à **« Agronomist »** — voir [Activer le niveau Agronomist](enable-agronomist-level.md).

5. Touchez l'écran d'accueil avec deux doigts, puis touchez **« Service »** deux fois et **« Sensors Configuration »** deux fois. Le menu propose quatre types d'appareils : **« Seed sensor »** (capteur de graines), **« Pressure sensor »** (capteur de pression), **« Concentrator-8 »** (concentrateur 8) et **« Tramline actuator »** (actionneur de jalonnage).

   ![Le menu Sensors Configuration.](figures/five-menu-sensorcfg)
:::

## Le schéma {#the-pattern}

Les quatre menus fonctionnent de la même façon :

| **Élément** | **Ce que c'est** |
| --- | --- |
| **« Sensor address »** / **« Device address »** | Avec quel appareil le menu dialogue (adresse du capteur / de l'appareil). Laissez **« AUTO »** et le panneau dialogue avec l'unique appareil qui répond. Un nouveau toucher sur l'élément sélectionné lance une **recherche** ; chaque toucher suivant passe à l'appareil trouvé suivant. |
| **« New address »** | L'adresse que l'appareil doit prendre (nouvelle adresse). Réglez-la par un glissement vers la droite ou vers la gauche. |
| **« Set »** | L'écrit (valider). Touchez-le, puis touchez-le de nouveau. **« Done »** (terminé) signifie que l'appareil l'a acceptée. |

**Ce que « Set » peut répondre :**

| **Message** | **Signification** |
| --- | --- |
| **« Done »** | L'appareil a pris la nouvelle adresse. |
| **« More than one device in network! »** | Avec **« AUTO »**, plus d'un appareil répond (plus d'un appareil sur le réseau). Débranchez tous les appareils sauf un. |
| **« No connection »** | Aucun appareil ne répond (pas de connexion). Vérifiez le câble et l'alimentation de l'appareil. |
| **« Address: … is used! »** | L'adresse choisie appartient déjà à un autre appareil (adresse utilisée). Choisissez-en une autre. |

> **ATTENTION**
>
> **La recherche sur l'élément d'adresse n'est pas un simple coup d'œil.** Elle dialogue avec les appareils du réseau. Ne l'utilisez qu'avec un seul appareil sur le câble, jamais sur une machine montée. Avec une adresse saisie à la main au lieu de **« AUTO »**, le panneau écrit sur ce qui répond à cette adresse.

**Ensuite, à chaque fois :** débranchez l'appareil et rebranchez-le, revenez à l'écran d'accueil et vérifiez qu'il apparaît à sa place. Puis remettez le niveau sur **« Operator »** — ou éteignez puis rallumez le panneau, ce qui revient au même.

## Les appareils {#the-devices}

| **Appareil** | **Rubrique** |
| --- | --- |
| Capteur de graines | [Configurer un capteur de graines](configure-seed-sensor.md) |
| Capteur de pression | [Configurer un capteur de pression](configure-pressure-sensor.md) |
| Appareil d'entrée HUB8 — **« Concentrator-8 »** à l'écran | [Configurer un HUB8](configure-hub8.md) |
| Contrôleur d'actionneur de jalonnage | [Configurer un contrôleur d'actionneur de jalonnage](configure-tramline-actuator.md) |
| Contrôleurs des moteurs électriques — leur propre accès | [Configurer les contrôleurs de moteurs](configure-motor-controllers.md) |
