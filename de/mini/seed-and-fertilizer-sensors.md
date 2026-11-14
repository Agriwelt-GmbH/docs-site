---
title: Korn- und Düngersensoren
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/seed-and-fertilizer-sensors.html
---

# Korn- und Düngersensoren

Die Einstellungen der Kornsensoren und der Düngersensoren des Hectare Mini – Fraktion je Kultur, Korrektur, Fehlergrenzen, Neuberechnungsweg, Anteil säend – und wann das Panel die Aussaat zu überwachen beginnt.

**Die Kornsensoren teilen sich einen Satz Einstellungen**: Ändern Sie ihn an einem beliebigen Kornsensor, und er gilt für alle. Die Düngersensoren teilen sich einen zweiten Satz. Nur **„Produktausbringung“** wird Saatleitung für Saatleitung eingestellt. Öffnen Sie das Kontextmenü eines beliebigen Sensors der Gruppe wie in [Sensoreinstellungen](sensor-settings.md) beschrieben.

![Das Kontextmenü eines Kornsensors.](figures/ctx-seed)

| **Parameter** | **Ebene** | **Was er bewirkt** | **Bereich · Werkseinstellung** |
| --- | --- | --- | --- |
| **„Produktausbringung“** | Agronom | **„Ja“**: Diese Leitung sät und wird überwacht. **„Nein“**: Die Leitung gilt als abgeschaltet, wie eine Leitung in einem Fahrgassen-Durchgang – Saatgut durch sie löst **„Saat in Fahrgasse“** aus. Nicht sichtbar, wenn jede Leitung der Gruppe einen eigenen Motor hat. | **„Nein“** / **„Ja“** |
| **„Empfindl.“** | Agronom | Empfindlichkeit eines Kornsensors älterer Bauart. Nur sichtbar, wenn ein solcher Sensor angeschlossen ist. | 1 … 120 · 80 |
| **„Fraktion“** | Fahrer | Der Zählfilter der Sensoren, eingestellt auf die Korngröße – ein Filter gegen Staub und Spreu. **Ändern Sie sie mit der Kultur** – [Tabelle unten](#fraction-for-the-crop). | 1 … 100 · 10 |
| **„Korrektur“** | Fahrer | Passt die Empfindlichkeit an die Halterung des Sensors an. Ein höherer Wert senkt die Empfindlichkeit und hält Staub und feinen Schmutz aus der Zählung. Nur sichtbar bei der Sensorgeneration, die ihn nutzt. | 100 … 3300 · 300 |
| **„Mengenfehl.%“** | Agronom | Zulässige Abweichung der gemessenen Menge vom Sollwert; darüber **„Unter Sollmenge“** oder **„Über Sollmenge“**. Nur in **„Hybrid“** und **„Einzelkorn“**. | 5 … 95 % · 50 % |
| **„Doppelfehler,%“** | Agronom | Über diesem Anteil an Doppelablagen: **„Hoher % Doppel“**. **„Nein“** schaltet den Alarm aus. Nur in **„Einzelkorn“**. | **„Nein“**, 1 … 95 % · **„Nein“** |
| **„Fehlst.Fehl,%“** | Agronom | Über diesem Anteil an Fehlstellen: **„Hoher % Fehlst.“**. **„Nein“** schaltet den Alarm aus. Nur in **„Einzelkorn“**. | **„Nein“**, 1 … 95 % · **„Nein“** |
| **„Neuberechn.,m“** | Fahrer | Die Strecke, über die Fehlstellen, Doppelablagen und Qualität für das Diagramm und die Aussaattabelle gesammelt werden. Ohne Geschwindigkeitssensor heißt der Punkt **„Neuberechn.,Sek“**, in Sekunden. **„MENU“** darauf lässt das Panel sie berechnen – [Neuberechnungsweg vom Panel berechnen lassen](recalculation-path.md). | 10 … 50 · 20 |
| **„Anteil säend,%“** | Agronom | Der Anteil der Saatleitungen, den das Panel braucht, bevor es die Aussaat zu überwachen beginnt – [unten](#when-the-panel-controls-the-seeding). Nur Kornsensoren; bei Maschinen mit Dosierermotoren nicht sichtbar. | 5 … 80 %, in Schritten von 5 · 20 % |
| **„Zul. Saat in Fahrgasse,%“** | Agronom | Wie viel Saatgut noch durch eine für die Fahrgasse abgeschaltete Leitung laufen darf, in Prozent der Sollmenge, bevor **„Saat in Fahrgasse“** ausgelöst wird. | 0 … 50 % · 20 % |
| **„Startadresse Gruppe“** | Service (Korn), Agronom (Dünger) | Wo die Nummerierung dieser Gruppe im Sensornetz beginnt. Lassen Sie sie auf **„AUTO“**, wenn der Service nichts anderes sagt. | **„AUTO“**, … |

Im Modus **„Durchfluss“** ist eine Leitung nur im Alarm, wenn sie unter der Alarmschwelle bleibt; eine Obergrenze gibt es nicht. Die Sollmengen und Alarmschwellen selbst stellen Sie auf dem Startbildschirm ein – [Sollmenge ändern](set-the-target-rate.md).

## Fraktion je Kultur {#fraction-for-the-crop}

Richten Sie sich nach der Korngröße:

| **Kultur** | **„Fraktion“** |
| --- | --- |
| Raps | 1 – 5 |
| Weizen | 5 – 10 |
| Mais | 10 – 30 |
| Sonnenblume | 10 – 30 |

Stellen Sie bei pneumatischen Drillmaschinen **1** ein, gleich welche Kultur. Eine zu hohe Fraktion lässt kleine Körner aus der Zählung verschwinden – das Panel meldet dann eine zu niedrige Menge.

> **WICHTIG**
>
> **Ändern Sie „Korrektur“ nur nach Rücksprache mit dem Service.** Sie wird nur in seltenen Fällen gebraucht; ein falscher Wert lässt die Sensoren Saatgut übersehen oder Staub zählen.

## Wann das Panel die Aussaat überwacht {#when-the-panel-controls-the-seeding}

Das Panel beginnt die Aussaat zu überwachen – und Saatalarme auszulösen – erst, wenn Saatgut innerhalb der Sollmenge durch mindestens **„Anteil säend,%“** der Saatleitungen fließt und, falls **„Aussaatkriterium“** des Geschwindigkeitssensors **„Ja“** ist, die Maschine fährt ([Fahrgeschwindigkeitssensor](speed-sensor.md)). Bis dahin zeigt das Diagramm **„NICHT ÜBERWACHT“** – siehe [Aussaatalarme](alarms-seeding.md#not-under-control). Bei einem Arbeitsstellungssensor, dessen **„Alarmkriterium“** **„Ja“** ist, wird in der Transportstellung nichts überwacht ([Behälter- und Arbeitsstellungssensoren](hopper-and-work-position-sensors.md)).

## Der Statusbildschirm {#the-status-screen}

Zeigt **Status:** mit dem Zustand des Sensors – **„Betrieb“**, **„Verstopft“**, **„Fremdlicht“** und die übrigen: [Der Sensor-Statusbildschirm](sensor-status-screen.md#states-of-a-seed-or-fertilizer-sensor).
