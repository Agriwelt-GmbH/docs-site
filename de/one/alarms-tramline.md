---
title: Fahrgasse: Aktuator blockiert oder Produkt in der Fahrgasse
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-tramline.html
---

# Fahrgasse: Aktuator blockiert oder Produkt in der Fahrgasse

Was zu tun ist, wenn der Fahrgassen-Aktuator klemmt, seine Stellungssensoren sich widersprechen oder eine abgeschaltete Sektion weiter Produkt ausbringt.

Der Fahrgassen-Aktuator schaltet die Sektionen des Fahrgassendurchgangs ab. Zwei Stellungssensoren der Klappe sagen dem Panel, wo seine Klappe steht. Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

## „Blockiert“ {#stall}

**Was es bedeutet.** Der Fahrgassen-Aktuator klemmt.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Stellungssensoren der Klappe des Aktuators sind betriebsbereit.
2. Der Mechanismus des Fahrgassen-Aktuators ist betriebsbereit.

## „Undefinierter Zustand“ {#illegal-state}

**Was es bedeutet.** Beide Stellungssensoren der Klappe haben gleichzeitig ausgelöst. Bei einer einwandfreien Installation kann das nicht vorkommen.

**Was Sie prüfen:** Die Stellungssensoren der Klappe sind betriebsbereit.

## „Saat in Fahrgasse“ {#seeding-to-tramline}

**Was es bedeutet.** Eine Sektion, die für die Fahrgasse abgeschaltet sein sollte, bringt noch zu viel Produkt aus. Der Kornsensor, der Trockendüngersensor oder der Flüssigdüngersensor dieser Sektion hat es im Fahrgassen-Überwachungsmodus gemessen.

**Kornsensor oder Trockendüngersensor – Sie prüfen, in dieser Reihenfolge:**

1. Das Dosiergerät und der Mechanismus zum Absperren des Flusses sind betriebsbereit.
2. **„Zulässige Saat in Fahrgasse,%“** in den Einstellungen der Gruppe der Sektionssensoren. Der Wert muss eventuell **erhöht** werden. Siehe [Korn- und Düngersensoren](seed-and-fertilizer-sensors.md).
3. **„Fraktion“** in den Einstellungen der Gruppe des alarmierenden Sensors. Der Wert muss eventuell **erhöht** werden.
4. Der Status des Sensors auf seinem Statusbildschirm – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).

**Flüssigdüngersensor – Sie prüfen, in dieser Reihenfolge:**

1. Das Dosiergerät und der Mechanismus zum Absperren des Flusses sind betriebsbereit.
2. **„Zulässiger Verlust in Fahrgasse,%“** in den Einstellungen der Gruppe der Sektionssensoren. Der Wert muss eventuell **erhöht** werden. Siehe [Flüssigdünger](liquid-fertilizer.md).

> **SIEHE AUCH**
>
> Welche Sektionen zu welchem Aktuator gehören, wird unter **„Zuordnung Aktuator-Sensor“** eingestellt – [Sämaschinen-Parameter](seeding-machine-parameters.md). Der Rhythmus: [Fahrgassenrhythmus einstellen](tramline-rhythm.md).
