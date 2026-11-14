---
title: Réglages — Control and Alarms
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/settings-control-alarms.html
---

# Réglages — Control and Alarms

Quand la machine compte comme semant, combien de temps un défaut doit durer avant l'alarme, la tolérance et les seuils de doubles et de manques, et l'avertisseur d'alarme.

**« Settings »** (réglages) › **« Control and Alarms »** (contrôle et alarmes) détermine comment les rangs sont jugés et la force de l'alarme sonore.

## Contrôle en Flow {#flow-control}

| Réglage | Ce qu'il fait | Plage | Par défaut |
| --- | --- | --- | --- |
| **« Share of seeding rows »** (proportion de rangs semant) | Le contrôle démarre quand au moins cette proportion de rangs sème dans la norme pendant 3 secondes consécutives, et s'arrête aussitôt que la proportion est perdue. Tant qu'elle est sous surveillance, la machine compte comme semant. | 5–80 %, par pas de 5 | 20 % |
| **« Alarm delay »** (délai d'alarme) | Combien de temps un défaut de rang doit durer avant l'ouverture de la fenêtre d'alarme. | 2–20 s | 3 s |
| **« Separate share for fertilizer »** (proportion distincte pour l'engrais) | Avec des capteurs d'engrais : donne à la bande d'engrais une proportion propre, **« Share of seeding fertilizer rows »** (proportion de rangs d'engrais semant). Désactivé — elle utilise la proportion des semences. | — | Désactivé |

La machine compte comme semant quand au moins une bande — semences ou engrais — est sous surveillance.

> **CONSEIL**
>
> **Si l'app déclenche trop d'alarmes sur un champ cahoteux, augmentez d'abord « Alarm delay ».** Un délai court réagit à chaque secousse ; un délai long laisse un vrai défaut durer plus longtemps avant que vous l'entendiez.

## Semis Hybrid et Precision {#hybrid-and-precision-seeding}

Affiché quand un groupe est en Hybrid ou Precision. Une seule valeur pour toute la machine.

| Réglage | Ce qu'il fait | Plage | Par défaut |
| --- | --- | --- | --- |
| **« Rate tolerance »** (tolérance de dose) | La plage autour de la dose : en dessous, **« Under allowable rate »** (sous la dose admise), au-dessus, **« Rate too high »** (dose trop élevée). | 5–95 %, par pas de 5 | 50 % |
| **« Doubles alarm level »** (seuil d'alarme des doubles) | Proportion de doubles sur les 20 derniers mètres au-delà de laquelle **« Too many doubles »** (trop de doubles) se déclenche. **« No »** (non) — pas d'alarme. | Non, 1–95 % | Non |
| **« Skips alarm level »** (seuil d'alarme des manques) | Idem pour les manques : **« Too many skips »** (trop de manques). | Non, 1–95 % | Non |
| **« Skips & doubles »** (manques et doubles) | Barres étroites à côté de la colonne de chaque rang : manques à gauche, doubles à droite. Les chiffres figurent toujours dans le tableau. | Activé / Désactivé | Désactivé |

## Avertisseur d'alarme {#alarm-buzzer}

| Réglage | Ce qu'il fait |
| --- | --- |
| **« Volume »** | **« Quiet »** (faible), **« Medium »** (moyen) ou **« Loud »** (fort) (par défaut). Le volume propre de la tablette le limite toujours. |
| **« Test sound »** (son d'essai) | Joue un bip au volume choisi. |
| **« Quiet for 10 min »** (silence 10 min) | Coupe l'avertisseur pendant 10 minutes. **« Silence »** (silence) affiche les minutes restantes ; **« Cancel silence »** (annuler le silence) y met fin. |

> **IMPORTANT**
>
> **« Quiet for 10 min » coupe l'avertisseur, pas l'alarme.** La fenêtre d'alarme s'ouvre toujours ; seul le son est retenu pendant ces dix minutes.

> **VOIR AUSSI**
>
> [La fenêtre d'alarme](alarm-window.md) · [Réglages Products](settings-products.md)
