---
title: Étalonner la rotation du doseur
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/calibrate-dispenser-rotation.html
---

# Étalonner la rotation du doseur

Faites tourner ensemble la roue d'entraînement et l'arbre du doseur pour que le panneau apprenne combien d'impulsions de l'arbre correspondent aux impulsions de la roue.

Cet étalonnage apprend au panneau combien d'impulsions de l'arbre du doseur correspondent aux impulsions de la roue, pour qu'il distingue un arbre à l'arrêt ou qui patine d'une machine en mouvement. C'est la base de **« Rotation speed control »** (contrôle de la vitesse de rotation) du capteur de doseur ([Capteur d'arbre de doseur](dispenser-sensor.md)). Il écrit **« Wheel, pulses »** (impulsions de la roue) et **« Dispenser pulses »** (impulsions du doseur).

**Avant de commencer :** le capteur de vitesse **et** chaque doseur concerné doivent être sous surveillance et répondre. Il vous faut le niveau **« Agronomist »** ([Activer le niveau Agronomist](enable-agronomist-level.md)). Préparez tout pour faire tourner la roue et les arbres des doseurs : **une fois lancé, l'étalonnage se poursuit jusqu'à ce que le panneau ait son résultat.**

::: steps
1. Ouvrez **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir). Touchez **« Dispenser calibration »** (étalonnage du doseur) et glissez vers la droite ou vers la gauche jusqu'au numéro du doseur — ou jusqu'à **« ALL »** pour tous à la fois.

2. Touchez de nouveau **« Dispenser calibration »**. Le panneau affiche **« Calibration »** (étalonnage) et une barre de progression.

   ![La barre de progression de l'étalonnage du doseur.](figures/five-calib-dispenser-progress)

3. Faites tourner ensemble la roue d'entraînement et l'arbre du doseur — à la main, ou en déplaçant la machine. La barre se remplit à mesure que les compteurs montent.

4. Continuez à tourner jusqu'à ce que la barre atteigne 100 %. Cela arrive quand le capteur de vitesse **et chaque** doseur concerné ont donné chacun au moins **100 impulsions**. La barre suit le plus en retard — un doseur qui ne tourne pas la maintient à zéro.

5. À 100 %, le panneau émet un bip et affiche **« Stop rotation! »** (arrêtez la rotation !). Arrêtez tout.

6. Le panneau attend qu'aucun compteur n'ait changé pendant **deux secondes**, puis écrit le résultat et affiche **« Done »** (terminé).
:::

Laissez l'étalonnage aller jusqu'au bout. Si un capteur concerné est hors surveillance au démarrage, ou cesse de répondre en cours de route, l'étalonnage se termine par **« Sensor not controlled! Calibration canceled! »** (capteur non surveillé ! étalonnage annulé !) ou **« Connection lost with the sensor! Calibration canceled! »** (connexion perdue avec le capteur ! étalonnage annulé !), et rien n'est écrit.

> **REMARQUE**
>
> **Les nombres enregistrés ne sont pas ceux que vous avez vus.** Si les comptages ne tiennent pas dans la plage du paramètre, le panneau divise **les deux** nombres par deux ensemble, encore et encore, jusqu'à ce qu'ils tiennent. Le rapport est conservé ; seuls les deux chiffres enregistrés ressortent plus petits que ce qui a été compté.
