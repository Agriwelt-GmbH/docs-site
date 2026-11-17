---
title: Capteurs de graines et capteurs d'engrais solide
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/seed-and-fertilizer-sensors.html
---

# Capteurs de graines et capteurs d'engrais solide

Les paramètres communs à un groupe de capteurs optiques de graines ou d'engrais solide — fraction, sensibilité, écart de dose, manques et doubles, pourcentage de semis, tolérance de jalonnage — et le commutateur par capteur de l'application du produit.

Les capteurs de graines et les capteurs d'engrais solide sont des appareils de même type et partagent un seul jeu de paramètres. **Presque tout ce qui suit est commun à tout le groupe** : modifiez-le sur un capteur et il change pour tous les capteurs du groupe. Deux choses seulement se règlent capteur par capteur : s'il est **sous surveillance** (**« Disable control »** / **« Enable control »**, désactiver / activer la surveillance) et **« Product application »** (application du produit). Maintenez le doigt sur la colonne d'un capteur quelconque du groupe pour ouvrir son menu contextuel ([Réglages des capteurs](sensor-settings.md)).

![Le menu contextuel d'un capteur de graines, partie haute.](figures/five-ctx-seed)

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Product application »** | **Par capteur.** **« No »** (non) — le rang n'applique volontairement rien, et le panneau le surveille comme un rang de jalonnage coupé. Non proposé quand chaque capteur du groupe a son propre moteur de doseur. | **« No »** / **« Yes »** (oui) | Agronomist |
| **« Sensitivity »** | La sensibilité du canal optique (sensibilité). Affiché seulement pour les types de capteurs qui l'utilisent. | 1 … 120 ; 80 | Agronomist |
| **« Fraction »** | Le filtre du capteur pour la taille des particules de produit (fraction). Les alarmes de dose, de manques et de doubles indiquent dans quel sens le modifier. | 1 … 100 ; 10 | Operator |
| **« Correction »** | Une correction de la fenêtre de détection du canal optique (correction). Affiché seulement pour le type de capteur qui l'utilise. | 100 … 3300, par pas de 10 ; 300 | Operator |
| **« Rate error,% »** | De combien la dose réelle peut s'écarter de la dose de consigne avant une alarme (écart de dose, %). Modes **« Hybrid »** et **« Precise »** uniquement. | 5 … 95, par pas de 5 ; 50 | Agronomist |
| **« Doubles error,% »** | La part de doubles qui déclenche une alarme (écart des doubles, %). **« No »** (0) désactive l'alarme. **Mode « Precise » uniquement.** | 0 … 95 ; **« No »** | Agronomist |
| **« Skips error,% »** | La part de manques qui déclenche une alarme (écart des manques, %). **« No »** (0) désactive l'alarme. **Mode « Precise » uniquement.** | 0 … 95 ; **« No »** | Agronomist |
| **« Recalculation,m »** / **« Recalculation,sec »** | Le tronçon sur lequel manques et doubles sont comptés (recalcul) — en mètres sur une machine avec capteur de vitesse, en secondes sans. | 10 … 50 ; 20 | Operator |
| **« Percent of sowing,% »** | La part des capteurs de graines sous surveillance qui doivent voir des graines pour que le panneau décide que le semis a commencé (pourcentage de semis). Capteurs de graines uniquement ; masqué sur une machine à moteurs de doseur ou à pompe. | 5 … 80, par pas de 5 ; 20 | Agronomist |
| **« Toler.sowing to tramline,% »** | Ce qu'une section qui doit être coupée pour le jalonnage peut encore délivrer (tolérance de semis au jalonnage, %). | 0 … 50 ; 20 | Agronomist |
| **« Group start address »** | Capteurs d'engrais uniquement (adresse de début du groupe). Réglé à la mise en service — voir [Configuration des appareils](device-configuration.md). | — | Agronomist |

> **CONSEIL**
>
> **« Fraction » est le premier réglage à examiner quand les alarmes de dose ne correspondent pas à la réalité.** La plupart des alarmes de dose, de manques et de doubles le nomment, avec le sens dans lequel le modifier : [Alarmes de dose](alarms-rate.md), [Doubles et manques](alarms-seeding-quality.md), [Alarmes de jalonnage](alarms-tramline.md).

Les doses de consigne et le seuil d'alarme ne sont pas des éléments de menu : ils se modifient pendant le travail, sur l'écran d'accueil — voir [Modifier la dose de consigne](set-the-target-rate.md). L'écran d'état de ces capteurs montre l'un de huit états — voir [L'écran d'état d'un capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor). Si un capteur signale **« Clogged »** (obstrué), **« Light struck »** (éblouissement) ou **« Broken »** (cassé) : [Capteur obstrué ou cassé](alarms-sensor-state.md).

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
