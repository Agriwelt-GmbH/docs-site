---
title: L'écran d'état du capteur
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/sensor-status-screen.html
---

# L'écran d'état du capteur

Comment lire l'écran d'état d'un capteur — canal, adresse, type, état de la liaison, valeurs en direct et alarmes actives — et ce que chaque type de capteur y affiche.

On l'ouvre par **« Information »** dans le menu contextuel d'un capteur ([Réglages des capteurs](sensor-settings.md)). Il montre ce que le boîtier sait d'un capteur.

## L'écran {#the-screen}

::: {.anatomy fig="status-hopper"}
1. **« Channel # »** (canal) — quel capteur de la liste complète c'est.
2. **Capteur précédent** — ou appuyez sur **« MINUS »**. L'écran reste ouvert.
3. **Capteur suivant** — ou appuyez sur **« PLUS »**.
4. **« Address: »** (adresse) — l'adresse à laquelle le capteur répond. Non indiquée dans ce manuel.
5. **« Type: »** — le genre de capteur et son numéro, ici le capteur de trémie 1. Certains capteurs affichent à la place de l'adresse une ligne **« Unit: »** (unité) — l'endroit où ils sont raccordés, par exemple **« Control panel »** (boîtier de commande).
6. **« Link: »** (liaison) — l'état de la communication. [Tableau ci-dessous](#link-states).
7. **Les valeurs de ce type de capteur** — ici le niveau à l'entrée d'un capteur de trémie. [Tableau ci-dessous](#what-each-kind-of-sensor-adds).
8. **« Alarm 1 from 1 »** (alarme 1 sur 1) — les alarmes actives, une à la fois. **« UP »** / **« DOWN »** les font défiler.
9. **Le nom de l'alarme** affichée.

L'écran d'état d'un capteur de trémie dont la trémie est vide.
:::

| Touche | Action |
| --- | --- |
| **« PLUS »** / **« MINUS »** | Capteur suivant / précédent — l'écran reste ouvert. |
| **« UP »** / **« DOWN »** | Fait défiler les alarmes actives de ce capteur. |
| **« MENU »** | Le menu contextuel de ce capteur. |
| **« BACK »** | Retour à la sélection du capteur. |

## États de la liaison {#link-states}

| État | Signification |
| --- | --- |
| **« Normal »** | Le capteur répond. |
| **« Not controlled »** (non surveillé) | Le capteur est hors surveillance : ni la communication ni rien d'autre n'est contrôlé. |
| **« No connection »** (pas de liaison) | Le capteur ne répond pas. En rouge. |
| **« Wrong device type! »** (type d'appareil incorrect) | Quelque chose répond, mais pas le type d'appareil attendu par le profil. En rouge. |
| **« IMITATION »** (simulation) | Capteur de vitesse uniquement : la vitesse est simulée, et non mesurée. En jaune. |

Les valeurs ne sont affichées que si le capteur est **sous surveillance**, répond et est du type attendu. Un capteur hors surveillance n'affiche que son identité.

## Ce que chaque type de capteur ajoute {#what-each-kind-of-sensor-adds}

![L'écran d'état d'un capteur de vitesse câblé au boîtier.](figures/status-speed)

| Capteur | Ce que l'écran affiche |
| --- | --- |
| Capteur de vitesse | La fréquence d'impulsions **F=** en Hz ; avec deux capteurs de vitesse, **F1=** et **F2=**. En dessous, les deux limites **« Min speed, km/h »** (vitesse minimale) et **« Max speed, km/h »** (vitesse maximale). Sur une machine qui dose un produit au poids avec des moteurs électriques, les limites sont celles que les moteurs peuvent tenir, resserrées par les deux réglages ; une limite que les réglages ne peuvent pas respecter s'écrit en rouge sous forme d'inégalité. Sans de tels moteurs, une limite réglée sur zéro s'affiche **----**, désactivée. |
| Capteur de trémie | **Pin:** et le niveau à l'entrée, **"0"** ou **"1"**. |
| Capteur d'arbre de doseur | **F=** en Hz, avec trois décimales. |
| Capteur de turbine | **F=** en Hz. |
| Capteur de pression | **P=** en kPa. |
| Capteur de graines, capteur d'engrais solide | **Status:** et l'un des huit états — [ci-dessous](#the-eight-states-of-a-seed-or-fertilizer-sensor). |
| Capteur de débit d'engrais liquide | **Status:** **Working**, ou **Working:Tramline** en mode jalonnage ; en dessous **Flow=** en L/min. |
| Capteur de position de travail | **Position: Working** ou **Position: Transporting**, et **Pin:** avec le niveau à l'entrée. |
| Contact moteur, pression d'huile, charge de la batterie, niveau de carburant, filtre à air | **Pin:** et le niveau à l'entrée, **"0"** ou **"1"**. |
| Capteur de traceur | Seulement les lignes communes. |
| Actionneur de jalonnage | **Status:** **Pulled in** (rentré), **Pulled out** (sorti), **Working** pendant que l'obturateur bouge, ou **Unknown** (inconnu). |
| Moteur électrique de doseur | **Status:** **Working**, ou **Faulty** tant qu'une alarme du moteur est active ; puis **Last fault:** avec le code du contrôleur, s'il y a eu un défaut ([codes](motor-fault-codes.md)). Un contrôleur universel ajoute **IN1[ ] IN2[ ] IN3[ ]** avec les niveaux de ses trois entrées. |
| Contrôleur de pompe d'engrais liquide | **Status:** **Working** ou **Faulty**. En cas de défaut, **Last fault:** et le code. Sans défaut : **Flow=** en L/min, **Load=** en pour cent, et **Pressure sensor: No** s'il n'y en a pas, sinon **Pressure sensor=** en bar avec le signal brut en mA entre parenthèses. Des tirets remplacent une valeur que le contrôleur ne peut pas fournir. |

## Les huit états d'un capteur de graines ou d'engrais {#the-eight-states-of-a-seed-or-fertilizer-sensor}

| Statut | Signification |
| --- | --- |
| **Working** | Normal. |
| **Working:Tramline** | Normal ; le capteur est en mode de contrôle du jalonnage pour le passage en cours. |
| **Configuring** | Le capteur a reçu de nouveaux réglages et les applique. |
| **Calibration in progress** | Le capteur effectue son étalonnage initial. Cela prend quelques secondes. |
| **Clogged** | L'émetteur infrarouge du canal optique est obstrué — le plus souvent un tuyau de descente bouché. En rouge. |
| **Light struck** | Trop de lumière du soleil pénètre dans le canal optique ; le capteur peut mal compter. En rouge. |
| **Faulty** | Le capteur est en panne et doit être remplacé. En rouge. |
| **Unknown** | Un autre défaut qui ne peut pas être identifié. En rouge. |
