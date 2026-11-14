---
title: Configurer les contrôleurs de moteurs
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/configure-motor-controllers.html
---

# Configurer les contrôleurs de moteurs

Donnez son adresse à un contrôleur de moteur de dosage, choisissez le type de contrôleur et réglez ses paramètres.

Les contrôleurs qui pilotent les moteurs de dosage ne s'adressent pas depuis **« Sensors Configuration »**. Ils ont leur propre accès, leur propre choix du type de contrôleur et leurs propres paramètres.

> **AVERTISSEMENT**
>
> **Réservé aux techniciens de service agréés.** Comme pour tout appareil sur le câble : **un seul contrôleur branché à la fois.** Le panneau écrit sur le contrôleur qui répond.

## Ouvrir le menu du contrôleur de moteur {#open-the-motor-controller-menu}

::: steps
1. Montez le niveau à **« Agronomist »** ([Activer le niveau Agronomist](enable-agronomist-level.md)).

2. Touchez l'écran d'accueil avec deux doigts, touchez **« Service »** deux fois, puis **« Electric motors »** (moteurs électriques) deux fois. L'écran de diagnostic des contrôleurs s'ouvre sur le moteur 1. Le même écran s'ouvre par **« Electric motors »** dans le menu contextuel d'un moteur.

   ![L'écran Electric motors du moteur 1, page « Registers ».](figures/five-motors-registers)

3. Touchez l'écran avec **deux doigts**. Deux éléments apparaissent : **« Change address »** (changer l'adresse) et **« Configuration »** (configuration).

   ![Le menu de l'écran Electric motors.](figures/five-motors-menu)
:::

## Changer l'adresse {#change-the-address}

::: steps
1. Touchez **« Change address »**, puis touchez-le de nouveau. Trois éléments s'ouvrent.

2. **« Motor address »** (adresse du moteur) — l'adresse à laquelle le contrôleur répond actuellement. Laissez-la telle que trouvée.

3. **« New address »** (nouvelle adresse) — l'adresse qu'il doit prendre. **Prenez-la dans la fiche technique du système ; les valeurs ne sont pas imprimées dans ce manuel.**

4. Touchez **« Set »** (valider), puis touchez-le de nouveau, pour l'écrire.
:::

## Choisir le type de contrôleur {#choose-the-controller-kind}

**« Configuration »** ouvre le choix du type de contrôleur, proposé par numéro. Le panneau relit le type dans le contrôleur et s'ouvre sur celui qui répond. Choisir un autre type à la main sert à régler une carte de remplacement — pas à changer ce qu'est un moteur.

| **Type** | **Ce que c'est** |
| --- | --- |
| **« 1)universal »** | Le contrôleur universel : deux voies à courant continu ou une voie pas à pas sur la même carte. |
| **« 2)DC motor »** | Un contrôleur de moteur à courant continu. |
| **« 3)STEPPER fw0.006+ »** | Un contrôleur de moteur pas à pas, micrologiciel 0.006 et suivants. |
| **« 4)BGxxCI »** | Un moteur BG45CI à contrôleur intégré, sur l'ancienne carte. |

Si le contrôleur qui répond ne convient pas au menu, le panneau le dit : **« Wrong controller type! »** (mauvais type de contrôleur), **« Old firmware version! »** (ancienne version du micrologiciel) ou **« Wrong controller work mode! »** (mauvais mode de fonctionnement du contrôleur).

## Régler les paramètres {#set-the-parameters}

Chaque menu de configuration se termine par **« Set »**, et **« Set »** porte une valeur propre — le **groupe d'adresses** : **« Motor address »** (ce contrôleur seul), **« ALL »** (tous), **« All-Seeding »** (tous les semis) ou **« All-Fertilizer »** (tous les engrais). **Rien n'atteint le contrôleur tant que « Set » n'est pas validé** — les éléments au-dessus modifient les nombres que le panneau détient, pas ceux sur lesquels le contrôleur fonctionne. **« Set »** répond **« Done »**, **« FAILURE »** ou **« No connection »** ; un groupe qui n'a aucun moteur dans le profil reçoit la réponse **« EM of dispensers is missing in profile »** (moteurs électriques des doseurs absents du profil).

| **Type** | **Ce qui lui est donné** |
| --- | --- |
| STEPPER | **« Pulses »** 1 … 8192 — les impulsions d'un tour de l'arbre du moteur ; **« Motor type »** (type de moteur) dans une liste ; **« Set »**. |
| BGxxCI | **« Pulses »** 1 … 8192 ; **« Set »**. Rien d'autre — le contrôleur porte le reste. |
| DC motor | **« Pulses »**, **« Motor type »**, les termes du régulateur **« PID kP »**, **« PID kI »**, **« PID kD »** (0 … 65535, lus en centièmes), **« TURBINA »** 0/1, et deux couples vitesse–durée **« TIME1 »** / **« SPEED1 »**, **« TIME2 »** / **« SPEED2 »** ; **« Set »**. |
| universal | Le jeu le plus étendu, en trois menus : **« Work mode »** (mode de fonctionnement), **« Inputs setup »** (réglage des entrées) et **« Parameters »** (paramètres). |

Le menu **« Parameters »** du contrôleur universel :

| **Paramètre** | **Plage** |
| --- | --- |
| **« Motor type »** | 0 … 255, d'après la table propre du contrôleur |
| **« Pulses »** | 1 … 8192 par tour d'arbre |
| **« Acceleration,Ms »** / **« Deceleration,Ms »** | 50 … 65535 — la rampe de montée et de descente (accélération / décélération, ms) |
| **« Minimum, rpm »** / **« Maximum, rpm »** | 0 … 65535 — la fenêtre de vitesse de l'arbre |
| **« PID kP »**, **« PID kI »**, **« PID kD »** | 0 … 65535, centièmes |
| **« !! Temp,\*C »** | 0 … 200 — la température à laquelle le contrôleur déclenche une alarme |
| **« I_peak,A »** / **« I_peak,mS »** | le courant de crête, en dixièmes d'ampère, et la durée pendant laquelle il peut être tiré |
| **« I_push,A »** / **« I_push,Sec »** | le courant de décollage et sa durée |
| **« I_hilo,A »** / **« I_hilo,Sec »** | le seuil de courant soutenu et sa durée |
| **« Set »** | écrit le tout, au groupe d'adresses choisi |

> **IMPORTANT**
>
> **Les limites de courant et de température protègent le moteur.** Ce sont les seuils de protection propres au contrôleur : réglez-les d'après la fiche technique du moteur, et non en essayant des valeurs jusqu'à ce que les alarmes cessent.

Les quatre noms de types et les éléments **« PID kP »**, **« PID kI »**, **« PID kD »**, **« TURBINA »**, **« TIME1 »**, **« SPEED1 »**, **« TIME2 »**, **« SPEED2 »**, **« !! Temp,\*C »**, **« I_peak,A »**, **« I_push,A »**, **« I_hilo,A »** et leurs partenaires de durée se lisent de la même façon dans toutes les langues du panneau.

Lire ce que le contrôleur signale : [Diagnostic des contrôleurs de moteurs](motor-controller-diagnostics.md).
