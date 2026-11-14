---
title: Luftdruck zu hoch oder zu niedrig
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-pressure.html
---

# Luftdruck zu hoch oder zu niedrig

Was zu tun ist, wenn der Drucksensor des Luftsystems einen Druck oder Unterdruck außerhalb des zulässigen Bereichs meldet.

Der Drucksensor misst den Überdruck oder den Unterdruck des Luftsystems. Beide Alarme betrachten den Absolutwert – die Größe des Drucks oder Unterdrucks, welcher es auch ist. Die Grenzen des Sensors sind in [Drucksensor](pressure-sensor.md) beschrieben. Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

## „Druck hoch“ {#high-pressure}

**Was es bedeutet.** Der gemessene Druck oder Unterdruck ist größer als zulässig.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Verringern Sie die Drehzahl des Gebläses oder der Turbine.
2. Die Stellung der Regelklappe der Luftansaugung, falls vorhanden.
3. Der Schlauch zum Drucksensor ist richtig angeschlossen, und die Messleitung ist frei von Verstopfungen.

## „Niedriger Druck“ {#low-pressure}

**Was es bedeutet.** Der gemessene Druck oder Unterdruck ist kleiner als zulässig.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Erhöhen Sie die Drehzahl des Gebläses oder der Turbine.
2. Die Stellung der Regelklappe der Luftansaugung, falls vorhanden.
3. Der Luftkanal auf Undichtigkeiten.
4. Der Schlauch zum Drucksensor ist richtig angeschlossen, und die Messleitung ist frei von Verstopfungen.

> **HINWEIS**
>
> Der Pumpencontroller für Flüssigdünger hat für die Flüssigkeitsleitung einen eigenen Alarm **„Druck hoch“**. Das ist ein anderer Alarm – siehe [Flüssigdüngerpumpe](alarms-pump-controller.md).
