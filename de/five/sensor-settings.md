---
title: Sensoreinstellungen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/sensor-settings.html
---

# Sensoreinstellungen

Wie Sie per Touch zu den Einstellungen eines Sensors gelangen, was sein Kontextmenü enthält und welche Kalibrierungen es gibt und wo.

Jeder Sensor, Aktuator und Motor der Maschine hat seine eigenen Einstellungen und seinen eigenen Statusbildschirm. Beide erreichen Sie über sein **Kontextmenü**. Die Parameter jeder Sensorart stehen in den Themen nach diesem.

## Einen Sensor erreichen {#reach-a-sensor}

**Berühren und halten Sie das Gerät** länger als eine halbe Sekunde:

- auf dem **Startbildschirm** — sein Symbol oder seine Säule im Diagramm;
- auf dem **Motorbildschirm** oder dem **zweiten Startbildschirm** — die Kachel eines Motors oder eines Fahrgassen-Aktuators.

Das Kontextmenü öffnet sich. Ein kurzes Tippen bewirkt nichts. Berühren und Halten auf einer kg/ha-Anzeige, auf dem Sollwert eines Diagramms oder auf einer leeren Stelle der rechten Spalte bewirkt etwas anderes — siehe [Touchzonen und Gesten](buttons-and-gestures.md).

![Das Kontextmenü eines Gebläsesensors auf der Ebene Agronomist.](figures/five-ctx-fan)

## Das Kontextmenü {#the-context-menu}

| **Punkt** | **Was er tut** | **Ebene** |
| --- | --- | --- |
| **„Information“** (Information) | Öffnet den Statusbildschirm dieses Geräts. [Der Sensor-Statusbildschirm](sensor-status-screen.md) | Operator |
| **„Disable control“** (Überwachung ausschalten) / **„Enable control“** (Überwachung einschalten) | Nimmt das Gerät aus der Überwachung oder wieder hinein. Für den Geschwindigkeitssensor nicht angeboten. [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md) | Operator |
| **„Registers“** (Register) | Eine Rohansicht der Register des Geräts, für die Serviceabteilung. Nicht Teil irgendeines Ablaufs. Bei einem Motor oder dem Pumpencontroller heißt der Punkt **„Electric motors“** (Elektromotoren) und öffnet den Diagnosebildschirm der Controller. | Agronomist |
| Die eigenen Punkte des Geräts | Zum Beispiel **„Speed calibration“** (Geschwindigkeitskalibrierung) beim Geschwindigkeitssensor. | wie angegeben |
| Die Parameter | Welche Sie sehen, hängt von der Zugriffsebene ab. Den gewählten ändern Sie mit einem Wisch nach rechts oder links. | wie angegeben |
| **„Reset to defaults“** (Auf Standard zurücksetzen) | Setzt die Parameter dieses Geräts auf die Werkswerte zurück. | Service |

Tippen Sie neben das Menü, um es zu verlassen. Geänderte Werte werden von selbst gespeichert.

## Der Statusbildschirm {#the-status-screen}

**„Information“** öffnet den Statusbildschirm des Geräts: seine Identität, seine Verbindung, seine aktuellen Werte und seine aktiven Alarme. Wie Sie ihn lesen: [Der Sensor-Statusbildschirm](sensor-status-screen.md).

## Kalibrierungen {#calibrations}

Es gibt vier Kalibrierungen. Sie sind keine Varianten eines Ablaufs: Jede schreibt andere Parameter und wird auf anderem Weg erreicht.

| **Was sie richtigstellt** | **Wo** | **Ebene** | **Maschine** |
| --- | --- | --- | --- |
| Fahrgeschwindigkeit — überschreibt **„Factor, %“** (Faktor, %) des Geschwindigkeitssensors. [Geschwindigkeitssensor kalibrieren](calibrate-speed.md) | **„Settings“** (Einstellungen) → **„Seeding machine parameters“** (Sämaschinen-Parameter) → **„Speed calibration“**, oder **„Speed calibration“** im Kontextmenü des Geschwindigkeitssensors | Agronomist im Menü, Operator im Kontextmenü | fährt 100 m |
| Dosierer-Drehung — **„Wheel, pulses“** (Rad, Impulse) gegen **„Dispenser pulses“** (Dosiererimpulse). [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md) | **„Settings“** → **„Seeding machine parameters“** → **„Dispenser calibration“** (Dosiererkalibrierung) | Agronomist | Rad und Dosierwelle werden gemeinsam gedreht |
| Dosierer-Masse — **„Weight, gr“** (Gewicht, g) und **„Weight, pulses“** (Gewicht, Impulse). [Dosierer nach Gewicht kalibrieren](calibrate-dispenser-weight.md) | Kontextmenü des Dosierersensors | Operator | steht |
| Masse der Dosierwalze — **„Weight, gr“** und **„Rotations“** (Umdrehungen) eines Motors. [Dosierermotor nach Gewicht kalibrieren](calibrate-motor-weight.md) | Kontextmenü des Dosierer-Elektromotors | Operator | steht |

Die Punkte **„Speed calibration“** im Kontextmenü und die Motorkalibrierung werden nur angeboten, solange die Maschine steht. Die beiden Massekalibrierungen liegen auf der Ebene **„Operator“**, weil sie bei jedem Produktwechsel wiederholt werden müssen.
