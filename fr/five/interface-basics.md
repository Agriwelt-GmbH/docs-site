---
title: Menus, menus contextuels, pavé numérique et fenêtres
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/interface-basics.html
---

# Menus, menus contextuels, pavé numérique et fenêtres

Les cinq éléments par lesquels tout passe sur le panneau — écrans de travail, menu principal, menu contextuel d'un appareil, pavé numérique et fenêtres qui interrogent ou informent — et comment chacun se commande au toucher.

Tout ce qui se passe sur le panneau passe par cinq éléments : les **écrans de travail**, le **menu principal**, le **menu contextuel** d'un appareil, le **pavé numérique** et les **fenêtres** qui vous posent une question ou vous informent. Tous se commandent du bout des doigts ; les gestes sont listés dans [Zones tactiles et gestes](buttons-and-gestures.md). Les écrans de travail ont leur propre rubrique : [Écrans de travail](working-screens.md).

## Le menu principal {#the-main-menu}

Touchez l'écran d'accueil avec **deux doigts**. Le menu principal s'ouvre sur l'écran d'accueil, avec son premier élément sélectionné. Sur le second écran d'accueil, un toucher sur le symbole des réglages fait la même chose.

::: {.anatomy fig="five-main-menu"}
1. **Élément sélectionné.** Texte noir sur bandeau bleu. Ici **« Fill the disks with seeds »** (remplir les disques de semences) — voir [Remplir les disques](fill-the-disks.md).
2. **« Settings »** (réglages). Les réglages du système et de la machine. Voir [Le menu Settings](settings-menu.md).
3. **Pointe de flèche.** L'élément ouvre un autre menu.
4. **« Service »** (service). Éléments de mise en service et d'entretien. Affiché à partir du niveau Agronomist.
5. **« About »** (à propos). Une fenêtre avec la version du micrologiciel et le numéro de série du panneau ; **« Close »** (fermer) la ferme.

Le menu principal d'un semoir monograine à moteurs de doseur en mode **« Precise »**, à l'arrêt, au niveau Agronomist.
:::

**Commander un menu au toucher :**

- **Touchez** un élément pour le sélectionner — le bandeau bleu se déplace sur lui.
- **Touchez de nouveau l'élément sélectionné** pour y entrer : il ouvre son menu, lance son action ou ouvre le pavé numérique. **Maintenir le doigt** sur un élément fait les deux à la fois.
- **Glissez le doigt vers la droite ou vers la gauche** n'importe où sur le menu pour augmenter ou diminuer la valeur de l'élément **sélectionné**. Un geste court la change d'un pas ; un geste plus long continue de compter tant que le doigt avance. Le glissement modifie toujours l'élément du bandeau bleu, pas celui qui est sous votre doigt. Les listes de mots tournent en boucle : après le dernier mot vient le premier.
- **Glissez vers le haut ou vers le bas** pour faire défiler un long menu.
- **Touchez en dehors du menu**, sur l'écran assombri, pour le quitter. Un toucher à trois doigts fait de même.

Un élément se lit d'après ce qui figure à sa droite. Les signes **-** et **+** n'apparaissent qu'autour de la valeur de l'élément sélectionné.

| **Ce que vous voyez à droite** | **Ce que cela signifie** |
| --- | --- |
| Une pointe de flèche **>** | L'élément ouvre un autre menu. Touchez-le de nouveau. |
| Une valeur entre **-** et **+** | Glissez vers la droite pour l'augmenter, vers la gauche pour la diminuer, directement dans la liste. |
| Une valeur entre **-[** et **]+** | Un glissement, ou un second toucher, ouvre le pavé numérique. |
| **!** | L'élément écrase des valeurs enregistrées : il remet les statistiques à zéro, enregistre ou charge des réglages, règle un appareil ou remet des valeurs à leurs réglages par défaut. Touchez-le de nouveau. |
| Rien | L'élément exécute une action. Touchez-le de nouveau. |

![Le menu Seeding machine parameters : la largeur entre crochets ouvre le pavé numérique ; les modes changent dans la liste ; les deux étalonnages sont des actions.](figures/five-param-edit)

Les réglages sont enregistrés d'eux-mêmes quelques secondes après la dernière modification ; il n'y a rien à enregistrer.

## Le menu contextuel d'un appareil {#the-context-menu-of-a-device}

Chaque capteur, moteur et indicateur de l'écran d'accueil a son propre menu. **Maintenez le doigt sur l'appareil** — son icône ou sa colonne sur le schéma — plus d'une demi-seconde, et son menu contextuel s'ouvre. Un simple toucher ne fait rien. Sur l'écran Motors et sur le second écran d'accueil, cela fonctionne de même pour la tuile d'un moteur.

![Le menu contextuel d'un capteur de graines.](figures/five-ctx-seed)

Le premier élément, **« Information »** (informations), ouvre l'écran d'état de l'appareil ; là, un glissement vers la droite ou vers la gauche affiche l'appareil suivant ou le précédent, et un glissement vers le haut ou un toucher à trois doigts ramène en arrière. Le deuxième élément commute la surveillance : **« Disable control »** (désactiver la surveillance) ou **« Enable control »** (activer la surveillance) — voir [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md). En dessous se trouvent les paramètres ; ceux que vous voyez dépendent du niveau d'accès ([Niveaux d'accès](access-levels.md)). Tous les paramètres : [Réglages des capteurs](sensor-settings.md).

## Saisir des nombres {#entering-numbers}

Quand une valeur est écrite entre crochets, la modifier ouvre le pavé numérique.

::: {.anatomy fig="five-number-pad"}
1. **Nom du paramètre.** Ici **« Width, cm »** (largeur, cm).
2. **Valeur.** Ce que vous avez saisi jusqu'ici.
3. **Retour arrière.** Efface le dernier chiffre. Maintenez le doigt dessus pour effacer toute la valeur.
4. **Chiffres.** De **1** à **9**.
5. **Touche point.** Ajoute la virgule décimale — uniquement pour une valeur à décimales.
6. **Zéro.**
7. **« OK »**. Valide la valeur.

Le pavé numérique. Un toucher en dehors du pavé le quitte sans rien modifier.
:::

Une valeur hors de la plage permise n'est pas refusée : le panneau règle à la place la limite la plus proche.

## Fenêtres qui interrogent et fenêtres qui informent {#windows-that-ask-and-windows-that-tell}

Une fenêtre est un cadre au milieu de l'écran avec un **bandeau coloré** le long de son bord supérieur — sans aucun mot — et le message sous le bandeau.

| **Fenêtre** | **Ce que c'est** | **Comment elle se ferme** |
| --- | --- | --- |
| **Bandeau bleu, boutons en dessous** | Le panneau pose une question. Rien ne se passe tant que vous n'avez pas répondu. | Touchez **« Yes »** (oui, vert) ou **« No »** (non, rouge). Un toucher en dehors du cadre annule : rien n'est modifié. |
| **Bandeau bleu, sans boutons** | Le panneau vous dit ce qui s'est passé. | Certaines se ferment d'elles-mêmes après environ deux secondes, d'autres par un toucher dans le cadre. |
| **Bandeau rouge, sans boutons** | Le panneau signale une erreur, par exemple **« Invalid PIN »** (code invalide). | Comme ci-dessus. |
| **Bandeau rouge et barre rouge avec** **« FAILURE! »** (défaillance !) | Une alarme. | Voir ci-dessous. |

Une fenêtre de question ignore les touchers pendant la première demi-seconde, pour que le toucher qui l'a ouverte n'y réponde pas.

![Une fenêtre de question : le bandeau bleu, la question, Yes et No.](figures/five-question)

## Fenêtres d'alarme {#alarm-windows}

Une fenêtre d'alarme indique **ce qui s'est passé**, **sur quel type d'appareil**, et **quels appareils** — leurs numéros sont listés quand plusieurs capteurs identiques signalent le même défaut, par exemple **#1-4,7**. Tant qu'elle est ouverte, le panneau fait sonner l'alarme.

![Une fenêtre d'alarme avec le bouton Close.](figures/five-alarm-window)

**Touchez « Close » dans la fenêtre.** Cette alarme se ferme et le son s'arrête ; l'alarme suivante de la file apparaît. Rien d'autre ne ferme une fenêtre d'alarme — les touchers ailleurs sont ignorés.

> **IMPORTANT**
>
> **Fermer la fenêtre arrête le son, pas le défaut.** Les alarmes se ferment une par une, et elles ne s'affichent **qu'au niveau Operator**. Ce que signifie chaque alarme : [Fonctionnement des alarmes](how-alarms-work.md).
