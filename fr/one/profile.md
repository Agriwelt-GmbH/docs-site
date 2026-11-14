---
title: Le profil
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/profile.html
---

# Le profil

Ce que le profil indique au boîtier, comment le vérifier, ce que permet chaque rubrique du profil et dans quels cas le boîtier refuse un profil.

Le profil indique au boîtier **quels appareils, et combien de chaque**, équipent la machine. Un boîtier est généralement livré avec le profil déjà réglé. **Vérifiez-le avant tout autre réglage** : un appareil absent du profil n'est jamais surveillé, et un appareil déclaré dans le profil mais non monté déclenche **« Connection lost »** (liaison perdue).

## Vérifier le profil sur l'écran d'accueil {#check-the-profile-on-the-home-screen}

Allumez le boîtier et attendez quelques secondes. Regardez ensuite l'écran d'accueil :

- **Pas d'alarme « Connection lost »** : le boîtier a trouvé tous les appareils déclarés par le profil.
- **Pas d'indicateur blanc avec point d'exclamation** : aucun appareil n'est hors surveillance.
- **Pas d'indicateur rouge barré d'une croix** : tous les appareils répondent.

Signification des indicateurs : [Indicateurs](indicators.md). Comment mettre un appareil sous surveillance ou hors surveillance : [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md).

> **REMARQUE**
>
> Un profil est parfois livré avec des appareils **qui ne font pas partie de la livraison**, afin de pouvoir étendre le système plus tard. Ces indicateurs restent volontairement hors surveillance. N'activez pas leur surveillance.

## Ouvrir le profil {#open-the-profile}

Le profil se trouve au niveau **« Service »** : montez de niveau ([Activer le niveau Agronomist](enable-agronomist-level.md) — choisissez **« Service »**), puis **« MENU »** → **« Service »** → **« Profile »**.

::: {.anatomy fig="menu-profile"}
1. **« Seed sensors »** (capteurs de graines) — le nombre de capteurs de graines. La rubrique sélectionnée affiche sa valeur entre **–** et **+** : modifiez-la avec **« MINUS »** / **« PLUS »**.
2. **« Fertilizer sensors »** (capteurs d'engrais) — capteurs d'engrais solide.
3. **« Liquid fertilizer flow sensors »** (capteurs de débit d'engrais liquide) — capteurs des tronçons d'engrais liquide.
4. **« Hoppers »** (trémies) — capteurs de niveau des trémies.
5. **« Dispensers »** (doseurs) — capteurs d'arbre de doseur.
6. **« Speed »** (vitesse) — l'origine de la vitesse d'avancement.
7. **« Fans »** (turbines) — capteurs de vitesse de turbine.
8. **« Pressure sensors »** (capteurs de pression) — capteurs de pression d'air.
9. **Barre de défilement.** D'autres rubriques suivent plus bas — voir le tableau.

Le haut du menu **« Profile »** d'un semoir à huit rangs, deux trémies, deux doseurs et une turbine.
:::

## Les rubriques du profil {#the-profile-items}

| Rubrique | Plage |
| --- | --- |
| **« Seed sensors »** | **2 … 120.** Le menu permet de saisir 1, mais un tel profil est refusé à l'enregistrement. |
| **« Fertilizer sensors »** | **0 … 60** ; capteurs de graines et d'engrais ensemble **120 au plus**. |
| **« Liquid fertilizer flow sensors »** | **0 … 60** |
| **« Hoppers »** | 0 … 9 |
| **« Dispensers »** | 0 … 9 |
| **« Speed »** | **« No »** (non) / **« Control panel »** (boîtier de commande : capteur câblé au boîtier) / **« Input device »** (dispositif d'entrée : un capteur de roue sur le dispositif d'entrée) / **« Input device (2) »** (deux capteurs de roue sur le dispositif d'entrée). |
| **« Fans »** | 0 … 2 |
| **« Pressure sensors »** | 0 … 3 |
| **« Work position sensor »** (capteur de position de travail) | **« No »** / **« Yes »** (oui) |
| **« Markers »** (traceurs) | **« No »** / **« One »** (un) / **« Both »** (les deux) |
| **« No battery charge »**, **« Emergency oil pressure »**, **« Ignition »**, **« Low fuel »**, **« Air filter »** | Les capteurs du moteur — **« No »** / **« Yes »** pour chacun. |
| **« Seed dispenser motors »** (moteurs de doseur de semences) | **0 … 60** |
| **« Fertilizer dispenser motors »** (moteurs de doseur d'engrais) | **0 … 30** ; les deux groupes de moteurs ensemble **60 au plus**. |
| **« Tramline actuators »** (actionneurs de jalonnage) | 0 … 4 |
| **« Liquid fertilizer pump controller »** (contrôleur de pompe d'engrais liquide) | 0 … 1 |

Sur un boîtier prévu pour un système sans moteurs électriques, les deux rubriques de moteurs ne figurent pas dans le menu.

## Quand le boîtier refuse un profil {#when-the-panel-refuses-a-profile}

Le boîtier vérifie le profil entier, et pas seulement la rubrique que vous avez modifiée. Il refuse un profil dans les cas suivants :

- les capteurs de trémie, de doseur et de moteur thermique totalisent **plus de 12** ;
- ils totalisent **plus de 10** alors que les capteurs de pression et de turbine totalisent plus de quatre ;
- les capteurs de pression et de turbine totalisent **plus de cinq** ;
- il y a **des moteurs d'engrais mais pas de moteurs de semences**, ou des moteurs d'engrais mais pas de capteurs d'engrais ;
- il y a des moteurs électriques ou une pompe d'engrais liquide **mais pas de capteur de vitesse** ;
- des **électrovannes et un contrôleur de pompe** d'engrais liquide sont déclarés en même temps.

## Enregistrer le profil {#save-the-profile}

::: steps
1. Après avoir modifié le profil, sélectionnez **« Save profile »** (enregistrer le profil) à la fin du menu **« Profile »** et appuyez sur **« MENU »**. Le boîtier demande **« Are you sure? »** (êtes-vous sûr ?).

   ![La fenêtre de confirmation.](figures/confirm-sure)

2. Touchez **« Yes »**. Le boîtier affiche **« Wait... »** (patientez), puis **« Saved »** (enregistré) et **« Restart system »** (redémarrage du système), et redémarre de lui-même.
:::

Si rien n'a été modifié, le boîtier affiche seulement **« No changes »** (aucune modification). Si le profil enfreint l'une des règles ci-dessus, il affiche **« Invalid profile! »** (profil non valide) en rouge et n'enregistre rien.

Enregistrer tous les réglages d'un profil et les transporter sur une carte mémoire : [Enregistrer et charger les réglages](save-and-load-settings.md).
