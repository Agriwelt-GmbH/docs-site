---
title: Numéroter les capteurs
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/sensor-numbering.html
---

# Numéroter les capteurs

Donnez à un capteur le numéro de son rang par la passerelle — à la mise en service d'un semoir, et lors du remplacement d'un capteur au champ.

Chaque capteur de la ligne de capteurs répond sous son propre numéro, et l'app reconnaît un rang à ce numéro. Un nouveau capteur doit recevoir le numéro de son rang avant d'être surveillé. L'app s'en charge par la passerelle, depuis une même fiche à deux entrées :

- **« Settings »** (réglages) › **« Machine »** › **« Number the sensors »** (numéroter les capteurs) — pour la mise en service ;
- le menu du rang › **« Replace the sensor »** (remplacer le capteur) — pour un seul rang au champ ; le numéro du rang est déjà réglé.

La fiche comporte en haut la liste **« On the bus »** (sur la ligne). En bas reste un panneau qui ne défile pas : **« Sensor »** (capteur), **« New number »** et le bouton **« Assign No. »**. **« Close »** est dans l'en-tête.

> **IMPORTANT**
>
> **Tant que la fiche est ouverte, la passerelle ne surveille pas les rangs.** Aucune alarme de rang ne se déclenche pendant la numérotation. Faites-la machine à l'arrêt, et fermez la fiche quand vous avez terminé.

## Remplacer un capteur au champ {#replace-a-sensor-in-the-field}

::: steps
1. Arrêtez la machine. Branchez le nouveau capteur à la place de l'ancien ; l'ancien doit être débranché de la ligne, car le bouton reste inactif tant qu'il répond encore sous ce numéro.

2. Ouvrez le menu du rang concerné (appuyez sur sa barre et maintenez) et touchez **« Replace the sensor »**. La fiche **« Replace the sensor »** s'ouvre : le nouveau capteur reçoit le numéro de ce rang ; le profil de machine ne change pas.

3. Sous **« On the bus »** (sur la ligne), l'app liste les capteurs qui répondent, chacun avec son numéro et sa place : **« row 5 »** (rang 5), **« fertiliser, row 5 »** (engrais, rang 5) ou **« outside the profile »** (hors profil). Les capteurs hors profil viennent en premier. Avant la première réponse, la liste indique **« searching… »** (recherche) ; sans aucun capteur sur la ligne, elle indique **« No sensor on the bus. »** (aucun capteur sur la ligne). S'il est le seul, l'app le choisit toute seule : **« The only sensor outside the profile — chosen by itself. »** (le seul capteur hors profil — choisi automatiquement). Sinon, touchez le nouveau capteur dans la liste.

4. Contrôlez **« New number »** (nouveau numéro) — c'est le numéro du rang — et touchez **« Assign No. »** (attribuer le n°) avec le numéro.

5. La fiche affiche les étapes : **« sending the command to the bridge… »** (envoi de la commande à la passerelle), **« sensor found »** (capteur trouvé), **« number written »** (numéro écrit), **« saved for good »** (enregistré définitivement), **« rebooting, waiting for the answer… »** (redémarrage, attente de la réponse), **« answers on the new number »** (répond sous le nouveau numéro). C'est terminé seulement quand le capteur répond sous son nouveau numéro : **« Done. »** (terminé) avec l'ancien et le nouveau numéro et **« sensor answers »** (le capteur répond).

6. Touchez **« Close »** (fermer).
:::

## Mettre un semoir en service {#commission-a-seeder}

Ouvrez **« Number the sensors »** et numérotez les capteurs un par un : choisissez un capteur dans la liste **« On the bus »**, réglez **« New number »**, touchez **« Assign No. »**. Le numéro peut être n'importe lequel de 1 à 199 ; réglez-le avec les touches moins et plus. L'app propose d'abord le premier rang libre du profil ou, si tous les rangs sont pris, le numéro qui suit le dernier rang. Sous le numéro, l'indication nomme la place de ce numéro : **« row 5 »**, **« fertiliser, row 5 »** ou **« outside the profile (rows: 24) »** (hors profil (rangs : 24)). Les capteurs peuvent être numérotés sur la ligne de capteurs complète, pourvu que chacun ait son propre numéro.

> **REMARQUE**
>
> **Branchez les nouveaux capteurs un par un.** Quand deux capteurs répondent sous le même numéro, la passerelle ne peut pas les distinguer et s'arrête avec **« More than one device on the network! »** (plus d'un appareil sur le réseau !).

## Quand cela ne fonctionne pas {#when-it-does-not-work}

| La fiche indique | Que faire |
| --- | --- |
| **« Address taken »** (adresse prise) (le bouton reste inactif) | Un autre capteur répond déjà sous ce numéro. Choisissez un numéro libre, ou renumérotez d'abord le capteur qui le détient. [Code 920](codes-9-setup.md#c920) |
| **« The sensor already has this number »** (le capteur a déjà ce numéro) | Rien à faire. |
| **« Number outside 1…199 »** (numéro hors de 1…199) | Réglez un numéro de 1 à 199. [Code 916](codes-9-setup.md#c916) |
| **« Pick the sensor in the list “On the bus” »** (choisissez le capteur dans la liste « On the bus ») | Touchez un capteur dans la liste. |
| **« Address 7 already used! »** (adresse 7 déjà utilisée !), avec le numéro choisi | La passerelle a trouvé ce numéro pris. Choisissez un numéro libre. [Code 920](codes-9-setup.md#c920) |
| **« No connection »** (pas de connexion) et **« at step: »** (à l'étape :) … | Le capteur a cessé de répondre à cette étape : **« finding the sensor »** (recherche du capteur), **« writing the number »** (écriture du numéro), **« saving »**, **« restart »** (redémarrage) ou **« check on the new number »** (contrôle sous le nouveau numéro). Contrôlez sa fiche et l'alimentation de la ligne de capteurs, puis réessayez. [Code 913](codes-9-setup.md#c913) |
| **« More than one device on the network! »** | Ne laissez qu'un seul nouveau capteur branché. [Code 914](codes-9-setup.md#c914) |
| **« Bridge busy: seed is still flowing. Stop the seeder and retry in a minute. »** (passerelle occupée : les graines s'écoulent encore. Arrêtez le semoir et réessayez dans une minute.) | Arrêtez le semoir et attendez une minute. [Code 912](codes-9-setup.md#c912) |
| **« The bridge did not answer »** (la passerelle n'a pas répondu) | La passerelle n'a pas répondu pendant 30 secondes. Contrôlez la liaison avec la passerelle et réessayez. |
| **« Seed is still flowing — the bridge does not listen to the bus. Stop the seeder. »** (les graines s'écoulent encore — la passerelle n'écoute pas la ligne ; arrêtez le semoir) | Arrêtez le semoir. [Code 912](codes-9-setup.md#c912) |
| **« The bridge is busy with another action, please wait. »** (la passerelle est occupée par une autre action, patientez) | Patientez et réessayez. [Code 917](codes-9-setup.md#c917) |
| **« Error # »** (erreur n°) et un nombre | Voir [9xx · Réponses de la passerelle au réglage](codes-9-setup.md). |

**« Number the sensors »** et **« Replace the sensor »** sont grisés tant que la liaison avec la passerelle est coupée.
