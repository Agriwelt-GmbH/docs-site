---
title: Travailler sans capteur de vitesse
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/work-without-speed-sensor.html
---

# Travailler sans capteur de vitesse

Quand le capteur de vitesse tombe en panne au champ — prendre la vitesse au GPS, ou finir le travail sur une vitesse simulée et régler l'application à la main.

**Symptôme.** Le champ de vitesse affiche **XX.X** en rouge, ou la vitesse reste à zéro alors que la machine avance. Sans vitesse, le panneau ne peut calculer ni la surface, ni les doses, ni les écarts, et les moteurs de doseur ne savent pas à quelle vitesse tourner.

**Cause.** Le capteur de vitesse ou l'appareil qui le porte ne répond pas, ou la roue ne donne plus d'impulsions.

**Que faire.** Deux solutions, toutes deux par le menu contextuel du capteur de vitesse — maintenez le doigt sur le champ de vitesse. Les deux éléments exigent le niveau Agronomist : [Activer le niveau Agronomist](enable-agronomist-level.md).

## Prendre la vitesse au GPS {#take-the-speed-from-gps}

Réglez **« GPS internal »** (GPS interne) sur **« Yes »** (oui). Le panneau prend la vitesse d'avancement à son propre récepteur. Surveillez le symbole de satellite dans la colonne de droite : vert ou jaune est utilisable, rouge ne l'est pas. Voir [GPS](gps.md).

## Travailler sur une vitesse simulée {#work-on-a-simulated-speed}

> **AVERTISSEMENT**
>
> **Quand la simulation de vitesse est activée, le panneau pilote les moteurs de doseur et la pompe comme si la machine avançait** — même à l'arrêt. Désactivez la simulation avant de quitter la cabine, et verrouillez l'application chaque fois que vous vous arrêtez.

::: steps
1. Maintenez le doigt sur le champ de vitesse. Son menu contextuel s'ouvre.

2. Réglez **« Imitation, km/h »** (simulation, km/h) sur la vitesse à laquelle vous allez rouler, jusqu'à 20 km/h. Le panneau vous indique **« Settings of Min and Max speed switched off! »** (les réglages de vitesse min. et max. sont désactivés !) — les limites de vitesse ne sont pas surveillées tant que la vitesse est simulée.

3. Le panneau verrouille lui-même l'application du produit : la main jaune apparaît dans la colonne de droite.

4. Revenez au niveau **Operator**, pour que les alarmes soient de nouveau affichées.

5. Le champ de vitesse montre maintenant un chiffre jaune en alternance avec **« IMITATION »** (simulation) ([Vitesse](indicators.md#speed)).

6. Réglez l'application avec le **verrouillage manuel** : maintenez le doigt sur un emplacement vide de la colonne de droite pour commencer à appliquer sur une passe, et de nouveau pour vous arrêter en fourrière. Voir [Verrouiller l'application du produit à la main](lock-application-by-hand.md).

7. Roulez à la vitesse que vous avez réglée. Les doses ne sont justes que tant que la vitesse réelle y correspond.
:::

Quand le capteur est réparé, remettez **« Imitation, km/h »** sur **« No »** (non) — glissez vers la gauche jusqu'à ce que la valeur indique **« No »** — et réglez de nouveau les limites de vitesse.

> **REMARQUE**
>
> **Un panneau allumé avec la simulation encore réglée démarre verrouillé.** Si rien n'est appliqué après un redémarrage, cherchez la main jaune.

Détails des réglages du capteur de vitesse : [Capteur de vitesse](speed-sensor.md).
