---
title: Première connexion à la passerelle
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/first-connection.html
---

# Première connexion à la passerelle

Comment l'app Hectare trouve la passerelle la première fois, comment choisir la vôtre quand plusieurs sont à portée, et comment la changer ou l'oublier ensuite.

L'app trouve la passerelle toute seule. Vous ne la choisissez que lorsque plusieurs passerelles sont à portée.

::: steps
1. Mettez la passerelle sous tension et gardez la tablette en cabine, près d'elle.

2. Ouvrez l'app Hectare. La première fois, iPadOS demande si l'app peut utiliser le Bluetooth. Autorisez-le — sans Bluetooth, l'app ne peut pas joindre la passerelle.

3. L'app cherche la passerelle. Une pastille rouge au milieu de l'écran indique **« Looking for the bridge… »** (recherche de la passerelle), et les pages des rangs indiquent **« The bridge sends the row count once connected. »** (la passerelle envoie le nombre de rangs une fois connectée).

4. **Une passerelle à portée :** après quelques secondes, l'app s'y connecte toute seule et la mémorise. La pastille affiche **« Connecting to »** (connexion à) et le nom de la passerelle, puis disparaît.

   **Plusieurs passerelles à portée :** la liste **« Choose bridge »** (choisir la passerelle) s'ouvre. Chaque passerelle est une ligne avec son nom, ses barres de signal et la puissance du signal ; la plus forte — en général la plus proche — est en haut. Touchez la passerelle de votre semoir.

5. Les rangs de la machine apparaissent sur l'écran des rangs. S'ils ne correspondent pas à votre semoir, réglez le profil de machine : [Régler le profil de machine](machine-profile.md).
:::

Désormais, l'app ne se connecte qu'à cette passerelle — c'est **« My bridge »** (ma passerelle) dans **« Settings »** (réglages) › **« Machine »** › **« Bridge »** (passerelle). Si la passerelle mémorisée reste introuvable pendant quelques secondes alors que d'autres sont à portée, la liste **« Choose bridge »** s'ouvre de nouveau.

## La section de la passerelle dans les réglages {#the-bridge-section-in-settings}

**« Settings »** › **« Machine »**, section **« Bridge »** :

| Ligne | Ce que c'est |
| --- | --- |
| La première ligne | La liaison : un point vert et le nom de la passerelle quand elle est connectée, ou ce que fait l'app, avec la puissance du signal. |
| **« My bridge »** | La passerelle mémorisée, ou **« not chosen »** (non choisie). Touchez-la pour ouvrir la liste **« Choose bridge »** et en choisir une autre. |
| **« Reconnect »** (reconnecter) | Coupe la liaison et se reconnecte à la même passerelle. |
| **« Forget bridge »** (oublier la passerelle) | L'app oublie la passerelle, se déconnecte et propose de nouveau la liste. Elle demande d'abord confirmation : **« The app will disconnect and let you choose the bridge again. »** (l'app va se déconnecter et vous laisser choisir de nouveau la passerelle) — **« Forget »** (oublier) ou **« No »** (non). |
| **« Bridge firmware »** (micrologiciel de la passerelle), **« Hardware revision »** (révision matérielle) | Ce que la passerelle indique d'elle-même. Communiquez-les au service s'il les demande. |
| **« Bridge update »** (mise à jour de la passerelle) | Voir [Mettre à jour la passerelle](bridge-update.md). |
| **« Frames received »** (trames reçues), **« Snapshots »** (instantanés), **« Dropped frames »** (trames perdues) | Compteurs de la liaison, pour le service. |

> **REMARQUE**
>
> **Une passerelle ne parle qu'à une tablette à la fois.** Une deuxième tablette près de la machine peut prendre la liaison à la première. Gardez une seule tablette par machine.

> **VOIR AUSSI**
>
> [Messages à l'écran](screen-messages.md) · [code 601](codes-6-gateway-link.md#c601) · [code 704](codes-7-tablet.md#c704)
