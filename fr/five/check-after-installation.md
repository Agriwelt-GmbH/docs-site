---
title: Vérifier le système après l'installation
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/check-after-installation.html
---

# Vérifier le système après l'installation

Une vérification pas à pas, à faire une fois après le montage — chaque appareil répond, chaque capteur de graines est dans son propre rang, le comptage, la position de travail, la vitesse et les autres capteurs fonctionnent — et ce qu'il faut noter.

Faites cette vérification **une seule fois, après le montage du système et avant la première parcelle**. Chaque étape dit quoi faire, ce que l'écran doit montrer et où aller s'il ne le montre pas. Votre machine n'a peut-être pas tous les appareils — sautez les étapes pour ceux qu'elle n'a pas.

Commencez au niveau **« Operator »** : c'est le niveau où les fenêtres d'alarme sont affichées ([Niveaux d'accès](access-levels.md)). Le panneau démarre à ce niveau à chaque mise sous tension.

::: steps
1. **Vérifiez que chaque appareil répond.** Allumez le panneau et attendez l'écran d'accueil ([Mise sous tension](switching-on.md)).

   - Le profil doit correspondre à la machine : le nombre de capteurs de graines égale le nombre de rangs, et les autres appareils sont ceux que la machine possède ([Le profil](profile.md)). Les réglages de la machine sont dans [Paramètres du semoir](seeding-machine-parameters.md) ; les paramètres de capteurs à vérifier sont listés dans [Démarrage rapide](quick-start.md).
   - Pas de fenêtre d'alarme **« Connection lost »** (connexion perdue), pas d'indicateur rouge avec une **×**, pas d'indicateur blanc avec **!**, pas d'indicateur rouge avec **?** ([Indicateurs](indicators.md)).
   - Ouvrez l'écran d'état d'un appareil : maintenez le doigt dessus, puis **« Information »** (informations). Glissez vers la gauche ou la droite à travers chaque appareil de la liste. **« Link: »** (liaison) doit afficher **« Normal »** pour chacun ([L'écran d'état d'un capteur](sensor-status-screen.md)).
   - Un capteur de graines ou d'engrais doit afficher **Status:** **Working**.

   **Sinon :** [Connexion perdue, mauvais appareil](alarms-any-device.md) · [Capteur obstrué ou cassé](alarms-sensor-state.md) · un appareil hors surveillance : [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md).

2. **Vérifiez que chaque capteur de graines est dans son propre rang.** La machine est à l'arrêt. Ouvrez l'écran Table par un **long glissement vers la gauche** sur l'écran d'accueil. Touchez l'écran avec **deux doigts** et touchez **« Yes »** (oui) à la question **« Zero readings? »** (remettre les mesures à zéro ?) ([Remettre à zéro les mesures](zero-the-readings.md)). Laissez ensuite tomber quelques graines à la main dans le tube de descente de graines du rang 1, l'une après l'autre. Au lieu de graines, vous pouvez faire passer plusieurs fois dans le tube de descente un petit objet quelconque, par exemple un long collier de serrage — chaque passage est compté. Faites de même pour le rang 2, le rang 3, et ainsi de suite jusqu'au dernier rang.

   - Seule la ligne du rang dans lequel vous laissez tomber les graines réagit. En mode « Precise », passez au tableau des compteurs de graines par un **long** glissement à deux doigts — le compteur de ce rang augmente ([L'écran Table](table-screen.md)). Lisez le comptage sur ce tableau, qui indique le nombre de graines, pas sur la vue en graines par mètre : celle-ci n'affiche des valeurs que lorsque la machine se déplace. Dans les autres modes, observez **sds/s** de ce rang.
   - La ligne d'un **autre** rang réagit : ce capteur est branché dans le mauvais ordre. Corrigez l'ordre des branchements et recommencez l'essai.
   - Aucune ligne ne réagit : voir l'étape 1 pour ce capteur.

   **Sinon :** [Connexion perdue, mauvais appareil](alarms-any-device.md) · [Capteur obstrué ou cassé](alarms-sensor-state.md).

3. **Vérifiez le comptage.** Remettez les mesures à zéro, comme à l'étape 2. Laissez tomber un nombre connu de graines, par exemple 20, une par une dans le tube de descente de graines d'un rang. Lisez le compteur de ce rang dans le tableau des compteurs de graines (mode « Precise »), le tableau qui indique le nombre de graines. Sur un semoir monograine, il correspond au nombre que vous avez laissé tomber, à une graine près, à condition que **« Fraction »** des capteurs de graines soit réglée pour la taille de la graine. Notez les deux nombres. Recommencez pour un autre rang.
   Si le chiffre est nettement plus élevé — jusqu'au double du nombre —, la fraction est réglée trop petite pour cette graine : une grosse graine, par exemple le maïs, est alors comptée pour deux. Réglez la fraction d'après le tableau de [Capteurs de graines et capteurs d'engrais solide](seed-and-fertilizer-sensors.md#fraction-for-the-crop).

   **Sinon :** notez les deux valeurs et lisez [Avant de contacter l'assistance](before-you-contact-us.md).

4. **Vérifiez le capteur de position de travail.** Abaissez la machine en position de travail, puis relevez-la en position de transport.

   - L'indicateur de position de la machine est **vert** quand elle est abaissée, **jaune** et clignotant quand elle est relevée ([Indicateurs](indicators.md#implement-position)).
   - Sur l'écran d'état du capteur, **« Position: Working »** et **« Position: Transporting »** (position : au travail / en transport) suivent la machine.
   - Si les deux sont inversés, vérifiez le réglage **« Transporting position signal »** (signal de position de transport) ([Capteurs de trémie, de position de travail et du moteur](hopper-position-engine-sensors.md)).

5. **Vérifiez la vitesse.** Étalonnez d'abord le capteur de vitesse si ce n'est pas fait ([Étalonner le capteur de vitesse](calibrate-speed.md)). Puis roulez.

   - Le champ de vitesse affiche un chiffre blanc. Il correspond à la vitesse du tracteur.
   - Il n'affiche pas **XX.X**, **!!.!** ni **????**.
   - Sur l'écran d'état du capteur de vitesse, la fréquence **F=** change pendant que vous roulez.

   **Sinon :** [Alarmes du capteur de vitesse](alarms-speed-sensor.md) · [Capteur de vitesse d'avancement](speed-sensor.md) · [Travailler sans capteur de vitesse](work-without-speed-sensor.md).

6. **Vérifiez les autres capteurs de la machine.** Une courte vérification chacun :

   - **Trémie.** L'icône de la trémie est pleine et verte quand il y a du produit dans la trémie. [Trémie vide](alarms-hopper.md).
   - **Turbine.** Démarrez la turbine. L'icône de la turbine est verte et affiche la vitesse en tr/min. [Arbre de turbine ou de doseur : alarmes de vitesse](alarms-rotation.md).
   - **Pression d'air.** L'icône de pression est verte et affiche la pression en kPa tant que la turbine tourne. [Pression d'air](alarms-pressure.md).
   - **Arbre du doseur.** Tant que l'arbre tourne, l'icône du doseur tourne. [Arbre de turbine ou de doseur : alarmes de vitesse](alarms-rotation.md).
   - **Traceurs.** Abaissez et relevez les traceurs. L'icône des traceurs montre le ou les bras abaissés ou relevés ([Indicateurs](indicators.md#markers)).
   - **Moteurs de doseur et actionneurs de jalonnage.** Ouvrez l'écran Motors. Chaque tuile affiche sa valeur ; aucune n'a de **×** rouge ([L'écran Motors](motors-screen.md)).
   - **Capteurs du moteur.** Les indicateurs du moteur que la machine possède sont verts ; la clé d'allumage est verte quand l'allumage est mis ([Indicateurs](indicators.md#engine-sensors)).

7. **Notez le résultat.**

   - Touchez à deux doigts l'écran d'accueil, puis **« About »** (à propos). Notez la version du micrologiciel et le numéro de série. Fermez la fenêtre avec **« Close »** (fermer).
   - Notez la date et la machine.
   - Photographiez les écrans d'état des capteurs — au moins ceux qui montrent un appareil avec sa liaison et son état.
:::

Gardez les notes et les photos. Si vous avez besoin d'aide plus tard, c'est ce que l'assistance demande en premier ([Avant de contacter l'assistance](before-you-contact-us.md)).

## Si une étape échoue {#if-a-step-fails}

| **Étape** | **Aller à** |
| --- | --- |
| 1. Un appareil ne répond pas | [Connexion perdue, mauvais appareil](alarms-any-device.md) |
| 1. Un capteur de graines signale un défaut | [Capteur obstrué ou cassé](alarms-sensor-state.md) |
| 1. Un appareil est hors surveillance | [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md) |
| 1. Le profil ne correspond pas à la machine | [Le profil](profile.md) |
| 2, 3. Un rang ne réagit pas, réagit dans un autre rang, ou le comptage est faux | [Connexion perdue, mauvais appareil](alarms-any-device.md), puis [Avant de contacter l'assistance](before-you-contact-us.md) |
| 4. La position ne suit pas la machine | [Capteurs de trémie, de position de travail et du moteur](hopper-position-engine-sensors.md) |
| 5. Pas de vitesse ou vitesse fausse | [Alarmes du capteur de vitesse](alarms-speed-sensor.md), [Étalonner le capteur de vitesse](calibrate-speed.md), [Travailler sans capteur de vitesse](work-without-speed-sensor.md) |
| 6. Trémie | [Trémie vide](alarms-hopper.md) |
| 6. Turbine, arbre de doseur | [Arbre de turbine ou de doseur : alarmes de vitesse](alarms-rotation.md) |
| 6. Pression d'air | [Pression d'air](alarms-pressure.md) |
| Toute autre panne | [Fonctionnement des alarmes](how-alarms-work.md) |
