---
title: Mettre un capteur sous ou hors surveillance
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/sensor-in-and-out-of-control.html
---

# Mettre un capteur sous ou hors surveillance

Empêcher le panneau de surveiller un capteur — une section coupée, un capteur défectueux — et le remettre sous surveillance plus tard.

Un capteur **hors surveillance** n'est pas surveillé : le panneau ne déclenche aucune alarme à son sujet, quoi qu'il signale. Mettez un capteur hors surveillance lorsque sa section est volontairement hors travail ou lorsque le capteur est défectueux et que vous devez finir le champ. Remettez-le sous surveillance dès que possible.

## Mettre un capteur hors surveillance {#take-a-sensor-out-of-control}

::: steps
1. Sur l'écran d'accueil, **touchez et maintenez** le capteur — sa colonne sur le diagramme, ou son icône. Son menu contextuel s'ouvre.

   ![Le menu contextuel d'un capteur de graines.](figures/one-ctx-seed-sensor)

2. Sélectionnez **« Disable control »** (désactiver la surveillance) avec **« UP »** / **« DOWN »** et appuyez sur **« MENU »**, ou touchez l'élément.

3. Le panneau demande **« Are you sure that you want disable control? »** (voulez-vous vraiment désactiver la surveillance ?). Touchez **« Yes »** (oui), ou appuyez sur **« PLUS »**.

   ![La confirmation avant la désactivation de la surveillance.](figures/one-question-disable-control)

4. La colonne devient blanche avec **!** (une icône alterne avec un [!] blanc). Le capteur n'est plus surveillé.
:::

## Le remettre sous surveillance {#take-it-back-into-control}

Procédez de la même façon et choisissez **« Enable control »** (activer la surveillance). Le panneau demande **« Are you sure that you want enable control? »** (voulez-vous vraiment activer la surveillance ?) ; confirmez par **« Yes »**. Un capteur de graines remis sous surveillance affiche un **?** jaune pendant quelques secondes, le temps de recevoir ses réglages.

> **IMPORTANT**
>
> **Un capteur désactivé est aveugle, pas silencieux.** Rien à son sujet n'est signalé, quelle que soit la gravité de la panne.

## Quand les statistiques doivent être effacées {#when-the-statistics-must-be-erased}

Pour certains capteurs, le panneau demande d'abord d'effacer les statistiques du champ actif : il affiche **« Data for the selected field must be erased! »** (les données du champ sélectionné doivent être effacées !) et pose de nouveau la question. **« Yes »** efface les statistiques du champ actif — au niveau Operator seulement après le code de l'agronome — et change la surveillance ; **« No »** laisse les deux inchangées.

Le capteur de vitesse ne peut pas être mis hors surveillance. Les moteurs se mettent hors surveillance de la même façon, depuis leur vignette de l'[écran Motors](motors-screen.md) ou avec les chevrons du [deuxième écran d'accueil](second-home-screen.md). Ce que signifient les quatre combinaisons de surveillance et d'application du produit : [Les quatre états d'une section](section-states.md#the-four-states-of-a-section).
