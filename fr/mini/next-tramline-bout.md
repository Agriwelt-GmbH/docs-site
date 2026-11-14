---
title: Le jalonnage dans la parcelle — indicateur de passage et passage suivant
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/next-tramline-bout.html
---

# Le jalonnage dans la parcelle — indicateur de passage et passage suivant

Lire l'indicateur de jalonnage, passer au passage suivant à la main ou laisser le panneau le faire d'après les traceurs ou la position de l'outil, et reconnaître un rang coupé pour le jalonnage.

Dès que **« Tramline »** (jalonnage) est réglé sur **« Yes »** (oui) ([Régler le rythme de jalonnage](tramline-rhythm.md)), l'écran d'accueil affiche l'**indicateur de jalonnage** : un symbole de traces de roues, avec à côté le passage en cours en haut et, plus petit, le nombre de passages du rythme en dessous. Avec des traceurs dans le profil, il se trouve à droite de l'indicateur de traceurs.

![L'écran d'accueil pendant un passage de coupure : l'indicateur de jalonnage et les colonnes hachurées.](figures/mini-tramline-home)

| **Symbole** | **Signification** |
| --- | --- |
| Gris | Le panneau passe de lui-même au passage suivant. |
| Jaune | Il ne le fait pas : **« Auto-switching »** (commutation automatique) est désactivé, ou la machine ne lui fournit rien qui permette de commuter. |
| Jaune, en alternance avec une croix | La machine pourrait commuter d'elle-même, mais **« Auto-switching »** est désactivé. |

Les colonnes des rangs coupés sont **hachurées en gris clair** ; le débit à l'intérieur reste affiché, hachuré : vert tant qu'il reste sous la limite, rouge au-dessus — et le panneau signale alors **« Seeding to tramline »** (semis dans le jalonnage). La limite est une part de la dose de consigne, **« Toler.sowing to tramline,% »** (tolérance de semis dans le jalonnage, %) du capteur de graines ([Réglages des capteurs](sensor-settings.md)). Au-dessus d'un capteur qui ne répond pas ou qui est hors surveillance, les hachures clignotent.

## Changer le passage à la main {#change-the-bout-by-hand}

::: steps
1. Sur l'écran d'accueil, appuyez sur **« BACK »**. Le menu des passages s'ouvre. Si un champ de dose clignote, le premier **« BACK »** ne fait que stopper le clignotement ; en mode de réglage des capteurs, **« BACK »** quitte le mode à la place.

   ![Le menu des passages.](figures/mini-tramline-bout-menu)

2. Pour régler un passage, sélectionnez **« Active bout »** (passage actif) et modifiez-le avec **« PLUS »** / **« MINUS »**, de 1 au nombre de passages. Il est pris en compte à la fermeture du menu.

3. Pour avancer d'un passage, sélectionnez **« Next bout »** (passage suivant) et appuyez sur **« MENU »**. Le menu se ferme. Cet élément n'existe que lorsque le panneau ne peut pas commuter de lui-même.

4. Là où le panneau peut commuter de lui-même, le menu propose à la place **« Auto-switching »** : **« MENU »** le bascule entre **« Yes »** et **« No »** (non), émet un bip et ferme le menu.
:::

Aucun niveau d'accès supérieur n'est nécessaire pour cela.

## Quand le panneau commute de lui-même {#when-the-panel-switches-by-itself}

Il lui faut quelque chose qui lui indique qu'un passage est terminé :

| **Machine** | **Ce qui termine un passage** |
| --- | --- |
| Avec traceurs | Un changement de position du traceur. Au moins un capteur de traceur doit être sous surveillance et répondre. |
| Sans traceurs | Le relevage du semoir hors travail. Le capteur de position de l'outil doit être sous surveillance et répondre. |
| Ni l'un ni l'autre | Rien — le menu propose **« Next bout »** à la place de **« Auto-switching »**. |

En outre, **« Auto-switching »** doit être sur **« Yes »** et le passage doit avoir réellement été parcouru : tant que la machine avance (sans capteur de vitesse : tant qu'elle sème), la commutation est bloquée. Elle est libérée lorsque le travail s'arrête ; le changement de traceur suivant — ou le relevage — fait alors avancer d'exactement un passage.

> **REMARQUE**
>
> **Si le passage n'avance pas en fourrière,** vérifiez dans cet ordre : **« Auto-switching »** est-il sur **« Yes »** ; le traceur ou le capteur de position de l'outil est-il sous surveillance ; répond-il. Le premier est un réglage, les deux autres sont la machine.

## L'actionneur lui-même {#the-actuator-itself}

Deux réglages d'un actionneur de jalonnage se trouvent dans son menu contextuel ([Réglages des capteurs](sensor-settings.md)), niveau Agronomist :

| **Élément** | **Valeurs** |
| --- | --- |
| **« Cutoff position »** (position de coupure) | La position dans laquelle il coupe : **« Pulled out »** (sorti ; réglage d'usine) ou **« Pulled in »** (rentré). |
| **« Switch »** (commutation) | Quand il se déplace : **« when seeding »** (en semant ; réglage d'usine) ou **« always »** (toujours). |

Deux alarmes concernent l'actionneur : **« Illegal state »** (état illicite) — il signale les deux positions de fin de course à la fois ; **« Stall »** (calage) — il n'atteint pas la position demandée. Voir [Alarmes de jalonnage](alarms-tramline.md).
