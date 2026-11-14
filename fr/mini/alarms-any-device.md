---
title: L'appareil ne répond pas : Connection lost, Wrong device type!
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/alarms-any-device.html
---

# L'appareil ne répond pas : Connection lost, Wrong device type!

Les deux alarmes que tout capteur, moteur ou actionneur du Hectare Mini peut déclencher — pas de réponse de l'appareil, ou réponse d'un appareil d'un autre type — et ce qu'il faut contrôler.

Tout appareil du réseau de capteurs peut déclencher ces deux alarmes. **La ligne d'appareil de la fenêtre d'alarme vous dit laquelle** — voir [Fonctionnement des alarmes](how-alarms-work.md).

## « Connection lost » — connexion perdue {#connection-lost}

**Ce que cela signifie.** L'appareil n'a pas répondu à trois interrogations de suite. Le boîtier ne connaît plus son état : rien à son sujet n'est surveillé tant qu'il ne répond pas de nouveau. Son indicateur affiche une croix rouge ou **XXXX** ; son écran d'état affiche **« No connection »** (pas de connexion).

**Ce qu'il faut contrôler, dans cet ordre :**

1. L'appareil a-t-il été ajouté récemment au profil ? Il n'a peut-être pas encore son adresse — [Configuration des appareils](device-configuration.md).
2. Les connecteurs de l'appareil et du faisceau : bien enfichés, broches propres et droites, pas d'eau à l'intérieur.
3. Le câble de l'appareil et le faisceau : écrasés, usés par frottement ou arrachés, surtout aux charnières et aux points de repliement.
4. L'alimentation de l'appareil. Elle doit correspondre aux valeurs de la fiche technique du système.
5. Le profil : énumère-t-il un appareil que la machine n'a pas ? — [Vérifier le profil et les connexions](check-profile-and-connections.md).
6. L'appareil lui-même : échangez-le avec un appareil du même type qui fonctionne. Si le défaut le suit, l'appareil est défectueux.

Quand plusieurs appareils d'un même type sont perdus en même temps, regardez d'abord ce qu'ils ont en commun : un module d'entrée, un concentrateur HUB-8, une branche du faisceau.

## « Wrong device type! » — mauvais type d'appareil {#wrong-device-type}

**Ce que cela signifie.** Quelque chose répond à l'adresse de cet appareil, mais pas le type d'appareil que le profil attend à cet endroit — par exemple un module d'entrée là où devrait se trouver un capteur de pression.

**Ce qu'il faut contrôler, dans cet ordre :**

1. Le profil : le type de chaque appareil tel qu'il est installé — [Le profil](profile.md).
2. Un appareil a-t-il été remplacé ou réadressé récemment ? Deux appareils partagent peut-être maintenant une adresse, ou l'un a l'adresse destinée à un autre. Adressez-le de nouveau — [Configuration des appareils](device-configuration.md).
3. Sur un concentrateur HUB-8 : le type de chaque canal — [Configurer un concentrateur HUB-8](configure-hub8.md).

Si vous devez continuer à travailler avec un appareil qui ne répond pas, vous pouvez le mettre hors surveillance jusqu'à sa réparation — [Mettre un capteur sous ou hors surveillance](sensor-in-and-out-of-control.md). Il n'est alors plus surveillé du tout.
