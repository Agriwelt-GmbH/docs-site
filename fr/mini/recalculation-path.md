---
title: Laisser le boîtier calculer la longueur de recalcul
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/recalculation-path.html
---

# Laisser le boîtier calculer la longueur de recalcul

Laissez le Hectare Mini déterminer le meilleur « Recalculation,m » pour les manques et les doubles à partir de la dose de consigne et des trous du disque — avec ou sans moteurs de doseur.

**« Recalculation,m »** (longueur de recalcul) des capteurs de graines est le tronçon sur lequel le boîtier recueille les manques, les doubles et la qualité avant de mettre à jour le schéma et le tableau de semis ([Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md)). Un tronçon qui couvre des tours entiers du disque de semis donne les valeurs les plus stables. Le boîtier peut le calculer à partir de la dose de consigne en graines par mètre et du nombre de trous du disque.

> **IMPORTANT**
>
> **Recalculez la longueur chaque fois que la dose de consigne a changé.** L'ancienne longueur ne correspond plus à des tours entiers du disque.

::: steps
1. Réglez d'abord la dose de consigne sur l'écran d'accueil — [Modifier la dose de consigne](set-the-target-rate.md). Le calcul utilise la consigne du mode **« Precise »**.

2. Ouvrez le menu contextuel de n'importe quel capteur de graines ([Réglages des capteurs](sensor-settings.md)), sélectionnez **« Recalculation,m »** et appuyez sur **« MENU »**.

3. **Avec des moteurs de doseur**, le boîtier demande si la dose et le nombre de trous sont réglés — **« Calculate path? »** (calculer la longueur ?). Appuyez sur **« PLUS »** pour **« Yes »** (oui). Il prend le nombre de trous dans **« Holes in disk »** (trous du disque) du moteur ([Le menu contextuel d'un moteur](motor-context-menu.md)).

   **Sans moteurs**, il vous rappelle d'abord que la dose de semis doit déjà être réglée ; fermez le message. Saisissez ensuite le nombre de trous du disque sur le clavier **« Holes in disk »** (de 1 à 500) et touchez **« OK »**.

4. Le boîtier calcule la longueur et la règle : le plus long tronçon de tours entiers du disque, dix au plus, qui tient dans 50 m, doublé tant qu'il est inférieur à 25 m.
:::

Si même un seul tour du disque dépasse 50 m, le boîtier affiche **« Calculated path to big. Maximum setuped. »** (longueur calculée trop grande, maximum réglé) et règle 50 m.

**« No »** (non) à l'étape 3, ou **« BACK »** sur le clavier, laisse la longueur inchangée. Vous pouvez toujours régler **« Recalculation,m »** à la main avec **« PLUS »** / **« MINUS »**, de 10 à 50 m.

Sans capteur de vitesse, la rubrique est **« Recalculation,sec »** et le tronçon est compté en secondes.
