---
title: Enregistrer et charger les réglages
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/save-and-load-settings.html
---

# Enregistrer et charger les réglages

Conserver une copie de tous les réglages du profil en cours dans le boîtier ou sur une carte mémoire, puis la restaurer — par exemple pour utiliser un même boîtier sur plusieurs outils.

Pour le profil en cours, le boîtier peut **enregistrer tous les réglages** et les restaurer plus tard — utile avant un essai. Avec une carte mémoire dans le lecteur, un profil peut aussi être enregistré sur la carte avec ses réglages : un seul boîtier peut ainsi servir plusieurs outils.

| Rubrique du menu **« Profile »** | Ce qu'elle fait |
| --- | --- |
| **« Save settings »** (enregistrer les réglages) / **« Load settings »** (charger les réglages) | Conservent une copie des réglages dans le boîtier et la restaurent. |
| **« Save to SD-card »** (enregistrer sur la carte SD) / **« Load from SD-card »** (charger depuis la carte SD) | Même chose avec la carte mémoire ; le profil voyage avec ses réglages. Sans carte, l'enregistrement se termine par **« Insert SD-card »** (insérez la carte SD). |

Au niveau **« Service »**, le menu contient aussi **« Save factory defaults »** (enregistrer les réglages d'usine) : après **« Are you sure? »** (êtes-vous sûr ?), il enregistre les réglages comme **« Save settings »** et les conserve en plus, avec le profil, comme copie d'usine du boîtier, qu'aucune rubrique de menu de ce micrologiciel ne recharge.

::: steps
1. Montez de niveau ([Activer le niveau Agronomist](enable-agronomist-level.md) — choisissez **« Service »**) et ouvrez **« MENU »** → **« Service »** → **« Profile »** ([Le profil](profile.md)).

2. Faites défiler jusqu'à la rubrique voulue et appuyez sur **« MENU »**. **« Save settings »** et **« Load settings »** demandent **« Are you sure? »** (êtes-vous sûr ?).

   ![La fenêtre de confirmation.](figures/confirm-sure)

3. Touchez **« Yes »**. Le boîtier répond **« Saved »** (enregistré) ou **« Loaded »** (chargé).

   ![Le boîtier confirme par « Saved ».](figures/info-saved)
:::

## Fichiers de profil sur la carte mémoire {#profile-files-on-the-memory-card}

- Les fichiers sont nommés automatiquement **P0001.pfl** et rangés dans le dossier **PROFILES** de la carte. Vous pouvez renommer un fichier — limitez le nom à huit caractères, lettres latines et chiffres.
- **« Load from SD-card »** ouvre la liste des profils présents sur la carte. Un fichier de profil écrit par une version de micrologiciel risque fort de **ne pas être lisible** par une autre : un profil incompatible apparaît en **rouge** dans cette liste.
