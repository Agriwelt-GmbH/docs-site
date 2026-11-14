---
title: Le profil
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/profile.html
---

# Le profil

Ce que le profil dit au panneau, comment le vérifier, ce que permet chaque élément du profil, quand le panneau refuse un profil et comment il est enregistré.

Le profil indique au panneau **quels appareils, et combien de chacun**, se trouvent sur la machine. Un panneau arrive en général avec le profil déjà réglé. **Vérifiez-le avant de régler quoi que ce soit d'autre** : un appareil absent du profil n'est jamais surveillé, et un appareil du profil qui n'est pas monté déclenche **« Connection lost »** (connexion perdue).

## Vérifier le profil sur l'écran d'accueil {#check-the-profile-on-the-home-screen}

Allumez le panneau et attendez l'apparition de l'écran d'accueil. Puis observez-le :

- **Pas d'alarme « Connection lost »** — le panneau a trouvé tous les appareils que déclare le profil.
- **Pas d'indicateur blanc avec un point d'exclamation** — aucun appareil n'est laissé hors surveillance.
- **Pas d'indicateur rouge avec une croix** — tous les appareils répondent.

Ce que signifient les indicateurs : [Indicateurs](indicators.md). Comment mettre un appareil sous ou hors surveillance : [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md).

> **REMARQUE**
>
> Un profil est parfois livré avec des appareils qui **ne font pas partie de la livraison**, pour que le système puisse être étendu plus tard. Ces indicateurs restent hors surveillance volontairement. N'activez pas leur surveillance.

## Ouvrir le profil {#open-the-profile}

Le profil exige le niveau **« Agronomist »** ([Activer le niveau Agronomist](enable-agronomist-level.md)). Touchez l'écran d'accueil avec deux doigts, puis touchez **« Service »** deux fois et **« Profile »** (profil) deux fois. Changez l'élément sélectionné par un glissement vers la droite ou vers la gauche.

![Le haut du menu Profile.](figures/five-menu-profile)

## Les éléments du profil {#the-profile-items}

| **Élément** | **Plage** |
| --- | --- |
| **« Seed sensors »** | **2 … 120.** Le menu permet de régler 1, mais un tel profil est refusé à l'enregistrement. Capteurs de graines. |
| **« Fertilizer sensors »** | **0 … 60** ; capteurs de graines et d'engrais ensemble **pas plus de 120**. Capteurs d'engrais. |
| **« Liq.fert.flow sensors »** | **0 … 60** — capteurs de section d'engrais liquide. |
| **« Hoppers »** | 0 … 9 — trémies. |
| **« Dispensers »** | 0 … 9 — capteurs d'arbre de doseur. |
| **« Speed »** | **« No »** (non) / **« Control panel »** (capteur câblé au panneau) / **« Input device »** (un capteur de roue sur un appareil d'entrée) / **« Input device (2) »** (deux capteurs de roue sur un appareil d'entrée). |
| **« Fans »** | 0 … 2 — turbines. |
| **« Pressure sensors »** | 0 … 3 — capteurs de pression. |
| **« Work position sensor »** | **« No »** / **« Yes »** (oui) — capteur de position de travail. |
| **« Markers »** | **« No »** / **« One »** (un) / **« Both »** (les deux) — traceurs. |
| **« No battery charge »**, **« Emergency oil pressure »**, **« Ignition »**, **« Low fuel »**, **« Air filter »** | Les capteurs du moteur — **« No »** / **« Yes »** pour chacun. |
| **« EMD of the seeds »** | **0 … 60** — moteurs électriques des doseurs de semences. |
| **« EMD of the fertilizers »** | **0 … 30** — moteurs électriques des doseurs d'engrais ; les deux groupes de moteurs ensemble **pas plus de 60**. |
| **« Tramline actuators »** | 0 … 4 — actionneurs de jalonnage. |
| **« Liq.fert.pump controller »** | 0 … 1 — contrôleur de la pompe d'engrais liquide. |

À la fin du menu se trouvent **« Save settings »** (enregistrer les réglages), **« Load settings »** (charger les réglages), les deux éléments de la carte mémoire et **« Save profile »** (enregistrer le profil) — voir ci-dessous et [Enregistrer et charger les réglages](save-and-load-settings.md).

## Quand le panneau refuse un profil {#when-the-panel-refuses-a-profile}

Le panneau vérifie le profil entier, pas seulement l'élément que vous avez modifié. Il refuse un profil quand :

- les capteurs de trémie, de doseur et de moteur réunis dépassent **12** ;
- ils dépassent **10** alors que les capteurs de pression et de turbine réunis dépassent quatre ;
- les capteurs de pression et de turbine réunis dépassent **cinq** ;
- il y a des **moteurs d'engrais mais pas de moteurs de semences**, ou des moteurs d'engrais sans capteurs d'engrais ;
- il y a des moteurs électriques ou une pompe d'engrais liquide **mais pas de capteur de vitesse**.

## Enregistrer le profil {#save-the-profile}

::: steps
1. Après avoir modifié le profil, touchez **« Save profile »** à la fin du menu, puis touchez-le de nouveau.

2. Si rien n'a été modifié, le panneau affiche **« No changes »** (aucune modification). Si le profil enfreint l'une des règles ci-dessus, il affiche **« Invalid profile! »** (profil invalide) en rouge et n'enregistre rien. Sinon, il demande **« Are you sure? »** (êtes-vous sûr ?).

   ![La question avant l'enregistrement du profil.](figures/five-confirm-sure)

3. Touchez **« Yes »**. Le panneau affiche **« Wait... »** (patientez), puis **« Saved »** (enregistré) et **« Restart system »** (redémarrez le système), et redémarre de lui-même.
:::

Un toucher sur **« No »**, ou en dehors de la fenêtre de question, laisse le profil enregistré tel qu'il était.
