---
title: Dose au poids trop faible, trop élevée ou impossible
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-dosing-by-weight.html
---

# Dose au poids trop faible, trop élevée ou impossible

Que faire quand un produit dosé au poids — par un moteur électrique ou par un doseur à contrôle au poids — n'atteint pas sa dose de consigne, ou ne peut pas l'atteindre du tout.

Ces alarmes sont déclenchées par le système dans son ensemble, et non par un appareil. Elles existent **pour chacun des quatre produits** séparément : le nombre dans le message est le numéro du produit. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Rate of Product 1 » / « is too low! » — ou — « is too high! » — dose du produit 1 trop faible / trop élevée {#rate-of-product-1-is-too-low-or-is-too-high}

Même chose pour les produits 2, 3 et 4.

**Ce que cela signifie.** Le produit est appliqué en dessous ou au-dessus de sa dose de consigne en kilogrammes par hectare.

**Produit dosé par un moteur électrique — à vérifier, dans cet ordre :**

1. La dose de consigne du produit.
2. Les limites de vitesse en vigueur, sur l'écran d'état du capteur de vitesse — voir [L'écran d'état du capteur](sensor-status-screen.md#what-each-kind-of-sensor-adds).
3. Les réglages du moteur électrique qui entraîne l'arbre du doseur — voir [Moteur électrique de doseur](dispenser-motor.md).
4. Le doseur.
5. Le capteur de rotation du moteur électrique est en état de marche.
6. La charge de travail du moteur. **En dessous de 20 % ou au-dessus de 80 %**, essayez un cylindre de dosage d'une autre taille : un cylindre **plus grand** si l'on applique trop peu, un cylindre **plus petit** si l'on applique trop.
7. Étalonnez le cylindre de dosage — voir [Étalonner un moteur de dosage au poids](calibrate-motor-weight.md).

**Capteur de doseur avec « Weight control » (contrôle au poids) activé — à vérifier, dans cet ordre :**

1. La dose de consigne du produit.
2. Les réglages du capteur de rotation de l'arbre du doseur — voir [Capteur de doseur](dispenser-sensor.md).
3. Le doseur.
4. Le capteur de doseur est en état de marche.
5. Étalonnez le cylindre de dosage — voir [Étalonner le doseur au poids](calibrate-dispenser-weight.md).

## « Product dosage is » / « impossible! Check product » / « rate and calibration! » — dosage du produit impossible ! vérifiez la dose et l'étalonnage {#product-dosage-is-impossible-check-product-rate-and-calibration}

**Ce que cela signifie.** Avec les réglages et la dose de consigne actuels, le produit ne peut pas du tout être appliqué au poids.

**À vérifier, dans cet ordre :**

1. La dose de consigne du produit.
2. **« Min speed, km/h »** (vitesse minimale) et **« Max speed, km/h »** (vitesse maximale) du capteur de vitesse — voir [Capteur de vitesse](speed-sensor.md).
3. Les réglages des moteurs électriques qui appliquent les produits au poids, avant tout **« Minimum, rpm »** et **« Maximum, rpm »**.
4. Étalonnez les cylindres de dosage des moteurs électriques.
5. Si cela n'aide pas : montez des cylindres de dosage d'une autre taille.

> **CONSEIL**
>
> L'écran d'étalonnage d'un moteur de dosage affiche la plage de vitesse que permet le cylindre actuel. S'il indique **« Can not provide dosage! »**, aucun étalonnage n'y changera rien — le cylindre ne convient pas à la dose. Voir [Étalonner un moteur de dosage au poids](calibrate-motor-weight.md).
