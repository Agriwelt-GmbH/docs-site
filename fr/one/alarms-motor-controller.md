---
title: Moteur de dosage : blocage, défauts électriques, chargeur d'amorçage
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/alarms-motor-controller.html
---

# Moteur de dosage : blocage, défauts électriques, chargeur d'amorçage

Que faire quand le contrôleur d'un moteur électrique de doseur signale un blocage, un court-circuit, une surintensité, une mauvaise tension d'alimentation, une surchauffe ou un défaut inconnu.

Ces alarmes viennent du contrôleur qui commande un moteur électrique de doseur. Le nom dans la fenêtre d'alarme vous dit de quel moteur il s'agit. Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Motor jammed! » — moteur bloqué {#motor-jammed}

**Ce que cela signifie.** Le contrôleur ne voit aucune rotation alors que le moteur devrait tourner.

**À vérifier, dans cet ordre :**

1. Le doseur est en bon état et tourne librement.
2. Le capteur de rotation du moteur est en état de marche, ainsi que sa liaison avec le contrôleur — le câble et le connecteur.

## « Short circuit » — court-circuit {#short-circuit}

**Ce que cela signifie.** Le contrôleur a détecté un court-circuit.

**À vérifier, dans cet ordre :**

1. Le câblage : les câbles et le connecteur sont intacts.
2. Remplacez le contrôleur par un contrôleur en bon état pour le tester.

## « Over current » — surintensité {#over-current}

**Ce que cela signifie.** Le courant a dépassé la limite.

**À vérifier, dans cet ordre :**

1. Le moteur et le mécanisme de semis ne sont pas bloqués.
2. Le câblage : les câbles et le connecteur sont intacts.
3. Remplacez le contrôleur par un contrôleur en bon état pour le tester.

## « Under voltage » — sous-tension {#under-voltage}

**Ce que cela signifie.** La tension d'alimentation du moteur est inférieure à la valeur admise. Le moteur ne peut pas tourner.

**Mesurez d'abord la tension d'alimentation.**

**Si elle est trop basse :**

1. L'alternateur est en état de marche.
2. La tension des courroies de l'alternateur.
3. Le faisceau d'alimentation est fermement raccordé aux bornes de la batterie ou de l'alternateur, comme l'exige la tension d'alimentation requise.
4. Les raccordements des câbles assurent un contact électrique fiable.

**Si la tension d'alimentation est correcte :** remplacez le contrôleur par un contrôleur en bon état pour le tester.

## « Over voltage » — surtension {#over-voltage}

**Ce que cela signifie.** La tension d'alimentation du moteur est supérieure à la valeur admise. Le moteur ne peut pas tourner.

**Mesurez d'abord la tension d'alimentation.**

**Si elle est trop élevée :**

1. L'alternateur est en état de marche.
2. Le faisceau d'alimentation est fermement raccordé aux bornes de la batterie ou de l'alternateur, comme l'exige la tension d'alimentation requise.
3. Les raccordements des câbles assurent un contact électrique fiable.

**Si la tension d'alimentation est correcte :** remplacez le contrôleur par un contrôleur en bon état pour le tester.

## « Over temperature » — surchauffe {#over-temperature}

**Ce que cela signifie.** Le moteur a surchauffé.

**Que faire, dans cet ordre :**

1. Laissez le moteur refroidir.
2. Remplacez le contrôleur par un contrôleur en bon état pour le tester.

## « FAILURE » — défaillance {#failure}

**Ce que cela signifie.** Le contrôleur a détecté un défaut inhabituel qui exige l'intervention du support technique.

**Que faire, dans cet ordre :**

1. Lisez le code de défaut : menu contextuel du moteur → **« Information »** → ligne **« Last fault »** (dernier défaut). Voir [Lire le code de défaut d'un moteur électrique](motor-fault-codes.md).
2. Remplacez le contrôleur par un contrôleur en bon état pour le tester.
3. Communiquez le code et le numéro du moteur au support technique.

## « Device in bootloader! » — appareil en mode chargeur d'amorçage {#device-in-bootloader}

**Ce que cela signifie.** Le contrôleur est resté en mode de mise à jour du micrologiciel et n'exécute pas son programme de travail. Il ne peut pas commander le moteur.

**Que faire, dans cet ordre :**

1. Coupez puis rétablissez l'alimentation.
2. Si le message revient, la mise à jour du micrologiciel du contrôleur n'a pas été menée à son terme. Appelez le support technique.

> **VOIR AUSSI**
>
> Le contrôleur de pompe d'engrais liquide déclenche les mêmes alarmes électriques — [Pompe d'engrais liquide](alarms-pump-controller.md).
