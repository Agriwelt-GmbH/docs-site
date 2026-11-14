---
title: Ce qui est fourni
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/whats-supplied.html
---

# Ce qui est fourni

Le système minimal, les appareils optionnels qu'une machine peut porter et les câbles qui les relient.

**Le système minimal se compose du panneau Hectare One et des capteurs de graines** — un capteur par section. Les capteurs de graines Agriwelt ont leur propre calculateur et se raccordent directement au panneau.

![Le panneau Hectare One.](figures/hw/display)

Chaque section de la machine reçoit son propre capteur de graines.

![Capteur de graines pour tubes de descente ronds de 25 à 35 mm.](figures/hw/seed-sensor)

## Appareils optionnels {#optional-devices}

Tout le reste est optionnel. Ce que porte une machine est inscrit dans le [profil](profile.md) du panneau.

| **Appareil** | **Combien** | **À quoi il sert** |
| --- | --- | --- |
| Capteur de pression | Jusqu'à trois | Pression ou dépression. |
| Module d'entrée HUB8 | Selon les besoins | Capteurs à sortie *collecteur ouvert* — vitesse, trémie, turbine, doseur, position de travail, traceurs, débitmètres Wilger. |
| Moteurs électriques de doseur | Avec leur calculateur | Application de semences ou d'engrais solide à la dose réglée. |
| Actionneurs de jalonnage | Jusqu'à quatre | Coupure de sections pour le jalonnage. |
| Calculateur de pompe électrique | Un | Engrais liquide — solution azotée, microéléments et produits semblables. |

Le capteur inductif ci-dessous remplit deux tâches : il mesure la vitesse d'avancement et il contrôle qu'un arbre de doseur tourne.

![Capteur inductif pour la vitesse et pour la rotation de l'arbre du doseur.](figures/hw/inductive-sensor)

Le HUB8 reçoit les capteurs qui n'ont pas de calculateur propre et signale chacun d'eux au panneau comme s'il s'agissait d'un appareil.

![HUB8, module d'entrée à huit voies pour capteurs à contact.](figures/hw/hub8)

Un même calculateur pilote les moteurs de doseur et la pompe d'engrais liquide. C'est pourquoi une machine ne peut pas avoir de pompe sans avoir aussi le calculateur qu'utiliserait un moteur.

![Le calculateur de moteur électrique ; la même unité pilote la pompe d'engrais liquide.](figures/hw/motor-controller)

> **REMARQUE**
>
> Le panneau fonctionne aussi avec des capteurs de graines de marque **DICKEY-John, Kuhn, Gaspardo** et d'autres.

## Câbles {#cables}

Le panneau est alimenté par son propre câble d'alimentation.

![Câble d'alimentation des panneaux Hectare.](figures/hw/power-cable)

Un HUB8 est relié au système par un câble réseau Amphenol à 4 broches.

![Câble de liaison réseau du HUB8, Amphenol, 4 broches.](figures/hw/hub8-network-cable)

Les capteurs se branchent sur le HUB8 par un faisceau.

![Faisceau de raccordement des capteurs du HUB8.](figures/hw/hub8-harness)

> **VOIR AUSSI**
>
> [Ce que fait le système](overview.md) · [Termes](terms.md#devices)
