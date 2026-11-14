---
title: Démarrage rapide — préparer la machine et se mettre en route
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/quick-start.html
---

# Démarrage rapide — préparer la machine et se mettre en route

L'ordre de préparation de la machine, ce qu'il faut vérifier avant d'aller au champ, ce qui se passe quand vous démarrez, et ce qu'il faut surveiller pendant le travail.

Votre machine n'a peut-être pas toutes les étapes — sautez celles qu'elle n'a pas. Le menu principal s'ouvre par un **toucher à deux doigts** sur l'écran d'accueil ; le menu contextuel d'un appareil par un **maintien du doigt** sur l'appareil ([Bases de l'interface](interface-basics.md)).

## Avant d'aller au champ {#before-the-field}

::: steps
1. **Étalonnez le capteur de vitesse.** La surface, les doses et les écarts sont tous calculés à partir de la vitesse ; une vitesse fausse fausse tous les autres chiffres. À l'arrêt, maintenez le doigt sur le champ de vitesse et choisissez **« Speed calibration »** (étalonnage de la vitesse) — au niveau Operator. Le même élément se trouve sous **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir), au niveau Agronomist. Voir [Capteur de vitesse](speed-sensor.md).

2. **Étalonnez les cannelures des doseurs** — sur les machines qui appliquent les produits en masse. Depuis le menu contextuel de chaque doseur (**« Dispenser calibration(weight) »**, étalonnage du doseur (masse), affiché quand sa régulation en masse est activée) ou de chaque moteur de doseur, au niveau Operator, à l'arrêt. Voir [Réglages des capteurs](sensor-settings.md).

3. **Vérifiez le rythme de jalonnage**, si la machine fait des jalonnages. Voir [Régler le rythme de jalonnage](tramline-rhythm.md).

4. **Vérifiez les paramètres des capteurs** — la liste est plus bas.

5. **Vérifiez chaque section** : est-elle sous surveillance, applique-t-elle du produit. Voir [Les quatre états d'une section](section-states.md#the-four-states-of-a-section).

6. **Choisissez la parcelle** sur l'écran Statistics : toucher à deux doigts, **« Select field »** (choisir la parcelle). Pour une nouvelle parcelle, effacez d'abord ses statistiques avec **« Zero statistics »** (remettre les statistiques à zéro). Voir [Écran Statistics](statistics-screen.md#the-menu-of-the-screen).

7. **Réglez les doses** — semis, engrais solide, engrais liquide. Voir [Modifier la dose de consigne](set-the-target-rate.md).

8. **Vérifiez le niveau d'accès.** Il doit être **« Operator »** (opérateur) : **« Settings »** → **« User »** (utilisateur).
:::

Plusieurs de ces réglages exigent le niveau Agronomist — **« Seeding machine parameters »** entre autres. Montez le niveau ([Activer le niveau Agronomist](enable-agronomist-level.md)), faites ce qui l'exige, redescendez à Operator, faites le reste.

> **IMPORTANT**
>
> **L'étape 8 est celle qui gâche une journée.** À partir du niveau Agronomist, le panneau n'affiche **aucune fenêtre d'alarme sauf une** : un tube bouché n'est pas signalé. Celle qui passe quand même est **« User is Agronomist! Alarms will not be shown! »** (l'utilisateur est Agronomist ! les alarmes ne seront pas affichées !) — émise **une seule fois**, au démarrage du semis à ce niveau. Les défauts encore présents sont signalés dès que vous êtes revenu à Operator. Vérifiez le niveau avant chaque démarrage, pas une fois par saison.

### Paramètres des capteurs à vérifier {#sensor-parameters-to-check}

- **Capteur de vitesse** — « Min speed, km/h », « Max speed, km/h ».
- **Capteur de doseur** — « Period, s », pour chaque capteur.
- **Capteur de turbine** — « Minimum, rpm », « Maximum, rpm », pour chaque capteur.
- **Capteur de pression** — « Minimum, Pa », « Maximum, Pa », pour chaque capteur.
- **Pompe d'engrais liquide** — « Pulses per liter », « Max pressure, Bar ».
- **Capteurs de graines et d'engrais solide** — « Fraction », « Correction », « Recalculation,m » ou « Recalculation,sec » ; en mode **« Precise »** ou **« Hybrid »** aussi « Rate error,% ».
- **Moteurs électriques, mode « Precise »** — « Holes in disk ».
- **Moteurs électriques, dosage en masse** — pour chaque moteur, « Weight, gr » et « Rotations ». L'étalonnage en masse remplit les deux.

Détails : [Réglages des capteurs](sensor-settings.md).

## Se mettre en route {#moving-off}

::: steps
1. Mettez la machine en position de **travail**.

2. **Semoirs monograines à moteurs de doseur :** remplissez les disques — menu principal, **« Fill the disks with seeds »**. Sans cela, les premiers mètres de chaque rang sont vides. Voir [Remplir les disques](fill-the-disks.md).

3. **Semoirs à céréales :** rien à lancer. Les moteurs de dosage se mettent à tourner d'eux-mêmes dès que la régulation de l'application du produit démarre — au moment où vous démarrez.

4. Roulez.
:::

> **AVERTISSEMENT**
>
> **Le remplissage des disques et le démarrage des moteurs font tourner des mécanismes alors que la machine est à l'arrêt.** Assurez-vous que personne ne se trouve près des doseurs, des arbres de doseur ou de la turbine.

**Quand la régulation démarre.** Le verrouillage manuel doit être **désactivé** ([Verrouiller l'application du produit à la main](lock-application-by-hand.md)). Si un capteur de position de travail est monté et sous surveillance, la régulation commence quand vous avancez avec la machine abaissée ; sans un tel capteur, dès que vous avancez. Les alarmes démarrent après le délai réglé sous **« Settings »** → **« Alarm delay »** (délai d'alarme), de 2 à 20 secondes.

| **Son** | **Ce que cela signifie** |
| --- | --- |
| Un bip court | Le panneau voit la machine semer. À partir de maintenant, les sections sont surveillées. |
| Trois bips courts | Le semis s'est arrêté — en fourrière, ou les colonnes sont passées sous la ligne de contrôle. |

Sur les semoirs à céréales en mode **« Flow »** ou **« Hybrid »**, laissez le panneau trouver lui-même le seuil d'alarme : [Régler le seuil d'alarme automatiquement](set-the-alarm-level.md).

## Pendant le travail {#while-working}

Surveillez quatre choses : la **vitesse** par rapport au tracteur, la **turbine et la pression** dans leur plage, la **dose réelle** par rapport à la dose de consigne, et qu'aucun capteur ne soit en alarme. L'[écran Table](table-screen.md) montre comment va chaque section à l'instant même ; l'[écran Statistics](statistics-screen.md) comment s'est déroulée toute la parcelle.

Si le capteur de vitesse tombe en panne, voir [Travailler sans capteur de vitesse](work-without-speed-sensor.md).
