---
title: L'écran Motors
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/motors-screen.html
---

# L'écran Motors

Une vignette par moteur de doseur et un symbole par actionneur de jalonnage — comment accéder à l'écran, lire les couleurs, mettre un moteur hors surveillance et ouvrir ses réglages.

L'écran Motors (moteurs) montre les moteurs électriques de doseur de la machine, une vignette chacun, et les actionneurs de jalonnage. C'est l'écran à consulter lorsqu'un rang cesse de semer et que vous voulez savoir si le moteur en est la cause. Il n'a pas de titre : il ne porte que des symboles numérotés de moteurs et d'actionneurs — ni doses, ni surface, ni vitesse.

Il existe si le profil contient au moins un moteur de semences, un moteur d'engrais ou un actionneur de jalonnage, et il n'est affiché **qu'au-dessus du niveau Operator** — activez d'abord le niveau Agronomist ([Activer le niveau Agronomist](enable-agronomist-level.md)). Il suit alors l'écran Statistics : trois appuis sur **« HOME »** depuis l'écran d'accueil. **« HOME »** passe à l'écran de régulation de dose ; **« BACK »** ramène à l'écran d'accueil.

![L'écran Motors d'un semoir monograine à huit moteurs de semences.](figures/mini-motors-screen)

Les **moteurs de semences** se trouvent dans une barre en haut, numérotés dans l'ordre du profil. En dessous, une barre de **moteurs d'engrais**, si la machine en a — sur une machine de plus de vingt rangs sans moteurs d'engrais, la seconde barre contient la seconde moitié des moteurs de semences. Les **actionneurs de jalonnage** se trouvent sous les barres. À côté de chaque moteur : la vitesse de l'arbre entraîné en tr/min ; sur les machines à nombreux moteurs, elle est omise pour que toutes les vignettes tiennent.

## Lire la vignette d'un moteur {#reading-a-motor-tile}

La couleur du symbole est l'état. Le symbole et le signe alternent une fois par seconde tant que l'état n'est pas normal.

| **Symbole** | **Valeur** | **État** |
| --- | --- | --- |
| Moteur, **vert** | la vitesse | Sous surveillance et entraîné. |
| Moteur et **STOP**, jaune | la vitesse | En ordre, mais **l'application est coupée** — en fourrière, ou verrouillée à la main. Ce n'est pas un défaut. |
| Moteur, **rouge** | la vitesse | Alarme. La fenêtre d'alarme en donne la raison. |
| Moteur et croix, rouge | **XXX** | Pas de liaison avec le contrôleur de moteur. Contrôlez son alimentation, son câble et ses connecteurs. |
| Moteur et **?**, rouge | **???** | L'appareil qui répond n'est pas un contrôleur de moteur, ou le contrôleur est resté en mode de mise à jour. |
| Moteur barré | **!!!** | Mis hors surveillance : ni entraîné ni surveillé. |

![Trois vignettes : vert en ordre, rouge avec XXX, barrée.](figures/mini-motors-tile-states)

> **REMARQUE**
>
> **Le jaune n'est pas un défaut.** Un écran de signes STOP jaunes signifie que l'application est coupée. Le rouge est un défaut ; le jaune est un état que vous avez choisi.

## Lire un actionneur de jalonnage {#reading-a-tramline-actuator}

| **Symbole** | **État** |
| --- | --- |
| Rentré ou sorti, **gris**, fixe | Il a atteint cette position. |
| Rentré ou sorti, **jaune**, fixe | Il se déplace vers cette position. |
| Rentré et sorti en alternance, jaune | La position n'est pas certaine. |
| Croix rouge, clignotante | Pas de liaison. |
| Point d'interrogation rouge, clignotant | L'appareil qui répond n'est pas un actionneur de jalonnage. |
| Symbole d'actionneur, rouge, clignotant | L'actionneur signale une alarme. |
| Barré, gris, clignotant | Mis hors surveillance. |

La position atteinte est grise, pas verte : ici, seuls les moteurs sont verts.

## Sélectionner un moteur {#selecting-a-motor}

Maintenez **« MENU »** pour activer la sélection ; elle se place sur le premier moteur, sur fond blanc. **« UP »** et **« DOWN »** parcourent une barre puis passent à la barre suivante et aux actionneurs. Ensuite :

- **« MENU »** ouvre le menu contextuel du moteur ou de l'actionneur sélectionné — [Menu contextuel d'un moteur](motor-context-menu.md).
- **« MINUS »** / **« PLUS »** le mettent hors ou sous surveillance — [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md).
- **« BACK »** quitte la sélection ; un second **« BACK »** ramène à l'écran d'accueil.

![L'écran Motors avec le moteur 3 sélectionné.](figures/mini-motors-focus)

## L'écran de service des moteurs {#the-service-screen-of-the-motors}

L'élément de menu contextuel **« Electric motors »** (moteurs électriques) (niveau Service) ouvre un écran destiné au technicien de service : versions, type de moteur, vitesse de consigne et réelle, code d'erreur, tensions, température, courant et seize signes d'état dans la vue **« Registers »** (registres), et compteurs par parcelle dans la vue **« Statistics »** (statistiques). Vous n'en avez pas besoin pour semer.

::: {.anatomy fig="mini-motors-service-statistics"}
1. **Mode** — **« HOME »** commute entre les vues.
2. **Numéro du moteur** — **« MINUS »** et **« PLUS »** changent de moteur.
3. **Nom de la vue.**
4. **Numéro de parcelle** — **« UP »** et **« DOWN »** le changent ; **(A)** marque la parcelle active.
5. **Compteurs** — **« Jammed »** (bloqué), **« Disconnects »** (déconnexions) et **« Other »** (autres). Au-dessus de zéro, en rouge.
6. **In failure** — distance parcourue avec le moteur en panne.

La vue Statistics du moteur 1, parcelle 1.
:::

**« BACK »** quitte l'écran. Si le numéro n'appartient à aucun moteur du profil, **« No data »** (pas de données) apparaît.
