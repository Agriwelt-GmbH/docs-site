---
title: Gebläsesensor
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/fan-sensor.html
---

# Gebläsesensor

Die Parameter des Gebläsedrehzahlsensors — das zulässige Drehzahlband und die Impulse je Umdrehung — mit Bereichen und Standardwerten.

Der Gebläsesensor überwacht die Drehzahl des Gebläses einer pneumatischen Drillmaschine oder Einzelkornsämaschine. Berühren und halten Sie das Gebläsesymbol auf dem Startbildschirm, um sein Kontextmenü zu öffnen ([Sensoreinstellungen](sensor-settings.md)).

| **Parameter** | **Was er tut** | **Bereich, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Minimum, rpm“** (Minimum, U/min) | Darunter löst das Panel **„Low speed of rotation“** (Drehzahl zu niedrig) aus. | 500 … 9000, Schritte von 500; 3000 | Operator |
| **„Maximum, rpm“** (Maximum, U/min) | Darüber löst das Panel **„High speed of rotation“** (Drehzahl zu hoch) aus. | 500 … 9000, Schritte von 500; 5000 | Operator |
| **„Pulses“** (Impulse) | Wie viele Impulse eine Umdrehung des Gebläses gibt. | 1 … 60; 2 | Agronomist |

![Das Kontextmenü eines Gebläsesensors auf der Ebene Agronomist.](figures/five-ctx-fan)

Der Startbildschirm zeigt die Gebläsedrehzahl in U/min neben dem Symbol; der Statusbildschirm zeigt die Impulsfrequenz **F=** in Hz. Alarme: [Gebläse oder Dosierwelle: Drehzahlalarme](alarms-rotation.md).
