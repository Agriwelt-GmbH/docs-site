---
title: Le menu Service
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/service-menu.html
---

# Le menu Service

Chaque élément du menu Service, son niveau d'accès, et ceux qu'un technicien doit laisser tranquilles.

Touchez l'écran d'accueil avec deux doigts, puis touchez **« Service »** deux fois. Le menu lui-même est affiché à partir du niveau **« Agronomist »** ; les éléments que vous voyez dépendent du niveau ([Niveaux d'accès](access-levels.md)).

![Le menu Service au niveau Service.](figures/five-menu-service)

| **Élément** | **Niveau** | **Ce que c'est** |
| --- | --- | --- |
| **« Profile »** | Agronomist | Quels appareils la machine possède, et combien (profil). [Le profil](profile.md) |
| **« Sensors Configuration »** | Agronomist | Donner leur adresse aux appareils (configuration des capteurs). [Configuration des appareils](device-configuration.md) |
| **« Registers »** | Agronomist | Une vue brute des registres. Ne fait partie d'aucune procédure. |
| **« Electric motors »** | Agronomist | L'écran de diagnostic et la configuration des contrôleurs des moteurs de dosage (moteurs électriques). [Configurer les contrôleurs de moteurs](configure-motor-controllers.md) |
| **« Serial number »** | Service | Le numéro de série du panneau, saisi une fois à la fabrication. |
| **« Imitation mode »** | Service | **« No »** / **« Yes »** — le panneau travaille sur des données simulées (mode simulation). Voir l'avertissement ci-dessous. |
| **« Count seeds always »** | Agronomist | **« No »** / **« Yes »** — **« Yes »** affiche les compteurs de graines aussi dans les modes **« Flow »** et **« Hybrid »** ; sinon ils ne sont affichés qu'en mode **« Precise »** (toujours compter les graines). |
| **« Enter key »** | Agronomist | Saisit la clé de licence qui fait sortir le panneau de l'état de démonstration (saisir la clé). Affiché seulement tant que le panneau est dans cet état. |
| **« Set trial »** | Service | Lance la période de démonstration (régler l'essai). |
| **« Trial, hours »** | Service | 1 … 999 — la durée de cette période (essai, heures). |

Quatre autres éléments — le protocole du dispositif de suivi, deux commutateurs d'enregistrement sur la carte mémoire et le type d'afficheur — existent dans le micrologiciel mais sont réglés pour ne jamais être affichés. Ils sont inaccessibles à tous les niveaux.

> **AVERTISSEMENT**
>
> **« Imitation mode » n'est pas une aide d'essai à laisser activée.** Activé, le panneau travaille sur des chiffres qu'il fabrique : chaque nombre de chaque écran et chaque entrée des statistiques est inventé. L'emplacement de l'horloge de l'écran d'accueil affiche **IMITAT** en jaune tant qu'il est activé. Désactivez-le avant que la machine parte au travail — et vérifiez-le si un panneau signale une parcelle plausible qu'il n'a jamais semée.

**« Imitation mode »** s'affiche en anglais, quelle que soit la langue réglée sur le panneau.
