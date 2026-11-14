---
title: Capteur de vitesse en panne, limites de vitesse contradictoires ou signal GPS faible
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-speed-sensor.html
---

# Capteur de vitesse en panne, limites de vitesse contradictoires ou signal GPS faible

Que faire quand l'un des deux capteurs de vitesse cesse de donner des impulsions, quand la vitesse minimale et maximale sont réglées à l'envers, ou quand le récepteur intégré voit trop peu de satellites.

Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Speed sensor #1 failed » / « Speed sensor #2 failed » — capteur de vitesse n° 1 / n° 2 en panne {#speed-sensor-1-failed-speed-sensor-2-failed}

**Ce que cela signifie.** Le profil dit que la machine a **deux** capteurs de vitesse d'avancement, mais le panneau ne voit de mouvement que sur l'un d'eux. Le numéro désigne le capteur muet. Cette alarme ne peut pas apparaître sur une machine à un seul capteur de vitesse.

**Que faire, dans cet ordre :**

1. Vérifiez que les deux capteurs de vitesse sont en état de marche, et réparez ce que vous trouvez.
2. Si un capteur ne peut pas être réparé maintenant : modifiez le profil du système pour qu'un seul capteur de vitesse soit utilisé — voir [Le profil](profile.md).

## « Error in settings of Min/Max » — erreur dans les réglages Min/Max {#error-in-settings-of-minmax}

**Ce que cela signifie.** La vitesse d'avancement minimale et la maximale réglées pour le capteur de vitesse se contredisent. Le panneau ne peut pas décider si la vitesse actuelle est permise.

**Que faire :** vérifiez **« Min speed, km/h »** et **« Max speed, km/h »** dans les réglages du capteur de vitesse. Le minimum doit être inférieur au maximum. Voir [Capteur de vitesse d'avancement](speed-sensor.md).

## « Poor GPS signal quality » — mauvaise qualité du signal GPS {#poor-gps-signal-quality}

**Ce que cela signifie.** La vitesse est prise du récepteur intégré au panneau (**« GPS internal »** est sur **« Yes »**), et il voit **moins de quatre satellites**. La vitesse qu'il donne n'est pas fiable. Le symbole de satellite de l'écran d'accueil est rouge.

**Que faire, dans cet ordre :**

1. Donnez au panneau une vue dégagée du ciel ; éloignez-vous des arbres, des bâtiments ou d'un toit de hangar.
2. Observez le nombre à côté du symbole de satellite : il indique combien de satellites le récepteur utilise. Attendez qu'il atteigne quatre ou plus.
3. Si la réception reste mauvaise, prenez la vitesse du capteur de roue : réglez **« GPS internal »** sur **« No »** — voir [GPS](gps.md) et [Capteur de vitesse d'avancement](speed-sensor.md).

> **REMARQUE**
>
> **« SLOWER » et « FASTER » ne sont pas des fenêtres d'alarme.** Quand la vitesse sort de la plage permise, le champ de vitesse affiche **« SLOWER »** ou **« FASTER »** et, au niveau **« Operator »**, le son d'alarme retentit jusqu'à ce que vous corrigiez la vitesse. Voir [Indicateurs](indicators.md#speed).
