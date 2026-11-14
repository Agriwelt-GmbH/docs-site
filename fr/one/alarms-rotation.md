---
title: Turbine ou arbre de doseur : alarmes de vitesse
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-rotation.html
---

# Turbine ou arbre de doseur : alarmes de vitesse

Que faire quand la turbine ou l'arbre du doseur tourne trop lentement, trop vite ou pas du tout.

Le capteur de turbine et le capteur d'arbre de doseur utilisent les deux mêmes messages. **Le nom de l'appareil dans la fenêtre d'alarme vous dit lequel c'est.** Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Low speed of rotation » / « High speed of rotation » — vitesse de rotation trop faible / trop élevée {#low-speed-of-rotation-high-speed-of-rotation}

**Ce que cela signifie.** La turbine ou l'arbre du doseur tourne plus lentement ou plus vite que ce qui est admis.

**À vérifier, dans cet ordre :**

1. L'organe surveillé — la turbine ou le doseur et son entraînement.
2. Les réglages du capteur : pour la turbine **« Minimum, rpm »**, **« Maximum, rpm »** et **« Pulses »** — voir [Capteur de turbine](fan-sensor.md) ; pour le doseur — voir [Capteur de doseur](dispenser-sensor.md).
3. **Doseur seulement :** la vitesse d'avancement affichée par le boîtier correspond à la vitesse réelle.
4. Le capteur lui-même est en état de marche.
5. **Doseur seulement :** lancez l'étalonnage — voir [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md).

## « No rotation » — pas de rotation {#no-rotation}

**Ce que cela signifie.** L'arbre du doseur ne tourne pas. Seul le capteur d'arbre de doseur déclenche cette alarme.

**À vérifier, dans cet ordre :**

1. Le doseur et son entraînement.
2. Les réglages du capteur — voir [Capteur de doseur](dispenser-sensor.md).
3. Le capteur lui-même est en état de marche.
