---
title: Travailler sans capteur de vitesse
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/work-without-speed-sensor.html
---

# Travailler sans capteur de vitesse

Quand le capteur de vitesse tombe en panne au champ — terminer le travail sur une vitesse simulée et commander l'application à la main.

**Symptôme.** Le champ de vitesse affiche **XX.X** en rouge, ou la vitesse reste à zéro alors que la machine avance. Sans vitesse, le panneau ne peut calculer ni la surface, ni les doses, ni les écarts, et les moteurs de doseur ne savent pas à quelle vitesse tourner.

**Cause.** Le capteur de vitesse ou son module d'entrée ne répond pas, ou la roue ne fournit plus d'impulsions. Voir [Alarmes du capteur de vitesse](alarms-speed-sensor.md).

**Que faire.** Terminer le champ sur une **vitesse simulée** et activer et désactiver l'application à la main.

> **AVERTISSEMENT**
>
> **Avec la simulation de vitesse activée, le panneau pilote les moteurs de doseur et la pompe comme si la machine avançait** — même à l'arrêt. Désactivez la simulation avant de quitter la cabine, et verrouillez l'application chaque fois que vous vous arrêtez.

::: steps
1. Sur l'écran d'accueil, touchez et maintenez le champ de vitesse. Son menu contextuel s'ouvre.

2. Réglez **« Imitation, km/h »** (simulation, km/h) à la vitesse à laquelle vous allez rouler. Cet élément exige le niveau Agronomist : [Activer le niveau Agronomist](enable-agronomist-level.md).

3. Revenez au niveau **Operator** (opérateur), pour que les alarmes soient de nouveau affichées.

4. Le champ de vitesse affiche maintenant un chiffre jaune alternant avec **« IMITATION »** ([Vitesse](indicators.md#speed)).

5. Commandez l'application avec le **verrouillage manuel** : maintenez **« HOME »** pour cesser d'appliquer en fourrière, maintenez-le de nouveau pour reprendre au passage suivant. Tant que le verrouillage est actif, la main jaune s'affiche au bord droit et la vitesse indique zéro. Voir [Verrouiller l'application à la main](lock-application-by-hand.md).

6. Roulez à la vitesse que vous avez réglée. Les doses ne sont justes que tant que la vitesse réelle y correspond.
:::

Quand le capteur est réparé, remettez **« Imitation, km/h »** à 0.

Détails des réglages du capteur de vitesse : [Capteur de vitesse](speed-sensor.md).
