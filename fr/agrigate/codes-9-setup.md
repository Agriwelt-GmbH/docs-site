---
title: 9xx · Réponses de la passerelle au réglage
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes-9-setup.html
---

# 9xx · Réponses de la passerelle au réglage

Codes 901–921 : la passerelle a refusé ou n'a pas pu terminer l'écriture du profil de machine, d'un réglage ou d'un numéro de capteur.

Les codes 9xx sont les réponses de la passerelle quand l'app lui écrit quelque chose : le profil de machine, un réglage d'un groupe de rangs, la dose, ou le numéro d'un capteur. Dans cette préversion, l'app affiche un nombre après les mots **« the bridge answered with code »** (la passerelle a répondu avec le code), après **« Error # »** (erreur n°), ou à la fin d'un message tel que **« write interrupted (code »** (écriture interrompue (code). Ajoutez 900 à ce nombre pour obtenir le code de service : « code 13 » donne 913. Certaines réponses ont leurs propres mots ; ils sont donnés ci-dessous.

Comment lire un code, les quatre classes et l'aspect de chacune dans l'app : [Comment fonctionnent les codes de service](codes.md).

## 901 · Données de réglage endommagées en route {#c901}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« the bridge rejected the profile (checksum) »** (la passerelle a rejeté le profil (somme de contrôle)). Ailleurs : « code 1 ».

**Que faire :**

1. Écrivez de nouveau, la tablette près de la passerelle.

## 902 · Profil trop volumineux pour la passerelle {#c902}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« too many rows for the bridge (up to »** (trop de rangs pour la passerelle (jusqu'à) et le plus grand nombre de rangs.

**Que faire :**

1. Réduisez le nombre de rangs et d'appareils dans le profil de machine.

## 903 · La passerelle ne connaît pas un rôle de canal {#c903}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« the bridge doesn't understand this profile (code »** (la passerelle ne comprend pas ce profil (code) 3.

**Que faire :**

1. Mettez l'app et le micrologiciel de la passerelle à la même version : mettez l'app à jour, puis la passerelle.
2. Communiquez le code au service.

## 904 · La passerelle ne connaît pas un type de mesure {#c904}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« the bridge doesn't understand this profile (code »** (la passerelle ne comprend pas ce profil (code) 4.

**Que faire :**

1. Mettez l'app et le micrologiciel de la passerelle à la même version : mettez l'app à jour, puis la passerelle.
2. Communiquez le code au service.

## 905 · La passerelle n'a pas pu enregistrer {#c905}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« the bridge could not save the profile »** (la passerelle n'a pas pu enregistrer le profil).

**Que faire :**

1. Écrivez de nouveau.
2. Si cela se répète, communiquez le code au service.

## 906 · Écriture interrompue {#c906}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« write interrupted (code »** (écriture interrompue (code) 6.

**Que faire :**

1. Écrivez de nouveau, la tablette près de la passerelle.

## 907 · La passerelle ne connaît pas la commande {#c907}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** **« the bridge answered with code »** (la passerelle a répondu avec le code) 7, ou **« Error # »** (erreur n°)7.

**Que faire :**

1. Mettez l'app et le micrologiciel de la passerelle à la même version : mettez l'app à jour, puis la passerelle.
2. Communiquez le code au service.

## 908 · Version du profil non prise en charge {#c908}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« the bridge doesn't understand this profile (code »** (la passerelle ne comprend pas ce profil (code) 8.

**Que faire :**

1. Mettez l'app et le micrologiciel de la passerelle à la même version : mettez l'app à jour, puis la passerelle.
2. Communiquez le code au service.

## 909 · Données de réglage arrivées trop vite {#c909}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« write interrupted (code »** (écriture interrompue (code) 9.

**Que faire :**

1. Écrivez de nouveau, la tablette près de la passerelle.

## 910 · Délai d'écriture dépassé {#c910}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« write interrupted (code »** (écriture interrompue (code) 10.

**Que faire :**

1. Écrivez de nouveau, la tablette près de la passerelle.

## 911 · La passerelle ne connaît pas les données de l'appareil {#c911}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Dans la ligne d'état du profil : **« the bridge doesn't understand this profile (code »** (la passerelle ne comprend pas ce profil (code) 11.

**Que faire :**

1. Mettez l'app et le micrologiciel de la passerelle à la même version : mettez l'app à jour, puis la passerelle.
2. Communiquez le code au service.

## 912 · Passerelle occupée : semis ou autre opération {#c912}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** **« bridge busy: seeding under way »** (passerelle occupée : semis en cours) dans la ligne d'état du profil ; **« Bridge busy: seed is still flowing. Stop the seeder and retry in a minute. »** (passerelle occupée : les graines s'écoulent encore ; arrêtez le semoir et réessayez dans une minute) ou **« Seed is still flowing — the bridge does not listen to the bus. Stop the seeder. »** (les graines s'écoulent encore — la passerelle n'écoute pas la ligne ; arrêtez le semoir) lors de la numérotation d'un capteur.

**Que faire :**

1. Arrêtez le semis, ou attendez la fin de l'autre opération de réglage.
2. Réessayez.

## 913 · Le capteur n'a pas répondu pendant la numérotation {#c913}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Lors de la numérotation d'un capteur : **« No connection »** (pas de connexion) suivi de **« at step: »** (à l'étape :) et de l'étape, par exemple **« saving »** (enregistrement).

**Que faire :**

1. Vérifiez que le capteur est connecté et que la ligne de capteurs est alimentée.
2. Réessayez.

## 914 · Plus d'un nouveau capteur a répondu {#c914}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Lors de la numérotation d'un capteur : **« More than one device on the network! »** (plus d'un appareil sur le réseau !)

**Que faire :**

1. Ne laissez connecté qu'un seul nouveau capteur.
2. Réessayez.

## 915 · Le capteur a refusé le numéro {#c915}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Lors de la numérotation d'un capteur : **« Error # »** (erreur n°)15 suivi de l'étape.

**Que faire :**

1. Réessayez.
2. Si cela se répète, communiquez au service le code et le numéro du capteur.

## 916 · Numéro hors de la plage autorisée {#c916}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Lors de la numérotation d'un capteur : **« Number outside 1…199 »** (numéro hors de 1…199) ; le bouton reste inactif.

**Que faire :**

1. Choisissez un numéro dans la plage autorisée — le numéro que l'app propose pour le rang.

## 917 · Passerelle occupée par une autre opération sur les capteurs {#c917}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Lors de la numérotation d'un capteur : **« The bridge is busy with another action, please wait. »** (la passerelle est occupée par une autre action, patientez)

**Que faire :**

1. Attendez la fin de l'opération en cours sur les capteurs.
2. Réessayez.

## 918 · Réglage du groupe de rangs refusé {#c918}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** **« the bridge answered with code »** (la passerelle a répondu avec le code) 18.

**Que faire :**

1. Mettez l'app et le micrologiciel de la passerelle à la même version : mettez l'app à jour, puis la passerelle.
2. Communiquez le code au service.

## 919 · Mode de contrôle refusé {#c919}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** **« the bridge answered with code »** (la passerelle a répondu avec le code) 19.

**Que faire :**

1. Mettez l'app et le micrologiciel de la passerelle à la même version : mettez l'app à jour, puis la passerelle.
2. Communiquez le code au service.

## 920 · Numéro de capteur déjà pris {#c920}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Lors de la numérotation d'un capteur : **« Address taken »** (adresse prise) — un autre capteur répond déjà sous ce numéro ; le bouton reste inactif. Ou **« Address 7 already used! »** (adresse 7 déjà utilisée !), avec votre numéro, quand la passerelle trouve le numéro pris.

**Que faire :**

1. Choisissez un numéro libre.
2. Ou donnez d'abord un autre numéro au capteur qui détient celui-ci.

## 921 · Réglage du moteur refusé {#c921}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** **« the bridge answered with code »** (la passerelle a répondu avec le code) 21.

**Que faire :**

1. Mettez l'app et le micrologiciel de la passerelle à la même version : mettez l'app à jour, puis la passerelle.
2. Communiquez le code au service.
