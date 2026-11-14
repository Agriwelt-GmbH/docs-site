---
title: Le profil
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/profile.html
---

# Le profil

Ce qu'est le profil du Hectare Mini, chaque rubrique du menu du profil avec ses valeurs, et les règles qu'un profil doit respecter pour que le boîtier l'accepte.

Le **profil** indique au boîtier quels appareils la machine possède et combien de chaque type. Il détermine les indicateurs de l'écran d'accueil, les menus contextuels disponibles et les appareils que le boîtier interroge. Un système est en général livré avec son profil réglé ; ne le modifiez que si l'équipement de la machine change. Comment le vérifier : [Vérifier le profil et les connexions](check-profile-and-connections.md). Comment le modifier : [Régler le profil](set-up-the-profile.md).

Le profil compte **ce qui est surveillé et ce qui est piloté**, pas les boîtiers. Un même module d'entrée peut porter, par exemple, des capteurs de turbine et des capteurs de trémie ; un même contrôleur d'actionneurs peut porter un actionneur et deux capteurs de marqueur. Chacun est saisi sous sa propre rubrique.

::: {.anatomy fig="menu-profile"}
1. **« Seed sensors »** (capteurs de graines) — la rubrique sélectionnée.
2. **La valeur**, ici 12, entre **−** et **+** : modifiez-la avec **« MINUS »** et **« PLUS »**.
3. **« Fertilizer sensors »** (capteurs d'engrais).
4. **« Liq.fert.flow sensors »** (capteurs de débit d'engrais liquide).
5. **« Hoppers »** (trémies).
6. **« Dispensers »** (doseurs).
7. **« Speed »** (vitesse) — mode de raccordement du capteur de vitesse.
8. **Sa valeur**, ici **« Control panel »** (boîtier de commande).
9. **Barre de défilement.** La liste se poursuit sous l'écran.

Les premières rubriques du menu du profil.
:::

## Les rubriques {#the-items}

Chaque rubrique exige le niveau **« Service »**, comme le menu lui-même.

| **Rubrique** | **Ce qu'elle indique** | **Valeurs** |
| --- | --- | --- |
| **« Seed sensors »** | Nombre de capteurs de graines. | 2 … 60 |
| **« Fertilizer sensors »** | Nombre de capteurs d'engrais sec. | 0 … 60 |
| **« Liq.fert.flow sensors »** | Nombre de capteurs de débit d'engrais liquide. | 0 … 60 |
| **« Hoppers »** | Nombre de capteurs de niveau de trémie. | 0 … 9 |
| **« Dispensers »** | Nombre de capteurs d'arbre de doseur. | 0 … 9 |
| **« Speed »** | Présence d'un capteur de vitesse d'avancement et lieu de son raccordement : **« No »** ; **« Control panel »** — un capteur sur le boîtier ; **« Input device »** — un capteur sur un module d'entrée ; **« Input device (2) »** — deux capteurs sur un module d'entrée. | voir à gauche |
| **« GPS »** | Le récepteur GPS intégré comme source de vitesse : **« No »** ; **« UBX »** — le réglage normal ; **« NMEA »** — le récepteur fournit ses données au format NMEA 0183. Tant qu'il a un fix valide, le GPS est prioritaire sur le capteur de **« Speed »** ; sans fix, le capteur reprend de lui-même. [Réception GPS](gps-receiver.md) | voir à gauche |
| **« Fans »** | Nombre de capteurs de vitesse de turbine. | 0 … 2 |
| **« Pressure sensors »** | Nombre de capteurs de pression (dépression). | 0 … 3 |
| **« Work position sensor »** | Présence d'un capteur de position de travail et de transport de l'outil. | **« No »** / **« Yes »** |
| **« Markers »** | Mode de surveillance des bras de traceur : **« No »** ; **« One »** — un capteur ; **« Both »** — un capteur par bras. | voir à gauche |
| **« No battery charge »** | Capteur de charge de la batterie du moteur d'entraînement de la turbine. Désactivez-le avec le capteur d'allumage. | **« No »** / **« Yes »** |
| **« Emergency oil pressure »** | Capteur de pression d'huile trop basse du moteur d'entraînement de la turbine. Désactivez-le avec le capteur d'allumage. | **« No »** / **« Yes »** |
| **« Ignition »** | Capteur de clé de contact du moteur d'entraînement de la turbine. | **« No »** / **« Yes »** |
| **« Low fuel »** | Capteur de niveau de carburant du moteur d'entraînement de la turbine. | **« No »** / **« Yes »** |
| **« Air filter »** | Capteur de filtre à air du moteur d'entraînement de la turbine. | **« No »** / **« Yes »** |
| **« EMD of the seeds »** | Nombre de moteurs électriques de doseur pour la semence. | 0 … 60 |
| **« EMD of the fertilizers »** | Nombre de moteurs électriques de doseur pour l'engrais. | 0 … 30 |
| **« Tramline actuators »** | Nombre d'actionneurs de jalonnage. | 0 … 4 |
| **« Liq.fert.pump controller »** | Présence d'un contrôleur de pompe pour l'engrais liquide. | 0 / 1 |
| **« Save profile »** | Enregistre le profil et redémarre le boîtier. | — |

> **IMPORTANT**
>
> **« GPS » ne fonctionne qu'avec un capteur de vitesse saisi sous « Speed ».** Si **« Speed »** est sur **« No »**, le boîtier remet de lui-même **« GPS »** sur **« No »**. Sur un semoir sans roue d'entraînement, réglez **« Speed »** sur **« Control panel »** — aucun capteur n'a besoin d'y être raccordé.

## Règles que le profil doit respecter {#rules-the-profile-must-keep}

**« Save profile »** refuse un profil qui enfreint l'une de ces règles et affiche **« Invalid profile! »** (profil non valide !) :

- au moins **2 capteurs de graines** ;
- **« Hoppers »**, **« Dispensers »** et les cinq capteurs du moteur ensemble : **12 au maximum** ; au-delà de 10, **« Fans »** et **« Pressure sensors »** ensemble ne peuvent pas dépasser 4 ;
- **« Fans »** et **« Pressure sensors »** ensemble : **5 au maximum** ;
- moteurs de semence et moteurs d'engrais ensemble : 60 au maximum ; moteurs d'engrais uniquement avec des moteurs de semence et des capteurs d'engrais ;
- les moteurs de doseur et un contrôleur de pompe liquide exigent un capteur de vitesse.
