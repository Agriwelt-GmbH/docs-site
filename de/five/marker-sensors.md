---
title: Spuranzeigersensoren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/marker-sensors.html
---

# Spuranzeigersensoren

Die Parameter der Spuranzeigersensoren — welchen Spuranzeiger ein Sensor überwacht und welcher Eingangszustand abgesenkt bedeutet.

Die Spuranzeigersensoren sagen dem Panel, welcher Spuranzeiger unten ist. Das Profil gibt **„No“** (Nein), **„One“** (einer) oder **„Both“** (beide) an ([Das Profil](profile.md)). Berühren und halten Sie das Spuranzeigersymbol auf dem Startbildschirm, um das Kontextmenü eines Spuranzeigersensors zu öffnen ([Sensoreinstellungen](sensor-settings.md)).

| **Parameter** | **Was er tut** | **Werte, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Connected marker“** (Angeschlossener Spuranzeiger) | Welchen Spuranzeiger der einzelne Sensor überwacht. Verborgen, wenn das Profil beide Spuranzeiger enthält. | **„Left“** (Links) / **„Right“** (Rechts); **„Left“** | Agronomist |
| **„Signal "down"“** (Signal abgesenkt) | Welcher Zustand des Eingangs bedeutet, dass der Spuranzeiger abgesenkt ist. | 0 / 1; 0 | Agronomist |

Der Statusbildschirm eines Spuranzeigersensors zeigt nur die gemeinsamen Zeilen. An einer Maschine, die Fahrgassen anlegt, beendet der Wechsel der Spuranzeigerstellung einen Durchgang — siehe [Fahrgassenrhythmus einstellen](tramline-rhythm.md#how-the-bout-changes).

> **HINWEIS**
>
> **Die Spuranzeigersensoren sind an den Controller des Fahrgassen-Aktuators angeschlossen.** Ein solcher Controller trägt den Aktuator **und** beide Spuranzeigersensoren — siehe [Controller des Fahrgassen-Aktuators konfigurieren](configure-tramline-actuator.md).
