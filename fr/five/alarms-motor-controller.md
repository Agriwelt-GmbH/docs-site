---
title: Moteur de dosage : blocage, défauts électriques, bootloader
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/alarms-motor-controller.html
---

# Moteur de dosage : blocage, défauts électriques, bootloader

Que faire quand le contrôleur d'un moteur électrique de doseur signale un blocage, un court-circuit, une surintensité, une mauvaise tension d'alimentation, une surchauffe, un défaut inconnu ou une mise à jour du micrologiciel bloquée.

Ces alarmes viennent du contrôleur qui pilote un moteur électrique de doseur. Le nom dans la fenêtre d'alarme vous dit de quel moteur il s'agit ; l'écran Motors montre quelle tuile est en difficulté ([Écran Motors](motors-screen.md)). Fonctionnement de la fenêtre : [Fonctionnement des alarmes](how-alarms-work.md).

## « Motor jammed! » — moteur bloqué {#motor-jammed}

**Ce que cela signifie.** Le contrôleur ne voit pas de rotation alors que le moteur devrait tourner.

**À vérifier, dans cet ordre :**

1. Le doseur est en état de marche et tourne librement.
2. Le capteur de rotation du moteur est en état de marche, et sa liaison avec le contrôleur aussi — le câble et le connecteur.

Si les blocages sont fréquents, **« Rollback when jammed »** permet au moteur de reculer et de réessayer — voir [Moteur électrique de doseur](dispenser-motor.md).

## « Short circuit » — court-circuit {#short-circuit}

**Ce que cela signifie.** Le contrôleur a détecté un court-circuit.

**À vérifier, dans cet ordre :**

1. La liaison par câble : les câbles et le connecteur sont intacts.
2. Remplacez le contrôleur par un contrôleur en état de marche pour le tester.

## « Over current » — surintensité {#over-current}

**Ce que cela signifie.** Le courant a dépassé la limite. La fenêtre ajoute une ligne avec le courant mesuré par le contrôleur, en ampères.

**À vérifier, dans cet ordre :**

1. Le moteur et le mécanisme de semis : blocage.
2. La liaison par câble : les câbles et le connecteur sont intacts.
3. Remplacez le contrôleur par un contrôleur en état de marche pour le tester.

## « Under voltage » — tension trop basse {#under-voltage}

**Ce que cela signifie.** La tension d'alimentation du moteur est inférieure à la valeur permise. Le moteur ne peut pas tourner.

**Mesurez d'abord la tension d'alimentation.**

**Si elle est trop basse :**

1. L'alternateur est en état de marche.
2. La tension des courroies de l'alternateur.
3. Le faisceau d'alimentation est fermement raccordé aux bornes de la batterie ou de l'alternateur, comme l'exige la tension d'alimentation requise.
4. Les liaisons par câble assurent un contact électrique fiable.

**Si la tension d'alimentation est en ordre :** remplacez le contrôleur par un contrôleur en état de marche pour le tester.

## « Over voltage » — tension trop haute {#over-voltage}

**Ce que cela signifie.** La tension d'alimentation du moteur est supérieure à la valeur permise. Le moteur ne peut pas tourner.

**Mesurez d'abord la tension d'alimentation.**

**Si elle est trop haute :**

1. L'alternateur est en état de marche.
2. Le faisceau d'alimentation est fermement raccordé aux bornes de la batterie ou de l'alternateur, comme l'exige la tension d'alimentation requise.
3. Les liaisons par câble assurent un contact électrique fiable.

**Si la tension d'alimentation est en ordre :** remplacez le contrôleur par un contrôleur en état de marche pour le tester.

## « Over temperature » — surchauffe {#over-temperature}

**Ce que cela signifie.** Le contrôleur du moteur a surchauffé.

**Que faire, dans cet ordre :**

1. Laissez le moteur refroidir.
2. Remplacez le contrôleur par un contrôleur en état de marche pour le tester.

## « FAILURE » — défaillance {#failure}

**Ce que cela signifie.** Le contrôleur a détecté un défaut inhabituel qui exige le service d'assistance.

**Que faire, dans cet ordre :**

1. Lisez le code de défaut : maintenez le doigt sur la tuile du moteur → **« Information »** → ligne **« Last fault: »**. Voir [Lire le code de défaut d'un moteur électrique](motor-fault-codes.md).
2. Remplacez le contrôleur par un contrôleur en état de marche pour le tester.
3. Communiquez le code et le numéro du moteur au service d'assistance.

## « Device in bootloader! » — appareil en mode bootloader {#device-in-bootloader}

**Ce que cela signifie.** Le contrôleur est resté en mode de mise à jour du micrologiciel et n'exécute pas son programme de travail. Il ne peut pas piloter le moteur.

**Que faire, dans cet ordre :**

1. Coupez puis rétablissez l'alimentation.
2. Si le message revient, la mise à jour du micrologiciel du contrôleur n'a pas été menée à terme. Appelez le service d'assistance.

> **VOIR AUSSI**
>
> Le contrôleur de la pompe d'engrais liquide déclenche les mêmes alarmes électriques — [Pompe d'engrais liquide](alarms-pump-controller.md).
