---
title: Le tableau
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/table-screen.html
---

# Le tableau

Chaque rang en chiffres — dose, qualité, doubles, manques, population et écart — sur plusieurs pages, avec la ligne de synthèse et la remise à zéro des compteurs.

**« Table »** (tableau) montre chaque rang sous forme d'une ligne de chiffres. Utilisez-le quand une barre vous indique que quelque chose ne va pas et que vous voulez les valeurs.

::: {.anatomy fig="app-table"}
1. **La page** — ici **« Seed · k/ha »** (semences · k/ha). Touchez le titre pour passer à la page suivante.
2. **◄ ►** et le numéro de page — passent à la page précédente ou suivante.
3. **« Reset »** (remise à zéro) — remet à zéro les compteurs du tableau. Elle demande d'abord confirmation : **« Reset readings? »** (remettre les mesures à zéro ?) — **« Yes »** (oui) ou **« No »** (non).
4. **En-têtes de colonnes.** Sur cette page : numéro de rang, **« s/m »** graines par mètre, **« Q.% »** qualité, **« Db% »** doubles, **« Sk% »** manques, **« k/ha »** milliers de graines par hectare et **%** l'écart par rapport à la dose.
5. **Une cellule jaune** — la valeur dépasse la moitié de son seuil d'alarme. Ici le rang 3 a 14 % de manques.
6. **Une cellule rouge** — la valeur dépasse son seuil d'alarme. Ici le rang 5 n'a pas de débit : **-----** à la place de la dose.
7. **L'écart par rapport à la dose**, en rouge au-delà de la tolérance.
8. **Σ** — la ligne de synthèse de tous les rangs.

Un semoir monograine en mode Precision, sur le banc d'essai. L'image a été prise plus tôt dans le développement ; la barre du haut au-dessus du tableau n'est pas montrée.
:::

## Les pages {#the-pages}

Les pages disponibles dépendent du mode de contrôle de chaque groupe ([Réglages Products](settings-products.md)) :

| Mode | Pages |
| --- | --- |
| Precision | Trois pages de semences : milliers de graines par hectare, graines par mètre, compteurs ; puis une page d'engrais si le groupe d'engrais n'est pas en Precision |
| Hybrid | La page des compteurs, en graines par mètre |
| Flow | La page des compteurs, en graines par seconde |

## Signes dans la colonne de dose {#signs-in-the-rate-column}

| Signe | Signification |
| --- | --- |
| **-----** | Pas de débit dans le rang |
| **!** | Le rang est retiré de la surveillance |
| **X** | Le capteur est introuvable |
| **?** | L'appareil portant le numéro du rang n'est pas un capteur de graines |

Les rangs du jalonnage sont rayés de gris, comme sur l'écran des rangs.

## Ce que vous pouvez faire {#what-you-can-do}

| Pour faire ceci | Faites ceci |
| --- | --- |
| Ouvrir le menu d'un rang | Touchez sa ligne. [Le menu du rang](row-menu.md) |
| Voir plus de rangs | Faites défiler les lignes vers le haut ou le bas. Un balayage latéral tourne la page de l'app. |
| Remettre les compteurs à zéro | **« Reset »** → **« Yes »** |

> **VOIR AUSSI**
>
> [Statistiques](statistics-screen.md) · [L'écran des rangs](rows-screen.md)
