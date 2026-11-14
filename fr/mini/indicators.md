---
title: Indicateurs de l'écran d'accueil et leurs états
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/indicators.html
---

# Indicateurs de l'écran d'accueil et leurs états

Chaque indicateur de l'écran d'accueil du Hectare Mini dans chacun de ses états — vitesse, trémie, arbre de doseur, turbine, pression, capteurs du moteur, position de l'outil, traceurs, jalonnage, horloge, surface, population et doses de produit.

Lisez les indicateurs par la couleur. Avec le micrologiciel 2.2.8, un appareil en ordre est dessiné en **gris** ; le **rouge**, le plus souvent clignotant, est une alarme ; le **jaune** est un état qu'il faut connaître mais pas un défaut. Trois états sont les mêmes pour tous les capteurs :

| **Ce que vous voyez** | **Signification** | **Que faire** |
| --- | --- | --- |
| ![](figures/icons/no-connection.png){height=32px} Une croix rouge, clignotante, ou **XXXX** à la place de la valeur | Pas de liaison avec le capteur. | Contrôlez son câble et ses connecteurs. |
| Un point d'interrogation rouge, clignotant, ou **????** à la place de la valeur | Un appareil d'un autre type répond à cet emplacement. | Faites vérifier la configuration par le service technique. |
| Un signe gris de capteur hors surveillance, clignotant, ou **!!!!** à la place de la valeur | Le capteur est mis hors surveillance. Il n'est pas surveillé. | [Remettez-le sous surveillance](sensor-in-and-out-of-control.md) une fois le défaut réparé. |

## Vitesse {#speed}

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| ![](figures/icons/speed-ok.png){height=32px} | La vitesse d'avancement en km/h. |
| ![](figures/icons/speed-high.png){height=32px} en alternance avec ![](figures/icons/speed-slower.png){height=32px} | Plus vite que permis. Le chiffre rouge alterne avec **« SLOWER »** (plus lentement). |
| ![](figures/icons/speed-low.png){height=32px} en alternance avec ![](figures/icons/speed-faster.png){height=32px} | Plus lentement que permis. Le chiffre rouge alterne avec **« FASTER »** (plus vite). |
| Chiffre rouge en alternance avec **« Sensor »** (capteur) 1 ou 2, ou avec **« Settings »** (réglages) | L'un des deux capteurs de roue est en panne, ou les limites de vitesse sont mal réglées. |
| ![](figures/icons/speed-lost.png){height=32px} | Pas de liaison avec le capteur de vitesse. |
| ![](figures/icons/speed-sim-value.png){height=32px} en alternance avec ![](figures/icons/speed-simulation.png){height=32px} | L'imitation de vitesse est activée : le chiffre est jaune et alterne avec **« IMITATION »** (imitation). Hors limites, avec **« INCREASE IMITATION »** (augmenter l'imitation) ou **« DECREASE IMITATION »** (diminuer l'imitation). |

La vitesse n'est surveillée par rapport à ses limites que si ce contrôle est activé dans les [réglages du capteur de vitesse](speed-sensor.md). Lorsque la vitesse vient du GPS : [Réception GPS](gps-receiver.md).

## Trémie {#hopper}

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| Gris | Du produit au-dessus du capteur. |
| ![](figures/icons/hopper-empty.png){height=32px} rouge, clignotant | La trémie est vide. |

## Arbre de doseur {#dispenser-shaft}

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| Gris ; tourne tant que l'arbre tourne | En ordre. |
| ![](figures/icons/dispenser-alarm.png){height=32px} rouge, clignotant | L'arbre ne tourne pas, ou pas à la vitesse requise. |

## Turbine {#fan}

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| Gris, avec la vitesse en tr/min | En ordre. |
| Rouge, clignotant, avec la vitesse | La vitesse de la turbine est hors de ses limites. |

## Pression {#pressure}

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| Gris, avec la pression en kPa | En ordre. |
| ![](figures/icons/pressure-alarm.png){height=32px} rouge | La pression à la sortie de la turbine est hors de ses limites. |

## Capteurs du moteur {#engine-sensors}

Les capteurs d'un moteur séparé d'entraînement de la turbine. La pression d'huile et la charge de la batterie ne sont surveillées que contact mis.

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| ![](figures/icons/oil-alarm.png){height=32px} rouge | Pression d'huile basse. |
| ![](figures/icons/battery-alarm.png){height=32px} rouge | La batterie ne se charge pas. |
| ![](figures/icons/fuel-alarm.png){height=32px} rouge | Peu de carburant dans le réservoir. |
| ![](figures/icons/airfilter-alarm.png){height=32px} rouge | Le filtre à air est colmaté. |
| Clé grise / ![](figures/icons/ignition-off.png){height=32px} clé jaune | Contact mis / contact coupé. |

En ordre, chacune de ces icônes est grise.

## Position de l'outil {#implement-position}

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| Gris | Le semoir est en position de travail. |
| ![](figures/icons/workpos-transport.png){height=32px} jaune, clignotant | Le semoir est en position de transport. |

## Traceurs {#markers}

Les bras gris montrent quel traceur est abaissé et lequel est relevé. Avec deux capteurs de traceur, les deux bras **jaunes** signifient que les deux traceurs sont relevés.

## Passage de jalonnage {#tramline-bout}

Des traces de roues avec le passage en cours en haut et le nombre de passages en dessous — voir [Passage de jalonnage suivant](next-tramline-bout.md).

## Horloge {#clock}

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| Heure en blanc | L'heure. |
| Heure en rouge, avec **BAT** en rouge un instant toutes les quatre secondes | La pile de l'horloge doit être remplacée. |
| **XX:XX** en rouge, clignotant | L'horloge est défectueuse. |
| **IMITAT** en jaune | Le panneau fonctionne en mode d'imitation — voir [À propos des images](about-the-pictures.md). |
| Heures:minutes en bleu et **TRIAL** | Une période d'essai est active : le temps restant. Il apparaît toutes les 30 secondes et recouvre un instant les icônes de trémie et d'arbre. |

## Surface {#area}

Hectares traités sur la parcelle active — affichés seulement avec un capteur de vitesse, et seulement là où l'écran a de la place.

## Population {#population}

En mode **« Precise »** (précis) : milliers de graines par hectare, en moyenne sur les capteurs de graines sous surveillance qui répondent. Si les semences et l'engrais sont tous deux en mode **« Precise »**, deux indicateurs s'affichent, marqués **A** (semences) et **B** (engrais) ; la surface n'est alors généralement pas affichée.

## Dose de produit {#product-rate}

Un indicateur par produit appliqué au poids, avec le numéro du produit, en kg/ha. Rouge et clignotant : la dose s'écarte de plus de **« Product rate error,% »** (erreur de dose du produit, %). Tant qu'elle reste dans la tolérance, le panneau affiche la **consigne**.

## La colonne de droite {#the-column-on-the-right}

| **Ce que vous voyez** | **Signification** |
| --- | --- |
| Symbole de moteur, jaune, clignotant | L'application du produit est verrouillée à la main — voir [Verrouiller l'application à la main](lock-application-by-hand.md). |
| Symbole d'actionneur, rouge, clignotant | Un moteur de doseur ou un actionneur de jalonnage est en alarme — voir l'[écran Motors](motors-screen.md). |
| Symbole d'actionneur en alternance avec le signe de capteur hors surveillance | Un moteur ou un actionneur est mis hors surveillance. |
| Symbole de produit, rouge, clignotant | Les doses réglées ne peuvent être appliquées à aucune vitesse — voir [Étalonner un moteur au poids](calibrate-motor-weight.md). |
