---
title: L'écran d'accueil sur différentes machines
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/home-screen-examples.html
---

# L'écran d'accueil sur différentes machines

Le même panneau sur un semoir monograine, un semoir à céréales et des machines de 44 et 96 rangs — à l'arrêt et au travail — pour reconnaître votre propre écran.

Ce que montre l'écran d'accueil dépend du [profil](profile.md). Les images ci-dessous ont été prises sur un seul panneau, micrologiciel 1.2.3, configuré comme différentes machines. Les particularités du banc — l'horloge bleue, la vitesse jaune — sont expliquées dans [À propos des images](about-the-pictures.md).

## Un semoir monograine de huit rangs, à l'arrêt {#an-eight-row-planter-standing-still}

::: {.anatomy fig="one-home-01-main"}
1. **Vitesse d'avancement.** Jaune : la vitesse est simulée, non mesurée.
2. **Trémies.** La première verte, la deuxième **rouge** — cette trémie signale qu'elle est vide.
3. **Doseurs.** Deux capteurs d'arbre de doseur.
4. **Turbine.** Avec sa vitesse en tr/min à côté.
5. **Surface.** Hectares traités sur le champ actif.
6. **Densité de semis.** La dose réelle de semis en milliers par hectare.
7. **Carte mémoire.** Une carte microSD est dans le logement.
8. **Tolérance.** L'écart admis en vigueur, écrit au-dessus du diagramme.
9. **Repères de tolérance.** Limites haute et basse, dans chaque colonne.
10. **Ligne de dose.** La dose de consigne.
11. **Colonne de section.** Vide : la machine est à l'arrêt.
12. **Champ de dose.** Graines mesurées par mètre en haut, consigne en dessous.
13. **Verrouillage manuel.** La main jaune : l'application du produit est verrouillée à la main. [Verrouiller l'application à la main](lock-application-by-hand.md)
14. **Défaut d'actionneur.** Un défaut des moteurs électriques de doseur. [Écran Motors](motors-screen.md)
15. **Numéros de section.**

Huit capteurs de graines, deux moteurs électriques de doseur, deux trémies, deux capteurs d'arbre de doseur, une turbine ; mode « Precise » (précis).
:::

## Trois machines, à l'arrêt {#three-machines-standing-still}

Les consignes sont réglées, les doses réelles sont à zéro. Quarante-quatre capteurs de graines sur deux rangées de vingt-deux, deux trémies, deux arbres doseurs, une turbine, un champ de dose en graines par seconde ; l'icône du semoir à droite est verte — la machine est en position de travail.

![L'écran d'accueil d'une machine de 44 rangs, à l'arrêt.](figures/one-home-comp-44)

Vingt-quatre capteurs de graines et douze capteurs d'engrais : deux diagrammes, deux champs de dose. En haut, deux trémies, deux arbres doseurs, la pression d'huile, la batterie, l'allumage et une turbine.

![L'écran d'accueil d'un semoir à 24 rangs de semences et 12 rangs d'engrais, à l'arrêt.](figures/one-home-comp-24-12)

Huit capteurs de graines en mode « Precise » avec un capteur de pression : une rangée de colonnes avec la bande de tolérance, la dose en graines par mètre et le comptage par hectare.

![L'écran d'accueil d'un semoir monograine de huit rangs avec un capteur de pression, à l'arrêt.](figures/one-home-comp-8-precise)

## Au travail {#at-work}

Le semoir monograine de huit rangs en train de semer. Chaque colonne est un rang ; les sommets bougent à chaque comptage, les hachures montrent les manques et les doubles. À lire avec [Le diagramme des sections](section-diagram.md).

![L'écran d'accueil en mode « Precise » pendant le semis.](figures/one-home-live-8-precise)

Le semoir à 24 rangs à 12 km/h. La série commence avec les colonnes **sous la ligne** et **« NOT UNDER CONTROL »** (hors surveillance) au-dessus des deux diagrammes ; puis la consigne est abaissée, les colonnes remontent au-dessus de la ligne et les rangs sont de nouveau sous surveillance.

![L'écran d'accueil du semoir à 24 rangs : de hors surveillance à sous surveillance.](figures/one-home-live-24-12)

La machine de 44 rangs à 12 km/h : deux diagrammes de vingt-deux colonnes, trémies pleines, arbres doseurs en rotation.

![L'écran d'accueil de la machine de 44 rangs pendant le semis.](figures/one-home-live-44)

La plus grande machine : 48 rangs de semences et 48 rangs d'engrais, trois trémies, trois arbres doseurs, deux turbines. Elle aussi démarre sous la ligne et revient sous surveillance quand la consigne descend à la dose réelle.

![L'écran d'accueil d'une machine de 96 rangs pendant le semis.](figures/one-home-live-48-48)

## Une machine réelle au travail {#a-real-machine-at-work}

Pris sur une machine avec 48 capteurs de graines sur deux rangées, deux trémies, deux capteurs d'arbre de doseur et une turbine, pendant le semis. Le champ de dose est sélectionné pour modification : son fond est éclairé, la consigne est en blanc et la valeur mesurée en gris. Non sélectionné, c'est l'inverse.

![L'écran d'accueil d'une machine de 48 rangs au travail, avec le champ de dose sélectionné.](figures/one-home-main-norm)
