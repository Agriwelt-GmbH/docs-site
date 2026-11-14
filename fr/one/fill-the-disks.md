---
title: Remplir les disques de semences
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/fill-the-disks.html
---

# Remplir les disques de semences

Faire tourner les disques à graines d'un semoir monograine à moteurs de doseur jusqu'à ce que chaque disque contienne des graines, pour que le semis commence dès le premier mètre — comment lancer l'opération et lire le résultat.

Cela ne concerne que les semoirs monograines dotés de **moteurs électriques de doseur** de semences, en mode de contrôle **« Precise »** (précis). Sans moteurs dans le profil, ou dans un autre mode, l'élément de menu n'est pas affiché.

Lorsque les disques sont entraînés par des moteurs électriques, ils restent vides tant que les moteurs ne tournent pas. Si vous partez avec des disques vides, les premiers mètres de chaque rang ne reçoivent rien : chaque disque doit d'abord prélever des graines et les amener jusqu'au point de chute. Le remplissage fait tourner les disques machine à l'arrêt, pour que le semis commence dès le premier mètre.

> **AVERTISSEMENT**
>
> **Les disques tournent machine à l'arrêt.** Avant de commencer, assurez-vous que personne ne se trouve près des doseurs, des arbres de doseur ou de l'entraînement. Tous les disques démarrent en même temps et tournent jusqu'à vingt secondes environ. Depuis la cabine, les doseurs ne se voient pas.

::: steps
1. Arrêtez la machine. L'élément n'est affiché que **machine à l'arrêt**.

2. Sur l'écran d'accueil, appuyez sur **« MENU »**. Sélectionnez **« Fill the disks with seeds »** (remplir les disques de semences) et appuyez sur **« MENU »**.

   ![Le menu principal avec Fill the disks with seeds sélectionné.](figures/menu-main)

3. Le panneau demande **« Are you sure? »** (êtes-vous sûr ?). Touchez **« Yes »** (oui), ou appuyez sur **« PLUS »**. **« No »** (non), **« MINUS »** ou **« BACK »** annule.

   ![La confirmation avant la rotation des disques.](figures/one-fill-01-confirm)

4. Observez les vignettes. Chaque moteur fait tourner son disque jusqu'à ce que le capteur de graines de son rang enregistre la première graine. À la fin, le panneau émet trois bips et affiche **« Operation complete. »** (opération terminée).

5. Touchez **« Close »** (fermer), ou appuyez sur **« BACK »**, pour revenir à l'écran d'accueil.
:::

Pour arrêter avant la fin, touchez **« Cancel »** (annuler) ou appuyez sur **« BACK »** : les moteurs s'arrêtent aussitôt et leur commande repasse à la logique de semis.

## Lire l'écran {#reading-the-screen}

::: {.anatomy fig="one-fill-02-screen"}
1. **Vignette verte.** Terminé : le capteur de graines a enregistré une graine, le disque est rempli.
2. **Vignette rouge foncé.** Échec : le disque n'a pas pu être rempli. Le numéro du moteur est en rouge vif.
3. **Lettres de cause.** Pourquoi la vignette est en échec — voir le tableau ci-dessous. Ici **m g**.
4. **« Operation complete. »** Tous les moteurs ont terminé.
5. **« Close »**. Revient à l'écran d'accueil. Pendant l'opération, ce bouton indique **« Cancel »**.

La fin de l'opération sur un semoir monograine à huit moteurs : moteur 1 rempli, moteurs 2 à 8 en échec.
:::

| **Vignette** | **État** |
| --- | --- |
| Gris foncé | Attend son tour. Jusqu'à huit moteurs tournent en même temps ; les autres attendent. |
| Jaune | En cours : le disque tourne. |
| Verte | Terminé. |
| Rouge foncé | Échec. |

Chaque moteur fait tourner son disque à **4 tr/min de l'arbre entraîné**. Si aucune graine n'est enregistrée en **1,25 tour — environ 19 secondes** — ce moteur est arrêté et marqué en échec. Un moteur déjà en état d'alarme est marqué en échec aussitôt.

## Lettres sur une vignette en échec {#letters-on-a-failed-tile}

La couleur de la lettre compte autant que la lettre : **rouge signifie un défaut, blanc signifie mis hors surveillance.**

![Une vignette en échec, en gros plan.](figures/one-fill-tile-red)

| **Lettre** | **Signification** |
| --- | --- |
| **m** rouge | Un défaut du moteur électrique de doseur pendant l'opération. |
| **m** blanc | Le moteur est mis hors surveillance et ne peut pas tourner. |
| **g** rouge | Le capteur de graines n'a enregistré aucune graine pendant que le disque tournait. |
| **s** rouge | Un défaut du capteur de graines pendant l'opération. |
| **s** blanc | Le capteur de graines est mis hors surveillance. |

Si le **capteur de graines** est hors surveillance, le panneau ne peut pas contrôler le disque. Un moteur en état de marche le fait tout de même tourner pendant environ un tour et quart ; en pratique le disque se remplit donc — mais le panneau signale ce moteur en échec, car il n'a jamais vu de graine.
