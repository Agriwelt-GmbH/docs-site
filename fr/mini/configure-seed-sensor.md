---
title: Configurer un capteur de graines
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/configure-seed-sensor.html
---

# Configurer un capteur de graines

Donnez à un capteur de graines neuf ou remplacé du Hectare Mini le numéro de son rang — comment tenir un capteur ouvert, les trois rubriques du menu et le contrôle final.

Pour un capteur de graines, la nouvelle adresse est **le numéro de son rang** — le numéro affiché sous sa colonne sur l'écran d'accueil. Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : uniquement ce capteur sur le faisceau, niveau **« Agronomist »** (agronome), menu **« Sensors Configuration »** (configuration des capteurs) ouvert.

L'adresse d'un capteur de graines ne peut être modifiée que tant que le capteur **fonctionne normalement**. Un capteur tubulaire est prêt dès qu'il est raccordé. Un capteur **ouvert** doit être posé sur son soc, ou tenu de façon qu'**aucune lumière directe ne tombe dans le canal optique** — l'intervalle entre les deux verres. En lumière directe, le capteur signale un défaut et n'accepte pas la nouvelle adresse.

![Tenir un capteur de graines ouvert : un doigt recouvre le canal optique entre les verres.](figures/sensor-orientation)

::: steps
1. Dans **« Sensors Configuration »**, sélectionnez **« Seed sensor »** (capteur de graines) et appuyez sur **« MENU »**. Le menu comporte trois rubriques : **« Sensor address »** (adresse du capteur), **« New address »** (nouvelle adresse) et **« Set »** (valider).

2. Laissez **« Sensor address »** sur **« AUTO »**. Si elle affiche autre chose, remettez-la avec **« PLUS »** / **« MINUS »**.

3. Sélectionnez **« New address »** et réglez le numéro du rang avec **« PLUS »** / **« MINUS »**.

4. Sélectionnez **« Set »** et appuyez sur **« MENU »**. Le boîtier répond **« Done »** (terminé) et indique l'adresse à laquelle il a trouvé le capteur.

5. Débranchez le capteur et rebranchez-le. Revenez à l'écran d'accueil avec **« BACK »** (deux fois depuis le menu **« Service »**). Le capteur doit apparaître sous son rang ; les rangs non branchés affichent une croix rouge.

   ![L'écran d'accueil après le changement d'adresse, avec un seul capteur sur le faisceau : les autres rangs et appareils barrés en rouge.](figures/home-after-readdress)
:::

Répétez l'opération pour chaque capteur à adresser. Quand tous sont faits, revenez au niveau **« Operator »** (opérateur) — remettez **« User »** (utilisateur) dans **« Settings »** (réglages), ou éteignez puis rallumez le boîtier — et rebranchez tous les appareils.

## Recherche d'un capteur {#searching-for-a-sensor}

**Maintenez « MENU » enfoncé** sur **« Sensor address »** pour chercher un capteur de graines sur le réseau : la rubrique affiche alors l'adresse actuelle du capteur trouvé. Maintenez de nouveau **« MENU »** pour chercher le suivant. Avec une adresse trouvée à la place de **« AUTO »**, **« Set »** change l'adresse de ce capteur précis, et le boîtier vérifie que la nouvelle adresse est libre. Si rien n'est trouvé, le boîtier affiche **« No connection »**.

La signification des messages d'erreur : [Les règles de toute configuration](device-configuration.md#the-rules-of-every-configuration).
