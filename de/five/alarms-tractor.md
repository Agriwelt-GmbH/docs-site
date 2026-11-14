---
title: Motor: Öldruck, Batterieladung, Kraftstoff, Luftfilter
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-tractor.html
---

# Motor: Öldruck, Batterieladung, Kraftstoff, Luftfilter

Was zu tun ist, wenn einer der Motorsensoren — Öldruck, Batterieladung, Kraftstoffstand, Luftfilter — einen Alarm auslöst.

Alle Motorsensoren teilen sich einen Alarmtext: **„FAILURE“** (Störung). **Der Name des Sensors unter dem Text sagt Ihnen, welcher ausgelöst hat.** Öldruck und Batterieladung werden nur überwacht, solange die Zündung eingeschaltet ist; Kraftstoffstand und Luftfilter immer. Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md). Die unten genannten Einstellungen sind in [Behälter-, Arbeitsstellungs- und Motorsensoren](hopper-position-engine-sensors.md) beschrieben.

## „FAILURE“ — „Emergency oil pressure“ — Öldruck-Notmeldung {#failure-emergency-oil-pressure}

**Was es bedeutet.** Der Sensor für zu niedrigen Öldruck hat ausgelöst.

**Was Sie in dieser Reihenfolge prüfen:**

1. Der Sensor für zu niedrigen Öldruck ist in Ordnung.
2. **„Activation signal“** (Aktivierungssignal) in den Einstellungen des Sensors für zu niedrigen Öldruck.
3. Steht ein Zündungssensor im Profil: Ist seine Überwachung eingeschaltet?
4. Steht ein Zündungssensor im Profil: Ist er in Ordnung?

## „FAILURE“ — „No battery charge“ — Batterie lädt nicht {#failure-no-battery-charge}

**Was es bedeutet.** Die Batterie wird nicht geladen.

**Was Sie in dieser Reihenfolge prüfen:**

1. Der Sensor der Batterieladung ist in Ordnung.
2. **„Activation signal“** in den Einstellungen des Sensors der Batterieladung.
3. Steht ein Zündungssensor im Profil: Ist seine Überwachung eingeschaltet?
4. Steht ein Zündungssensor im Profil: Ist er in Ordnung?

## „FAILURE“ — „Low fuel“ — Kraftstoff niedrig {#failure-low-fuel}

**Was es bedeutet.** Im Tank ist wenig Kraftstoff übrig.

**Was Sie in dieser Reihenfolge prüfen:**

1. Der Kraftstoffstandsensor ist in Ordnung.
2. **„Activation signal“** in den Einstellungen des Kraftstoffstandsensors.
3. **„Signal delay, sec“** (Signalverzögerung, s) in den Einstellungen des Kraftstoffstandsensors. Der Standardwert ist **15 Sekunden**.

## „FAILURE“ — „Air filter“ — Luftfilter {#failure-air-filter}

**Was es bedeutet.** Der Luftfilter ist verstopft.

**Was Sie in dieser Reihenfolge prüfen:**

1. Der Luftfiltersensor ist in Ordnung.
2. **„Activation signal“** in den Einstellungen des Luftfiltersensors.
3. **„Signal delay, sec“** in den Einstellungen des Luftfiltersensors. Der Standardwert ist **5 Sekunden**.

Der Zündungssensor selbst löst nie ein Alarmfenster aus: Ein gelber Schlüssel auf dem Startbildschirm sagt nur, dass die Zündung aus ist ([Anzeigen](indicators.md#engine-sensors)).
