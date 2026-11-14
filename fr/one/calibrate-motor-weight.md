---
title: Étalonner un moteur de dosage au poids
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/calibrate-motor-weight.html
---

# Étalonner un moteur de dosage au poids

Laissez le moteur électrique faire tourner le cylindre de dosage au-dessus d'un récipient et pesez le produit, pour que le boîtier sache ce que délivre un tour.

Cet étalonnage mémorise la quantité de produit que délivre un tour du cylindre de dosage — **« Weight, gr »** (poids, g) et **« Rotations »** (rotations) d'un moteur. Refaites-le chaque fois que le produit ou le cylindre change. Il se fait au niveau **« Operator »** (opérateur).

**Il vous faut :** la machine à l'arrêt, un récipient pouvant contenir 1 à 60 kg de produit, et une balance.

> **IMPORTANT**
>
> **La rubrique n'apparaît que lorsque la machine est à l'arrêt.** En mouvement, le boîtier la retire du menu contextuel sans message. Et tant que l'étalonnage est ouvert, **tous** les moteurs électriques de la machine — semences et engrais — sont en mode manuel à vitesse nulle : rien ne dose. Quitter l'étalonnage les remet tous en régulation automatique de la dose.

::: steps
1. Maintenez appuyée la vignette du moteur et choisissez **« Dispenser calibration(weight) »** (étalonnage du doseur au poids).

   ![Le menu contextuel du moteur avec la rubrique d'étalonnage en haut.](figures/ctx-motor-lower)

2. Le premier écran affiche les doses de consigne et, sous **« Product dosage speed limitation: »** (limitation de vitesse du dosage du produit), les valeurs **« Min speed, km/h »** (vitesse minimale) et **« Max speed, km/h »** (vitesse maximale) que permettent les réglages actuels. Si l'écran indique **« Can not provide dosage! »** (dosage impossible) en rouge, le cylindre monté ne peut délivrer la dose à aucune vitesse — l'étalonnage n'y remédiera pas ; montez un autre cylindre. Sinon, touchez **« Calibrate electric motor N »** (étalonner le moteur électrique N) (ou appuyez sur **« PLUS »**).

3. Le deuxième écran prépare le rotor. Pesez le récipient vide et notez le poids. Remplissez la trémie et placez le récipient vide sous le doseur.

4. Touchez **« Fill the rotor cells »** (remplir les alvéoles du rotor) (ou appuyez sur **« MENU »**). Le moteur fait tourner l'arbre entraîné de **deux tours** exactement et s'arrête de lui-même. **« Stop motor »** (arrêter le moteur) (**« BACK »**) l'interrompt. Répétez jusqu'à ce que les alvéoles soient pleines.

5. Touchez **« Go to calibration »** (passer à l'étalonnage) (ou appuyez sur **« UP »**). Le troisième écran affiche les **« Rotations »** avec une décimale.

6. Videz le récipient et placez-le de nouveau sous le doseur.

7. Touchez **« Calibration »** (ou appuyez sur **« MENU »**) : le moteur tourne. Touchez **« Stop motor »** (ou appuyez sur **« BACK »**) pour l'arrêter. Démarrez et arrêtez autant de fois que nécessaire — le compteur conserve le total cumulé. Remplissez le récipient autant que possible, **pas moins de 1 kg et pas plus de 60 kg**.

8. Touchez **« Complete »** (terminer) (ou appuyez sur **« MINUS »**). Le bouton apparaît dès que plus d'**un tour complet** a été effectué.

9. Pesez le récipient rempli. Le pavé numérique demande la différence entre le récipient plein et le récipient vide, en grammes — **1000 à 60000 g**. Saisissez-la et touchez **« OK »**. Le boîtier mémorise **« Weight, gr »** et **« Rotations »** pour ce moteur.
:::

Pendant le remplissage du rotor, le moteur tourne au milieu de sa plage **« Minimum, rpm »** … **« Maximum, rpm »**, mais pas plus vite que 60 tr/min.

## Faire tourner le moteur depuis un bouton au niveau du doseur {#run-the-motor-from-a-button-at-the-dispenser}

Si **« Button input »** (entrée du bouton) du moteur est réglé sur une entrée (1 … 3) et que **« Activation signal »** (signal d'activation) correspond à ce bouton ([Moteur électrique de doseur](dispenser-motor.md)), un bouton raccordé à cette entrée démarre et arrête le moteur exactement comme **« Calibration »** et **« Stop motor »** : **le moteur tourne tant que le bouton est maintenu et s'arrête quand il est relâché.** Une seule personne peut se tenir au doseur avec le récipient, sans retourner à la cabine entre deux passes. L'écran affiche les mêmes boutons, qu'un tel bouton soit installé ou non — le boîtier n'en donne aucune indication.

## Quand l'étalonnage s'arrête de lui-même {#when-the-calibration-stops-by-itself}

L'étalonnage se termine par un échec si le moteur cesse de répondre, s'il déclenche une alarme, ou si **dix secondes s'écoulent sans impulsions du capteur de rotation** — le boîtier affiche alors **« No data from rotation sensor »** (aucune donnée du capteur de rotation). Un capteur de rotation bloqué ou débranché met fin à la passe au lieu de mémoriser discrètement zéro.
