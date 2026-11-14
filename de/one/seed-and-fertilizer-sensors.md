---
title: Kornsensoren und Trockendüngersensoren
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/seed-and-fertilizer-sensors.html
---

# Kornsensoren und Trockendüngersensoren

Die Parameter, die eine Gruppe optischer Korn- oder Trockendüngersensoren gemeinsam hat – Sollmengen, Fraktion, Empfindlichkeit, Mengenfehler, Fehlstellen und Doppel, Fahrgassentoleranz.

Kornsensoren und Trockendüngersensoren sind dieselbe Geräteart und teilen sich einen Parametersatz. **Fast alles hier gilt für die ganze Gruppe**: Ändern Sie es an einem Sensor, ändert es sich für alle Sensoren der Gruppe. Nur zwei Dinge werden je Sensor eingestellt – ob er **unter Überwachung** steht (**„Überwachung aus“** / **„Überwachung ein“**) und **„Produktausbringung“**. Öffnen Sie das Kontextmenü eines beliebigen Sensors der Gruppe wie in [Sensoreinstellungen](sensor-settings.md).

![Das Kontextmenü eines Kornsensors, oberer Teil.](figures/ctx-seed)

| Parameter | Was er bewirkt | Bereich | Ebene |
| --- | --- | --- | --- |
| **„Durchfluss“** | Die Menge für den Modus **„Durchfluss“**, in Körnern pro Sekunde. Darunter löst die Sektion den Alarm für zu geringe Menge aus. | 1 … 1500 | Fahrer |
| **„Hybridmenge“** | Der Sollwert im Modus **„Hybrid“**. | 1 … 200 | Fahrer |
| **„Einzelkornmenge x10“** | Der Sollwert im Modus **„Einzelkorn“**, in Zehnteln. | 5 … 500 | Fahrer |
| **„Empfindlichkeit“** | Die Empfindlichkeit von Sensoren einer älteren Generation; das Panel sendet sie an diese Sensoren. Nur sichtbar, wenn ein solcher Sensor angeschlossen ist. | 1 … 120 | Agronom |
| **„Fraktion“** | Der Zählfilter der Sensoren, eingestellt auf die Größe von Korn oder Granulat; das Panel sendet ihn an alle Sensoren der Gruppe. Die Mengen-, Fehlstellen- und Doppelalarme sagen Ihnen, in welche Richtung Sie ihn ändern. | 1 … 100 | Fahrer |
| **„Korrektur“** | Eine Feineinstellung der Kornerkennung für die Sensorgeneration, die sie nutzt; das Panel sendet sie nur an diese Sensoren, und der Punkt erscheint nur, wenn ein solcher Sensor angeschlossen ist. Standardwert 300. | 100 … 3300, Schritte von 10 | Fahrer |
| **„Mengenfehler, %“** | Wie weit die tatsächliche Menge vom Sollwert abweichen darf, bevor ein Alarm ausgelöst wird. | 5 … 95, Schritte von 5 | Agronom |
| **„Doppelfehler,%“** | Der Anteil an Doppeln, der einen Alarm auslöst. **Nur im Modus „Einzelkorn“.** | 0 … 95 | Agronom |
| **„Fehlstellenfehler, %“** | Der Anteil an Fehlstellen, der einen Alarm auslöst. **Nur im Modus „Einzelkorn“.** | 0 … 95 | Agronom |
| **„Neuberechnung, m“** / **„Neuberechnung, Sek“** | Die Strecke, über die Fehlstellen und Doppel gezählt werden – in Metern oder in Sekunden, je nach Modus. | 10 … 50 | Fahrer |
| **„Anteil säend,%“** | Der Anteil der überwachten Saatreihen, die säen müssen, bevor das Panel die Maschine als säend betrachtet; bis dahin lösen die Korn- und Trockendüngersensoren keinen Mengen-, Fehlstellen-, Doppel- oder Fahrgassenalarm aus. Nur Kornsensoren; an Maschinen mit Dosiermotoren oder einem Pumpencontroller für Flüssigdünger ausgeblendet. | 5 … 80, Schritte von 5 | Agronom |
| **„Zulässige Saat in Fahrgasse,%“** | Wie viel eine Sektion, die für die Fahrgasse abgeschaltet sein sollte, noch ausbringen darf. | 0 … 50 | Agronom |
| **„Startadresse Gruppe“** | Wird bei der Inbetriebnahme eingestellt – siehe [Gerätekonfiguration](device-configuration.md). | | Service |

> **TIPP**
>
> **„Fraktion“ ist die erste Einstellung, die Sie prüfen, wenn die Mengenalarme nicht zur Wirklichkeit passen.** Die meisten Alarme zu Menge, Fehlstellen und Doppeln nennen sie samt der Richtung, in die Sie sie ändern: [Mengenalarme](alarms-rate.md), [Doppel und Fehlstellen](alarms-seeding-quality.md), [Fahrgassenalarme](alarms-tramline.md).

Die Sollmengen selbst ändern Sie während der Arbeit auf dem Startbildschirm – siehe [Sollmenge ändern](set-the-target-rate.md). Der Statusbildschirm dieser Sensoren zeigt einen von acht Zuständen – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor). Meldet ein Sensor **„Verstopft“**, **„Fremdlicht“** oder **„Defekt“**: [Sensor verstopft oder defekt](alarms-sensor-state.md).
