---
title: Traktormotor: Öldruck, Batterieladung, Kraftstoff, Luftfilter
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-tractor.html
---

# Traktormotor: Öldruck, Batterieladung, Kraftstoff, Luftfilter

Was zu tun ist, wenn einer der Bordsensoren des Motors – Öldruck, Batterieladung, Kraftstoffstand, Luftfilter – Alarm auslöst.

Alle Bordsensoren des Motors teilen sich einen Alarmtext: **„ALARM“**. **Der Name des Sensors über dem Text sagt Ihnen, welcher ausgelöst hat.** Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md). Die unten genannten Einstellungen sind in [Behälter-, Arbeitsstellungs- und Motorsensoren](hopper-position-engine-sensors.md) beschrieben.

## „Öldruck-Störung“ – „ALARM“ {#emergency-oil-pressure-failure}

**Was es bedeutet.** Der Sensor für niedrigen Öldruck hat ausgelöst.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Sensor für niedrigen Öldruck ist betriebsbereit.
2. **„Aktivierungssignal“** in den Einstellungen des Sensors für niedrigen Öldruck.
3. Steht ein Zündschlüsselsensor im Profil: Ist seine Überwachung eingeschaltet?
4. Steht ein Zündschlüsselsensor im Profil: Ist er betriebsbereit?

## „Batterie lädt nicht“ – „ALARM“ {#no-battery-charge-failure}

**Was es bedeutet.** Die Batterie wird nicht geladen.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Sensor für die Batterieladung ist betriebsbereit.
2. **„Aktivierungssignal“** in den Einstellungen des Sensors für die Batterieladung.
3. Steht ein Zündschlüsselsensor im Profil: Ist seine Überwachung eingeschaltet?
4. Steht ein Zündschlüsselsensor im Profil: Ist er betriebsbereit?

## „Wenig Kraftstoff“ – „ALARM“ {#low-fuel-failure}

**Was es bedeutet.** Im Tank ist nur noch wenig Kraftstoff.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Kraftstoffstandssensor ist betriebsbereit.
2. **„Aktivierungssignal“** in den Einstellungen des Kraftstoffstandssensors.
3. **„Signalverzögerung, Sek“** in den Einstellungen des Kraftstoffstandssensors. Der Standardwert beträgt **15 Sekunden**.

## „Luftfilter“ – „ALARM“ {#air-filter-failure}

**Was es bedeutet.** Der Luftfilter ist verstopft.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Luftfiltersensor ist betriebsbereit.
2. **„Aktivierungssignal“** in den Einstellungen des Luftfiltersensors.
3. **„Signalverzögerung, Sek“** in den Einstellungen des Luftfiltersensors. Der Standardwert beträgt **5 Sekunden**.
