---
title: Motoralarme: Öldruck, Batterieladung, Kraftstoff, Luftfilter
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-engine.html
---

# Motoralarme: Öldruck, Batterieladung, Kraftstoff, Luftfilter

Was zu tun ist, wenn ein Sensor des separaten Gebläsemotors des Hectare Mini niedrigen Öldruck, fehlende Batterieladung, wenig Kraftstoff oder einen verschmutzten Luftfilter meldet.

Die Sensoren eines separaten Gebläsemotors lösen alle denselben Alarmtext aus, **„ALARM“**. **Die Gerätezeile nennt den Sensor** – diese Zeile schlagen Sie hier nach. Die Einstellungen dieser Sensoren: [Motorsensoren des Gebläseantriebs](engine-sensors.md).

Der Zündungssensor löst keinen Alarm aus. Er hält die Alarme für Öldruck und Batterieladung ruhig, solange die Zündung aus ist.

## „Öldruck-Störung“ {#emergency-oil-pressure}

**Was es bedeutet.** Der Sensor für niedrigen Öldruck des Motors hat ausgelöst – bei eingeschalteter Zündung, wenn es einen Zündungssensor gibt.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Stellen Sie den Motor ab und prüfen Sie Ölstand und Öldruck.
2. Der Öldrucksensor ist in Ordnung.
3. **„Aktivier.-Signal“** des Öldrucksensors: Vergleichen Sie **Pin:** auf seinem Statusbildschirm mit dem tatsächlichen Zustand.
4. Kommt der Alarm bei abgestelltem Motor: Ist der Zündungssensor im Profil und wird er überwacht? Ist er in Ordnung?

## „Batt. lädt nicht“ {#no-battery-charge}

**Was es bedeutet.** Die Batterie wird vom Motor nicht geladen – bei eingeschalteter Zündung, wenn es einen Zündungssensor gibt.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Lichtmaschine, ihr Riemen und der Ladestromkreis des Motors.
2. Der Batterieladesensor ist in Ordnung.
3. **„Aktivier.-Signal“** des Batterieladesensors.
4. Kommt der Alarm bei abgestelltem Motor: Ist der Zündungssensor im Profil und wird er überwacht? Ist er in Ordnung?

## „Wenig Kr.“ {#low-fuel}

**Was es bedeutet.** Im Tank des Motors ist wenig Kraftstoff.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Tanken Sie.
2. Der Kraftstoffstandsensor ist in Ordnung.
3. **„Aktivier.-Signal“** des Kraftstoffstandsensors.
4. **„Signalverz., Sek“** – schwappender Kraftstoff im Tank auf unebenem Boden kann ihn auslösen; die Werkseinstellung ist 15 Sekunden.

## „Luftfilter“ {#air-filter}

**Was es bedeutet.** Der Luftfilter des Motors ist verschmutzt.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Reinigen oder ersetzen Sie den Luftfilter.
2. Der Luftfiltersensor ist in Ordnung.
3. **„Aktivier.-Signal“** des Luftfiltersensors.
4. **„Signalverz., Sek“** – die Werkseinstellung ist 5 Sekunden.
