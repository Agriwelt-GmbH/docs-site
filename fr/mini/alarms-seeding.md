---
title: Alarmes de semis : dose, manques, doubles, NOT UNDER CONTROL
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-seeding.html
---

# Alarmes de semis : dose, manques, doubles, NOT UNDER CONTROL

Que faire quand une ligne de semence ou d'engrais du Hectare Mini sème trop peu ou trop, présente trop de manques ou de doubles, sème dans un jalonnage — ou quand le boîtier ne surveille rien du tout.

Ces alarmes viennent des capteurs de graines et des capteurs d'engrais. **La ligne d'appareil vous indique de quelle ligne il s'agit** — par exemple **Seed sensor: #4**. Les limites sont les réglages du groupe ([Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md)). Contrôlez toujours la vitesse en premier : une vitesse d'avancement erronée fausse toutes les doses au mètre.

## NOT UNDER CONTROL — semis non surveillé {#not-under-control}

**Ce que cela signifie.** Ce n'est pas une fenêtre d'alarme : le schéma de semis affiche **« NOT UNDER CONTROL »**. De la semence s'écoule, mais pas par assez de lignes pour remplir la condition de surveillance — moins de **« Percent of sowing,% »** (pourcentage de semis) des lignes de semis sèment dans la consigne. Tant que la condition n'est pas remplie, le boîtier ne surveille aucun défaut de semis.

**Ce qu'il faut contrôler, dans cet ordre :**

1. La vitesse du boîtier correspond à la vitesse réelle.
2. La dose de consigne — en mode **« Flow »** le seuil d'alarme — sur l'écran d'accueil : est-elle très supérieure à ce que la machine sème réellement ? — [Modifier la dose de consigne](set-the-target-rate.md).
3. **« Fraction »** des capteurs de graines — une valeur trop élevée masque les petites graines.
4. Assez de semence dans les trémies.

## « Under allowable rate » — dose inférieure à la dose admise {#under-allowable-rate}

**Ce que cela signifie.** Une ligne sème moins que ce qui est admis : en mode **« Flow »**, sous le seuil d'alarme ; en modes **« Hybrid »** et **« Precise »**, sous la consigne de plus de **« Rate error,% »** (écart de dose).

**Ce qu'il faut contrôler, dans cet ordre :**

1. La vitesse du boîtier correspond à la vitesse réelle.
2. Assez de semence dans les trémies.
3. Le doseur fonctionne et est correctement réglé.
4. **« Fraction »** des capteurs — il faut peut-être l'abaisser.
5. Le capteur lui-même — son état sur l'écran d'état ([L'écran d'état d'un capteur](sensor-status-screen.md#states-of-a-seed-or-fertilizer-sensor)).

## « Over allowable rate » — dose supérieure à la dose admise {#over-allowable-rate}

**Ce que cela signifie.** Une ligne sème plus que la consigne augmentée de **« Rate error,% »**. Uniquement en modes **« Hybrid »** et **« Precise »**.

**Ce qu'il faut contrôler, dans cet ordre :**

1. La vitesse du boîtier correspond à la vitesse réelle.
2. Le doseur fonctionne et est correctement réglé.
3. **« Fraction »** des capteurs — il faut peut-être l'augmenter.
4. Le capteur lui-même — son état sur l'écran d'état.

## « High % of doubles » — proportion de doubles trop élevée {#high-of-doubles}

**Ce que cela signifie.** La proportion de doubles sur le dernier tronçon dépasse **« Doubles error,% »** (écart de doubles). Uniquement en mode **« Precise »**, et seulement si ce réglage n'est pas sur **« No »**.

**Ce qu'il faut contrôler, dans cet ordre :**

1. La vitesse du boîtier correspond à la vitesse réelle.
2. **« Doubles error,% »** des capteurs de graines.
3. Le doseur : dépression, singulateur, disque adapté à la semence.
4. **« Fraction »** — il faut peut-être l'augmenter.
5. Le capteur lui-même — son état sur l'écran d'état.

## « High % of skips » — proportion de manques trop élevée {#high-of-skips}

**Ce que cela signifie.** La proportion de manques sur le dernier tronçon dépasse **« Skips error,% »** (écart de manques). Uniquement en mode **« Precise »**, et seulement si ce réglage n'est pas sur **« No »**.

**Ce qu'il faut contrôler, dans cet ordre :**

1. La vitesse du boîtier correspond à la vitesse réelle.
2. **« Skips error,% »** des capteurs de graines.
3. Assez de semence dans les trémies.
4. Le doseur : dépression, singulateur, disque adapté à la semence.
5. **« Fraction »** — il faut peut-être l'abaisser.
6. Le capteur lui-même — son état sur l'écran d'état.

## « Seeding to tramline » — semis dans le jalonnage {#seeding-to-tramline}

**Ce que cela signifie.** Une ligne qui devrait être coupée — dans un passage de jalonnage, ou avec **« Product application »** (application du produit) sur **« No »** — laisse passer plus de semence que **« Toler.sowing to tramline,% »** de la dose de consigne.

**Ce qu'il faut contrôler, dans cet ordre :**

1. L'actionneur de jalonnage de cette ligne coupe bien — voir [Alarmes de jalonnage](alarms-tramline.md).
2. Le réglage **« Relation of sensors to actuators »** — les bonnes lignes sont affectées à l'actionneur ([Paramètres du semoir](seeding-machine-parameters.md)).
3. **« Toler.sowing to tramline,% »**.

## « Old firmware! Wrong S&D calc! » — ancien micrologiciel {#old-firmware-wrong-sd-calc}

**Ce que cela signifie.** Un capteur d'engrais fonctionnant en mode **« Precise »** a un micrologiciel trop ancien pour compter correctement les manques et les doubles.

**Ce qu'il faut contrôler :** faites fonctionner les capteurs d'engrais en mode **« Flow »** ou **« Hybrid »**, ou faites remplacer ou mettre à jour le capteur par le service après-vente.
