---
title: Le pavé numérique
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/number-pad.html
---

# Le pavé numérique

Comment saisir un nombre sur le Hectare Mini — ce que montre la fenêtre, quels boutons fonctionnent, et les pièges du champ vide et des valeurs hors plage.

Certaines valeurs peuvent être saisies en entier au lieu d'être modifiées pas à pas avec **« PLUS »** et **« MINUS »**. Dans un menu, une telle valeur est placée entre **-\[** et **\]+** ; appuyez sur **« MENU »** et le pavé numérique s'ouvre. Le pavé s'ouvre aussi de lui-même là où les pas n'ont pas de sens — pour le poids à la fin d'un [étalonnage de moteur](calibrate-motor-weight.md), pour le nombre de trous du disque d'un [moteur de doseur](motor-context-menu.md) et pour un code d'accès.

![L'élément Width, cm d'un menu et le pavé numérique qu'il ouvre.](figures/mini-keypad-width)

## Ce que montre le pavé {#what-the-pad-shows}

::: {.anatomy fig="mini-keypad-parts"}
1. **Nom du paramètre**, en bleu clair. Dans certaines fenêtres, toute la consigne, sur plusieurs lignes.
2. **Le nombre.** Il s'ouvre avec la valeur actuelle (vide si la valeur est 0) et s'allonge vers la gauche à mesure que vous tapez.
3. **Retour arrière.** Un toucher efface le dernier caractère ; un toucher maintenu efface tout le nombre.
4. **Chiffres.** Touchez-les — les chiffres se saisissent uniquement sur l'écran.
5. **Touche .−.** Place la virgule décimale. Un toucher maintenu commute le signe moins, là où la valeur peut être négative.
6. **« OK »**, en vert. Valide le nombre et ferme le pavé.

Le pavé numérique pour la largeur de travail.
:::

Une touche touchée ne s'allume pas. Vous voyez que le toucher est arrivé grâce au nombre, et vous l'entendez si le son des boutons est activé.

## Saisir un nombre {#typing-a-number}

::: steps
1. Sur un élément de menu dont la valeur est placée entre **-\[** et **\]+**, appuyez sur **« MENU »**. Le pavé s'ouvre.

2. Touchez et maintenez le retour arrière. L'ancienne valeur est effacée.

3. Touchez les chiffres. Chacun s'ajoute au nombre à droite.

4. Si la valeur a des dixièmes, touchez **.−** et saisissez les décimales.

5. Vérifiez le nombre, puis touchez **« OK »** ou appuyez sur **« MENU »**. Le pavé se ferme et le menu affiche la nouvelle valeur.
:::

**« BACK »** quitte le pavé sans rien modifier. Les autres boutons et un toucher en dehors des touches ne font rien.

> **IMPORTANT**
>
> **Le panneau ne vous avertit pas.** Un nombre hors de la plage admise est remplacé sans bruit par la limite la plus proche — pour **« Width, cm »** (largeur, cm), un 50 saisi devient 100. Un **champ vide est accepté comme 0**, et non comme la plus petite valeur admise. Si vous avez effacé le champ par erreur, appuyez sur **« BACK »** et rouvrez le pavé.

## Règles du pavé {#rules-of-the-pad}

- **La virgule ne fonctionne que là où la valeur a des dixièmes**, par exemple **« Minimum, rpm »** (minimum, tr/min) et **« Maximum, rpm »** (maximum, tr/min) d'un moteur de doseur. Pour les nombres entiers, la touche **.−** ne fait rien.
- **Une seule virgule par nombre.** Un second toucher de **.−** ne fait rien tant que vous n'avez pas effacé la première virgule.
- **Le nombre de décimales est limité** à ce que la valeur admet. Si vous en saisissez moins, le panneau ajoute des zéros : avec une décimale, 12 devient 12.0.
- **La longueur est limitée** par la largeur du champ. Lorsqu'il est plein, les chiffres suivants ne font rien.
