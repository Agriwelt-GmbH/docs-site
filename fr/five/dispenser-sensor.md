---
title: Capteur d'arbre de doseur
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/dispenser-sensor.html
---

# Capteur d'arbre de doseur

Les paramètres du capteur d'arbre de doseur — surveillance de la rotation par rapport à la roue, ou surveillance au poids par la masse appliquée — avec plages et valeurs par défaut.

Le capteur d'arbre de doseur compte les tours d'un doseur entraîné par la roue au sol. Le panneau peut le surveiller de deux façons : par sa **rotation** par rapport au capteur de vitesse, ou par la **masse** de produit qu'il applique. Maintenez le doigt sur l'icône du doseur de l'écran d'accueil pour ouvrir son menu contextuel ([Réglages des capteurs](sensor-settings.md)).

![Le menu contextuel d'un capteur de doseur, les deux surveillances désactivées.](figures/five-ctx-dispenser)

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Period, s »** | Combien de temps l'arbre peut ne donner aucune impulsion avant d'être considéré à l'arrêt — et combien de temps, après le début du semis ou du déplacement, le panneau attend avant d'exiger la rotation (période, s). | 1 … 60 ; 10 | Operator |
| **« Rotation speed control »** | Surveiller la rotation de l'arbre par rapport à la vitesse d'avancement (contrôle de la vitesse de rotation). | **« No »** / **« Yes »** ; **« No »** | Agronomist |
| **« Wheel, pulses »** | Réglé par l'étalonnage de la rotation (impulsions de la roue). Affiché avec la surveillance de rotation activée. | 1 … 65535 ; 100 | Agronomist |
| **« Dispenser pulses »** | Réglé par l'étalonnage de la rotation (impulsions du doseur). Affiché avec la surveillance de rotation activée. | 1 … 65535 ; 100 | Agronomist |
| **« Maximum error, % »** | De combien la vitesse de l'arbre peut s'écarter de la vitesse que demande la vitesse d'avancement avant **« Low speed of rotation »** (vitesse de rotation trop faible) ou **« High speed of rotation »** (vitesse de rotation trop élevée). Affiché avec la surveillance de rotation activée (écart maximal). | 1 … 50 ; 10 | Agronomist |
| **« Weight control »** | Surveiller le doseur par la **masse** appliquée plutôt que par sa rotation (contrôle au poids). | **« No »** / **« Yes »** ; **« No »** | Agronomist |
| **« Type of product »** | Lequel des quatre produits ce doseur dose (type de produit). Affiché avec la surveillance au poids activée. | **« Product 1 »** … **« Product 4 »** | Agronomist |
| **« Weight, gr »** / **« Weight, pulses »** | Tous deux réglés par l'étalonnage au poids (poids, g / impulsions du poids). Affichés avec la surveillance au poids activée. Pavé numérique. | 1 … 65535 chacun | Agronomist |

**Sans capteur de vitesse dans le profil, seul « Period, s » est proposé** — les deux types de surveillance exigent la vitesse d'avancement. Avec **« Weight control »** activé, le menu contextuel contient aussi **« Dispenser calibration(weight) »** (étalonnage du doseur au poids).

> **CONSEIL**
>
> **Préférez la surveillance au poids à la surveillance de rotation.** La surveillance de rotation remarque que l'arbre s'est arrêté, pas que le produit s'est arrêté. **« Weight control »** surveille les kilogrammes par hectare appliqués et détecte une trémie vide ou voûtée dont le doseur tourne encore.

## Étalonnages {#calibrations}

- **Rotation** — pour **« Rotation speed control »** : [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md).
- **Masse** — pour **« Weight control »** ; refaites-le à chaque changement de produit : [Étalonner le doseur au poids](calibrate-dispenser-weight.md).

L'écran d'état montre la fréquence des impulsions de l'arbre **F=** en Hz, avec trois décimales. Ses alarmes : [Arbre de turbine ou de doseur : alarmes de vitesse](alarms-rotation.md), et avec la surveillance au poids [Dosage au poids](alarms-dosing-by-weight.md).
