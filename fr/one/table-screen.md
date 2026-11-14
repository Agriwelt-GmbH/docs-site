---
title: L'écran Table
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/table-screen.html
---

# L'écran Table

Les mesures de chaque section en chiffres — quels tableaux a votre machine, ce que signifie chaque colonne et comment lire les couleurs.

L'écran Table (tableau) montre les mesures de chaque section en chiffres, une ligne par section. Il répond à la question que le diagramme ne peut pas traiter : *quelle section exactement, et de combien.* Ouvrez-le depuis l'écran d'accueil avec **« HOME »** ; quittez-le avec **« BACK »**.

## Un semoir monograine en mode « Precise » {#a-planter-in-the-precise-mode}

::: {.anatomy fig="one-table-precise-at-work"}
1. **#.** Le numéro de la section.
2. **sds/m.** Graines par mètre, mesurées à l'instant.
3. **Q.%.** Qualité — la part de graines placées une à une, comme voulu.
4. **Db%.** Doubles — deux graines là où une était prévue.
5. **Sk%.** Manques — un vide là où une graine était prévue.
6. **ks/Ha.** La dose appliquée en milliers de graines par hectare (dans le deuxième tableau : graines par mètre).
7. **%.** L'écart de cette section par rapport à la dose réglée.
8. **Numéro de tableau.** Ce tableau et le nombre de tableaux, entre **(−)** et **(+)** — **« MINUS »** et **« PLUS »** changent de tableau.
9. **Numéro de section sur fond jaune.** Quelque chose sur cette ligne dérive vers sa limite.
10. **Valeur sur fond jaune.** Le chiffre qui a dérivé — ici les manques de la section 7.
11. **Totaux.** Les mêmes colonnes pour toute la machine.

Le premier des trois tableaux d'un semoir monograine de huit rangs, en train de semer.
:::

Une valeur sur fond **jaune** dérive vers sa limite ; sur fond **rouge**, elle l'a dépassée. Une ligne entière en **gris** avec **!** est une section mise hors surveillance ; une ligne en **rouge** avec **×** est un capteur qui ne répond pas, avec **?** un appareil d'un mauvais type.

> **REMARQUE**
>
> **Lisez d'abord la colonne des écarts.** Une section 20 % en dessous des autres a un problème que la moyenne ne montrera pas — une sortie partiellement bouchée, un disque usé, un capteur à nettoyer.

## Un semoir à céréales en mode « Flow » {#a-drill-in-the-flow-mode}

::: {.anatomy fig="table-1"}
1. **#.** Le numéro de la section.
2. **sds/s.** Graines par seconde. Des tirets tant que rien n'est compté.
3. **Échelle des écarts.** De −50 % à +50 %, en passant par 0.
4. **Barre d'écart.** À quelle distance cette section se trouve de la dose réglée.
5. **%.** Le même écart en chiffre.
6. **Numéro de tableau.** Tableau 1 sur 2 — le second contient les sections d'engrais.
7. **Écart le plus bas.** La section la plus éloignée sous la dose.
8. **Écart le plus haut.** La section la plus éloignée au-dessus de la dose.
9. **Intervalle de recalcul.** Le tronçon sur lequel les chiffres sont recueillis — **« Recalculation,m »** (recalcul) des capteurs.

Le tableau des semences d'un semoir à 24 rangs de semences et 12 rangs d'engrais, à l'arrêt.
:::

## Quels tableaux a votre machine {#which-tables-your-machine-has}

| **Tableau** | **Affiché quand** |
| --- | --- |
| **Compteurs de graines** — graines par seconde ou par mètre, avec les barres d'écart | Toujours. |
| **Dose par surface** (milliers par hectare) et **dose par distance** (graines par mètre) | Seulement dans le mode de contrôle de semis **« Precise »**. |
| **Engrais solide** | La machine a des capteurs d'engrais et le mode de contrôle de l'engrais n'est pas « Precise ». |
| **Engrais liquide** | La machine a des capteurs d'engrais liquide. |

En mode « Precise », le semoir monograine ci-dessus a trois tableaux : dose par surface (1/3), dose par distance (2/3) et compteurs de graines (3/3) — le nombre de graines semées par chaque section, à côté des barres d'écart, avec le total de la machine en milliers en bas.

![Le tableau des compteurs de graines du semoir monograine de huit rangs : graines par section, barres d'écart, total.](figures/one-table-counters)

## Travailler avec l'écran {#working-with-the-screen}

| **Ce que vous voulez** | **Bouton** | **Ou geste** |
| --- | --- | --- |
| Tableau suivant ou précédent | **« PLUS »** / **« MINUS »** | Long glissement vers la gauche ou la droite avec deux doigts |
| Faire défiler les lignes | **« UP »** / **« DOWN »** | Glissement vers le haut ou le bas |
| Remettre les mesures à zéro | **« MENU »** | Toucher avec deux doigts |
| Aller à Statistics | **« HOME »** | Glissement vers la gauche |
| Retour à l'écran d'accueil | **« BACK »** | Glissement vers la droite |

Remise à zéro : [Remettre les mesures à zéro](zero-the-readings.md).

## Le tableau pendant le semis {#the-table-while-seeding}

Les lignes changent à chaque comptage ; une ligne qui dérive devient jaune.

![Le tableau du semoir à 24 rangs pendant le semis, semences et engrais.](figures/one-table-live-24-12)

Sur les grandes machines, les rangs ne tiennent pas sur une page : **« UP »** et **« DOWN »** les font défiler.

![Le tableau de la machine de 96 rangs pendant le semis.](figures/one-table-live-48-48)
