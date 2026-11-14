---
title: Dose de produit au poids trop basse, trop haute ou impossible
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-dosing-by-weight.html
---

# Dose de produit au poids trop basse, trop haute ou impossible

Que faire quand un produit dosé au poids — par un moteur électrique ou par un doseur surveillé au poids — manque sa dose de consigne, ou ne peut pas l'atteindre du tout.

Ces alarmes sont déclenchées par le système dans son ensemble, pas par un appareil. Elles existent **pour chacun des quatre produits** séparément : le numéro du message est celui du produit. L'écart qu'un produit peut avoir par rapport à sa consigne est **« Product rate error,% »** dans le menu **« Settings »** ([Le menu Settings](settings-menu.md)). Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Rate of Product 1 » / « is to low! » — ou — « is to high! » — dose du produit 1 trop basse / trop haute {#rate-of-product-1-is-to-low-or-is-to-high}

Même chose pour les produits 2, 3 et 4. Le panneau écrit le message avec cette orthographe.

**Ce que cela signifie.** Le produit est appliqué en dessous ou au-dessus de sa dose de consigne en kilogrammes par hectare, de plus de **« Product rate error,% »**.

**Produit dosé par un moteur électrique — à vérifier, dans cet ordre :**

1. La dose de consigne du produit.
2. Les limites de vitesse en vigueur, sur l'écran d'état du capteur de vitesse — voir [L'écran d'état d'un capteur](sensor-status-screen.md#what-each-kind-of-sensor-adds).
3. Les réglages du moteur électrique qui entraîne l'arbre du doseur — voir [Moteur électrique de doseur](dispenser-motor.md).
4. Le doseur.
5. Le capteur de rotation du moteur électrique est en état de marche.
6. La charge de travail du moteur. **Sous 20 % ou au-dessus de 80 %**, essayez un rouleau doseur d'une autre taille : un rouleau **plus grand** si l'on applique trop peu, un **plus petit** si l'on applique trop.
7. Étalonnez le rouleau doseur — voir [Étalonner un moteur de dosage au poids](calibrate-motor-weight.md).

**Capteur de doseur avec « Weight control » activé — à vérifier, dans cet ordre :**

1. La dose de consigne du produit.
2. Les réglages du capteur d'arbre de doseur — voir [Capteur d'arbre de doseur](dispenser-sensor.md).
3. Le doseur.
4. Le capteur de doseur est en état de marche.
5. Étalonnez le doseur — voir [Étalonner le doseur au poids](calibrate-dispenser-weight.md).

## « Product dosage is » / « impossible! Check product » / « rate and calibration! » — dosage du produit impossible {#product-dosage-is-impossible-check-product-rate-and-calibration}

**Ce que cela signifie.** Avec les réglages et la dose de consigne actuels, le produit ne peut pas du tout être appliqué au poids : la vitesse la plus basse à laquelle les rouleaux doseurs peuvent délivrer la dose est déjà égale ou supérieure à la plus haute. Sur l'écran d'accueil, une icône de produit rouge clignote dans la colonne de droite.

**À vérifier, dans cet ordre :**

1. Les doses de consigne des produits — un seul produit trop exigeant ferme la fenêtre pour tous.
2. **« Min speed, km/h »** et **« Max speed, km/h »** du capteur de vitesse — voir [Capteur de vitesse d'avancement](speed-sensor.md).
3. Les réglages des moteurs électriques qui appliquent les produits au poids, surtout **« Minimum, rpm »** et **« Maximum, rpm »**.
4. Étalonnez les rouleaux doseurs des moteurs électriques.
5. Si cela n'aide pas : montez des rouleaux doseurs d'une autre taille.

> **CONSEIL**
>
> L'écran d'étalonnage d'un moteur de dosage montre la fenêtre de vitesse que permet le rouleau actuel. S'il affiche **« Can not provide dosage! »**, aucun étalonnage n'y fera rien — le rouleau ne convient pas à la dose. Voir [Étalonner un moteur de dosage au poids](calibrate-motor-weight.md).
