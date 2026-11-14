---
title: Configurer les contrôleurs de moteurs
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/configure-motor-controllers.html
---

# Configurer les contrôleurs de moteurs

Attribuer son adresse à un contrôleur de moteur de dosage, choisir le type de contrôleur et régler ses paramètres.

Les contrôleurs qui commandent les moteurs de dosage ne sont pas adressés depuis **« Sensors Configuration »** (configuration des capteurs). Ils ont leur propre accès, leur propre choix de type de contrôleur et leurs propres paramètres.

> **AVERTISSEMENT**
>
> **Réservé aux techniciens de maintenance habilités.** Comme pour tout appareil sur le câble : **un seul contrôleur branché à la fois.** Le boîtier écrit dans le contrôleur qui répond ; avec deux contrôleurs branchés, on ne sait pas lequel prend la nouvelle adresse.

## Ouvrir le menu des contrôleurs de moteurs {#open-the-motor-controller-menu}

::: steps
1. Passez au niveau **« Service »** (service après-vente) ([Activer le niveau Agronomist](enable-agronomist-level.md) — choisissez **« Service »**).

2. Appuyez sur **« MENU »** → **« Service »** → **« Electric motors »** (moteurs électriques). L'écran Motors s'ouvre.

   ![L'écran Motors du moteur 1, page « Registers ».](figures/motors-registers)

3. Appuyez sur **« MENU »** sur l'écran Motors. Deux rubriques apparaissent, toutes deux au niveau **« Agronomist »** (agronome) : **« Change address »** (changer l'adresse) et **« Configuration »**.

   ![Le menu de l'écran Motors.](figures/motors-menu)
:::

Sur un boîtier prévu pour un système sans moteurs électriques, **« Electric motors »** ne figure pas du tout dans le menu **« Service »**.

## Changer l'adresse {#change-the-address}

::: steps
1. Sélectionnez **« Change address »** et appuyez sur **« MENU »**. Trois rubriques s'ouvrent.

2. **« Motor address »** (adresse du moteur) — l'adresse à laquelle le contrôleur répond actuellement. Laissez-la telle qu'elle est.

3. **« New address »** (nouvelle adresse) — l'adresse qu'il doit prendre. **Prenez-la dans la fiche technique du système ; les valeurs ne sont pas imprimées dans ce manuel.**

4. Sélectionnez **« Set »** (valider) et appuyez sur **« MENU »** pour l'écrire.
:::

## Choisir le type de contrôleur {#choose-the-controller-kind}

**« Configuration »** ouvre la configuration du contrôleur. Quatre types sont pris en charge, proposés par numéro :

| Type | De quoi il s'agit |
| --- | --- |
| **« 1)universal »** | Le contrôleur universel : deux canaux à courant continu ou un canal pas à pas sur la même carte. |
| **« 2)DC motor »** | Un contrôleur de moteur à courant continu. |
| **« 3)STEPPER fw0.006+ »** | Un contrôleur de moteur pas à pas, micrologiciel 0.006 et suivants. |
| **« 4)BGxxCI »** | Un moteur BG45CI à contrôleur intégré, sur l'ancienne carte. |

Le boîtier relit le type auprès du contrôleur et s'ouvre sur celui qui répond. Choisir à la main un autre type sert à régler une carte de remplacement — pas à changer ce qu'est un moteur.

## Régler les paramètres {#set-the-parameters}

Chaque menu de configuration se termine par **« Set »**, et **« Set »** porte une valeur propre : le **groupe d'adresses**, de 0 à 3. **Rien n'arrive au contrôleur tant que « Set » n'est pas validé** — les rubriques situées au-dessus modifient les nombres que le boîtier détient, pas ceux sur lesquels le contrôleur fonctionne.

| Type | Ce qu'on lui donne |
| --- | --- |
| STEPPER (pas à pas) | **« Pulses »** (impulsions) 1 … 8192 — les impulsions d'un tour d'arbre moteur ; **« Motor type »** (type de moteur) dans une liste ; **« Set »**. |
| BGxxCI | **« Pulses »** 1 … 8192 ; **« Set »**. Rien d'autre — le contrôleur porte le reste. |
| DC motor (courant continu) | **« Pulses »**, **« Motor type »**, les termes du régulateur **« PID kP »**, **« PID kI »**, **« PID kD »** (0 … 65535, lus en centièmes), **« TURBINA »** 0/1, et deux couples vitesse–durée **« TIME1 »** / **« SPEED1 »**, **« TIME2 »** / **« SPEED2 »** ; **« Set »**. |
| universal | Le jeu le plus étendu, en trois menus : **« Work mode »** (mode de travail), **« Inputs setup »** (réglage des entrées) et **« Parameters »** (paramètres). |

Le menu **« Parameters »** du contrôleur universel :

| Paramètre | Plage |
| --- | --- |
| **« Motor type »** | 0 … 255, d'après la table propre au contrôleur |
| **« Pulses »** | 1 … 8192 par tour d'arbre |
| **« Acceleration,Ms »** / **« Deceleration,Ms »** (accélération / décélération) | 50 … 65535 — la rampe de montée et de descente |
| **« Minimum, rpm »** / **« Maximum, rpm »** (minimum / maximum, tr/min) | 0 … 65535 — la plage de vitesse d'arbre |
| **« PID kP »**, **« PID kI »**, **« PID kD »** | 0 … 65535, centièmes |
| **« !! Temp,\*C »** | 0 … 200 — la température à laquelle le contrôleur déclenche l'alarme |
| **« I_peak,A »** / **« I_peak,mS »** | le courant de crête et la durée pendant laquelle il peut être appelé |
| **« I_push,A »** / **« I_push,Sec »** | le courant de décollage et sa durée |
| **« I_hilo,A »** / **« I_hilo,Sec »** | le seuil de courant soutenu et sa durée |
| **« Set »** | écrit l'ensemble, au groupe d'adresses choisi |

> **IMPORTANT**
>
> **Les limites de courant et de température protègent le moteur.** Ce sont les seuils de protection propres au contrôleur : réglez-les d'après la fiche technique du moteur, et non en essayant des valeurs jusqu'à ce que les alarmes cessent.

Les rubriques **« PID kP »**, **« PID kI »**, **« PID kD »**, **« TURBINA »**, **« TIME1 »**, **« SPEED1 »**, **« TIME2 »**, **« SPEED2 »**, **« !! Temp,\*C »**, **« I_peak,A »**, **« I_push,A »**, **« I_hilo,A »** et leurs partenaires de durée s'affichent de la même façon dans toutes les langues du boîtier.

Lire ce que signale le contrôleur : [Diagnostic des contrôleurs de moteurs](motor-controller-diagnostics.md).
