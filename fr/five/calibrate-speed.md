---
title: Étalonner le capteur de vitesse
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/calibrate-speed.html
---

# Étalonner le capteur de vitesse

Parcourez 100 m balisés pour que le panneau corrige le facteur du capteur de vitesse d'avancement.

L'étalonnage mesure une distance connue et corrige **« Factor, % »** (facteur, %) du capteur de vitesse pour que la distance du panneau lui corresponde. **Avant de commencer, réglez « Pulses » et « Diameter, cm »** du capteur ([Capteur de vitesse d'avancement](speed-sensor.md)) — l'étalonnage corrige la distance par tour ; il ne peut pas inventer les impulsions.

Il y a deux entrées :

- **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir) → **« Speed calibration »** (étalonnage de la vitesse) — au niveau **« Agronomist »** ([Activer le niveau Agronomist](enable-agronomist-level.md)) ;
- **« Speed calibration »** dans le menu contextuel du capteur de vitesse, machine à l'arrêt. Au niveau **« Operator »**, le panneau demande d'abord le code PIN du niveau Agronomist ; au niveau **« Agronomist »**, il demande **« Are you sure? »** (êtes-vous sûr ?) — touchez **« Yes »** (oui).

::: steps
1. Balisez **100 m** sur un terrain plat et placez la machine au départ.

2. Touchez **« Speed calibration »**, puis touchez-le de nouveau ; depuis le menu contextuel, répondez d'abord à la demande de code PIN ou à la question. Le panneau affiche **« Pass 100m and press STOP »** (parcourez 100 m et appuyez sur STOP) avec un seul bouton **« STOP »**.

   ![La fenêtre d'étalonnage de la vitesse.](figures/five-calib-speed)

3. Parcourez la distance balisée et arrêtez-vous à l'arrivée.

4. Touchez **« STOP »**. Le panneau affiche **« Done »** (terminé) et ferme la fenêtre de lui-même.

   ![Le panneau confirme l'étalonnage.](figures/five-calib-speed-done)
:::

La distance est fixée à 100 m ; le panneau ne la demande pas. Il attend une demi-seconde après **« STOP »** avant de lire le compteur et vérifie encore une fois la connexion à cet instant — un capteur qui décroche sur le dernier mètre est signalé comme une connexion perdue, non comme un mauvais résultat.

> **REMARQUE**
>
> **Un toucher en dehors de la fenêtre met fin à l'étalonnage sans résultat.** Gardez la main loin de l'écran pendant le parcours, et ne touchez que **« STOP »**.

## Quand cela ne fonctionne pas {#when-it-does-not-work}

| **Le panneau affiche** | **Signification** |
| --- | --- |
| **« No speed sensor »** | Le profil n'a pas de capteur de vitesse (pas de capteur de vitesse). L'étalonnage ne démarre pas. |
| **« Connection lost with the sensor! Calibration canceled! »** | Le capteur ne répond pas (connexion perdue avec le capteur ! étalonnage annulé !). |
| **« Sensor not controlled! Calibration canceled! »** | Le capteur est hors surveillance (capteur non surveillé ! étalonnage annulé !). Mettez-le sous surveillance ([Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md)). |
| **« FAILURE! The tractor did not move! »** | Le compteur n'a pas bougé : le capteur n'a donné aucune impulsion — ce n'est pas une lecture imprécise, il n'y en a aucune (défaillance ! le tracteur n'a pas bougé !). Vérifiez le capteur et son câble. |
| **« Calibration canceled! »** | La fenêtre a été fermée autrement que par **« STOP »** (étalonnage annulé !). Rien n'a changé. |
