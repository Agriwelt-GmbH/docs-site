---
title: Configuration des appareils
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/device-configuration.html
---

# Configuration des appareils

À quoi sert la configuration des appareils sur le Hectare Mini et comment la préparer — un seul appareil sur le faisceau, le niveau Agronomist, le menu Sensors Configuration.

Chaque appareil du réseau de capteurs répond à sa propre **adresse**. L'adresse d'un capteur de graines est le numéro de son rang. Un capteur neuf ou remplacé doit recevoir la bonne adresse avant que le boîtier puisse le trouver. C'est la **configuration des appareils**, sous **« Service »** → **« Sensors Configuration »** (configuration des capteurs).

> **IMPORTANT**
>
> **Ce travail concerne la mise en service et le remplacement d'un capteur de graines ou d'engrais.** Il est le plus souvent réalisé en usine ou par un technicien agréé du service après-vente. Une adresse erronée fait répondre un capteur à la place d'un autre. N'essayez pas les rubriques inconnues du menu **« Service »** ; suivez uniquement ce manuel ou le technicien du service après-vente d'Agriwelt GmbH.

## Préparation {#prepare}

::: steps
1. Débranchez tous les capteurs de l'entrée de câble du faisceau de communication sur le boîtier — le connecteur à quatre broches.

   ![L'entrée de câble du faisceau de communication : le connecteur à quatre broches, le faisceau et l'alimentation.](figures/cable-entry)

2. Raccordez **uniquement** l'appareil qui doit recevoir une nouvelle adresse.

3. Allumez le boîtier. Une fois démarré, il signale **« Connection lost »** (connexion perdue) pour tous les appareils absents. Fermez les fenêtres avec **« HOME »**.

4. Passez au niveau **« Agronomist »** (agronome) — [Activer le niveau Agronomist](enable-agronomist-level.md). Pour un concentrateur HUB-8 ou un actionneur de jalonnage, passez au niveau **« Service »**.

5. Appuyez sur **« BACK »** pour revenir au menu principal. Sélectionnez **« Service »** et appuyez sur **« MENU »**.

6. Sélectionnez **« Sensors Configuration »** et appuyez sur **« MENU »**. Le menu énumère les appareils configurables.

   ![Le chemin vers la configuration des capteurs : Settings, le menu principal, le menu Service, le menu Sensors Configuration.](figures/menu-to-sensorconfig)
:::

| **Rubrique** | **Niveau** | **Comment** |
| --- | --- | --- |
| **« Seed sensor »** | Agronomist | [Configurer un capteur de graines](configure-seed-sensor.md) |
| **« Pressure sensor »** | Agronomist | [Configurer un capteur de pression](configure-pressure-sensor.md) |
| **« HUB8 »** | Service | [Configurer un concentrateur HUB-8](configure-hub8.md) |
| **« Tramline actuator »** | Service | Réservé au technicien du service après-vente. |

## Les règles de toute configuration {#the-rules-of-every-configuration}

- **Un seul appareil sur le faisceau.** Avec **« Sensor address »** (adresse du capteur) sur **« AUTO »**, le boîtier prend l'unique appareil qu'il trouve. Si plusieurs répondent, il refuse avec **« More than one device in network! »** (plusieurs appareils sur le réseau !) ; si aucun ne répond, il affiche **« No connection »** (pas de connexion).
- **La nouvelle adresse doit être libre.** Quand l'appareil a été choisi par son adresse actuelle au lieu de **« AUTO »**, le boîtier vérifie aussi la nouvelle : si un autre appareil l'utilise déjà, il affiche **« Address: … is used! »** avec le numéro, et ne change rien.
- **Tout autre refus** s'affiche **« Error # »** avec un numéro. Débranchez et rebranchez l'appareil, puis réessayez.
- **Contrôlez le résultat** : débranchez l'appareil, rebranchez-le et revenez à l'écran d'accueil avec **« BACK »**. L'appareil doit apparaître à sa place, sans croix rouge.

> **IMPORTANT**
>
> **Quand tous les appareils sont faits, revenez au niveau « Operator »** — remettez **« User »** (utilisateur) dans le menu **« Settings »** (réglages), ou éteignez puis rallumez le boîtier. Rebranchez ensuite tous les appareils.
