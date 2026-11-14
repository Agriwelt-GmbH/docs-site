---
title: Mise en marche et arrêt
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/switching-on.html
---

# Mise en marche et arrêt

Ce que le Hectare Mini affiche après la mise sous tension, avec quel écran et quel niveau d'accès il démarre, et quand on peut l'éteindre sans risque.

Une fois l'alimentation branchée, un écran de démarrage avec le logo apparaît. Il reste affiché jusqu'à ce que le panneau ait trouvé tous les appareils qui lui sont raccordés — quelques secondes — puis le panneau passe à son premier écran de travail.

![L'écran de démarrage avec le logo.](figures/splash)

Le logo de l'écran de démarrage dépend du fournisseur du système et peut différer de l'image.

> **REMARQUE**
>
> **Si l'écran de démarrage reste affiché bien plus longtemps que d'habitude,** le panneau attend un appareil qui ne répond pas. Regardez les alarmes dès que l'écran de travail apparaît — voir [Comment fonctionnent les alarmes](how-alarms-work.md).

## Dans quel état démarre le panneau {#what-state-the-panel-starts-in}

- **Niveau d'accès : Operator.** À chaque mise sous tension, le panneau est au niveau Operator (opérateur), quel que soit le niveau réglé auparavant. Operator est le seul niveau auquel les fenêtres d'alarme s'affichent : éteindre puis rallumer est donc aussi le moyen le plus rapide de revenir à un travail sûr. Voir [Niveaux d'accès](access-levels.md).
- **L'écran d'accueil** — à une exception près : si l'[écran de régulation de dose](rate-control-screen.md) était ouvert à l'arrêt du panneau, il s'ouvre de nouveau. C'est le seul écran dont le panneau se souvienne.
- **Travail en pause, sur un banc d'essai.** Si l'imitation de vitesse est activée et que la machine a des moteurs de doseur, le panneau démarre avec l'application du produit verrouillée — voir [Verrouiller l'application à la main](lock-application-by-hand.md).

La version du logiciel, le numéro de série du panneau et son identifiant matériel peuvent être consultés à tout moment : appuyez sur **« MENU »** sur l'écran d'accueil et choisissez le dernier élément du menu principal. **« BACK »** ou **« Close »** ferme la fenêtre.

## Arrêt {#switching-off}

| **Quoi** | **Quand c'est enregistré** |
| --- | --- |
| Réglages, doses de consigne, seuils d'alarme | De lui-même, environ une seconde et demie après la dernière modification et le dernier toucher d'un bouton. |
| [Statistiques](statistics-screen.md) de la parcelle active | Toutes les cinq minutes, et quelques secondes après l'arrêt de la machine. |
| Relevés du [tableau de semis](table-screen.md) | Jamais — ils appartiennent à la session de travail et repartent de zéro à chaque mise sous tension. |

> **IMPORTANT**
>
> **Arrêtez-vous avant d'éteindre, puis attendez quelques secondes.** Sinon la dernière portion de travail manque dans les statistiques, et une valeur modifiée juste avant risque de ne pas être enregistrée.
