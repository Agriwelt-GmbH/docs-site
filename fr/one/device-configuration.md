---
title: Configuration des appareils — avant de commencer
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/device-configuration.html
---

# Configuration des appareils — avant de commencer

Ce qu'est la configuration des appareils, la préparation qu'elle exige et le schéma en trois rubriques que suit chaque menu de configuration.

Quand un système est mis en service, ou qu'un capteur est remplacé, chaque nouvel appareil doit recevoir son adresse — le numéro par lequel le boîtier le retrouve sur le réseau de capteurs. Cela se fait dans **« Service »** → **« Sensors Configuration »** (configuration des capteurs), un appareil à la fois.

> **AVERTISSEMENT**
>
> **Réservé aux techniciens de maintenance habilités.** Un appareil auquel on attribue une mauvaise adresse disparaît du boîtier ou prend la place d'un autre. Suivez ces rubriques ou les instructions d'un technicien d'Agriwelt GmbH, et n'essayez pas des rubriques de menu au hasard.

## Préparation {#prepare}

::: steps
1. **Débranchez tous les capteurs** du connecteur réseau du boîtier.

2. **Branchez uniquement l'appareil** auquel il faut attribuer une nouvelle adresse.

3. Allumez le boîtier. Des alarmes de communication perdue apparaissent — fermez-les toutes ([Fonctionnement des alarmes](how-alarms-work.md)).

4. Passez au niveau d'accès **« Agronomist »** (agronome) — voir [Activer le niveau Agronomist](enable-agronomist-level.md).

5. Appuyez sur **« BACK »**, puis choisissez **« Service »** → **« Sensors Configuration »**. Le menu propose quatre types d'appareils.

   ![Le menu « Sensors Configuration ».](figures/menu-sensorcfg)
:::

> **IMPORTANT**
>
> **Un seul appareil sur le câble à la fois.** Le boîtier adresse tout ce qui répond. Avec deux appareils du même type branchés, on ne sait pas lequel prend la nouvelle adresse.

## Le schéma {#the-pattern}

Les quatre menus fonctionnent de la même manière :

| Rubrique | De quoi il s'agit |
| --- | --- |
| **« Sensor address »** (adresse du capteur) / **« Device address »** (adresse de l'appareil) | Avec quel appareil le menu dialogue. Laissez **« AUTO »** et le boîtier dialogue avec l'unique appareil qui répond. Un appui sur **« MENU »** sur cette rubrique lance une **recherche** ; chaque appui suivant passe à l'appareil trouvé suivant. |
| **« New address »** (nouvelle adresse) | L'adresse que l'appareil doit prendre. Réglez-la avec **« PLUS »** / **« MINUS »**. |
| **« Set »** (valider) | L'écrit. **« Done »** (terminé) signifie que l'appareil l'a acceptée. |

> **ATTENTION**
>
> **Appuyer sur « MENU » sur la rubrique d'adresse n'est pas un simple coup d'œil.** Cela lance une recherche sur le réseau et peut modifier l'adresse à laquelle répondent les appareils raccordés. Ne le faites qu'avec un seul appareil sur le câble, jamais sur une machine assemblée.

**Ensuite, à chaque fois :** débranchez l'appareil et rebranchez-le, revenez à l'écran d'accueil et vérifiez qu'il apparaît à la bonne place. Remettez ensuite le niveau sur **« Operator »** (opérateur) — ou éteignez puis rallumez le boîtier, ce qui revient au même.

## Les appareils {#the-devices}

| Appareil | Rubrique |
| --- | --- |
| Capteur de graines | [Configurer un capteur de graines](configure-seed-sensor.md) |
| Capteur de pression | [Configurer un capteur de pression](configure-pressure-sensor.md) |
| Dispositif d'entrée HUB8 | [Configurer un HUB8](configure-hub8.md) |
| Contrôleur d'actionneur de jalonnage | [Configurer un contrôleur d'actionneur de jalonnage](configure-tramline-actuator.md) |
| Contrôleurs de moteurs électriques — leur propre accès | [Configurer les contrôleurs de moteurs](configure-motor-controllers.md) |
