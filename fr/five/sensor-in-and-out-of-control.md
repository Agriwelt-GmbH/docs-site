---
title: Mettre un capteur sous ou hors surveillance
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/sensor-in-and-out-of-control.html
---

# Mettre un capteur sous ou hors surveillance

Empêcher le panneau de surveiller un capteur — une section coupée, un capteur défectueux — et le remettre plus tard.

Un capteur **hors surveillance** n'est pas surveillé : le panneau ne déclenche aucune alarme à son sujet, quoi qu'il signale. Mettez un capteur hors surveillance quand sa section est volontairement hors travail ou quand le capteur est défectueux et que vous devez finir la parcelle. Remettez-le sous surveillance dès que possible.

## Mettre un capteur hors surveillance {#take-a-sensor-out-of-control}

::: steps
1. Sur l'écran d'accueil, **maintenez le doigt** sur le capteur — sa colonne sur le diagramme, ou son icône. Son menu contextuel s'ouvre.

   ![Le menu contextuel d'un capteur de graines.](figures/five-ctx-seed)

2. Touchez **« Disable control »** (désactiver la surveillance) pour le sélectionner, et touchez-le de nouveau.

3. La première fois dans une session, le panneau demande **« Are you sure that you want disable control? »** (êtes-vous sûr de vouloir désactiver la surveillance ?). Touchez **« Yes »** (oui). Un toucher en dehors de la fenêtre annule.

   ![La question avant la désactivation de la surveillance.](figures/five-question-disable-control)

4. La colonne devient blanche avec **!** (une icône alterne avec un [!] blanc). Le capteur n'est plus surveillé.
:::

## Le remettre sous surveillance {#take-it-back-into-control}

Procédez de même et choisissez **« Enable control »** (activer la surveillance). La première fois dans une session, le panneau demande **« Are you sure that you want enable control? »** (êtes-vous sûr de vouloir activer la surveillance ?) ; confirmez par **« Yes »**. Un capteur de graines remis sous surveillance affiche un **?** jaune pendant quelques secondes, le temps de recevoir ses réglages.

> **IMPORTANT**
>
> **Un capteur désactivé est aveugle, pas tranquille.** Rien à son sujet n'est signalé, aussi mal que cela tourne.

## Quand les statistiques doivent être effacées {#when-the-statistics-must-be-erased}

Pour certains capteurs, le panneau demande d'abord d'effacer les statistiques de la parcelle active : il affiche **« Need to erase data, for selected field! »** (il faut effacer les données de la parcelle sélectionnée !) et demande de nouveau.

- **« Yes »** efface les statistiques de la parcelle active et modifie la surveillance. Au niveau Operator, le panneau demande d'abord le code d'un niveau supérieur ; un code erroné affiche **« Invalid PIN »** (code invalide) et rien ne change.
- **« No »** (non) laisse les deux en l'état.

Le capteur de vitesse ne peut pas être mis hors surveillance — son menu contextuel n'a pas un tel élément. Les moteurs se mettent hors surveillance de la même façon, depuis leur tuile sur l'[écran Motors](motors-screen.md), ou avec les chevrons du [second écran d'accueil](second-home-screen.md). Ce que signifient les quatre combinaisons de surveillance et d'application du produit : [Les quatre états d'une section](section-states.md#the-four-states-of-a-section).
