---
title: Mettre un capteur sous ou hors surveillance
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/sensor-in-and-out-of-control.html
---

# Mettre un capteur sous ou hors surveillance

Couper et rétablir la surveillance d'un seul capteur, moteur ou actionneur avec le mode de réglage des capteurs — ce que demande le panneau, et quand il veut que les statistiques soient effacées.

Un capteur mis **hors surveillance** n'est plus surveillé : il ne déclenche plus d'alarme, et son indicateur affiche le signe clignotant de capteur hors surveillance. Ne le faites que pour continuer à travailler avec un capteur défectueux jusqu'à sa réparation — et remettez-le ensuite sous surveillance.

> **IMPORTANT**
>
> **Un capteur hors surveillance est aveugle, pas tranquille.** Plus rien n'est surveillé sur ce rang ou cet appareil. Un moteur hors surveillance n'est pas non plus entraîné : son rang n'est pas semé.

::: steps
1. Sur l'écran d'accueil, maintenez **« MENU »** jusqu'à ce qu'un appareil s'affiche sur fond blanc. Le panneau est maintenant en mode de réglage des capteurs.

   ![L'écran d'accueil en mode de réglage des capteurs, indicateur de vitesse sélectionné.](figures/sensor-mode-enter)

2. Sélectionnez le capteur avec **« UP »** et **« DOWN »**. Dans un diagramme, la colonne sélectionnée prend un fond gris et un numéro blanc.

3. Appuyez sur **« MINUS »** pour le mettre hors surveillance, ou sur **« PLUS »** pour le remettre sous surveillance.

4. Le panneau demande si vous êtes sûr. Appuyez sur **« MENU »** pour **« Yes »** (oui), ou sur **« BACK »** pour **« No »** (non) ; le **« Yes »** vert et le **« No »** rouge de l'écran peuvent aussi être touchés.

   ![La question avant la coupure de la surveillance d'un capteur.](figures/confirm-window)

5. Appuyez sur **« BACK »** pour quitter le mode de réglage des capteurs.
:::

La question n'est posée que la **première** fois tant que vous restez en mode de réglage des capteurs. Ensuite, **« PLUS »** et **« MINUS »** agissent sans demander sur chaque capteur suivant, de sorte qu'on peut commuter rapidement toute une rangée de capteurs. Une fois le mode quitté, le panneau pose de nouveau la question.

Cela fonctionne de même sur l'écran de régulation de dose (maintenez **« MENU »**) et, pour les moteurs et les actionneurs de jalonnage, sur l'[écran Motors](motors-screen.md). La surveillance du capteur de vitesse ne peut pas être coupée.

## Quand les statistiques doivent être effacées {#when-the-statistics-must-be-erased}

Si la parcelle active contient déjà des données et que la modification change l'ensemble des produits appliqués — possible avec des moteurs en modes **« Flow »** (débit) et **« Hybrid »** (hybride) — le panneau demande d'abord d'**effacer les statistiques de la parcelle active**. **« Yes »** les efface définitivement ; au niveau Operator, il demande aussi le code d'un niveau d'accès supérieur. Pour conserver les données, sélectionnez d'abord une parcelle vide — voir [Commencer une nouvelle parcelle](start-a-new-field.md).

## Ce que propose le menu contextuel {#what-the-context-menu-offers}

En mode de réglage des capteurs, **« MENU »** ouvre le menu contextuel de l'appareil sélectionné : son écran d'information et ses paramètres, selon le niveau d'accès. Les paramètres de chaque capteur figurent dans [Réglages des capteurs](sensor-settings.md).
