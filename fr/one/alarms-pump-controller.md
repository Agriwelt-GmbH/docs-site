---
title: Pompe d'engrais liquide : alarmes de pression et de dose
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-pump-controller.html
---

# Pompe d'engrais liquide : alarmes de pression et de dose

Que faire quand le contrôleur de pompe d'engrais liquide signale une pression trop élevée, une panne du capteur de pression, ou une dose qu'il ne parvient pas à tenir.

Le contrôleur de pompe repose sur la même électronique que le contrôleur d'un moteur de dosage. Outre les alarmes de cette page, il déclenche **toutes les alarmes électriques du contrôleur de moteur de dosage** — **« Short circuit »**, **« Over current »**, **« Under voltage »**, **« Over voltage »**, **« Over temperature »**, **« FAILURE »** et **« Device in bootloader! »** — avec la même signification et les mêmes mesures à prendre : voir [Alarmes des moteurs de dosage](alarms-motor-controller.md). Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « High pressure » — pression trop élevée {#high-pressure}

**Ce que cela signifie.** La pression mesurée du liquide est supérieure à la valeur admise.

**Que faire, dans cet ordre :**

1. Réduisez la vitesse d'avancement.
2. Dans les réglages du contrôleur de pompe, augmentez **« Max pressure, Bar »** (pression maximale) — voir [Engrais liquide](liquid-fertilizer.md).

## « Pressure sensor failure! » — panne du capteur de pression {#pressure-sensor-failure}

**Ce que cela signifie.** Le signal du capteur de pression est sorti largement de sa plage de travail de 4 à 20 mA.

**À vérifier, dans cet ordre :**

1. La liaison du capteur avec le contrôleur — le câble et le connecteur sont intacts.
2. Le capteur est en état de marche. S'il est en panne, remplacez-le.

L'écran d'état du contrôleur de pompe affiche la pression et le signal brut du capteur en mA — voir [L'écran d'état du capteur](sensor-status-screen.md#what-each-kind-of-sensor-adds).

## « Rate low » — dose trop faible {#rate-low}

**Ce que cela signifie.** Le contrôleur de pompe ne parvient pas à atteindre la dose réglée.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée par le boîtier correspond à la vitesse réelle et est raisonnablement constante.
2. La charge de travail de la pompe. **Au-dessus de 90 % :** roulez plus lentement.
3. **Charge inférieure à 90 %, ou fortement fluctuante :** augmentez **« Product rate error,% »** (écart de dose du produit) dans le menu **« Settings »** (réglages) — voir [Le menu Settings](settings-menu.md).
4. La pompe est en état de marche.

## « Rate high » — dose trop élevée {#rate-high}

**Ce que cela signifie.** Le contrôleur de pompe applique plus que la dose réglée.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée par le boîtier correspond à la vitesse réelle et est raisonnablement constante.
2. La charge de travail de la pompe. **En dessous de 10 % :** roulez plus vite.
3. **Charge supérieure à 10 %, ou fortement fluctuante :** augmentez **« Product rate error,% »** dans le menu **« Settings »**.
4. La pompe est en état de marche.
