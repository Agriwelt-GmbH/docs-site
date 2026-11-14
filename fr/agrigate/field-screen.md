---
title: L'image du champ
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/field-screen.html
---

# L'image du champ

Le semoir dessiné en perspective, chaque rang peignant le sol derrière lui de la couleur de sa barre — les derniers mètres de chaque rang d'un coup d'œil.

**« Field »** (champ) dessine le semoir comme vous le verriez depuis la cabine, posé sur un champ qui défile sous lui. Chaque rang de semis est une colonne sur la barre du semoir — la même barre que sur **« Rows »** (rangs), avec sa hauteur et sa couleur. Derrière chaque rang, le sol est peint de la couleur que le rang affiche, et la bande peinte file vers l'horizon à la vitesse de la machine. Vous voyez ainsi d'un coup d'œil les derniers mètres de chaque rang : un rang qui s'est arrêté laisse un trou qui s'éloigne du semoir.

![La page « Field » vue de l'arrière, avec les vignettes dessous.](figures/app-field)

L'image est dessinée d'après ce que montrent les rangs et la vitesse à cet instant. Ce n'est pas une carte : rien n'est enregistré, et il n'y a pas de trace GNSS.

## Ce que vous pouvez faire {#what-you-can-do}

| Pour faire ceci | Faites ceci |
| --- | --- |
| Regarder d'un autre côté | Touchez l'image. Elle tourne sur trois vues : de dessus, de l'arrière, et de l'avant en regardant en arrière (**« Looking back »** (vue vers l'arrière) y est écrit). L'iPad garde la dernière vue. |
| Voir les rangs d'engrais | Avec des capteurs d'engrais dans le profil, basculez entre **« Seed »** (semences) et **« Fertilizer »** (engrais) en haut. Un point rouge sur l'autre choix vous indique qu'un rang de ce groupe est rouge. |
| Utiliser les vignettes | La bande sous l'image est la même que sous **« Rows »**. [Les vignettes du bas](bottom-tiles.md) |

> **REMARQUE**
>
> **Sans vitesse, le champ défile quand même.** Une machine en Flow n'a pas besoin de vitesse ; l'image défile alors à allure fixe tant que les graines s'écoulent. La distance dans l'image n'est réelle que lorsqu'il y a une vitesse.

Les alarmes ne sont pas sur cette page : la fenêtre d'alarme s'ouvre par-dessus, comme sur toutes les pages. [La fenêtre d'alarme](alarm-window.md)
