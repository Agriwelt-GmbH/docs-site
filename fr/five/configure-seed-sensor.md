---
title: Configurer un capteur de graines
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/configure-seed-sensor.html
---

# Configurer un capteur de graines

Donnez à un capteur de graines neuf ou remplacé le numéro de son rang.

Pour un capteur de graines, la nouvelle adresse est simplement **le numéro du rang** — le même numéro que l'opérateur voit sous la colonne de l'écran d'accueil. Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : ce capteur seul sur le câble, niveau **« Agronomist »**.

::: steps
1. Ouvrez **« Service »** → **« Sensors Configuration »** (configuration des capteurs) → **« Seed sensor »** (capteur de graines) — touchez chaque élément deux fois. Le menu comporte trois éléments : **« Sensor address »** (adresse du capteur), **« New address »** (nouvelle adresse) et **« Set »** (valider).

   ![Le menu de configuration Seed sensor.](figures/five-cfg-seed)

2. Laissez **« Sensor address »** sur **« AUTO »**.

3. Touchez **« New address »** et glissez vers la droite ou vers la gauche jusqu'au numéro du rang.

4. Touchez **« Set »**, puis touchez-le de nouveau. Le panneau répond **« Done »** (terminé) et, en dessous, **« Found # »** (trouvé n°) avec le numéro que le capteur portait jusque-là.

   ![Le panneau confirme par « Done ». Le numéro après « Found # » n'est pas reproduit sur l'image.](figures/five-info-done)

5. Débranchez le capteur et rebranchez-le. Sur l'écran d'accueil, vérifiez qu'il apparaît sous son rang.
:::

Si le panneau répond **« More than one device in network! »** (plus d'un appareil sur le réseau), un autre appareil est encore sur le câble. S'il répond **« No connection »** (pas de connexion), le capteur ne répond pas — vérifiez son câble et son alimentation.

Quand tous les capteurs sont faits, remettez le niveau sur **« Operator »**, ou éteignez puis rallumez le panneau. Les paramètres des capteurs de graines : [Capteurs de graines et capteurs d'engrais solide](seed-and-fertilizer-sensors.md).
