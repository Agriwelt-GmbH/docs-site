---
title: Moteur : pression d'huile, charge de la batterie, carburant, filtre à air
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-tractor.html
---

# Moteur : pression d'huile, charge de la batterie, carburant, filtre à air

Que faire quand l'un des capteurs du moteur — pression d'huile, charge de la batterie, niveau de carburant, filtre à air — déclenche une alarme.

Tous les capteurs du moteur partagent un seul texte d'alarme : **« FAILURE »** (défaillance). **Le nom du capteur sous le texte vous dit lequel s'est déclenché.** La pression d'huile et la charge de la batterie ne sont surveillées que contact mis ; le niveau de carburant et le filtre à air, toujours. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md). Les réglages nommés ci-dessous sont décrits dans [Capteurs de trémie, de position de travail et du moteur](hopper-position-engine-sensors.md).

## « FAILURE » — « Emergency oil pressure » (pression d'huile critique) {#failure-emergency-oil-pressure}

**Ce que cela signifie.** Le capteur de basse pression d'huile s'est déclenché.

**À vérifier, dans cet ordre :**

1. Le capteur de basse pression d'huile est en état de marche.
2. **« Activation signal »** dans les réglages du capteur de basse pression d'huile.
3. Si un capteur d'allumage figure dans le profil : sa surveillance est-elle activée ?
4. Si un capteur d'allumage figure dans le profil : est-il en état de marche ?

## « FAILURE » — « No battery charge » (pas de charge de la batterie) {#failure-no-battery-charge}

**Ce que cela signifie.** La batterie n'est pas chargée.

**À vérifier, dans cet ordre :**

1. Le capteur de charge de la batterie est en état de marche.
2. **« Activation signal »** dans les réglages du capteur de charge de la batterie.
3. Si un capteur d'allumage figure dans le profil : sa surveillance est-elle activée ?
4. Si un capteur d'allumage figure dans le profil : est-il en état de marche ?

## « FAILURE » — « Low fuel » (niveau de carburant bas) {#failure-low-fuel}

**Ce que cela signifie.** Il reste peu de carburant dans le réservoir.

**À vérifier, dans cet ordre :**

1. Le capteur de niveau de carburant est en état de marche.
2. **« Activation signal »** dans les réglages du capteur de niveau de carburant.
3. **« Signal delay, sec »** dans les réglages du capteur de niveau de carburant. La valeur par défaut est de **15 secondes**.

## « FAILURE » — « Air filter » (filtre à air) {#failure-air-filter}

**Ce que cela signifie.** Le filtre à air est colmaté.

**À vérifier, dans cet ordre :**

1. Le capteur du filtre à air est en état de marche.
2. **« Activation signal »** dans les réglages du capteur du filtre à air.
3. **« Signal delay, sec »** dans les réglages du capteur du filtre à air. La valeur par défaut est de **5 secondes**.

Le capteur d'allumage lui-même ne déclenche jamais de fenêtre d'alarme : une clé jaune sur l'écran d'accueil dit seulement que le contact est coupé ([Indicateurs](indicators.md#engine-sensors)).
