---
title: L'écran Table
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/table-screen.html
---

# L'écran Table

Les mesures de chaque section en chiffres — quels tableaux possède votre machine, ce que signifie chaque colonne, et comment lire les couleurs.

L'écran Table montre les mesures de chaque section sous forme de chiffres, une ligne par section. Il répond à la question que le diagramme ne peut pas traiter : *quelle section exactement, et de combien.* Ouvrez-le depuis l'écran d'accueil par un **long glissement vers la gauche**. Il n'a pas de retour en arrière : un nouveau long glissement vers la gauche mène à l'écran Statistics, puis, en faisant le tour du cercle, à l'écran d'accueil ([Écrans de travail](working-screens.md)).

## Un semoir monograine en mode « Precise » {#a-planter-in-the-precise-mode}

::: {.anatomy fig="five-table-precise"}
1. **#.** Le numéro de la section.
2. **sds/m.** Graines par mètre, mesurées à l'instant.
3. **Q.%.** Qualité — la part de graines déposées une à une, comme voulu.
4. **Db%.** Doubles — deux graines là où une était voulue.
5. **Sk%.** Manques — un vide là où une graine était voulue.
6. **ks/Ha.** La dose appliquée en milliers de graines par hectare (dans le deuxième tableau : graines par mètre).
7. **%.** L'écart de cette section par rapport à la dose réglée.
8. **Numéro de tableau.** Ce tableau et le nombre de tableaux, dans le coin. Affiché seulement quand il y en a plus d'un.
9. **Numéro de section sur fond jaune.** Quelque chose sur cette ligne dérive vers sa limite.
10. **Valeur sur fond jaune.** Le chiffre qui a dérivé.
11. **Totaux.** Les mêmes colonnes pour toute la machine.

Le premier des trois tableaux d'un semoir monograine de huit rangs, en train de semer.
:::

Une valeur sur fond **jaune** dérive vers sa limite ; sur fond **rouge**, elle l'a dépassée. Une ligne entière en **gris** avec **!** est une section mise hors surveillance ; une ligne en **rouge** avec **×** est un capteur qui ne répond pas, avec **?** un appareil d'un mauvais type.

> **REMARQUE**
>
> **Lisez d'abord la colonne des écarts.** Une section à 20 % sous les autres a un problème que la moyenne ne montrera pas — une sortie partiellement bouchée, un disque usé, un capteur à nettoyer.

## Un semoir à céréales en mode « Flow » {#a-drill-in-the-flow-mode}

::: {.anatomy fig="five-table-flow"}
1. **#.** Le numéro de la section.
2. **sds/s.** Graines par seconde. Des tirets tant que rien n'est compté.
3. **Échelle des écarts.** De −50 % à +50 % en passant par 0.
4. **Barre d'écart.** À quelle distance cette section se tient de la dose réglée.
5. **%.** Le même écart sous forme de chiffre.
6. **Numéro de tableau.** Ici le tableau 1 sur 2 — le second contient les sections d'engrais.
7. **Écart le plus bas.** La section la plus en dessous de la dose.
8. **Écart le plus haut.** La section la plus au-dessus de la dose.
9. **Intervalle de recalcul.** Le tronçon sur lequel les chiffres sont recueillis — **« Recalculation,m »** (recalcul, m) des capteurs.

Le tableau des semences d'un semoir à rangs de semences et d'engrais, à l'arrêt.
:::

## Quels tableaux possède votre machine {#which-tables-your-machine-has}

| **Tableau** | **Affiché quand** |
| --- | --- |
| **Compteurs de graines** — graines par seconde ou par mètre, avec les barres d'écart | Toujours. |
| **Dose par surface** (milliers par hectare) et **dose par distance** (graines par mètre) | Uniquement dans le mode de contrôle du semis **« Precise »**. |
| **Engrais solide** | La machine a des capteurs d'engrais et le mode de contrôle de l'engrais n'est pas **« Precise »**. |
| **Engrais liquide** | La machine a des capteurs d'engrais liquide. |

En mode **« Precise »**, un semoir monograine a trois tableaux de semences : dose par surface (1/3), dose par distance (2/3) et compteurs de graines (3/3) — le nombre de graines semées par chaque section, à côté des barres d'écart, avec le total de la machine en bas.

![Le tableau des compteurs de graines : graines par section, barres d'écart, total.](figures/five-table-counters)

## Utiliser l'écran {#working-with-the-screen}

| **Ce que vous voulez** | **Geste** |
| --- | --- |
| Tableau suivant ou précédent | **Long** glissement vers la droite ou vers la gauche avec **deux doigts** |
| Faire défiler les lignes | Glisser vers le haut ou vers le bas |
| Remettre les mesures à zéro | Toucher avec **deux doigts** — [Remettre les mesures à zéro](zero-the-readings.md) |
| Passer à Statistics | Long glissement vers la gauche |

Sur les grandes machines, les rangs ne tiennent pas sur une seule page : glissez vers le haut et vers le bas pour les faire défiler. Une ligne qui dérive passe au jaune sous vos yeux.
