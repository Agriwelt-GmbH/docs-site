---
title: Démarrage rapide — préparer la machine et se mettre en route
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/quick-start.html
---

# Démarrage rapide — préparer la machine et se mettre en route

L'ordre de préparation de la machine, ce qu'il faut contrôler avant le champ, ce qui se passe au départ et ce qu'il faut surveiller pendant le travail.

Votre machine n'a peut-être pas toutes ces étapes — passez celles qu'elle n'a pas.

## Avant le champ {#before-the-field}

::: steps
1. **Calibrez le capteur de vitesse.** La surface, les doses et les écarts sont tous calculés à partir de la vitesse ; une vitesse fausse fausse tous les autres chiffres. **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir) → **« Speed calibration »** (calibrage de la vitesse), au niveau **Agronomist** (agronome). Voir [Calibrer le capteur de vitesse](calibrate-speed.md).

2. **Calibrez les cannelures doseuses** — sur les semoirs à céréales et sur les semoirs monograines dont le doseur d'engrais est entraîné par un moteur électrique. Depuis le menu contextuel de chaque doseur ou moteur, au niveau **Operator** (opérateur), à l'arrêt. Voir [Calibrage en masse d'un moteur](calibrate-motor-weight.md).

3. **Contrôlez le rythme de jalonnage**, si la machine fait des jalonnages. Voir [Régler le rythme de jalonnage](tramline-rhythm.md).

4. **Contrôlez les paramètres des capteurs** — la liste est plus bas.

5. **Contrôlez chaque section** : est-elle sous surveillance, applique-t-elle du produit. Voir [Les quatre états d'une section](section-states.md#the-four-states-of-a-section).

6. **Choisissez le champ** sur l'écran Statistics. Pour un nouveau champ, effacez d'abord ses statistiques. Voir [Écran Statistics](statistics-screen.md#the-menu-of-the-screen).

7. **Réglez les doses** — semis, engrais solide, engrais liquide. Voir [Modifier la dose de consigne](set-the-target-rate.md).

8. **Vérifiez le niveau d'accès.** Il doit être **Operator**.
:::

Les étapes 1 et 2 ne sont pas au même niveau. **« Seeding machine parameters »** et le calibrage de la vitesse qui s'y trouve relèvent du niveau **Agronomist** ; les calibrages en masse des menus contextuels relèvent du niveau **Operator**. L'ordre habituel : passer au niveau Agronomist ([Activer le niveau Agronomist](enable-agronomist-level.md)), faire l'étape 1, revenir à Operator, faire le reste.

> **IMPORTANT**
>
> **L'étape 8 est celle qui gâche une journée.** À partir du niveau Agronomist, le panneau supprime **toutes les alarmes sauf une** : un tube bouché n'est pas signalé. La seule qui passe encore est **« User is Agronomist! Alarms will not be shown! »** (l'utilisateur est Agronomist ! les alarmes ne seront pas affichées !) — émise **une fois**, au début du semis à ce niveau. Le retour au niveau Operator rétablit les alarmes supprimées. Vérifiez le niveau avant chaque départ, pas une fois par saison.

### Paramètres de capteurs à contrôler {#sensor-parameters-to-check}

- **Capteur de vitesse** — « Min speed, km/h » (vitesse min.), « Max speed, km/h » (vitesse max.).
- **Capteur de doseur** — « Period, s » (période), pour chaque capteur.
- **Capteur de turbine** — « Minimum, rpm » (minimum), « Maximum, rpm » (maximum), pour chaque capteur.
- **Capteur de pression** — « Minimum, Pa », « Maximum, Pa », pour chaque capteur.
- **Pompe d'engrais liquide** — « Pulses per liter » (impulsions par litre), « Max pressure, Bar » (pression max.).
- **Capteurs de graines et d'engrais solide** — « Fraction » (fraction), « Correction » (correction), « Recalculation,m » ou « Recalculation,sec » (recalcul) ; en mode « Precise » ou « Hybrid » aussi « Rate error,% » (erreur de dose).
- **Capteurs d'engrais liquide** — « Rate error,% » et, sans pompe dans le profil, « Pulses per liter ». Débitmètres Wilger : **rouge 8900**, **vert 15500**, **bleu 3400** impulsions par litre.
- **Moteurs électriques, mode « Precise »** — « Holes in disk » (trous du disque), pour n'importe quel moteur du groupe.
- **Moteurs électriques, dosage en masse** — pour chaque moteur, « Weight, gr » (masse) divisé par « Rotations » (rotations) par rapport aux caractéristiques de la cannelure. Le calibrage en masse renseigne les deux.

La plupart des paramètres se règlent **par capteur**. Dans les groupes de capteurs de graines, d'engrais solide et d'engrais liquide et dans les deux groupes de moteurs, la plupart des paramètres sont communs à tout le groupe — sauf la surveillance du capteur et l'application du produit, qui restent individuelles. Détails : [Réglages des capteurs](sensor-settings.md).

## Départ {#moving-off}

::: steps
1. Mettez la machine en position de **travail**.

2. **Semoirs monograines à moteurs de doseur :** remplissez les disques — menu principal, **« Fill the disks with seeds »**. Sans cela, les premiers mètres de chaque rang sont vides. Voir [Remplir les disques](fill-the-disks.md).

3. **Semoirs à céréales :** rien à lancer. Les moteurs doseurs se mettent à tourner d'eux-mêmes dès que la commande d'application du produit démarre — au moment où vous avancez. Démarrez tout de même franchement : les alvéoles du rotor doivent se remplir avant que les premiers mètres soient semés à la dose de consigne.

4. Roulez.
:::

> **AVERTISSEMENT**
>
> **Le remplissage des disques et le démarrage des moteurs font tourner des organes machine à l'arrêt.** Assurez-vous que personne ne se trouve près des doseurs, des arbres de doseur ou de la turbine.

**Quand la commande démarre.** Le verrouillage manuel doit être **désactivé** ([Verrouiller l'application à la main](lock-application-by-hand.md)). Si un capteur de position de travail est monté et activé, la commande démarre dès que vous avancez avec la machine abaissée ; sans ce capteur, dès que vous avancez. Les alarmes démarrent quelques secondes plus tard — ce délai se règle sous **« Settings »** → **« Alarm delay »** (temporisation d'alarme), de 2 à 20 secondes.

| **Son** | **Ce qu'il signifie** |
| --- | --- |
| Un bip court | Le panneau voit la machine semer. À partir de là, les sections sont surveillées. |
| Trois bips courts | Le semis s'est arrêté — en fourrière, ou les colonnes sont passées sous la ligne de contrôle. |

Sur les semoirs à céréales en mode « Flow » ou « Hybrid », laissez le panneau trouver lui-même le seuil d'alarme : [Régler automatiquement le seuil d'alarme](set-the-alarm-level.md).

## Pendant le travail {#while-working}

Surveillez quatre choses : la **vitesse** par rapport au tracteur, la **turbine et la pression** dans leur plage, la **dose réelle** par rapport à la dose de consigne, et qu'aucun capteur ne soit en alarme. L'[écran Table](table-screen.md) montre comment chaque section se comporte à l'instant ; l'[écran Statistics](statistics-screen.md) montre comment s'est déroulé tout le champ.

Si le capteur de vitesse tombe en panne, voir [Travailler sans capteur de vitesse](work-without-speed-sensor.md).
