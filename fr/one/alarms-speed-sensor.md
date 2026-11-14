---
title: Capteur de vitesse d'avancement en panne ou limites de vitesse contradictoires
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-speed-sensor.html
---

# Capteur de vitesse d'avancement en panne ou limites de vitesse contradictoires

Que faire quand l'un des deux capteurs de vitesse cesse de donner des impulsions, ou quand les vitesses minimale et maximale sont réglées à l'envers.

Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Speed sensor #1 failed » / « Speed sensor #2 failed » — capteur de vitesse n° 1 / n° 2 en panne {#speed-sensor-1-failed-speed-sensor-2-failed}

**Ce que cela signifie.** Le profil indique que la machine a **deux** capteurs de vitesse d'avancement, mais le boîtier ne voit de mouvement que sur l'un d'eux. Le numéro désigne le capteur muet. Cette alarme ne peut pas apparaître sur une machine à un seul capteur de vitesse.

**Que faire, dans cet ordre :**

1. Vérifiez que les deux capteurs de vitesse sont en état de marche et réparez ce que vous trouvez.
2. Si l'un des capteurs ne peut pas être réparé tout de suite : modifiez le profil du système de façon à n'utiliser qu'un seul capteur de vitesse — voir [Le profil](profile.md).

## « Error in settings of Min/Max » — erreur dans les réglages Min/Max {#error-in-settings-of-minmax}

**Ce que cela signifie.** Les vitesses d'avancement minimale et maximale réglées pour le capteur de vitesse se contredisent. Le boîtier ne peut pas décider si la vitesse actuelle est admise.

**Que faire :** vérifiez **« Min speed, km/h »** (vitesse minimale) et **« Max speed, km/h »** (vitesse maximale) dans les réglages du capteur de vitesse. Le minimum doit être inférieur au maximum. Voir [Capteur de vitesse](speed-sensor.md).

> **REMARQUE**
>
> **« SLOWER » et « FASTER » ne sont pas des alarmes.** Quand la vitesse sort de la plage autorisée, aucune fenêtre d'alarme ne s'ouvre : l'écran d'accueil affiche **« SLOWER »** (plus lentement) ou **« FASTER »** (plus vite) et continue de l'afficher pendant que vous corrigez la vitesse. Voir [Indicateurs](indicators.md).
