---
title: Niveaux d'accès
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/access-levels.html
---

# Niveaux d'accès

Les trois niveaux d'accès du Hectare Mini — Operator, Agronomist, Service — ce que chacun ouvre, ce qui arrive aux alarmes aux niveaux élevés et comment revenir au niveau Operator.

Le boîtier masque tous les réglages dont un conducteur n'a pas besoin. Ce qu'un menu affiche dépend du **niveau d'accès** choisi sous **« User »** (utilisateur) dans le menu **« Settings »** (réglages). À chaque mise sous tension, le boîtier démarre au niveau **« Operator »** (opérateur).

| **Niveau** | **Qui** | **Ce qu'il ouvre** |
| --- | --- | --- |
| **« Operator »** | Le conducteur | Tout ce qui sert au travail : les doses de consigne, les parcelles, les statistiques, **« Alarm delay »** (délai d'alarme), la date et l'heure, la langue. Dans les menus contextuels : **« Information »** et les réglages courants des capteurs, comme **« Fraction »** ou **« Minimum, rpm »**. |
| **« Agronomist »** (agronome) | L'agriculteur, le revendeur | Ouvre en plus **« Seeding machine parameters »** (paramètres du semoir : largeur de travail, modes, étalonnages), les paramètres masqués de chaque capteur et, dans le menu principal, le menu **« Service »** avec **« Sensors Configuration »** pour les capteurs de graines et de pression. |
| **« Service »** (service après-vente) | Le technicien du service après-vente | Ouvre en plus le profil, la configuration des concentrateurs HUB-8 et des actionneurs de jalonnage, l'écran de service des moteurs, **« Reset to defaults »** dans chaque menu contextuel et **« Reset settings »**. L'écran d'état d'un capteur affiche son adresse. |

La liste sous **« User »** comporte une quatrième valeur, **« Debug »**. Elle est réservée au constructeur et ne sert à rien sur le terrain.

Pour passer à **« Agronomist »** ou **« Service »**, le boîtier demande le code PIN de ce niveau. Les codes PIN diffèrent d'un boîtier à l'autre : le revendeur vous donne ceux de votre boîtier. Pour redescendre, rien n'est demandé. Marche à suivre : [Activer le niveau Agronomist](enable-agronomist-level.md).

Dans ce manuel, chaque paramètre ou rubrique de menu indique le niveau qu'il exige. Une rubrique que vous ne voyez pas est au-dessus de votre niveau ou ne concerne pas la machine du profil.

## Ce qui arrive aux alarmes tant que le niveau est élevé {#what-happens-to-the-alarms-while-the-level-is-high}

> **IMPORTANT**
>
> **Aux niveaux « Agronomist » et « Service », le boîtier n'affiche aucune fenêtre d'alarme.** Un défaut sur un capteur ne déclenche ni fenêtre ni signal d'alarme tant que le niveau n'est pas revenu à **« Operator »**.

La seule fenêtre qui apparaît encore est **« User is Agronomist! Alarms will not be shown! »** (l'utilisateur est agronome ! les alarmes ne seront pas affichées) — une fois par session, dès que le boîtier voit un semis au niveau élevé. Voir [User is Agronomist](alarms-access-level.md).

Quand vous redescendez au niveau **« Operator »**, le boîtier écarte les alarmes qui ont disparu entre-temps et affiche celles qui sont toujours vraies, l'une après l'autre.

## Retour au niveau Operator {#back-to-operator}

- Dans **« Settings »**, réglez **« User »** sur **« Operator »** avec **« MINUS »** et appuyez sur **« MENU »**, ou
- éteignez puis rallumez le boîtier.

Faites l'un ou l'autre après chaque mise en service ou réparation, avant que la machine reprenne le travail.

## Ce que contient le menu Service {#what-is-in-the-service-menu}

Le menu principal affiche **« Service »** à partir du niveau **« Agronomist »**. Voici son contenu :

| **Rubrique** | **Niveau** | **À quoi elle sert** |
| --- | --- | --- |
| **« Profile »** | Service | La liste des appareils de la machine. [Le profil](profile.md) |
| **« Sensors Configuration »** | Agronomist | Donne une adresse à un appareil neuf ou remplacé. [Configuration des appareils](device-configuration.md) |
| **« Electric motors »** | Service | L'écran de service des moteurs de doseur ; uniquement avec des moteurs dans le profil. |
| **« Count seeds always »** | Agronomist | **« Yes »** : le tableau de semis et l'écran des statistiques comptent aussi les graines dans les modes **« Flow »** et **« Hybrid »**, et pas seulement dans le mode **« Precise »**. |
| **« Enter key »** | Agronomist | Affichée uniquement sur un boîtier à licence limitée dans le temps : saisissez la clé de licence fournie par le revendeur. |

Les autres rubriques de ce menu sont réservées au technicien du service après-vente et au constructeur.
