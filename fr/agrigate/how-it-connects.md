---
title: Comment les éléments sont reliés
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/how-it-connects.html
---

# Comment les éléments sont reliés

Le trajet d'une mesure, du capteur dans le tube de descente jusqu'à l'écran de l'iPad — ligne de capteurs, passerelle, Bluetooth, app — et ce que sait chaque élément.

Une mesure voyage ainsi :

1. **Le capteur** dans le tube de descente compte les graines de son rang.
2. **La ligne de capteurs** du semoir transmet vers la cabine les mesures de tous les capteurs, du HUB-8 et des actionneurs de jalonnage. Chaque appareil de la ligne a son propre numéro ; pour un capteur de graines, il correspond à son rang.
3. **La passerelle**, à l'extrémité cabine de la ligne de capteurs, interroge chaque appareil à tour de rôle et rassemble les réponses.
4. **Le Bluetooth** les transmet de la passerelle à la tablette, environ deux fois par seconde.
5. **L'app Hectare** dessine les rangs, les juge par rapport à la dose et déclenche les alarmes.

## Ce que sait chaque élément {#what-each-part-knows}

| Élément | Sait | Ne sait pas |
| --- | --- | --- |
| Capteur | Son propre comptage et ses propres défauts | Rien sur les autres rangs |
| Passerelle | Quels appareils sont sur la ligne, dans quel ordre, et ce que chacun répond. Elle conserve le profil de machine que l'app lui écrit. | Ce que signifie une entrée du HUB-8 — une trémie, une turbine, la position de travail. Cela vit dans l'app. |
| App | Tout ce que vous voyez : la dose, la ligne de contrôle, les alarmes, les statistiques, la signification de chaque appareil | — |

Le jugement est donc porté dans l'app : le délai d'alarme, la proportion de rangs qui doivent semer, la tolérance — tout cela se règle dans l'app. Voir [Réglages Control and Alarms](settings-control-alarms.md).

## Une passerelle, une tablette {#one-gateway-one-tablet}

Une passerelle ne parle qu'à une tablette à la fois. L'app mémorise sa passerelle et ne se connecte plus qu'à elle ; quand plusieurs passerelles sont à portée, elle demande laquelle est la vôtre. Voir [Première connexion à la passerelle](first-connection.md).

## Quand la liaison est perdue {#when-the-link-is-lost}

Quand le Bluetooth se coupe, ou que la passerelle cesse d'émettre, l'app assombrit l'écran — tous ses chiffres sont périmés — et, après 3 secondes, ouvre la fenêtre d'alarme **« Bridge link lost »** (liaison avec la passerelle perdue). La fenêtre se ferme d'elle-même quand la passerelle répond de nouveau. Voir [code 601](codes-6-gateway-link.md#c601).

> **VOIR AUSSI**
>
> [Contenu du kit](whats-in-the-kit.md) · [Monter et raccorder la passerelle](mount-and-connect.md)
