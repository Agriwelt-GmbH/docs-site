---
title: Régler le profil de machine
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/machine-profile.html
---

# Régler le profil de machine

Indiquez à l'app combien de rangs de semis et de capteurs d'engrais la machine possède et, pour Hybrid et Precision, sa largeur de travail ; l'app écrit le profil dans la passerelle toute seule.

Le profil de machine indique à la passerelle quels capteurs lire et à l'app comment les dessiner : combien de rangs de semis, combien de capteurs d'engrais et, pour les modes Hybrid et Precision, la largeur de travail. Il est conservé dans la passerelle ; une autre tablette connectée à la même passerelle lit donc le même profil.

::: steps
1. Ouvrez **« Settings »** (réglages) › **« Machine »**. La section **« Machine profile »** (profil de machine) s'ouvre en haut.

2. Réglez **« Rows »** (rangs) — le nombre de rangs de semis — avec **−** / **+**.

3. Réglez **« Fertilizer sensors »** (capteurs d'engrais) — le nombre de rangs d'engrais munis d'un capteur, ou **« none »** (aucun).

4. Patientez un instant. Il n'y a pas de bouton d'enregistrement : après une courte pause, l'app écrit le profil dans la passerelle. La ligne d'état sous les nombres indique **« writing the profile to the bridge… »** (écriture du profil dans la passerelle) puis **« profile written to the bridge at »** (profil écrit dans la passerelle à) avec l'heure.

5. Comparez **« Sensors on the bus now »** (capteurs sur la ligne en ce moment) avec ce qui se trouve sur le semoir : il compte chaque appareil qui répond sur la ligne de capteurs.

6. **Hybrid et Precision uniquement :** réglez **« Width, cm »** (largeur, cm) — la largeur de travail. **« Row spacing »** (écartement des rangs) en dessous est calculé par l'app : la largeur divisée par les rangs du groupe.
:::

## Quand le profil n'est pas écrit {#when-the-profile-is-not-written}

| La ligne d'état indique | Ce que cela signifie | Que faire |
| --- | --- | --- |
| **« bridge busy: seeding under way »** (passerelle occupée : semis en cours) | La passerelle n'accepte pas de nouveau profil tant que les graines s'écoulent. | Arrêtez le semoir et modifiez de nouveau le nombre. |
| **« too many rows for the bridge (up to »** (trop de rangs pour la passerelle (jusqu'à) … | Le profil dépasse ce que la passerelle accepte. | Réduisez les rangs ou les appareils. Voir [code 902](codes-9-setup.md#c902). |
| Tout autre message avec un code | La passerelle a refusé le profil. | Voir [9xx · Réponses de la passerelle au réglage](codes-9-setup.md). |

## Largeur et statistiques {#width-and-statistics}

La surface et l'écartement des rangs découlent de la largeur. Quand le champ actif contient déjà des statistiques, une nouvelle largeur demande d'abord confirmation : **« Statistics must be erased! »** (les statistiques doivent être effacées !) — **« Yes »** (oui) repart de zéro pour les statistiques du champ actif, **« No »** (non) garde l'ancienne largeur.

Les rangs d'engrais viennent après les rangs de semis. Avec des capteurs d'engrais dans le profil, l'écran des rangs montre deux bandes : les semences en haut, l'engrais en dessous. Voir [L'écran des rangs](rows-screen.md).

> **VOIR AUSSI**
>
> [Numéroter les capteurs](sensor-numbering.md) · [Réglages — Machine](settings-machine.md)
