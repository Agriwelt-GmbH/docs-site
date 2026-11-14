---
title: Moteur électrique de doseur
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/dispenser-motor.html
---

# Moteur électrique de doseur

Les paramètres d'un moteur électrique de dosage — rapport de réduction, sens, plage de vitesse, produit, valeurs d'étalonnage et bouton d'étalonnage.

Un moteur électrique entraîne un doseur à la vitesse que le boîtier calcule d'après la dose de consigne et la vitesse d'avancement. Ouvrez son menu contextuel comme dans [Réglages des capteurs](sensor-settings.md).

![Le menu contextuel d'un moteur de dosage, partie haute.](figures/ctx-motor)

| Paramètre | Ce qu'il fait | Plage | Niveau |
| --- | --- | --- | --- |
| **« Holes in disk »** (trous du disque) | **Mode « Precise » (précis) uniquement.** | 1 … 200 | Operator |
| **« Numerator »** (numérateur) / **« Denominator »** (dénominateur) | Ensemble : le rapport de réduction entre le moteur et l'arbre du doseur. | 1 … 500 chacun | Agronomist |
| **« Rotation direction »** (sens de rotation) | Le sens dans lequel tourne le moteur. Réglez-le pour que le doseur tourne dans le bon sens selon la façon dont le moteur est monté ; valeur par défaut : **« Forward »**. | **« Forward »** (avant) / **« Backward »** (arrière) | Agronomist |
| **« Rollback when jammed »** (recul en cas de blocage) | Faire reculer le rotor et réessayer au lieu de caler. | **« No »** (non) / **« Yes »** (oui) | Agronomist |
| **« Section control D.I. »** (entrée de commande de tronçon) | Permet à un interrupteur branché sur l'entrée de commande de tronçon du contrôleur de moteur d'arrêter ce moteur : **« Shut off(0) »** (couper à 0) l'arrête tant que l'entrée est à 0, **« Shut off(1) »** (couper à 1) tant qu'elle est à 1 ; **« No »** ignore l'entrée. | **« No »** / **« Shut off(0) »** / **« Shut off(1) »** | Service |
| **« Start delay,mS »** (retard au démarrage) | Le temps minimal entre le démarrage d'un moteur de dosage et celui du suivant : un moteur qui démarrerait plus tôt attend, de sorte que les moteurs démarrent l'un après l'autre. Valeur par défaut : 30 ms. | 0 … 500, par pas de 5 | Service |
| **« Group start address »** (adresse de début de groupe) | Réglée à la mise en service — voir [Configuration des appareils](device-configuration.md). | | Service |
| **« Type of product »** (type de produit) | Lequel des quatre produits ce moteur dose. | | Agronomist |
| **« Weight, gr »** / **« Rotations »** (poids, g / rotations) | Tous deux réglés par l'étalonnage au poids. | 1 … 65535 chacun | Agronomist |
| **« Minimum, rpm »** / **« Maximum, rpm »** (minimum / maximum, tr/min) | La plage de vitesse d'arbre que le boîtier peut utiliser. | 0,1 … 500,0 chacun | Agronomist |
| **« Button input »** (entrée du bouton) | Entrée numérique du contrôleur de moteur utilisée comme bouton d'étalonnage ; **« No »** = aucune. | No, 1 … 3 | Agronomist |
| **« Activation signal »** (signal d'activation) | Quel état de cette entrée compte comme appui. | 0 / 1 | Agronomist |

![La partie basse du même menu, avec la rubrique d'étalonnage.](figures/ctx-motor-lower)

**« Minimum, rpm »** et **« Maximum, rpm »** ne sont pas une limite de sécurité, mais la plage dans laquelle travaille la régulation de dose. La plage de vitesse de dosage de l'écran d'étalonnage en est déduite, avec les valeurs du cylindre de dosage. **« Button input »** et **« Activation signal »** permettent à une seule personne de lancer le moteur depuis le doseur pendant l'étalonnage — voir [Étalonner un moteur de dosage au poids](calibrate-motor-weight.md).

L'écran d'état affiche **« Working »** (en marche) ou **« Faulty »** (en défaut) et le dernier code de défaut ([Lire le code de défaut d'un moteur électrique](motor-fault-codes.md)). Alarmes : [Alarmes des moteurs de dosage](alarms-motor-controller.md), [Dosage au poids](alarms-dosing-by-weight.md). Le contrôleur lui-même se règle dans [Configurer les contrôleurs de moteurs](configure-motor-controllers.md). **« Electric motors »** (moteurs électriques) dans le menu contextuel (niveau **« Service »**) ouvre l'écran des moteurs sur ce moteur — le même écran que **« Service »** → **« Electric motors »** ([Diagnostic des contrôleurs de moteurs](motor-controller-diagnostics.md)).
