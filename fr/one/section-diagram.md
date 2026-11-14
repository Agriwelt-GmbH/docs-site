---
title: Le diagramme des sections — colonnes, ligne et couleurs
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/section-diagram.html
---

# Le diagramme des sections — colonnes, ligne et couleurs

Comment lire les colonnes de l'écran d'accueil en mode « Precise » et en mode « Flow », et ce que signifie la ligne de contrôle.

Chaque colonne du diagramme est une section — un capteur de graines ou d'engrais. Sa hauteur est le débit qui traverse cette section. Le reste du tracé dépend du mode de contrôle du semis : **« Precise »** (précis — graines par mètre, avec manques et doubles) ou **« Flow »** (débit — graines par seconde par rapport à un seuil d'alarme).

## Mode « Precise » {#precise-mode}

::: {.anatomy fig="one-diagram-precise"}
1. **Dose de consigne.** En gris, en graines par mètre (**s/m**). C'est le chiffre que modifient **« PLUS »** et **« MINUS »**.
2. **Dose mesurée.** En blanc — la moyenne des rangs à l'instant.
3. **Tolérance.** L'écart admis par rapport à la consigne, en pourcentage.
4. **Ligne de dose.** La consigne, tracée sur tous les rangs.
5. **Repère supérieur.** La limite haute de la tolérance, dans chaque colonne.
6. **Repère inférieur.** La limite basse de la tolérance.
7. **Colonne.** Verte — le rang sème dans la tolérance.
8. **Barre des manques.** Hachures jaunes sur le bord gauche d'une colonne. Plus elle est haute, plus il y a de manques dans ce rang.
9. **Barre des doubles.** Hachures bleues sur le bord droit d'une colonne. Plus elle est haute, plus il y a de doubles.
10. **Numéro de section.**

Un semoir monograine de huit rangs qui sème environ 5 graines par mètre pour une consigne de 4,3. Les rangs 3, 6 et 7 ont des manques ; les rangs 5 et 7 ont des doubles.
:::

## Mode « Flow » {#flow-mode}

::: {.anatomy fig="one-home-flow-at-work"}
1. **Seuil d'alarme.** En gris, en graines par seconde (**s/s**). Le niveau sous lequel une section est considérée comme perdant du débit. **« PLUS »** et **« MINUS »** le modifient.
2. **Dose mesurée.** En blanc — la moyenne des rangs à l'instant.
3. **Ligne de contrôle.** Le seuil d'alarme, tracé sur tous les rangs.
4. **Colonne au-dessus de la ligne.** Verte — le rang travaille.
5. **Partie vide d'une colonne.** Gris foncé au-dessus du vert : plus le vert monte haut, plus le débit est élevé.
6. **Numéros de section.** Les sections d'engrais font suite aux sections de semences.
7. **Diagramme d'engrais.** Le même, pour les capteurs d'engrais.
8. **Champ de dose d'engrais.** Mesure en haut, seuil d'alarme en bas, en engrais par seconde (**f/s**).

Un semoir à 24 rangs de semences et 12 rangs d'engrais, qui sème à 12 km/h. Toutes les colonnes sont au-dessus de leur ligne.
:::

## La ligne : les rangs en dessous sont hors surveillance {#the-line-rows-under-it-are-not-under-control}

La ligne est la limite d'un bouchage partiel, pas un ornement. Une colonne au-dessus de la ligne est un rang qui travaille ; une colonne qui passe en dessous est un rang qui perd du débit — bien avant de se boucher complètement.

::: {.anatomy fig="one-home-flow-not-under-control"}
1. **« NOT UNDER CONTROL »** (hors surveillance). Les rangs de ce diagramme ne sont pas surveillés.
2. **Colonnes sous la ligne.** Chaque rang débite moins que le seuil.
3. **Ligne de contrôle.** Tirée au-dessus du débit réel.
4. **Seuil d'alarme.** 18 graines par seconde — plus que ce que sème la machine.
5. **Dose mesurée.** 15 graines par seconde.

Le même semoir avec un seuil réglé trop haut. Les deux diagrammes sont sortis de la surveillance.
:::

Les rangs sous la ligne sont hors surveillance volontairement : le panneau refuse de garder un seuil réglé au-dessus de ce que la machine débite réellement. Abaissez le seuil jusqu'à ce que les colonnes soient au-dessus de la ligne, ou laissez le panneau le régler : [Régler automatiquement le seuil d'alarme](set-the-alarm-level.md).

Pour savoir si la machine sème ou non, le panneau se fonde sur la **part de rangs qui sèment** — un réglage du capteur, 20 % par défaut. En fourrière, les rangs sortent de la surveillance ; au passage suivant, ils y reviennent, avec ou sans capteur de position de travail. Le panneau l'indique par le son : **trois bips courts** quand le semis s'arrête, **un bip court** quand il reprend.

> **IMPORTANT**
>
> **Lisez les colonnes par rapport à la ligne, pas les unes par rapport aux autres.** Au-dessus de la ligne, la section travaille. Au niveau de la ligne, elle ne travaille pas — quoi que fassent les voisines.

Ce que signifient chaque couleur et chaque symbole d'une colonne, et les quatre états d'une section : [Couleurs des colonnes et états des sections](section-states.md).
