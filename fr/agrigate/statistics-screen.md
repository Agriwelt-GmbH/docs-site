---
title: Statistiques
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/statistics-screen.html
---

# Statistiques

Les statistiques de cinq champs — distance, surface, temps, surface semée et non semée, qualité, population — et comment sélectionner un champ ou remettre ses statistiques à zéro.

**« Statistics »** (statistiques) conserve le relevé du travail dans cinq champs. L'un d'eux est actif : tout ce que la machine sème y est compté.

::: {.anatomy fig="app-statistics"}
1. **Le champ affiché.** **(A)** repère le champ actif.
2. **◄ ►** et **1/5** — consultez les quatre autres champs.
3. **Le menu …** — **« Select field »** (sélectionner le champ) et **« Reset statistics »** (remettre les statistiques à zéro). [Plus bas](#select-a-field-or-reset-it)
4. **« Field work »** (travail du champ) — **« Distance »**, **« Area »** (surface), **« Operating time »** (temps de travail) et la **« Ground speed »** (vitesse d'avancement) moyenne.
5. Quand le travail sur ce champ a **« Started »** (commencé) et **« Ended »** (terminé).
6. **« Control »** (contrôle) — **« Without alarm control »** (sans contrôle d'alarme) et **« Out of speed range »** (hors plage de vitesse). Dans cette version, les deux affichent un tiret.
7. **La barre de qualité** de **« Seeding »** (semis) : **« Quality »** (qualité), **« Doubles »** (doubles), **« Skips »** (manques) et **« Not sown »** (non semé) en proportions d'une même barre (Precision).
8. **« Seeds sown »** (graines semées) (en milliers), **« Population »** et **« Rate »** (dose) : la valeur réelle en gros, la valeur de consigne dessous, et la valeur réelle en pourcentage de la consigne — en rouge au-delà de la tolérance.
9. **« Sown »** (semé), **« Not sown »**, **« Unknown »** (inconnu) — en hectares quand il y a une vitesse ; en proportions du temps sans vitesse sinon.
10. **Les rangs un par un** — les mêmes chiffres pour chaque capteur (**« Seed sensors »** (capteurs de graines), puis les capteurs d'engrais).

Les statistiques d'un champ sur le banc d'essai, après de nombreuses heures de travail simulé.
:::

Ce que montre le bloc **« Seeding »** dépend du mode de contrôle du groupe. En Precision, vous obtenez la barre de qualité, les graines semées, la population et la dose. En Flow et Hybrid, vous obtenez les trois surfaces **« Sown »**, **« Not sown »** et **« Unknown »**. Avec deux groupes en Precision, un sélecteur de page dans le titre du bloc affiche l'autre groupe.

## Sélectionner un champ ou le remettre à zéro {#select-a-field-or-reset-it}

::: steps
1. Avec **◄ ►**, amenez à l'écran le champ voulu.

2. Touchez **…** à droite du titre.

3. Choisissez :
   - **« Select field »** — ce champ devient le champ actif. S'il contient déjà des statistiques, l'app vous prévient d'abord : **« Data must be erased to select this field! »** (les données doivent être effacées pour sélectionner ce champ !) : **« Yes »** (oui) le rend actif avec ses compteurs à zéro.
   - **« Reset statistics »** — l'app demande **« Are you sure? »** (êtes-vous sûr ?) ; **« Yes »** repart de zéro pour les statistiques de ce champ.
:::

**« Select field »** n'est proposé que lorsque le champ affiché n'est pas le champ actif.

> **IMPORTANT**
>
> **Une remise à zéro est irréversible.** Les statistiques du champ sont perdues. Modifier la largeur de travail alors que le champ actif contient des statistiques les remet aussi à zéro — l'app demande d'abord confirmation. Voir [Régler le profil de machine](machine-profile.md).

> **VOIR AUSSI**
>
> [Tableau](table-screen.md) · [Les vignettes du bas](bottom-tiles.md)
