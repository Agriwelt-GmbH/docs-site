---
title: Dose appliquée trop faible, trop élevée ou hors surveillance
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-rate.html
---

# Dose appliquée trop faible, trop élevée ou hors surveillance

Que faire quand les capteurs de graines, d'engrais solide ou d'engrais liquide signalent une dose inférieure ou supérieure à la plage admise, ou trop peu de produit pour démarrer la surveillance.

Les capteurs de tronçon — graines, engrais solide et engrais liquide — comparent la dose qu'ils mesurent avec la consigne. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

> **CONSEIL**
>
> **Vérifiez d'abord la vitesse d'avancement.** Toutes les doses du boîtier sont calculées d'après la distance parcourue. Si la vitesse affichée est fausse, toutes les doses sont fausses de la même proportion, et les capteurs n'y sont pour rien.

## « Not under control! » / « Check seeding rate » — hors surveillance ! / vérifiez la dose de semis {#not-under-control-check-seeding-rate}

**Ce que cela signifie.** Sur le nombre réglé de capteurs de tronçon, la dose de produit est inférieure au minimum dont le boîtier a besoin pour commencer à surveiller l'application.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée par le boîtier correspond à la vitesse réelle.
2. La dose de consigne, ou la dose minimale d'alarme — l'une ou l'autre selon le mode de surveillance du groupe de tronçons.
3. Il y a assez de produit dans les trémies ou dans la cuve.
4. Capteur de graines ou d'engrais solide : **« Fraction »** dans ses réglages. Il peut falloir **réduire** la valeur. Voir [Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md).
5. Capteur d'engrais liquide : **« Pulses per liter »** (impulsions par litre) dans ses réglages. Il peut falloir **réduire** la valeur. Voir [Engrais liquide](liquid-fertilizer.md).
6. Le doseur : est-il en état de marche et correctement réglé ?

## « Under allowable rate » — dose inférieure à la valeur admise {#under-allowable-rate}

**Ce que cela signifie.** Un capteur de tronçon — graines, engrais solide ou engrais liquide — a mesuré trop peu de produit pendant le travail.

**À vérifier, dans cet ordre :**

1. Il y a assez de produit dans les trémies ou dans la cuve.
2. La vitesse d'avancement affichée par le boîtier correspond à la vitesse réelle.
3. Capteur de graines ou d'engrais solide : **« Fraction »**. Il peut falloir **réduire** la valeur.
4. Capteur d'engrais liquide : **« Pulses per liter »**. Il peut falloir **réduire** la valeur.
5. Capteur de graines : son état sur l'écran d'état (**« Information »** dans son menu contextuel) — voir [L'écran d'état du capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
6. Le doseur : est-il en état de marche et correctement réglé ?

## « Over allowable rate » — dose supérieure à la valeur admise {#over-allowable-rate}

**Ce que cela signifie.** Un capteur de tronçon — graines, engrais solide ou engrais liquide — a mesuré trop de produit pendant le travail.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée par le boîtier correspond à la vitesse réelle.
2. Capteur de graines ou d'engrais solide : **« Fraction »**. Il peut falloir **augmenter** la valeur.
3. Capteur d'engrais liquide : **« Pulses per liter »**. Il peut falloir **augmenter** la valeur.
4. Capteur de graines : son état sur l'écran d'état.
5. Le doseur : est-il en état de marche et correctement réglé ?

> **VOIR AUSSI**
>
> L'écart que la dose peut avoir par rapport à la consigne avant ces alarmes est fixé par **« Rate error,% »** du groupe de capteurs — [Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md), [Engrais liquide](liquid-fertilizer.md). Les colonnes situées sous la ligne de contrôle de l'écran d'accueil ne sont pas surveillées — [Modifier la dose de consigne](set-the-target-rate.md).
