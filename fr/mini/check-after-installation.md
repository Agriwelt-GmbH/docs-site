---
title: Contrôler le système après l'installation
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/check-after-installation.html
---

# Contrôler le système après l'installation

Les contrôles à faire une fois après le montage d'un Hectare Mini — chaque capteur de graines dans son propre rang, comptage, position de travail, vitesse et les autres capteurs — avec ce que l'écran doit afficher à chaque étape et où aller s'il ne l'affiche pas.

Faites ces contrôles une seule fois, quand le système est monté et avant le premier champ. Chaque étape dit ce qu'il faut faire et ce que l'écran doit afficher. Si une étape échoue, la dernière colonne du tableau final vous dit où aller. Ne sautez pas une étape parce que la précédente était bonne.

Il vous faut quelques graines de la culture et un aide. Tous les contrôles se font au niveau **« Operator »** (opérateur), où le boîtier affiche ses fenêtres d'alarme.

## 1. Le profil et les connexions {#check-the-profile}

Faites les trois contrôles de [Vérifier le profil et les connexions](check-profile-and-connections.md). **Réussi** veut dire : la liste du profil correspond à la machine, aucune fenêtre **« Connection lost »** (connexion perdue) n'apparaît après quelques secondes sur l'écran d'accueil, et aucun indicateur n'affiche de croix rouge ni de signe *non surveillé*. L'écran d'accueil ressemble alors à ceci :

![Tous les appareils répondent et sont sous surveillance.](figures/home-all-ok)

Ne continuez que s'il en est ainsi.

## 2. Chaque capteur de graines est dans son propre rang {#every-seed-sensor-in-its-own-row}

Chaque capteur de graines doit se trouver sous le numéro de son propre rang. Contrôlez-le rang par rang :

::: steps
1. Allumez le boîtier et appuyez sur **« HOME »**. Le tableau de semis s'ouvre. Appuyez sur **« PLUS »** jusqu'à l'affichage du tableau **Seed counters** (compteurs de graines), avec une ligne par rang de semis. Lisez le comptage sur ce tableau, qui indique le nombre de graines — pas sur la vue en graines par mètre : celle-ci n'affiche des valeurs que lorsque la machine se déplace.

   ![Le tableau Seed counters.](figures/mini-table-counters)

2. Appuyez sur **« MENU »** puis sur **« PLUS »** pour **« Yes »** (oui), afin de remettre les relevés à zéro — [Remettre à zéro les relevés du tableau de semis](zero-the-readings.md).

3. Laissez tomber quelques graines à la main dans le tube de descente du rang 1. Au lieu de graines, vous pouvez faire passer plusieurs fois dans le tube de descente un petit objet quelconque, par exemple un long collier de serrage — chaque passage est compté. Regardez le tableau : les chiffres du rang 1 doivent changer.

4. Faites de même pour le rang 2, puis pour chaque autre rang, l'un après l'autre. Après chaque rang, regardez quelle ligne du tableau a réagi.

5. Notez chaque rang où un autre rang a réagi, ou aucun.
:::

Un capteur qui réagit dans un autre rang est raccordé dans le mauvais ordre. Pour un rang qui ne réagit pas du tout, regardez son capteur.

Si l'ordre n'est pas bon, donnez au capteur le numéro de son rang — [Configurer un capteur de graines](configure-seed-sensor.md). Si un rang reste muet, ouvrez l'écran d'état de son capteur (l'étape 7 montre comment) : **Status:** doit indiquer **« Working »** (en service). Pour tout autre état, voir [État du capteur de graines](alarms-sensor-state.md) ; pour un capteur qui ne répond pas, voir [Appareil qui ne répond pas](alarms-any-device.md).

## 3. Comptage {#counting}

::: steps
1. Remettez les relevés à zéro comme à l'étape 2 du contrôle précédent.

2. Comptez un nombre connu de graines, par exemple 20, et laissez-les tomber dans le tube de descente d'un rang.

3. Lisez le chiffre de ce rang sur le tableau **Seed counters**. Sur un semoir monograine, il correspond au nombre que vous avez lâché, à une graine près, à condition que **« Fraction »** des capteurs de graines soit réglée pour la taille de la graine.
:::

Si le chiffre est nettement plus élevé — jusqu'au double du nombre —, la fraction est réglée trop petite pour cette graine : une grosse graine, par exemple le maïs, est alors comptée pour deux. Réglez la fraction d'après le tableau de [Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md#fraction-for-the-crop).

## 4. Le capteur de position de travail {#the-work-position-sensor}

Sautez cette étape si le profil n'a pas de capteur de position de travail.

::: steps
1. Abaissez la machine en position de travail. L'écran d'état du capteur de position de travail doit indiquer **« Position: Working »**.

2. Relevez la machine en position de transport. L'écran d'état doit indiquer **« Position: Transporting »**, et sur l'écran d'accueil l'indicateur de position de l'outil clignote en jaune.

3. Abaissez-la et relevez-la encore une fois. L'état doit suivre à chaque fois.
:::

![L'écran d'état du capteur de position de travail.](figures/status-workpos)

Si l'état est inversé ou ne change pas, voir [Capteurs de trémie et de position de travail](hopper-and-work-position-sensors.md) : le paramètre **« Transporting position signal »** doit correspondre à ce que donne le capteur avec la machine relevée.

## 5. Vitesse {#speed}

::: steps
1. Roulez lentement avec la machine en position de travail.

2. L'indicateur de vitesse de l'écran d'accueil doit afficher une vitesse, ni zéro ni une croix rouge.

3. Comparez-la avec le compteur du tracteur ou un navigateur GPS, comme dans le [Démarrage rapide](quick-start.md).
:::

Si aucune vitesse n'est affichée, voir [Vitesse d'avancement : alarmes du capteur de vitesse](alarms-speed-sensor.md). Si la vitesse est fausse d'une proportion constante, étalonnez le capteur — [Étalonner le capteur de vitesse](calibrate-speed.md).

## 6. Les autres capteurs du profil {#the-other-sensors-of-the-profile}

Ne contrôlez que les capteurs que votre profil énumère. Pour chacun, ouvrez son écran d'état comme à l'étape 7 et regardez la ligne **« Link: »** (liaison) : elle doit indiquer **« Normal »**.

| **Capteur** | **Ce qu'il faut faire** | **Ce que l'écran doit afficher** | **Sinon** |
| --- | --- | --- | --- |
| Turbine | Démarrez la turbine. | Sur l'écran d'accueil, une vitesse de turbine en rpm, pas en rouge. Sur l'écran d'état, **F=** en Hz. | [Turbine ou arbre de doseur : alarmes de vitesse](alarms-rotation.md) |
| Pression | Démarrez la turbine. | **P=** en kPa sur l'écran d'état, aucune fenêtre d'alarme. | [Alarmes de pression](alarms-pressure.md) |
| Trémie | Regardez l'écran d'état avec du produit dans la trémie. | **Pin:** indique **"0"** tant que le produit recouvre le capteur. | [Trémie vide](alarms-hopper.md) |
| Arbre de doseur | Ouvrez l'écran d'état. | **F=** en Hz, et aucune fenêtre d'alarme **« No rotation »** tant que la machine sème ou roule. | [Turbine ou arbre de doseur : alarmes de vitesse](alarms-rotation.md) |

## 7. Consigner le résultat {#record-the-result}

Notez ou photographiez ce dont vous aurez besoin si vous devez demander de l'aide plus tard :

::: steps
1. **La version du micrologiciel.** Sur l'écran d'accueil, appuyez sur **« MENU »** et choisissez le dernier élément du menu principal. La fenêtre affiche la version du logiciel, le numéro de série du boîtier et son identifiant matériel. **« BACK »** la ferme.

2. **La date** du contrôle.

3. **Une photo de l'écran d'état** de chaque capteur qui a posé problème, et d'un capteur qui fonctionne. Pour y arriver, maintenez **« MENU »** enfoncé sur l'écran d'accueil jusqu'à ce que l'indicateur de vitesse passe sur fond blanc, sélectionnez le capteur avec **« UP »** / **« DOWN »**, appuyez sur **« MENU »**, puis sélectionnez **« Information »** et appuyez sur **« MENU »**. **« BACK »** quitte — [L'écran d'état d'un capteur](sensor-status-screen.md).
:::

## Si une étape échoue {#if-a-step-fails}

| **Étape** | **Aller à** |
| --- | --- |
| 1. Profil et connexions | [Régler le profil](set-up-the-profile.md), [Appareil qui ne répond pas](alarms-any-device.md) |
| 2. Capteur dans le mauvais rang | [Configurer un capteur de graines](configure-seed-sensor.md) |
| 2. Un rang ne réagit pas | [État du capteur de graines](alarms-sensor-state.md), [Appareil qui ne répond pas](alarms-any-device.md) |
| 3. Comptage | [Capteurs de graines et d'engrais](seed-and-fertilizer-sensors.md) |
| 4. Position de travail | [Capteurs de trémie et de position de travail](hopper-and-work-position-sensors.md) |
| 5. Vitesse | [Alarmes du capteur de vitesse](alarms-speed-sensor.md), [Étalonner le capteur de vitesse](calibrate-speed.md) |
| 6. Turbine, arbre de doseur | [Turbine ou arbre de doseur : alarmes de vitesse](alarms-rotation.md) |
| 6. Pression | [Alarmes de pression](alarms-pressure.md) |
| 6. Trémie | [Trémie vide](alarms-hopper.md) |
| Toujours pas clair | [Avant de contacter le support](before-you-contact-us.md) |
