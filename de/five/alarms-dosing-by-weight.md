---
title: Produktmenge nach Gewicht zu niedrig, zu hoch oder unmöglich
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-dosing-by-weight.html
---

# Produktmenge nach Gewicht zu niedrig, zu hoch oder unmöglich

Was zu tun ist, wenn ein nach Gewicht dosiertes Produkt — durch einen Elektromotor oder einen gewichtsüberwachten Dosierer — seine Sollmenge verfehlt oder sie gar nicht erreichen kann.

Diese Alarme löst das System als Ganzes aus, nicht ein einzelnes Gerät. Es gibt sie **für jedes der vier Produkte** gesondert: Die Zahl in der Meldung ist die Nummer des Produkts. Wie weit ein Produkt von seiner Sollmenge abweichen darf, bestimmt **„Product rate error,%“** (Mengenfehler Produkt, %) im Menü **„Settings“** (Einstellungen) ([Das Menü Settings](settings-menu.md)). Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „Rate of Product 1“ / „is to low!“ — oder — „is to high!“ — Menge von Produkt 1 zu niedrig / zu hoch {#rate-of-product-1-is-to-low-or-is-to-high}

Dasselbe gilt für Produkt 2, 3 und 4. Das Panel schreibt die Meldung in dieser Schreibweise.

**Was es bedeutet.** Das Produkt wird um mehr als **„Product rate error,%“** unter oder über seiner Sollmenge in Kilogramm je Hektar ausgebracht.

**Produkt von einem Elektromotor dosiert — prüfen Sie in dieser Reihenfolge:**

1. Die Sollmenge des Produkts.
2. Die geltenden Geschwindigkeitsgrenzen auf dem Statusbildschirm des Geschwindigkeitssensors — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#what-each-kind-of-sensor-adds).
3. Die Einstellungen des Elektromotors, der die Dosierwelle antreibt — siehe [Dosierer-Elektromotor](dispenser-motor.md).
4. Die Dosiereinheit.
5. Der Drehsensor des Elektromotors ist in Ordnung.
6. Die Arbeitsauslastung des Motors. **Unter 20 % oder über 80 %** versuchen Sie eine Dosierwalze anderer Größe: eine **größere**, wenn zu wenig ausgebracht wird, eine **kleinere**, wenn zu viel.
7. Kalibrieren Sie die Dosierwalze — siehe [Dosierermotor nach Gewicht kalibrieren](calibrate-motor-weight.md).

**Dosierersensor mit eingeschalteter „Weight control“ (Gewichtsüberwachung) — prüfen Sie in dieser Reihenfolge:**

1. Die Sollmenge des Produkts.
2. Die Einstellungen des Sensors der Dosierwelle — siehe [Sensor der Dosierwelle](dispenser-sensor.md).
3. Die Dosiereinheit.
4. Der Dosierersensor ist in Ordnung.
5. Kalibrieren Sie den Dosierer — siehe [Dosierer nach Gewicht kalibrieren](calibrate-dispenser-weight.md).

## „Product dosage is“ / „impossible! Check product“ / „rate and calibration!“ — Dosierung unmöglich {#product-dosage-is-impossible-check-product-rate-and-calibration}

**Was es bedeutet.** Mit den aktuellen Einstellungen und der Sollmenge lässt sich das Produkt gar nicht nach Gewicht ausbringen: Die niedrigste Geschwindigkeit, bei der die Dosierwalzen die Menge liefern können, liegt schon bei oder über der höchsten. Auf dem Startbildschirm blinkt in der rechten Spalte ein rotes Produktsymbol.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Sollmengen der Produkte — ein Produkt, das zu viel verlangt, schließt das Fenster für alle.
2. **„Min speed, km/h“** (Mindestgeschwindigkeit) und **„Max speed, km/h“** (Höchstgeschwindigkeit) des Geschwindigkeitssensors — siehe [Geschwindigkeitssensor](speed-sensor.md).
3. Die Einstellungen der Elektromotoren, die die Produkte nach Gewicht ausbringen, vor allem **„Minimum, rpm“** (Minimum, U/min) und **„Maximum, rpm“** (Maximum, U/min).
4. Kalibrieren Sie die Dosierwalzen der Elektromotoren.
5. Hilft das nicht: Bauen Sie Dosierwalzen anderer Größe ein.

> **TIPP**
>
> Der Kalibrierbildschirm eines Dosiermotors zeigt das Geschwindigkeitsfenster, das die aktuelle Walze zulässt. Steht dort **„Can not provide dosage!“** (Dosierung nicht möglich), hilft keine Kalibrierung — die Walze passt nicht zur Menge. Siehe [Dosierermotor nach Gewicht kalibrieren](calibrate-motor-weight.md).
