---
title: Le diagramme des sections — colonnes, lignes et couleurs
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/section-diagram.html
---

# Le diagramme des sections — colonnes, lignes et couleurs

Comment lire les diagrammes de semences et d'engrais du Hectare Mini dans les modes « Flow », « Hybrid » et « Precise », et ce que signifie « NOT UNDER CONTROL ».

Chaque colonne d'un diagramme est un rang de semences ou d'engrais — un capteur. Sa hauteur est le débit qui traverse ce rang à l'instant présent. À côté des colonnes, le **champ de dose** affiche la dose mesurée en haut et la valeur réglée en dessous ; pendant que vous modifiez la valeur réglée, il devient jaune quelques secondes. Le reste du tracé dépend du mode choisi dans **« Mode of seeding »** (mode de semis) et **« Mode of fertilizers »** (mode des engrais) : **« Flow »** (débit), **« Hybrid »** (hybride) ou **« Precise »** (précis). Le diagramme d'engrais se trouve toujours au-dessus du diagramme de semences et fonctionne le plus souvent en mode **« Flow »**.

## Mode « Flow » {#flow-mode}

![Le diagramme de semences en mode Flow avec ses repères.](figures/diagram-flow)

- **Seuil d'alarme** — le chiffre du bas du champ de dose, en graines par seconde (**s/s**). Le débit en dessous duquel un rang est considéré comme défaillant. **« PLUS »** et **« MINUS »** le modifient de 1.
- **Ligne de contrôle** — la ligne blanche en travers du diagramme : le seuil d'alarme tracé.
- **Débit mesuré** — le chiffre du haut : la moyenne des rangs à l'instant présent.
- **Colonne verte** — le débit est au-dessus du seuil d'alarme.
- **Colonne jaune** — le débit est sous le seuil d'alarme : alarme.
- **Pas de colonne** — aucun débit. Tant que le semoir sème et que les alarmes sont surveillées, le fond de cette colonne clignote en rouge foncé sur toute sa hauteur.

## Mode « Hybrid » {#hybrid-mode}

Comme **« Flow »**, avec trois différences : la valeur réglée est une **dose de consigne en graines par mètre** (**s/m**), modifiée de 1 ; des lignes d'écart admis peuvent être tracées au-dessus et en dessous ; et les manques et les doubles ne sont pas comptés.

## Mode « Precise » {#precise-mode}

![Le diagramme de semences en mode Precise avec manques et doubles.](figures/diagram-precise)

- **Dose de consigne** — le chiffre du bas du champ de dose, en graines par mètre (**s/m**), modifiée de 0,1. Pendant que vous la modifiez, le panneau l'affiche aussi sous forme de population en **ks/Ha** et d'écartement entre les graines en centimètres.
- **Dose mesurée** — le chiffre du haut, en moyenne sur les rangs où il y a du débit à l'instant présent.
- **Ligne de dose** et **lignes d'écart supérieure et inférieure.** Celles qui sont tracées dépendent de **« Grid »** (grille) : la ligne de dose avec **« No »** (non) ou **« Full »** (complète), les lignes d'écart avec **« Partial »** (partielle) ou **« Full »** ([Réglages du diagramme de semis](settings-menu.md)). L'écart admis est **« Rate error,% »** (erreur de dose, %) des capteurs de graines.
- **Colonne verte** — dans l'écart ; **bleue** — au-dessus ; **jaune** — en dessous.
- **Barre jaune hachurée** à gauche d'une colonne — les manques de ce rang ; **barre bleue hachurée** à sa droite — les doubles. Leur hauteur se mesure par rapport à **« Scale S&D,% »** (échelle manques et doubles, %), affiché en haut du champ de dose tant que **« Skips & Doubles »** (manques et doubles) est sur **« Yes »** (oui). Sur les machines à nombreux rangs, les colonnes sont trop étroites et les barres ne sont pas tracées.

Les manques, les doubles et la qualité sont comptés sur l'**intervalle de recalcul** — le tronçon de trajet réglé par **« Recalculation,m »** (recalcul, m) des capteurs de graines.

## Repères sur une colonne — tous les modes {#marks-on-a-column-all-modes}

| **Repère** | **Signification** |
| --- | --- |
| Cadre blanc avec **!** | Le capteur est mis hors surveillance. |
| Croix rouge | Pas de liaison avec le capteur. |
| Fond gris, numéro blanc | Le capteur sélectionné en mode de réglage des capteurs. |
| Hachures gris clair | Le rang est coupé pour un jalonnage — voir [Passage de jalonnage suivant](next-tramline-bout.md). |

## « NOT UNDER CONTROL » {#not-under-control}

Le panneau ne commence la surveillance des alarmes de semis que lorsque le semoir sème réellement : lorsqu'au moins la part de rangs réglée par **« Percent of sowing,% »** (pourcentage de rangs en semis ; 20 % par défaut) sème dans la valeur réglée — et, si **« Seeding criteria »** (critère de semis) est réglé dans le capteur de vitesse, tant que le semoir avance. Les alarmes de semences et d'engrais démarrent et s'arrêtent ensemble. **Un bip court** signale que la surveillance a démarré ; **trois bips courts**, qu'elle s'est arrêtée.

Si le semoir sème mais que le débit reste sous la valeur réglée, le diagramme affiche **« NOT UNDER CONTROL »** (hors surveillance). Soit le débit a chuté pendant le travail — un vrai défaut —, soit le seuil d'alarme ou la dose de consigne est réglé plus haut que ce que la machine délivre.

> **IMPORTANT**
>
> **Les colonnes sous la ligne ne sont pas gardées.** Réglez le seuil de façon que les colonnes dépassent la ligne, ou laissez le panneau le régler : [Régler le seuil d'alarme](set-the-alarm-level.md).
