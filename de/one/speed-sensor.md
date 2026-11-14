---
title: Fahrgeschwindigkeitssensor
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/speed-sensor.html
---

# Fahrgeschwindigkeitssensor

Die Parameter des Fahrgeschwindigkeitssensors – Impulse, Raddurchmesser, Geschwindigkeitsgrenzen, Simulation – und was die Einstellung der Simulation von selbst bewirkt.

Alles, was das Panel zählt – Fläche, Mengen, Abweichungen – wird aus der zurückgelegten Strecke berechnet. **Ein Geschwindigkeitssensor, der um ein Zehntel danebenliegt, macht jede andere Zahl auf dem Panel um ein Zehntel falsch.** Stellen Sie zuerst seine Parameter ein und kalibrieren Sie ihn dann ([Geschwindigkeitssensor kalibrieren](calibrate-speed.md)).

Öffnen Sie das Kontextmenü des Geschwindigkeitssensors wie in [Sensoreinstellungen](sensor-settings.md) beschrieben. Alle seine Parameter erfordern die Ebene **„Agronom“** ([Agronomen-Ebene aktivieren](enable-agronomist-level.md)).

![Das Kontextmenü des Geschwindigkeitssensors. Eine abgeschaltete Grenze steht auf „Nein“.](figures/ctx-speed)

Das Kontextmenü bietet direkt unter **„Information“** auch **„Geschwindigkeitskalibrierung“** an.

| Parameter | Was er bewirkt | Bereich |
| --- | --- | --- |
| **„Impulse“** | Die Impulszahl des Sensors. Stellen Sie sie vor der Kalibrierung ein, die sie korrigiert. | 1 … 1000 |
| **„Zählperiode“** | Über wie viele Impulse des Sensors das Panel die Fahrgeschwindigkeit mittelt; ein höherer Wert ergibt eine ruhigere Anzeige. Wirkt nur bei einem Geschwindigkeitssensor, der direkt am Panel angeschlossen ist. | 1 … 1000 |
| **„Durchmesser, cm“** | Der Raddurchmesser. Stellen Sie ihn vor der Kalibrierung ein. | 10 … 200 |
| **„Faktor, %“** | Das Übersetzungsverhältnis zum Rad; 100 ist ein direkter 1 : 1-Antrieb. | 1 … 10000 |
| **„Aussaatkriterium“** | **„Ja“**: Die Alarme der Korn-, Trockendünger- und Flüssigdüngersektionen werden nur ausgelöst, während die Maschine fährt. **„Nein“**: auch im Stand. Im Modus **„Einzelkorn“** und an Maschinen mit Dosiermotoren oder einem Pumpencontroller für Flüssigdünger ausgeblendet und immer **„Ja“**. | **„Nein“** / **„Ja“** |
| **„Min. Geschwindigkeit, km/h“** | Unterhalb dieser Geschwindigkeit zeigt der Startbildschirm **„SCHNELLER“**. **0 schaltet die Prüfung aus.** | 0 … 99 |
| **„Max. Geschwindigkeit, km/h“** | Oberhalb dieser Geschwindigkeit zeigt der Startbildschirm **„LANGSAMER“**. **0 schaltet die Prüfung aus.** | 0 … 99 |
| **„Simulation,km/h“** | Eine simulierte Geschwindigkeit. **0** = der echte Sensor wird verwendet. | **0 … 20** |
| **„Breite, cm“** | Die Spurweite zwischen den beiden Rädern bei einer Installation mit zwei Sensoren. | 0 … 10000 |
| **„GPS“**, **„GPS internal“** | Die Geschwindigkeit von einem Empfänger statt vom Rad beziehen. | **„Nein“** / **„Ja“** |

Das Minimum muss unter dem Maximum liegen, sonst löst das Panel **„Fehler in Min/Max-Einstellungen“** aus ([Alarme des Geschwindigkeitssensors](alarms-speed-sensor.md)).

> **WICHTIG**
>
> **Wird „Simulation,km/h“ auf einen Wert ungleich null gesetzt, ändert das von selbst zwei weitere Dinge.** Das Panel setzt **„Min. Geschwindigkeit, km/h“** und **„Max. Geschwindigkeit, km/h“** auf null – gegenüber einer simulierten Geschwindigkeit sind sie bedeutungslos – und **sperrt die Produktausbringung**, sodass nichts dosiert wird, solange die Maschine steht. Die Sperre ist das Handsymbol auf dem Startbildschirm; halten Sie **„HOME“** gedrückt, um sie aufzuheben ([Produktausbringung von Hand sperren](lock-application-by-hand.md)).

Die simulierte Geschwindigkeit wird außerdem **innerhalb des Bereichs gehalten, den die Dosierung zulässt**: Ein Wert außerhalb wird bei der Eingabe auf die nächste Grenze zurückgesetzt. Solange die Geschwindigkeit simuliert wird, zeigt der Statusbildschirm des Sensors **„SIMULIERT“** in Gelb. Arbeiten ohne Geschwindigkeitssensor: [Arbeiten ohne Geschwindigkeitssensor](work-without-speed-sensor.md).

## Der Statusbildschirm {#the-status-screen}

Der Statusbildschirm zeigt die Impulsfrequenz **F=** in Hz (bei zwei Sensoren **F1=** und **F2=**) und die beiden geltenden Grenzen. Siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#what-each-kind-of-sensor-adds).

![Der Statusbildschirm eines am Panel angeschlossenen Geschwindigkeitssensors.](figures/status-speed)
