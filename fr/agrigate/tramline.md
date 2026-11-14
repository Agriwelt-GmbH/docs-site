---
title: Jalonnage
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/tramline.html
---

# Jalonnage

Comment l'app compte les passages de jalonnage, comment régler le rythme et les actionneurs, et comment changer le passage à la main depuis la vignette des passages.

L'app compte les passages du rythme de jalonnage. Sur les passages du rythme, les rangs des actionneurs de jalonnage se taisent : leurs colonnes sont hachurées en gris, ils ne déclenchent pas **« Not seeding »** (ne sème pas), et un rang qui sème malgré tout déclenche **« Seeding in tramline »** (semis dans le jalonnage).

## Réglages {#settings}

**« Settings »** (réglages) › **« Machine »**, section **« Tramline »** (jalonnage) — affichée uniquement sur les machines qui peuvent avoir un jalonnage.

![La section jalonnage des réglages de la machine.](figures/app-tramline-settings)

| Réglage | Ce qu'il fait |
| --- | --- |
| **« Tramline actuators »** (actionneurs de jalonnage) | Combien d'actionneurs de jalonnage la machine possède. |
| **« Tramline »** | Active ou désactive le jalonnage. |
| **« Tramline rhythm settings »** (réglages du rythme de jalonnage) | Le rythme : choisissez l'un des trois rythmes avec **« Select »** (sélectionner) — l'actif est repéré **« Active »** (actif) —, réglez son nombre de **« Bouts »** (passages) (1–50), et sous **« Tramline actuators activation »** (activation des actionneurs de jalonnage) les passages sur lesquels chaque actionneur ferme ses rangs (jusqu'à quatre par actionneur). **« Reset rhythm settings »** (réinitialiser le rythme) efface le rythme. |
| **« Actuators to sensors mapping »** (affectation des actionneurs aux capteurs) | Quels rangs chaque actionneur ferme — jusqu'à quatre plages de rangs par actionneur. |
| **« Tramline actuator »** n° 1, n° 2 … | Chaque actionneur : son état, **« Cutoff position »** (position de coupure) (**« Extended »** (sorti) ou **« Retracted »** (rentré)), **« Switch »** (commutation) (**« when seeding »** (au semis) ou **« always »** (toujours)), et **« Disable control »** (désactiver le contrôle) / **« Enable control »** (activer le contrôle). |
| **« Auto switching source »** (source de commutation automatique) | Le premier choix de la liste — le passage change tout seul : par les traceurs quand la machine en a, sinon à chaque relevage du semoir. |

Un actionneur retiré de la surveillance est virtuel : ses rangs se taisent selon le rythme, mais la passerelle ne le pilote pas.

Dans **« Settings »** › **« Products »** (produits), **« Max seeding in tramline,% »** (semis maximal dans le jalonnage, %) fixe ce qu'un rang du jalonnage peut semer avant **« Seeding in tramline »** (20 % de la dose sauf modification). [Réglages Products](settings-products.md)

## La vignette des passages et le menu des passages {#the-bout-tile-and-the-bout-menu}

Sur l'écran des rangs, la vignette **« Bout »** (passage) montre le passage en cours au-dessus du nombre de passages du rythme, par exemple « 2 / 4 », et le rythme. Son anneau est vert tant que le passage change tout seul et jaune sinon ; il devient rouge et clignote quand un actionneur est en alarme.

Touchez la vignette pour ouvrir le menu **« Tramline »** :

![Le menu des passages sur l'écran des rangs.](figures/app-tramline-bout-menu)

| Élément | Ce qu'il fait |
| --- | --- |
| **« Next bout »** (passage suivant) | Passe au passage suivant et ferme le menu. Proposé quand le passage ne peut pas changer tout seul. |
| **« Auto switching »** (commutation automatique) | Active ou désactive le changement automatique du passage. Proposé quand la machine peut le changer toute seule. |
| **« Active bout »** (passage actif) | Règle le passage avec **−** / **+**. Écrit à la fermeture du menu. |

**« Done »** (terminé) ferme le menu.

> **VOIR AUSSI**
>
> [4xx · Actionneurs de jalonnage](codes-4-tramline.md) · [Code 206](codes-2-seeding.md#c206) · [Couleurs des barres](bar-colours.md)
