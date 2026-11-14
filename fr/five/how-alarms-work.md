---
title: Fonctionnement des alarmes
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/how-alarms-work.html
---

# Fonctionnement des alarmes

Quand l'Hectare 5 déclenche une alarme, ce que montre la fenêtre d'alarme, comment la fermer au toucher, quels défauts retentissent sans fenêtre, et comment utiliser les rubriques d'alarmes de ce manuel.

Une alarme est une fenêtre qui s'ouvre sur l'écran de travail, avec le son d'alarme. Elle vous dit qu'un appareil — un capteur, un actionneur, un contrôleur de moteur — ou le système dans son ensemble a détecté un défaut. Les rubriques d'alarmes de cette section sont regroupées par appareil qui déclenche l'alarme. **Cherchez les mots que vous voyez à l'écran**, pas une description de ces mots.

## Quand le panneau déclenche une alarme {#when-the-panel-raises-an-alarm}

Un défaut n'est pas signalé à l'instant où il apparaît. **La condition doit persister sans interruption pendant la durée réglée dans « Alarm delay » (temporisation des alarmes) avant que la fenêtre d'alarme s'ouvre.**

| **Réglage** | **Valeur** |
| --- | --- |
| Où il se règle | Menu **« Settings »** (réglages), élément **« Alarm delay »**, au niveau **« Operator »**. Voir [Le menu Settings](settings-menu.md). |
| Plage | **2 à 20 secondes**, par pas de 1 seconde. |
| Valeur par défaut | **3 secondes.** Une valeur hors plage est ramenée d'elle-même à la valeur par défaut. |

Une courte temporisation fait réagir vite le panneau, mais aussi aux perturbations brèves — un seul cahot, une brève interruption du flux de graines. Une longue temporisation garde l'écran calme, mais un vrai défaut peut durer jusqu'à vingt secondes avant que vous en soyez informé.

> **CONSEIL**
>
> **Si le système alarme trop souvent sur un champ accidenté, augmentez d'abord « Alarm delay ».** Ne modifiez les réglages des capteurs que si une temporisation plus longue n'y change rien.

Deux cas ne suivent pas la temporisation :

- **La communication perdue** se compte en interrogations, pas en secondes. **« Connection lost »** (connexion perdue) apparaît après **trois interrogations de suite** sans réponse de l'appareil.
- **Juste après le réglage d'un capteur**, ses alarmes ne sont pas traitées pendant une courte période de blocage. Cela évite une rafale d'alarmes pendant la configuration d'un appareil.

## La fenêtre d'alarme {#the-alarm-window}

::: {.anatomy fig="five-alarm-window"}
1. **« FAILURE! »** (défaillance !) — le titre de toute fenêtre d'alarme, sur une barre rouge, quel que soit le défaut. Ce n'est pas le défaut lui-même.
2. **Le texte de l'alarme** — le défaut. Cherchez-le sous ce texte dans les rubriques d'alarmes.
3. **Le type d'appareil** qui déclenche l'alarme — ici un capteur de trémie. Le même texte peut venir d'appareils différents ; cette ligne vous dit lequel.
4. **Le numéro de l'appareil** — ici la trémie 2. Quand plusieurs appareils du même type déclenchent la même alarme, ils partagent une seule fenêtre et sont listés ensemble, par exemple **#3-5,8**.
5. **« Close »** (fermer) — ferme cette alarme. [Plus bas](#closing-an-alarm).

La fenêtre d'alarme d'une trémie vide.
:::

Une alarme de surintensité d'un moteur ajoute une ligne avec le courant mesuré par le contrôleur, en ampères. Les alarmes du panneau lui-même — par exemple **« User is Agronomist! »** (l'utilisateur est Agronomist) — n'ont pas de ligne d'appareil ; leur texte commence par la ligne **« HOME - close message »** (HOME : fermer le message). Elles se ferment comme toutes les autres, avec **« Close »**.

## Fermer une alarme {#closing-an-alarm}

**Touchez « Close » dans la fenêtre.** Cette alarme se ferme et le son s'arrête. S'il y a d'autres alarmes en attente, la suivante s'ouvre. **Rien d'autre ne ferme une fenêtre d'alarme** — les touchers ailleurs, les glissements et le toucher à trois doigts sont ignorés tant qu'elle est ouverte.

Fermer une fenêtre ne répare pas le défaut. Les alarmes d'un appareil encore actives sont comptées sur son écran d'état — voir [L'écran d'état d'un capteur](sensor-status-screen.md).

## Les alarmes sont masquées aux niveaux d'accès supérieurs {#alarms-are-hidden-at-the-higher-access-levels}

Aux niveaux **« Agronomist »** et **« Service »**, aucune fenêtre d'alarme ne s'affiche — sauf l'unique avertissement qui le dit, [User is Agronomist](alarms-access-level.md) — et les défauts sans fenêtre restent silencieux eux aussi. Les alarmes ne sont pas perdues : elles attendent. Quand vous revenez au niveau **« Operator »**, le panneau écarte celles qui ont disparu et affiche celles qui sont toujours vraies, l'une après l'autre. Voir [Niveaux d'accès](access-levels.md).

## Alarmes sans fenêtre {#alarms-without-a-window}

Deux défauts ne s'affichent pas dans une fenêtre, parce que vous devez voir l'écran de travail pendant que vous les corrigez. Au niveau **« Operator »**, le son d'alarme retentit tant qu'ils durent, pourvu qu'aucune fenêtre d'alarme ne soit ouverte :

- **« SLOWER »** (plus lentement) ou **« FASTER »** (plus vite) — la vitesse d'avancement est hors des limites réglées pour le capteur de vitesse. Le champ de vitesse montre le mot. Voir [Indicateurs](indicators.md#speed).
- **« NOT UNDER CONTROL »** (hors surveillance) — des rangs passent sous la ligne de contrôle de leur diagramme. Voir [Le diagramme des sections](section-diagram.md#the-line-rows-under-it-are-not-under-control).

## Comment les rubriques d'alarmes sont écrites {#how-the-alarm-topics-are-written}

Chaque alarme a son propre titre, avec le texte exactement comme à l'écran ; quand le message tient sur deux lignes du panneau, les deux lignes sont données. En dessous : ce que le panneau a détecté, et ce qu'il faut vérifier, dans l'ordre où un mécanicien le vérifie — d'abord les contrôles rapides sur le panneau, puis la machine, puis l'appareil lui-même.

> **REMARQUE**
>
> Si les vérifications ne font pas disparaître le défaut, appelez le service d'assistance.
