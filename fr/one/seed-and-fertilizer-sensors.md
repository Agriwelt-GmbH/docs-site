---
title: Capteurs de graines et capteurs d'engrais solide
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/seed-and-fertilizer-sensors.html
---

# Capteurs de graines et capteurs d'engrais solide

Les paramètres communs à un groupe de capteurs optiques de graines ou d'engrais solide — doses de consigne, fraction, sensibilité, écart de dose, manques et doubles, tolérance de jalonnage.

Les capteurs de graines et les capteurs d'engrais solide sont des appareils de même nature et partagent un seul jeu de paramètres. **Presque tout est commun à l'ensemble du groupe** : modifiez un paramètre sur un capteur, il change pour tous les capteurs du groupe. Seules deux choses se règlent capteur par capteur : s'il est **sous surveillance** (**« Disable control »** (désactiver la surveillance) / **« Enable control »** (activer la surveillance)) et **« Product application »** (application du produit). Ouvrez le menu contextuel d'un capteur quelconque du groupe comme dans [Réglages des capteurs](sensor-settings.md).

![Le menu contextuel d'un capteur de graines, partie haute.](figures/ctx-seed)

| Paramètre | Ce qu'il fait | Plage | Niveau |
| --- | --- | --- | --- |
| **« Flow rate »** (débit) | La dose du mode **« Flow »** (débit), en graines par seconde. En dessous, le tronçon déclenche l'alarme de dose trop faible. | 1 … 1500 | Operator |
| **« Hybrid rate »** (dose hybride) | La consigne du mode **« Hybrid »** (hybride). | 1 … 200 | Operator |
| **« Precise rate,x10 »** (dose précise) | La consigne du mode **« Precise »** (précis), en dixièmes. | 5 … 500 | Operator |
| **« Sensitivity »** (sensibilité) | La sensibilité des capteurs d'une génération plus ancienne ; le boîtier la leur envoie. Affiché seulement quand un tel capteur est raccordé. | 1 … 120 | Agronomist |
| **« Fraction »** | Le filtre de comptage des capteurs, réglé selon la taille de la graine ou du granulé ; le boîtier l'envoie à tous les capteurs du groupe. Les alarmes de dose, de manques et de doubles indiquent dans quel sens le modifier. | 1 … 100 | Operator |
| **« Correction »** | Un réglage fin de la détection des graines pour la génération de capteurs qui l'utilise ; le boîtier ne l'envoie qu'à ces capteurs, et la rubrique n'apparaît que si l'un d'eux est raccordé. Valeur par défaut : 300. | 100 … 3300, par pas de 10 | Operator |
| **« Rate error,% »** (écart de dose) | L'écart que la dose réelle peut avoir par rapport à la consigne avant une alarme. | 5 … 95, par pas de 5 | Agronomist |
| **« Doubles error,% »** (écart de doubles) | La part de doubles qui déclenche une alarme. **Mode « Precise » uniquement.** | 0 … 95 | Agronomist |
| **« Skips error,% »** (écart de manques) | La part de manques qui déclenche une alarme. **Mode « Precise » uniquement.** | 0 … 95 | Agronomist |
| **« Recalculation,m »** / **« Recalculation,sec »** (recalcul) | Le tronçon sur lequel les manques et les doubles sont comptés — en mètres ou en secondes, selon le mode. | 10 … 50 | Operator |
| **« Percent of sowing,% »** (pourcentage de semis) | La part des rangs de semis sous surveillance qui doivent semer avant que le boîtier considère que le semoir sème ; jusque-là, les capteurs de graines et d'engrais solide ne déclenchent aucune alarme de dose, de manques, de doubles ou de jalonnage. Capteurs de graines uniquement ; masqué sur les machines à moteurs de dosage ou à contrôleur de pompe d'engrais liquide. | 5 … 80, par pas de 5 | Agronomist |
| **« Tolerable sowing to tramline,% »** (semis toléré dans le jalonnage) | La quantité qu'un tronçon censé être fermé pour le jalonnage a le droit de distribuer encore. | 0 … 50 | Agronomist |
| **« Group start address »** (adresse de début de groupe) | Réglée à la mise en service — voir [Configuration des appareils](device-configuration.md). | | Service |

> **CONSEIL**
>
> **« Fraction » est le premier réglage à examiner quand les alarmes de dose ne correspondent pas à la réalité.** La plupart des alarmes de dose, de manques et de doubles le nomment, avec le sens de la correction : [Alarmes de dose](alarms-rate.md), [Doubles et manques](alarms-seeding-quality.md), [Alarmes de jalonnage](alarms-tramline.md).

Les doses de consigne elles-mêmes se modifient en cours de travail, sur l'écran d'accueil — voir [Modifier la dose de consigne](set-the-target-rate.md). L'écran d'état de ces capteurs affiche l'un de huit états — voir [L'écran d'état du capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor). Si un capteur signale **« Clogged »** (obstrué), **« Light struck »** (ébloui) ou **« Broken »** (défectueux) : [Capteur obstrué ou défectueux](alarms-sensor-state.md).

## Fraction selon la culture {#fraction-for-the-crop}

Guidez-vous sur la taille de la semence :

| **Culture** | **« Fraction »** |
| --- | --- |
| Colza | 1 – 5 |
| Blé | 5 – 10 |
| Maïs | 10 – 30 |
| Tournesol | 10 – 30 |

Sur les semoirs pneumatiques, réglez **1** quelle que soit la culture. Une fraction trop élevée fait disparaître les petites graines du comptage — le boîtier indique alors une dose trop faible.

> **IMPORTANT**
>
> **Ne modifiez « Correction » qu'après avoir consulté le service après-vente.** Elle n'est nécessaire que dans de rares cas ; une valeur erronée fait manquer des graines aux capteurs ou leur fait compter de la poussière.
