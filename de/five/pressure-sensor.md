---
title: Drucksensor
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/pressure-sensor.html
---

# Drucksensor

Die Parameter des Luftdrucksensors — der Glättungsfilter und das zulässige Druckband — mit Bereichen, Standardwerten und dem Zeitpunkt, zu dem das Band überwacht wird.

Der Drucksensor misst den Überdruck oder den Unterdruck des Luftsystems. Berühren und halten Sie das Drucksymbol auf dem Startbildschirm, um sein Kontextmenü zu öffnen ([Sensoreinstellungen](sensor-settings.md)).

| **Parameter** | **Was er tut** | **Bereich, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Filter“** (Filter) | Wie stark der Sensor seinen Messwert glättet. | 1 … 16; 1 | Agronomist |
| **„Minimum, Pa“** (Minimum, Pa) | Die untere Grenze des zulässigen Bandes. **„No“** (Nein; 0) schaltet die Prüfung auf zu niedrigen Druck aus. | 0 … 10000, Schritte von 100; **„No“** | Operator |
| **„Maximum, Pa“** (Maximum, Pa) | Die obere Grenze des zulässigen Bandes. **„No“** (0) schaltet die Prüfung auf zu hohen Druck aus. | 0 … 10000, Schritte von 100; **„No“** | Operator |

Das Band wird nur überwacht, solange die Maschine sät oder mit dem Gerät in Arbeitsstellung fährt. Beide Grenzen gelten für den Betrag des Über- oder Unterdrucks, welcher es auch ist. Die Grenzen werden in Pascal eingestellt; der Startbildschirm und der Statusbildschirm zeigen den Druck **P=** in Kilopascal (1 kPa = 1000 Pa).

Alarme: [Luftdruck](alarms-pressure.md). Einem neuen Drucksensor seine Adresse geben: [Drucksensor konfigurieren](configure-pressure-sensor.md).
