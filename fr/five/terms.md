---
title: Termes
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/terms.html
---

# Termes

Les mots que ce manuel emploie pour les gestes, les doses, la surveillance, les capteurs, le jalonnage et les appareils — ce que chacun signifie sur l'Hectare 5.

## Gestes {#gestures}

| **Terme** | **Signification** |
| --- | --- |
| **Toucher** | Un doigt, poser et lever aussitôt. |
| **Maintenir le doigt** | Un doigt gardé sur un point plus d'une demi-seconde. |
| **Long glissement** | Un trait d'un doigt sur plus d'un tiers de l'écran. Il fait passer d'un écran de travail à l'autre. |
| **Toucher à deux doigts** | Un toucher avec deux doigts à la fois. Sur l'écran d'accueil, il ouvre le menu principal. |

Tous les gestes : [Zones tactiles et gestes](buttons-and-gestures.md).

## Doses et surveillance {#rates-and-control}

| **Terme** | **Signification** |
| --- | --- |
| **Dose** | L'intensité de consigne que règle l'opérateur. Le panneau compare l'intensité réelle à celle-ci et signale un écart trop grand. |
| **Écart de dose** | De combien l'intensité réelle peut s'écarter de la dose avant que cela devienne une alarme. Réglé par groupe de capteurs, en pourcentage (**« Rate error,% »**, écart de dose, %). Pour les produits en masse et la pompe, le réglage est **« Product rate error,% »** (écart de dose du produit, %). |
| **Régulation de l'application du produit** | Le panneau ne juge pas le semis à chaque instant : il commence à surveiller quand les conditions sont réunies — la machine est abaissée et en mouvement. Jusque-là, une section silencieuse n'est pas un défaut. |
| **Seuil d'alarme** | En mode **« Flow »**, l'intensité la plus basse encore considérée comme normale — la ligne de contrôle du diagramme. En dessous, la section est signalée, quoi que fassent les voisines. Voir [Le diagramme des sections](section-diagram.md). |
| **Intervalle de trajet** | Le tronçon du parcours sur lequel les manques, les doubles et les autres chiffres sont recueillis avant d'être redessinés. Réglé par **« Recalculation,m »** (recalcul, m), que le panneau renomme **« Recalculation,sec »** (recalcul, s) quand le mode de semis compte en secondes au lieu de mètres. |
| **Part des rangs en train de semer** | La part de rangs qui doivent semer pour que le panneau décide que la machine sème — **« Percent of sowing,% »** (pourcentage de semis), 20 % par défaut. |
| **Verrouillage manuel** | L'arrêt de toute application de produit à la main, par un maintien du doigt sur un emplacement vide de la colonne de droite de l'écran d'accueil. Une main jaune montre que le verrouillage est actif. Voir [Verrouiller l'application du produit à la main](lock-application-by-hand.md). |
| **Surveillance (d'un capteur)** | Le fait que le panneau surveille ou non un capteur. Un capteur hors surveillance s'affiche avec **!** et ne signale rien. Voir [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md). |
| **Simulation** | Une vitesse d'avancement simulée, réglée dans le capteur de vitesse, utilisée quand le capteur de vitesse est en panne. Voir [Travailler sans capteur de vitesse](work-without-speed-sensor.md). |

## Modes de contrôle du semis {#seeding-control-modes}

| **Mode** | **Signification** |
| --- | --- |
| **« Precise »** (précis) | Graines par mètre, avec manques et doubles — semoirs monograines. |
| **« Flow »** (débit) | Graines par seconde par rapport à un seuil d'alarme — semoirs à céréales. |
| **« Hybrid »** (hybride) | Graines par mètre, avec un écart de dose comme en **« Precise »** ; le seuil d'alarme peut être réglé automatiquement comme en **« Flow »**. |

## Capteurs {#sensors}

| **Terme** | **Signification** |
| --- | --- |
| **Capteur de surveillance de section** | Le nom commun d'un capteur de graines, d'engrais solide ou d'engrais liquide. Un par section de la machine. |
| **Capteur de graines** | Compte les graines qui passent dans une section. Sur un **semoir monograine**, il distingue aussi les **doubles** et les **manques** ; sur un semoir à céréales, il ne mesure que l'intensité — les graines arrivent trop rapprochées pour être distinguées. |
| **Capteur d'engrais solide** | Le même appareil, qui surveille une conduite d'engrais granulé. |
| **Capteur d'engrais liquide** | Un débitmètre qui compte le volume passant dans une section. |
| **Capteur de vitesse** | Mesure la vitesse d'avancement. La distance, la surface et toutes les doses en sont calculées. Sur l'Hectare 5, la vitesse peut aussi provenir du récepteur GPS intégré. |
| **Capteur de doseur** | Surveille que l'arbre du doseur tourne. |
| **Capteur de turbine** | Surveille la vitesse de la turbine par rapport à un minimum et un maximum réglés. |
| **Capteur de pression** | Surveille la surpression ou la dépression, selon la façon dont il est raccordé. |
| **Capteur de trémie** | Signale quand le produit est tombé sous le point où se trouve le capteur. |
| **Capteur de position de travail** | Indique au panneau si la machine est abaissée au travail ou relevée pour le transport. |
| **Capteurs de traceurs** | Signalent quel traceur mécanique est abaissé, pour que le passage de jalonnage puisse avancer tout seul. |

## Jalonnage {#tramline}

| **Terme** | **Signification** |
| --- | --- |
| **Jalonnage** | Une voie de passage laissée non semée, créée en coupant une ou plusieurs sections sur des passages choisis. |
| **Rythme** | La séquence répétée de passages, avec les passages repérés où certaines sections ne doivent pas semer. Voir [Régler le rythme de jalonnage](tramline-rhythm.md). |
| **Passage** | Une passe de la machine à travers le champ. Le rythme les compte et revient au premier quand il n'y en a plus. |
| **Actionneur de jalonnage** | L'appareil qui coupe les sections. Une machine peut en avoir jusqu'à quatre. |

## Appareils {#devices}

| **Terme** | **Signification** |
| --- | --- |
| **HUB8** (appareil d'entrée ; dans les menus **« Concentrator-8 »**, concentrateur 8) | Un concentrateur à huit voies pour les capteurs qui n'ont pas de contrôleur propre. Il les surveille et signale chacun au panneau comme s'il était un appareil. |
| **Contrôleur de moteur électrique** | Pilote un ou deux moteurs de doseur, ou la pompe d'engrais liquide. |
| **microSD** | La carte mémoire, pour les rapports. |
| **Profil** | La liste de ce que porte la machine. Le panneau en tire ses écrans. Voir [Profil](profile.md). |

## Niveaux d'accès {#access-levels}

| **Niveau** | **À quoi il sert** |
| --- | --- |
| **« Operator »** (opérateur) | Le niveau auquel le panneau démarre après chaque mise sous tension. Travail quotidien. C'est le seul niveau où les fenêtres d'alarme sont affichées. |
| **« Agronomist »** (agronome) | Les réglages de mise en service, le profil de la machine et la configuration des adresses des appareils. Exige un **code**. |
| **« Service »** (service) | Les éléments de remise à zéro et les réglages de service. Utilisé par le service après-vente ; exige son propre code. |

Le niveau se choisit sous **« Settings »** (réglages) → **« User »** (utilisateur). Détails : [Niveaux d'accès](access-levels.md).
