---
title: Paramètres du semoir
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/seeding-machine-parameters.html
---

# Paramètres du semoir

Le sous-menu avec la largeur de travail et les modes de régulation du Hectare Mini, l'effet d'une modification sur les statistiques, et le point de départ des deux étalonnages du menu.

**« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir), niveau **« Agronomist »** (agronome) ([Activer le niveau Agronomist](enable-agronomist-level.md)). Réglez-les en premier sur une machine neuve — toutes les valeurs de surface et de dose en sont déduites.

::: {.anatomy fig="menu-machine-params"}
1. **« Width, cm »** (largeur, cm) — la rubrique sélectionnée.
2. **Sa valeur entre -[ et ]+** : **« PLUS »** / **« MINUS »** la font évoluer par pas, **« MENU »** ouvre le clavier numérique.
3. **« Mode of seeding »** (mode de semis).
4. **Sa valeur**, ici **« Flow »** (débit).
5. **« Speed calibration »** (étalonnage de la vitesse) — lance l'étalonnage du capteur de vitesse.

Une machine avec capteurs de graines seulement, un capteur de vitesse et aucun capteur de doseur.
:::

| **Rubrique** | **Fonction** | **Plage · valeur par défaut** |
| --- | --- | --- |
| **« Width, cm »** | La largeur de travail de la machine. La surface, et chaque dose à l'hectare, en sont déduites. **Saisissez-la toujours.** | 100 … 2500 cm · 560 |
| **« Mode of seeding »** | Façon dont les capteurs de graines sont régulés et affichés : **« Flow »** — graines par seconde, pour les semoirs en lignes ; **« Hybrid »** — graines par mètre, possible sur les semoirs en lignes mais inutilisé en pratique ; **« Precise »** — graines par mètre avec manques et doubles, pour les semoirs monograines. | · **« Flow »** |
| **« Mode of fertilizers »** | Les mêmes trois modes pour les capteurs d'engrais. Affichée uniquement avec des capteurs d'engrais dans le profil. | · **« Flow »** |
| **« Mode of liq.fert. »** | **« Flow »** ou **« By area »** (à la surface) pour les capteurs d'engrais liquide. Affichée uniquement avec de tels capteurs et sans contrôleur de pompe. | · **« By area »** |
| **« Tramline »** | Les réglages du jalonnage — [Régler le rythme de jalonnage](tramline-rhythm.md). Affichée uniquement si la machine peut tracer des jalonnages. | sous-menu |
| **« Relation of sensors to actuators »** | Les lignes de semis que chaque actionneur ou moteur de jalonnage coupe. Affichée uniquement quand ce n'est pas un pour un. | écran |
| **« Speed calibration »** | [Étalonner le capteur de vitesse](calibrate-speed.md). | — |
| **« Dispenser calibration »** | [Étalonner la rotation du doseur](calibrate-dispenser-rotation.md) pour **« ALL »** (tous) les doseurs ou pour un seul, par son numéro. Affichée uniquement avec des capteurs de doseur dans le profil. | **« ALL »**, 1 … nombre de doseurs |
| **« Reset to defaults »** | Niveau **« Service »**. Remet la largeur et les modes à leurs valeurs par défaut. | — |

Sans capteur de vitesse dans le profil, les trois rubriques de mode et **« Speed calibration »** sont masquées : le boîtier ne peut fonctionner qu'en mode **« Flow »**.

La dose de consigne se règle sur l'écran d'accueil, pas ici — [Modifier la dose de consigne](set-the-target-rate.md). Sa plage suit le mode : **« Flow »** de 1 à 1 500 graines par seconde, **« Hybrid »** de 1 à 200 graines par mètre, **« Precise »** de 0,5 à 50,0 graines par mètre.

## Effet d'une modification sur les statistiques {#what-a-change-does-to-the-statistics}

> **IMPORTANT**
>
> **Une nouvelle largeur ou un changement de mode vers ou depuis « Precise » efface les statistiques de toutes les parcelles.** Si une parcelle contient des données, le boîtier demande d'abord confirmation — pour la largeur **« Need to erase statistics! »** (les statistiques doivent être effacées !) avec **« PLUS »** pour **« Yes »** (oui), pour le mode un message indiquant que les statistiques doivent être effacées, avec **« MENU »** pour supprimer et **« BACK »** pour annuler. **« No »** (non) ou **« BACK »** conserve l'ancienne valeur. Notez les valeurs dont vous avez besoin avant de modifier.

Un passage entre **« Flow »** et **« Hybrid »** conserve les statistiques.

Les deux modes dépendent l'un de l'autre : les capteurs d'engrais ne peuvent fonctionner en mode **« Precise »** que si les capteurs de graines y fonctionnent. Le boîtier refuse les autres combinaisons avec un message qui nomme la rubrique à modifier d'abord. Quand les deux fonctionnent en mode **« Precise »**, les capteurs d'engrais deviennent un second groupe de semis, et les rubriques s'appellent **« Mode of seeding gr.A »** et **« Mode of seeding gr.B »**.

Si un produit dosé au poids est ensuite revendiqué à la fois par un capteur de doseur et par un moteur, le boîtier désactive **« Weight control »** (régulation au poids) des capteurs de doseur et l'indique dans une fenêtre **« WARNING! »** (avertissement !).
