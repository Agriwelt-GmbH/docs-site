---
title: Configurer un contrôleur d'actionneur de jalonnage
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/configure-tramline-actuator.html
---

# Configurer un contrôleur d'actionneur de jalonnage

Indiquer à un contrôleur d'actionneur quel actionneur de jalonnage il commande et quels capteurs de traceurs lui sont câblés.

Le contrôleur d'actionneur porte trois éléments à la fois — l'actionneur de jalonnage et les deux capteurs de traceurs du passage — et chacun a sa propre ligne. C'est pourquoi un seul contrôleur dessert un actionneur et les deux traceurs. Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : ce contrôleur seul sur le câble, niveau **« Agronomist »** (agronome).

::: {.anatomy fig="konf-act"}
1. **« Device address »** (adresse de l'appareil) — avec quel contrôleur le menu dialogue. Laissez **« AUTO »**.
2. **« Actuator »** (actionneur) — le numéro de l'actionneur de jalonnage que ce contrôleur commande, ou **« No »** (aucun) s'il n'en commande pas.
3. **« Input device, channel 1 »** (dispositif d'entrée, canal 1) — le premier capteur de traceur, ou **« No »**.
4. **« Input device, channel 2 »** (dispositif d'entrée, canal 2) — le second capteur de traceur, ou **« No »**.
5. **« Set »** (valider) — écrit les trois lignes dans le contrôleur.

Le menu de configuration d'un contrôleur d'actionneur de jalonnage, toutes les lignes encore sur **« No »**.
:::

::: steps
1. Choisissez **« Service »** → **« Sensors Configuration »** (configuration des capteurs) → **« Tramline actuator »** (actionneur de jalonnage) et appuyez sur **« MENU »**.

2. Laissez **« Device address »** sur **« AUTO »**.

3. Réglez **« Actuator »**, **« Input device, channel 1 »** et **« Input device, channel 2 »** avec **« PLUS »** / **« MINUS »**.

4. Sélectionnez **« Set »** et appuyez sur **« MENU »**. Le boîtier répond **« Done »** (terminé).

5. Débranchez le contrôleur et rebranchez-le. Sur l'écran d'accueil, vérifiez que l'actionneur et les traceurs apparaissent.
:::

Quand tous les appareils sont faits, remettez le niveau sur **« Operator »** (opérateur), ou éteignez puis rallumez le boîtier. Les réglages propres de l'actionneur : [Actionneur de jalonnage](tramline-actuator.md) ; les traceurs : [Capteurs de traceurs](marker-sensors.md).
