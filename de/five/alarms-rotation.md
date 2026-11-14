---
title: Gebläse oder Dosierwelle: Drehzahlalarme
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-rotation.html
---

# Gebläse oder Dosierwelle: Drehzahlalarme

Was zu tun ist, wenn sich das Gebläse oder die Dosierwelle zu langsam, zu schnell oder gar nicht dreht.

Der Gebläsesensor und der Sensor der Dosierwelle verwenden dieselben zwei Meldungen. **Der Gerätename im Alarmfenster sagt Ihnen, welcher es ist.** Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „Low speed of rotation“ / „High speed of rotation“ — Drehzahl zu niedrig / zu hoch {#low-speed-of-rotation-high-speed-of-rotation}

**Was es bedeutet.** Das Gebläse oder die Dosierwelle dreht sich langsamer oder schneller als zulässig. Für das Gebläse sind die Grenzen **„Minimum, rpm“** (Minimum, U/min) und **„Maximum, rpm“** (Maximum, U/min); bei der Dosierwelle vergleicht das Panel sie mit der Drehzahl, die die Fahrgeschwindigkeit verlangt, innerhalb von **„Maximum error, %“** (Höchstabweichung, %).

**Was Sie in dieser Reihenfolge prüfen:**

1. Das überwachte Bauteil — das Gebläse oder der Dosierer mit seinem Antrieb.
2. Die Einstellungen des Sensors: beim Gebläse **„Minimum, rpm“**, **„Maximum, rpm“** und **„Pulses“** (Impulse) — siehe [Gebläsesensor](fan-sensor.md); beim Dosierer — siehe [Sensor der Dosierwelle](dispenser-sensor.md).
3. **Nur Dosierer:** Die Fahrgeschwindigkeit am Panel stimmt mit der wirklichen überein.
4. Der Sensor selbst ist in Ordnung.
5. **Nur Dosierer:** Führen Sie die Kalibrierung durch — siehe [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md).

## „No rotation“ — Keine Drehung {#no-rotation}

**Was es bedeutet.** Die Dosierwelle dreht sich nicht, während die Maschine sät oder fährt. Nur der Sensor der Dosierwelle löst diesen Alarm aus. Die Welle gilt als stehend, wenn für **„Period, s“** (Periode, s) kein Impuls gekommen ist.

**Was Sie in dieser Reihenfolge prüfen:**

1. Der Dosierer und sein Antrieb.
2. Die Einstellungen des Sensors, vor allem **„Period, s“** — siehe [Sensor der Dosierwelle](dispenser-sensor.md).
3. Der Sensor selbst ist in Ordnung.
