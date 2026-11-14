---
title: Arbre de turbine ou de doseur : alarmes de vitesse
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-rotation.html
---

# Arbre de turbine ou de doseur : alarmes de vitesse

Que faire quand la turbine ou l'arbre du doseur tourne trop lentement, trop vite, ou pas du tout.

Le capteur de turbine et le capteur d'arbre de doseur emploient les deux mêmes messages. **Le nom de l'appareil dans la fenêtre d'alarme vous dit lequel c'est.** Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Low speed of rotation » / « High speed of rotation » — vitesse de rotation trop faible / trop élevée {#low-speed-of-rotation-high-speed-of-rotation}

**Ce que cela signifie.** La turbine ou l'arbre du doseur tourne plus lentement ou plus vite que permis. Pour la turbine, les limites sont **« Minimum, rpm »** (minimum, tr/min) et **« Maximum, rpm »** (maximum, tr/min) ; pour l'arbre du doseur, le panneau le compare à la vitesse que demande la vitesse d'avancement, dans la limite de **« Maximum error, % »** (écart maximal).

**À vérifier, dans cet ordre :**

1. L'organe surveillé — la turbine ou le doseur et son entraînement.
2. Les réglages du capteur : pour la turbine **« Minimum, rpm »**, **« Maximum, rpm »** et **« Pulses »** (impulsions) — voir [Capteur de turbine](fan-sensor.md) ; pour le doseur — voir [Capteur d'arbre de doseur](dispenser-sensor.md).
3. **Doseur uniquement :** la vitesse d'avancement affichée sur le panneau correspond à la vitesse réelle.
4. Le capteur lui-même est en état de marche.
5. **Doseur uniquement :** faites l'étalonnage — voir [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md).

## « No rotation » — pas de rotation {#no-rotation}

**Ce que cela signifie.** L'arbre du doseur ne tourne pas alors que la machine sème ou se déplace. Seul le capteur d'arbre de doseur déclenche cette alarme. L'arbre est considéré à l'arrêt quand aucune impulsion n'est venue pendant **« Period, s »** (période, s).

**À vérifier, dans cet ordre :**

1. Le doseur et son entraînement.
2. Les réglages du capteur, surtout **« Period, s »** — voir [Capteur d'arbre de doseur](dispenser-sensor.md).
3. Le capteur lui-même est en état de marche.
