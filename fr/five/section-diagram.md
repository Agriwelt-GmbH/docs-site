---
title: Le diagramme des sections — colonnes, ligne et couleurs
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/section-diagram.html
---

# Le diagramme des sections — colonnes, ligne et couleurs

Comment lire les colonnes de l'écran d'accueil en mode « Precise » et en mode « Flow », et ce que signifie la ligne de contrôle.

Chaque colonne du diagramme est une section — un capteur de graines ou d'engrais. Sa hauteur est le débit qui traverse cette section. Le reste du tracé dépend du mode de contrôle du semis : **« Precise »** (précis — graines par mètre, avec manques et doubles) ou **« Flow »** (débit — graines par seconde par rapport à un seuil d'alarme). Le champ de dose se trouve à l'extrémité droite de chaque diagramme : le chiffre mesuré en haut, la consigne ou le seuil d'alarme en dessous, l'unité sous eux.

## Mode « Precise » {#precise-mode}

::: {.anatomy fig="five-diagram-precise"}
1. **Dose de consigne.** En gris, en graines par mètre (**s/m**). C'est le chiffre que vous modifiez au toucher.
2. **Dose mesurée.** En blanc — la moyenne des rangs à l'instant.
3. **Échelle des barres.** La part de manques ou de doubles à laquelle une barre atteint le haut — **« Scale S&D,% »** dans les réglages.
4. **Ligne de dose.** La consigne, tracée sur tous les rangs.
5. **Repère supérieur.** La limite haute de la tolérance, dans chaque colonne.
6. **Repère inférieur.** La limite basse de la tolérance.
7. **Colonne.** Verte — le rang sème dans la tolérance.
8. **Barre des manques.** Hachures jaunes sur le bord gauche d'une colonne. Plus elle est haute, plus il y a de manques dans ce rang.
9. **Barre des doubles.** Hachures bleues sur le bord droit d'une colonne. Plus elle est haute, plus il y a de doubles.
10. **Numéro de section.**

Un semoir monograine de huit rangs en train de semer ; certains rangs ont des manques, d'autres des doubles.
:::

## Mode « Flow » {#flow-mode}

::: {.anatomy fig="five-home-flow-at-work"}
1. **Seuil d'alarme.** En gris, en graines par seconde (**s/s**). Le niveau sous lequel une section est considérée comme perdant du débit.
2. **Dose mesurée.** En blanc — la moyenne des rangs à l'instant.
3. **Ligne de contrôle.** Le seuil d'alarme, tracé sur tous les rangs.
4. **Colonne au-dessus de la ligne.** Verte — le rang fonctionne.
5. **Partie vide d'une colonne.** Gris foncé au-dessus du vert : plus le vert monte haut, plus le débit est grand.
6. **Numéros de section.** Les sections d'engrais continuent après les sections de semences.
7. **Diagramme de l'engrais.** Le même, pour les capteurs d'engrais.
8. **Champ de dose de l'engrais.** Valeur mesurée en haut, seuil d'alarme en dessous, en engrais par seconde (**f/s**).

Un semoir à rangs de semences et d'engrais, en train de semer. Chaque colonne se tient au-dessus de sa ligne.
:::

Pour modifier la consigne ou le seuil d'alarme, **maintenez le doigt sur le diagramme** jusqu'à ce que son chiffre de consigne s'allume, puis glissez vers le haut ou vers le bas — un pas par glissement. Un toucher en dehors des diagrammes y met fin. Voir [Modifier la dose de consigne](set-the-target-rate.md).

## La ligne : les rangs en dessous ne sont pas sous surveillance {#the-line-rows-under-it-are-not-under-control}

La ligne est la limite d'un bouchage partiel, pas un élément décoratif. Une colonne au-dessus de la ligne est un rang qui fonctionne ; une colonne qui passe en dessous est un rang qui perd du débit — bien avant de se boucher complètement.

::: {.anatomy fig="five-home-not-under-control"}
1. **« NOT UNDER CONTROL »** (hors surveillance). Les rangs de ce diagramme ne sont pas surveillés.
2. **Colonnes sous la ligne.** Chaque rang débite moins que le seuil.
3. **Ligne de contrôle.** Tirée au-dessus du débit réel.
4. **Seuil d'alarme.** Plus haut que ce que sème la machine.
5. **Dose mesurée.** Plus basse que le seuil d'alarme.

Un semoir à céréales dont le seuil d'alarme est réglé trop haut. Les diagrammes sont sortis de la surveillance.
:::

**« NOT UNDER CONTROL »** n'ouvre aucune fenêtre d'alarme ; au niveau Operator, le panneau fait sonner l'alarme à la place. Les rangs sous la ligne sont hors surveillance volontairement : le panneau refuse de garder un seuil réglé au-dessus de ce que la machine débite réellement. Abaissez le seuil jusqu'à ce que les colonnes se tiennent au-dessus de la ligne, ou laissez le panneau le régler par un double toucher : [Régler le seuil d'alarme automatiquement](set-the-alarm-level.md).

Pour savoir si la machine sème ou non, le panneau se fonde sur la **part de rangs qui sèment** — le réglage de capteur **« Percent of sowing,% »** (pourcentage de semis), 20 % par défaut. En fourrière, les rangs sortent de la surveillance ; au passage suivant, ils y reviennent, avec ou sans capteur de position de travail. Le panneau l'annonce par le son : **trois bips courts** quand le semis s'arrête, **un bip court** quand il reprend.

> **IMPORTANT**
>
> **Lisez les colonnes par rapport à la ligne, pas les unes par rapport aux autres.** Au-dessus de la ligne, la section fonctionne. Au niveau de la ligne, elle ne fonctionne pas — quoi que fassent les voisines.

Ce que signifient toutes les couleurs et tous les symboles d'une colonne, et les quatre états d'une section : [Couleurs des colonnes et états des sections](section-states.md).
