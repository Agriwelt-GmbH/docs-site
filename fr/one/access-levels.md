---
title: Niveaux d'accès
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/access-levels.html
---

# Niveaux d'accès

Les trois niveaux d'accès du Hectare One, ce que chacun permet et comment passer de l'un à l'autre.

Tous les réglages ne sont pas ouverts à tout le monde. Le boîtier dispose de trois niveaux d'accès de travail. **À chaque mise sous tension, il démarre au niveau le plus bas, « Operator » (opérateur).**

| Niveau | Ce qu'il permet |
| --- | --- |
| **« Operator »** | Le travail de tous les jours. Certains paramètres ne peuvent pas être modifiés et les statistiques ne peuvent pas être remises à zéro. |
| **« Agronomist »** (agronome) | La remise à zéro des statistiques, les paramètres du semoir, l'écart de dose du produit et les autres réglages de mise en service. Un code PIN est exigé. |
| **« Service »** (service après-vente) | Le profil et les rubriques de retour aux valeurs d'usine. Réservé au service après-vente. Un code PIN est exigé. |

Un quatrième niveau, **« Debug »**, existe au-dessus de **« Service »**. Il n'est utilisé qu'en fabrication ; voir [Le menu Service](service-menu.md).

Chaque tableau de réglages de ce manuel indique le niveau exigé par la rubrique. Une rubrique située au-dessus de votre niveau n'apparaît pas du tout dans le menu.

## Changer de niveau {#switch-the-level}

Le niveau se change dans le menu **« Settings »** (réglages), rubrique **« User »** (utilisateur), et nulle part ailleurs : aucune combinaison de touches n'existe pour cela. **Monter** d'un niveau demande le code PIN ; en **descendre** n'en demande pas. Pas à pas, avec les écrans : [Activer le niveau Agronomist](enable-agronomist-level.md).

Le code PIN est différent pour chaque boîtier. Reportez-vous au passeport de l'appareil ou adressez-vous au support technique.

> **IMPORTANT**
>
> **Aux niveaux « Agronomist » et « Service », aucune fenêtre d'alarme n'est affichée.** Le boîtier vous en avertit dans une fenêtre rouge ; voir [User is Agronomist](alarms-access-level.md). Revenez au niveau **« Operator »** avant de travailler, ou éteignez puis rallumez le boîtier.

## Ce qui arrive aux alarmes tant que le niveau est élevé {#what-happens-to-the-alarms-while-the-level-is-high}

Les alarmes ne sont pas perdues tant qu'elles sont masquées : elles attendent. Quand vous abaissez le niveau, le boîtier écarte celles qui ont disparu entre-temps et affiche celles qui sont **toujours vraies**, une fenêtre après l'autre. Après une heure de mise en service au niveau **« Agronomist »**, attendez-vous à une courte série de fenêtres d'alarme lors du retour. C'est l'arriéré, et non un nouveau défaut. Fonctionnement des fenêtres : [Fonctionnement des alarmes](how-alarms-work.md).
