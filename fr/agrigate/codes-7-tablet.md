---
title: 7xx · iPad et iPhone
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes-7-tablet.html
---

# 7xx · iPad et iPhone

Codes 701–705 : la tablette elle-même — volume, casque, vitesse GNSS et Bluetooth.

Les codes 7xx concernent l'iPad ou l'iPhone qui fait tourner l'app Hectare : ce que fait la tablette et qui masquerait une alarme ou empêcherait l'app de joindre la passerelle.

Comment lire un code, les quatre classes et l'aspect de chacune dans l'app : [Comment fonctionnent les codes de service](codes.md).

## 701 · Volume de la tablette coupé {#c701}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** La pastille jaune **« Volume is off »** (volume coupé) en haut de l'écran et dans la fenêtre d'alarme. Le volume multimédia de la tablette est inférieur à 20 % : l'avertisseur retentit, mais personne ne l'entend.

**Que faire :**

1. Montez le volume de la tablette avec ses touches de volume. Le commutateur latéral ne coupe pas l'alarme ; c'est le volume qui la coupe.

## 702 · Le son part vers un casque {#c702}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** La pastille jaune **« Sound in headphones »** (son dans le casque) : le son part vers un casque, une enceinte Bluetooth, AirPlay ou un système de véhicule, et non vers le haut-parleur de la tablette.

**Que faire :**

1. Déconnectez le casque ou la sortie audio externe pour que l'avertisseur retentisse depuis la tablette.

## 703 · Pas de vitesse GNSS {#c703}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Les mots **« no speed »** (pas de vitesse) à l'endroit où la vitesse est affichée (la fiche de vitesse, **« GNSS speed »** (vitesse GNSS) dans **« Settings »** (réglages) › **« Machine »** › **« Bridge »** (passerelle)). Pas de vitesse récente depuis 2 secondes : Hybrid et Precision ne peuvent pas juger les rangs. Aucune fenêtre ne s'ouvre.

**Que faire :**

1. Sortez à ciel ouvert.
2. Vérifiez que l'app a le droit d'utiliser la localisation : Réglages de l'iPad › Confidentialité et sécurité › Service de localisation › Hectare.
3. Vérifiez que cet iPad a le GNSS : Hybrid et Precision exigent un iPad avec GNSS (Cellular).

## 704 · Bluetooth désactivé {#c704}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** La pastille rouge **« Bluetooth is off »** (Bluetooth désactivé) au milieu de l'écran. L'app ne peut pas joindre la passerelle.

**Que faire :**

1. Activez le Bluetooth dans le centre de contrôle ou les réglages de la tablette.

## 705 · Bluetooth non autorisé {#c705}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** La pastille rouge **« No Bluetooth permission »** (pas d'autorisation Bluetooth) au milieu de l'écran. L'app n'a pas le droit d'utiliser le Bluetooth et ne peut pas joindre la passerelle.

**Que faire :**

1. Autorisez le Bluetooth pour l'app : Réglages de l'iPad › Hectare › Bluetooth.
