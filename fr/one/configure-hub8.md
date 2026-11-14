---
title: Configurer un HUB8
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/configure-hub8.html
---

# Configurer un HUB8

Indiquer à un dispositif d'entrée HUB8 quel capteur est câblé sur chacun de ses huit canaux.

Le HUB8 porte plusieurs capteurs à la fois. Son menu est plus long que les autres : après l'adresse de l'appareil viennent ses **huit canaux**, chacun avec un type et un numéro. Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : ce HUB8 seul sur le câble, niveau **« Agronomist »** (agronome).

::: {.anatomy fig="konf-hub8"}
1. **« Device address »** (adresse de l'appareil) — avec quel HUB8 le menu dialogue. Laissez **« AUTO »**.
2. **« Channel 1 type »** (type du canal 1) — quel genre de capteur est câblé sur le canal 1.
3. **« Channel 1 address »** (adresse du canal 1) — de quel capteur de ce genre il s'agit : trémie 1, doseur 2, etc.
4. **La valeur** de la rubrique sélectionnée, modifiée avec **« PLUS »** / **« MINUS »**.
5. **Barre de défilement.** Les canaux 2 à 8 suivent par paires identiques, puis **« Set »** (valider).

Le menu du HUB8 avec ses premiers canaux.
:::

Le type et le numéro réunis font apparaître le capteur sur l'écran d'accueil sous la bonne icône.

::: steps
1. Choisissez **« Service »** → **« Sensors Configuration »** (configuration des capteurs) → **« HUB8 »** et appuyez sur **« MENU »**.

2. Laissez **« Device address »** sur **« AUTO »**.

3. Pour chaque canal qui porte un capteur, réglez **« Channel N type »** et **« Channel N address »** avec **« PLUS »** / **« MINUS »**. Laissez tel quel un canal qui ne porte rien.

4. Sélectionnez **« Set »** à la fin du menu et appuyez sur **« MENU »**. Le boîtier répond **« Done »** (terminé).

5. Débranchez le HUB8 et rebranchez-le. Sur l'écran d'accueil, vérifiez que chaque capteur apparaît sous son icône.
:::

Quand tous les appareils sont faits, remettez le niveau sur **« Operator »** (opérateur), ou éteignez puis rallumez le boîtier.
