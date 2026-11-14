---
title: L'écran d'accueil
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/home-screen.html
---

# L'écran d'accueil

Ce qu'est chaque partie de l'écran d'accueil du Hectare Mini — vitesse, indicateurs, surface, population, diagrammes et champs de dose — et ce que vous pouvez y faire.

L'écran d'accueil est l'écran de travail principal. Il montre l'état de chaque appareil de la machine et, en dessous, un diagramme pour les semences et un pour l'engrais. Ce qu'il affiche découle du [profil](profile.md) : chaque appareil qui y est déclaré a son indicateur. Lorsque la place manque, le panneau réduit la vitesse ou les diagrammes, et sur un écran chargé il supprime l'indicateur de surface ou de population.

## Un semoir monograine avec semences et engrais {#a-planter-with-seed-and-fertilizer}

::: {.anatomy fig="home-elements"}
1. **Vitesse d'avancement**, en km/h. Les messages sur la vitesse remplacent le chiffre. [Vitesse](indicators.md#speed)
2. **Trémies**, numérotées. Rouge — vide. [Trémie](indicators.md#hopper)
3. **Arbres de doseur.** Gris — en ordre ; l'icône tourne tant que l'arbre tourne. [Arbre de doseur](indicators.md#dispenser-shaft)
4. **Horloge.** L'heure ; elle porte aussi des messages. [Horloge](indicators.md#clock)
5. **Traceurs.** Jaune — les deux bras de traceur sont relevés. [Traceurs](indicators.md#markers)
6. **Turbine** et sa vitesse en tr/min. [Turbine](indicators.md#fan)
7. **Surface** traitée sur la parcelle active, en ha. [Surface](indicators.md#area)
8. **Population** — la densité de semis en milliers de graines par hectare, en mode **« Precise »** (précis). [Population](indicators.md#population)
9. **Diagramme de semences.** Une colonne par capteur de graines. [Le diagramme des sections](section-diagram.md)
10. **Échelle des manques et des doubles**, en pour cent (mode **« Precise »**).
11. **Champ de dose de semences.** Dose mesurée en haut, consigne en dessous, ici en graines par mètre. [Modifier la dose de consigne](set-the-target-rate.md)
12. **Numéros des sections.**
13. **Diagramme d'engrais**, ici en mode **« Flow »** (débit), avec sa ligne de contrôle.
14. **Champ de dose d'engrais.** Débit mesuré en haut, seuil d'alarme en dessous, en unités d'engrais par seconde.

Un semoir monograine de 12 rangs en mode « Precise », avec 12 conduites d'engrais en mode « Flow », à l'arrêt.
:::

## Un semoir à céréales sur le banc {#a-grain-drill-on-the-bench}

::: {.anatomy fig="home-idle"}
1. **Vitesse d'avancement.**
2. **Trémies.** Contour rouge — vide.
3. **Arbres de doseur.** Rouge — alarme : l'arbre ne tourne pas.
4. **Horloge.**
5. **Turbine.** Rouge avec **XXXX** — pas de liaison avec le capteur de turbine.
6. **Surface.**
7. **Réception GPS.** L'icône de satellite et le nombre de satellites utilisés. [Réception GPS](gps-receiver.md)
8. **Colonne de semences.** Gris foncé — pas de débit, le semoir est à l'arrêt.
9. **Ligne de contrôle.** Le seuil d'alarme tracé en travers du diagramme.
10. **Champ de dose.** Débit mesuré en haut, seuil d'alarme en dessous, en graines par seconde.
11. **Numéros des sections.**

Un semoir à céréales de 12 rangs en mode « Flow », à l'arrêt sur le banc, sans produit et sans turbine.
:::

Tous les indicateurs et leurs états : [Indicateurs](indicators.md). Le diagramme — colonnes, lignes, couleurs : [Le diagramme des sections](section-diagram.md).

## Deux modes {#two-modes}

L'écran d'accueil fonctionne en deux modes :

- **Mode de surveillance** — après la mise sous tension. Vous suivez le travail et modifiez les doses.
- **Mode de réglage des capteurs** — maintenez **« MENU »**. Un appareil s'affiche sur fond blanc ; **« UP »** et **« DOWN »** passent à l'appareil suivant, **« PLUS »** et **« MINUS »** le mettent sous ou hors surveillance, **« MENU »** ouvre son menu contextuel. **« BACK »** quitte le mode. Voir [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md).

![L'écran d'accueil en mode de réglage des capteurs : l'indicateur de vitesse est sélectionné.](figures/sensor-mode-enter)

## Ce que vous pouvez faire depuis l'écran d'accueil {#what-you-can-do-from-the-home-screen}

| **Pour faire ceci** | **Faites ceci** |
| --- | --- |
| Ouvrir le menu principal | **« MENU »** |
| Modifier une dose de consigne ou un seuil d'alarme | **« PLUS »** / **« MINUS »** ; **« UP »** / **« DOWN »** choisissent le champ — [Modifier la dose de consigne](set-the-target-rate.md) |
| Laisser le panneau régler le seuil d'alarme | Maintenez **« BACK »** pendant le semis — [Régler le seuil d'alarme](set-the-alarm-level.md) |
| Verrouiller ou déverrouiller l'application du produit | Maintenez **« HOME »** — [Verrouiller l'application à la main](lock-application-by-hand.md) |
| Ouvrir le menu du passage de jalonnage | **« BACK »** — [Passage de jalonnage suivant](next-tramline-bout.md) |
| Ouvrir les réglages d'un appareil | Maintenez **« MENU »**, sélectionnez-le, **« MENU »** |
| Passer à l'écran de travail suivant | **« HOME »** — [Écrans, menus et fenêtres](interface-basics.md) |
