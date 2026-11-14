---
title: Ce qu'est Agrigate
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/overview.html
---

# Ce qu'est Agrigate

Agrigate en une page — une passerelle qui dialogue avec les capteurs du semoir et l'app Hectare sur un iPad ou un iPhone à la place du moniteur de cabine.

Agrigate est un système de surveillance du semis conçu par Agriwelt. Il surveille l'écoulement des graines et de l'engrais dans chaque rang d'un semoir en lignes ou d'un semoir monograine et déclenche une alarme quand un rang s'arrête, prend du retard ou sème mal. Il comprend deux parties :

- **La passerelle.** Un petit boîtier en cabine, raccordé à la ligne de capteurs du semoir. Il lit chaque capteur de la ligne et transmet ce qu'il lit à la tablette par Bluetooth. Il n'a pas d'écran propre. Dans l'app, il s'appelle **« Bridge »** (passerelle).
- **L'app Hectare** sur un iPad ou un iPhone. Elle affiche les rangs, les juge, déclenche les alarmes, tient les statistiques et règle la passerelle et les capteurs.

> **IMPORTANT**
>
> **Ceci est une préversion.** La passerelle et l'app évoluent encore. Ces pages décrivent uniquement ce que font l'app et la passerelle aujourd'hui. Une fonction qui n'est pas décrite ici ne doit pas être considérée comme acquise.

## Ce qui remplace quoi {#what-replaces-what}

| Avec un moniteur Hectare | Avec Agrigate |
| --- | --- |
| Le moniteur en cabine, câblé à la ligne de capteurs | La passerelle en cabine, câblée à la ligne de capteurs |
| L'écran et les touches du moniteur | L'app Hectare sur un iPad ou un iPhone, reliée à la passerelle par Bluetooth |
| L'avertisseur sonore du moniteur | Le haut-parleur de la tablette — l'alarme retentit par la tablette |

Les capteurs de graines, le boîtier HUB-8 et les actionneurs de jalonnage du semoir sont les mêmes appareils Agriwelt que ceux qui fonctionnent avec les moniteurs Hectare. L'app les présente comme le font les moniteurs Hectare : mêmes couleurs de barres, même fenêtre d'alarme, mêmes tableau et statistiques.

## Ce qu'il fait aujourd'hui {#what-it-does-today}

- **Rangs de semis et d'engrais.** Une barre par rang, en graines par seconde (Flow) ou en graines par mètre (Hybrid, Precision). Voir [L'écran des rangs](rows-screen.md).
- **Alarmes par numéro de rang.** Un capteur muet, bouché ou défectueux, un rang qui ne sème pas, un rang sous ou au-dessus de la dose, des doubles et des manques. Voir [La fenêtre d'alarme](alarm-window.md).
- **Statistiques de cinq champs** — surface, surface semée et non semée, qualité. Voir [Statistiques](statistics-screen.md).
- **Les appareils de la machine** sur le boîtier HUB-8 : trémies, turbines, doseurs, position de travail, entrées du tracteur, débitmètre. Voir [Entrées du HUB-8](hub8-inputs.md).
- **Jalonnage** : passages et rythme comptés par l'app, actionneurs de jalonnage surveillés. Voir [Jalonnage](tramline.md).
- **Mise à jour de la passerelle** depuis l'app. Voir [Mettre à jour la passerelle](bridge-update.md).

Chaque alarme et chaque défaut a un code de service à trois chiffres. Voir [Comment fonctionnent les codes de service](codes.md).

> **VOIR AUSSI**
>
> [Contenu du kit](whats-in-the-kit.md) · [Ce dont vous avez besoin](what-you-need.md) · [Comment les éléments sont reliés](how-it-connects.md)
