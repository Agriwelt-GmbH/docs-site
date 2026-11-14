---
title: Gebläsesensor
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/fan-sensor.html
---

# Gebläsesensor

Die Einstellungen eines Gebläsedrehzahlsensors des Hectare Mini – minimale und maximale Gebläsedrehzahl und Impulse je Umdrehung – und wann das Panel seine Alarme auslöst.

Ein Gebläsesensor zählt die Umdrehungen des Gebläses einer pneumatischen Drill- oder Einzelkornmaschine. Der Startbildschirm zeigt die Gebläsedrehzahl in U/min. **Jeder Gebläsesensor hat eigene Einstellungen.**

Öffnen Sie sein Kontextmenü wie in [Sensoreinstellungen](sensor-settings.md) beschrieben.

![Das Kontextmenü eines Gebläsesensors.](figures/ctx-fan)

| **Parameter** | **Ebene** | **Was er bewirkt** | **Bereich · Werkseinstellung** |
| --- | --- | --- | --- |
| **„Minimum, U/min“** | Fahrer | Niedrigste zulässige Gebläsedrehzahl. Darunter löst das Panel **„Drehzahl zu niedrig“** aus – aber nur, solange die Maschine sät oder in Arbeitsstellung fährt. | 500 … 9000 U/min, in Schritten von 500 · 3000 |
| **„Maximum, U/min“** | Fahrer | Höchste zulässige Gebläsedrehzahl. Darüber löst das Panel **„Drehzahl zu hoch“** aus – jederzeit, auch im Stand. | 500 … 9000 U/min, in Schritten von 500 · 5000 |
| **„Impulse“** | Agronom | Impulse des Sensors je Umdrehung des Gebläses. | 1 … 60 · 2 |

Eine Gebläsedrehzahl, die richtig aussieht, aber Alarme auslöst, deutet meist auf falsche **„Impulse“** hin: Doppelt so viele Impulse zeigen die halbe Drehzahl.

Was Säen und Fahren für das Panel bedeuten, steht unter [Wann das Panel die Aussaat überwacht](seed-and-fertilizer-sensors.md#when-the-panel-controls-the-seeding). Ohne Geschwindigkeitssensor wird das Minimum überwacht, solange das Panel Aussaat erkennt. Bei einem Arbeitsstellungssensor, dessen **„Alarmkriterium“** **„Ja“** ist, wird das Minimum in der Transportstellung nicht überwacht.

## Der Statusbildschirm {#the-status-screen}

Zeigt die Impulsfrequenz **F=** in Hz – [Der Sensor-Statusbildschirm](sensor-status-screen.md). Die Gebläsedrehzahl in U/min ist diese Frequenz × 60 ÷ **„Impulse“**.

![Der Statusbildschirm eines Gebläsesensors.](figures/status-fan)

Die Alarme des Gebläses und was zu prüfen ist: [Gebläse und Dosierwelle: Drehzahlalarme](alarms-rotation.md).
