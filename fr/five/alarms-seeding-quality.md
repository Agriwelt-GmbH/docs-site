---
title: Trop de doubles ou de manques
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-seeding-quality.html
---

# Trop de doubles ou de manques

Que faire quand un capteur de graines d'un semoir monograine compte plus de doubles ou de manques que permis.

Les doubles et les manques ne sont comptés qu'en mode de semis **« Precise »** — sur un semoir monograine. Chaque alarme n'est déclenchée que si sa limite est réglée : **« Doubles error,% »** et **« Skips error,% »** sur **« No »** la désactivent. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « High % of doubles » — pourcentage élevé de doubles {#high-of-doubles}

**Ce que cela signifie.** La part de doubles que compte le capteur dépasse **« Doubles error,% »**.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée sur le panneau correspond à la vitesse réelle.
2. **« Doubles error,% »** dans les réglages des capteurs de graines — la limite est-elle raisonnable ? Voir [Capteurs de graines et capteurs d'engrais solide](seed-and-fertilizer-sensors.md).
3. **« Fraction »** dans les réglages des capteurs de graines. Il faudra peut-être **augmenter** la valeur.
4. L'état du capteur sur son écran d'état — voir [L'écran d'état d'un capteur](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
5. Le doseur : est-il en état de marche, et correctement réglé ?

## « High % of skips » — pourcentage élevé de manques {#high-of-skips}

**Ce que cela signifie.** La part de manques que compte le capteur dépasse **« Skips error,% »**.

**À vérifier, dans cet ordre :**

1. La vitesse d'avancement affichée sur le panneau correspond à la vitesse réelle.
2. Il y a assez de semences dans les trémies.
3. **« Skips error,% »** dans les réglages des capteurs de graines — la limite est-elle raisonnable ?
4. **« Fraction »** dans les réglages des capteurs de graines. Il faudra peut-être **réduire** la valeur.
5. L'état du capteur sur son écran d'état.
6. Le doseur : est-il en état de marche, et correctement réglé ?

Le tronçon sur lequel les parts sont comptées est **« Recalculation,m »** des capteurs de graines. Aspect des manques et des doubles sur le diagramme : [Le diagramme des sections](section-diagram.md).
