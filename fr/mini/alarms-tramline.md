---
title: Alarmes de jalonnage : Illegal state, Stall
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-tramline.html
---

# Alarmes de jalonnage : Illegal state, Stall

Que faire quand un actionneur de jalonnage du Hectare Mini signale les deux positions de fin de course à la fois, n'atteint pas sa position, ou quand de la semence passe dans une ligne coupée pour un jalonnage.

Un actionneur de jalonnage coupe les lignes de semis du jalonnage sur les passages que demande le rythme ([Passage de jalonnage suivant](next-tramline-bout.md)). La ligne d'appareil le désigne : **Tramline actuator: #1**.

## « Illegal state » — état illicite {#illegal-state}

**Ce que cela signifie.** L'actionneur signale les deux positions de fin de course en même temps — rentré et sorti. Ses contacteurs de fin de course se contredisent.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Les contacteurs de fin de course de l'actionneur et leur câblage.
2. De la terre ou de la glace qui retient un contacteur.
3. L'actionneur lui-même.

## « Stall » — blocage {#stall}

**Ce que cela signifie.** On a commandé un mouvement à l'actionneur, mais il n'a pas atteint la position demandée.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Le volet : bloqué par de la semence, de la terre ou une pièce tordue.
2. L'alimentation de l'actionneur.
3. Le contacteur de fin de course de la position demandée.
4. L'actionneur lui-même.

Sur son écran d'état, l'actionneur affiche **Status:** **« Pulled in »** (rentré), **« Pulled out »** (sorti), **« Working »** (en mouvement) pendant qu'il bouge, ou **« Unknown »** (inconnu) — [L'écran d'état d'un capteur](sensor-status-screen.md).

## « Seeding to tramline » — semis dans le jalonnage {#seeding-to-tramline}

Déclenchée par le capteur de graines d'une ligne qui devrait être coupée. Voir [Alarmes de semis](alarms-seeding.md#seeding-to-tramline).
