---
title: Turbine ou arbre de doseur : alarmes de vitesse
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-rotation.html
---

# Turbine ou arbre de doseur : alarmes de vitesse

Que faire quand la turbine ou un arbre de doseur du Hectare Mini tourne trop lentement, trop vite ou pas du tout.

Le capteur de turbine et le capteur d'arbre de doseur utilisent les deux mêmes messages. **La ligne d'appareil de la fenêtre d'alarme vous dit lequel** — **Fan** (turbine) ou **Dispenser** (doseur), avec son numéro. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Low speed of rotation » — vitesse de rotation trop faible {#low-speed-of-rotation}

**Ce que cela signifie.** La turbine tourne plus lentement que **« Minimum, rpm »** (minimum, tr/min), ou l'arbre du doseur plus lentement que la vitesse d'avancement ne l'exige, de plus de **« Maximum error, % »** (erreur maximale).

**Ce qu'il faut contrôler, dans cet ordre :**

1. **Doseur uniquement :** la vitesse du boîtier correspond à la vitesse réelle.
2. L'organe surveillé — la turbine et son entraînement, ou le doseur et son entraînement.
3. Les réglages du capteur : pour la turbine **« Minimum, rpm »** et **« Pulses »** (impulsions) — [Capteur de turbine](fan-sensor.md) ; pour le doseur **« Maximum error, % »** — [Capteur d'arbre de doseur](dispenser-sensor.md).
4. Le capteur lui-même est en bon état.
5. **Doseur uniquement :** étalonnez de nouveau la rotation — [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md).

## « High speed of rotation » — vitesse de rotation trop élevée {#high-speed-of-rotation}

**Ce que cela signifie.** La turbine tourne plus vite que **« Maximum, rpm »** (maximum, tr/min) — cela est surveillé aussi machine à l'arrêt — ou l'arbre du doseur plus vite que la vitesse d'avancement ne l'exige, de plus de **« Maximum error, % »**.

**Ce qu'il faut contrôler, dans cet ordre :**

1. **Doseur uniquement :** la vitesse du boîtier correspond à la vitesse réelle.
2. L'organe surveillé — la turbine et son entraînement, ou le doseur et son entraînement.
3. Les réglages du capteur : pour la turbine **« Maximum, rpm »** et **« Pulses »** ; pour le doseur **« Maximum error, % »**.
4. Le capteur lui-même est en bon état.
5. **Doseur uniquement :** étalonnez de nouveau la rotation.

La vitesse de l'arbre du doseur n'est surveillée qu'avec **« Rotation speed control »** (contrôle de la vitesse de rotation) sur **« Yes »**, et seulement tant que la machine avance.

## « No rotation » — pas de rotation {#no-rotation}

**Ce que cela signifie.** L'arbre du doseur ne donne aucune impulsion pendant plus longtemps que **« Period, s »** (période, s) alors que la machine sème ou avance. Seul le capteur d'arbre de doseur déclenche cette alarme.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Le doseur et son entraînement — chaîne, embrayage, goupille de sécurité.
2. **« Period, s »** du capteur : assez long pour la vitesse d'arbre la plus lente au travail — [Capteur d'arbre de doseur](dispenser-sensor.md).
3. L'entrefer entre le capteur et sa cible, et le capteur lui-même.
