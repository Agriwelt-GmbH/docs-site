---
title: Configurer un capteur de graines
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/configure-seed-sensor.html
---

# Configurer un capteur de graines

Donner à un capteur de graines neuf ou remplacé le numéro de son rang.

Pour un capteur de graines, la nouvelle adresse est simplement **le numéro du rang** — le même numéro que l'opérateur voit sous la colonne de l'écran d'accueil. Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : ce capteur seul sur le câble, niveau **« Agronomist »** (agronome).

L'adresse d'un capteur de graines ne peut être modifiée que lorsque le capteur **fonctionne normalement**. Un capteur à tube est prêt dès qu'il est branché. Un capteur **ouvert** doit être posé sur son support, ou maintenu de façon qu'**aucune lumière du jour ne pénètre dans le canal optique** — l'espace entre les deux verres. En pleine lumière, le capteur signale un flux de graines permanent et n'accepte pas la nouvelle adresse.

::: steps
1. Choisissez **« Service »** → **« Sensors Configuration »** (configuration des capteurs) → **« Seed sensor »** (capteur de graines) et appuyez sur **« MENU »**. Le menu comporte trois rubriques.

   ![Le menu de configuration « Seed sensor ».](figures/konf-seed)

2. Laissez **« Sensor address »** (adresse du capteur) sur **« AUTO »**.

3. Sélectionnez **« New address »** (nouvelle adresse) et réglez le numéro du rang avec **« PLUS »** / **« MINUS »**.

4. Sélectionnez **« Set »** (valider) et appuyez sur **« MENU »**. Le boîtier répond **« Done »** (terminé).

   ![Le boîtier confirme par « Done ».](figures/info-done)

5. Débranchez le capteur et rebranchez-le. Sur l'écran d'accueil, vérifiez qu'il apparaît sous son rang.
:::

Quand tous les capteurs sont faits, remettez le niveau sur **« Operator »** (opérateur), ou éteignez puis rallumez le boîtier.
