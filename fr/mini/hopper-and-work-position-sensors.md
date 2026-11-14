---
title: Capteurs de trémie et de position de travail
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/hopper-and-work-position-sensors.html
---

# Capteurs de trémie et de position de travail

Le capteur de niveau de trémie du Hectare Mini, qui n'a aucun réglage, et le capteur de position de travail avec son signal de transport et son critère d'alarme.

## Capteur de niveau de trémie {#hopper-level-sensor}

Le capteur de trémie signale quand le produit contenu dans la trémie descend sous la hauteur à laquelle le capteur est monté. Il n'a **aucun réglage** : son menu contextuel ne contient que **« Information »** (et **« Reset to defaults »** (valeurs par défaut) au niveau Service, qui n'a rien à réinitialiser).

L'écran d'état affiche **Pin:** avec le niveau sur son entrée : **"1"** — la trémie est vide à hauteur du capteur, et le boîtier déclenche **« Hopper empty »** (trémie vide) ; **"0"** — le produit recouvre le capteur. Voir [Alarmes de trémie](alarms-hopper.md).

## Capteur de position de travail {#work-position-sensor}

Le capteur de position de travail indique au boîtier si l'outil est abaissé en **position de travail** ou relevé en **position de transport**. Ouvrez son menu contextuel comme dans [Réglages des capteurs](sensor-settings.md).

![Le menu contextuel du capteur de position de travail.](figures/ctx-workpos)

| **Paramètre** | **Niveau** | **Fonction** | **Valeurs · valeur par défaut** |
| --- | --- | --- | --- |
| **« Transporting position signal »** | Agronomist | Le niveau sur l'entrée qui signifie **position de transport** : **0** ou **1**. Réglez-le sur ce que donne le capteur avec l'outil relevé. | 0 / 1 · 0 |
| **« Alarms criteria »** | Agronomist | **« Yes »** (oui) : en position de transport, le boîtier ne surveille pas le semis, et le minimum de la turbine, les limites de pression et les arbres de doseur ne sont pas surveillés en déplacement — pas d'alarmes en fourrière. **« No »** (non) : la position est seulement affichée ; elle n'influe pas sur les alarmes. Masqué, et toujours sur **« Yes »**, sur les machines à moteurs de doseur ou à contrôleur de pompe liquide. | **« No »** / **« Yes »** · **« Yes »** |

Sur une machine à moteurs de doseur, un capteur de position de travail qui ne répond pas compte comme **position de transport** — par sécurité, rien n'est dosé. Sans moteurs, un capteur qui ne répond pas ou qui est hors surveillance compte comme position de travail.

L'écran d'état affiche **« Position: Working »** ou **« Position: Transporting »**, et **Pin:** avec le niveau sur l'entrée — comparez-le à la position réelle quand vous réglez **« Transporting position signal »**. La position change après un bref filtrage : un cahot ne la fait donc pas basculer.

![L'écran d'état du capteur de position de travail.](figures/status-workpos)

Sur l'écran d'accueil, l'indicateur de l'outil clignote en jaune en position de transport — voir [Indicateurs](indicators.md).
