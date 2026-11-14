---
title: Termes
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/terms.html
---

# Termes

Les mots que ce manuel emploie pour les doses, la surveillance, les capteurs, le jalonnage et les appareils — ce que chacun signifie sur le Hectare One.

## Doses et surveillance {#rates-and-control}

| **Terme** | **Signification** |
| --- | --- |
| **Dose** | L'intensité de consigne réglée par l'opérateur. Le panneau compare l'intensité réelle à cette dose et signale un écart trop grand. |
| **Erreur de dose** | De combien l'intensité réelle peut s'écarter de la dose avant que cela devienne une alarme. Se règle par groupe de capteurs, en pour cent (**« Rate error,% »**). |
| **Commande d'application du produit** | Le panneau ne juge pas le semis à chaque instant : il commence à surveiller dès que les conditions sont réunies — la machine est abaissée et avance. Jusque-là, une section silencieuse n'est pas un défaut. |
| **Dose minimale d'alarme** | L'intensité la plus basse encore considérée comme normale — la ligne de contrôle du diagramme. En dessous, la section est signalée, quoi que fassent les voisines. Voir [Le diagramme des sections](section-diagram.md). |
| **Intervalle de parcours** | Le tronçon du parcours sur lequel les manques, les doubles et les autres chiffres sont recueillis avant d'être retracés. Réglé par **« Recalculation,m »**, que le panneau renomme **« Recalculation,sec »** quand le mode de semis compte en secondes et non en mètres. |
| **Verrouillage manuel** | Arrêt manuel de toute application de produit, par un appui long sur **« HOME »**. Une main jaune sur l'écran d'accueil montre que le verrouillage est actif. Voir [Verrouiller l'application à la main](lock-application-by-hand.md). |
| **Surveillance (d'un capteur)** | Le fait que le panneau surveille ou non un capteur. Un capteur hors surveillance s'affiche avec **!** et ne signale rien. Voir [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md). |

## Modes de contrôle du semis {#seeding-control-modes}

| **Mode** | **Signification** |
| --- | --- |
| **« Precise »** (précis) | Graines par mètre, avec manques et doubles — semoirs monograines. |
| **« Flow »** (débit) | Graines par seconde par rapport à un seuil d'alarme — semoirs à céréales. |
| **« Hybrid »** (hybride) | Graines par mètre, avec une erreur de dose comme en « Precise » ; le seuil d'alarme peut être réglé automatiquement comme en « Flow ». |

## Capteurs {#sensors}

| **Terme** | **Signification** |
| --- | --- |
| **Capteur de surveillance de section** | Le nom commun d'un capteur de graines, d'engrais solide ou d'engrais liquide. Un par section de la machine. |
| **Capteur de graines** | Compte les graines qui passent dans une section. Sur un **semoir monograine**, il distingue aussi les **doubles** et les **manques** ; sur un semoir à céréales, il ne mesure que l'intensité — les graines arrivent trop rapprochées pour être distinguées. |
| **Capteur d'engrais solide** | Le même appareil, qui surveille une conduite d'engrais granulé. |
| **Capteur d'engrais liquide** | Un débitmètre qui compte le volume passant par une section. |
| **Capteur de vitesse** | Mesure la vitesse d'avancement. La distance, la surface et toutes les doses en sont calculées. |
| **Capteur de doseur** | Contrôle que l'arbre du doseur tourne. |
| **Capteur de turbine** | Contrôle la vitesse de la turbine par rapport à un minimum et un maximum réglés. |
| **Capteur de pression** | Contrôle la pression ou la dépression, selon son raccordement. |
| **Capteur de trémie** | Signale quand le produit est tombé sous le point où se trouve le capteur. |
| **Capteur de position de travail** | Indique au panneau si la machine est abaissée en travail ou relevée pour le transport. |
| **Capteurs de traceurs** | Signalent quel traceur mécanique est abaissé, afin que le passage de jalonnage puisse avancer tout seul. |

## Jalonnage {#tramline}

| **Terme** | **Signification** |
| --- | --- |
| **Jalonnage** | Une voie de passage laissée sans semis, créée en coupant une ou plusieurs sections sur des passages choisis. |
| **Rythme** | La séquence répétée de passages, avec les passages marqués sur lesquels des sections données ne doivent pas semer. Voir [Régler le rythme de jalonnage](tramline-rhythm.md). |
| **Passage** | Une traversée du champ par la machine. Le rythme les compte et revient au premier quand il n'y en a plus. |
| **Actionneur de jalonnage** | L'appareil qui coupe les sections. **Un même calculateur d'actionneur porte trois choses :** l'actionneur lui-même et **les deux** capteurs de traceurs. |

## Appareils {#devices}

| **Terme** | **Signification** |
| --- | --- |
| **HUB8** (module d'entrée) | Un répartiteur à huit voies pour les capteurs qui n'ont pas de calculateur propre. Il les surveille et signale chacun au panneau comme s'il s'agissait d'un appareil. |
| **Calculateur de moteur électrique** | Pilote un ou deux moteurs de doseur, ou la pompe d'engrais liquide. Moteurs et pompe partagent un même calculateur — c'est pourquoi une machine ne peut pas avoir de pompe sans avoir aussi le calculateur qu'utiliserait un moteur. |
| **SCM** | Section Control Module (module de coupure de section) — l'interface par laquelle un système de guidage tiers peut couper des sections. |
| **microSD** | La carte mémoire, pour les rapports, les profils et les mises à jour du micrologiciel. **FAT16 ou FAT32** seulement. |
| **Profil** | La liste de ce que porte la machine. Le panneau en tire ses écrans. Voir [Profil](profile.md). |

## Niveaux d'accès {#access-levels}

| **Niveau** | **À quoi il sert** |
| --- | --- |
| **Operator** (opérateur) | Le niveau auquel le panneau démarre après chaque mise sous tension. Le travail de tous les jours. Les fenêtres d'alarme ne sont affichées qu'à ce niveau. |
| **Agronomist** (agronome) | Les réglages de mise en service et la remise à zéro des statistiques. Exige un **PIN**, différent pour chaque panneau et donné dans la fiche de l'appareil. |
| **Service** (maintenance) | Le profil, le réadressage des appareils, les éléments « Reset to defaults ». Utilisé par le service après-vente. |

Détails : [Niveaux d'accès](access-levels.md).
