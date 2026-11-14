---
title: Dosage au poids : dose de produit trop faible ou trop élevée
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-dosing-by-weight.html
---

# Dosage au poids : dose de produit trop faible ou trop élevée

Que faire quand le Hectare Mini signale qu'un produit dosé au poids est appliqué sous ou au-dessus de sa dose de consigne, ou ne peut pas être dosé du tout.

Ce sont des alarmes du système dans son ensemble : la fenêtre n'a pas de ligne d'appareil. Elles n'apparaissent que si un produit est suivi au poids — par un capteur d'arbre de doseur avec **« Weight control »** (régulation au poids) sur **« Yes »** (oui), ou par des moteurs de doseur. Le nombre dans le texte est le numéro du produit, **« Product 1 »** à **« Product 3 »**.

## « Rate of Product 1 is to low! » / « Rate of Product 1 is to high! » — dose du produit 1 trop faible / trop élevée {#rate-of-product-1-is-to-low-rate-of-product-1-is-to-high}

**Ce que cela signifie.** Le poids de produit appliqué à l'hectare s'écarte de sa dose de consigne de plus de **« Product rate error,% »** (écart de dose de produit) du menu **« Settings »** (réglages) ([Le menu Settings](settings-menu.md)).

**Ce qu'il faut contrôler, dans cet ordre :**

1. La dose de consigne du produit — [Modifier la dose de consigne](set-the-target-rate.md).
2. Le doseur : rouleau, réglage du variateur ou de la boîte de vitesses, écoulement du produit depuis la trémie.
3. Les réglages du capteur d'arbre de doseur qui applique ce produit, et son **« Type of product »** (type de produit) — [Capteur d'arbre de doseur](dispenser-sensor.md).
4. Le capteur d'arbre de doseur est en bon état.
5. Étalonnez de nouveau au poids — [Étalonner le doseur au poids](calibrate-dispenser-weight.md), ou pour les moteurs [Étalonner un moteur au poids](calibrate-motor-weight.md). Un rouleau neuf, un autre réglage de l'entraînement ou une autre semence exigent toujours un nouvel étalonnage.

## « Product dosage is impossible! Check product rate and calibration! » — dosage du produit impossible {#product-dosage-is-impossible-check-product-rate-and-calibration}

**Ce que cela signifie.** Sur une machine à moteurs de doseur : avec les doses de consigne et les étalonnages actuels, il n'existe aucune vitesse d'avancement à laquelle les moteurs pourraient appliquer tous les produits. Le boîtier l'affiche de nouveau à chaque démarrage du semis.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Les doses de consigne des produits.
2. L'étalonnage des moteurs et leurs limites de vitesse d'arbre — [Étalonner un moteur au poids](calibrate-motor-weight.md).
