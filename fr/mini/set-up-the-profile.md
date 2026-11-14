---
title: Régler le profil
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/set-up-the-profile.html
---

# Régler le profil

Les étapes pour modifier le profil du Hectare Mini — accéder au menu du profil au niveau Service, saisir les appareils de la machine, enregistrer et laisser le boîtier redémarrer.

Réglez le profil quand l'équipement de la machine change — un appareil ajouté, retiré ou d'un autre type. Les rubriques et leurs limites : [Le profil](profile.md). Le menu du profil exige le niveau **« Service »** (service après-vente).

> **AVERTISSEMENT**
>
> **Ne modifiez le profil qu'à la mise en service, par le service après-vente.** Un profil erroné fait surveiller par le boîtier des appareils qui n'existent pas et ignorer ceux qui existent.

::: steps
1. Raccordez tous les appareils au boîtier et alimentez-les comme l'indique le schéma de câblage de la fiche technique du système.

2. Allumez le boîtier. Après l'écran de démarrage, l'écran d'accueil apparaît ; ce qu'il affiche dépend du profil en vigueur.

   ![L'écran d'accueil après le démarrage.](figures/home-idle)

3. Passez au niveau **« Service »** : **« MENU »** → **« Settings »** (réglages) → **« User »** (utilisateur) → **« Service »**, **« MENU »**, code PIN — comme dans [Activer le niveau Agronomist](enable-agronomist-level.md).

4. Appuyez sur **« BACK »**. Le menu principal réapparaît, avec maintenant **« Service »**.

5. Sélectionnez **« Service »** et appuyez sur **« MENU »**. Le menu **« Service »** s'ouvre avec **« Profile »** (profil) comme première rubrique.

6. Sélectionnez **« Profile »** et appuyez sur **« MENU »**. Le menu du profil s'ouvre.

   ![Le chemin vers le profil : Settings au niveau Service, le menu principal, le menu Service, le menu du profil.](figures/menu-to-profile)

7. Parcourez les rubriques avec **« UP »** / **« DOWN »** et réglez chacune avec **« PLUS »** / **« MINUS »** d'après l'équipement de la machine.

   ![Le menu du profil.](figures/menu-profile)

8. Sélectionnez **« Save profile »** (enregistrer le profil), la dernière rubrique, et appuyez sur **« MENU »**. Le boîtier demande **« Are you sure? »** (êtes-vous sûr ?) — appuyez sur **« PLUS »** pour **« Yes »** (oui), sur **« MINUS »** pour **« No »** (non).

9. Le boîtier vous demande d'attendre, puis affiche **« Saved »** (enregistré) et **« Restart system »** (redémarrage du système), et redémarre de lui-même. Le nouveau profil est en vigueur après le redémarrage.

   ![Enregistrement du profil : la rubrique Save profile, la question, puis les messages Saved et Restart system.](figures/profile-save)
:::

**« BACK »** quitte le menu du profil ; les nombres d'appareils que vous avez modifiés ne sont pas enregistrés. **« GPS »** fait exception : il est mémorisé aussitôt, comme un réglage du menu **« Settings »**.

## Quand le profil n'est pas enregistré {#when-the-profile-is-not-saved}

| **Le boîtier affiche** | **Signification** |
| --- | --- |
| **« No changes »** (aucune modification) | Le profil est identique à celui qui est enregistré. Rien n'est enregistré, rien ne redémarre. |
| **« Invalid profile! »** | Le profil enfreint une règle — trop peu de capteurs de graines, trop de petits indicateurs, trop de capteurs de turbine et de pression, ou des moteurs sans capteur de vitesse. Voir [Règles que le profil doit respecter](profile.md#rules-the-profile-must-keep). Corrigez-le et enregistrez de nouveau. |

Après le redémarrage, le boîtier est au niveau **« Operator »**. Contrôlez le résultat comme dans [Vérifier le profil et les connexions](check-profile-and-connections.md), puis, si la machine trace des jalonnages, réglez le rythme de jalonnage — toujours après le profil — [Régler le rythme de jalonnage](tramline-rhythm.md).
