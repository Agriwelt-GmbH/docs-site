---
title: Capteur de vitesse d'avancement
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/speed-sensor.html
---

# Capteur de vitesse d'avancement

Les paramètres du capteur de vitesse d'avancement — impulsions, diamètre de roue, limites de vitesse, simulation — et ce que le réglage de la simulation fait de lui-même.

Tout ce que compte le boîtier — surface, doses, écarts — est calculé d'après la distance parcourue. **Un capteur de vitesse qui se trompe d'un dixième fausse d'un dixième toutes les autres valeurs du boîtier.** Réglez d'abord ses paramètres, puis étalonnez-le ([Étalonner le capteur de vitesse](calibrate-speed.md)).

Ouvrez le menu contextuel du capteur de vitesse comme décrit dans [Réglages des capteurs](sensor-settings.md). Tous ses paramètres exigent le niveau **« Agronomist »** (agronome) ([Activer le niveau Agronomist](enable-agronomist-level.md)).

![Le menu contextuel du capteur de vitesse. Une limite désactivée affiche « No ».](figures/ctx-speed)

Le menu contextuel propose aussi **« Speed calibration »** (étalonnage de la vitesse) directement, sous **« Information »**.

| Paramètre | Ce qu'il fait | Plage |
| --- | --- | --- |
| **« Pulses »** | Le nombre d'impulsions du capteur. Réglez-le avant l'étalonnage, qui le corrige. | 1 … 1000 |
| **« Count period »** (période de comptage) | Le nombre d'impulsions du capteur sur lequel le boîtier fait la moyenne de la vitesse d'avancement ; une valeur plus élevée donne un chiffre plus stable. N'agit que sur un capteur de vitesse raccordé directement au boîtier. | 1 … 1000 |
| **« Diameter, cm »** | Le diamètre de la roue. Réglez-le avant l'étalonnage. | 10 … 200 |
| **« Factor, % »** (facteur) | Le rapport de transmission vers la roue ; 100 correspond à un entraînement direct 1 : 1. | 1 … 10000 |
| **« Seeding criteria »** (critère de semis) | **« Yes »** (oui) : les alarmes des tronçons de graines, d'engrais solide et d'engrais liquide ne se déclenchent que pendant que la machine avance. **« No »** (non) : aussi à l'arrêt. Masqué, et toujours **« Yes »**, en mode **« Precise »** (précis) et sur les machines à moteurs de dosage ou à contrôleur de pompe d'engrais liquide. | **« No »** (non) / **« Yes »** (oui) |
| **« Min speed, km/h »** (vitesse minimale) | En dessous de cette vitesse, l'écran d'accueil affiche **« FASTER »** (plus vite). **0 désactive le contrôle.** | 0 … 99 |
| **« Max speed, km/h »** (vitesse maximale) | Au-dessus de cette vitesse, l'écran d'accueil affiche **« SLOWER »** (plus lentement). **0 désactive le contrôle.** | 0 … 99 |
| **« Imitation, km/h »** (simulation) | Une vitesse simulée. **0** = le capteur réel est utilisé. | **0 … 20** |
| **« Width, cm »** (largeur) | La voie entre les deux roues d'une installation à deux capteurs. | 0 … 10000 |
| **« GPS »**, **« GPS internal »** (GPS interne) | Prendre la vitesse d'un récepteur au lieu de la roue. | **« No »** (non) / **« Yes »** (oui) |

Le minimum doit être inférieur au maximum, sinon le boîtier déclenche **« Error in settings of Min/Max »** (erreur dans les réglages Min/Max) ([Alarmes du capteur de vitesse](alarms-speed-sensor.md)).

> **IMPORTANT**
>
> **Régler « Imitation, km/h » sur autre chose que zéro modifie deux autres réglages de lui-même.** Le boîtier met **« Min speed, km/h »** et **« Max speed, km/h »** à zéro — ils n'ont aucun sens face à une vitesse simulée — et il **verrouille l'application du produit**, de sorte que rien n'est dosé tant que la machine est à l'arrêt. Le verrou est l'icône de main sur l'écran d'accueil ; maintenez **« HOME »** pour le lever ([Verrouiller l'application à la main](lock-application-by-hand.md)).

La vitesse simulée est en outre **maintenue dans la plage que le dosage permet** : une valeur hors de cette plage est ramenée à la limite la plus proche au moment de la saisie. Tant que la vitesse est simulée, l'écran d'état du capteur affiche **« IMITATION »** en jaune. Travailler sans capteur de vitesse : [Travailler sans capteur de vitesse](work-without-speed-sensor.md).

## L'écran d'état {#the-status-screen}

L'écran d'état affiche la fréquence d'impulsions **F=** en Hz (avec deux capteurs, **F1=** et **F2=**) et les deux limites en vigueur. Voir [L'écran d'état du capteur](sensor-status-screen.md#what-each-kind-of-sensor-adds).

![L'écran d'état d'un capteur de vitesse câblé au boîtier.](figures/status-speed)
