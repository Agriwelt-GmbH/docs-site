---
title: Le menu Service
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/service-menu.html
---

# Le menu Service

Toutes les rubriques du menu de maintenance, leur niveau d'accès, et celles qu'un technicien doit laisser tranquilles.

**« MENU »** → **« Service »**. Les rubriques que vous voyez dépendent du niveau d'accès ([Niveaux d'accès](access-levels.md)). Le boîtier a quatre niveaux — **« Operator »** (opérateur), **« Agronomist »** (agronome), **« Service »** (service après-vente) et **« Debug »** ; **« Debug »** se situe au-dessus de **« Service »** et n'est utilisé qu'en fabrication.

![Le menu « Service », partie haute.](figures/menu-service)

| Rubrique | Niveau | De quoi il s'agit |
| --- | --- | --- |
| **« Profile »** (profil) | Service | Quels appareils la machine possède, et combien. [Le profil](profile.md) |
| **« Sensors Configuration »** (configuration des capteurs) | Agronomist | Attribuer leur adresse aux appareils. [Configuration des appareils](device-configuration.md) |
| **« Registers »** (registres) | Debug | Une vue brute des registres. Ne fait partie d'aucune procédure. |
| **« Electric motors »** (moteurs électriques) | Service | Les contrôleurs de moteurs de dosage. [Configurer les contrôleurs de moteurs](configure-motor-controllers.md) |
| **« Serial number »** (numéro de série) | Debug | Le numéro de série du boîtier, saisi une seule fois en fabrication. |
| **« Count seeds always »** (toujours compter les graines) | Agronomist | **« No »** (non) / **« Yes »** (oui) — maintenir le compteur de graines en marche même quand le boîtier l'arrêterait autrement. |
| **« Enter key »** (saisir la clé) | Agronomist | Saisit la clé de licence qui fait sortir le boîtier de l'état de démonstration. |
| **« Set trial »** (lancer l'essai) | Service | Démarre la période de démonstration. |
| **« Trial, hours »** (essai, heures) | Service | 1 … 999 — la durée de cette période. |
| **« Imitation mode »** (mode simulation) | Service | **« No »** / **« Yes »** — le boîtier travaille à partir de données simulées. Voir l'avertissement ci-dessous. |
| **« Display type »** (type d'écran) | Debug | Quel écran le micrologiciel pilote. Réglé en fabrication. |
| **« Launch updater »** (lancer la mise à jour) | Service | Redémarre le boîtier dans l'utilitaire de mise à jour pour prendre le micrologiciel sur la carte mémoire. |

Trois autres rubriques — le protocole du traceur et deux commutateurs d'enregistrement sur la carte mémoire — existent dans le micrologiciel, mais sont réglées pour ne jamais s'afficher. Elles sont inaccessibles à tout niveau.

> **AVERTISSEMENT**
>
> **« Imitation mode » n'est pas une aide d'essai à laisser activée.** Activé, le boîtier travaille à partir de chiffres qu'il invente : chaque nombre de chaque écran et chaque entrée des statistiques est fictif. Désactivez-le avant que la machine parte au travail — et vérifiez-le si un boîtier signale un champ plausible qu'il n'a jamais semé.

**« Imitation mode »**, **« Display type »**, **« Launch updater »** et les deux commutateurs d'enregistrement s'affichent en anglais quelle que soit la langue réglée sur le boîtier.
