---
title: 1xx · Défauts du capteur de rang
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes-1-row-sensor.html
---

# 1xx · Défauts du capteur de rang

Codes 101–106 : un capteur de graines ou d'engrais d'un rang est muet, bouché, ébloui, défectueux ou n'est pas un capteur de graines.

Les codes 1xx concernent le capteur d'un rang lui-même : le capteur ne répond pas, ou il signale qu'il ne peut pas compter. L'emplacement est le rang : indiquez par exemple au service *102 · rang 7*. Le titre de la fenêtre est orange pour un défaut d'appareil et rouge pour une alarme.

Comment lire un code, les quatre classes et l'aspect de chacune dans l'app : [Comment fonctionnent les codes de service](codes.md).

## 101 · Le capteur de rang ne répond pas {#c101}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Connection lost »** (liaison perdue), **« Seed sensor: »** (capteur de graines) ou **« Fertilizer sensor: »** (capteur d'engrais) et les numéros de rang. La barre du rang montre une ✕ rouge sur fond gris. Quand plusieurs rangs perdent la liaison, leurs numéros se regroupent dans une seule fenêtre.

**Que faire :**

1. Contrôlez la fiche et le câble du capteur de ce rang.
2. Si plusieurs rangs voisins sont muets, cherchez un câble principal coupé ou une alimentation perdue en amont du premier d'entre eux.
3. Si seul ce rang est muet et que son câble est bon, remplacez le capteur : [Numéroter les capteurs](sensor-numbering.md).

## 102 · Capteur de rang bouché {#c102}

**Classe :** [Défaut d'appareil](codes.md#class-fault) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme à titre orange, **« Clogged »** (bouché) et le numéro du rang. La barre du rang continue d'afficher son niveau.

**Que faire :**

1. Arrêtez-vous.
2. Nettoyez le tube de descente et la fenêtre du capteur de ce rang.

## 103 · Capteur de rang ébloui {#c103}

**Classe :** [Défaut d'appareil](codes.md#class-fault) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme à titre orange, **« Light struck »** (ébloui) et le numéro du rang.

**Que faire :**

1. Protégez le capteur de la lumière directe : contrôlez son capot et la position du tube de descente.
2. Si l'alarme revient aussi à l'ombre, communiquez au service le code et le numéro du rang.

## 104 · Capteur de rang défectueux {#c104}

**Classe :** [Défaut d'appareil](codes.md#class-fault) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme à titre orange, **« Faulty »** (défectueux) et le numéro du rang.

**Que faire :**

1. Débranchez le capteur et rebranchez-le.
2. Si le défaut persiste, remplacez le capteur (menu du rang, **« Replace the sensor »** (remplacer le capteur)). En attendant, vous pouvez retirer le rang de la surveillance : **« Disable control »** (désactiver le contrôle) dans le menu du rang.

## 105 · Le capteur de rang signale un autre défaut {#c105}

**Classe :** [Défaut d'appareil](codes.md#class-fault) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme à titre orange, **« Other fault »** (autre défaut) et le numéro du rang.

**Que faire :**

1. Communiquez au service le code et le numéro du rang.
2. Vous pouvez retirer le rang de la surveillance (**« Disable control »** dans le menu du rang) et continuer à semer.

## 106 · Pas un capteur de graines sur ce rang {#c106}

**Classe :** [Défaut d'appareil](codes.md#class-fault) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme à titre orange, **« Wrong device type! »** (mauvais type d'appareil) et le numéro du rang. La barre clignote en rouge vif avec un « ? ». Cette alarme arrive aussitôt, sans le délai d'alarme.

**Que faire :**

1. Vérifiez que c'est bien un capteur de graines, et non un autre appareil, qui est raccordé pour ce rang.
2. Corrigez la numérotation : [Numéroter les capteurs](sensor-numbering.md).
