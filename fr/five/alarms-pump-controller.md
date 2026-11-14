---
title: Pompe d'engrais liquide : alarmes de pression et de dose
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-pump-controller.html
---

# Pompe d'engrais liquide : alarmes de pression et de dose

Que faire quand le contrôleur de la pompe d'engrais liquide signale une pression trop forte, un capteur de pression en panne, ou une dose qu'il ne peut pas tenir.

Le contrôleur de pompe est construit sur la même électronique que le contrôleur d'un moteur de dosage. Outre les alarmes de cette page, il déclenche **les alarmes électriques du contrôleur de moteur de dosage** — **« Short circuit »**, **« Over current »**, **« Under voltage »**, **« Over voltage »**, **« Over temperature »**, **« FAILURE »** et **« Device in bootloader! »** — avec le même sens et les mêmes mesures : voir [Alarmes des moteurs de dosage](alarms-motor-controller.md). Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « High pressure » — pression élevée {#high-pressure}

**Ce que cela signifie.** La pression du liquide mesurée a atteint **« Max pressure, Bar »**.

**Que faire, dans cet ordre :**

1. Réduisez la vitesse d'avancement.
2. Dans les réglages du contrôleur de pompe, vérifiez **« Max pressure, Bar »** et, si la conduite le permet, augmentez-la — voir [Engrais liquide](liquid-fertilizer.md).

## « Pressure sensor failure! » — panne du capteur de pression {#pressure-sensor-failure}

**Ce que cela signifie.** Le signal du capteur de pression est tombé nettement sous sa plage de travail de 4–20 mA.

**À vérifier, dans cet ordre :**

1. La liaison du capteur avec le contrôleur — le câble et le connecteur sont intacts.
2. **« Pressure sensor »** dans les réglages du contrôleur de pompe désigne l'entrée sur laquelle le capteur est réellement câblé.
3. Le capteur est en état de marche. S'il est défaillant, remplacez-le.

L'écran d'état du contrôleur de pompe montre la pression et le signal brut du capteur en mA — voir [L'écran d'état d'un capteur](sensor-status-screen.md#what-each-kind-of-sensor-adds).

## « Rate low » — dose basse {#rate-low}

**Ce que cela signifie.** Le contrôleur de pompe ne peut pas atteindre la dose réglée : la dose réelle est inférieure à la consigne de plus de **« Product rate error,% »**.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée sur le panneau correspond à la vitesse réelle et est raisonnablement stable.
2. La charge de travail de la pompe. **Au-dessus de 90 % :** roulez plus lentement.
3. **Charge sous 90 %, ou qui saute fortement :** augmentez **« Product rate error,% »** dans le menu **« Settings »**, au niveau **« Agronomist »** — voir [Le menu Settings](settings-menu.md).
4. La pompe est en état de marche.

## « Rate high » — dose haute {#rate-high}

**Ce que cela signifie.** Le contrôleur de pompe applique plus que la dose réglée : la dose réelle dépasse la consigne de plus de **« Product rate error,% »**.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée sur le panneau correspond à la vitesse réelle et est raisonnablement stable.
2. La charge de travail de la pompe. **Sous 10 % :** roulez plus vite.
3. **Charge au-dessus de 10 %, ou qui saute fortement :** augmentez **« Product rate error,% »** dans le menu **« Settings »**.
4. La pompe est en état de marche.
