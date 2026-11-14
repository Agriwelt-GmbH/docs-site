---
title: Mettre à jour la passerelle
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/bridge-update.html
---

# Mettre à jour la passerelle

Mettre à jour le micrologiciel de la passerelle depuis l'app par Bluetooth — quand la mise à jour est proposée, les conditions, les trois étapes et la signification de chaque résultat.

L'app Hectare embarque le micrologiciel de la passerelle. Quand l'app détient une version plus récente que celle de la passerelle, elle propose la mise à jour. La mise à jour passe par Bluetooth et dure environ 3 minutes. La passerelle écrit le nouveau micrologiciel dans une partie libre de sa mémoire ; le micrologiciel en service reste intact et continue de fonctionner jusqu'à ce que le nouveau ait fait ses preuves. Vos réglages de machine (le profil des rangs) ne sont pas effacés par la mise à jour.

Ouvrez **« Settings »** (réglages) › **« Machine »** › **« Bridge »** (passerelle) › **« Bridge update »** (mise à jour de la passerelle). La ligne **« Bridge update »** affiche à sa droite la version que l'app peut installer ; vide, cela signifie qu'il n'y a rien à installer. La page affiche **« Version in the bridge »** (version dans la passerelle) et **« Version in the app »** (version dans l'app).

| La page indique | Signification |
| --- | --- |
| **« Update the bridge to »** (mettre la passerelle à jour vers) et une version | Une mise à jour est proposée. |
| **« The bridge has the newest version »** (la passerelle a la dernière version) | Rien à faire. |
| **« The bridge is not connected »** (la passerelle n'est pas connectée) | Connectez-la d'abord : [Première connexion à la passerelle](first-connection.md). |
| **« The bridge cannot be updated over Bluetooth »** (la passerelle ne peut pas être mise à jour par Bluetooth) | Cette passerelle ne peut pas recevoir de mise à jour depuis l'app. Demandez à Agriwelt. |

L'app ne propose que le micrologiciel conçu pour cette carte de passerelle, et seulement une version plus récente que celle de la passerelle. Tout le reste n'est pas proposé du tout.

## Lancer la mise à jour {#run-the-update}

::: steps
1. Arrêtez la machine. Gardez la passerelle sous tension et votre appareil — tablette ou téléphone — près d'elle.

2. Touchez **« Update the bridge to »**. Les conditions apparaissent sous **« Before the update »** (avant la mise à jour) : **« The bridge is powered, the device is near it. »** (la passerelle est sous tension, l'appareil est près d'elle) · **« The machine stands: do not seed during the update. »** (la machine est à l'arrêt : ne semez pas pendant la mise à jour) · **« Takes about 3 minutes. »** (dure environ 3 minutes) · **« Do not leave the app or lock the screen. »** (ne quittez pas l'app et ne verrouillez pas l'écran).

3. Touchez **« Start the update »** (lancer la mise à jour) (ou **« Cancel »** (annuler)). Trois étapes suivent : **« Firmware transfer »** (transfert du micrologiciel) avec un pourcentage, **« Bridge restart »** (redémarrage de la passerelle), **« Checking the new firmware »** (contrôle du nouveau micrologiciel). Ne quittez pas l'app et ne vous éloignez pas avec l'appareil. L'écran ne s'assombrit pas et le bouton de retour est masqué jusqu'à l'apparition du résultat.

4. Le résultat apparaît avec son code, par exemple **« 804 · Bridge updated »** (passerelle mise à jour). Touchez **« Done »** (terminé).
:::

La mise à jour entière dure 2 à 2,5 minutes : le transfert 1 à 1,5 minute (57 secondes sur un iPhone XS, 95 secondes sur un iPad), le redémarrage 12 à 25 secondes, le contrôle environ 25 secondes.

## Après le redémarrage {#after-the-restart}

Environ 20 secondes après le démarrage du nouveau micrologiciel, la passerelle se contrôle elle-même — sa radio, la ligne de capteurs, ses réglages et sa description d'appareil — et ne garde le nouveau micrologiciel que si tout est en ordre. Si le contrôle échoue, l'app redémarre la passerelle une fois de plus après 50 secondes et elle revient au micrologiciel précédent (code 805) ; cela prend environ 2,5 minutes. Si aucun appareil avec l'app n'est à proximité à ce moment, la passerelle continue de fonctionner sur le micrologiciel non confirmé jusqu'à ce qu'on l'éteigne puis la rallume, et revient alors d'elle-même au précédent.

Pendant la mise à jour, les rangs ne sont pas surveillés : l'app ne déclenche pas **« Bridge link lost »** (liaison avec la passerelle perdue) et l'avertisseur sonore reste muet.

## Les résultats {#the-results}

| Résultat | Que faire |
| --- | --- |
| **804 · « Bridge updated »** | Rien. La passerelle exécute le nouveau micrologiciel et fonctionne comme avant. |
| **805 · « The bridge went back to its previous firmware »** (la passerelle est revenue à son micrologiciel précédent) | Le nouveau micrologiciel a échoué à son contrôle ; la passerelle exécute le précédent et fonctionne. Communiquez le code au service. |
| **806 · « The bridge refused the firmware: the signature does not match »** (la passerelle a refusé le micrologiciel : la signature ne correspond pas) | Mettez l'app à jour et réessayez. Si cela se répète, communiquez le code au service. |
| **807 · « The bridge refused the firmware: it is not newer »** (la passerelle a refusé le micrologiciel : il n'est pas plus récent) | Rien. La passerelle garde son propre micrologiciel. |
| **808 · « Firmware transfer interrupted »** (transfert du micrologiciel interrompu) | Gardez l'appareil près de la passerelle et réessayez ; le transfert repart du début. |
| **809 · « The bridge is busy: no update now »** (la passerelle est occupée : pas de mise à jour maintenant) ou **« The machine is seeding: the update did not start »** (la machine sème : la mise à jour n'a pas démarré) | Terminez le semis, effacez l'alarme active, attendez une minute et réessayez. |
| **810 · « The bridge did not come back after the restart »** (la passerelle n'est pas revenue après le redémarrage) | Contrôlez l'alimentation de la passerelle, attendez une minute. Toujours pas revenue — coupez puis rétablissez son alimentation et rouvrez cette page. |

Tous les résultats : [8xx · Mise à jour de la passerelle](codes-8-gateway-update.md).

> **AVERTISSEMENT**
>
> **N'éteignez pas la passerelle pendant la mise à jour.** Si le transfert s'interrompt, la passerelle reste sur son micrologiciel précédent ; recommencez.
