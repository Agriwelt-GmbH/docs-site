---
title: Druckalarme: Druck hoch, Druck nied.
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-pressure.html
---

# Druckalarme: Druck hoch, Druck nied.

Was zu tun ist, wenn der von einem Drucksensor des Hectare Mini gemessene Unterdruck zu hoch oder zu niedrig ist.

Das Panel vergleicht den Absolutwert des gemessenen Drucks mit **„Minimum,Pa“** und **„Maximum,Pa“** des Sensors ([Drucksensor](pressure-sensor.md)), solange die Maschine sät oder in Arbeitsstellung fährt. Die Gerätezeile nennt den Sensor: **Drucksensor: #1**.

## „Druck hoch“ {#high-pressure}

**Was es bedeutet.** Der gemessene Druck liegt über **„Maximum,Pa“** – zu viel Unterdruck.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Verringern Sie die Drehzahl des Gebläses oder der Turbine.
2. Die Regelklappe des Lufteinlasses, falls die Maschine eine hat.
3. Der Schlauch zum Drucksensor: am richtigen Punkt angeschlossen, nicht geknickt, nicht verstopft.
4. **„Maximum,Pa“** des Sensors.

## „Druck nied.“ {#low-pressure}

**Was es bedeutet.** Der gemessene Druck liegt unter **„Minimum,Pa“** – zu wenig Unterdruck.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Erhöhen Sie die Drehzahl des Gebläses oder der Turbine.
2. Die Regelklappe des Lufteinlasses, falls die Maschine eine hat.
3. Die Luftkanäle und Säaggregate auf Undichtigkeiten – Schläuche, Dichtungen, Deckel.
4. Der Schlauch zum Drucksensor: am richtigen Punkt angeschlossen, nicht geknickt, nicht verstopft.
5. **„Minimum,Pa“** des Sensors.

Der gemessene Druck steht auf dem Statusbildschirm des Sensors, **P=** in kPa – vergleichen Sie ihn mit den Grenzen, die in Pa eingestellt werden (1 kPa = 1000 Pa).
