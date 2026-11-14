---
title: Réglages — Products : mode de contrôle, fraction et dose
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/settings-products.html
---

# Réglages — Products : mode de contrôle, fraction et dose

Choisissez comment chaque groupe de rangs est jugé — Flow, Hybrid ou Precision —, réglez la fraction que les capteurs comptent comme une graine, et réglez la dose en graines par mètre.

**« Settings »** (réglages) › **« Products »** (produits) comporte une section **« Seed »** (semences) et, avec des capteurs d'engrais dans le profil, une section **« Fertilizer »** (engrais). Chaque groupe a ses propres réglages.

## Mode de contrôle {#control-mode}

**« Control mode »** (mode de contrôle) détermine comment les rangs du groupe sont jugés.

| Mode | Ce qu'il mesure | Ce qu'il exige |
| --- | --- | --- |
| Flow | Graines par seconde dans chaque rang, par rapport à la ligne de contrôle que vous faites glisser sur l'écran des rangs. Un rang sous la ligne est jaune ; un rang sans débit est rouge. | Rien de plus : ni vitesse, ni surface. |
| **« Hybrid »** | Graines par mètre de rang, en nombres entiers, d'après la vitesse GNSS de l'iPad. Un rang sous la plage de tolérance affiche **« Under allowable rate »** (sous la dose admise), au-dessus **« Rate too high »** (dose trop élevée). Les doubles et les manques ne sont pas comptés. | Un iPad avec GNSS et la localisation autorisée. |
| **« Precision »** | Graines par mètre avec dixièmes, d'après la vitesse GNSS. Les capteurs comptent aussi les doubles et les manques. Sans vitesse récente pendant 2 secondes, le menu du rang indique **« Unknown: no speed »** (inconnu : pas de vitesse). | Un iPad avec GNSS et la localisation autorisée. |

Hybrid et Precision ne sont proposés que lorsque l'iPad fournit une vitesse. La première fois que vous en choisissez un, l'app affiche **« Waiting for the iPad's GNSS speed… »** (attente de la vitesse GNSS de l'iPad) ; si aucune vitesse n'arrive, seul Flow reste disponible. Voir [Ce dont vous avez besoin](what-you-need.md).

## Dose (Hybrid et Precision) {#rate-hybrid-and-precision}

**« Rate »** (dose) — les graines par mètre souhaitées, avec **−** / **+**. En dessous, **« Thousand seeds/ha »** (milliers de graines/ha) — la même dose par hectare, calculée à partir de la largeur de travail — et la plage d'alarme : la dose en dessous et au-dessus de laquelle un rang déclenche une alarme, d'après **« Rate tolerance »** (tolérance de dose) dans [Control and Alarms](settings-control-alarms.md).

Vous pouvez aussi modifier la dose sur l'écran des rangs (faites glisser la colonne de dose), sur la vignette **« Population »** ou **« Rate »**, et sur la page **« Machine »**.

## Fraction {#fraction}

**« Fraction »** — le réglage des capteurs selon la taille des graines. Choisissez la culture ou le calibre de graine : **« Rapeseed »** (colza), **« Wheat »** (blé), **« Barley »** (orge), **« Soybean »** (soja), **« Peas »** (pois), **« Beans »** (haricots), **« Maize »** (maïs), **« Sunflower »** (tournesol), **« Small »** (petit), **« Medium »** (moyen), **« Large »** (gros) ou **« Pneumatic drill »** (semoir pneumatique). Le nombre entre parenthèses est ce que reçoit le capteur.

Il y a une seule fraction pour tous les rangs de semis et une pour tous les rangs d'engrais. La passerelle l'envoie à chaque capteur du groupe ; les rangs affichent alors la barre de réglage l'un après l'autre, quelques secondes chacun.

**« Expert »** ouvre **« Value for the sensor »** (valeur pour le capteur), le nombre lui-même, pour le service.

## Semis maximal dans le jalonnage {#max-seeding-in-tramline}

**« Max seeding in tramline,% »** (semis maximal dans le jalonnage, %) — affiché sur les machines munies d'un jalonnage. Un rang du jalonnage qui sème plus que cette proportion de la dose déclenche **« Seeding in tramline »** (semis dans le jalonnage). De 0 à 50 %, 20 % sauf modification. Voir [Jalonnage](tramline.md).

> **VOIR AUSSI**
>
> [Réglages Control and Alarms](settings-control-alarms.md) · [L'écran des rangs](rows-screen.md)
