---
title: Diagnostic des contrôleurs de moteurs
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/motor-controller-diagnostics.html
---

# Diagnostic des contrôleurs de moteurs

Comment lire ce qu'un contrôleur de moteur de dosage signale de lui-même sur l'écran Motors — vitesse, code d'erreur, tensions, température, courant, bits d'état et compteurs de défauts.

L'écran Motors est aussi l'écran de diagnostic d'un contrôleur de moteur. Il montre en direct ce que le contrôleur signale de lui-même. Ouvrez-le par **« MENU »** → **« Service »** → **« Electric motors »** (moteurs électriques) (niveau **« Service »**). La vue de travail du même écran est décrite dans [Écran des moteurs](motors-screen.md).

::: {.anatomy fig="motors-registers"}
1. **« Motor #1 »** (moteur n° 1) — quel moteur est affiché. **(−)** / **(+)** passent au moteur précédent / suivant.
2. **« Registers »** (registres) — le nom de la page.
3. **Le mot d'état** — seize bits du contrôleur ; une case allumée (jaune) est un bit activé.
4. **La légende des bits** — le numéro et le nom de chaque bit. [Tableau ci-dessous](#the-status-bits).
5. **« Speed »** (vitesse) / **« Target speed »** (vitesse de consigne) — ce que fait l'arbre par rapport à ce que le boîtier a demandé. Un écart qui ne se résorbe pas est le premier signe d'une charge que le moteur ne peut pas porter.
6. **« Error code »** (code d'erreur) / **« Act.posit. »** (position actuelle) — le numéro d'erreur propre au contrôleur ([codes](motor-fault-codes.md)), et la position à laquelle il se compte.
7. **« Volt.mot.,mV »** / **« Volt.elec.,mV »** — la tension au moteur et à l'électronique, en millivolts. Une tension moteur très inférieure à la tension de l'électronique signifie que l'alimentation s'effondre en charge.
8. **« Temperat.,C »** / **« Current,mA »** (température / courant) — la température du contrôleur et le courant qu'il appelle. Comparez le courant avec **« I_hilo,A »** réglé pour ce moteur ([Configurer les contrôleurs de moteurs](configure-motor-controllers.md)).

La page **« Registers »** du moteur 1, à l'arrêt.
:::

## Les bits d'état {#the-status-bits}

| Bit | Nom | Bit | Nom |
| --- | --- | --- | --- |
| 0 | Enable | 8 | Toggle |
| 1 | Error | 9 | CmdTgl |
| 2 | Warn. | 10 | CmdErr |
| 3 | Moving | 11 | StpHalt |
| 4 | Reach | 12 | LimCur |
| 5 | Limit | 13 | LimVel |
| 6 | FolErr | 14 | LimPos |
| 7 | HomDone | 15 | LimSVel |

La légende est écrite en anglais sur tous les boîtiers, quelle que soit leur langue : c'est une table de bits du contrôleur, et non un message à l'intention de l'opérateur.

## Les compteurs de défauts {#the-fault-counters}

![La page de statistiques du moteur 1 sur le champ 1.](figures/motors-statistics)

Les défauts que ce moteur a accumulés **sur le champ choisi** — ils font partie des statistiques du champ, et non du moteur :

| Compteur | Ce qu'il compte |
| --- | --- |
| **« Jammed »** (bloqué) | Le rotor a calé et le contrôleur a dû abandonner ou reculer. |
| **« Disconnects »** (déconnexions) | Le contrôleur a cessé de répondre. |
| **« Other »** (autres) | Tout le reste de ce que le contrôleur a signalé, surintensité et surchauffe comprises — elles n'ont pas de compteur propre. |
| **« In failure »** (en défaut) | La distance en mètres que ce moteur a passée à l'état de défaut. |

Chaque compteur est **blanc à zéro et rouge dès qu'il ne l'est plus**. Un chiffre rouge ne signifie pas que le moteur est en défaut maintenant — il signifie qu'il l'a été, quelque part sur ce champ, et que les semences déposées là méritent un coup d'œil.
