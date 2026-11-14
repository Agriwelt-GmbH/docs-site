---
title: L'écran d'état d'un capteur
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/sensor-status-screen.html
---

# L'écran d'état d'un capteur

Comment lire l'écran d'état d'un capteur — voie, adresse, type, état de la liaison, valeurs en direct et alarmes actives — ce que chaque type de capteur y montre, et comment s'y déplacer au toucher.

On l'atteint par **« Information »** (informations) dans le menu contextuel d'un appareil ([Réglages des capteurs](sensor-settings.md)). Il montre ce que le panneau sait d'un appareil.

## L'écran {#the-screen}

::: {.anatomy fig="five-status-hopper"}
1. **« Channel # »** (voie n°) — de quel appareil de la liste complète il s'agit.
2. **Les repères de part et d'autre du numéro de voie.** Glissez vers la **gauche** pour l'appareil précédent, vers la **droite** pour le suivant. L'écran reste ouvert.
3. **« Address: »** (adresse) — l'adresse à laquelle l'appareil répond. Non indiquée dans ce manuel.
4. **« Type: »** (type) — le genre d'appareil et son numéro, ici le capteur de trémie 1.
5. **« Link: »** (liaison) — l'état de la communication. [Tableau ci-dessous](#link-states).
6. **Les valeurs de ce type d'appareil** — ici le niveau sur l'entrée d'un capteur de trémie. [Tableau ci-dessous](#what-each-kind-of-sensor-adds).
7. **« Alarm 1 from 1 »** (alarme 1 sur 1) — combien d'alarmes de cet appareil sont actives.
8. **Le nom de l'alarme** — la première des alarmes actives.

L'écran d'état d'un capteur de trémie dont la trémie est vide.
:::

Certains appareils affichent une ligne de plus, **« Unit: »** (unité) — l'unité à laquelle l'appareil est raccordé, par exemple **« Control panel »** (panneau de commande) pour le capteur de vitesse.

| **Geste** | **Ce qu'il fait** |
| --- | --- |
| Glisser vers la droite / vers la gauche | Appareil suivant / précédent — l'écran reste ouvert. |
| Glisser vers le haut, ou toucher à trois doigts | Retour à l'endroit d'où vous venez. |

## États de la liaison {#link-states}

| **État** | **Signification** |
| --- | --- |
| **« Normal »** | L'appareil répond. |
| **« Not controlled »** | L'appareil est hors surveillance : ni la communication ni rien d'autre n'est surveillé (non surveillé). |
| **« No connection »** | L'appareil ne répond pas (pas de connexion). En rouge. |
| **« Wrong device type! »** | Quelque chose répond, mais pas le type d'appareil attendu par le profil (mauvais type d'appareil). En rouge. |
| **« IMITATION »** | Capteur de vitesse uniquement : la vitesse est simulée, non mesurée. En jaune. |

Les valeurs ne sont dessinées que si l'appareil est **sous surveillance**, répond et est du type attendu. Un appareil hors surveillance montre son identité et rien d'autre.

## Ce que chaque type de capteur ajoute {#what-each-kind-of-sensor-adds}

![L'écran d'état d'un capteur de vitesse câblé au panneau.](figures/five-status-speed)

| **Appareil** | **Ce que l'écran montre** |
| --- | --- |
| Capteur de vitesse | La fréquence des impulsions **F=** en Hz ; avec deux capteurs de vitesse, **F1=** et **F2=**. En dessous, les deux limites **« Min speed, km/h »** (vitesse minimale) et **« Max speed, km/h »** (vitesse maximale). Sur une machine qui dose un produit au poids avec des moteurs électriques, les limites sont celles que les moteurs peuvent tenir, resserrées par les deux réglages ; une limite que les réglages ne peuvent pas respecter est écrite en rouge sous forme d'inégalité. Sans de tels moteurs, une limite réglée sur zéro s'affiche **----**, désactivée. |
| Capteur de trémie | **Pin:** et le niveau sur l'entrée, **"0"** ou **"1"**. |
| Capteur d'arbre de doseur | **F=** en Hz, avec trois décimales. |
| Capteur de turbine | **F=** en Hz. |
| Capteur de pression | **P=** en kPa. |
| Capteur de graines, capteur d'engrais solide | **Status:** et l'un des huit états — [ci-dessous](#the-eight-states-of-a-seed-or-fertilizer-sensor). |
| Capteur de débit d'engrais liquide | **Status:** **Working**, ou **Working:Tramline** en mode jalonnage ; en dessous **Flow=** en L/min. |
| Capteur de position de travail | **« Position: Working »** ou **« Position: Transporting »** (position : au travail / en transport), et **Pin:** avec le niveau sur l'entrée. |
| Allumage, pression d'huile, charge de la batterie, niveau de carburant, filtre à air | **Pin:** et le niveau sur l'entrée, **"0"** ou **"1"**. |
| Capteur de traceur | Seulement les lignes communes. |
| Actionneur de jalonnage | **Status:** **Pulled in** (rentré), **Pulled out** (sorti), **Working** pendant que l'obturateur se déplace, ou **Unknown** (inconnu). |
| Moteur électrique de doseur | **Status:** **Working**, ou **Faulty** (en défaut) tant qu'une alarme du moteur est active ; puis **« Last fault: »** (dernier défaut) avec le code du contrôleur, s'il y en a eu un ([codes](motor-fault-codes.md)). Un contrôleur universel ajoute **IN1[ ] IN2[ ] IN3[ ]** avec les niveaux de ses trois entrées. |
| Contrôleur de pompe d'engrais liquide | **Status:** **Working** ou **Faulty**. En cas de défaut, **« Last fault: »** et le code. Sinon : **Flow=** en L/min, **Load=** en pour cent, et **Pressure sensor: No** s'il n'y en a pas, sinon **Pressure sensor=** en bar avec le signal brut en mA entre parenthèses. Des tirets tiennent la place d'une valeur que le contrôleur ne peut pas donner. |

## Les huit états d'un capteur de graines ou d'engrais {#the-eight-states-of-a-seed-or-fertilizer-sensor}

| **État** | **Signification** |
| --- | --- |
| **Working** | Normal. |
| **Working:Tramline** | Normal ; le capteur est en mode de surveillance du jalonnage pour le passage en cours, ou son application de produit est désactivée. |
| **Configuring** | Le capteur a reçu de nouveaux réglages et les applique. |
| **Calibration in progress** | Le capteur effectue son étalonnage initial. Cela prend quelques secondes. |
| **Clogged** | Le canal optique est obstrué — le plus souvent un tube de descente de graines bouché. En rouge. |
| **Light struck** | Trop de lumière entre dans le canal optique ; le capteur peut mal compter. En rouge. |
| **Faulty** | Le capteur signale un défaut qui lui est propre. En rouge. |
| **Unknown** | Un autre défaut qui ne peut être identifié. En rouge. |
