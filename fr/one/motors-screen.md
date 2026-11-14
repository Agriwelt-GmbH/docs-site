---
title: L'écran Motors
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/motors-screen.html
---

# L'écran Motors

Les moteurs électriques de doseur et les actionneurs de jalonnage de la machine, une vignette chacun — comment lire une vignette et comment accéder aux réglages d'un moteur.

L'écran Motors (moteurs) montre les moteurs électriques de doseur de la machine, une vignette chacun, et les actionneurs de jalonnage si la machine en a. Regardez ici quand un rang cesse de semer et que vous voulez savoir si le moteur en est la cause.

Il existe sur toute machine dont le profil comporte **au moins un moteur électrique ou un actionneur de jalonnage**. Accédez-y avec **« HOME »** depuis l'écran Statistics ; quittez-le avec **« HOME »** ou **« BACK »**.

::: {.anatomy fig="motors"}
1. **Moteur 1, STOP.** Jaune — le moteur est en état de marche, mais l'application du produit ne tourne pas.
2. **Valeur du moteur 1.** La vitesse de l'arbre entraîné en tr/min, ou graines par mètre en mode « Precise ».
3. **Moteur 2, × rouge.** Pas de liaison avec ce moteur.
4. **XXX.** Pas de valeur, car le moteur ne répond pas.

L'écran Motors d'une machine à deux moteurs de doseur et sans actionneurs de jalonnage.
:::

## Lire une vignette {#reading-a-tile}

La couleur du symbole est l'état. La valeur à côté est la vitesse de l'arbre entraîné en tr/min — ou, dans le mode de contrôle **« Precise »**, les graines par mètre mesurées par le capteur de graines de ce rang.

| **Symbole** | **Valeur** | **État** |
| --- | --- | --- |
| Moteur, **vert** | le chiffre | Normal. Le moteur est sous surveillance et piloté. |
| **STOP**, jaune | le chiffre | Le moteur est en état de marche, mais **l'application du produit est désactivée**. Il n'a rien — le système n'applique simplement pas. |
| Moteur, **rouge** | le chiffre | Le moteur est en état d'alarme. Lisez l'alarme pour en connaître la cause : [Alarmes du calculateur de moteur](alarms-motor-controller.md). |
| **×**, rouge | **XXX** | **Pas de liaison.** Contrôlez d'abord le câble et le connecteur. |
| **?**, rouge | **???** | Le panneau ne peut pas dire ce qu'est cet appareil : un autre type d'appareil répond à sa place, ou le calculateur est resté en mode de mise à jour de son micrologiciel. |
| **!**, contour | **!!!** | Le moteur est **mis hors surveillance** par l'opérateur. Il n'est ni piloté ni surveillé. |

> **REMARQUE**
>
> **Jaune n'est pas un défaut.** Un écran plein de signes STOP jaunes signifie que l'application est désactivée — en fourrière, ou verrouillée à la main depuis l'écran d'accueil. Rouge est un défaut ; jaune est un état que vous avez choisi.

## Actionneurs de jalonnage {#tramline-actuators}

| **Symbole de l'actionneur** | **État** |
| --- | --- |
| Rentré ou sorti, **vert** | L'actionneur a atteint sa position. |
| Rentré ou sorti, **jaune** | L'actionneur se déplace vers cette position. |
| Alternant entre rentré et sorti, **jaune** | Le panneau ne peut pas déterminer la position de l'actionneur. |
| **Rouge** clignotant | L'actionneur est en état d'alarme : [Alarmes de jalonnage](alarms-tramline.md). |
| **× rouge** ou **?** clignotant | Pas de liaison, ou un appareil d'un mauvais type. |
| **Blanc** clignotant | L'actionneur est mis hors surveillance. |

## Travailler avec l'écran {#working-with-the-screen}

| **Ce que vous voulez** | **Bouton** | **Ou geste** |
| --- | --- | --- |
| Les réglages d'un moteur | — | Touchez et maintenez sa vignette |
| Retour à l'écran Statistics | — | Glissement vers la droite |
| Retour à l'écran d'accueil | **« HOME »** ou **« BACK »** | Glissement vers la gauche |

L'appui long ouvre le menu contextuel du moteur sur lequel vous avez appuyé. On accède au même menu depuis l'écran d'accueil, mais ici vous voyez d'un coup tous les moteurs de la machine et pouvez choisir celui qui se comporte mal. Voir [Réglages du moteur de doseur](dispenser-motor.md).
