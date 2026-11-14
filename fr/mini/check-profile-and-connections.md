---
title: Vérifier le profil et les connexions
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/check-profile-and-connections.html
---

# Vérifier le profil et les connexions

Le premier contrôle après l'installation d'un Hectare Mini — le profil correspond-il à la machine, chaque appareil répond-il, chaque capteur est-il sous surveillance — sous forme de procédure avec ce que l'écran affiche à chaque étape.

Le boîtier ne surveille que les appareils que son **profil** énumère. Les systèmes sont en général livrés avec le profil déjà réglé, mais avant de régler le moindre paramètre, vérifiez qu'il correspond à la machine et que chaque appareil répond. Ce contrôle ne demande aucun code d'accès.

## 1. Vérifier le profil {#check-the-profile}

::: steps
1. Raccordez tous les appareils au boîtier et alimentez-les comme l'indique le schéma de câblage de la fiche technique du système.

2. **Maintenez « UP » enfoncé** et allumez le boîtier. L'écran de démarrage apparaît, puis la vue du profil. Relâchez la touche.

   ![La vue du profil affichée au démarrage.](figures/profile-view)

3. Lisez la vue du profil, de haut en bas :
   - le nom du boîtier avec la version du logiciel, en vert, et **SN#** avec le numéro de série ;
   - la ligne **« Speed »** (vitesse) avec le mode de raccordement du capteur de vitesse : **« Control panel »** (boîtier de commande), **« Input device »** (module d'entrée) ou **« Input device (2) »** ;
   - chaque type d'appareil du profil avec son nombre, ou **« Yes »** (oui) pour un appareil qui n'existe qu'une fois, comme le capteur de position de travail.

   **« UP »** et **« DOWN »** font défiler la liste quand elle est plus longue que l'écran.

4. Comparez la liste avec la machine et le schéma de câblage.

5. Attendez que l'indication **« BACK - exit »** (BACK - quitter) apparaisse en bas — le boîtier l'affiche dès que les appareils ont répondu, au plus tard après 15 secondes. Appuyez sur **« BACK »**. L'écran d'accueil s'ouvre.
:::

Si le profil ne correspond pas à la machine, réglez-le d'abord : [Régler le profil](set-up-the-profile.md).

## 2. Vérifier que chaque appareil répond {#check-that-every-device-answers}

Attendez quelques secondes sur l'écran d'accueil. Si aucune fenêtre **« Connection lost »** (connexion perdue) n'apparaît, le boîtier a trouvé tous les appareils du profil.

![« Connection lost » pour le capteur de turbine 1.](figures/alarm-link-lost-fan)

Quand plusieurs appareils d'un même type ne répondent pas, une seule fenêtre en énumère tous les numéros — ici les capteurs de pression 1 à 3 :

![« Connection lost » pour trois capteurs de pression.](figures/alarm-link-lost-pressure)

> **IMPORTANT**
>
> **Un appareil qui ne répond pas n'est pas surveillé.** Vérifiez encore une fois son raccordement d'après le schéma de câblage et le profil. Si vous ne trouvez pas la cause, appelez le service après-vente — voir [Appareil qui ne répond pas](alarms-any-device.md).

## 3. Vérifier que chaque capteur est sous surveillance {#check-that-every-sensor-is-under-control}

Un capteur **hors surveillance** n'est pas surveillé du tout. Son indicateur affiche le signe gris clignotant *non surveillé* ou **!!!!** à la place de la valeur ; sous une colonne du schéma, il affiche une case blanche avec **!** — voir [Indicateurs](indicators.md).

![Le capteur de trémie, le capteur de turbine et le capteur de graines 11 hors surveillance.](figures/home-unmonitored)

S'il y a un tel capteur, remettez-le sous surveillance :

::: steps
1. Sur l'écran d'accueil, maintenez **« MENU »** enfoncé jusqu'à ce que l'indicateur de vitesse passe sur fond blanc. Le boîtier est en mode de réglage des capteurs. Relâchez la touche.

   ![Le mode de réglage des capteurs, capteur de vitesse sélectionné.](figures/sensor-mode-enter)

2. Appuyez sur **« DOWN »** (ou **« UP »**) jusqu'à sélectionner le capteur hors surveillance. Un capteur de graines est sélectionné quand son numéro, sous la colonne, est sur fond blanc.

   ![Le capteur de turbine sélectionné.](figures/sensor-selected)

3. Appuyez sur **« PLUS »**. Le boîtier demande si vous êtes sûr ; appuyez sur **« MENU »** pour répondre **« Yes »**. **« BACK »** répond **« No »** (non).

   ![La question posée avant de modifier la surveillance d'un capteur.](figures/confirm-window)

4. Répétez les étapes 2 et 3 pour chaque capteur hors surveillance. La question n'est posée que la première fois tant que vous restez dans ce mode.

5. Appuyez sur **« BACK »** pour quitter le mode de réglage des capteurs.
:::

Activer la surveillance d'un capteur, c'est ce que ce manuel appelle *mettre un capteur sous surveillance*. Pour en savoir plus : [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md).

## Le résultat {#the-result}

Chaque capteur doit être sous surveillance, et aucun indicateur ne doit afficher de croix rouge — le signe d'un appareil qui ne répond pas.

Quand tout est en ordre, l'écran d'accueil affiche chaque appareil dans son gris normal, sans croix rouge ni signe *non surveillé* :

![Tous les appareils répondent et sont sous surveillance.](figures/home-all-ok)

Passez ensuite aux réglages : [Mise en service](commissioning.md).
