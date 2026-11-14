---
title: Entrées du HUB-8 — les appareils de la machine
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/hub8-inputs.html
---

# Entrées du HUB-8 — les appareils de la machine

Indiquez à l'app quels appareils porte le HUB-8 — trémies, turbines, doseurs, entrées du tracteur, position de travail, débitmètre — quelle entrée chacun occupe, et comment chacun se règle et déclenche une alarme.

Le boîtier HUB-8 amène les autres appareils de la machine sur la ligne de capteurs. La passerelle ne fait que lire ses entrées ; ce qui est branché sur une entrée — un capteur de trémie, un capteur de turbine, la position de travail — n'est connu que de l'app. Vous indiquez donc à l'app ce qui se trouve sur la machine, et l'app détermine quelle entrée chaque appareil occupe.

Ouvrez **« Settings »** (réglages) › **« Machine »** › **HUB-8**. La page **« Devices »** (appareils) s'ouvre.

## Appareils de la machine {#devices-on-the-machine}

Sous **« Devices on the machine »** (appareils de la machine), réglez avec **−** / **+** combien d'appareils de chaque type la machine possède. Les limites : 2 turbines, 9 doseurs, 9 trémies, un seul de chacun des autres types ; doseurs, trémies et entrées du tracteur ensemble au plus 12. À une limite, **+** reste inactif.

## Quelle entrée occupe chaque appareil {#which-input-each-device-takes}

Les appareils occupent les entrées du HUB-8 dans un ordre fixe : capteur de vitesse → turbines → doseurs → trémies → entrées du tracteur → position de travail → débitmètre. Le premier appareil de cet ordre se raccorde à l'entrée 1, le suivant à l'entrée 2, et ainsi de suite. La liste **« HUB-8 inputs »** (entrées du HUB-8) montre chaque entrée avec son appareil et son état en direct.

> **IMPORTANT**
>
> **Ajouter un appareil décale les appareils qui suivent.** Ajoutez une trémie, et la position de travail passe à l'entrée suivante. Recâblez le HUB-8 d'après la nouvelle liste. Si la passerelle détient les appareils dans un autre ordre, la page indique **« Addresses in the bridge do not follow the ribbon »** (les adresses dans la passerelle ne suivent pas le ruban) ; touchez **« Lay out by the ribbon »** (ordonner selon le ruban).

Les traceurs ne sont pas sur le HUB-8 : ils sont raccordés au contrôleur de jalonnage. Activez-les dans la section des traceurs, en bas de la page.

La section **« Profile in the bridge »** (profil dans la passerelle) indique si la passerelle a pris la liste en compte.

## Les réglages de chaque appareil {#the-settings-of-each-device}

Touchez un appareil dans la liste (ou sa vignette sur l'écran des rangs) pour ouvrir sa page : son état et ses **« Parameters »** (paramètres).

| Appareil | Paramètres | Quand il déclenche une alarme |
| --- | --- | --- |
| **« Work position »** (position de travail) | **« Transport position signal »** (signal de position de transport) (0 ou 1), **« Alarm criterion »** (critère d'alarme) | L'état s'affiche **« Work »** (travail) ou **« Transport »** (transport). En position de transport — le semoir relevé, y compris pour le demi-tour en bout de champ — **« Under allowable rate »** (sous la dose admise), **« Not seeding »** (ne sème pas), une turbine lente et un doseur à l'arrêt restent muets. Les défauts des capteurs de graines retentissent aussi en position de transport. |
| **« Hopper »** (trémie) | **« Signal “empty” »** (signal *vide*) vaut 1 | Toujours, même machine à l'arrêt : **« Hopper empty »** (trémie vide). |
| **« Fan »** (turbine) | **« Pulses per revolution »** (impulsions par tour) (1–60), **« Min, rpm »** (min, tr/min) et **« Max, rpm »** (max, tr/min) (500–9000) | Trop rapide — toujours ; trop lente — seulement pendant le semis. |
| **« Metering unit »** (doseur) | **« Period, s »** (période, s) (1–60) | Ne tourne pas plus longtemps que la période pendant le semis : **« Dispenser not turning »** (doseur à l'arrêt). |
| **« Oil pressure »** (pression d'huile), **« Battery charge »** (charge de la batterie) | **« Alarm signal »** (signal d'alarme) (0 ou 1), **« Delay, s »** (délai, s) (1–30) | Le signal doit durer le délai. Avec une entrée d'allumage, seulement allumage mis. |
| **« Fuel »** (carburant), **« Air filter »** (filtre à air) | **« Alarm signal »**, **« Delay, s »** | Le signal doit durer le délai. |
| **« Ignition »** (allumage) | **« Signal “on” »** (signal *marche*) | Jamais — c'est un état dont dépendent la pression d'huile et la charge de la batterie. |
| **« Flowmeter »** (débitmètre) | **« Pulses per litre »** (impulsions par litre) (1–60000) | — Il affiche des litres par minute et les litres depuis le début. |
| **« Left marker »** (traceur gauche), **« Right marker »** (traceur droit) | **« Signal “lowered” »** (signal *abaissé*) | — Ils s'affichent **« Lowered »** (abaissé) ou **« Raised »** (relevé). |

Les états affichés dans la liste et sur les vignettes : **« no data »** (pas de données) — rien n'a encore été lu ; **« silent »** (muet) — l'entrée ne répond pas ; **« wrong device »** (mauvais appareil) — un autre type d'appareil répond. Les alarmes de ces appareils : [3xx · Trémie, turbine, doseur et entrées du tracteur](codes-3-machine-devices.md).

> **VOIR AUSSI**
>
> [La page Machine](machine-screen.md) · [Les vignettes du bas](bottom-tiles.md)
