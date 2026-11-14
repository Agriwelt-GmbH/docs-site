---
title: Couleurs des barres et les trois rouges
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/bar-colours.html
---

# Couleurs des barres et les trois rouges

Ce que signifient chaque couleur, hachure et signe de la barre d'un rang sur l'écran des rangs, et les trois rouges différents.

En cabine, on lit la couleur, pas le texte. Chaque barre de [l'écran des rangs](rows-screen.md) prend l'un des aspects ci-dessous.

## La barre elle-même {#the-bar-itself}

| Ce que vous voyez | Ce que cela signifie |
| --- | --- |
| Barre verte | Le rang sème dans la norme. |
| Barre jaune | Le rang sème sous la ligne de contrôle (Flow) ou sous la plage de tolérance (Hybrid, Precision). |
| Barre bleue | Le rang sème au-dessus de la plage de tolérance. Uniquement en Hybrid et Precision. |
| Barres étroites jaune et bleue de part et d'autre d'une barre verte | Manques (jaune, à gauche) et doubles (bleu, à droite) du rang. Uniquement en Precision, avec **« Skips & doubles »** (manques et doubles) activé. |

## Les trois rouges {#the-three-reds}

| Ce que vous voyez | Ce que cela signifie | Que faire |
| --- | --- | --- |
| **Rouge vif, clignotant**, avec une ✕ rouge | Le capteur n'a **jamais répondu** depuis la mise sous tension de la passerelle. | Contrôlez la fiche et le câble du capteur. [Code 101](codes-1-row-sensor.md#c101) |
| **Fond gris avec une ✕ rouge** | Le capteur a répondu, puis **s'est tu**. | Contrôlez la fiche et le câble du capteur. [Code 101](codes-1-row-sensor.md#c101) |
| **Rouge foncé, clignotant** | Le capteur est là, mais **aucune graine ne passe** devant lui. | Contrôlez le doseur et le tube de descente. [Code 202](codes-2-seeding.md#c202) |

Une colonne rouge vif qui clignote avec un « ? » signifie que l'appareil portant le numéro de ce rang n'est pas un capteur de graines. [Code 106](codes-1-row-sensor.md#c106)

## Autres aspects {#other-looks}

| Ce que vous voyez | Ce que cela signifie |
| --- | --- |
| Colonne blanche avec un « ! » noir | Le rang est retiré de la surveillance : il ne déclenche aucune alarme et ne compte pas dans la proportion de rangs semant. [Le menu du rang](row-menu.md) |
| Hachures grises | Le rang est dans le jalonnage et ne doit pas semer. [Jalonnage](tramline.md) |
| Hachures rouges sur le gris | Le rang sème alors qu'il est dans le jalonnage. [Code 206](codes-2-seeding.md#c206) |
| Un « ? » au-dessus d'une colonne vide | On ne sait encore rien du rang. |
| Une barre qui se remplit lentement avec un « ? » jaune | La passerelle envoie au capteur un nouveau réglage, par exemple une nouvelle **« Fraction »**. Les rangs le font l'un après l'autre ; cela prend quelques secondes chacun. |

Un capteur qui signale un défaut — bouché, ébloui, défectueux — garde sa barre ; la cause apparaît dans la fenêtre d'alarme. [1xx · Défauts du capteur de rang](codes-1-row-sensor.md)

Les mêmes couleurs figurent dans l'aide intégrée : **« Settings »** (réglages) › **« App »** (app) › **« Help »** (aide) › **« Bar colours and the three reds »** (couleurs des barres et les trois rouges).
