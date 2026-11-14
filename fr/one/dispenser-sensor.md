---
title: Capteur d'arbre de doseur
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/dispenser-sensor.html
---

# Capteur d'arbre de doseur

Les paramètres du capteur d'arbre de doseur — contrôle de la rotation par rapport à la roue, ou contrôle au poids d'après la masse appliquée.

Le capteur d'arbre de doseur compte les tours d'un doseur entraîné par la roue de terre. Le boîtier peut le surveiller de deux façons : par sa **rotation** par rapport au capteur de vitesse, ou par la **masse** de produit qu'il applique. Ouvrez son menu contextuel comme dans [Réglages des capteurs](sensor-settings.md).

![Le menu contextuel d'un capteur de doseur, les deux contrôles désactivés.](figures/ctx-dispenser)

| Paramètre | Ce qu'il fait | Plage | Niveau |
| --- | --- | --- | --- |
| **« Period, s »** (période) | Le temps maximal entre deux impulsions de l'arbre. Si l'arbre ne donne aucune impulsion pendant plus longtemps alors que la machine sème ou avance, le boîtier déclenche **« No rotation »** (pas de rotation). Valeur par défaut : 10 s. | 1 … 60 | Operator |
| **« Rotation speed control »** (contrôle de la vitesse de rotation) | Surveiller la rotation de l'arbre par rapport à la vitesse d'avancement. | **« No »** (non) / **« Yes »** (oui) | Agronomist |
| **« Wheel, pulses »** (roue, impulsions) | Réglé par l'étalonnage de la rotation. | 1 … 65535 | Agronomist |
| **« Dispenser pulses »** (impulsions du doseur) | Réglé par l'étalonnage de la rotation. | 1 … 65535 | Agronomist |
| **« Maximum error, % »** (écart maximal) | L'écart que la vitesse de l'arbre peut avoir par rapport à celle qu'exige la vitesse d'avancement ; au-delà, pendant que la machine avance, le boîtier déclenche **« Low speed of rotation »** (vitesse de rotation trop faible) ou **« High speed of rotation »** (vitesse de rotation trop élevée). Affiché seulement quand **« Rotation speed control »** est sur **« Yes »**. Valeur par défaut : 10 %. | 1 … 50 | Agronomist |
| **« Weight control »** (contrôle au poids) | Surveiller le doseur par la **masse** appliquée plutôt que par sa rotation. | **« No »** / **« Yes »** | Agronomist |
| **« Type of product »** (type de produit) | Le produit que ce doseur dose. | | Agronomist |
| **« Weight, gr »** / **« Weight, pulses »** (poids, g / poids, impulsions) | Tous deux réglés par l'étalonnage au poids. | 1 … 65535 chacun | Agronomist |

Avec **« Weight control »** activé, le menu contextuel contient aussi **« Dispenser calibration(weight) »** (étalonnage du doseur au poids).

> **CONSEIL**
>
> **Préférez le contrôle au poids au contrôle de la rotation.** Le contrôle de la rotation remarque que l'arbre s'est arrêté, pas que le produit s'est arrêté. **« Weight control »** surveille les kilogrammes par hectare appliqués et détecte une trémie vide ou voûtée dont le doseur tourne encore.

## Étalonnages {#calibrations}

- **Rotation** — pour **« Rotation speed control »** : [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md).
- **Masse** — pour **« Weight control »** ; refaites-le chaque fois que le produit change : [Étalonner le doseur au poids](calibrate-dispenser-weight.md).

L'écran d'état affiche la fréquence d'impulsions de l'arbre **F=** en Hz, avec trois décimales. Ses alarmes : [Turbine ou arbre de doseur : alarmes de vitesse](alarms-rotation.md), et avec le contrôle au poids [Dosage au poids](alarms-dosing-by-weight.md).
