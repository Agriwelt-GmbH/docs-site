---
title: L'écran des rangs
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/rows-screen.html
---

# L'écran des rangs

La page de travail principale — une barre par rang, la ligne de contrôle ou la dose, la colonne de dose à droite de chaque bande, et les vignettes du bas.

**« Rows »** (rangs) est la page de travail principale et, par défaut, la page d'accueil. Chaque rang de la machine est une barre qui monte depuis la ligne du bas ; sa hauteur est le débit de son rang, sa couleur est le jugement porté.

::: {.anatomy fig="app-rows"}
1. **Avertissement sonore.** Ici **« Volume is off »** (volume coupé) : une alarme ne serait pas entendue. [Messages à l'écran](screen-messages.md)
2. **Colonne de dose de la bande de semis.** En haut le niveau réel de la bande, dessous la valeur de consigne (en gris), en bas l'unité : **« s/m »** (graines par mètre, Hybrid et Precision) ou **« s/s »** (graines par seconde, Flow).
3. **Un rang dans le jalonnage** — hachuré en gris. Sur le rang 4, les graines sont hachurées en rouge : ce rang sème dans le jalonnage. [Jalonnage](tramline.md)
4. **Barre bleue** — le rang sème plus que la dose admise (Hybrid et Precision).
5. **La ligne de dose** à travers toutes les colonnes, avec les lignes de tolérance au-dessus et en dessous (Hybrid et Precision). En Flow, une seule ligne de contrôle se trouve ici.
6. **Barre verte** — le rang sème dans sa tolérance.
7. **Colonne rouge** — un capteur qui n'a jamais répondu depuis la mise sous tension clignote en rouge vif. [Couleurs des barres](bar-colours.md)
8. **Barre jaune** — le rang sème moins que permis.
9. **Numéros de rang**, sous les colonnes.
10. **Colonne de dose de la bande d'engrais**, ici en graines par seconde.
11. **Bande d'engrais.** Avec des capteurs d'engrais dans le profil, les rangs de semis occupent la bande du haut et les rangs d'engrais la bande du bas.
12. **Les vignettes** — vitesse, surface, population et appareils de la machine. [Les vignettes du bas](bottom-tiles.md)

24 rangs de semis en Precision et 24 rangs d'engrais en Flow, sur le banc d'essai.
:::

Sans capteurs d'engrais, jusqu'à 20 rangs de semis tiennent dans une bande ; au-delà, ils se répartissent sur deux bandes, la première moitié en haut.

## Ce que vous pouvez faire sur cette page {#what-you-can-do-on-this-page}

| Pour faire ceci | Faites ceci |
| --- | --- |
| Déplacer la ligne de contrôle (Flow) ou la dose (Hybrid, Precision) | Appuyez sur les chiffres de la colonne de dose et maintenez, puis faites glisser vers le haut ou le bas. La valeur change d'un pas tous les 12 points de déplacement du doigt (un petit déplacement) ; la surbrillance s'éteint 5 secondes après le dernier toucher. En Hybrid et Precision, la nouvelle dose part vers la passerelle quand vous levez le doigt. |
| Ouvrir le menu d'un rang | Appuyez sur une barre et maintenez : une loupe nomme le rang sous le doigt ; glissez jusqu'au rang voulu et levez le doigt. Ou touchez une bande : les huit rangs autour du doigt s'ouvrent en grand ; touchez-en un. [Le menu du rang](row-menu.md) |
| Modifier la dose en la saisissant | Touchez la vignette **« Population »** ou **« Rate »** (dose). [Les vignettes du bas](bottom-tiles.md) |
| Passer à une autre page | Balayez vers la gauche ou la droite, ou touchez un onglet. [Se déplacer dans l'app](app-navigation.md) |

## Quand la bande est hors surveillance {#when-the-band-is-not-under-control}

Le contrôle démarre quand assez de rangs sèment dans la norme pendant 3 secondes consécutives — la proportion se règle dans **« Share of seeding rows »** (proportion de rangs semant). Quand les graines s'écoulent mais que trop peu de rangs sont dans la norme, la bande affiche la pastille jaune clignotante **« NOT UNDER CONTROL »** (hors surveillance) avec ses rangs, et l'avertisseur sonore retentit. Aucune fenêtre ne s'ouvre. Contrôlez la ligne de contrôle ou la dose, et les rangs retirés de la surveillance. [Code 207](codes-2-seeding.md#c207)

Tant que la liaison avec la passerelle est coupée, toute la page est assombrie : les barres montrent la dernière mesure, pas la mesure actuelle.

> **VOIR AUSSI**
>
> [Couleurs des barres](bar-colours.md) · [Réglages Products](settings-products.md) · [Réglages Control and Alarms](settings-control-alarms.md)
