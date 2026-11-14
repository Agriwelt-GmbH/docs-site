---
title: Trop de doubles ou de manques
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-seeding-quality.html
---

# Trop de doubles ou de manques

Que faire quand un capteur de graines de semoir monograine de précision compte plus de doubles ou de manques que la valeur admise.

Les doubles et les manques ne sont comptés qu'en mode de semis **« Precise »** (précis) — sur un semoir monograine de précision. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « High % of doubles » — part de doubles élevée {#high-of-doubles}

**Ce que cela signifie.** La part de doubles que compte le capteur est supérieure à la limite réglée.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée par le boîtier correspond à la vitesse réelle.
2. **« Doubles error,% »** (écart de doubles) dans les réglages du capteur de graines — la limite est-elle raisonnable ? Voir [Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md).
3. **« Fraction »** dans les réglages du capteur de graines. Il peut falloir **augmenter** la valeur.
4. L'état du capteur sur son écran d'état — voir [L'écran d'état du capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
5. Le doseur : est-il en état de marche et correctement réglé ?

## « High % of skips » — part de manques élevée {#high-of-skips}

**Ce que cela signifie.** La part de manques que compte le capteur est supérieure à la limite réglée.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée par le boîtier correspond à la vitesse réelle.
2. Il y a assez de semences dans les trémies.
3. **« Skips error,% »** (écart de manques) dans les réglages du capteur de graines — la limite est-elle raisonnable ?
4. **« Fraction »** dans les réglages du capteur de graines. Il peut falloir **réduire** la valeur.
5. L'état du capteur sur son écran d'état.
6. Le doseur : est-il en état de marche et correctement réglé ?
