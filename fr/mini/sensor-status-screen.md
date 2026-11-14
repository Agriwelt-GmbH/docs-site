---
title: L'écran d'état d'un capteur
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/sensor-status-screen.html
---

# L'écran d'état d'un capteur

Comment lire l'écran d'état d'un capteur du Hectare Mini — type, unité, liaison, valeurs en direct et alarmes actives — et ce que chaque type de capteur y affiche.

**« Information »** dans le menu contextuel d'un capteur ouvre son écran d'état ([Réglages des capteurs](sensor-settings.md)). Il montre ce que le boîtier sait de ce capteur à l'instant même — le premier endroit où regarder quand une alarme n'est pas claire.

::: {.anatomy fig="status-speed"}
1. **Sélecteur de canal** — indique de quel capteur de toute la liste il s'agit. **« MINUS »** affiche le capteur précédent, **« PLUS »** le suivant ; l'écran reste ouvert.
2. **« Type: »** — le type du capteur et son numéro.
3. **« Unit: »** (unité) — le lieu de raccordement du capteur, ici **« Control panel »** (boîtier de commande). Les capteurs du réseau de capteurs n'ont pas cette ligne.
4. **« Link: »** (liaison) — l'état de la communication. [Tableau ci-dessous](#link-states).
5. **La valeur en direct de ce type de capteur** — ici la fréquence d'impulsions **F=** du capteur de vitesse, en Hz.
6. **« Min speed, km/h »** (vitesse minimale) en vigueur. **----** signifie désactivée.
7. **« Max speed, km/h »** (vitesse maximale) en vigueur.

L'écran d'état d'un capteur de vitesse raccordé au boîtier, machine à l'arrêt.
:::

Au niveau **« Service »** (service après-vente), une ligne avec l'adresse du capteur dans le réseau de capteurs s'ajoute en haut. Quand le capteur a des alarmes actives, deux lignes rouges apparaissent en bas : **« Alarm 1 from 2 »** (alarme 1 sur 2) et le nom de l'alarme affichée.

| **Touche** | **Action** |
| --- | --- |
| **« PLUS »** / **« MINUS »** | Capteur suivant / précédent. |
| **« UP »** / **« DOWN »** | Alarme active suivante / précédente de ce capteur. |
| **« MENU »** | Le menu contextuel de ce capteur, avec **« Disable control »** ou **« Enable control »** comme première rubrique. Au niveau **« Operator »**, pendant que la machine roule, **« MENU »** ne fait rien sur le capteur de vitesse. |
| **« BACK »** | Retour à l'écran d'où vous venez. |

## États de la liaison {#link-states}

| **État** | **Signification** |
| --- | --- |
| **« Normal »** | Le capteur répond. |
| **« Not controlled »** | Le capteur est hors surveillance : ni sa communication ni rien d'autre n'est surveillé. |
| **« No connection »** | Le capteur ne répond pas. Rouge. |
| **« Wrong device type! »** | Quelque chose répond, mais pas le type d'appareil attendu par le profil. Rouge. |
| **« IMITATION »** | Capteur de vitesse uniquement : la vitesse est simulée, non mesurée. Jaune. |

Les valeurs en direct et les alarmes ne sont affichées que si le capteur est **sous surveillance**, répond et est du bon type.

## Ce que chaque type de capteur affiche {#what-each-kind-of-sensor-shows}

| **Capteur** | **Valeurs en direct** |
| --- | --- |
| Capteur de vitesse | **F=** en Hz ; avec deux capteurs **F1=** et **F2=**. Puis **« Min speed, km/h »** et **« Max speed, km/h »**. Avec des moteurs qui dosent au poids, les limites sont celles que les moteurs peuvent tenir, restreintes par les deux réglages ; une limite que les réglages ne peuvent pas respecter est écrite en rouge. |
| Capteurs de graines et d'engrais | **Status:** et l'état du capteur — [ci-dessous](#states-of-a-seed-or-fertilizer-sensor). |
| Capteur de doseur | **F=** en Hz, à trois décimales. |
| Capteur de turbine | **F=** en Hz. |
| Capteur de pression | **P=** en kPa. |
| Capteur de trémie | **Pin:** avec le niveau sur l'entrée, **"0"** ou **"1"**. |
| Capteur de position de travail | **« Position: Working »** ou **« Position: Transporting »**, et **Pin:** avec le niveau sur l'entrée. |
| Allumage, pression d'huile, charge de la batterie, niveau de carburant, filtre à air | **Pin:** avec le niveau sur l'entrée. |
| Capteur de débit d'engrais liquide | **Status:** **« Working »**, ou Working:Tramline dans un passage de jalonnage ; **Flow=** en L/min. |
| Moteur de doseur | **Status:** **« Working »** ou **« Faulty »** ; après un défaut, **Last fault:** avec le code du contrôleur. |

## États d'un capteur de graines ou d'engrais {#states-of-a-seed-or-fertilizer-sensor}

| **État** | **Signification** |
| --- | --- |
| **« Working »** | Normal. **Working:Tramline** — normal, dans le mode jalonnage de ce passage. |
| **« Configuring »** | Le capteur a reçu de nouveaux réglages du boîtier et les applique. |
| **« Calibration in progress »** | Le capteur effectue son étalonnage initial ; cela prend quelques secondes. |
| **« Clogged »** | Quelque chose obstrue le canal optique — le soc ou le tube de descente est peut-être bouché. Rouge. |
| **« Light struck »** | Trop de lumière du soleil tombe sur le capteur ; il ne peut pas compter. Rouge. |
| **« Faulty »** | Le capteur est en panne et doit être remplacé. Rouge. |
| **« Unknown »** | Autre défaut impossible à identifier. Rouge. |
