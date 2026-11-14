---
title: Menus, menus contextuels, pavé numérique et fenêtres
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/interface-basics.html
---

# Menus, menus contextuels, pavé numérique et fenêtres

Les cinq éléments par lesquels tout se fait sur le panneau — écrans de travail, menu principal, menu contextuel d'un appareil, pavé numérique, et fenêtres qui interrogent ou informent.

Tout se passe sur le panneau par cinq éléments : les **écrans de travail**, le **menu principal**, le **menu contextuel** d'un appareil, le **pavé numérique** et les **fenêtres** qui vous posent une question ou vous informent. Les écrans de travail ont leur propre rubrique : [Écrans de travail](working-screens.md).

## Le menu principal {#the-main-menu}

Appuyez sur **« MENU »** sur l'écran d'accueil, ou touchez l'écran avec deux doigts. Le menu principal s'ouvre par-dessus l'écran d'accueil.

::: {.anatomy fig="menu-main"}
1. **Élément sélectionné.** Texte noir sur une bande bleu clair. **« UP »** et **« DOWN »** déplacent la bande ; **« MENU »** entre dans l'élément. Ici **« Fill the disks with seeds »** (remplir les disques de semences) — voir [Remplir les disques](fill-the-disks.md).
2. **« Settings »** (réglages). Les réglages du système et de la machine. Voir [Le menu Settings](settings-menu.md).
3. **Pointe de flèche.** L'élément ouvre un autre menu.
4. **« Service »** (maintenance). Éléments de mise en service et de maintenance. Voir [Menu Service](service-menu.md).
5. **« Information »** (informations). Ouvre l'écran d'informations sur le système.

Le menu principal d'un semoir monograine à moteurs de doseur en mode « Precise », à l'arrêt.
:::

Dans tous les menus, un élément se lit d'après ce qui figure à sa droite :

| **Ce que vous voyez à droite** | **Ce que cela signifie** |
| --- | --- |
| Une pointe de flèche | L'élément ouvre un autre menu. Appuyez sur **« MENU »**. |
| Une valeur entre **-** et **+** | Modifiez-la avec **« PLUS »** et **« MINUS »**, directement dans la liste. |
| Une valeur entre **-[** et **]+** | **« PLUS »** ou **« MINUS »** ouvre le pavé numérique. |
| Rien | L'élément exécute une action. Appuyez sur **« MENU »**. |

![Une page de menu avec des valeurs : l'année se saisit sur le pavé numérique, les autres valeurs dans la liste.](figures/menu-datetime)

**« BACK »** quitte un menu et remonte d'un niveau.

## Le menu contextuel d'un appareil {#the-context-menu-of-a-device}

Chaque capteur, moteur et indicateur de l'écran d'accueil a son propre menu. **Touchez et maintenez l'appareil** — son icône ou sa colonne sur le diagramme — et son menu contextuel s'ouvre. Sur l'écran Motors et sur le deuxième écran d'accueil, la même action fonctionne sur la vignette d'un moteur.

![Le menu contextuel d'un capteur de graines : informations, surveillance activée ou désactivée, et paramètres du capteur.](figures/one-ctx-seed-sensor)

Le premier élément, **« Information »**, ouvre l'[écran d'état](sensor-status-screen.md) de l'appareil. Le deuxième commute sa surveillance : **« Disable control »** (désactiver la surveillance) ou **« Enable control »** (activer la surveillance) — voir [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md). En dessous figurent les paramètres ; ceux que vous voyez dépendent du niveau d'accès ([Niveaux d'accès](access-levels.md)).

## Saisir des nombres {#entering-numbers}

Lorsqu'une valeur est écrite entre crochets, la modifier ouvre le pavé numérique.

::: {.anatomy fig="menu-keypad"}
1. **Nom du paramètre.** Ici **« Width, cm »** (largeur, cm).
2. **Valeur.** Ce que vous avez saisi jusqu'ici.
3. **Retour arrière.** Efface le dernier chiffre. Touchez et maintenez pour effacer toute la valeur.
4. **Chiffres.** **1** à **9** et **0**.
5. **Virgule décimale et signe moins.** Un toucher ajoute la virgule ; un toucher maintenu commute le signe moins, là où une valeur négative est admise.
6. **Zéro.**
7. **« OK ».** Valide la valeur. **« MENU »** fait de même.

Le pavé numérique. **« BACK »**, ou un toucher en dehors du pavé, quitte sans rien modifier.
:::

Une valeur hors de la plage admise n'est pas prise telle que saisie : le panneau règle à la place la limite la plus proche.

## Fenêtres qui interrogent et fenêtres qui informent {#windows-that-ask-and-windows-that-tell}

Toutes les fenêtres ont la même forme : un cadre au milieu de l'écran, une **bande de couleur** en haut avec un mot, le message sous la bande et les boutons — s'il y en a — en bas. **Lisez d'abord la bande :**

| **Bande** | **Type de fenêtre** | **Comment elle se ferme** |
| --- | --- | --- |
| **Jaune, « Confirmation »** | Le panneau pose une question. Rien ne se passe tant que vous n'avez pas répondu. | Touchez **« Yes »** (oui, vert) ou **« No »** (non, rouge). **« PLUS »** répond oui, **« MINUS »** non, **« BACK »** annule. |
| **Bleue, « Information »** | Le panneau vous dit ce qui s'est passé. | Certaines se ferment seules ; d'autres se ferment par un toucher, **« PLUS »** ou **« BACK »**. |
| **Rouge, « FAILURE! »** (défaillance) | Une alarme. | Voir ci-dessous. |

![Une fenêtre de confirmation : la bande jaune, la question, Yes et No.](figures/question-zero-readings)

La fenêtre d'information ci-dessous se ferme toute seule.

![Une fenêtre d'information : la bande bleue, le mot Information, le message Done.](figures/info-done)

## Fenêtres d'alarme {#alarm-windows}

Une fenêtre d'alarme indique **ce qui s'est passé**, **sur quel type d'appareil**, et **quels appareils** — leurs numéros sont listés lorsque plusieurs capteurs identiques signalent le même défaut en même temps. Tant qu'elle est ouverte, le panneau émet un signal sonore.

| **Ce que vous faites** | **Ce qui se passe** |
| --- | --- |
| Touchez **« Close »** (fermer) dans la fenêtre, ou appuyez sur **« HOME »** | Cette alarme se ferme. La suivante de la file apparaît. |
| Maintenez **« HOME »** | La fenêtre se ferme et le panneau revient à l'écran d'accueil. |

Les six autres boutons sont éteints et ne font rien tant qu'une fenêtre d'alarme est ouverte.

> **IMPORTANT**
>
> **Fermer la fenêtre arrête le son, pas le défaut.** Les alarmes arrivent une à une et se ferment une à une. Ce que signifie chaque alarme figure dans [Comment fonctionnent les alarmes](how-alarms-work.md).
