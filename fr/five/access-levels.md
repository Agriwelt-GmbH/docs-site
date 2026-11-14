---
title: Niveaux d'accès
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/access-levels.html
---

# Niveaux d'accès

Les trois niveaux d'accès de l'Hectare 5, ce que chacun ouvre, et ce qu'il advient des alarmes tant qu'un niveau supérieur est réglé.

Tous les réglages ne sont pas ouverts à tout le monde. Le panneau a trois niveaux d'accès. **À chaque mise sous tension, il démarre au plus bas, « Operator » (opérateur).**

| **Niveau** | **Ce qu'il ouvre** |
| --- | --- |
| **« Operator »** | Le travail de tous les jours : luminosité, volume, langue, temporisation des alarmes, horloge, doses de consigne et seuils d'alarme, mise d'un capteur sous ou hors surveillance, étalonnages des masses. À ce niveau, la remise à zéro des statistiques demande un code. |
| **« Agronomist »** (agronome) | Les réglages de mise en service : **« Seeding machine parameters »** (paramètres du semoir), **« Product rate error,% »** (écart de dose du produit, %), la plupart des paramètres des capteurs, les étalonnages de la vitesse et des doseurs, et le menu **« Service »** avec le profil et la configuration des appareils. Exige un code. |
| **« Service »** (service) | Tout ce qui précède, plus les éléments de retour aux réglages par défaut, **« Reset settings »** (réinitialiser les réglages), **« Save factory defaults »** (enregistrer les réglages d'usine), le numéro de série, la période d'essai et **« Imitation mode »** (mode simulation). Réservé au service après-vente. Exige un code. |

Chaque tableau de réglages de ce manuel indique le niveau qu'un élément exige. **Un élément situé au-dessus de votre niveau n'apparaît pas du tout dans le menu** : si un élément nommé ici manque, vérifiez d'abord le niveau.

## Changer de niveau {#switch-the-level}

Le niveau se change à un seul endroit : **« Settings »** (réglages) → **« User »** (utilisateur). Pour **monter** d'un niveau, le panneau demande le code de ce niveau ; pour descendre, non. Pas à pas : [Activer le niveau Agronomist](enable-agronomist-level.md).

Demandez le code à votre concessionnaire ou au service d'assistance.

> **IMPORTANT**
>
> **Aux niveaux « Agronomist » et « Service », aucune fenêtre d'alarme ne s'affiche.** Quand le semis démarre à un tel niveau, le panneau en avertit une seule fois dans une fenêtre rouge — voir [User is Agronomist](alarms-access-level.md). Revenez au niveau **« Operator »** avant de travailler, ou éteignez puis rallumez le panneau.

## Ce qu'il advient des alarmes tant que le niveau est élevé {#what-happens-to-the-alarms-while-the-level-is-high}

Les alarmes ne sont pas perdues tant qu'elles sont masquées : elles attendent. Quand vous redescendez au niveau **« Operator »**, le panneau écarte celles qui ont disparu entre-temps et affiche celles qui sont **toujours vraies**, une fenêtre après l'autre — y compris celles que vous aviez déjà fermées avant de monter de niveau. Après une heure de mise en service au niveau **« Agronomist »**, attendez-vous à une courte série de fenêtres d'alarme au retour. C'est l'arriéré, pas un nouveau défaut. Fonctionnement des fenêtres : [Fonctionnement des alarmes](how-alarms-work.md).
