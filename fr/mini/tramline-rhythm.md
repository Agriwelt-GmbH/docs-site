---
title: Régler le rythme de jalonnage
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/tramline-rhythm.html
---

# Régler le rythme de jalonnage

Indiquer au Hectare Mini à quels passages quel actionneur ou moteur coupe — les limites, l'éditeur de rythme, ses fenêtres, et l'ordre qui évite d'écraser votre rythme.

Un **jalonnage** est la voie dans laquelle le pulvérisateur passera plus tard. Vous le créez en semant : le panneau coupe des rangs de semences ou des moteurs à certains **passages** — les passes à travers la parcelle. Il compte les passes et repart au premier après le dernier. Le nombre de passages et la liste de l'appareil qui coupe à quel passage forment le **rythme**. Exemple : quatre passages, l'actionneur 1 coupant au passage 4 — une passe sur quatre laisse un jalonnage.

| **Limite** | **Valeur** |
| --- | --- |
| Rythmes mémorisés | **Trois**, un seul actif à la fois. Conservez les schémas des machines avec lesquelles vous travaillez. |
| Passages dans un rythme | **1 à 50**. |
| Actionneurs de jalonnage | **Quatre** au plus ; l'élément de profil **« Tramline actuators »** (actionneurs de jalonnage) en fixe le nombre. |
| Passages de coupure par appareil | **Quatre**. |

Le panneau n'en sait pas davantage : il n'existe pas de réglage pour un côté de départ ni pour la largeur du jalonnage. Les rangs de semences qu'un actionneur coupe physiquement se règlent dans **« Relation of sensors to actuators »** (relation des capteurs aux actionneurs) ([Menu Settings](settings-menu.md)) ; sans cela, le panneau compte les passages mais ne coupe rien.

> **IMPORTANT**
>
> **Réglez d'abord le profil, le jalonnage ensuite.** L'enregistrement d'un profil reprend tout son jeu de réglages, y compris les trois rythmes — un rythme réglé avant est perdu. Et vérifiez le nombre de passages d'après le pulvérisateur, pas le semoir : un rythme erroné a l'air parfait jusqu'à ce que le pulvérisateur n'ait nulle part où passer.

L'élément **« Tramline »** (jalonnage) n'existe que si la machine a un actionneur de jalonnage, ou autant de moteurs de semences que de capteurs de graines, ou autant de moteurs d'engrais que de capteurs d'engrais. Le réglage demande le niveau Agronomist ([Activer le niveau Agronomist](enable-agronomist-level.md)).

::: steps
1. Appuyez sur **« MENU »**, puis ouvrez **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir) → **« Tramline »**. Réglez **« Tramline »** sur **« Yes »** (oui) avec **« PLUS »**.

   ![Le sous-menu Tramline.](figures/mini-tramline-menu)

2. Sélectionnez **« Tramline rhythm settings »** (réglages du rythme de jalonnage) et appuyez sur **« MENU »**. L'éditeur de rythme s'ouvre.

3. Choisissez le numéro du rythme avec **« PLUS »** / **« MINUS »**, appuyez sur **« MENU »** et choisissez **« Select »** (sélectionner). **(« Active »)** (actif) apparaît à côté du numéro. Sans cela, le rythme est enregistré mais pas utilisé.

4. Appuyez sur **« DOWN »** jusqu'au nombre de passages, appuyez sur **« MENU »**, réglez **« Bouts »** (passages) avec **« PLUS »** / **« MINUS »** et validez avec **« MENU »**.

5. Appuyez sur **« DOWN »** jusqu'à la ligne vide d'une section et appuyez sur **« MENU »**. Réglez le numéro de l'appareil et le **« Bout »** (passage) auquel il coupe ; validez avec **« MENU »**.

6. Pour d'autres passages de coupure du même appareil, appuyez sur **« PLUS »** jusqu'à la cellule portant le signe **« MENU »** en fin de ligne et appuyez sur **« MENU »** — jusqu'à quatre.

7. Appuyez sur **« BACK »**, ou maintenez **« HOME »**. Le rythme est enregistré.
:::

## L'éditeur de rythme {#the-rhythm-editor}

![L'éditeur de rythme avec un nouveau rythme : un passage, rien de coupé pour l'instant.](figures/mini-tramline-rhythm-form)

Lisez-le de haut en bas : **« Rhythm »** (rythme) avec son numéro entre des flèches et **(Active)** s'il est utilisé ; en dessous, le nombre de passages dans une case ; puis jusqu'à trois sections — **« Tramline actuators activation »** (activation des actionneurs de jalonnage), **« Tramline motors activation »** (activation des moteurs de jalonnage), **« Tramline fert. motors activation »** (activation des moteurs d'engrais de jalonnage) (avec les deux modes **« Precise »** (précis) : **« Tramline motors gr.A activation »** et **« Tramline motors gr.B activation »**). Chaque ligne nomme un appareil — **« Actuator »** (actionneur), **« Motor »** (moteur), **« Fert.mot. »** (moteur d'engrais) — et les passages auxquels il coupe ; une cellule portant le signe **« MENU »** ajoute un passage ou une ligne. Une cellule sélectionnée est blanche sur bleu.

| **Bouton** | **Ce qu'il fait** |
| --- | --- |
| **« UP »** / **« DOWN »** | Une ligne vers le haut ou le bas, à travers les sections. |
| **« PLUS »** / **« MINUS »** | Sur le numéro du rythme : rythme suivant / précédent. Dans une ligne : une cellule vers la droite / la gauche. Sur le nombre de passages : rien — ouvrez-le avec **« MENU »**. |
| **« MENU »** | Ouvre la fenêtre de la cellule sélectionnée. |
| **« BACK »** | Enregistre et revient au menu **« Tramline »**. |
| **« HOME »** maintenu | Enregistre et revient à l'écran d'accueil. Un appui court ne fait rien ici. |

## Les fenêtres {#the-dialogs}

- **Numéro du rythme :** **« Select »** en fait celui qui est utilisé ; **« Reset rhythm settings »** (réinitialiser les réglages du rythme) supprime ses lignes et ramène ses passages à 1.
- **Nombre de passages :** le diminuer supprime les entrées des passages qui disparaissent ; une ligne laissée sans passage disparaît. Si le passage courant était supérieur au nouveau nombre, le comptage repart à 1.
- **Ligne d'un appareil :** le numéro de l'appareil et **« Remove »** (supprimer). Les numéros déjà utilisés dans la section sont sautés — lisez la valeur, ne comptez pas les appuis.
- **Passage d'une ligne :** **« Bout »**, **« Remove bout »** (supprimer le passage) et **« Remove all bouts »** (supprimer tous les passages). Les passages déjà présents dans la ligne sont sautés. Si tous les passages sont déjà saisis, **« Unused bouts are not found! »** (aucun passage inutilisé) apparaît à la place ; n'importe quel bouton la ferme.

> **ATTENTION**
>
> **Les éléments de suppression se trouvent juste sous la valeur.** Un seul **« DOWN »** de trop et un **« MENU »** suppriment la ligne sur laquelle vous travaillez. **« Reset rhythm settings »** annule aussi les modifications non enregistrées des deux autres rythmes et un **« Select »** non enregistré.

## Ce qui est enregistré où {#what-is-stored-where}

Les trois rythmes, le nombre de passages, le passage courant, **« Tramline »** et **« Auto-switching »** (commutation automatique) font partie des réglages du panneau et sont enregistrés d'eux-mêmes peu après le dernier toucher. Le profil ne contient que le nombre d'appareils ; à l'ouverture, l'éditeur efface les lignes pour lesquelles le profil n'a pas d'appareil. Avec **« Tramline »** sur **« No »**, tous les actionneurs et moteurs reviennent au semis.

Le travail dans la parcelle : [Passage de jalonnage suivant](next-tramline-bout.md).
