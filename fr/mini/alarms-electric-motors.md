---
title: Alarmes des moteurs de doseur
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-electric-motors.html
---

# Alarmes des moteurs de doseur

Ce que signifient les alarmes d'un moteur électrique de doseur du Hectare Mini — tension, température, court-circuit, courant, blocage — et ce qu'il faut contrôler.

Le contrôleur de chaque moteur électrique de doseur signale ses défauts au boîtier. La ligne d'appareil désigne le moteur : **Electric motor: #5**. Le code du dernier défaut figure sur l'écran d'état du moteur, ligne **Last fault:** — communiquez-le au service après-vente. Le moteur et ses réglages : [Le menu contextuel d'un moteur](motor-context-menu.md).

| **Texte de l'alarme** | **Ce que cela signifie** | **Ce qu'il faut contrôler, dans cet ordre** |
| --- | --- | --- |
| **« Under voltage »** (sous-tension) | La tension d'alimentation du contrôleur du moteur — pour le moteur ou pour son électronique — est trop basse. | Batterie et alternateur du tracteur ; le câble d'alimentation et ses connecteurs ; le fusible. |
| **« Over voltage »** (surtension) | La tension d'alimentation est trop élevée. | La tension de charge du tracteur ; l'alimentation du système par rapport à la fiche technique. |
| **« Over temperature »** (température excessive) | Le contrôleur ou son dissipateur est trop chaud. | Laissez-le refroidir ; un doseur qui tourne dur ; de la saleté qui recouvre le moteur. |
| **« Short circuit »** (court-circuit) | Un court-circuit sur les fils du moteur — entre eux, à la masse ou à l'alimentation. | Le câble et le connecteur du moteur ; le moteur. |
| **« Over current »** (surintensité) | Le moteur appelle trop de courant. | Un doseur qui tourne dur ou est bloqué ; le moteur. |
| **« Motor jammed! »** (moteur bloqué !) | On commande au moteur de tourner, mais il ne tourne pas. Avec **« Rollback when jammed »** (recul en cas de blocage) sur **« Yes »**, il recule d'abord brièvement pour se libérer. | Un corps étranger dans le doseur ; l'entraînement entre le moteur et le doseur ; le moteur. |
| **« Device in bootloader! »** (appareil en mode de mise à jour !) | Le contrôleur du moteur est en mode de mise à jour et ne fonctionne pas. | Éteignez puis rallumez le boîtier et le système. Si le défaut persiste, appelez le service après-vente. |
| **« FAILURE »** | Tout autre défaut du contrôleur. | Notez **Last fault:** sur l'écran d'état et appelez le service après-vente. |

Tous les moteurs partagent une autre alarme avec chaque appareil : **« Connection lost »** — [L'appareil ne répond pas](alarms-any-device.md).
