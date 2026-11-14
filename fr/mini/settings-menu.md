---
title: Le menu Settings
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/settings-menu.html
---

# Le menu Settings

Toutes les rubriques du menu Settings du Hectare Mini — son, langue, réglages des schémas, date et heure, délai d'alarme, écart de dose de produit, paramètres de la machine, utilisateur — avec leur niveau d'accès, leur plage et leur valeur par défaut.

**« MENU »** sur l'écran d'accueil → **« Settings »** (réglages). Le menu regroupe les réglages généraux du boîtier. Les rubriques que vous voyez dépendent du niveau d'accès ([Niveaux d'accès](access-levels.md)) et de la machine du profil.

::: {.anatomy fig="menu-settings"}
1. **« Volume »** — la rubrique sélectionnée.
2. **Sa valeur entre − et +.** **« PLUS »** et **« MINUS »** la modifient immédiatement.
3. **« Language »** (langue).
4. **« Buttons sound »** (son des touches).
5. **« Change Date&Time »** (modifier la date et l'heure) — la pointe de flèche ouvre un sous-menu.
6. **« Alarm delay »** (délai d'alarme), en secondes.
7. **« Seeding machine parameters »** (paramètres du semoir) — un sous-menu, à partir du niveau Agronomist.
8. **Barre de défilement.** **« User »** (utilisateur) se trouve plus bas.

Le menu **« Settings »** au niveau Agronomist.
:::

Le boîtier enregistre lui-même chaque modification environ une seconde et demie après la dernière modification et le dernier appui sur une touche.

## Les rubriques {#the-items}

| **Rubrique** | **Niveau** | **Fonction** | **Plage · valeur par défaut** |
| --- | --- | --- | --- |
| **« Volume »** | Operator | Volume sonore du signal d'alarme, en pour cent. | 0 … 100, par pas de 10 · 100 |
| **« Language »** | Operator | Langue des textes à l'écran : anglais, ukrainien, polonais, hongrois, roumain, bulgare ou allemand. | · English |
| **« Buttons sound »** | Operator | Un bref bip à chaque appui accepté par le boîtier. | **« No »** / **« Yes »** · **« Yes »** |
| **« Seeding diagram settings »** | Operator | Façon dont le schéma de semis de l'écran d'accueil est dessiné — [ci-dessous](#diagram-settings). Affichée uniquement avec un capteur de vitesse et **« Mode of seeding »** sur **« Hybrid »** ou **« Precise »**. | sous-menu |
| **« Fertil. diagram settings »** | Operator | La même chose pour le schéma d'engrais. Affichée uniquement avec un capteur de vitesse, des capteurs d'engrais et **« Mode of fertilizers »** sur **« Hybrid »** ou **« Precise »**. | sous-menu |
| **« Liq.fert. diagram settings »** | Operator | **« Grid »** (quadrillage) du schéma d'engrais liquide. Affichée uniquement avec un capteur de vitesse, des capteurs d'engrais liquide et **« Mode of liq.fert. »** sur **« By area »**. | sous-menu |
| **« Change Date&Time »** | Operator | Date et heure du boîtier — [Régler la date et l'heure](set-date-and-time.md). | sous-menu |
| **« Alarm delay »** | Operator | Durée pendant laquelle un défaut doit persister avant l'ouverture de la fenêtre d'alarme — [Fonctionnement des alarmes](how-alarms-work.md). | 2 … 20 s · 3 s |
| **« Product rate error,% »** | Agronomist | Écart admis entre le poids de produit appliqué et sa consigne ; au-delà, le boîtier déclenche **« Rate of Product 1 is to low! »** ou **« Rate of Product 1 is to high! »** (avec le numéro du produit). Affichée uniquement quand un produit est dosé au poids, ou avec un contrôleur de pompe liquide. | 3 … 20 % · 5 % |
| **« Seeding machine parameters »** | Agronomist | Largeur de travail, modes de régulation, étalonnages — [Paramètres du semoir](seeding-machine-parameters.md). | sous-menu |
| **« User »** | Operator | Le niveau d'accès — [Activer le niveau Agronomist](enable-agronomist-level.md). | **« Operator »** … **« Debug »** |
| **« Reset settings »** | Service | Remet aussitôt, sans demander, les valeurs de ce menu et de **« Seeding machine parameters »** aux valeurs d'usine — y compris **« Language »** (English), **« Width, cm »**, les modes, la parcelle active et le réglage **« GPS »** du profil. | — |

> **IMPORTANT**
>
> **Le poids n'est calculé correctement qu'après un nouvel étalonnage du doseur** chaque fois que le rouleau doseur a été changé, que le variateur ou la boîte de vitesses de l'entraînement du doseur a été réglé, ou qu'une autre semence se trouve dans la trémie. Voir [Étalonner le doseur au poids](calibrate-dispenser-weight.md).

## Réglages des schémas {#diagram-settings}

Les sous-menus **« Seeding diagram settings »** et **« Fertil. diagram settings »** contiennent les mêmes rubriques, chacune pour son propre schéma. Quand les capteurs d'engrais fonctionnent en mode **« Precise »**, ils sont traités comme un second groupe de semis et les rubriques s'appellent **« Seeding gr.A diagram »** et **« Seeding gr.B diagram »**.

| **Rubrique** | **Niveau** | **Fonction** | **Valeurs · valeur par défaut** |
| --- | --- | --- | --- |
| **« Skips & Doubles »** | Operator | Affiche ou masque les colonnes de manques et de doubles sur le dernier tronçon parcouru. Uniquement en mode **« Precise »**. | **« No »** / **« Yes »** · **« Yes »** |
| **« Grid »** | Operator | **« No »** — uniquement la ligne de la dose de consigne ; **« Partial »** — uniquement les limites de l'écart admis ; **« Full »** — les deux. | · **« Full »** |
| **« Scale S&D,% »** | Operator | Hauteur totale d'une colonne de manques ou de doubles, en pour cent de la hauteur du schéma. Uniquement en mode **« Precise »**. | 5 … 50 %, par pas de 5 · 20 % |
| **« Reset to defaults »** | Service | Remet les trois rubriques ci-dessus à leurs valeurs par défaut. | — |

Ce que montre le schéma : [Le schéma des rangs](section-diagram.md).
