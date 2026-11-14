---
title: Produktmenge nach Masse zu niedrig, zu hoch oder unmöglich
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-dosing-by-weight.html
---

# Produktmenge nach Masse zu niedrig, zu hoch oder unmöglich

Was zu tun ist, wenn ein nach Masse dosiertes Produkt – über einen Elektromotor oder einen massenüberwachten Dosierer – seine Sollmenge verfehlt oder sie gar nicht erreichen kann.

Diese Alarme löst das System als Ganzes aus, nicht ein einzelnes Gerät. Es gibt sie **für jedes der vier Produkte** getrennt: Die Zahl in der Meldung ist die Nummer des Produkts. Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

## „Menge Produkt 1“ / „zu gering!“ – oder – „zu hoch!“ {#rate-of-product-1-is-too-low-or-is-too-high}

Dasselbe gilt für Produkt 2, 3 und 4.

**Was es bedeutet.** Das Produkt wird unter oder über seiner Sollmenge in Kilogramm je Hektar ausgebracht.

**Produkt, das ein Elektromotor dosiert – Sie prüfen, in dieser Reihenfolge:**

1. Die Sollmenge des Produkts.
2. Die geltenden Geschwindigkeitsgrenzen auf dem Statusbildschirm des Geschwindigkeitssensors – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#what-each-kind-of-sensor-adds).
3. Die Einstellungen des Elektromotors, der die Dosierwelle antreibt – siehe [Dosierer-Elektromotor](dispenser-motor.md).
4. Das Dosiergerät.
5. Der Drehsensor des Elektromotors ist betriebsbereit.
6. Die Arbeitslast des Motors. **Unter 20 % oder über 80 %:** Versuchen Sie eine Dosierwalze anderer Größe – eine **größere**, wenn zu wenig ausgebracht wird, eine **kleinere**, wenn zu viel.
7. Kalibrieren Sie die Dosierwalze – siehe [Dosiermotor nach Masse kalibrieren](calibrate-motor-weight.md).

**Dosierersensor mit eingeschalteter „Massenüberwachung“ – Sie prüfen, in dieser Reihenfolge:**

1. Die Sollmenge des Produkts.
2. Die Einstellungen des Drehsensors der Dosierwelle – siehe [Dosierwellensensor](dispenser-sensor.md).
3. Das Dosiergerät.
4. Der Dosierersensor ist betriebsbereit.
5. Kalibrieren Sie die Dosierwalze – siehe [Dosierer nach Masse kalibrieren](calibrate-dispenser-weight.md).

## „Produktdosierung nicht“ / „möglich! Menge und“ / „Kalibrierung prüfen!“ {#product-dosage-is-impossible-check-product-rate-and-calibration}

**Was es bedeutet.** Mit den aktuellen Einstellungen und der Sollmenge lässt sich das Produkt überhaupt nicht nach Masse ausbringen.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Sollmenge des Produkts.
2. **„Min. Geschwindigkeit, km/h“** und **„Max. Geschwindigkeit, km/h“** des Geschwindigkeitssensors – siehe [Fahrgeschwindigkeitssensor](speed-sensor.md).
3. Die Einstellungen der Elektromotoren, die die Produkte nach Masse ausbringen, vor allem **„Minimum, U/min“** und **„Maximum, U/min“**.
4. Kalibrieren Sie die Dosierwalzen der Elektromotoren.
5. Hilft das nicht: Bauen Sie Dosierwalzen anderer Größe ein.

> **TIPP**
>
> Der Kalibrierbildschirm eines Dosiermotors zeigt das Geschwindigkeitsfenster, das die aktuelle Walze zulässt. Steht dort **„Dosierung unmöglich!“**, hilft keine Kalibrierung – die Walze passt nicht zur Menge. Siehe [Dosiermotor nach Masse kalibrieren](calibrate-motor-weight.md).
