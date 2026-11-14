---
title: Jalonnage : actionneur bloqué ou produit dans le jalonnage
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-tramline.html
---

# Jalonnage : actionneur bloqué ou produit dans le jalonnage

Que faire quand l'actionneur de jalonnage se bloque, que ses capteurs de position se contredisent ou qu'un tronçon fermé distribue encore du produit.

L'actionneur de jalonnage ferme les tronçons du passage de jalonnage. Deux capteurs de position de volet indiquent au boîtier où se trouve son obturateur. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Stall » — blocage {#stall}

**Ce que cela signifie.** L'actionneur de jalonnage s'est bloqué.

**À vérifier, dans cet ordre :**

1. Les capteurs de position de volet de l'actionneur sont en état de marche.
2. Le mécanisme de l'actionneur de jalonnage est en état de marche.

## « Illegal state » — état illicite {#illegal-state}

**Ce que cela signifie.** Les deux capteurs de position de volet se sont déclenchés en même temps. Avec une installation en bon état, c'est impossible.

**À vérifier :** les capteurs de position de volet sont en état de marche.

## « Seeding to tramline » — semis dans le jalonnage {#seeding-to-tramline}

**Ce que cela signifie.** Un tronçon qui devrait être fermé pour le jalonnage distribue encore trop de produit. Le capteur de graines, le capteur d'engrais solide ou le capteur d'engrais liquide de ce tronçon l'a mesuré en mode de contrôle du jalonnage.

**Capteur de graines ou capteur d'engrais solide — à vérifier, dans cet ordre :**

1. Le doseur et le mécanisme de coupure du flux sont en état de marche.
2. **« Tolerable sowing to tramline,% »** (semis toléré dans le jalonnage) dans les réglages du groupe de capteurs de tronçon. Il peut falloir **augmenter** la valeur. Voir [Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md).
3. **« Fraction »** dans les réglages du groupe du capteur qui alarme. Il peut falloir **augmenter** la valeur.
4. L'état du capteur sur son écran d'état — voir [L'écran d'état du capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).

**Capteur d'engrais liquide — à vérifier, dans cet ordre :**

1. Le doseur et le mécanisme de coupure du flux sont en état de marche.
2. **« Tolerable leak to tramline,% »** (fuite tolérée dans le jalonnage) dans les réglages du groupe de capteurs de tronçon. Il peut falloir **augmenter** la valeur. Voir [Engrais liquide](liquid-fertilizer.md).

> **VOIR AUSSI**
>
> Les tronçons qui appartiennent à chaque actionneur se règlent dans **« Actuators to sensors mapping »** (affectation des capteurs aux actionneurs) — [Paramètres du semoir](seeding-machine-parameters.md). Le rythme : [Rythme de jalonnage](tramline-rhythm.md).
