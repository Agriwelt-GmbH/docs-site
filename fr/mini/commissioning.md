---
title: Mise en service d'un nouveau système
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/commissioning.html
---

# Mise en service d'un nouveau système

L'ordre dans lequel un nouveau système Hectare Mini est réglé sur une machine — du raccordement des appareils aux étalonnages — avec un lien vers le détail de chaque étape.

Voici la séquence à suivre par le concessionnaire ou le technicien de service lors de l'installation du système. Chaque étape renvoie à la rubrique qui la détaille. La plupart des paramètres demandent le niveau d'accès **Agronomist** (agronome) — [Activer le niveau Agronomist](enable-agronomist-level.md).

::: steps
1. **Raccordez** tous les appareils au panneau et vérifiez leur alimentation d'après le schéma de câblage de la fiche technique du système.

2. **Vérifiez le profil.** Il doit correspondre à l'équipement de la machine — [Le profil](profile.md). S'il ne correspond pas, réglez-le d'abord.

3. **Vérifiez les liaisons.** Chaque capteur doit répondre et être sous surveillance — voir [Indicateurs](indicators.md) pour la croix rouge et le signe de capteur hors surveillance.

4. **Réglez les paramètres généraux** dans **« Settings »** (réglages) → **« Seeding machine parameters »** (paramètres du semoir) ([Menu Settings](settings-menu.md)) :
   la largeur de travail, **« Width, cm »** (largeur, cm) ; **« Mode of seeding »** (mode de semis) — **« Flow »** (débit) pour un semoir à céréales ; **« Mode of fertilizers »** (mode des engrais) — **« Flow »**.

5. **Réglez les capteurs** ([Réglages des capteurs](sensor-settings.md)) :
   - capteur de vitesse : **« Diameter, cm »** (diamètre, cm) et **« Pulses »** (impulsions) ; **« Imitation, km/h »** (imitation, km/h) sur **« No »** (non) ; puis l'étalonnage de la vitesse ;
   - capteurs d'arbre de doseur : **« Period, s »** (période, s) ; au besoin **« Rotation speed control »** (contrôle de la vitesse de rotation) ou **« Weight control »** (contrôle du poids), chacun suivi de son étalonnage ;
   - turbines : **« Pulses »**, **« Minimum, rpm »** (minimum, tr/min), **« Maximum, rpm »** (maximum, tr/min) ;
   - capteurs de pression : **« Filter »** (filtre), **« Minimum, Pa »** (minimum, Pa), **« Maximum, Pa »** (maximum, Pa) ;
   - capteur de position de l'outil : **« Transporting position signal »** (signal de position de transport) ;
   - capteurs du moteur : **« Activation signal »** (signal d'activation) ;
   - capteurs de graines, et séparément capteurs d'engrais : au moins **« Fraction »** (fraction, c'est-à-dire la taille de la graine) pour la culture.

6. **Réglez le jalonnage**, si la machine fait un jalonnage — après le profil, jamais avant : [Régler le rythme de jalonnage](tramline-rhythm.md).

7. **Sur les machines à moteurs de doseur :** affectez les produits et étalonnez chaque moteur — [Affecter un produit à un moteur](assign-product-to-motor.md), [Étalonner un moteur au poids](calibrate-motor-weight.md).
:::

> **IMPORTANT**
>
> **Le panneau enregistre une modification de lui-même** environ une seconde et demie après la dernière modification et le dernier toucher d'un bouton. Attendez quelques secondes avant d'éteindre.

Chaque capteur se règle séparément — sauf les capteurs de graines, qui partagent un même jeu de réglages, et les capteurs d'engrais, qui en partagent un autre.

Lorsque tout est réglé, revenez au niveau **« Operator »** (opérateur) (éteindre puis rallumer suffit) et passez au [Démarrage rapide](quick-start.md).
