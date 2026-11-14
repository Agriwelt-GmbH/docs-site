---
title: Régler le rythme de jalonnage
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/tramline-rhythm.html
---

# Régler le rythme de jalonnage

Ce qu'est un rythme de jalonnage, calculé pour votre semoir et votre pulvérisateur, comment le régler sur le panneau au toucher, et comment le panneau compte les passages.

Un **jalonnage** est la voie dans laquelle le pulvérisateur passera plus tard. Vous la créez maintenant, pendant le semis, en coupant une ou deux sections sur certains passages, de sorte que rien ne soit semé là où passeront les roues du pulvérisateur. Quels passages, cela dépend de la largeur du semoir par rapport à celle du pulvérisateur. Ce motif, qui se répète sur le champ, est le **rythme**.

## Comment fonctionne un rythme — un exemple {#how-a-rhythm-works-an-example}

Un semoir de 6 mètres et un pulvérisateur de 18 mètres : un passage sur trois doit porter la voie. Le rythme comporte trois passages, et l'actionneur 1 coupe ses sections sur l'un d'eux.

| **Passage** | **Actionneur 1** | **Ce qui est semé** |
| --- | --- | --- |
| 1 | coupe ses sections | Tous les rangs sauf les rangs du jalonnage — la voie est faite. |
| 2 | ouvert | Tous les rangs. |
| 3 | ouvert | Tous les rangs. |
| 1 de nouveau | coupe | La voie suivante, 18 m plus loin. |

> **IMPORTANT**
>
> **Si le rythme est faux, le champ semble parfait jusqu'à l'arrivée du pulvérisateur, qui n'a alors nulle part où passer.** Vérifiez le nombre de passages par rapport au pulvérisateur, pas par rapport au semoir.

## Ce que le panneau permet {#what-the-panel-allows}

| | |
| --- | --- |
| **Rythmes mémorisés** | **Trois.** Un seul est actif à la fois. |
| **Actionneurs dans un rythme** | **Quatre.** Sur une machine qui fait le jalonnage en arrêtant des moteurs de doseur, ce sont les moteurs qui prennent leur place. |
| **Passages de coupure par actionneur** | **Quatre** passages différents du même rythme. |
| **Passages dans un rythme** | De 1 à 50. |

## Réglage {#setting-it-up}

Les éléments de jalonnage se trouvent sous **« Seeding machine parameters »** (paramètres du semoir), qui exige le niveau **Agronomist** (agronome) : [Activer le niveau Agronomist](enable-agronomist-level.md). L'élément **« Tramline »** (jalonnage) n'est affiché que sur une machine capable de faire un jalonnage.

::: steps
1. Sur l'écran d'accueil, touchez avec **deux doigts**. Touchez **« Settings »** (réglages), et touchez-le de nouveau.

2. Touchez **« Seeding machine parameters »**, et touchez-le de nouveau.

3. Touchez **« Tramline »**, et touchez-le de nouveau.

   ![Le menu Tramline.](figures/five-menu-tramline)

4. Touchez **« Tramline »** et glissez vers la droite jusqu'à **« Yes »** (oui). Touchez ensuite deux fois **« Tramline rhythm settings »** (réglages du rythme de jalonnage). Le formulaire du rythme s'ouvre avec le rythme 1 sélectionné.

5. Sur **« Rhythm »** (rythme), glissez vers la droite ou vers la gauche pour choisir le numéro du rythme. Touchez avec **deux doigts** et choisissez **« Select »** (sélectionner). Le mot **« Active »** (actif) apparaît à côté du numéro — sans lui, le rythme est mémorisé mais n'est pas utilisé.

6. Glissez vers le bas jusqu'à **« Bouts »** (passages), touchez avec deux doigts et réglez le nombre de passages du rythme.

7. Glissez jusqu'à la cellule encadrée sous le titre d'activation et touchez avec deux doigts. Choisissez le numéro de l'actionneur, puis le **passage** sur lequel il doit couper ses sections.

8. Si le motif l'exige, ajoutez d'autres passages au même actionneur — jusqu'à quatre — avec la cellule encadrée en fin de ligne, ou un autre actionneur avec la cellule de la ligne vide en dessous.

9. Touchez avec **trois doigts**. Le rythme est enregistré et le menu Tramline revient. Touchez en dehors des menus jusqu'au retour de l'écran d'accueil. L'indicateur de jalonnage montre le passage en cours et le nombre de passages.
:::

Un maintien du doigt n'importe où sur le formulaire enregistre le rythme sans le quitter. Revenez au niveau **Operator** avant de travailler — au-dessus, aucune alarme n'est affichée.

## Le formulaire du rythme {#the-rhythm-form}

::: {.anatomy fig="five-tramline-rhythm-form"}
1. **« Rhythm »**. Le numéro du rythme ; un glissement vers la droite ou vers la gauche parcourt les trois.
2. **« Active »**. Ce rythme est celui qui est utilisé.
3. **« Bouts »**. Le nombre de passages du rythme.
4. **Titre d'activation.** **« Tramline actuators activation »** (activation des actionneurs de jalonnage) sur une machine qui fait le jalonnage avec des actionneurs ; **« Tramline motors activation »** (activation des moteurs de jalonnage) sur une machine qui arrête des moteurs de doseur. Une machine qui a les deux affiche les deux titres.
5. **Cellule encadrée.** Ajoute un actionneur (ou un moteur) et son passage de coupure.

Un nouveau rythme : un passage, rien n'est encore coupé.
:::

Dans le formulaire, un glissement vers le haut ou vers le bas passe d'une ligne à l'autre, un glissement vers la droite ou vers la gauche se déplace le long d'une ligne, et un **toucher à deux doigts** ouvre la cellule sélectionnée. **« Reset rhythm settings »** (réinitialiser les réglages du rythme), dans le menu de la ligne **« Rhythm »**, remet le rythme sélectionné à ses valeurs par défaut.

## Comment le passage change {#how-the-bout-changes}

Le panneau compte les passages lui-même. Quelque chose sur la machine doit lui dire qu'une passe est terminée :

| **Sur la machine** | **Ce qui termine un passage** |
| --- | --- |
| Capteurs de traceurs dans le profil | Au moins un capteur de traceur **sous surveillance** et qui **répond**. Le changement de position du traceur termine le passage. |
| Pas de traceurs | Le **capteur de position de travail**, sous surveillance et qui répond. Relever la machine hors du travail termine le passage. |
| Ni l'un ni l'autre | Le passage ne change pas. |

Quand le passage ne peut pas changer de lui-même, l'icône de jalonnage sur l'écran d'accueil est **jaune** ([Passage de jalonnage](indicators.md#tramline-bout)). Vérifiez l'indicateur sur l'écran d'accueil avant de commencer une passe.
