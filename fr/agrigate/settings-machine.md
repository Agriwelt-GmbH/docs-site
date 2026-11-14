---
title: Réglages — Machine
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/settings-machine.html
---

# Réglages — Machine

Le profil de machine, la largeur de travail, la numérotation des capteurs, les appareils du HUB-8, le jalonnage et la passerelle — ce que contient chaque section du groupe Machine.

**« Settings »** (réglages) › **« Machine »** regroupe tout ce que l'app et la passerelle doivent savoir du semoir. La page **« Machine »** de l'anneau y mène avec **« Open in Settings »** (ouvrir dans les réglages).

| Section | Ce qu'elle contient | Où c'est expliqué |
| --- | --- | --- |
| **« Machine profile »** (profil de machine) | **« Rows »** (rangs), **« Fertilizer sensors »** (capteurs d'engrais), **« Sensors on the bus now »** (capteurs sur la ligne en ce moment), la ligne d'état du profil dans la passerelle ; en Hybrid et Precision **« Width, cm »** (largeur, cm) et **« Row spacing »** (écartement des rangs) ; le bouton **« Number the sensors »** (numéroter les capteurs). | [Régler le profil de machine](machine-profile.md) · [Numéroter les capteurs](sensor-numbering.md) |
| **« Devices »** (appareils) | **HUB-8** — les appareils de la machine et les entrées qu'ils occupent ; **« Default slots »** (emplacements par défaut) — remet les valeurs par défaut dans les vignettes du bas. | [Entrées du HUB-8](hub8-inputs.md) · [Les vignettes du bas](bottom-tiles.md) |
| **« Tramline »** (jalonnage) | Le nombre d'actionneurs de jalonnage, l'interrupteur **« Tramline »**, le rythme, l'affectation des actionneurs aux rangs et chaque actionneur. Affichée uniquement sur les machines qui peuvent avoir un jalonnage. | [Jalonnage](tramline.md) |
| **« Bridge »** (passerelle) | La liaison et son signal, **« My bridge »** (ma passerelle), **« Reconnect »** (reconnecter), **« Forget bridge »** (oublier la passerelle), **« Bridge firmware »** (micrologiciel de la passerelle), **« Hardware revision »** (révision matérielle), **« Bridge update »** (mise à jour de la passerelle) et les compteurs de la liaison ; en Hybrid et Precision aussi **« GNSS speed »** (vitesse GNSS) avec son âge en secondes. | [Première connexion à la passerelle](first-connection.md) · [Mettre à jour la passerelle](bridge-update.md) |

## La ligne d'état du profil {#the-profile-status-line}

Sous les nombres du profil, une ligne indique ce que la passerelle en a fait :

| La ligne indique | Signification |
| --- | --- |
| **« profile read from the bridge at »** (profil lu depuis la passerelle à) et une heure | L'app a lu le profil dans la passerelle à la connexion. |
| **« writing the profile to the bridge… »** (écriture du profil dans la passerelle) | Une modification est en route. |
| **« profile written to the bridge at »** (profil écrit dans la passerelle à) et une heure | La passerelle a pris la modification en compte. |
| **« profile not yet read from the bridge »** (profil pas encore lu depuis la passerelle) | Rien n'a été lu depuis le démarrage de l'app. |
| Un message avec un code | La passerelle a refusé. Voir [9xx · Réponses de la passerelle au réglage](codes-9-setup.md). |

## Vitesse GNSS {#gnss-speed}

**« GNSS speed »** affiche la vitesse fournie par l'iPad et son âge en secondes, par exemple « 10.0 km/h · 0 s ». Quand il n'y a pas de vitesse récente, elle affiche **« no speed »** (pas de vitesse) en orange. [Code 703](codes-7-tablet.md#c703)

> **VOIR AUSSI**
>
> [Réglages](settings.md) · [La page Machine](machine-screen.md)
