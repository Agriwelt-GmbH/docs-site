---
title: Moteur du tracteur : pression d'huile, charge de la batterie, carburant, filtre à air
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-tractor.html
---

# Moteur du tracteur : pression d'huile, charge de la batterie, carburant, filtre à air

Que faire quand l'un des capteurs de moteur embarqués — pression d'huile, charge de la batterie, niveau de carburant, filtre à air — déclenche une alarme.

Tous les capteurs de moteur embarqués partagent un seul texte d'alarme : **« FAILURE »** (défaillance). **Le nom du capteur au-dessus du texte vous dit lequel s'est déclenché.** Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md). Les réglages cités ci-dessous sont décrits dans [Capteurs de trémie, de position de travail et de moteur](hopper-position-engine-sensors.md).

## « Emergency oil pressure » — « FAILURE » — pression d'huile critique {#emergency-oil-pressure-failure}

**Ce que cela signifie.** Le capteur de pression d'huile basse s'est déclenché.

**À vérifier, dans cet ordre :**

1. Le capteur de pression d'huile basse est en état de marche.
2. **« Activation signal »** (signal d'activation) dans les réglages du capteur de pression d'huile basse.
3. Si un capteur de clé de contact figure dans le profil : sa surveillance est-elle activée ?
4. Si un capteur de clé de contact figure dans le profil : est-il en état de marche ?

## « No battery charge » — « FAILURE » — batterie non chargée {#no-battery-charge-failure}

**Ce que cela signifie.** La batterie n'est pas rechargée.

**À vérifier, dans cet ordre :**

1. Le capteur de charge de la batterie est en état de marche.
2. **« Activation signal »** dans les réglages du capteur de charge de la batterie.
3. Si un capteur de clé de contact figure dans le profil : sa surveillance est-elle activée ?
4. Si un capteur de clé de contact figure dans le profil : est-il en état de marche ?

## « Low fuel » — « FAILURE » — carburant bas {#low-fuel-failure}

**Ce que cela signifie.** Il reste peu de carburant dans le réservoir.

**À vérifier, dans cet ordre :**

1. Le capteur de niveau de carburant est en état de marche.
2. **« Activation signal »** dans les réglages du capteur de niveau de carburant.
3. **« Signal delay, sec »** (temporisation du signal) dans les réglages du capteur de niveau de carburant. La valeur par défaut est de **15 secondes**.

## « Air filter » — « FAILURE » — filtre à air {#air-filter-failure}

**Ce que cela signifie.** Le filtre à air est colmaté.

**À vérifier, dans cet ordre :**

1. Le capteur du filtre à air est en état de marche.
2. **« Activation signal »** dans les réglages du capteur du filtre à air.
3. **« Signal delay, sec »** dans les réglages du capteur du filtre à air. La valeur par défaut est de **5 secondes**.
