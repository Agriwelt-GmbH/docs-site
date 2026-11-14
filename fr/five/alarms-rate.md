---
title: Dose appliquée trop basse ou trop haute
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-rate.html
---

# Dose appliquée trop basse ou trop haute

Que faire quand les capteurs de graines, d'engrais solide ou d'engrais liquide signalent une dose sous ou au-dessus de la plage permise, et ce que signifie NOT UNDER CONTROL.

Les capteurs de section — graines, engrais solide et engrais liquide — comparent la dose qu'ils mesurent à la consigne. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

| **Mode du groupe** | **« Under allowable rate »** | **« Over allowable rate »** |
| --- | --- | --- |
| **« Flow »** | Le débit tombe sous le seuil d'alarme — la ligne de contrôle du diagramme. | Non déclenchée. |
| **« Hybrid »**, **« Precise »** | La dose tombe sous la consigne de plus de **« Rate error,% »**. | La dose dépasse la consigne de plus de **« Rate error,% »**. |

> **CONSEIL**
>
> **Vérifiez d'abord la vitesse d'avancement.** Toute dose par mètre ou par hectare est calculée à partir de la distance parcourue. Si la vitesse affichée à l'écran est fausse, toutes les doses sont fausses de la même proportion, et les capteurs n'y sont pour rien.

## « Under allowable rate » — dose inférieure à la dose admise {#under-allowable-rate}

**Ce que cela signifie.** Un capteur de section — graines, engrais solide ou engrais liquide — a mesuré trop peu de produit pendant le travail.

**À vérifier, dans cet ordre :**

1. Il y a assez de produit dans les trémies ou dans la cuve.
2. La vitesse d'avancement affichée sur le panneau correspond à la vitesse réelle.
3. Capteur de graines ou d'engrais solide : **« Fraction »**. Il faudra peut-être **réduire** la valeur. Voir [Capteurs de graines et capteurs d'engrais solide](seed-and-fertilizer-sensors.md).
4. Capteur d'engrais liquide : **« Pulses per liter »**. Il faudra peut-être **réduire** la valeur. Voir [Engrais liquide](liquid-fertilizer.md).
5. Capteur de graines : son état sur l'écran d'état (**« Information »** dans son menu contextuel) — voir [L'écran d'état d'un capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
6. Le doseur : est-il en état de marche, et correctement réglé ?

## « Over allowable rate » — dose supérieure à la dose admise {#over-allowable-rate}

**Ce que cela signifie.** Un capteur de section — graines, engrais solide ou engrais liquide — a mesuré trop de produit pendant le travail.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée sur le panneau correspond à la vitesse réelle.
2. Capteur de graines ou d'engrais solide : **« Fraction »**. Il faudra peut-être **augmenter** la valeur.
3. Capteur d'engrais liquide : **« Pulses per liter »**. Il faudra peut-être **augmenter** la valeur.
4. Capteur de graines : son état sur l'écran d'état.
5. Le doseur : est-il en état de marche, et correctement réglé ?

## « NOT UNDER CONTROL » — hors surveillance, sans fenêtre {#not-under-control-no-window}

Quand des rangs passent sous la ligne de contrôle, l'écran d'accueil affiche **« NOT UNDER CONTROL »** en rouge et, au niveau **« Operator »**, le son d'alarme retentit — mais aucune fenêtre d'alarme ne s'ouvre. Les rangs sous la ligne ne sont pas gardés.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée sur le panneau correspond à la vitesse réelle.
2. Le seuil d'alarme du diagramme : est-il au-dessus de la dose que la machine applique réellement ? Abaissez-le, ou laissez le panneau le régler — [Régler le seuil d'alarme](set-the-alarm-level.md).
3. Il y a assez de produit dans les trémies ou dans la cuve.
4. **« Fraction »** des capteurs de graines ou d'engrais, ou **« Pulses per liter »** des capteurs de liquide — il faudra peut-être **réduire** la valeur.
5. Le doseur : est-il en état de marche, et correctement réglé ?

Ce que signifie la ligne : [Le diagramme des sections](section-diagram.md#the-line-rows-under-it-are-not-under-control).
