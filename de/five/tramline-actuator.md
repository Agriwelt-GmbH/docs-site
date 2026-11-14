---
title: Fahrgassen-Aktuator
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/tramline-actuator.html
---

# Fahrgassen-Aktuator

Die zwei Parameter des Fahrgassen-Aktuators, wo seine übrigen Einstellungen liegen und was sein Statusbildschirm zeigt.

Der Fahrgassen-Aktuator schaltet die Sektionen des Fahrgassen-Durchgangs ab. Er hat zwei eigene Parameter in seinem Kontextmenü — berühren und halten Sie seine Kachel auf dem Motorbildschirm ([Sensoreinstellungen](sensor-settings.md)):

| **Parameter** | **Werte** | **Ebene** |
| --- | --- | --- |
| **„Cutoff position“** (Abschaltstellung) | **„Pulled out“** (ausgefahren) / **„Pulled in“** (eingezogen) — die Stellung des Aktuators, in der seine Sektionen abgeschaltet sind. Standard **„Pulled out“**. | Agronomist |
| **„Switch“** (Schalten) | **„when seeding“** (bei der Aussaat) / **„always“** (immer) — wann der Aktuator geschaltet wird. Standard **„when seeding“**. | Agronomist |

Die übrigen Einstellungen liegen woanders:

| **Was** | **Wo** |
| --- | --- |
| Die Adresse und die Spuranzeigerkanäle seines Controllers | [Controller des Fahrgassen-Aktuators konfigurieren](configure-tramline-actuator.md) |
| Der Rhythmus — welcher Durchgang welchen Aktuator abschaltet | [Fahrgassenrhythmus einstellen](tramline-rhythm.md) |
| Welche Sektionen zum Aktuator gehören | **„Relation of sensors to actuators“** (Zuordnung der Sensoren zu den Aktuatoren) — [Sämaschinen-Parameter](seeding-machine-parameters.md#relation-of-sensors-to-actuators) |

Der Statusbildschirm des Aktuators zeigt **Status:** **Pulled in**, **Pulled out**, **Working** (in Bewegung), solange sich der Schieber bewegt, oder **Unknown** (unbekannt). Alarme: [Fahrgassenalarme](alarms-tramline.md).

> **HINWEIS**
>
> **Ein Aktuator-Controller trägt drei Dinge:** den Aktuator selbst und **beide** Spuranzeigersensoren des Durchgangs. Deshalb braucht eine Maschine mit Spuranzeigern und Fahrgasse nur einen solchen Controller.
