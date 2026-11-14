---
title: Spuranzeiger-Sensoren
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/marker-sensors.html
---

# Spuranzeiger-Sensoren

Die zwei Einstellungen der Sensoren an den Spuranzeigerarmen des Hectare Mini – welchen Arm ein einzelner Sensor überwacht und welches Signal bedeutet, dass der Arm unten ist.

Spuranzeiger-Sensoren sagen dem Panel, ob die Spuranzeigerarme oben oder unten sind. Der Startbildschirm zeichnet die beiden Arme; beide oben werden gelb dargestellt – siehe [Anzeigen](indicators.md#markers). Wie viele Sensoren die Arme überwachen, stellen Sie unter **„Spuranz.“** im [Profil](profile.md) ein: **„Einer“** oder **„Beide“**.

Öffnen Sie das Kontextmenü eines Spuranzeiger-Sensors wie in [Sensoreinstellungen](sensor-settings.md) beschrieben. Beide Einstellungen erfordern die Ebene **„Agronom“**.

| **Parameter** | **Was er bewirkt** | **Werte · Werkseinstellung** |
| --- | --- | --- |
| **„Spuranz.montiert“** | Welchen Arm der einzelne Sensor überwacht: **„Links“** oder **„Rechts“**. Nur sichtbar mit **„Spuranz.“** auf **„Einer“**. | · **„Links“** |
| **„Signal "ab"“** | Der Pegel am Eingang, **0** oder **1**, der bedeutet, dass der Arm unten ist. Stellen Sie ein, was der Sensor bei abgesenktem Arm liefert. | 0 / 1 · 0 |

Der Statusbildschirm eines Spuranzeiger-Sensors zeigt nur die gemeinsamen Zeilen – Typ, Verbindung und Alarme ([Der Sensor-Statusbildschirm](sensor-status-screen.md)). Ein Spuranzeiger-Sensor löst nur die Alarme aus, die jedes Gerät auslösen kann: **„Verbindung weg“** und **„Falscher Gerätetyp!“** – siehe [Gerät antwortet nicht](alarms-any-device.md).
