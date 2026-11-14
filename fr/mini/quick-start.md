---
title: Démarrage rapide — avant et pendant le premier passage
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/quick-start.html
---

# Démarrage rapide — avant et pendant le premier passage

Ce qu'il faut vérifier avant d'entrer dans la parcelle avec le Hectare Mini, comment le panneau commence seul la surveillance, et ce qu'il faut regarder pendant le premier passage.

Ce qui suit suppose que le système a été mis en service — voir [Mise en service](commissioning.md). Avant la saison, le capteur de vitesse doit avoir été étalonné, ainsi que les doseurs si l'on veut surveiller la vitesse de leur arbre ou le poids de semences ([Capteur de vitesse](speed-sensor.md), [Réglages des capteurs](sensor-settings.md)).

## Avant la parcelle {#before-the-field}

::: steps
1. Allumez le panneau et attendez l'écran d'accueil.

2. Appuyez deux fois sur **« HOME »** pour ouvrir l'écran Statistics. Vérifiez que la bonne **parcelle active** est sélectionnée ; pour une nouvelle parcelle, sélectionnez-en une vide ou effacez-la — [Commencer une nouvelle parcelle](start-a-new-field.md).

3. De retour sur l'écran d'accueil, réglez le **seuil d'alarme** du diagramme de semences avec **« PLUS »** / **« MINUS »** — ou, dans les modes **« Hybrid »** (hybride) et **« Precise »** (précis), la **dose de consigne**. **« DOWN »** passe au diagramme d'engrais. Voir [Modifier la dose de consigne](set-the-target-rate.md).

   ![Le diagramme de semences avec le seuil d'alarme en s/s et sa ligne de contrôle.](figures/diagram-threshold)

4. Si des produits sont appliqués au poids, réglez de la même façon leurs doses en kg/ha.

5. Vérifiez les réglages qui changent selon le travail — en mode de réglage des capteurs ([Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md)), capteur par capteur : **« Period, s »** (période, s) de chaque capteur d'arbre de doseur ; **« Minimum, rpm »** (minimum, tr/min) et **« Maximum, rpm »** (maximum, tr/min) de chaque turbine ; **« Minimum, Pa »** (minimum, Pa) et **« Maximum, Pa »** (maximum, Pa) de chaque capteur de pression ; **« Fraction »** (fraction, c'est-à-dire la taille de la graine) et **« Correction »** (correction) des capteurs de graines et des capteurs d'engrais. Tous les capteurs de graines partagent un même jeu de réglages, tous les capteurs d'engrais un autre ; chaque autre capteur a le sien.

6. Assurez-vous que le niveau d'accès est **« Operator »** (opérateur). À un niveau supérieur, aucune fenêtre d'alarme ne s'affiche, et le panneau vous avertit par une alarme si vous commencez à semer. Éteindre puis rallumer ramène au niveau Operator.
:::

## Semis {#seeding}

Démarrez simplement. Il n'y a rien à activer : le panneau commence seul la surveillance des alarmes, avec **un bip court**, dès que ces conditions sont réunies depuis la durée **« Alarm delay »** (temporisation d'alarme ; 3 s par défaut) :

- l'application n'est pas verrouillée à la main ([Verrouiller l'application à la main](lock-application-by-hand.md)) ;
- avec un capteur de position de l'outil sous surveillance : le semoir est en position de travail ;
- avec des moteurs de doseur ou une pompe liquide : le semoir avance, et le capteur de vitesse est sous surveillance et indique une vitesse ;
- sinon : au moins **« Percent of sowing,% »** (pourcentage de rangs en semis ; 20 % par défaut) des rangs sous surveillance sèment — et, si **« Seeding criteria »** (critère de semis) est réglé sur le capteur de vitesse, le semoir avance.

Lorsqu'une condition cesse d'être remplie, la surveillance s'arrête aussitôt avec **trois bips courts**. Il n'existe pas d'alarme distincte pour un semoir qui avance sans qu'aucune semence n'arrive : dans ce cas, la surveillance ne démarre pas et le bip ne retentit pas.

![L'écran d'accueil pendant le travail.](figures/home-at-work)

## Pendant le premier passage, vérifiez {#during-the-first-pass-check}

- la **vitesse** par rapport au compteur du tracteur ou à un navigateur GPS ;
- la **vitesse de la turbine** et la **pression** — dans leurs limites, pas en rouge ;
- les **colonnes de semences** au-dessus de leur ligne, et la dose de semences par rapport à la consigne dans les modes **« Hybrid »** et **« Precise »** ;
- les **colonnes d'engrais** au-dessus de leur ligne ;
- la **dose de produit** en kg/ha par rapport à la consigne ;
- aucun rouge sur un autre indicateur — [Indicateurs](indicators.md).

Si le capteur de vitesse tombe en panne, la vitesse peut être imitée dans ses réglages jusqu'à la réparation ([Capteur de vitesse](speed-sensor.md)). Lorsqu'une alarme apparaît, arrêtez-vous et éliminez le défaut — [Comment fonctionnent les alarmes](how-alarms-work.md). La qualité de la dernière portion se lit sur le [tableau de semis](table-screen.md) ; le résultat de toute la parcelle sur l'[écran Statistics](statistics-screen.md).
