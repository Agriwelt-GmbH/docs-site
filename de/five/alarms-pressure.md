---
title: Luftdruck zu hoch oder zu niedrig
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-pressure.html
---

# Luftdruck zu hoch oder zu niedrig

Was zu tun ist, wenn der Drucksensor des Luftsystems einen Druck oder Unterdruck außerhalb des zulässigen Bereichs meldet.

Der Drucksensor misst den Überdruck oder den Unterdruck des Luftsystems. Beide Alarme betrachten den Betrag des Über- oder Unterdrucks, welcher es auch ist, und nur, solange die Maschine sät oder mit dem Gerät in Arbeitsstellung fährt. Die Grenzen sind in [Drucksensor](pressure-sensor.md) beschrieben. Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „High pressure“ — Druck zu hoch {#high-pressure}

**Was es bedeutet.** Der gemessene Über- oder Unterdruck ist größer als **„Maximum, Pa“** (Maximum, Pa).

**Was Sie in dieser Reihenfolge prüfen:**

1. Verringern Sie die Drehzahl des Gebläses oder der Turbine.
2. Die Stellung der Regelklappe des Lufteinlasses, falls vorhanden.
3. Der Schlauch zum Drucksensor ist richtig angeschlossen, und die Messleitung ist frei von Verstopfungen.

## „Low pressure“ — Druck zu niedrig {#low-pressure}

**Was es bedeutet.** Der gemessene Über- oder Unterdruck ist kleiner als **„Minimum, Pa“** (Minimum, Pa).

**Was Sie in dieser Reihenfolge prüfen:**

1. Erhöhen Sie die Drehzahl des Gebläses oder der Turbine.
2. Die Stellung der Regelklappe des Lufteinlasses, falls vorhanden.
3. Der Luftkanal auf Undichtigkeiten.
4. Der Schlauch zum Drucksensor ist richtig angeschlossen, und die Messleitung ist frei von Verstopfungen.

> **HINWEIS**
>
> Der Flüssigdünger-Pumpencontroller hat für die Flüssigkeitsleitung einen eigenen Alarm **„High pressure“**. Das ist ein anderer Alarm — siehe [Flüssigdüngerpumpe](alarms-pump-controller.md).
