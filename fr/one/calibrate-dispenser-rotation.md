---
title: Étalonner la rotation du doseur
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/calibrate-dispenser-rotation.html
---

# Étalonner la rotation du doseur

Faites tourner ensemble la roue d'entraînement et l'arbre du doseur pour que le boîtier apprenne combien d'impulsions d'arbre correspondent à une impulsion de roue.

Cet étalonnage apprend au boîtier combien d'impulsions de l'arbre du doseur correspondent à une impulsion de la roue, afin qu'il distingue un arbre arrêté d'une machine en mouvement. C'est la base de **« Rotation speed control »** (contrôle de la vitesse de rotation) du capteur de doseur ([Capteur de doseur](dispenser-sensor.md)). Il écrit **« Wheel, pulses »** (roue, impulsions) et **« Dispenser pulses »** (impulsions du doseur).

**Avant de commencer :** le capteur de vitesse **et** chaque doseur concerné doivent être sous surveillance et répondre. Il vous faut le niveau **« Agronomist »** (agronome) ([Activer le niveau Agronomist](enable-agronomist-level.md)).

::: steps
1. Ouvrez **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir) → **« Dispenser calibration »** (étalonnage du doseur). Réglez le numéro du doseur avec **« PLUS »** / **« MINUS »** — ou **0** pour les étalonner tous à la fois — et appuyez sur **« MENU »**. Le boîtier affiche **« Calibration »** (étalonnage) et une barre de progression.

   ![La barre de progression de l'étalonnage du doseur.](figures/calib-dispenser-progress)

2. Faites tourner ensemble la roue d'entraînement et l'arbre du doseur — à la main, ou en déplaçant la machine. La barre se remplit à mesure que les compteurs montent.

3. Continuez à tourner jusqu'à ce que la barre atteigne 100 %. Cela se produit quand le capteur de vitesse **et chaque** doseur concerné ont donné au moins **100 impulsions** chacun. La barre suit celui qui est le plus en retard — un doseur qui ne tourne pas la maintient à zéro.

4. À 100 %, le boîtier émet un bip et affiche **« Stop rotation! »** (arrêtez la rotation). Arrêtez tout.

5. Le boîtier attend qu'aucun compteur n'ait changé pendant **deux secondes**, puis écrit le résultat et affiche **« Done »** (terminé).
:::

**« To abort operation press BACK. »** (pour interrompre, appuyez sur BACK) s'affiche en bas de l'écran ; **« BACK »** arrête l'étalonnage à tout moment.

Si un capteur concerné est hors surveillance ou ne répond pas, l'étalonnage se termine par **« Sensor not controlled! Calibration canceled! »** (capteur non surveillé ! étalonnage annulé !) ou **« Connection lost with the sensor! Calibration canceled! »** (liaison perdue avec le capteur ! étalonnage annulé !).

> **REMARQUE**
>
> **Les nombres mémorisés ne sont pas ceux que vous avez observés.** Si les comptages ne tiennent pas dans la plage du paramètre, le boîtier divise **les deux** nombres par deux, encore et encore, jusqu'à ce qu'ils y tiennent. Le rapport est conservé ; seuls les deux chiffres mémorisés sont plus petits que ce qui a été compté.
