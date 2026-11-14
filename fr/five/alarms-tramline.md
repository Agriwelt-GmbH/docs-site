---
title: Jalonnage : actionneur bloqué ou produit dans le jalonnage
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-tramline.html
---

# Jalonnage : actionneur bloqué ou produit dans le jalonnage

Que faire quand l'actionneur de jalonnage se bloque, que ses capteurs de position se contredisent, ou qu'une section coupée délivre encore du produit.

L'actionneur de jalonnage coupe les sections du passage de jalonnage. Deux capteurs de position de la vanne indiquent au panneau où se trouve son obturateur. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Stall » — blocage {#stall}

**Ce que cela signifie.** L'actionneur de jalonnage s'est bloqué.

**À vérifier, dans cet ordre :**

1. Les capteurs de position de la vanne de l'actionneur sont en état de marche.
2. Le mécanisme de l'actionneur de jalonnage est en état de marche.

## « Illegal state » — état impossible {#illegal-state}

**Ce que cela signifie.** L'actionneur signale une position impossible : les deux capteurs de position de la vanne se sont déclenchés en même temps. Avec une installation en bon état, cela ne peut pas arriver.

**À vérifier :** les capteurs de position de la vanne sont en état de marche.

## « Seeding to tramline » — semis dans le jalonnage {#seeding-to-tramline}

**Ce que cela signifie.** Une section qui devrait être coupée pour le jalonnage délivre encore trop de produit. Le capteur de graines, le capteur d'engrais solide ou le capteur d'engrais liquide de cette section l'a mesuré en mode de surveillance du jalonnage.

**Capteur de graines ou capteur d'engrais solide — à vérifier, dans cet ordre :**

1. Le doseur et le mécanisme de coupure du flux sont en état de marche.
2. **« Toler.sowing to tramline,% »** dans les réglages du groupe de capteurs de section. Il faudra peut-être **augmenter** la valeur. Voir [Capteurs de graines et capteurs d'engrais solide](seed-and-fertilizer-sensors.md).
3. **« Fraction »** dans les réglages du groupe du capteur en alarme. Il faudra peut-être **augmenter** la valeur.
4. L'état du capteur sur son écran d'état — voir [L'écran d'état d'un capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).

**Capteur d'engrais liquide — à vérifier, dans cet ordre :**

1. Le doseur et le mécanisme de coupure du flux sont en état de marche.
2. **« Tolerable leak to tramline,% »** dans les réglages du groupe de capteurs de section. Il faudra peut-être **augmenter** la valeur. Voir [Engrais liquide](liquid-fertilizer.md).

Un capteur dont **« Product application »** est réglé sur **« No »** est surveillé de la même façon — comme un rang coupé.

> **VOIR AUSSI**
>
> Les sections qui appartiennent à tel actionneur se règlent dans **« Relation of sensors to actuators »** — [Paramètres du semoir](seeding-machine-parameters.md#relation-of-sensors-to-actuators). Le rythme : [Régler le rythme de jalonnage](tramline-rhythm.md).
