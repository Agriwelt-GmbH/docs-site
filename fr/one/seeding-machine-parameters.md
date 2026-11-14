---
title: Paramètres du semoir
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/seeding-machine-parameters.html
---

# Paramètres du semoir

La largeur de travail, les modes de semis et de fertilisation, le jalonnage, l'affectation des tronçons aux actionneurs et les deux étalonnages qui exigent que la machine roule.

**« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir). La rubrique exige le niveau **« Agronomist »** (agronome) ([Activer le niveau Agronomist](enable-agronomist-level.md)) et reste masquée sur une machine qui n'a ni capteur de vitesse ni actionneur de jalonnage. Son contenu dépend du profil.

::: {.anatomy fig="menu-seeding"}
1. **« Width, cm »** (largeur) — la largeur de travail. La valeur sélectionnée se tient entre **–[** et **]+**.
2. **« Mode of seeding »** (mode de semis) — **« Flow »** (débit), **« Hybrid »** (hybride) ou **« Precise »** (précis).
3. **« Tramline »** (jalonnage) — le sous-menu de jalonnage.
4. **« Speed calibration »** (étalonnage de la vitesse) — lance l'étalonnage de la vitesse.
5. **« Reset to defaults »** (valeurs par défaut) — valeurs d'usine de ce menu. Niveau **Service** uniquement.

Le menu d'un semoir monograine de précision équipé d'un capteur de vitesse, sans engrais, sans doseurs ni engrais liquide.
:::

## « Width, cm » {#width-cm}

La largeur de travail de l'outil. La surface travaillée en est déduite : elle doit donc être saisie. Appuyez sur **« MENU »** sur la rubrique : le pavé numérique s'ouvre. Tapez les chiffres — la touche en haut à droite efface le dernier — et touchez **« OK »** pour valider, ou appuyez sur **« BACK »** pour conserver l'ancienne valeur.

![Le pavé numérique pour « Width, cm ».](figures/menu-keypad)

## « Mode of seeding », « Mode of fertilizers » {#mode-of-seeding-mode-of-fertilizers}

Trois modes dans chaque cas (**« Mode of fertilizers »** : mode d'engrais) :

| Mode | Unité | Pour |
| --- | --- | --- |
| **« Flow »** | graines par seconde | semoirs en ligne |
| **« Hybrid »** | graines par mètre | semoirs en ligne — recommandé |
| **« Precise »** | graines par mètre, manques et doubles comptés | semoirs monograine de précision |

> **IMPORTANT**
>
> **Le passage entre « Precise » et l'un des deux autres modes exige une remise à zéro des statistiques** si un champ contient déjà du travail enregistré.

## « Mode of liquid fertilizer » {#mode-of-liquid-fertilizer}

**« Flow »** (litres par minute) ou **« By area »** (à la surface : litres par hectare). **Affiché seulement quand aucun contrôleur de pompe d'engrais liquide ne figure dans le profil** — avec un contrôleur, le boîtier choisit lui-même le mode.

## « Actuators to sensors mapping » {#actuators-to-sensors-mapping}

Cette rubrique (affectation des capteurs aux actionneurs) indique quels capteurs de tronçon appartiennent à quel actionneur de jalonnage ou à quel moteur électrique. Quand cet actionneur ferme ses tronçons, leurs capteurs passent à la surveillance du jalonnage.

![L'écran d'affectation : une ligne pour les actionneurs, une pour les moteurs.](figures/menu-mapping)

Une affectation est une **plage** : **« Range start »** (début de plage) et **« Range end »** (fin de plage) — des nombres égaux désignent un seul tronçon. Jusqu'à **quatre plages** peuvent être rattachées à un actionneur. Sur une machine à moteurs de dosage, l'écran propose aussi **« Motors to sensors mapping »** (affectation des capteurs aux moteurs).

## « Tramline » {#tramline}

Les rythmes de jalonnage, dans un sous-menu à part de deux rubriques : **« Tramline »** (**« No »** (non) / **« Yes »** (oui)) et **« Tramline rhythm settings »** (réglages du rythme de jalonnage).

![Le sous-menu de jalonnage.](figures/menu-tramline)

Réglage d'un rythme : [Rythme de jalonnage](tramline-rhythm.md).

## « Speed calibration » et « Dispenser calibration » {#speed-calibration-and-dispenser-calibration}

Les deux étalonnages qui exigent que la machine roule. **« Dispenser calibration »** (étalonnage du doseur) porte un nombre à côté : le doseur à étalonner, ou **0** pour les étalonner tous à la fois.

- [Étalonner le capteur de vitesse](calibrate-speed.md)
- [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md)
