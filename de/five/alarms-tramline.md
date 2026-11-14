---
title: Fahrgasse: Aktuator blockiert oder Produkt in der Fahrgasse
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-tramline.html
---

# Fahrgasse: Aktuator blockiert oder Produkt in der Fahrgasse

Was zu tun ist, wenn der Fahrgassen-Aktuator klemmt, seine Stellungssensoren einander widersprechen oder eine abgeschaltete Sektion noch Produkt ausbringt.

Der Fahrgassen-Aktuator schaltet die Sektionen des Fahrgassen-Durchgangs ab. Zwei Stellungssensoren des Schiebers sagen dem Panel, wo dessen Klappe steht. Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „Stall“ — Blockiert {#stall}

**Was es bedeutet.** Der Fahrgassen-Aktuator klemmt.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Stellungssensoren des Schiebers am Aktuator sind in Ordnung.
2. Die Mechanik des Fahrgassen-Aktuators ist in Ordnung.

## „Illegal state“ — Unzulässiger Zustand {#illegal-state}

**Was es bedeutet.** Der Aktuator meldet eine Stellung, die es nicht geben kann: Beide Stellungssensoren des Schiebers haben gleichzeitig ausgelöst. Bei einwandfreier Anlage kann das nicht vorkommen.

**Was Sie prüfen:** Die Stellungssensoren des Schiebers sind in Ordnung.

## „Seeding to tramline“ — Aussaat in die Fahrgasse {#seeding-to-tramline}

**Was es bedeutet.** Eine Sektion, die für die Fahrgasse abgeschaltet sein sollte, bringt noch zu viel Produkt aus. Der Kornsensor, der Trockendüngersensor oder der Flüssigdüngersensor dieser Sektion hat es im Fahrgassen-Überwachungsmodus gemessen.

**Kornsensor oder Trockendüngersensor — prüfen Sie in dieser Reihenfolge:**

1. Die Dosiereinheit und der Mechanismus zum Absperren des Flusses sind in Ordnung.
2. **„Toler.sowing to tramline,%“** (Toleranz Aussaat zur Fahrgasse, %) in den Einstellungen der Gruppe der Sektionssensoren. Der Wert muss unter Umständen **erhöht** werden. Siehe [Kornsensoren und Trockendüngersensoren](seed-and-fertilizer-sensors.md).
3. **„Fraction“** (Fraktion) in den Einstellungen der Gruppe des alarmierenden Sensors. Der Wert muss unter Umständen **erhöht** werden.
4. Der Status des Sensors auf seinem Statusbildschirm — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).

**Flüssigdüngersensor — prüfen Sie in dieser Reihenfolge:**

1. Die Dosiereinheit und der Mechanismus zum Absperren des Flusses sind in Ordnung.
2. **„Tolerable leak to tramline,%“** (Zulässiger Austritt zur Fahrgasse, %) in den Einstellungen der Gruppe der Sektionssensoren. Der Wert muss unter Umständen **erhöht** werden. Siehe [Flüssigdünger](liquid-fertilizer.md).

Ein Sensor, dessen **„Product application“** (Produktausbringung) auf **„No“** steht, wird genauso überwacht — als abgeschaltete Reihe.

> **SIEHE AUCH**
>
> Welche Sektionen zu welchem Aktuator gehören, wird unter **„Relation of sensors to actuators“** (Zuordnung der Sensoren zu den Aktuatoren) eingestellt — [Sämaschinen-Parameter](seeding-machine-parameters.md#relation-of-sensors-to-actuators). Der Rhythmus: [Fahrgassenrhythmus einstellen](tramline-rhythm.md).
