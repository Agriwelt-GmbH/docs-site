---
title: Configurer un contrôleur d'actionneur de jalonnage
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/configure-tramline-actuator.html
---

# Configurer un contrôleur d'actionneur de jalonnage

Indiquez à un contrôleur d'actionneur quel actionneur de jalonnage il pilote et quels capteurs de traceurs lui sont câblés.

Le contrôleur d'actionneur porte trois choses à la fois — l'actionneur de jalonnage et les deux capteurs de traceurs du passage — et chacune a sa propre ligne. C'est pourquoi un seul contrôleur sert un actionneur et les deux traceurs. Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : ce contrôleur seul sur le câble, niveau **« Agronomist »**.

| **Élément** | **Ce que c'est** |
| --- | --- |
| **« Device address »** | Avec quel contrôleur le menu dialogue (adresse de l'appareil). Laissez **« AUTO »**. |
| **« Actuator »** | Le numéro de l'actionneur de jalonnage que ce contrôleur pilote (actionneur), ou **« No »** (aucun) s'il n'en pilote aucun. |
| **« Input device, channel 1 »** | Le premier capteur de traceur (appareil d'entrée, voie 1), ou **« No »**. |
| **« Input device, channel 2 »** | Le second capteur de traceur (appareil d'entrée, voie 2), ou **« No »**. |
| **« Set »** | Écrit les trois lignes dans le contrôleur (valider). |

![Le menu de configuration d'un contrôleur d'actionneur de jalonnage, toutes les lignes encore sur « No ».](figures/five-cfg-actuator)

::: steps
1. Ouvrez **« Service »** → **« Sensors Configuration »** → **« Tramline actuator »** — touchez chaque élément deux fois.

2. Laissez **« Device address »** sur **« AUTO »**.

3. Réglez **« Actuator »**, **« Input device, channel 1 »** et **« Input device, channel 2 »** : touchez chaque ligne et glissez vers la droite ou vers la gauche jusqu'à sa valeur.

4. Touchez **« Set »**, puis touchez-le de nouveau. Le panneau répond **« Done »** (terminé).

5. Débranchez le contrôleur et rebranchez-le. Sur l'écran d'accueil, vérifiez que l'actionneur et les traceurs apparaissent.
:::

**« Set »** refuse avec **« Invalid profile! »** (profil invalide), et n'écrit rien, quand les trois lignes sont sur **« No »**, ou quand les deux voies de traceurs portent le même numéro.

Quand tous les appareils sont faits, remettez le niveau sur **« Operator »**, ou éteignez puis rallumez le panneau. Les réglages propres de l'actionneur : [Actionneur de jalonnage](tramline-actuator.md) ; les traceurs : [Capteurs de traceurs](marker-sensors.md).
