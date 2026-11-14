---
title: Configurer un HUB8
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/configure-hub8.html
---

# Configurer un HUB8

Indiquez à un appareil d'entrée HUB8 — « Concentrator-8 » à l'écran — ce qui est câblé sur chacune de ses huit voies.

Le HUB8 porte plusieurs appareils à la fois. Sur le panneau, il s'appelle **« Concentrator-8 »** (concentrateur 8). Son menu est plus long que les autres : après l'adresse de l'appareil viennent ses **huit voies**, chacune avec un type et un numéro. Préparez d'abord comme dans [Configuration des appareils](device-configuration.md) : ce HUB8 seul sur le câble, niveau **« Agronomist »**.

| **Élément** | **Ce que c'est** |
| --- | --- |
| **« Device address »** | Avec quel HUB8 le menu dialogue (adresse de l'appareil). Laissez **« AUTO »**. |
| **« Channel 1 type »** … **« Channel 8 type »** | Ce qui est câblé sur la voie (type de la voie) : **« Seed sensors »** (capteurs de graines) ou **« Input device »** (appareil d'entrée). |
| **« Channel 1 address »** … **« Channel 8 address »** | De quel appareil de ce type il s'agit (adresse de la voie) : pour un capteur de graines, le numéro de son rang ; pour un appareil d'entrée, la valeur de la fiche technique du système. |
| **« Set »** | Écrit toutes les voies dans le HUB8 (valider). |

![Le menu Concentrator-8 avec ses premières voies.](figures/five-cfg-hub8)

Le type et le numéro ensemble font apparaître l'appareil à la bonne place sur l'écran d'accueil.

::: steps
1. Ouvrez **« Service »** → **« Sensors Configuration »** → **« Concentrator-8 »** — touchez chaque élément deux fois.

2. Laissez **« Device address »** sur **« AUTO »**.

3. Pour chaque voie qui porte un appareil, touchez l'élément de son type — **« Channel 1 type »** pour la voie 1 — et glissez jusqu'au type, puis touchez l'élément de son adresse — **« Channel 1 address »** — et glissez jusqu'au numéro. Laissez telle quelle une voie qui ne porte rien.

4. Glissez vers le haut jusqu'à **« Set »**, à la fin du menu, touchez-le, puis touchez-le de nouveau. Le panneau répond **« Done »** (terminé).

5. Débranchez le HUB8 et rebranchez-le. Sur l'écran d'accueil, vérifiez que chaque appareil apparaît à sa place.
:::

Deux voies du même type ne peuvent pas avoir le même numéro : **« Set »** refuse alors avec **« Invalid profile! »** (profil invalide) et n'écrit rien.

Quand tous les appareils sont faits, remettez le niveau sur **« Operator »**, ou éteignez puis rallumez le panneau.
