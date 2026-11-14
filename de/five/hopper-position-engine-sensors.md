---
title: Behälter-, Arbeitsstellungs- und Motorsensoren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/hopper-position-engine-sensors.html
---

# Behälter-, Arbeitsstellungs- und Motorsensoren

Die Einstellungen der Zweizustandssensoren — Behälterfüllstand, Arbeitsstellung des Geräts und die fünf Sensoren des Gebläseantriebsmotors.

Diese Sensoren melden einen von zwei Zuständen und sonst nichts. Berühren und halten Sie das Symbol eines beliebigen von ihnen auf dem Startbildschirm, um sein Kontextmenü zu öffnen ([Sensoreinstellungen](sensor-settings.md)). Ihr Statusbildschirm zeigt **Pin:** und den Pegel am Eingang, **"0"** oder **"1"**.

## Behältersensor {#hopper-sensor}

Der Behältersensor hat **keine eigenen Parameter** — sein Kontextmenü enthält nur die gemeinsamen Punkte.

Alarm: [Behälter leer](alarms-hopper.md).

## Arbeitsstellungssensor {#work-position-sensor}

Der Arbeitsstellungssensor sagt dem Panel, ob das Gerät zur Arbeit abgesenkt oder für den Transport angehoben ist. Der Statusbildschirm zeigt **„Position: Working“** (Position: Arbeit) oder **„Position: Transporting“** (Position: Transport).

| **Parameter** | **Was er tut** | **Werte, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Transporting position signal“** (Signal der Transportstellung) | Welcher Zustand des Eingangs die Transportstellung bedeutet. | 0 / 1; 0 | Agronomist |
| **„Alarms criteria“** (Alarmkriterium) | **„Yes“** (Ja) — solange das Gerät angehoben ist, werden die Sektionsalarme nicht überwacht. **„No“** (Nein) — die Stellung wirkt sich nicht auf die Alarme aus. Verborgen und immer **„Yes“** an einer Maschine mit Dosierermotoren oder Pumpe. | **„No“** / **„Yes“**; **„Yes“** | Agronomist |

An einer Maschine ohne Spuranzeiger, die Fahrgassen anlegt, beendet das Anheben des Geräts einen Durchgang — siehe [Fahrgassenrhythmus einstellen](tramline-rhythm.md#how-the-bout-changes).

## Motorsensoren {#engine-sensors}

**„No battery charge“** (Batterie lädt nicht), **„Emergency oil pressure“** (Öldruck-Notmeldung), **„Ignition“** (Zündung), **„Low fuel“** (Kraftstoff niedrig) und **„Air filter“** (Luftfilter) sind fünf getrennte Eingänge, die im Profil jeweils für sich eingeschaltet werden ([Das Profil](profile.md)).

![Das Kontextmenü des Öldrucksensors.](figures/five-ctx-oil-pressure)

| **Parameter** | **Was er tut** | **Bereich, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Activation signal“** (Aktivierungssignal) | Welcher Zustand des Eingangs der meldenswerte ist. | 0 / 1; 1 | Agronomist |
| **„Signal delay, sec“** (Signalverzögerung, s) | Wie lange dieser Zustand anliegen muss, bevor er zählt. | 1 … 30; **15 s** für den Kraftstoffstand, **5 s** für den Luftfilter, **1 s** für die übrigen | Agronomist |

Öldruck und Batterieladung werden nur überwacht, solange die Zündung eingeschaltet ist; Kraftstoffstand und Luftfilter immer. Alarme: [Alarme des Traktormotors](alarms-tractor.md).
