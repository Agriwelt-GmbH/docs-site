---
title: État du capteur de graines : Clogged, Light struck, Broken
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-sensor-state.html
---

# État du capteur de graines : Clogged, Light struck, Broken

Que faire quand un capteur de graines ou d'engrais du Hectare Mini signale que son canal optique est obstrué, qu'il est aveuglé par le soleil ou qu'il est en panne.

Ces trois alarmes sont signalées par le capteur de graines ou d'engrais lui-même à propos de son propre état. La ligne d'appareil désigne le capteur. Son écran d'état affiche le même état sur la ligne **Status:** — [L'écran d'état d'un capteur](sensor-status-screen.md#states-of-a-seed-or-fertilizer-sensor).

## « Clogged » — obstrué {#clogged}

**Ce que cela signifie.** Quelque chose obstrue le canal optique du capteur. Le soc ou le tube de descente est peut-être bouché.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Le soc et le tube de descente : terre, caillou, semence humide.
2. Le canal optique du capteur : éliminez l'obstruction, nettoyez la poussière.
3. L'alimentation du capteur — elle doit correspondre aux valeurs de la fiche technique du système.

## « Light struck » — aveuglé par la lumière {#light-struck}

**Ce que cela signifie.** Trop de lumière tombe dans le canal optique ; le capteur ne peut pas compter. Le boîtier ne le signale que tant que la machine avance (ou toujours, sans capteur de vitesse) — un outil relevé en fourrière ne le provoque pas.

**Ce qu'il faut contrôler :** tenez la lumière directe du soleil hors du canal optique — l'assise d'un capteur ouvert sur son soc, les capots, la position du capteur.

## « Broken » — défectueux {#broken}

**Ce que cela signifie.** Le capteur a détecté un défaut en lui-même. Sur son écran d'état, il affiche **« Faulty »**. Le capteur doit peut-être être remplacé.

**Ce qu'il faut contrôler, dans cet ordre :**

1. L'alimentation du capteur — elle doit correspondre aux valeurs de la fiche technique du système.
2. Débranchez et rebranchez le capteur.
3. S'il reste sur **« Faulty »**, remplacez le capteur. Un capteur de graines neuf a besoin du numéro de son rang — [Configurer un capteur de graines](configure-seed-sensor.md).
