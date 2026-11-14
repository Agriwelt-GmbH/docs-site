---
title: Vitesse d'avancement : SLOWER, FASTER et alarmes du capteur de vitesse
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-speed-sensor.html
---

# Vitesse d'avancement : SLOWER, FASTER et alarmes du capteur de vitesse

Que faire quand le Hectare Mini affiche SLOWER ou FASTER, quand un capteur de vitesse tombe en panne, ou quand les limites de vitesse ne peuvent pas être respectées.

Une vitesse d'avancement hors de ses limites ne déclenche **aucune fenêtre d'alarme**. L'indicateur de vitesse de l'écran d'accueil affiche **« SLOWER »** ou **« FASTER »** à la place de la valeur, tant que la vitesse est incorrecte — voir [Indicateurs](indicators.md#speed). Les limites sont **« Min speed, km/h »** (vitesse minimale) et **« Max speed, km/h »** (vitesse maximale) du capteur de vitesse ([Capteur de vitesse d'avancement](speed-sensor.md)) ; elles ne sont surveillées que tant que le boîtier surveille le semis.

## « SLOWER » — plus lentement {#slower}

**Ce que cela signifie.** La machine avance plus vite que **« Max speed, km/h »** ne le permet.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Roulez plus lentement.
2. La vitesse du boîtier correspond à la vitesse réelle — comparez avec le tracteur ou un GPS.
3. Les réglages du capteur de vitesse : **« Pulses »** (impulsions), **« Diameter, cm »** (diamètre, cm), **« Factor, % »** (facteur), **« Max speed, km/h »**.
4. Étalonnez le capteur de vitesse — [Étalonner le capteur de vitesse](calibrate-speed.md).
5. Le capteur de vitesse lui-même est en bon état.

## « FASTER » — plus vite {#faster}

**Ce que cela signifie.** La machine avance plus lentement que **« Min speed, km/h »** ne le permet.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Roulez plus vite.
2. La vitesse du boîtier correspond à la vitesse réelle.
3. Les réglages du capteur de vitesse, y compris **« Min speed, km/h »**.
4. Étalonnez le capteur de vitesse.
5. Le capteur de vitesse lui-même est en bon état.

Tant que la vitesse est simulée, l'indicateur affiche à la place **« INCREASE IMITATION »** (augmentez la simulation) ou **« DECREASE IMITATION »** (diminuez la simulation) : modifiez **« Imitation, km/h »**.

## « Speed sensor #1 failed » / « Speed sensor #2 failed » — capteur de vitesse en panne {#speed-sensor-1-failed-speed-sensor-2-failed}

**Ce que cela signifie.** Uniquement avec deux capteurs de vitesse sur un module d'entrée (**« Input device (2) »** dans le profil) : la machine avance, mais ce capteur n'a donné aucune impulsion depuis trop longtemps.

**Ce qu'il faut contrôler, dans cet ordre :**

1. L'entrefer entre le capteur et sa cible, et la cible elle-même.
2. Le connecteur et le câble du capteur jusqu'au module d'entrée.
3. Le capteur lui-même — échangez les deux capteurs ; si le défaut suit, le capteur est défectueux.

## « Error in settings of Min/Max » — erreur dans les réglages Min/Max {#error-in-settings-of-minmax}

**Ce que cela signifie.** Sur une machine dont les moteurs dosent au poids : une limite de vitesse réglée sur le capteur de vitesse ne peut pas être tenue avec les vitesses auxquelles les moteurs peuvent doser — le minimum se situe à la vitesse de dosage la plus élevée ou au-dessus, ou le maximum à la plus basse ou en dessous.

**Ce qu'il faut contrôler, dans cet ordre :**

1. L'écran d'état du capteur de vitesse : il affiche les limites en vigueur et écrit en rouge celle qui est impossible — [L'écran d'état d'un capteur](sensor-status-screen.md).
2. **« Min speed, km/h »** et **« Max speed, km/h »** du capteur de vitesse.
3. Les doses de consigne des produits et les limites de vitesse des moteurs — [Étalonner un moteur au poids](calibrate-motor-weight.md).
