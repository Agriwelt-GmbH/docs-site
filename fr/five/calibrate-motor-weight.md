---
title: Étalonner un moteur de dosage au poids
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/calibrate-motor-weight.html
---

# Étalonner un moteur de dosage au poids

Laissez le moteur électrique faire tourner le rouleau doseur dans un récipient et pesez le produit, pour que le panneau sache combien un tour délivre.

Cet étalonnage enregistre combien de produit délivre un tour du rouleau doseur — **« Weight, gr »** (poids, g) et **« Rotations »** (rotations) d'un moteur. Refaites-le à chaque changement de produit ou de rouleau. Il se fait au niveau **« Operator »**, sur un moteur dont le groupe est en mode **« Flow »** ou **« Hybrid »**.

**Il vous faut :** la machine à l'arrêt, un récipient qui contient de 1 à 60 kg du produit, et une balance.

> **IMPORTANT**
>
> **L'élément n'apparaît que machine à l'arrêt.** En mouvement, le panneau le retire du menu contextuel sans message. Et tant que l'étalonnage est ouvert, **tous** les moteurs électriques de la machine — semences et engrais — sont maintenus à vitesse nulle : rien ne dose. Quitter l'étalonnage les remet tous en régulation automatique de la dose.

::: steps
1. Maintenez le doigt sur la tuile du moteur de l'écran Motors ou du second écran d'accueil. Touchez **« Dispenser calibration(weight) »** (étalonnage du doseur au poids), puis touchez-le de nouveau.

2. Le premier écran montre les doses de consigne et, sous **« Product dosage speed limitation: »** (limitation de la vitesse de dosage du produit), les valeurs **« Min speed, km/h »** et **« Max speed, km/h »** que permettent les réglages actuels. S'il affiche **« Can not provide dosage! »** (dosage impossible) en rouge, le rouleau monté ne peut délivrer la dose à aucune vitesse — l'étalonnage n'y remédiera pas ; montez un autre rouleau. Sinon, touchez **« Calibrate electric motor N »** (étalonner le moteur électrique N). **« Exit »** (quitter) quitte.

   ![Le premier écran de l'étalonnage du moteur.](figures/five-calib-motor-weight)

3. Le deuxième écran prépare le rouleau. Pesez le récipient vide et notez le poids. Remplissez la trémie et placez le récipient vide sous le doseur.

4. Touchez **« Fill the rotor cells »** (remplir les alvéoles du rouleau). Le moteur fait tourner l'arbre entraîné de **deux tours** et s'arrête de lui-même. **« Stop motor »** (arrêter le moteur) l'interrompt. Recommencez jusqu'à ce que les alvéoles soient pleines.

5. Touchez **« Go to calibration »** (passer à l'étalonnage). Le troisième écran affiche **« Rotations »** avec une décimale.

6. Videz le récipient et placez-le de nouveau sous le doseur.

7. Touchez **« Calibration »** (étalonnage) : le moteur tourne. Touchez **« Stop motor »** pour l'arrêter. Lancez et arrêtez aussi souvent qu'il le faut — le compteur garde le total. Remplissez le récipient autant que possible, **pas moins de 1 kg et pas plus de 60 kg**.

8. Touchez **« Complete »** (terminer). Il apparaît dès que plus d'**un tour complet** a été fait. **« Cancel »** (annuler) demande **« Are you sure? »** (êtes-vous sûr ?) avant de jeter la mesure.

9. Pesez le récipient rempli. Le pavé numérique demande la différence entre le récipient plein et le récipient vide, en grammes — **1000 à 60000 g** ; le pavé propose 10000. Saisissez-la et touchez **« OK »**. Le panneau enregistre **« Weight, gr »** et **« Rotations »** pour ce moteur.
:::

Pendant le remplissage du rouleau, le moteur tourne au milieu de sa fenêtre **« Minimum, rpm »** … **« Maximum, rpm »**, mais pas plus vite que 60 tr/min.

## Faire tourner le moteur depuis un bouton au doseur {#run-the-motor-from-a-button-at-the-dispenser}

Si **« Button input »** (entrée du bouton) du moteur est réglé sur une entrée (1 … 3) et que **« Activation signal »** (signal d'activation) correspond au bouton ([Moteur électrique de doseur](dispenser-motor.md)), un bouton sur cette entrée fait tourner le moteur sur le troisième écran : **le moteur tourne tant que le bouton est maintenu et s'arrête quand il est relâché.** Une seule personne peut se tenir au doseur avec le récipient, au lieu de retourner à la cabine entre deux passes. Avec un tel bouton réglé, le moteur ne tourne que tant que le bouton est maintenu. L'écran n'indique pas qu'un bouton est réglé.

## Quand l'étalonnage s'arrête de lui-même {#when-the-calibration-stops-by-itself}

L'étalonnage se termine par un échec si le moteur cesse de répondre, si le moteur déclenche une alarme, ou si **dix secondes passent sans impulsions du capteur de rotation** — le panneau affiche alors **« No data from rotation sensor »** (aucune donnée du capteur de rotation). Un capteur de rotation bloqué ou débranché met fin à la passe au lieu d'enregistrer tranquillement zéro.
