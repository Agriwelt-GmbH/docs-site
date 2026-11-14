---
title: Étalonner le doseur au poids
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/calibrate-dispenser-weight.html
---

# Étalonner le doseur au poids

Faites tomber le doseur dans un récipient et pesez-le, pour que le Hectare Mini sache quelle quantité de produit un tour d'arbre applique — nécessaire pour « Weight control ».

Avec **« Weight control »** (régulation au poids) sur **« Yes »** (oui), le boîtier compte le produit appliqué d'après les tours de l'arbre du doseur ([Capteur d'arbre de doseur](dispenser-sensor.md)). L'étalonnage mesure le poids par impulsion et inscrit **« Weight, gr »** (poids, g) et **« Weight, pulses »** (impulsions). Il s'effectue au niveau **« Operator »** (opérateur), à l'arrêt.

> **IMPORTANT**
>
> **Étalonnez de nouveau après chaque changement du rouleau doseur, du réglage du variateur ou de la boîte de vitesses dans l'entraînement du doseur, et de la semence dans la trémie.** Sinon, le poids affiché est faux.

Il vous faut un récipient, une balance et un moyen de faire tourner l'arbre du doseur à la main.

::: steps
1. Sur l'écran d'accueil, maintenez **« MENU »** enfoncé, sélectionnez le capteur de doseur et appuyez sur **« MENU »**. Le menu contextuel s'ouvre.

2. Sélectionnez **« Dispenser calibration(weight) »** (étalonnage du doseur au poids) et appuyez sur **« MENU »**. L'écran d'étalonnage affiche les doses de consigne des produits utilisés — celle du produit de ce doseur entre des flèches — et **« PLUS - calibrate dispenser 1 »** avec le numéro du doseur.

3. Appuyez sur **« PLUS »**. Le boîtier énumère ce qu'il faut faire avant l'étalonnage : peser le récipient vide et noter le poids ; remplir la trémie ; placer le récipient vide sous le doseur ; faire tourner le rotor jusqu'à ce que ses alvéoles soient remplies. Faites tout cela, puis appuyez sur **« UP »**.

4. L'écran suivant énumère l'étalonnage proprement dit et compte les **« Impulses »** (impulsions) du capteur : videz le récipient, remettez-le sous le doseur et faites tourner le rotor en remplissant le récipient — autant que possible, entre 2 kg et 60 kg.

5. Dès que plus de dix impulsions sont comptées, la ligne **« MINUS - complete calibration »** apparaît. Continuez à tourner jusqu'à ce que le récipient contienne le plus possible — au moins 100 impulsions et 5 kg donnent un bon résultat. Arrêtez ensuite.

6. Appuyez sur **« MINUS »**. Le clavier numérique s'ouvre : **« Enter the difference of the filled and empty container in grams »** (saisissez la différence entre le récipient plein et vide en grammes).

7. Pesez le récipient plein, soustrayez le poids à vide, saisissez la différence en grammes (de 2000 à 60000) et touchez **« OK »**. Le boîtier mémorise les valeurs et revient au premier écran.

8. Appuyez sur **« BACK »** pour quitter.
:::

![Étalonnage au poids : la rubrique du menu, le premier écran, la liste avant l'étalonnage, la liste avec le compteur d'impulsions, la ligne MINUS - complete calibration et la saisie du poids.](figures/cal-mass-steps)

**« BACK »** sur la liste d'avant l'étalonnage l'annule. **« BACK »** pendant l'étalonnage demande **« Are you sure? »** (êtes-vous sûr ?) — **« PLUS »** annule, **« MINUS »** continue. **« BACK »** sur le clavier numérique conserve les anciennes valeurs.

## Quand l'étalonnage ne démarre pas ou s'arrête {#when-it-does-not-start-or-stops}

**« PLUS »** à l'étape 3 ne fonctionne que si le capteur est sous surveillance, répond et n'a aucune alarme. Sinon, le premier écran en donne la raison — **« Not controlled »**, **« No connection »** ou **« FAILURE »**. Si le capteur tombe en panne pendant l'étalonnage, le boîtier affiche **« FAILURE »** avec la raison ; **« BACK »** ramène au premier écran.
