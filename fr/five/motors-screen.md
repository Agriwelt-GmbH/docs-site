---
title: L'écran Motors
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/motors-screen.html
---

# L'écran Motors

Les moteurs électriques de doseur et les actionneurs de jalonnage de la machine, une tuile chacun — comment lire une tuile et comment atteindre les réglages d'un moteur.

L'écran Motors montre les moteurs électriques de doseur de la machine, une tuile chacun, et les actionneurs de jalonnage si la machine en a. Regardez ici quand un rang cesse de semer et que vous voulez savoir si le moteur en est la cause.

Il existe sur toute machine dont le profil contient **au moins un moteur électrique ou un actionneur de jalonnage**. Atteignez-le depuis l'écran Statistics par un **long glissement vers la gauche**. Quittez-le par un **long glissement vers la gauche** vers l'écran d'accueil, ou un **long glissement vers la droite** pour revenir à Statistics.

::: {.anatomy fig="five-motors"}
1. **Moteur 1, STOP.** Jaune, clignotant — le moteur est en état de marche, mais l'application du produit ne tourne pas.
2. **Valeur du moteur 1.** La vitesse de l'arbre entraîné en tr/min.
3. **Moteur 2, × rouge.** Pas de liaison avec ce moteur.
4. **XXX.** Pas de valeur, parce que le moteur ne répond pas.

L'écran Motors d'une machine à deux moteurs de doseur et sans actionneurs de jalonnage.
:::

## Lire une tuile {#reading-a-tile}

La couleur du symbole est l'état. La valeur à côté est la vitesse de l'arbre entraîné en tr/min. Sur le [second écran d'accueil](second-home-screen.md), les mêmes vignettes affichent, dans le mode de contrôle **« Precise »**, les graines par mètre mesurées par le capteur de graines de ce rang.

| **Symbole** | **Valeur** | **État** |
| --- | --- | --- |
| Moteur, **vert** | le chiffre | Normal. Le moteur est sous surveillance et piloté. |
| **STOP**, jaune, clignotant sur le moteur | le chiffre | Le moteur est en état de marche, mais **l'application du produit est désactivée**. Rien ne cloche chez lui — le système n'applique simplement pas. |
| Moteur, **rouge** | le chiffre | Le moteur est en état d'alarme. Lisez l'alarme pour en connaître la cause. |
| **×**, rouge | **XXX** | **Pas de liaison.** Vérifiez d'abord le câble et le connecteur. |
| **!**, en contour | **!!!** | Le moteur est **mis hors surveillance**. Il n'est ni piloté ni surveillé. |

> **REMARQUE**
>
> **Le jaune n'est pas un défaut.** Un écran plein de signes STOP jaunes signifie que l'application est coupée — en fourrière, ou verrouillée à la main. Le rouge est un défaut ; le jaune est un état que vous avez choisi.

## Actionneurs de jalonnage {#tramline-actuators}

| **Symbole de l'actionneur** | **État** |
| --- | --- |
| Rentré ou sorti, **vert** | L'actionneur a atteint sa position. |
| Rentré ou sorti, **jaune** | L'actionneur se déplace vers cette position. |
| En alternance rentré et sorti, **jaune** | Le panneau ne peut pas déterminer la position de l'actionneur. |
| **Rouge** clignotant | L'actionneur est en état d'alarme. |
| **× rouge** ou **?** clignotant | Pas de liaison, ou appareil d'un mauvais type. |
| **Blanc** clignotant | L'actionneur est mis hors surveillance. |

## Utiliser l'écran {#working-with-the-screen}

| **Ce que vous voulez** | **Geste** |
| --- | --- |
| Les réglages d'un moteur ou d'un actionneur | Maintenir le doigt sur sa tuile |
| Retour à l'écran Statistics | Long glissement vers la droite |
| Suite vers l'écran d'accueil | Long glissement vers la gauche |

Le maintien du doigt ouvre le menu contextuel du moteur que vous avez touché. Son élément **« Information »** (informations) montre l'état du moteur et, pour un défaut de contrôleur, le code du dernier défaut. Ici, vous voyez d'un coup tous les moteurs de la machine et pouvez choisir celui qui se comporte mal.
