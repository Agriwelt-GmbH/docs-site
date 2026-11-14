---
title: Les vignettes du bas
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/bottom-tiles.html
---

# Les vignettes du bas

La bande de vignettes sous les rangs et l'image du champ — ce que montre chaque vignette, ce qu'ouvre un toucher, comment choisir ce que montre un emplacement, et l'emplacement d'alarme à droite.

Sous **« Rows »** (rangs) et sous **« Field »** (champ) se trouve une bande de vignettes. Chaque vignette montre une valeur : un mot en haut, la valeur en gros chiffres, l'unité, et une icône dans un anneau. La couleur de l'anneau indique l'état : vert — normal, rouge — alarme (l'anneau clignote), jaune — attention, gris — pas de données ou pas de réponse.

La bande est présente quand la machine a quelque chose à y montrer : un groupe de semis en Hybrid ou Precision, ou des appareils sur le HUB-8. Une machine en Flow sans appareils n'a pas de bande.

## Ce que peuvent montrer les vignettes {#what-the-tiles-can-show}

| Vignette | Ce qu'elle montre | Un toucher ouvre |
| --- | --- | --- |
| **« Speed »** (vitesse) | La vitesse d'avancement en km/h, d'après le GNSS de l'iPad | La fiche de vitesse : la vitesse et sa provenance |
| **« Area »** (surface) | Les hectares du champ actif | **« Statistics »** (statistiques) |
| **« Population »** (population) | Milliers de graines par hectare (Precision) | La fiche de dose |
| **« Rate »** (dose) | La dose de consigne en graines par mètre | La fiche de dose |
| **« Operating time »** (temps de travail) | Heures et minutes de travail sur le champ actif | **« Statistics »** |
| **« Field »** | Le numéro du champ actif | **« Statistics »** |
| **« Bout »** (passage) | Le passage de jalonnage, par exemple « 2 / 4 » | Le menu des passages. [Jalonnage](tramline.md) |
| Un appareil — **« Hopper »** (trémie), **« Fan »** (turbine), **« Metering unit »** (doseur), **« Position »** (position), **« Flowmeter »** (débitmètre) … | Son état en un mot (**« Full »** (pleine) / **« Empty »** (vide), **« Running »** (en marche) / **« Stopped »** (arrêté), **« Work »** (travail) / **« Transport »** (transport)) ou sa valeur (tr/min, l/min) | La page de cet appareil. [Entrées du HUB-8](hub8-inputs.md) |

## Choisir ce que montre un emplacement {#choose-what-a-place-shows}

La bande a autant d'emplacements qu'il en tient en largeur d'écran : 3 sur un iPhone tenu droit, jusqu'à 8 sur un iPad tenu à l'horizontale.

::: steps
1. Appuyez sur une vignette et maintenez une demi-seconde. La liste **« Choose value »** (choisir une valeur) s'ouvre dessous : toutes les valeurs que la machine peut montrer, avec leur icône et leur valeur actuelle ; celle de cet emplacement est repérée.

2. Touchez la valeur voulue. Si elle se trouve déjà à un autre emplacement, les deux s'échangent.
:::

Le choix est conservé pour le profil de machine. **« Default slots »** (emplacements par défaut) dans **« Settings »** (réglages) › **« Machine »** remet la vitesse, la surface, la population et les premiers appareils.

## L'emplacement d'alarme {#the-alarm-place}

L'emplacement de droite est aussi l'emplacement d'alarme. Quand un appareil qui n'a aucun emplacement dans la bande passe en alarme, sa vignette s'y place, anneau clignotant, jusqu'à la fin de l'alarme ; un toucher ouvre sa page. Tant qu'elle y est, un appui prolongé n'ouvre aucun choix — l'alarme n'est pas masquée par un choix.

## La fiche de dose {#the-rate-sheet}

La fiche de dose montre la dose en graines par mètre en gros chiffres, et la population en milliers de graines par hectare en dessous. Modifiez-la avec **−** / **+** (maintenez pour des pas de dix), ou touchez un nombre et saisissez-le. Rien n'arrive à la passerelle avant que vous appuyiez sur **« Accept »** (valider) ; balayer la fiche vers le bas laisse la dose inchangée.

> **VOIR AUSSI**
>
> [L'écran des rangs](rows-screen.md) · [Champ](field-screen.md)
