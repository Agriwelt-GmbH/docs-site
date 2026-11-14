---
title: L'écran d'accueil
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/home-screen.html
---

# L'écran d'accueil

Ce qu'est chaque élément de l'écran d'accueil — vitesse, indicateurs, surface, doses, diagrammes des sections — sur un semoir à l'arrêt et sur un semoir monograine au travail.

L'écran d'accueil est le principal écran de travail. Il affiche les diagrammes des capteurs de surveillance des sections, les indicateurs d'état des appareils et les chiffres clés du travail. Ce qu'il affiche dépend du [profil](profile.md) : chaque groupe de capteurs et d'appareils qui y est inscrit a ses vignettes, ses colonnes, son champ de dose.

## Un semoir à céréales avec semences et engrais {#a-grain-drill-with-seed-and-fertilizer}

::: {.anatomy fig="one-home-m1"}
1. **Vitesse d'avancement.** En km/h. Les messages relatifs à la vitesse remplacent le chiffre. [Vitesse](indicators.md#speed)
2. **Trémies.** Une icône par capteur de trémie, numérotée. Rouge — le niveau est sous le capteur. [Trémie](indicators.md#hopper)
3. **Doseurs.** Rotation des arbres des doseurs ; l'icône tourne tant que l'arbre tourne. [Doseur](indicators.md#metering-unit)
4. **Capteurs du moteur.** Pression d'huile, charge de la batterie et allumage du moteur d'entraînement de la turbine. [Capteurs du moteur](indicators.md#engine-sensors)
5. **Horloge.** L'heure ; la case porte aussi des messages. [Horloge](indicators.md#clock)
6. **Carte mémoire.** Affichée tant qu'une carte microSD est dans le logement. [Carte mémoire](indicators.md#memory-card)
7. **Turbine.** L'icône de la turbine et sa vitesse en tr/min. [Turbine](indicators.md#fan)
8. **Traceurs.** Quel bras de traceur est abaissé. [Traceurs](indicators.md#markers)
9. **Passage de jalonnage.** Le passage en cours au-dessus du nombre de passages du rythme. [Passage de jalonnage](indicators.md#tramline-bout)
10. **Surface.** Hectares traités sur le champ actif. [Surface](indicators.md#area)
11. **Dose de produit en masse.** La dose du produit 1, en kg/ha. [Dose de produit en masse](indicators.md#product-rate-by-weight)
12. **Diagramme des semences.** Une colonne par capteur de graines ; la ligne blanche est la ligne de contrôle. [Le diagramme des sections](section-diagram.md)
13. **Numéros de section.** Le numéro de chaque section, sous sa colonne.
14. **Champ de dose.** Dose mesurée en haut, consigne en dessous, ici en graines par seconde. [Modifier la dose de consigne](set-the-target-rate.md)
15. **Position de travail.** Ici une × rouge — le capteur de position de travail ne répond pas. [Position de travail](indicators.md#implement-position)
16. **Diagramme des engrais.** Sections 25 à 36, avec leur propre champ de dose en unités d'engrais par seconde.
17. **Défaut d'actionneur.** Au moins un moteur ou un actionneur de jalonnage est en état d'alarme. [Défaut d'actionneur](indicators.md#actuator-failure)

Un semoir à 24 rangs de semences et 12 rangs d'engrais, à l'arrêt sur le banc : consignes réglées, doses réelles à zéro.
:::

## Un semoir monograine au travail {#a-planter-at-work}

::: {.anatomy fig="one-home-precise-at-work"}
1. **Vitesse d'avancement.** Ici en jaune, parce qu'elle est simulée sur le banc. [Vitesse](indicators.md#speed)
2. **Trémie.** Verte — produit au-dessus du capteur.
3. **Pression.** Dépression ou pression en kPa. [Pression](indicators.md#pressure)
4. **Surface.** Hectares traités sur le champ actif.
5. **Densité de semis.** La dose réelle de semis en milliers de graines par hectare. [Densité de semis](indicators.md#population)
6. **Carte mémoire.**
7. **Colonne de section.** Verte — le rang sème dans sa tolérance. [Couleurs des colonnes](section-states.md#column-colours)
8. **Barre des manques.** Hachures jaunes à gauche d'une colonne : la part de manques dans ce rang.
9. **Barre des doubles.** Hachures bleues à droite d'une colonne : la part de doubles.
10. **Ligne de dose.** La dose de consigne sur tous les rangs.
11. **Repères de tolérance.** Limites haute et basse de l'écart admis, dans chaque colonne.
12. **Champ de dose.** Graines mesurées par mètre en haut, consigne en dessous.
13. **Position de travail.** Verte — abaissée, en travail.
14. **Numéros de section.**

Un semoir monograine de huit rangs en mode « Precise » (précis), en train de semer.
:::

Ce que signifie chaque indicateur dans tous ses états figure dans [Indicateurs](indicators.md) ; le diagramme lui-même — ligne, repères, couleurs — dans [Le diagramme des sections](section-diagram.md).

## Ce que vous pouvez faire depuis l'écran d'accueil {#what-you-can-do-from-the-home-screen}

| **Pour faire ceci** | **Faites ceci** |
| --- | --- |
| Ouvrir le menu principal | **« MENU »**, ou touchez avec deux doigts |
| Modifier la dose de consigne | **« PLUS »** / **« MINUS »** — [Modifier la dose de consigne](set-the-target-rate.md) |
| Verrouiller ou déverrouiller l'application du produit | Maintenez **« HOME »** — [Verrouiller l'application à la main](lock-application-by-hand.md) |
| Ouvrir le menu du passage de jalonnage | **« BACK »** — [Passage de jalonnage suivant](next-tramline-bout.md) |
| Laisser le panneau régler le seuil d'alarme | Double toucher, pendant l'application — [Régler le seuil d'alarme](set-the-alarm-level.md) |
| Ouvrir les réglages d'un appareil | Touchez et maintenez son icône ou sa colonne |
| Passer à l'écran de travail suivant | **« HOME »**, ou glissez vers la gauche — [Écrans de travail](working-screens.md) |
| Ouvrir le deuxième écran d'accueil | Glissez vers la droite — [Deuxième écran d'accueil](second-home-screen.md) |

Tous les boutons de tous les écrans : [Boutons et gestes](buttons-and-gestures.md).
