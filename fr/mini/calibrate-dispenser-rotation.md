---
title: Étalonner la rotation du doseur
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/calibrate-dispenser-rotation.html
---

# Étalonner la rotation du doseur

Faites tourner la roue d'entraînement pour que le Hectare Mini apprenne combien d'impulsions du doseur correspondent à combien d'impulsions de la roue — nécessaire pour que « Rotation speed control » surveille la vitesse de l'arbre.

Avec **« Rotation speed control »** (contrôle de la vitesse de rotation) sur **« Yes »** (oui), un capteur de doseur vérifie si l'arbre tourne aussi vite que la vitesse d'avancement l'exige ([Capteur d'arbre de doseur](dispenser-sensor.md)). Pour cela, le boîtier doit connaître le rapport entre les impulsions du capteur de vitesse et celles du capteur de doseur. L'étalonnage le mesure et inscrit **« Wheel, pulses »** (impulsions de la roue) et **« Dispenser pulses »** (impulsions du doseur).

Avant de commencer : le capteur de vitesse et les capteurs de doseur à étalonner doivent être sous surveillance et répondre. Il vous faut le niveau **« Agronomist »** (agronome) ([Activer le niveau Agronomist](enable-agronomist-level.md)). Soulevez la machine pour que la roue d'entraînement puisse tourner, ou préparez-vous à la déplacer.

::: steps
1. **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir). Sélectionnez **« Dispenser calibration »** (étalonnage du doseur).

2. Choisissez avec **« PLUS »** / **« MINUS »** les doseurs à étalonner : **« ALL »** (tous), ou le numéro d'un seul doseur.

3. Appuyez sur **« MENU »**. L'écran **« Calibration »** s'ouvre avec une barre de progression à 0 %.

4. Faites tourner la roue d'entraînement. La barre se remplit à mesure que des impulsions arrivent de la roue et de chaque doseur en cours d'étalonnage.

5. À 100 % — au moins 100 impulsions de chacun — le boîtier émet un bip et affiche **« Stop rotation! »** (arrêtez la rotation !). Cessez de tourner.

6. Quand aucune impulsion n'est arrivée depuis deux secondes, le boîtier mémorise les valeurs et affiche **« Done »** (terminé) ; le menu **« Seeding machine parameters »** réapparaît.
:::

![Étalonnage du doseur : le menu, la progression pendant la rotation et le message Stop rotation!](figures/cal-dispenser-steps)

**« BACK »**, à tout moment, interrompt avec **« Calibration canceled! »** (étalonnage annulé !) ; rien ne change.

| **Le boîtier affiche** | **Signification** |
| --- | --- |
| **« Sensor not controlled! Calibration canceled! »** | Le capteur de vitesse ou un capteur de doseur à étalonner est hors surveillance. Remettez-le sous surveillance ([Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md)). |
| **« Connection lost with the sensor! Calibration canceled! »** | Le capteur de vitesse ou un capteur de doseur ne répond pas, au démarrage ou pendant l'étalonnage. |

Plus vous tournez avant **« Stop rotation! »**, mieux c'est : les valeurs sont ramenées d'elles-mêmes à l'échelle si le comptage dépasse ce qu'elles peuvent contenir.

Étalonnez de nouveau après toute modification de l'entraînement entre la roue et le doseur — pignons, boîte de vitesses ou variateur.
