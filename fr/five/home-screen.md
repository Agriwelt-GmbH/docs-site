---
title: L'écran d'accueil
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/home-screen.html
---

# L'écran d'accueil

Ce qu'est chaque partie de l'écran d'accueil — vitesse, indicateurs, surface, doses, diagrammes des sections — sur un semoir à céréales à l'arrêt et sur un semoir monograine au travail, et ce que vous pouvez en faire au toucher.

L'écran d'accueil est l'écran de travail principal. Il montre les diagrammes des capteurs de surveillance des sections, les indicateurs d'état des appareils et les chiffres clés du travail. Ce qu'il montre suit le [profil](profile.md) : chaque groupe de capteurs et d'appareils saisi dans le profil obtient ses icônes, ses colonnes, son champ de dose.

L'écran compte quatre zones. La **vitesse d'avancement** s'affiche en grand en haut à gauche. Les **rangées d'indicateurs** courent le long du haut, avec l'**horloge** en haut à droite. Une **colonne d'indicateurs** descend le long du bord droit. La partie basse contient les **diagrammes** — une colonne par section — chacun avec son **champ de dose** à droite.

## Un semoir à céréales avec semences et engrais {#a-grain-drill-with-seed-and-fertilizer}

::: {.anatomy fig="five-home-flow"}
1. **Vitesse d'avancement.** En km/h. Les messages sur la vitesse remplacent le chiffre. [Vitesse](indicators.md#speed)
2. **Trémies.** Une icône par capteur de trémie, numérotée. Rouge — le niveau est sous le capteur. [Trémie](indicators.md#hopper)
3. **Doseurs.** Rotation des arbres de doseur ; l'icône tourne tant que l'arbre tourne. [Doseur](indicators.md#metering-unit)
4. **Turbine.** L'icône de la turbine et sa vitesse en tr/min. [Turbine](indicators.md#fan)
5. **Capteurs du moteur.** Pression d'huile, charge de la batterie et allumage du moteur d'entraînement de la turbine. [Capteurs du moteur](indicators.md#engine-sensors)
6. **Horloge.** L'heure ; l'emplacement porte aussi des messages. [Horloge](indicators.md#clock)
7. **Carte mémoire.** Affichée tant qu'une carte microSD est prête. [Carte mémoire](indicators.md#memory-card)
8. **Surface.** Hectares traités sur la parcelle active. [Surface](indicators.md#area)
9. **Dose de produit en masse.** La dose d'un produit, en kg/ha. [Dose de produit en masse](indicators.md#product-rate-by-weight)
10. **Diagramme des semences.** Une colonne par capteur de graines ; la ligne blanche est la ligne de contrôle. [Le diagramme des sections](section-diagram.md)
11. **Champ de dose.** Dose mesurée en haut, consigne en dessous, ici en graines par seconde. [Modifier la dose de consigne](set-the-target-rate.md)
12. **Diagramme de l'engrais.** Les sections d'engrais, avec leur propre champ de dose.
13. **Colonne de droite.** Position de la machine, verrouillage manuel, satellites, défaut d'actionneur — selon ce que possède la machine. [Indicateurs](indicators.md)
14. **Numéros de section.** Le numéro de chaque section, sous sa colonne.

Un semoir à rangs de semences et d'engrais, à l'arrêt : consignes réglées, doses réelles à zéro.
:::

## Un semoir monograine au travail {#a-planter-at-work}

::: {.anatomy fig="five-home-precise"}
1. **Vitesse d'avancement.** [Vitesse](indicators.md#speed)
2. **Trémie.** Vert — le produit est au-dessus du capteur.
3. **Pression.** Dépression ou surpression en kPa. [Pression](indicators.md#pressure)
4. **Surface.** Hectares traités sur la parcelle active.
5. **Population.** La dose de semis réelle en milliers de graines par hectare. [Population](indicators.md#population)
6. **Colonne de section.** Vert — le rang sème dans sa tolérance. [Couleurs des colonnes](section-states.md#column-colours)
7. **Barre des manques.** Hachures jaunes à gauche d'une colonne : la part de manques dans ce rang.
8. **Barre des doubles.** Hachures bleues à droite d'une colonne : la part de doubles.
9. **Ligne de dose.** La dose de consigne sur tous les rangs.
10. **Repères de tolérance.** Limites haute et basse de l'écart admis, dans chaque colonne.
11. **Champ de dose.** Graines par mètre mesurées en haut, consigne en dessous.
12. **Position de la machine.** Vert — abaissée, au travail. [Position de la machine](indicators.md#implement-position)

Un semoir monograine de huit rangs en mode **« Precise »**, en train de semer.
:::

Ce que signifie chaque indicateur dans tous ses états est décrit dans [Indicateurs](indicators.md) ; le diagramme lui-même — ligne, repères, couleurs — dans [Le diagramme des sections](section-diagram.md).

## Ce que vous pouvez faire depuis l'écran d'accueil {#what-you-can-do-from-the-home-screen}

| **Pour faire ceci** | **Faites ceci** |
| --- | --- |
| Ouvrir le menu principal | Touchez avec **deux doigts** |
| Modifier la dose de consigne ou le seuil d'alarme | Maintenez le doigt sur le diagramme, puis glissez vers le haut ou vers le bas — [Modifier la dose de consigne](set-the-target-rate.md) |
| Régler la consigne d'un produit en masse | Maintenez le doigt sur son indicateur kg/ha ; le pavé numérique s'ouvre |
| Laisser le panneau régler le seuil d'alarme | **Double toucher**, pendant l'application — [Régler le seuil d'alarme](set-the-alarm-level.md) |
| Verrouiller ou déverrouiller l'application du produit | Maintenez le doigt sur un emplacement vide de la colonne de droite — [Verrouiller l'application à la main](lock-application-by-hand.md) |
| Ouvrir les réglages d'un appareil | Maintenez le doigt sur son icône ou sa colonne |
| Passer à l'écran de travail suivant | **Long glissement vers la gauche** — [Écrans de travail](working-screens.md) |
| Ouvrir le second écran d'accueil | **Long glissement vers la droite** — [Second écran d'accueil](second-home-screen.md) |

Un long glissement parcourt plus d'un tiers de l'écran. Tous les gestes sur tous les écrans : [Zones tactiles et gestes](buttons-and-gestures.md).
