---
title: Passer au passage de jalonnage suivant
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/next-tramline-bout.html
---

# Passer au passage de jalonnage suivant

Comment le passage change tout seul en fourrière, ce qu'il lui faut pour cela, et comment le changer ou le corriger à la main.

L'indicateur de jalonnage de l'écran d'accueil montre le passage en cours au-dessus et le nombre de passages du rythme en dessous. Le passage peut changer tout seul à chaque demi-tour, ou vous le changez à la main — dans les deux cas depuis le **menu du passage**, ouvert par un appui court sur **« BACK »** sur l'écran d'accueil.

![Le menu du passage quand le passage peut changer tout seul : Auto-switching et Active bout.](figures/one-tramline-bout-menu)

## Changement automatique {#automatic-change}

Le panneau ne peut changer le passage tout seul que si quelque chose lui indique qu'un passage est terminé :

| **Sur la machine** | **Ce qui termine un passage** |
| --- | --- |
| Capteurs de traceurs dans le profil | Au moins un capteur de traceur **sous surveillance** et qui **répond**. Le changement de position du traceur termine le passage. |
| Pas de traceurs | Le **capteur de position de travail**, sous surveillance et qui répond. Relever la machine hors du travail termine le passage. |
| Ni l'un ni l'autre | Le changement automatique est impossible. Changez le passage à la main. |

De plus, **« Auto-switching »** (changement automatique) doit être sur **« Yes »** (oui), et la machine doit avoir réellement appliqué puis s'être arrêtée. Le tout ensemble — sinon le passage reste où il est. Quand le passage ne peut pas changer tout seul, l'icône de jalonnage de l'écran d'accueil est **jaune** ([Passage de jalonnage](indicators.md#tramline-bout)).

::: steps
1. Sur l'écran d'accueil, appuyez sur **« BACK »**. Le menu du passage s'ouvre.

2. Sur **« Auto-switching »**, choisissez **« Yes »** avec **« PLUS »**.

3. Appuyez sur **« BACK »** pour fermer le menu.
:::

> **REMARQUE**
>
> **Si le passage n'avance pas en fourrière,** vérifiez dans cet ordre : **« Auto-switching »** est-il activé ; le capteur de traceur ou de position est-il sous surveillance ; répond-il. Le premier est un réglage, les deux autres sont la machine.

## À la main {#by-hand}

Ce que propose le menu du passage dépend de la machine :

- **Sans** capteur capable de terminer un passage, il propose **« Next bout »** (passage suivant). Sélectionnez-le et appuyez sur **« MENU »** : le passage avance d'un cran et le menu se ferme. Faites-le à chaque demi-tour.
- **Avec** un tel capteur, il propose **« Auto-switching »** à la place. Pour corriger le compte — après un demi-tour manqué, par exemple — réglez **« Active bout »** (passage actif) avec **« PLUS »** / **« MINUS »** ; le nouveau passage prend effet à la fermeture du menu.

**« Active bout »** figure dans le menu sur toutes les machines. Vérifiez l'indicateur de l'écran d'accueil avant de commencer un passage.

Le rythme lui-même se règle dans [Régler le rythme de jalonnage](tramline-rhythm.md).
