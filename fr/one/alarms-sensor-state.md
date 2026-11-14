---
title: Capteur de graines ou d'engrais obstrué, ébloui ou défectueux
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-sensor-state.html
---

# Capteur de graines ou d'engrais obstrué, ébloui ou défectueux

Que faire quand un capteur optique de graines ou d'engrais signale un canal bloqué, trop de lumière, un défaut propre ou un micrologiciel périmé.

Les capteurs de graines et d'engrais solide comptent le produit par voie optique : un émetteur éclaire le canal, un récepteur voit chaque grain. Ces alarmes signalent l'état du capteur lui-même, et non la dose. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Clogged » — obstrué {#clogged}

**Ce que cela signifie.** Le capteur de graines ou d'engrais solide a détecté que son canal optique est bloqué.

**Que faire, dans cet ordre :**

1. Éliminez l'obstruction.
2. Vérifiez qu'il n'y a pas d'accumulation de poussière dans le canal.
3. Vérifiez l'alimentation du capteur. Elle doit respecter les valeurs du passeport de l'appareil.

## « Light struck » — ébloui {#light-struck}

**Ce que cela signifie.** Le capteur de graines ou d'engrais a détecté un niveau de lumière extrêmement élevé dans son canal optique.

**Que faire :** empêchez la lumière directe du soleil de pénétrer dans le canal optique du capteur.

## « Broken » — défectueux {#broken}

**Ce que cela signifie.** Le capteur de graines ou d'engrais solide a détecté un défaut qui lui est propre. Il faudra peut-être le remplacer.

**Que faire :** vérifiez l'alimentation du capteur. Elle doit respecter les valeurs du passeport de l'appareil. Si l'alimentation est en ordre, le capteur devra peut-être être remplacé — appelez le support technique.

## « Old firmware! Wrong S&D calc! » — micrologiciel périmé, calcul des manques et doubles faussé {#old-firmware-wrong-sd-calc}

**Ce que cela signifie.** Un capteur de graines au micrologiciel périmé est utilisé. Il compte, mais ses manques et ses doubles ne sont pas fiables.

**Que faire :** appelez le support technique pour faire mettre à jour le micrologiciel du capteur.

> **VOIR AUSSI**
>
> L'écran d'état du capteur affiche les mêmes états — **« Clogged »**, **« Light struck »**, **« Faulty »** — en rouge : [L'écran d'état du capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
