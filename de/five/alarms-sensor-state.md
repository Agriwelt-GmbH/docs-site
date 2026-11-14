---
title: Korn- oder Düngersensor verstopft, von Licht getroffen oder defekt
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-sensor-state.html
---

# Korn- oder Düngersensor verstopft, von Licht getroffen oder defekt

Was zu tun ist, wenn ein optischer Korn- oder Düngersensor einen blockierten Kanal, zu viel Licht, eine eigene Störung oder veraltete Firmware meldet.

Die Korn- und Trockendüngersensoren zählen das Produkt optisch: Ein Sender leuchtet quer durch den Kanal, ein Empfänger sieht jedes Korn. Diese Alarme melden den Zustand des Sensors selbst, nicht die Menge. Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „Clogged“ — Verstopft {#clogged}

**Was es bedeutet.** Der Korn- oder Trockendüngersensor hat erkannt, dass sein optischer Kanal blockiert ist.

**Was Sie in dieser Reihenfolge tun:**

1. Beseitigen Sie die Verstopfung.
2. Prüfen Sie den Kanal auf Staubablagerungen.
3. Prüfen Sie die Stromversorgung des Sensors. Sie muss den Werten im Gerätepass entsprechen.

## „Light struck“ — Lichteinfall {#light-struck}

**Was es bedeutet.** Der Korn- oder Düngersensor hat in seinem optischen Kanal eine extrem hohe Lichtmenge erkannt.

**Was Sie tun:** Halten Sie direktes Sonnenlicht vom optischen Kanal des Sensors fern.

## „Broken“ — Defekt {#broken}

**Was es bedeutet.** Der Korn- oder Trockendüngersensor hat eine eigene Störung erkannt. Unter Umständen muss er ersetzt werden. Sein Statusbildschirm zeigt **„Faulty“** (gestört).

**Was Sie tun:** Prüfen Sie die Stromversorgung des Sensors. Sie muss den Werten im Gerätepass entsprechen. Ist die Stromversorgung in Ordnung, muss der Sensor unter Umständen ersetzt werden — wenden Sie sich an den Service.

## „Old firmware! Wrong S&D calc!“ — Alte Firmware! Falsche Berechnung von Fehlstellen und Doppelbelegungen {#old-firmware-wrong-sd-calc}

**Was es bedeutet.** Ein **Trockendüngersensor** mit veralteter Firmware ist im Einsatz, während der Dünger im Modus **„Precise“** (Einzelkorn) läuft. Er zählt, doch seine Fehlstellen und Doppelbelegungen sind nicht verlässlich.

**Was Sie tun:** Wenden Sie sich an den Service, damit die Firmware des Sensors aktualisiert wird — oder stellen Sie **„Mode of fertilizers“** (Modus der Düngung) auf **„Flow“** (Durchfluss) oder **„Hybrid“** (Hybrid) ([Sämaschinen-Parameter](seeding-machine-parameters.md)).

> **SIEHE AUCH**
>
> Der Statusbildschirm des Sensors zeigt dieselben Zustände — **„Clogged“**, **„Light struck“**, **„Faulty“** — in Rot: [Der Sensor-Statusbildschirm](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
