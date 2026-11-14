---
title: Configurer un capteur de pression
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/configure-pressure-sensor.html
---

# Configurer un capteur de pression

Donnez son adresse à un capteur de pression neuf ou remplacé du Hectare Mini — les trois rubriques du menu et le contrôle final.

Chaque capteur de pression du profil répond à sa propre adresse ; le premier capteur de pression a la première adresse de la plage, le deuxième la suivante, et ainsi de suite. **« New address »** (nouvelle adresse) ne propose que les adresses de cette plage. Demandez au service après-vente laquelle il faut à votre capteur si vous avez un doute. Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : uniquement ce capteur sur le faisceau, niveau **« Agronomist »** (agronome), menu **« Sensors Configuration »** (configuration des capteurs) ouvert.

::: steps
1. Dans **« Sensors Configuration »**, sélectionnez **« Pressure sensor »** (capteur de pression) et appuyez sur **« MENU »**. Le menu comporte trois rubriques : **« Sensor address »** (adresse du capteur), **« New address »** et **« Set »** (valider).

2. Laissez **« Sensor address »** sur **« AUTO »**.

3. Sélectionnez **« New address »** et réglez l'adresse avec **« PLUS »** / **« MINUS »**. Elle s'ouvre sur la première adresse de la plage, celle du capteur de pression 1.

4. Sélectionnez **« Set »** et appuyez sur **« MENU »**. Le boîtier répond **« Done »** (terminé).

   ![Le menu Pressure sensor (l'adresse est masquée dans ce manuel).](figures/addr-pressure)

5. Débranchez le capteur et rebranchez-le. Revenez à l'écran d'accueil avec **« BACK »**. Le capteur de pression doit se manifester de nouveau ; tant qu'un capteur de pression est absent, son indicateur affiche une croix rouge et **XXXX**.

   ![L'écran d'accueil tant que les capteurs de pression ne sont pas branchés.](figures/home-pressure-offline)
:::

Quand tous les appareils sont faits, revenez au niveau **« Operator »** (opérateur) — remettez **« User »** (utilisateur) dans **« Settings »** (réglages), ou éteignez puis rallumez le boîtier — et rebranchez tous les appareils.

**Maintenez « MENU »** enfoncé sur **« Sensor address »** pour chercher un capteur de pression sur le faisceau, comme décrit pour le capteur de graines — [Recherche d'un capteur](configure-seed-sensor.md#searching-for-a-sensor). Les messages d'erreur : [Les règles de toute configuration](device-configuration.md#the-rules-of-every-configuration).
