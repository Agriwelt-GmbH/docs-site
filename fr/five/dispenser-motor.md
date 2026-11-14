---
title: Moteur électrique de doseur
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/dispenser-motor.html
---

# Moteur électrique de doseur

Les paramètres d'un moteur électrique de dosage — trous du disque, rapport d'engrenage, sens, retour arrière en cas de blocage, produit, valeurs d'étalonnage, fenêtre de vitesse et bouton d'étalonnage — avec plages, valeurs par défaut et conditions d'affichage.

Un moteur électrique entraîne un doseur à la vitesse que le panneau calcule d'après la dose de consigne et la vitesse d'avancement. Maintenez le doigt sur sa tuile de l'écran Motors ou du second écran d'accueil pour ouvrir son menu contextuel ([Réglages des capteurs](sensor-settings.md)).

![Le menu contextuel d'un moteur de dosage, partie haute.](figures/five-ctx-motor)

Les éléments que vous voyez dépendent du mode de son groupe : un moteur d'un groupe en mode **« Precise »** entraîne un disque à graines ; en **« Flow »** ou **« Hybrid »**, il dose un produit au poids.

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Holes in disk »** | Le nombre de trous du disque à graines (trous du disque). **Mode « Precise » uniquement.** | 1 … 200 ; 27 | Operator |
| **« Numerator »** / **« Denominator »** | Ensemble : le rapport d'engrenage entre le moteur et l'arbre du doseur (numérateur / dénominateur). | 1 … 500 chacun ; 10 / 10 | Agronomist |
| **« Rotation direction »** | Le sens dans lequel tourne le moteur (sens de rotation). | **« Forward »** (avant) / **« Backward »** (arrière) ; **« Forward »** | Agronomist |
| **« Start delay,mS »** | Le délai le plus court, en millisecondes, entre les démarrages de deux moteurs, pour qu'ils ne démarrent pas tous d'un coup (temporisation de démarrage). | 0 … 500, par pas de 5 ; 30 | Service |
| **« Section control D.I. »** | Une entrée du contrôleur qui coupe la section : **« Shut off(0) »** quand l'entrée lit 0, **« Shut off(1) »** quand elle lit 1 (entrée de commande de section). | **« No »** / **« Shut off(0) »** / **« Shut off(1) »** ; **« No »** | Agronomist |
| **« Rollback when jammed »** | **« Yes »** — quand le rouleau se bloque, le moteur tourne un instant en arrière au lieu de simplement s'arrêter (retour arrière en cas de blocage). | **« No »** / **« Yes »** ; **« No »** | Agronomist |
| **« Group start address »** | Réglé à la mise en service — voir [Configurer les contrôleurs de moteurs](configure-motor-controllers.md) (adresse de début du groupe). | — | Agronomist |

Dans les modes **« Flow »** et **« Hybrid »**, le menu contient aussi :

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Dispenser calibration(weight) »** | Lance l'étalonnage au poids (étalonnage du doseur au poids). Affiché seulement machine à l'arrêt. [Étalonner un moteur de dosage au poids](calibrate-motor-weight.md) | — | Operator |
| **« Type of product »** | Lequel des quatre produits ce moteur dose (type de produit). | **« Product 1 »** … **« Product 4 »** | Agronomist |
| **« Weight, gr »** / **« Rotations »** | Tous deux réglés par l'étalonnage au poids (poids, g / rotations). Pavé numérique. | 1 … 65535 chacun ; 10000 / 100 | Agronomist |
| **« Minimum, rpm »** / **« Maximum, rpm »** | La fenêtre de vitesse de l'arbre que la régulation de dose peut utiliser, avec une décimale (minimum / maximum, tr/min). Pavé numérique. | 0.1 … 500.0 chacun ; 0.1 / 500.0 | Agronomist |
| **« Button input »** | L'entrée du contrôleur de moteur utilisée comme bouton d'étalonnage (entrée du bouton) ; **« No »** — aucune. | **« No »**, 1 … 3 ; **« No »** | Agronomist |
| **« Activation signal »** | Quel état de cette entrée compte comme appuyé (signal d'activation). | 0 / 1 ; 1 | Agronomist |

**« Minimum, rpm »** et **« Maximum, rpm »** ne sont pas une limite de sécurité mais la fenêtre dans laquelle travaille la régulation de dose. La fenêtre de vitesse affichée sur l'écran d'étalonnage en est calculée avec les valeurs du rouleau. **« Button input »** et **« Activation signal »** permettent à une seule personne de faire tourner le moteur depuis le doseur pendant l'étalonnage — voir [Étalonner un moteur de dosage au poids](calibrate-motor-weight.md).

L'écran d'état affiche **« Working »** ou **« Faulty »** et le dernier code de défaut ([Lire le code de défaut d'un moteur électrique](motor-fault-codes.md)). Alarmes : [Alarmes des moteurs de dosage](alarms-motor-controller.md), [Dosage au poids](alarms-dosing-by-weight.md). Le contrôleur lui-même se règle dans [Configurer les contrôleurs de moteurs](configure-motor-controllers.md).
