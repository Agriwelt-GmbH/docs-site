---
title: Fonctionnement des alarmes
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/how-alarms-work.html
---

# Fonctionnement des alarmes

Quand le Hectare Mini déclenche une alarme, ce que montre la fenêtre d'alarme, comment la fermer, quels messages ne sont pas des fenêtres d'alarme et comment les rubriques d'alarme de ce manuel sont organisées.

Une alarme est une fenêtre qui s'ouvre par-dessus l'écran de travail, accompagnée d'un signal d'alarme. Elle vous indique qu'un appareil — un capteur, un moteur, un actionneur — ou le système dans son ensemble a détecté un défaut. Les rubriques d'alarme de cette section sont classées par appareil. **Cherchez les mots que vous voyez à l'écran.**

## Quand le boîtier déclenche une alarme {#when-the-panel-raises-an-alarm}

Un défaut n'est pas signalé à l'instant où il apparaît. **La condition doit persister sans interruption pendant la durée réglée dans « Alarm delay » (délai d'alarme) avant que la fenêtre s'ouvre.**

| **Réglage** | **Valeur** |
| --- | --- |
| Où | **« Settings »** (réglages) → **« Alarm delay »**, niveau **« Operator »** (opérateur) — [Le menu Settings](settings-menu.md) |
| Plage | 2 à 20 secondes, par pas de 1 seconde |
| Valeur par défaut | 3 secondes. Une valeur enregistrée hors de la plage est remise d'elle-même à 3. |

Un délai court réagit vite, mais aussi à un simple cahot ou à une brève interruption du flux de graines. Un délai long garde l'écran calme, mais un vrai défaut peut durer jusqu'à vingt secondes avant que vous en soyez informé.

> **CONSEIL**
>
> **Si le système alarme trop souvent sur un champ accidenté, augmentez d'abord « Alarm delay ».** Ne modifiez les réglages des capteurs que si un délai plus long ne suffit pas.

Deux cas ne suivent pas le délai :

- **Une connexion perdue** est comptée en interrogations : **« Connection lost »** (connexion perdue) apparaît après **trois interrogations de suite** sans réponse.
- **Juste après qu'un capteur a reçu de nouveaux réglages**, ses alarmes sont retenues pendant un court moment, pour que la configuration d'un appareil ne provoque pas une rafale d'alarmes.

## La fenêtre d'alarme {#the-alarm-window}

::: {.anatomy fig="alarm-window"}
1. **« FAILURE! »** (défaut !) — le titre rouge de chaque fenêtre d'alarme, quel que soit le défaut.
2. **« HOME - close message »** (HOME - fermer le message) — l'indication pour la fermer.
3. **Le texte de l'alarme** — le défaut. Cherchez-le sous ce texte dans les rubriques d'alarme.
4. **Le type d'appareil**, ici la turbine. Le même texte peut venir d'appareils différents ; cette ligne vous dit lequel.
5. **Le numéro de l'appareil**, ici la turbine 1. Quand plusieurs appareils d'un même type signalent le même défaut, ils partagent une fenêtre et sont listés ensemble, par exemple **#3-5,8**.
6. **« Close »** (fermer) — ferme cette alarme.

La fenêtre d'alarme d'un capteur de turbine qui ne répond pas.
:::

Les alarmes du système dans son ensemble — par exemple sur la dose d'un produit — n'ont pas de ligne d'appareil.

## Fermer une alarme {#closing-an-alarm}

| **Ce que vous faites** | **Ce qui se passe** |
| --- | --- |
| Appuyez sur **« HOME »**, ou touchez **« Close »** | Cette alarme se ferme. S'il en reste en attente, la suivante s'ouvre. Les autres touches ne font rien dans la fenêtre. |
| Maintenez **« HOME »** enfoncé | La fenêtre se ferme et le boîtier revient à l'écran d'accueil. |

Tant que la fenêtre est ouverte, le boîtier émet le signal d'alarme et allume son voyant d'alarme. **Fermer une fenêtre ne répare pas le défaut**, et la même alarme ne revient qu'après que le défaut a disparu puis est réapparu. Les alarmes actives d'un capteur restent listées sur son écran d'état — [L'écran d'état d'un capteur](sensor-status-screen.md).

## Les alarmes sont masquées aux niveaux d'accès élevés {#alarms-are-hidden-at-the-higher-access-levels}

Aux niveaux **« Agronomist »** (agronome) et **« Service »** (service après-vente), aucune fenêtre d'alarme n'est affichée. Elles ne sont pas perdues : quand vous revenez au niveau **« Operator »**, le boîtier écarte les alarmes qui ont disparu et affiche celles qui sont toujours vraies. Voir [Niveaux d'accès](access-levels.md#what-happens-to-the-alarms-while-the-level-is-high) et [User is Agronomist](alarms-access-level.md).

## Messages qui ne sont pas des fenêtres d'alarme {#not-alarm-windows}

| **Message** | **Où** | **Rubrique** |
| --- | --- | --- |
| **« SLOWER »**, **« FASTER »** | à la place de la valeur de vitesse | [Alarmes du capteur de vitesse](alarms-speed-sensor.md) |
| **« NOT UNDER CONTROL »** | sur le schéma de semis | [Alarmes de semis](alarms-seeding.md#not-under-control) |

## Les rubriques d'alarme {#the-alarm-topics}

[Tout appareil](alarms-any-device.md) · [Capteur de vitesse](alarms-speed-sensor.md) · [Semis](alarms-seeding.md) · [État du capteur de graines](alarms-sensor-state.md) · [Turbine et arbre de doseur](alarms-rotation.md) · [Trémie](alarms-hopper.md) · [Pression](alarms-pressure.md) · [Moteur](alarms-engine.md) · [Dosage au poids](alarms-dosing-by-weight.md) · [Niveau d'accès](alarms-access-level.md) · [Jalonnage](alarms-tramline.md) · [Moteurs de doseur](alarms-electric-motors.md)

Chaque alarme a son propre titre, avec le texte exactement tel qu'il apparaît à l'écran. En dessous : ce que le boîtier a détecté, et ce qu'il faut contrôler, dans l'ordre où un mécanicien le contrôle — d'abord les contrôles rapides sur le boîtier, puis la machine, puis le capteur lui-même.

> **REMARQUE**
>
> Si les contrôles ne font pas disparaître le défaut, appelez le service après-vente. Les coordonnées figurent dans la fiche technique du système.
