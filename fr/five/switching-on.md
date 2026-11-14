---
title: Mise sous tension
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/switching-on.html
---

# Mise sous tension

Ce que fait le panneau après la mise sous tension, dans quel état il démarre, et ce qu'il faut attendre avant de l'éteindre.

Quand le panneau est alimenté, un écran de démarrage avec le logo apparaît. L'écran de démarrage reste affiché jusqu'à ce que tous les appareils raccordés au panneau aient répondu — en général quelques secondes, quinze au plus — puis l'[écran d'accueil](home-screen.md) s'ouvre.

![L'écran de démarrage.](figures/five-boot)

> **REMARQUE**
>
> **Si l'écran de démarrage reste affiché environ quinze secondes,** le panneau attend un appareil qui ne répond pas. Rien n'est encore en panne — mais regardez l'écran d'accueil et les alarmes dès qu'il apparaît. Voir [Fonctionnement des alarmes](how-alarms-work.md).

## Dans quel état le panneau démarre {#what-state-the-panel-starts-in}

- **Niveau d'accès : Operator.** Le panneau démarre au niveau Operator (opérateur) après chaque mise sous tension, quel que soit le niveau réglé auparavant. Éteindre puis rallumer est donc aussi le moyen le plus rapide de revenir à Operator — le seul niveau où les fenêtres d'alarme s'affichent. Voir [Niveaux d'accès](access-levels.md).
- **L'écran d'accueil ordinaire.** Le [second écran d'accueil](second-home-screen.md) ne s'ouvre jamais de lui-même ; vous l'ouvrez à la main.
- **Application verrouillée, si la vitesse est simulée.** Si la simulation de vitesse est activée dans le capteur de vitesse et que la machine possède des moteurs électriques de doseur ou une pompe d'engrais liquide, le panneau démarre avec l'application du produit **verrouillée à la main**. Déverrouillez-la quand vous êtes prêt : [Verrouiller l'application du produit à la main](lock-application-by-hand.md).

La version du micrologiciel et le numéro de série peuvent être consultés à tout moment : toucher à deux doigts sur l'écran d'accueil, puis **« About »** (à propos) dans le menu principal. La fenêtre se ferme avec **« Close »** (fermer).

## Avant d'éteindre {#before-switching-off}

- **Les réglages** sont enregistrés d'eux-mêmes quelques secondes après votre dernière modification. Attendez quelques secondes après avoir modifié un réglage avant d'éteindre le panneau.
- **Les statistiques** sont écrites toutes les cinq minutes et à l'arrêt de la machine. **N'éteignez le panneau qu'une fois arrêté** — sinon le dernier tronçon de travail est perdu dans les [statistiques](statistics-screen.md).
