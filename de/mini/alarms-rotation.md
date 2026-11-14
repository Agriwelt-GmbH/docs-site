---
title: Gebläse und Dosierwelle: Drehzahlalarme
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-rotation.html
---

# Gebläse und Dosierwelle: Drehzahlalarme

Was zu tun ist, wenn das Gebläse oder eine Dosierwelle des Hectare Mini zu langsam, zu schnell oder gar nicht dreht.

Der Gebläsesensor und der Dosierwellensensor verwenden dieselben zwei Meldungen. **Die Gerätezeile des Alarmfensters sagt Ihnen, welcher es ist** – **Gebläse** oder **Dosierer**, mit seiner Nummer. Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

## „Drehzahl zu niedrig“ {#low-speed-of-rotation}

**Was es bedeutet.** Das Gebläse dreht langsamer als **„Minimum, U/min“**, oder die Dosierwelle langsamer, als es die Fahrgeschwindigkeit verlangt, um mehr als **„Max. Fehler, %“**.

**Was Sie prüfen, in dieser Reihenfolge:**

1. **Nur Dosierer:** Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. Das überwachte Bauteil – das Gebläse samt Antrieb oder der Dosierer samt Antrieb.
3. Die Einstellungen des Sensors: beim Gebläse **„Minimum, U/min“** und **„Impulse“** – [Gebläsesensor](fan-sensor.md); beim Dosierer **„Max. Fehler, %“** – [Dosierwellensensor](dispenser-sensor.md).
4. Der Sensor selbst ist in Ordnung.
5. **Nur Dosierer:** Kalibrieren Sie die Drehung erneut – [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md).

## „Drehzahl zu hoch“ {#high-speed-of-rotation}

**Was es bedeutet.** Das Gebläse dreht schneller als **„Maximum, U/min“** – das wird auch im Stand überwacht –, oder die Dosierwelle schneller, als es die Fahrgeschwindigkeit verlangt, um mehr als **„Max. Fehler, %“**.

**Was Sie prüfen, in dieser Reihenfolge:**

1. **Nur Dosierer:** Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. Das überwachte Bauteil – das Gebläse samt Antrieb oder der Dosierer samt Antrieb.
3. Die Einstellungen des Sensors: beim Gebläse **„Maximum, U/min“** und **„Impulse“**; beim Dosierer **„Max. Fehler, %“**.
4. Der Sensor selbst ist in Ordnung.
5. **Nur Dosierer:** Kalibrieren Sie die Drehung erneut.

Die Drehzahl der Dosierwelle wird nur bei **„Drehzahlüberwachung“** auf **„Ja“** und nur überwacht, solange die Maschine fährt.

## „Kein Lauf“ {#no-rotation}

**Was es bedeutet.** Die Dosierwelle liefert länger als **„Periode,s“** keinen Impuls, während die Maschine sät oder fährt. Diesen Alarm löst nur der Dosierwellensensor aus.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Dosierer und sein Antrieb – Kette, Kupplung, Scherbolzen.
2. **„Periode,s“** des Sensors: lang genug für die langsamste Wellendrehzahl bei der Arbeit – [Dosierwellensensor](dispenser-sensor.md).
3. Der Abstand zwischen Sensor und Geber und der Sensor selbst.
