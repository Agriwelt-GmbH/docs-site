---
title: Messages à l'écran
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/screen-messages.html
---

# Messages à l'écran

Les pastilles rouges et jaunes qui apparaissent sur toutes les pages — la liaison avec la passerelle, le son, et le semis hors surveillance — ce que chacune signifie et que faire.

Outre la fenêtre d'alarme, l'app s'exprime par de petites pastilles posées sur la page. Ce ne sont pas des fenêtres : elles n'ont pas besoin d'être fermées et disparaissent quand la cause disparaît.

## Pastille rouge au milieu de l'écran — la liaison avec la passerelle {#red-capsule-in-the-middle-of-the-screen-the-link-to-the-gateway}

Tant que la pastille rouge est affichée, l'app n'a pas de données en direct : la page est assombrie et montre la dernière mesure.

| La pastille indique | Ce que cela signifie | Que faire |
| --- | --- | --- |
| **« Looking for the bridge… »** (recherche de la passerelle) | L'app cherche sa passerelle. | Vérifiez que la passerelle est sous tension et que la tablette est près d'elle. |
| **« Connecting to »** (connexion à) et un nom | La passerelle est trouvée ; l'app se connecte. | Patientez. |
| **« Connection to »** (connexion à) un nom **« lost, searching… »** (perdue, recherche) | La liaison s'est coupée ; l'app cherche de nouveau la même passerelle. | Patientez ; vérifiez l'alimentation de la passerelle. Après 3 secondes, la fenêtre **« Bridge link lost »** (liaison avec la passerelle perdue) s'ouvre. [Code 601](codes-6-gateway-link.md#c601) |
| **« Bridge is silent… »** (la passerelle est muette) | La liaison existe, mais la passerelle n'envoie rien. | Patientez 10 secondes ; si cela persiste, coupez puis rétablissez l'alimentation de la passerelle. [Code 602](codes-6-gateway-link.md#c602) |
| **« Choose bridge »** (choisir la passerelle) | Plusieurs passerelles sont à portée, ou la vôtre est introuvable. Touchez la pastille pour ouvrir la liste. | Touchez votre passerelle. [Première connexion](first-connection.md) |
| **« Bluetooth is off »** (Bluetooth désactivé) | Le Bluetooth est désactivé sur la tablette. | Activez-le. [Code 704](codes-7-tablet.md#c704) |
| **« No Bluetooth permission »** (pas d'autorisation Bluetooth) | L'app n'a pas le droit d'utiliser le Bluetooth. | Autorisez-le dans les réglages de l'iPad. [Code 705](codes-7-tablet.md#c705) |

## Pastille jaune en haut — le son {#yellow-capsule-at-the-top-the-sound}

| La pastille indique | Ce que cela signifie | Que faire |
| --- | --- | --- |
| **« Volume is off »** (volume coupé) | Le volume de la tablette est inférieur à 20 % : une alarme ne serait pas entendue. | Montez le volume. [Code 701](codes-7-tablet.md#c701) |
| **« Sound in headphones »** (son dans le casque) | Le son part vers un casque, une enceinte Bluetooth ou un autre appareil. | Déconnectez-le. [Code 702](codes-7-tablet.md#c702) |

La même ligne jaune apparaît dans la fenêtre d'alarme, pour que vous sachiez pourquoi vous n'avez rien entendu.

## Pastille jaune sur une bande — la surveillance {#yellow-capsule-over-a-band-control}

| La pastille indique | Ce que cela signifie | Que faire |
| --- | --- | --- |
| **« NOT UNDER CONTROL »** (hors surveillance) et les rangs de la bande, clignotant | Les graines s'écoulent dans la bande, mais moins de ses rangs sèment dans la norme que la proportion réglée. L'avertisseur sonore retentit. | Contrôlez la ligne de contrôle ou la dose et les rangs jaunes et rouge foncé. [Code 207](codes-2-seeding.md#c207) |

> **VOIR AUSSI**
>
> [La fenêtre d'alarme](alarm-window.md) · [Ce dont vous avez besoin](what-you-need.md)
