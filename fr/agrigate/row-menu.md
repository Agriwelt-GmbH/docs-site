---
title: Le menu du rang
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/row-menu.html
---

# Le menu du rang

Tout sur un rang — son état en toutes lettres, ses mesures, son retrait de la surveillance, le remplacement de son capteur et la coupure de son application de produit.

Le menu du rang s'ouvre depuis l'écran des rangs — appuyez sur une barre et maintenez, glissez jusqu'au rang puis levez le doigt, ou touchez une bande puis un rang — et depuis le tableau, en touchant une ligne. Son titre est **« Row »** (rang) suivi du numéro, ou **« Fertilizer · row »** (engrais · rang) pour un rang d'engrais. **« Done »** (terminé) le ferme.

## Ce que vous voyez {#what-you-see}

| Élément | Ce qu'il montre |
| --- | --- |
| La première ligne | L'état du rang en toutes lettres et en couleur — par exemple **« Normal »**, **« Below the line »** (sous la ligne), **« Not seeding »** (ne sème pas), **« Silent »** (muet), **« Clogged »** (bouché) — et sa dose. |
| **« Precision seeding »** (semis de précision) (Precision et Hybrid uniquement) | **« Seeds per metre »** (graines par mètre), **« Thousand seeds/ha »** (milliers de graines/ha), **« Deviation from rate »** (écart par rapport à la dose), et en Precision **« Quality, % »** (qualité, %), **« Doubles, % »** (doubles, %), **« Skips, % »** (manques, %). **« All rows as a table »** (tous les rangs en tableau) ouvre le tableau. |
| **« Sensor settings »** (réglages du capteur) | **« Fraction »** — la même valeur pour tous les rangs du groupe (**« For every seed row. »** (pour chaque rang de semis)). Voir [Réglages Products](settings-products.md). |
| **« Information »** | **« Rate »** (dose) en graines par seconde, **« Control line »** (ligne de contrôle), **« Seeds counted »** (graines comptées), **« Time between seeds »** (temps entre graines), **« Sensor »** (capteur) — ce que signale le capteur — et **« Last answered »** (dernière réponse). |

## Ce que vous pouvez faire {#what-you-can-do}

| Pour faire ceci | Faites ceci | Ce qui se passe |
| --- | --- | --- |
| Cesser de surveiller un rang dont vous connaissez le défaut | **« Disable control »** (désactiver le contrôle) | Le rang reste à l'écran en blanc avec un « ! », ne déclenche aucune alarme et ne compte pas dans la proportion de rangs semant. |
| Le surveiller de nouveau | **« Enable control »** (activer le contrôle) | Le rang compte de nouveau dans le contrôle et les alarmes. |
| Mettre un nouveau capteur sur ce rang | **« Replace the sensor »** (remplacer le capteur) | La fiche de numérotation s'ouvre avec le numéro de ce rang déjà réglé. Voir [Numéroter les capteurs](sensor-numbering.md). |
| Couper le produit sur ce rang | **« Product application »** (application du produit) coupée | Le rang est traité comme un rang de jalonnage : pas de **« Not seeding »**, exclu de la proportion de rangs semant, et **« Seeding in tramline »** (semis dans le jalonnage) s'il sème encore. |

> **IMPORTANT**
>
> **Un rang retiré de la surveillance est aveugle, pas silencieux.** Rien à son sujet n'est surveillé — pas même un capteur perdu — tant que vous ne le remettez pas avec **« Enable control »**.

**« Replace the sensor »** n'est pas disponible tant que la liaison avec la passerelle est coupée.

> **VOIR AUSSI**
>
> [L'écran des rangs](rows-screen.md) · [Couleurs des barres](bar-colours.md) · [Tableau](table-screen.md)
