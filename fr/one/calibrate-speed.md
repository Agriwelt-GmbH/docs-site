---
title: Étalonner le capteur de vitesse
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/calibrate-speed.html
---

# Étalonner le capteur de vitesse

Parcourez 100 m balisés pour que le boîtier corrige le nombre d'impulsions du capteur de vitesse d'avancement.

L'étalonnage corrige le nombre d'impulsions du capteur de vitesse d'après une distance connue. **Avant de commencer, réglez « Pulses » (impulsions) et « Diameter, cm » (diamètre)** du capteur ([Capteur de vitesse d'avancement](speed-sensor.md)) : l'étalonnage corrige le nombre d'impulsions, il ne peut pas l'inventer. Il vous faut le niveau **« Agronomist »** (agronome) ([Activer le niveau Agronomist](enable-agronomist-level.md)).

::: steps
1. Balisez **100 m** sur un sol plat et placez la machine au départ.

2. Ouvrez **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir), sélectionnez **« Speed calibration »** (étalonnage de la vitesse) et appuyez sur **« MENU »**. Le boîtier affiche **« Pass 100m and press STOP »** (parcourez 100 m et appuyez sur STOP) avec un seul bouton **« STOP »**.

   ![La fenêtre d'étalonnage de la vitesse.](figures/calib-speed)

3. Parcourez la distance balisée et arrêtez-vous à l'arrivée.

4. Touchez **« STOP »**. Le boîtier affiche **« Done »** (terminé) et ferme la fenêtre de lui-même.

   ![Le boîtier confirme par « Done ».](figures/info-done)
:::

La distance est fixée à 100 m ; le boîtier ne la demande pas. Il attend une demi-seconde après **« STOP »** avant de lire le compteur et vérifie encore une fois la liaison à cet instant : un capteur qui décroche sur le dernier mètre est signalé comme une liaison perdue, et non comme un mauvais résultat.

## En cas d'échec {#when-it-does-not-work}

| Le boîtier affiche | Signification |
| --- | --- |
| **« No speed sensor »** (pas de capteur de vitesse) | Le profil ne comporte aucun capteur de vitesse. L'étalonnage ne démarre pas. |
| **« Connection lost with the sensor! Calibration canceled! »** (liaison perdue avec le capteur ! étalonnage annulé !) | Le capteur ne répond pas. |
| **« Sensor not controlled! Calibration canceled! »** (capteur non surveillé ! étalonnage annulé !) | Le capteur est hors surveillance. Mettez-le sous surveillance ([Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md)). |
| **« FAILURE! The tractor did not move! »** (échec ! le tracteur n'a pas bougé !) | Le compteur n'a pas bougé : le capteur n'a donné aucune impulsion — non pas une mesure imprécise, mais aucune. Vérifiez le capteur et son câble. |
| **« Calibration canceled! »** (étalonnage annulé !) | La fenêtre a été fermée autrement que par **« STOP »**. Rien n'a changé. |
