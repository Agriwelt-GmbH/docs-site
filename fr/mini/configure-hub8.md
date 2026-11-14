---
title: Configurer un concentrateur HUB-8
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/configure-hub8.html
---

# Configurer un concentrateur HUB-8

Réglez les huit canaux d'un concentrateur HUB-8 sur le Hectare Mini — ce que chaque canal remplace, et les raccourcis qui remplissent tous les canaux d'un coup.

Un concentrateur HUB-8 rassemble jusqu'à huit capteurs et se substitue, sur le réseau de capteurs, à chacun d'eux : chaque canal apparaît au boîtier comme un **module d'entrée** ou comme un **capteur de graines** avec sa propre adresse. La configuration indique à chaque canal ce qu'il remplace et lequel il est dans son groupe. Elle exige le niveau **« Service »** (service après-vente). Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : uniquement le concentrateur sur le faisceau, menu **« Sensors Configuration »** (configuration des capteurs) ouvert.

::: steps
1. Dans **« Sensors Configuration »**, sélectionnez **« HUB8 »** et appuyez sur **« MENU »**. Le menu affiche **« Device address »** (adresse de l'appareil), puis pour chaque canal un couple **« Channel 1 type »** et **« Channel 1 address »**, jusqu'au canal 8, et **« Set »** (valider) à la fin.

2. Laissez **« Device address »** sur **« AUTO »**.

3. Sélectionnez **« Channel 1 type »** et choisissez avec **« PLUS »** / **« MINUS »** ce que le canal remplace : **« Input device »** (module d'entrée) ou **« Seed sensors »** (capteurs de graines).

4. Sélectionnez **« Channel 1 address »** et réglez avec **« PLUS »** / **« MINUS »** quel appareil de son groupe est ce canal — son numéro d'ordre parmi les modules d'entrée ou parmi les capteurs de graines.

5. Faites de même pour les canaux 2 à 8.

6. Sélectionnez **« Set »** et appuyez sur **« MENU »**. Le boîtier répond **« Done »** (terminé).

7. Débranchez le concentrateur et rebranchez-le. Revenez à l'écran d'accueil avec **« BACK »**. Les appareils de ses canaux doivent se manifester de nouveau ; tant que le concentrateur est débranché, ils sont barrés en rouge.

   ![L'écran d'accueil tant que le concentrateur est débranché : doseurs, capteurs de turbine et de pression barrés.](figures/home-after-hub8)
:::

Quand tous les appareils sont faits, revenez au niveau **« Operator »** (opérateur) — remettez **« User »** (utilisateur) dans **« Settings »** (réglages), ou éteignez puis rallumez le boîtier — et rebranchez tous les appareils.

## Raccourcis {#shortcuts}

- **Maintenez « MENU »** enfoncé sur l'une des rubriques **« Channel 1 type »** à **« Channel 8 type »** : tous les canaux suivants reçoivent le même type, et leurs adresses sont numérotées à la suite à partir de ce canal.
- **Maintenez « MENU »** enfoncé sur l'une des rubriques **« Channel 1 address »** à **« Channel 8 address »** : les canaux suivants du même type sont numérotés à la suite à partir de celui-ci.
- **Maintenez « MENU »** enfoncé sur **« Device address »** : le boîtier cherche un concentrateur et lit ses réglages de canaux actuels dans le menu. Maintenez-le de nouveau pour le suivant.

Quand vous changez le type d'un canal, l'adresse de ce canal saute à la première adresse libre du nouveau type. Si deux canaux du même type se retrouvent avec la même adresse, **« Set »** refuse avec **« Invalid profile! »**. Les autres messages : [Les règles de toute configuration](device-configuration.md#the-rules-of-every-configuration).
