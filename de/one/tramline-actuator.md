---
title: Fahrgassen-Aktuator
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/tramline-actuator.html
---

# Fahrgassen-Aktuator

Die zwei Parameter des Fahrgassen-Aktuators, wo seine übrigen Einstellungen liegen und was sein Statusbildschirm zeigt.

Der Fahrgassen-Aktuator schaltet die Sektionen des Fahrgassendurchgangs ab. Er hat zwei eigene Parameter in seinem Kontextmenü ([Sensoreinstellungen](sensor-settings.md)):

| Parameter | Werte | Ebene |
| --- | --- | --- |
| **„Abschaltposition“** | **„Ausgefahren“** / **„Eingezogen“** – die Stellung des Aktuators, in der seine Sektionen abgeschaltet sind. Standard **„Ausgefahren“**. | Agronom |
| **„Umschaltung“** | **„bei Aussaat“** / **„immer“** – wann der Aktuator geschaltet wird. Standard **„bei Aussaat“**. | Agronom |

Die übrigen Einstellungen liegen an anderer Stelle:

| Was | Wo |
| --- | --- |
| Die Adresse und die Spuranzeigerkanäle seines Controllers | [Controller des Fahrgassen-Aktuators konfigurieren](configure-tramline-actuator.md) |
| Der Rhythmus – welcher Durchgang welchen Aktuator abschaltet | [Fahrgassenrhythmus einstellen](tramline-rhythm.md) |
| Welche Sektionen zum Aktuator gehören | **„Zuordnung Aktuator-Sensor“** – [Sämaschinen-Parameter](seeding-machine-parameters.md#actuators-to-sensors-mapping) |

Der Statusbildschirm des Aktuators zeigt **Status:** **Eingezogen**, **Ausgefahren**, **Betrieb**, solange sich die Klappe bewegt, oder **Unbekannt**. Alarme: [Fahrgassenalarme](alarms-tramline.md).

> **HINWEIS**
>
> **Ein Aktuator-Controller trägt drei Dinge:** den Aktuator selbst und **beide** Spuranzeigersensoren des Durchgangs. Deshalb braucht eine Maschine mit Spuranzeigern und Fahrgasse nur einen solchen Controller.
