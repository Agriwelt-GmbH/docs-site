---
title: Comment fonctionnent les codes de service
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes.html
---

# Comment fonctionnent les codes de service

Ce que signifient les trois chiffres d'un code de service Agrigate, comment l'emplacement est indiqué à côté, les quatre classes et l'aspect de chacune dans l'app, et comment retrouver un code à partir des mots affichés à l'écran.

Chaque alarme, défaut et événement notable d'un système Agrigate a un code de service à trois chiffres. Un code ne change jamais de sens : si vous dites au service *102 sur le rang 7*, il sait ce qui s'est passé sans voir l'écran.

## Les trois chiffres {#the-three-digits}

Le premier chiffre désigne la partie du système ; les deux autres, le type de défaut.

| Code | Partie du système |
| --- | --- |
| [1xx](codes-1-row-sensor.md) | Le capteur d'un rang lui-même |
| [2xx](codes-2-seeding.md) | Le semis d'un rang — le capteur fonctionne, le rang sème mal |
| [3xx](codes-3-machine-devices.md) | Les appareils du HUB-8 : trémie, turbine, doseur, entrées du tracteur |
| [4xx](codes-4-tramline.md) | Actionneurs de jalonnage |
| 5xx | Non utilisé dans cette version |
| [6xx](codes-6-gateway-link.md) | La passerelle et la liaison avec elle |
| [7xx](codes-7-tablet.md) | L'iPad ou l'iPhone |
| [8xx](codes-8-gateway-update.md) | La mise à jour de la passerelle |
| [9xx](codes-9-setup.md) | Les réponses de la passerelle quand l'app règle quelque chose |

## L'emplacement est indiqué à côté du code {#the-place-is-shown-beside-the-code}

Le code dit *quoi* ; l'emplacement dit *où*. Il est écrit à côté du code, pas dedans : *102 · rang 7*, *301 · trémie*, *404 · actionneur de jalonnage n° 2*. Un même code couvre donc tous les rangs et tous les appareils.

## Les quatre classes {#classes}

### Alarme {#class-alarm}

Une fenêtre à bandeau de titre rouge **« ALARM! »** (alarme) et l'avertisseur sonore. Quelque chose sur la machine exige votre intervention immédiate. [La fenêtre d'alarme](alarm-window.md)

### Défaut d'appareil {#class-fault}

La même fenêtre, à bandeau de titre orange, et l'avertisseur sonore. Un appareil se déclare défectueux — bouché, ébloui, mauvais type d'appareil.

### Attention {#class-attention}

Pas de fenêtre. Une pastille jaune ou une ligne à côté de ce que vous faites — par exemple **« Volume is off »** (volume coupé), ou un message sur la page de réglage. Lisez-le et agissez dès que possible. [Messages à l'écran](screen-messages.md)

### Enregistrement {#class-record}

Rien à faire. L'événement est conservé pour le service.

## Retrouver un code à partir de l'écran {#finding-a-code-from-the-screen}

> **REMARQUE**
>
> **Dans cette préversion, la fenêtre d'alarme affiche les mots de l'alarme, pas son code.** Retrouvez les mots dans les rubriques de codes — chaque code y donne les mots que l'app affiche. La mise à jour de la passerelle affiche ses codes à l'écran, par exemple **« 804 · Bridge updated »** (passerelle mise à jour). Pour les réponses de réglage de la passerelle, l'app affiche un numéro après les mots ; voir [9xx](codes-9-setup.md).

Deux codes partagent leurs mots à l'écran : 201 et 202 disent tous deux **« Under allowable rate »** (sous la dose admise). La barre les distingue — jaune pour 201, rouge foncé clignotant pour 202 — ainsi que le menu du rang (**« Not seeding »** (ne sème pas) pour 202).

## Quand vous appelez le service {#when-you-call-the-service}

Indiquez le code (ou les mots affichés à l'écran), l'emplacement — le rang ou l'appareil —, et, depuis **« Settings »** (réglages) : la version de l'app (**« App »** › **« Version »**) et le micrologiciel de la passerelle (**« Machine »** › **« Bridge firmware »** (micrologiciel de la passerelle)).
