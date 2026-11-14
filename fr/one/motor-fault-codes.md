---
title: Lire le code de défaut d'un moteur électrique
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/motor-fault-codes.html
---

# Lire le code de défaut d'un moteur électrique

Où le boîtier affiche le code de défaut numérique d'un contrôleur de moteur de dosage, et ce que signifie chaque code.

Quand un moteur de dosage déclenche **« FAILURE »** (défaillance), son contrôleur enregistre aussi un code numérique. Relevez-le et communiquez-le au support technique avec le numéro du moteur.

::: steps
1. Sur l'écran d'accueil, ouvrez le menu contextuel du moteur en défaut : maintenez appuyée sa vignette, ou maintenez **« MENU »**, passez au moteur avec **« UP »** / **« DOWN »** et appuyez sur **« MENU »**.

2. Sélectionnez **« Information »** et appuyez sur **« MENU »**. L'écran d'état du moteur s'ouvre.

3. Lisez la ligne **« Last fault »** (dernier défaut). L'état du moteur indique **« Faulty »** (en défaut) tant qu'une de ses alarmes est active.
:::

Le même code s'affiche sous **« Error code »** (code d'erreur) sur l'écran Motors — voir [Écran des moteurs](motors-screen.md) et [Diagnostic des contrôleurs de moteurs](motor-controller-diagnostics.md).

## Les codes {#the-codes}

Le boîtier n'affiche que le numéro. Les descriptions proviennent du contrôleur de moteur lui-même.

### Erreurs de commande et de paramètre {#command-and-parameter-errors}

Le contrôleur a refusé quelque chose que le boîtier lui demandait.

| Code | Description |
| --- | --- |
| -250 | Commande non valide |
| -251 | Commande inattendue |
| -252 | Syntaxe de commande non valide |
| -253 | Arguments de commande non valides |
| -260 | Nombre d'arguments non valide |
| -261 | L'index indiqué est supérieur à FFFFh |
| -262 | Le sous-index indiqué est supérieur à FFh |
| -300 | Le paramètre n'existe pas |
| -301 | Échec de l'écriture en mémoire |
| -302 | Échec de la restauration |
| -306 | Le paramètre ne peut pas être écrit |
| -307 | Le paramètre ne peut pas être lu |
| -308 | Valeur du paramètre hors plage |
| -316 | La version du jeu de paramètres mémorisé ne correspond pas à la version du micrologiciel |
| -318 | Le jeu de paramètres mémorisé a une somme de contrôle non valide |
| -322 | Le paramètre ne peut pas être réglé : l'axe est en mouvement |
| -325 | Le paramètre ne peut pas être réglé : le mode de positionnement est inactif |
| -340 | Le paramètre ne peut pas être réglé : un fin de course est actif |
| -343 | Le paramètre ne peut pas être réglé : une commande d'arrêt est en cours d'exécution |
| -350 | Paramètre non contenu dans l'index indiqué |
| -351 | Paramètre non contenu dans le sous-index indiqué |

### Erreurs de l'appareil {#device-errors}

Le contrôleur ou le moteur lui-même est en difficulté.

| Code | Description |
| --- | --- |
| -1000 | Tension d'alimentation trop basse |
| -1001 | Tension d'alimentation excessive |
| -1002 | Tension d'alimentation de l'électronique trop basse |
| -1003 | Tension d'alimentation de l'électronique excessive |
| -1020 | Surchauffe de l'appareil |
| -1021 | Surchauffe du dissipateur thermique |
| -1060 | Court-circuit d'un fil du moteur : entre fils du moteur, entre moteur et masse, ou entre moteur et alimentation |
| -1061 | Surintensité du moteur |
| -4000 | Erreur de poursuite dans la séquence de mouvement |
| -5100 | Fin de course actif |
