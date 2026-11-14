---
title: Alarmes du moteur : pression d'huile, charge de la batterie, carburant, filtre à air
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-engine.html
---

# Alarmes du moteur : pression d'huile, charge de la batterie, carburant, filtre à air

Que faire quand un capteur du moteur séparé entraînant la turbine du Hectare Mini signale une pression d'huile basse, l'absence de charge de la batterie, un niveau de carburant bas ou un filtre à air encrassé.

Les capteurs d'un moteur séparé entraînant la turbine déclenchent tous le même texte d'alarme, **« FAILURE »** (défaut). **La ligne d'appareil désigne le capteur** — c'est cette ligne que vous cherchez ici. Les réglages de ces capteurs : [Capteurs du moteur d'entraînement de la turbine](engine-sensors.md).

Le capteur d'allumage ne déclenche aucune alarme. Il maintient silencieuses les alarmes de pression d'huile et de charge de la batterie tant que l'allumage est coupé.

## « Emergency oil pressure » — pression d'huile critique {#emergency-oil-pressure}

**Ce que cela signifie.** Le capteur de pression d'huile trop basse du moteur s'est déclenché — allumage mis, s'il y a un capteur d'allumage.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Arrêtez le moteur et contrôlez le niveau et la pression d'huile.
2. Le capteur de pression d'huile est en bon état.
3. **« Activation signal »** (signal d'activation) du capteur de pression d'huile : comparez **Pin:** sur son écran d'état avec l'état réel.
4. Si l'alarme survient moteur arrêté : le capteur d'allumage est-il dans le profil et sous surveillance ? Est-il en bon état ?

## « No battery charge » — pas de charge de la batterie {#no-battery-charge}

**Ce que cela signifie.** La batterie n'est pas chargée par le moteur — allumage mis, s'il y a un capteur d'allumage.

**Ce qu'il faut contrôler, dans cet ordre :**

1. L'alternateur, sa courroie et le circuit de charge du moteur.
2. Le capteur de charge de la batterie est en bon état.
3. **« Activation signal »** du capteur de charge de la batterie.
4. Si l'alarme survient moteur arrêté : le capteur d'allumage est-il dans le profil et sous surveillance ? Est-il en bon état ?

## « Low fuel » — niveau de carburant bas {#low-fuel}

**Ce que cela signifie.** Il reste peu de carburant dans le réservoir du moteur.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Faites le plein.
2. Le capteur de niveau de carburant est en bon état.
3. **« Activation signal »** du capteur de niveau de carburant.
4. **« Signal delay, sec »** (délai du signal, s) — le carburant qui ballotte dans le réservoir sur sol accidenté peut le déclencher ; la valeur par défaut est de 15 secondes.

## « Air filter » — filtre à air {#air-filter}

**Ce que cela signifie.** Le filtre à air du moteur est encrassé.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Nettoyez ou remplacez le filtre à air.
2. Le capteur de filtre à air est en bon état.
3. **« Activation signal »** du capteur de filtre à air.
4. **« Signal delay, sec »** — la valeur par défaut est de 5 secondes.
