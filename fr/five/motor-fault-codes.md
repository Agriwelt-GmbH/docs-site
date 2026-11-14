---
title: Lire le code de défaut d'un moteur électrique
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/motor-fault-codes.html
---

# Lire le code de défaut d'un moteur électrique

Où le panneau affiche le code de défaut numérique d'un contrôleur de moteur de dosage, et ce que signifie chaque code.

Quand un moteur de dosage déclenche **« FAILURE »**, son contrôleur enregistre aussi un code numérique. Relevez-le et communiquez-le au service d'assistance avec le numéro du moteur.

::: steps
1. Faites un long glissement vers la gauche sur l'écran d'accueil jusqu'à l'apparition de l'écran Motors ([Écrans de travail](working-screens.md)). Maintenez le doigt sur la tuile du moteur en défaut ; son menu contextuel s'ouvre. Une tuile de moteur du second écran d'accueil fonctionne de la même façon.

2. Touchez **« Information »**, puis touchez-le de nouveau. L'écran d'état du moteur s'ouvre.

3. Lisez la ligne **« Last fault: »** (dernier défaut). L'état du moteur indique **« Faulty »** (en défaut) tant qu'une de ses alarmes est active.
:::

Le même code s'affiche sous **« Error code »** sur l'écran Electric motors, au niveau **« Agronomist »** — voir [Diagnostic des contrôleurs de moteurs](motor-controller-diagnostics.md).

## Les codes {#the-codes}

Le panneau n'affiche que le numéro. Les descriptions viennent du contrôleur de moteur lui-même.

### Erreurs de commande et de paramètre {#command-and-parameter-errors}

Le contrôleur a refusé quelque chose que le panneau lui demandait.

| **Code** | **Description** |
| --- | --- |
| -250 | Commande invalide |
| -251 | Commande inattendue |
| -252 | Syntaxe de commande invalide |
| -253 | Arguments de commande invalides |
| -260 | Nombre d'arguments invalide |
| -261 | L'index indiqué est supérieur à FFFFh |
| -262 | Le sous-index indiqué est supérieur à FFh |
| -300 | Le paramètre n'existe pas |
| -301 | Échec de l'écriture en mémoire |
| -302 | Échec de la restauration |
| -306 | Le paramètre ne peut pas être écrit |
| -307 | Le paramètre ne peut pas être lu |
| -308 | Valeur du paramètre hors plage |
| -316 | La version du jeu de paramètres enregistré ne correspond pas à la version du micrologiciel |
| -318 | Le jeu de paramètres enregistré a une somme de contrôle invalide |
| -322 | Le paramètre ne peut pas être réglé : l'axe est en mouvement |
| -325 | Le paramètre ne peut pas être réglé : le mode de positionnement est inactif |
| -340 | Le paramètre ne peut pas être réglé : une fin de course est active |
| -343 | Le paramètre ne peut pas être réglé : une commande d'arrêt ou de halte est en cours d'exécution |
| -350 | Paramètre non contenu dans l'index indiqué |
| -351 | Paramètre non contenu dans le sous-index indiqué |

### Erreurs de l'appareil {#device-errors}

Le contrôleur ou le moteur lui-même est en difficulté.

| **Code** | **Description** |
| --- | --- |
| -1000 | Tension d'alimentation trop basse |
| -1001 | Tension d'alimentation excessive |
| -1002 | Tension d'alimentation de l'électronique trop basse |
| -1003 | Tension d'alimentation de l'électronique excessive |
| -1020 | Surtempérature de l'appareil |
| -1021 | Surtempérature du dissipateur thermique |
| -1060 | Court-circuit d'un fil du moteur : entre fils du moteur, entre moteur et masse, ou entre moteur et alimentation |
| -1061 | Surintensité du moteur |
| -4000 | Erreur d'écart de poursuite dans la séquence de mouvement |
| -5100 | Fin de course active |
