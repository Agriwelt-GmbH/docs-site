---
title: Capteurs d'engrais liquide et contrôleur de pompe
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/liquid-fertilizer.html
---

# Capteurs d'engrais liquide et contrôleur de pompe

Les paramètres des capteurs de tronçon d'engrais liquide et du contrôleur de pompe d'engrais liquide.

L'engrais liquide est surveillé par des capteurs de débit placés dans les tronçons ; sur certaines machines, un contrôleur de pompe commande aussi la pompe pour tenir la dose. Ouvrez le menu contextuel de l'un ou de l'autre comme dans [Réglages des capteurs](sensor-settings.md).

## Capteurs de tronçon d'engrais liquide {#liquid-fertilizer-section-sensors}

| Paramètre | Ce qu'il fait | Plage | Niveau |
| --- | --- | --- | --- |
| **« Pulses per liter »** (impulsions par litre) | Le nombre d'impulsions que le capteur de débit donne par litre ; le boîtier en déduit les litres par minute, les litres par hectare et le volume appliqué. Masqué quand un contrôleur de pompe figure dans le profil — ce sont alors les valeurs du contrôleur qui servent. | 1 … 60000 | Agronomist |
| **« Rate error,% »** (écart de dose) | L'écart que la dose réelle peut avoir par rapport à la consigne avant une alarme. | 5 … 95, par pas de 5 | Agronomist |
| **« Tolerable leak to tramline,% »** (fuite tolérée dans le jalonnage) | La quantité qu'un tronçon fermé pour le jalonnage a le droit de distribuer encore. | 0 … 50 | Agronomist |
| **« Group start address »** (adresse de début de groupe) | Voir [Configuration des appareils](device-configuration.md). | | Service |

Les deux doses de consigne de ce capteur — une pour le mode **« Flow »** (débit), une pour le mode **« By area »** (à la surface) — n'ont **aucune rubrique de menu**. Elles se règlent sur l'écran d'accueil avec **« PLUS »** et **« MINUS »**, comme toute autre dose de consigne ([Modifier la dose de consigne](set-the-target-rate.md)). Le mode lui-même : [Paramètres du semoir](seeding-machine-parameters.md#mode-of-liquid-fertilizer).

## Contrôleur de pompe d'engrais liquide {#liquid-fertilizer-pump-controller}

| Paramètre | Ce qu'il fait | Plage | Niveau |
| --- | --- | --- | --- |
| **« Pulses per liter »** | Combien d'impulsions de l'entraînement de la pompe font un litre ; le boîtier en déduit le volume appliqué. La valeur est conservée dans le contrôleur de pompe : le boîtier la lit au démarrage et y réécrit toute modification. | 100 … 10000, par pas de 10 | Agronomist |
| **« Pressure sensor »** (capteur de pression) | Quel capteur de pression surveille la conduite d'alimentation. | 0 … 2 | Agronomist |
| **« Pressure boundary, Bar »** (seuil de pression) | La pression que le capteur de pression mesure au sommet de sa plage, d'après la fiche du capteur ; le boîtier s'en sert pour convertir la pression de la conduite. Valeur par défaut : 16,0 bar. | 0,0 … 50,0 | Agronomist |
| **« Max pressure, Bar »** (pression maximale) | Au-dessus, le contrôleur déclenche **« High pressure »** (pression trop élevée). | 0,0 … 50,0 | Operator |
| **« Section control D.I. »** (entrée de commande de tronçon) | N'a aucun effet dans ce micrologiciel : le boîtier ne lit pas cette entrée pour la pompe. | **« No »** / **« Shut off(0) »** / **« Shut off(1) »** | Agronomist |
| **« Start delay,mS »** (retard au démarrage) | Le temps minimal entre deux démarrages de la pompe : un démarrage qui viendrait plus tôt attend que ce temps soit écoulé. Valeur par défaut : 30 ms. | 0 … 500, par pas de 5 | Service |
| **« Group start address »** | Voir [Configuration des appareils](device-configuration.md). | | Agronomist |

L'écran d'état du contrôleur de pompe affiche le débit, la charge de la pompe et la pression de la conduite — voir [L'écran d'état du capteur](sensor-status-screen.md#what-each-kind-of-sensor-adds). Alarmes : [Pompe d'engrais liquide](alarms-pump-controller.md), [Alarmes de dose](alarms-rate.md).
