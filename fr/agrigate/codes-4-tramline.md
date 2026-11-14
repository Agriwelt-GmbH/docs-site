---
title: 4xx · Actionneurs de jalonnage
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes-4-tramline.html
---

# 4xx · Actionneurs de jalonnage

Codes 401–404 : un actionneur de jalonnage est muet, n'est pas le bon appareil, ne connaît pas sa position ou est bloqué.

Les codes 4xx viennent des actionneurs de jalonnage. La fenêtre nomme l'appareil **« Tramline actuator »** (actionneur de jalonnage) et donne son numéro, par exemple « #1 ». Comment le jalonnage se règle : [Jalonnage](tramline.md).

Comment lire un code, les quatre classes et l'aspect de chacune dans l'app : [Comment fonctionnent les codes de service](codes.md).

## 401 · L'actionneur de jalonnage ne répond pas {#c401}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'actionneur de jalonnage.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Connection lost »** (liaison perdue), **« Tramline actuator »** et son numéro.

**Que faire :**

1. Contrôlez le câble et l'alimentation de l'actionneur de jalonnage.

## 402 · Pas un actionneur de jalonnage {#c402}

**Classe :** [Défaut d'appareil](codes.md#class-fault) · **Emplacement :** l'actionneur de jalonnage.

**Ce que vous voyez.** La fenêtre d'alarme à titre orange, **« Wrong device type! »** (mauvais type d'appareil), **« Tramline actuator »** (actionneur de jalonnage) et son numéro. Elle arrive aussitôt, sans délai.

**Que faire :**

1. Un autre appareil répond à la place de cet actionneur : contrôlez la numérotation des appareils de la machine.

## 403 · Position de l'actionneur de jalonnage inconnue {#c403}

**Classe :** [Défaut d'appareil](codes.md#class-fault) · **Emplacement :** l'actionneur de jalonnage.

**Ce que vous voyez.** La fenêtre d'alarme à titre orange, **« Unknown state »** (état inconnu), **« Tramline actuator »** (actionneur de jalonnage) et son numéro.

**Que faire :**

1. Contrôlez le mécanisme d'obturation.
2. Ouvrez **« Settings »** (réglages) › **« Machine »** › l'actionneur › **« Registers »** (registres) et appuyez sur **« Reset »** (remise à zéro) pour effacer l'état.

## 404 · Actionneur de jalonnage bloqué {#c404}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** l'actionneur de jalonnage.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Jammed »** (bloqué), **« Tramline actuator »** (actionneur de jalonnage) et son numéro.

**Que faire :**

1. Dégagez le mécanisme d'obturation.
2. Ouvrez **« Settings »** (réglages) › **« Machine »** › l'actionneur › **« Registers »** (registres) et appuyez sur **« Reset »** (remise à zéro) pour effacer l'état.
