---
title: 3xx · Trémie, turbine, doseur et entrées du tracteur
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes-3-machine-devices.html
---

# 3xx · Trémie, turbine, doseur et entrées du tracteur

Codes 301–311 : les appareils du boîtier HUB-8 — trémie, turbine, doseur, position de travail et entrées du tracteur.

Les codes 3xx viennent des appareils câblés au boîtier HUB-8 : niveau de trémie, vitesse de turbine, rotation du doseur et entrées du tracteur (pression d'huile, charge de la batterie, carburant, filtre à air). L'emplacement est l'appareil, par exemple *301 · trémie*. Comment les appareils se règlent : [Entrées du HUB-8](hub8-inputs.md).

Comment lire un code, les quatre classes et l'aspect de chacune dans l'app : [Comment fonctionnent les codes de service](codes.md).

## 301 · Trémie vide {#c301}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Hopper empty »** (trémie vide). La vignette de la trémie affiche **« Empty »** (vide) avec un anneau rouge. Cette alarme retentit même machine à l'arrêt.

**Que faire :**

1. Remplissez la trémie.
2. Si la trémie est pleine, contrôlez le capteur de niveau et son réglage : [Entrées du HUB-8](hub8-inputs.md).

## 302 · Turbine trop lente {#c302}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Fan speed too low »** (vitesse de turbine trop basse). La vignette de la turbine affiche la vitesse en tr/min avec un anneau rouge. Uniquement pendant le semis.

**Que faire :**

1. Augmentez la vitesse de la turbine : débit hydraulique, régime moteur.
2. Contrôlez **« Min, rpm »** (min, tr/min) et **« Pulses per revolution »** (impulsions par tour) de la turbine : [Entrées du HUB-8](hub8-inputs.md).

## 303 · Turbine trop rapide {#c303}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Fan speed too high »** (vitesse de turbine trop haute). La vignette de la turbine affiche la vitesse en tr/min avec un anneau rouge.

**Que faire :**

1. Réduisez la vitesse de la turbine.
2. Contrôlez **« Max, rpm »** (max, tr/min) et **« Pulses per revolution »** (impulsions par tour) de la turbine : [Entrées du HUB-8](hub8-inputs.md).

## 304 · Doseur à l'arrêt {#c304}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Dispenser not turning »** (doseur à l'arrêt). La vignette du doseur affiche **« Stopped »** (arrêté) avec un anneau rouge. Uniquement pendant le semis, après le délai réglé dans **« Period, s »** (période, s).

**Que faire :**

1. Arrêtez-vous : le doseur ne tourne pas.
2. Contrôlez son entraînement, la chaîne et l'embrayage.
3. S'il tourne bien, contrôlez le capteur d'arbre et **« Period, s »**.

## 305 · Pression d'huile basse {#c305}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Emergency oil pressure »** (pression d'huile critique). Avec une entrée d'allumage, elle ne retentit que contact mis.

**Que faire :**

1. Arrêtez le moteur.
2. Contrôlez le niveau d'huile.

## 306 · La batterie ne se charge pas {#c306}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« No battery charge »** (pas de charge de la batterie). Avec une entrée d'allumage, elle ne retentit que contact mis.

**Que faire :**

1. Contrôlez l'alternateur et sa courroie.

## 307 · Carburant bas {#c307}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Low fuel »** (carburant bas).

**Que faire :**

1. Faites le plein.

## 308 · Filtre à air colmaté {#c308}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Air filter clogged »** (filtre à air colmaté).

**Que faire :**

1. Nettoyez ou remplacez le filtre à air.

## 309 · Un appareil de la machine ne répond pas {#c309}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Connection lost: »** (liaison perdue :) suivi du nom de l'appareil, par exemple la trémie. Sa vignette a un anneau gris.

**Que faire :**

1. Contrôlez le câble de l'appareil nommé jusqu'au HUB-8.
2. Contrôlez l'alimentation et le câble du HUB-8 lui-même, si tous ses appareils sont muets.

## 310 · Mauvais appareil sur une entrée du HUB-8 {#c310}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Wrong device type: »** (mauvais type d'appareil :) suivi du nom de l'appareil. Sa vignette affiche **« Wrong »** (erroné).

**Que faire :**

1. Vérifiez que l'appareil est câblé sur sa propre entrée.
2. Vérifiez que le type de l'appareil est correct dans les appareils de la machine : [Entrées du HUB-8](hub8-inputs.md).

## 311 · Entrée du tracteur en alarme {#c311}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'appareil.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Alarm: »** (alarme :) suivi du nom de l'appareil.

**Que faire :**

1. Contrôlez l'appareil nommé dans la fenêtre.
