---
title: Geschwindigkeitssensor
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/speed-sensor.html
---

# Geschwindigkeitssensor

Die Parameter des Fahrgeschwindigkeitssensors — Impulse, Raddurchmesser, Faktor, Geschwindigkeitsgrenzen, Simulation, der eingebaute GPS-Empfänger — und was das Einstellen der Simulation von selbst bewirkt.

Alles, was das Panel zählt — Fläche, Mengen, Abweichungen —, wird aus der zurückgelegten Strecke berechnet. **Ein Geschwindigkeitssensor, der um ein Zehntel danebenliegt, macht jeden anderen Wert des Panels um ein Zehntel falsch.** Stellen Sie zuerst seine Parameter ein und kalibrieren Sie ihn dann ([Geschwindigkeitssensor kalibrieren](calibrate-speed.md)).

Berühren und halten Sie das Geschwindigkeitsfeld auf dem Startbildschirm, um das Kontextmenü des Geschwindigkeitssensors zu öffnen ([Sensoreinstellungen](sensor-settings.md)). Alle seine Parameter brauchen die Ebene **„Agronomist“** (Agronom) ([Agronomenebene freischalten](enable-agronomist-level.md)). Das Menü bietet außerdem **„Speed calibration“** (Geschwindigkeitskalibrierung) direkt unter **„Information“** (Information) an, solange die Maschine steht.

![Das Kontextmenü des Geschwindigkeitssensors auf der Ebene Agronomist. Eine ausgeschaltete Grenze steht als „No“.](figures/five-ctx-speed-sensor)

| **Parameter** | **Was er tut** | **Bereich, Standard** |
| --- | --- | --- |
| **„Pulses“** (Impulse) | Die Anzahl der Impulse, die der Sensor je Raddrehung gibt. | 1 … 1000; 6 |
| **„Count period“** (Zählperiode) | Die Anzahl der Impulse, über die das Panel mittelt, bevor es die Geschwindigkeit neu berechnet; eine plötzliche Geschwindigkeitsänderung wird sofort übernommen. Verborgen, wenn der Sensor an einem Eingangsgerät sitzt. | 1 … 1000; 1 |
| **„Diameter, cm“** (Durchmesser, cm) | Der Raddurchmesser. | 10 … 200; 60 |
| **„Factor, %“** (Faktor, %) | Eine Korrektur der Strecke je Raddrehung: Das Panel zählt den Radumfang mal diesen Faktor. 100 nimmt den Umfang, wie er ist. **Die Geschwindigkeitskalibrierung überschreibt ihn.** Zahlenfeld. | 1 … 10000; 100 |
| **„Seeding criteria“** (Aussaatkriterium) | **„Yes“** (Ja) — die Sektionsalarme werden nur überwacht, solange die Maschine fährt; **„No“** (Nein) — auch im Stand. Verborgen und immer **„Yes“** im Modus **„Precise“** (Einzelkorn) und an einer Maschine mit Dosierermotoren oder Pumpe. | **„No“** / **„Yes“**; **„Yes“** |
| **„Min speed, km/h“** (Mindestgeschwindigkeit, km/h) | Unterhalb dieser Geschwindigkeit zeigt der Startbildschirm **„FASTER“** (schneller). **„No“** (0) schaltet die Prüfung aus. | 0 … 99; **„No“** |
| **„Max speed, km/h“** (Höchstgeschwindigkeit, km/h) | Oberhalb dieser Geschwindigkeit zeigt der Startbildschirm **„SLOWER“** (langsamer). **„No“** (0) schaltet die Prüfung aus. | 0 … 99; **„No“** |
| **„Imitation, km/h“** (Simulation, km/h) | Eine simulierte Geschwindigkeit. **„No“** (0) — der echte Sensor wird verwendet. | **0 … 20**; **„No“** |
| **„GPS“** | Die Geschwindigkeit von einem externen Empfänger nehmen. Wird nur angezeigt, wenn einer verwendet wird. | **„No“** / **„Yes“** |
| **„Width, cm“** (Breite, cm) | Die Spurweite zwischen den zwei Rädern einer Anlage mit zwei Sensoren. Wird nur angezeigt, wenn im Profil **„Input device (2)“** (Eingangsgerät, zwei Sensoren) steht. | 0 … 10000; 280 |
| **„GPS internal“** (internes GPS) | Die Geschwindigkeit vom im Panel eingebauten Empfänger nehmen. | **„No“** / **„Yes“**; **„No“** |

Das Minimum muss unter dem Maximum liegen, sonst löst das Panel **„Error in settings of Min/Max“** (Fehler in den Einstellungen von Min/Max) aus ([Alarme des Geschwindigkeitssensors](alarms-speed-sensor.md)). Ist **„GPS internal“** eingeschaltet, zeigt das Satellitensymbol auf dem Startbildschirm den Empfang, und weniger als vier Satelliten lösen **„Poor GPS signal quality“** (Schlechte GPS-Signalqualität) aus — siehe [GPS](gps.md).

> **WICHTIG**
>
> **Wird „Imitation, km/h“ auf etwas anderes als null gestellt, ändern sich von selbst zwei andere Dinge.** Das Panel schaltet **„Min speed, km/h“** und **„Max speed, km/h“** aus — gegen eine simulierte Geschwindigkeit bedeuten sie nichts — und teilt das in einem Fenster mit. Und es **sperrt die Produktausbringung**, damit im Stand nichts dosiert wird. Die Sperre ist die gelbe Hand auf dem Startbildschirm; um sie aufzuheben, berühren und halten Sie eine leere Stelle der rechten Spalte ([Ausbringung von Hand sperren](lock-application-by-hand.md)).

Die simulierte Geschwindigkeit wird außerdem **innerhalb des Bereichs gehalten, den die Dosierung zulässt**: Ein Wert außerhalb wird beim Einstellen auf die nächste Grenze zurückgezogen. Solange die Geschwindigkeit simuliert wird, zeigt der Statusbildschirm des Sensors **„IMITATION“** in Gelb. Arbeiten ohne Geschwindigkeitssensor: [Ohne Geschwindigkeitssensor arbeiten](work-without-speed-sensor.md).

## Der Statusbildschirm {#the-status-screen}

Der Statusbildschirm zeigt die Impulsfrequenz **F=** in Hz (bei zwei Sensoren **F1=** und **F2=**) und die beiden geltenden Grenzen. Siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#what-each-kind-of-sensor-adds).
