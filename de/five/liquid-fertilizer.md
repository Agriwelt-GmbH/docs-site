---
title: Flüssigdüngersensoren und Pumpencontroller
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/liquid-fertilizer.html
---

# Flüssigdüngersensoren und Pumpencontroller

Die Parameter der Flüssigdünger-Sektionssensoren und des Flüssigdünger-Pumpencontrollers mit Bereichen und Standardwerten.

Flüssigdünger wird von Durchflusssensoren in den Sektionen überwacht; an manchen Maschinen steuert zusätzlich ein Pumpencontroller die Pumpe auf die Menge. Berühren und halten Sie das Flüssigdüngerdiagramm oder die Pumpenanzeige, um das Kontextmenü zu öffnen ([Sensoreinstellungen](sensor-settings.md)).

## Flüssigdünger-Sektionssensoren {#liquid-fertilizer-section-sensors}

| **Parameter** | **Was er tut** | **Bereich, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Pulses per liter“** (Impulse je Liter) | Wie viele Impulse der Durchflusssensor je Liter gibt. Zahlenfeld. Verborgen, wenn im Profil ein Pumpencontroller steht. | 1 … 60000; 5000 | Agronomist |
| **„Rate error,%“** (Mengenfehler, %) | Wie weit die tatsächliche Menge von der Sollmenge abweichen darf, bevor ein Alarm kommt. | 5 … 95, Schritte von 5; 50 | Agronomist |
| **„Tolerable leak to tramline,%“** (Zulässiger Austritt zur Fahrgasse, %) | Wie viel eine für die Fahrgasse abgeschaltete Sektion noch ausbringen darf. | 0 … 50; 20 | Agronomist |
| **„Group start address“** (Startadresse der Gruppe) | Siehe [Gerätekonfiguration](device-configuration.md). | — | Agronomist |

Die beiden Sollmengen dieser Sensoren — eine für den Modus **„Flow“** (Durchfluss), eine für den Modus **„By area“** (nach Fläche) — haben **keinen Menüpunkt**. Sie werden auf dem Startbildschirm eingestellt wie jede andere Sollmenge ([Sollmenge ändern](set-the-target-rate.md)). Zum Modus selbst: [Sämaschinen-Parameter](seeding-machine-parameters.md#liquid-fertilizer-mode).

## Flüssigdünger-Pumpencontroller {#liquid-fertilizer-pump-controller}

| **Parameter** | **Was er tut** | **Bereich, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Pulses per liter“** | Die Impulse der Durchflussmessung der Pumpe je Liter; das Panel berechnet daraus das gepumpte Volumen. Zahlenfeld. | 100 … 10000, Schritte von 10; 3000 | Agronomist |
| **„Pressure sensor“** (Drucksensor) | Der Eingang des Controllers, an dem der 4–20-mA-Drucksensor der Leitung angeschlossen ist; **„No“** (Nein) — keiner. | **„No“**, 1, 2; **„No“** | Agronomist |
| **„Pressure boundary, Bar“** (Druckgrenze, bar) | Der Druck, den der Sensor am oberen Ende seines Bereichs (20 mA) meldet. Stellen Sie ihn nach dem Datenblatt des Sensors ein. | 0,0 … 50,0; 16,0 | Agronomist |
| **„Max pressure, Bar“** (Höchstdruck, bar) | Darüber löst der Controller **„High pressure“** (Hoher Druck) aus. 0,0 schaltet den Alarm aus. | 0,0 … 50,0; 0,0 | Operator |
| **„Section control D.I.“** (Sektionssteuerung, digitaler Eingang) | Ein Eingang des Controllers, der die Pumpe abschaltet: **„Shut off(0)“** (Abschalten bei 0), wenn der Eingang 0 liest, **„Shut off(1)“**, wenn er 1 liest; **„No“** — nicht verwendet. | **„No“** / **„Shut off(0)“** / **„Shut off(1)“** | Agronomist |
| **„Start delay,mS“** (Startverzögerung, ms) | Die kürzeste Zeit in Millisekunden zwischen zwei Starts der Pumpe. | 0 … 500, Schritte von 5; 30 | Service |
| **„Group start address“** | Siehe [Gerätekonfiguration](device-configuration.md). | — | Agronomist |

Die beiden Druckwerte werden mit einer Nachkommastelle eingegeben. Mit einem Pumpencontroller wird die Flüssigmenge immer nach Fläche geregelt.

Der Statusbildschirm des Pumpencontrollers zeigt den Durchfluss, die Pumpenlast und den Leitungsdruck — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#what-each-kind-of-sensor-adds). Alarme: [Flüssigdüngerpumpe](alarms-pump-controller.md), [Mengenalarme](alarms-rate.md).
