---
title: Capteur de vitesse d'avancement
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/speed-sensor.html
---

# Capteur de vitesse d'avancement

Tous les paramètres du capteur de vitesse d'avancement du Hectare Mini — impulsions, période de comptage, diamètre de roue, facteur, critères de semis, limites de vitesse, simulation — avec leur plage et leur valeur par défaut.

La surface, les doses, les manques et les doubles se déduisent tous de la distance parcourue. **Un capteur de vitesse qui se trompe d'un dixième fausse d'un dixième toutes les valeurs du boîtier.** Réglez **« Pulses »** (impulsions) et **« Diameter, cm »** (diamètre, cm), puis étalonnez ([Étalonner le capteur de vitesse](calibrate-speed.md)) — l'étalonnage règle **« Factor, % »** (facteur). Le capteur de vitesse ne peut pas être mis hors surveillance.

Ouvrez son menu contextuel comme dans [Réglages des capteurs](sensor-settings.md). Ses paramètres exigent le niveau **« Agronomist »** (agronome) ([Activer le niveau Agronomist](enable-agronomist-level.md)).

![Le menu contextuel du capteur de vitesse.](figures/ctx-speed)

**« Speed calibration »** (étalonnage de la vitesse), juste sous **« Information »**, n'est affichée que machine à l'arrêt. Au niveau **« Operator »** (opérateur), elle demande le code PIN d'un niveau supérieur.

| **Paramètre** | **Fonction** | **Plage · valeur par défaut** |
| --- | --- | --- |
| **« Pulses »** | Impulsions du capteur par tour de l'arbre sur lequel il est monté. | 1 … 1000 · 6 |
| **« Count period »** | Sur combien des derniers intervalles entre impulsions le boîtier moyenne la vitesse. Le boîtier en prend toujours au moins 8 et au plus 16, aucun de plus de deux secondes : une valeur plus élevée donne une valeur plus stable mais plus lente, les valeurs inférieures à 8 agissent comme 8. Affiché uniquement pour un capteur raccordé au boîtier. | 1 … 1000 · 1 |
| **« Diameter, cm »** | Diamètre de la roue d'entraînement. | 10 … 200 · 60 |
| **« Factor, % »** | Rapport de transmission entre la roue et l'arbre du capteur, pour un capteur monté sur un arbre intermédiaire ou sur l'arbre du doseur entraîné par engrenages ou par chaîne. 100 correspond à un entraînement direct 1 : 1. Mieux vaut le laisser à l'étalonnage. | 1 … 10000 · 100 |
| **« Seeding criteria »** | **« Yes »** : l'avancement fait partie de la condition à laquelle le boîtier commence à surveiller le semis — voir [Quand le boîtier surveille le semis](seed-and-fertilizer-sensors.md#when-the-panel-controls-the-seeding). **« No »** : la vitesse d'avancement est exclue de cette condition — pour les semoirs dont le capteur de vitesse se trouve avant l'embrayage. Masqué, et toujours sur **« Yes »**, en mode **« Precise »** et sur les machines à moteurs de doseur. | **« No »** / **« Yes »** · **« Yes »** |
| **« Min speed, km/h »** | Sous cette vitesse, tant que le boîtier surveille, l'indicateur de vitesse affiche **« FASTER »**. **« No »** désactive le contrôle. | **« No »**, 1 … 99 · **« No »** |
| **« Max speed, km/h »** | Au-dessus de cette vitesse, tant que le boîtier surveille, l'indicateur de vitesse affiche **« SLOWER »**. **« No »** désactive le contrôle. | **« No »**, 1 … 99 · **« No »** |
| **« Imitation, km/h »** | Une vitesse simulée, pour continuer à travailler avec un capteur défectueux. **« No »** = le capteur est utilisé. | **« No »**, 1 … 20 · **« No »** |
| **« Width, cm »** | Distance entre les centres des deux roues. Affiché uniquement avec **« Input device (2) »** dans le profil. | 0 … 10000 · 280 |

Le minimum doit rester inférieur au maximum : une valeur qui atteindrait l'autre limite n'est pas acceptée. Sur une machine à moteurs de doseur, les limites en vigueur sont de plus restreintes aux vitesses que les moteurs peuvent doser ; si une limite ne peut pas être respectée, le boîtier déclenche **« Error in settings of Min/Max »** ([Alarmes du capteur de vitesse](alarms-speed-sensor.md)).

## Calcul du facteur {#working-out-the-factor}

Si vous n'étalonnez pas, le facteur peut être calculé : **k = Na / Nt × 100 %**. Na est le produit des nombres de dents de tous les pignons menés (ceux de rang pair), Nt le produit des nombres de dents de tous les pignons menants (ceux de rang impair), en comptant à partir du pignon situé sur l'arbre de la roue d'entraînement.

Si le tracteur a un compteur de vitesse et que le boîtier affiche une autre vitesse : **K<sub>nouveau</sub> = K<sub>actuel</sub> × V<sub>tracteur</sub> / V<sub>boîtier</sub>**.

## Simulation de la vitesse {#imitation}

> **IMPORTANT**
>
> **Régler « Imitation, km/h » désactive les limites de vitesse.** **« Min speed, km/h »** et **« Max speed, km/h »** passent sur **« No »**, et le boîtier affiche **« Settings of Min and Max speed switched off! »** (réglages de vitesse min. et max. désactivés !). Sur une machine à moteurs de doseur, cela **verrouille aussi l'application du produit** : rien n'est dosé tant que vous ne levez pas le verrou en maintenant **« HOME »** ([Verrouiller l'application à la main](lock-application-by-hand.md)).

Avec des moteurs, la vitesse simulée est aussi maintenue dans la plage que le dosage autorise : une valeur hors de cette plage est ramenée à la limite la plus proche. Tant que la vitesse est simulée, la ligne de liaison de l'écran d'état affiche **« IMITATION »** en jaune, et l'indicateur de vitesse affiche le signe de simulation.

La vitesse peut aussi provenir du récepteur GPS intégré. Il s'active dans le profil, rubrique **« GPS »**, et non ici — [Le profil](profile.md), [Réception GPS](gps-receiver.md).

## L'écran d'état {#the-status-screen}

Il affiche la fréquence d'impulsions **F=** en Hz et les deux limites en vigueur — voir [L'écran d'état d'un capteur](sensor-status-screen.md).

![L'écran d'état d'un capteur de vitesse raccordé au boîtier.](figures/status-speed)
