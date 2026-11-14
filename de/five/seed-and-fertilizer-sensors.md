---
title: Kornsensoren und Trockendüngersensoren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/seed-and-fertilizer-sensors.html
---

# Kornsensoren und Trockendüngersensoren

Die gemeinsamen Parameter einer Gruppe optischer Korn- oder Trockendüngersensoren — Fraktion, Empfindlichkeit, Mengenfehler, Fehlstellen und Doppelbelegungen, Anteil säender Reihen, Fahrgassentoleranz — und der Schalter für die Produktausbringung je Sensor.

Kornsensoren und Trockendüngersensoren sind dieselbe Geräteart und teilen sich einen Parametersatz. **Fast alles hier gilt für die ganze Gruppe**: Ändern Sie es an einem Sensor, ändert es sich für alle Sensoren der Gruppe. Nur zwei Dinge werden je Sensor eingestellt — ob er **unter Überwachung** steht (**„Disable control“** (Überwachung ausschalten) / **„Enable control“** (Überwachung einschalten)) und **„Product application“** (Produktausbringung). Berühren und halten Sie die Säule eines beliebigen Sensors der Gruppe, um sein Kontextmenü zu öffnen ([Sensoreinstellungen](sensor-settings.md)).

![Das Kontextmenü eines Kornsensors, oberer Teil.](figures/five-ctx-seed)

| **Parameter** | **Was er tut** | **Bereich, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Product application“** (Produktausbringung) | **Je Sensor.** **„No“** (Nein) — die Reihe bringt absichtlich nichts aus, und das Panel überwacht sie wie eine abgeschaltete Fahrgassenreihe. Wird nicht angeboten, wenn jeder Sensor der Gruppe seinen eigenen Dosierermotor hat. | **„No“** / **„Yes“** (Ja) | Agronomist |
| **„Sensitivity“** (Empfindlichkeit) | Die Empfindlichkeit des optischen Kanals. Wird nur für die Sensortypen angezeigt, die sie verwenden. | 1 … 120; 80 | Agronomist |
| **„Fraction“** (Fraktion) | Der Filter des Sensors für die Größe der Produktpartikel. Die Alarme zu Menge, Fehlstellen und Doppelbelegungen sagen Ihnen, in welche Richtung Sie ihn ändern. | 1 … 100; 10 | Operator |
| **„Correction“** (Korrektur) | Eine Korrektur des Erfassungsfensters des optischen Kanals. Wird nur für den Sensortyp angezeigt, der sie verwendet. | 100 … 3300, Schritte von 10; 300 | Operator |
| **„Rate error,%“** (Mengenfehler, %) | Wie weit die tatsächliche Menge von der Sollmenge abweichen darf, bevor ein Alarm kommt. Nur Modi **„Hybrid“** (Hybrid) und **„Precise“** (Einzelkorn). | 5 … 95, Schritte von 5; 50 | Agronomist |
| **„Doubles error,%“** (Fehler Doppelbelegungen, %) | Der Anteil an Doppelbelegungen, der einen Alarm auslöst. **„No“** (0) schaltet den Alarm aus. **Nur im Modus „Precise“.** | 0 … 95; **„No“** | Agronomist |
| **„Skips error,%“** (Fehler Fehlstellen, %) | Der Anteil an Fehlstellen, der einen Alarm auslöst. **„No“** (0) schaltet den Alarm aus. **Nur im Modus „Precise“.** | 0 … 95; **„No“** | Agronomist |
| **„Recalculation,m“** (Neuberechnung, m) / **„Recalculation,sec“** (Neuberechnung, s) | Das Wegstück, über das Fehlstellen und Doppelbelegungen gezählt werden — in Metern an einer Maschine mit Geschwindigkeitssensor, in Sekunden ohne einen. | 10 … 50; 20 | Operator |
| **„Percent of sowing,%“** (Anteil säender Reihen, %) | Der Anteil der überwachten Kornsensoren, die Saatgut sehen müssen, bevor das Panel entscheidet, dass die Aussaat begonnen hat. Nur Kornsensoren; verborgen an einer Maschine mit Dosierermotoren oder Pumpe. | 5 … 80, Schritte von 5; 20 | Agronomist |
| **„Toler.sowing to tramline,%“** (Toleranz Aussaat zur Fahrgasse, %) | Wie viel eine Sektion, die für die Fahrgasse abgeschaltet sein sollte, noch ausbringen darf. | 0 … 50; 20 | Agronomist |
| **„Group start address“** (Startadresse der Gruppe) | Nur Düngersensoren. Wird bei der Inbetriebnahme eingestellt — siehe [Gerätekonfiguration](device-configuration.md). | — | Agronomist |

> **TIPP**
>
> **„Fraction“ ist die erste Einstellung, die Sie prüfen, wenn die Mengenalarme nicht zur Wirklichkeit passen.** Die meisten Alarme zu Menge, Fehlstellen und Doppelbelegungen nennen sie mit der Richtung, in die sie zu ändern ist: [Mengenalarme](alarms-rate.md), [Doppelbelegungen und Fehlstellen](alarms-seeding-quality.md), [Fahrgassenalarme](alarms-tramline.md).

Die Sollmengen und die Alarmschwelle sind keine Menüpunkte: Sie werden während der Arbeit auf dem Startbildschirm geändert — siehe [Sollmenge ändern](set-the-target-rate.md). Der Statusbildschirm dieser Sensoren zeigt einen von acht Zuständen — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor). Meldet ein Sensor **„Clogged“** (verstopft), **„Light struck“** (Lichteinfall) oder **„Broken“** (defekt): [Sensor verstopft oder defekt](alarms-sensor-state.md).
