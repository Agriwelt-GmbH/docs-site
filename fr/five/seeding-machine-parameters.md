---
title: Paramètres du semoir
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/seeding-machine-parameters.html
---

# Paramètres du semoir

La largeur de travail, les modes de semis et de fertilisation, le jalonnage, la correspondance des sections avec les actionneurs et les moteurs, et les deux étalonnages qui exigent que la machine roule.

**« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir). L'élément exige le niveau **« Agronomist »** ([Activer le niveau Agronomist](enable-agronomist-level.md)) et il est masqué sur une machine qui n'a ni capteur de vitesse ni actionneur de jalonnage. Les éléments qu'il contient dépendent du profil.

![Le menu Seeding machine parameters d'un semoir monograine : la largeur entre crochets, les deux modes, les deux étalonnages.](figures/five-param-edit)

| **Élément** | **Valeurs** |
| --- | --- |
| **« Width, cm »** | 100 … 2500 ; 560 par défaut. Pavé numérique. |
| **« Mode of seeding »** | **« Flow »** / **« Hybrid »** / **« Precise »** ; **« Flow »** par défaut. |
| **« Mode of fertilizers »** | **« Flow »** / **« Hybrid »** / **« Precise »**. |
| **« Mode of liq.fert. »** | **« Flow »** / **« By area »**. |
| **« Tramline »** | Sous-menu. |
| **« Relation of sensors to actuators »** | Ouvre l'écran de correspondance. |
| **« Speed calibration »** | Lance l'étalonnage de la vitesse. |
| **« Dispenser calibration »** | **« ALL »**, ou le numéro d'un doseur ; lance l'étalonnage de la rotation. |
| **« Reset to defaults »** | Remet la largeur et les modes aux valeurs d'usine. Niveau **Service** uniquement. |

## Width, cm — largeur de travail {#width-cm}

La largeur de travail de l'outil. La surface travaillée en est calculée : il faut donc la saisir. Touchez l'élément deux fois, ou glissez dessus : le pavé numérique s'ouvre. Saisissez la largeur et touchez **« OK »** ; un toucher en dehors du pavé conserve l'ancienne valeur. L'élément est masqué sans capteur de vitesse.

Si les statistiques contiennent déjà du travail, le panneau demande d'abord de les effacer — la surface de l'ancienne largeur et celle de la nouvelle ne peuvent pas être additionnées.

## Modes de semis et d'engrais — Mode of seeding, Mode of fertilizers {#mode-of-seeding-mode-of-fertilizers}

| **Mode** | **Unité** | **Pour** |
| --- | --- | --- |
| **« Flow »** (débit) | graines par seconde | semoirs à céréales |
| **« Hybrid »** (hybride) | graines par mètre | semoirs à céréales |
| **« Precise »** (précis) | graines par mètre, avec comptage des manques et des doubles | semoirs monograines |

L'engrais ne peut être réglé sur **« Precise »** que si le semis est en **« Precise »**. Sur une machine à deux groupes de capteurs de graines, les deux éléments s'appellent **« Mode of seeding gr.A »** et **« Mode of seeding gr.B »** ; le groupe B ne peut être en **« Precise »** que si le groupe A l'est, donc réglez le groupe B sur **« Flow »** ou **« Hybrid »** avant de sortir le groupe A du mode **« Precise »**.

> **IMPORTANT**
>
> **Passer de « Precise » aux deux autres modes, ou l'inverse, exige une remise à zéro des statistiques** si une parcelle a du travail enregistré. Le panneau pose d'abord la question ; **« No »** conserve l'ancien mode.

## Mode de l'engrais liquide {#liquid-fertilizer-mode}

**« Flow »** (litres par minute) ou **« By area »** (litres par hectare). **Affiché seulement quand aucun contrôleur de pompe d'engrais liquide ne figure dans le profil** — avec un contrôleur, le panneau travaille à l'hectare.

## Correspondance des capteurs et des actionneurs — Relation of sensors to actuators {#relation-of-sensors-to-actuators}

Quels capteurs de section appartiennent à quel actionneur de jalonnage ou à quel moteur de doseur. Quand un actionneur coupe ses sections, leurs capteurs passent en surveillance de jalonnage. L'élément n'est affiché que s'il y a quelque chose à relier : des actionneurs de jalonnage, ou des moteurs de doseur qui ne correspondent pas un à un aux capteurs de section.

![L'écran de correspondance : une ligne pour les actionneurs, une pour les moteurs.](figures/five-mapping)

Une correspondance est une **plage** de sections, de **« Diapason start »** (début de plage) à **« Diapason end »** (fin de plage) — des numéros égaux désignent une seule section. Jusqu'à **quatre plages** peuvent être rattachées à un actionneur. Sur une machine à moteurs de doseur, l'écran comporte aussi **« Motors to sensors mapping »** (correspondance des moteurs et des capteurs).

Sur l'écran, un glissement vers le haut ou vers le bas change de ligne, un glissement vers la droite ou vers la gauche se déplace le long d'une ligne, et un **toucher à deux doigts** ouvre le menu de la cellule sélectionnée — pour ajouter une plage ou **« Remove diapason »** (supprimer la plage). **Maintenez le doigt** n'importe où sur l'écran pour appliquer la correspondance.

## Jalonnage — Tramline {#tramline}

Un sous-menu de deux éléments : **« Tramline »** (**« No »** / **« Yes »**) et **« Tramline rhythm settings »** (réglages du rythme de jalonnage). Affiché seulement sur une machine capable de faire des jalonnages. Régler un rythme : [Régler le rythme de jalonnage](tramline-rhythm.md).

## Étalonnage de la vitesse et des doseurs — Speed calibration, Dispenser calibration {#speed-calibration-and-dispenser-calibration}

Les deux étalonnages qui exigent que la machine roule. Tous deux sont masqués sans capteur de vitesse. Sélectionnez **« Dispenser calibration »** et glissez vers la droite ou vers la gauche pour choisir le doseur — ou **« ALL »** pour tous à la fois — puis touchez de nouveau l'élément pour lancer.

- [Étalonner le capteur de vitesse](calibrate-speed.md)
- [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md)
