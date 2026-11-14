---
title: Capteur de graines ou d'engrais obstrué, ébloui ou cassé
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-sensor-state.html
---

# Capteur de graines ou d'engrais obstrué, ébloui ou cassé

Que faire quand un capteur optique de graines ou d'engrais signale un canal bouché, trop de lumière, un défaut propre, ou un micrologiciel périmé.

Les capteurs de graines et d'engrais solide comptent le produit par voie optique : un émetteur éclaire à travers le canal, un récepteur voit chaque grain. Ces alarmes signalent l'état du capteur lui-même, pas la dose. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Clogged » — obstrué {#clogged}

**Ce que cela signifie.** Le capteur de graines ou d'engrais solide a détecté que son canal optique est bouché.

**Que faire, dans cet ordre :**

1. Éliminez l'obstruction.
2. Vérifiez qu'il n'y a pas de poussière accumulée dans le canal.
3. Vérifiez l'alimentation du capteur. Elle doit respecter les valeurs du passeport de l'appareil.

## « Light struck » — éblouissement {#light-struck}

**Ce que cela signifie.** Le capteur de graines ou d'engrais a détecté un niveau de lumière extrêmement élevé dans son canal optique.

**Que faire :** tenez la lumière directe du soleil à l'écart du canal optique du capteur.

## « Broken » — cassé {#broken}

**Ce que cela signifie.** Le capteur de graines ou d'engrais solide a détecté un défaut qui lui est propre. Il faudra peut-être le remplacer. Son écran d'état affiche **« Faulty »**.

**Que faire :** vérifiez l'alimentation du capteur. Elle doit respecter les valeurs du passeport de l'appareil. Si l'alimentation est en ordre, le capteur devra peut-être être remplacé — appelez le service d'assistance.

## « Old firmware! Wrong S&D calc! » — ancien micrologiciel, mauvais calcul des manques et doubles {#old-firmware-wrong-sd-calc}

**Ce que cela signifie.** Un capteur d'**engrais solide** au micrologiciel périmé est utilisé alors que l'engrais est en mode **« Precise »**. Il compte, mais on ne peut pas se fier à ses manques et à ses doubles.

**Que faire :** appelez le service d'assistance pour faire mettre à jour le micrologiciel du capteur — ou réglez **« Mode of fertilizers »** (mode de l'engrais) sur **« Flow »** ou **« Hybrid »** ([Paramètres du semoir](seeding-machine-parameters.md)).

> **VOIR AUSSI**
>
> L'écran d'état du capteur montre en rouge les mêmes états — **« Clogged »**, **« Light struck »**, **« Faulty »** : [L'écran d'état d'un capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
