---
title: Capteurs d'engrais liquide et contrôleur de pompe
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/liquid-fertilizer.html
---

# Capteurs d'engrais liquide et contrôleur de pompe

Les paramètres des capteurs de section d'engrais liquide et du contrôleur de la pompe d'engrais liquide, avec leurs plages et leurs valeurs par défaut.

L'engrais liquide est surveillé par des capteurs de débit dans les sections ; sur certaines machines, un contrôleur de pompe pilote en outre la pompe à la dose voulue. Maintenez le doigt sur le diagramme de l'engrais liquide, ou sur l'indicateur de la pompe, pour ouvrir le menu contextuel ([Réglages des capteurs](sensor-settings.md)).

## Capteurs de section d'engrais liquide {#liquid-fertilizer-section-sensors}

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Pulses per liter »** | Combien d'impulsions le capteur de débit donne par litre (impulsions par litre). Pavé numérique. Masqué quand un contrôleur de pompe figure dans le profil. | 1 … 60000 ; 5000 | Agronomist |
| **« Rate error,% »** | De combien la dose réelle peut s'écarter de la dose de consigne avant une alarme (écart de dose, %). | 5 … 95, par pas de 5 ; 50 | Agronomist |
| **« Tolerable leak to tramline,% »** | Ce qu'une section coupée pour le jalonnage peut encore délivrer (fuite tolérée au jalonnage, %). | 0 … 50 ; 20 | Agronomist |
| **« Group start address »** | Voir [Configuration des appareils](device-configuration.md) (adresse de début du groupe). | — | Agronomist |

Les deux doses de consigne de ces capteurs — une pour le mode **« Flow »** (débit), une pour le mode **« By area »** (à l'hectare) — n'ont **aucun élément de menu**. Elles se règlent sur l'écran d'accueil, comme toute autre dose de consigne ([Modifier la dose de consigne](set-the-target-rate.md)). Le mode lui-même : [Paramètres du semoir](seeding-machine-parameters.md#liquid-fertilizer-mode).

## Contrôleur de pompe d'engrais liquide {#liquid-fertilizer-pump-controller}

| **Paramètre** | **Ce qu'il fait** | **Plage, défaut** | **Niveau** |
| --- | --- | --- | --- |
| **« Pulses per liter »** | Les impulsions de la mesure de débit de la pompe par litre ; le panneau en calcule le volume pompé. Pavé numérique. | 100 … 10000, par pas de 10 ; 3000 | Agronomist |
| **« Pressure sensor »** | L'entrée du contrôleur sur laquelle est câblé le capteur de pression 4–20 mA de la conduite (capteur de pression) ; **« No »** — aucun. | **« No »**, 1, 2 ; **« No »** | Agronomist |
| **« Pressure boundary, Bar »** | La pression que le capteur indique en haut de sa plage (20 mA) (limite de pression). Réglez-la d'après la fiche technique du capteur. | 0.0 … 50.0 ; 16.0 | Agronomist |
| **« Max pressure, Bar »** | Au-dessus, le contrôleur déclenche **« High pressure »** (pression élevée). 0.0 désactive l'alarme (pression maximale). | 0.0 … 50.0 ; 0.0 | Operator |
| **« Section control D.I. »** | Une entrée du contrôleur qui coupe la pompe : **« Shut off(0) »** quand l'entrée lit 0, **« Shut off(1) »** quand elle lit 1 ; **« No »** — non utilisée (entrée de commande de section). | **« No »** / **« Shut off(0) »** / **« Shut off(1) »** | Agronomist |
| **« Start delay,mS »** | Le délai le plus court, en millisecondes, entre deux démarrages de la pompe (temporisation de démarrage). | 0 … 500, par pas de 5 ; 30 | Service |
| **« Group start address »** | Voir [Configuration des appareils](device-configuration.md). | — | Agronomist |

Les deux valeurs de pression se saisissent avec une décimale. Avec un contrôleur de pompe, la dose de liquide est toujours réglée à l'hectare.

L'écran d'état du contrôleur de pompe montre le débit, la charge de la pompe et la pression de la conduite — voir [L'écran d'état d'un capteur](sensor-status-screen.md#what-each-kind-of-sensor-adds). Alarmes : [Pompe d'engrais liquide](alarms-pump-controller.md), [Alarmes de dose](alarms-rate.md).
