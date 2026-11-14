---
title: Fahrgeschwindigkeitssensor
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/speed-sensor.html
---

# Fahrgeschwindigkeitssensor

Alle Parameter des Fahrgeschwindigkeitssensors des Hectare Mini – Impulse, Zählperiode, Raddurchmesser, Faktor, Aussaatkriterium, Geschwindigkeitsgrenzen, Simulation – mit Bereich und Werkseinstellung.

Fläche, Mengen, Fehlstellen und Doppelablagen werden alle aus der zurückgelegten Strecke berechnet. **Ein Geschwindigkeitssensor, der um ein Zehntel danebenliegt, macht jede Zahl auf dem Panel um ein Zehntel falsch.** Stellen Sie **„Impulse“** und **„Durchm., cm“** ein und kalibrieren Sie dann ([Geschwindigkeitssensor kalibrieren](calibrate-speed.md)) – die Kalibrierung stellt **„Faktor, %“** ein. Der Geschwindigkeitssensor kann nicht aus der Überwachung genommen werden.

Öffnen Sie sein Kontextmenü wie in [Sensoreinstellungen](sensor-settings.md) beschrieben. Seine Parameter erfordern die Ebene **„Agronom“** ([Agronomen-Ebene aktivieren](enable-agronomist-level.md)).

![Das Kontextmenü des Geschwindigkeitssensors.](figures/ctx-speed)

**„Geschw.-Kalibrierung“**, direkt unter **„Information“**, wird nur angezeigt, solange die Maschine steht. Auf der Ebene **„Fahrer“** verlangt sie die PIN einer höheren Ebene.

| **Parameter** | **Was er bewirkt** | **Bereich · Werkseinstellung** |
| --- | --- | --- |
| **„Impulse“** | Impulse des Sensors je Umdrehung der Welle, auf der er sitzt. | 1 … 1000 · 6 |
| **„Zählperiode“** | Über wie viele der letzten Impulsabstände das Panel die Geschwindigkeit mittelt. Das Panel nimmt immer mindestens 8 und höchstens 16, keinen älter als zwei Sekunden: Ein höherer Wert ergibt eine ruhigere, aber trägere Anzeige, Werte unter 8 wirken wie 8. Nur sichtbar bei einem am Panel angeschlossenen Sensor. | 1 … 1000 · 1 |
| **„Durchm., cm“** | Durchmesser des Antriebsrads. | 10 … 200 · 60 |
| **„Faktor, %“** | Übersetzungsverhältnis zwischen Rad und Sensorwelle, für einen Sensor auf einer Zwischenwelle oder auf der Dosierwelle, die über Zahnräder oder Kette angetrieben wird. 100 ist ein direkter 1 : 1-Antrieb. Überlassen Sie ihn am besten der Kalibrierung. | 1 … 10000 · 100 |
| **„Aussaatkriterium“** | **„Ja“**: Die Fahrt ist Teil der Bedingung, unter der das Panel die Aussaat zu überwachen beginnt – siehe [Wann das Panel die Aussaat überwacht](seed-and-fertilizer-sensors.md#when-the-panel-controls-the-seeding). **„Nein“**: Die Fahrgeschwindigkeit bleibt aus dieser Bedingung heraus – für Drillmaschinen, deren Geschwindigkeitssensor vor der Kupplung sitzt. Im Modus **„Einzelkorn“** und bei Maschinen mit Dosierermotoren ausgeblendet und immer **„Ja“**. | **„Nein“** / **„Ja“** · **„Ja“** |
| **„Min Geschw., km/h“** | Unterhalb dieser Geschwindigkeit zeigt die Geschwindigkeitsanzeige, solange das Panel überwacht, **„SCHNELLER“**. **„Nein“** schaltet die Prüfung aus. | **„Nein“**, 1 … 99 · **„Nein“** |
| **„Max Geschw., km/h“** | Oberhalb dieser Geschwindigkeit zeigt die Geschwindigkeitsanzeige, solange das Panel überwacht, **„LANGSAMER“**. **„Nein“** schaltet die Prüfung aus. | **„Nein“**, 1 … 99 · **„Nein“** |
| **„Simulation,km/h“** | Eine simulierte Geschwindigkeit, um mit einem defekten Sensor weiterzuarbeiten. **„Nein“** = der Sensor wird verwendet. | **„Nein“**, 1 … 20 · **„Nein“** |
| **„Breite, cm“** | Abstand zwischen den Mitten der beiden Räder. Nur sichtbar mit **„Eingangsmodul(2)“** im Profil. | 0 … 10000 · 280 |

Das Minimum muss unter dem Maximum bleiben: Ein Wert, der die andere Grenze erreichen würde, wird nicht angenommen. Bei einer Maschine mit Dosierermotoren werden die geltenden Grenzen außerdem auf die Geschwindigkeiten eingeengt, die die Motoren dosieren können; lässt sich eine Grenze nicht einhalten, löst das Panel **„Fehler in Min/Max-Einstell.“** aus ([Alarme des Geschwindigkeitssensors](alarms-speed-sensor.md)).

## Den Faktor berechnen {#working-out-the-factor}

Wenn Sie nicht kalibrieren, lässt sich der Faktor berechnen: **k = Na / Nt × 100 %**. Na ist das Produkt der Zähnezahlen aller getriebenen Zahnräder (der geradzahligen), Nt das Produkt der Zähnezahlen aller treibenden Zahnräder (der ungeradzahligen), gezählt ab dem Zahnrad auf der Welle des Antriebsrads.

Hat der Traktor einen Tacho und das Panel zeigt eine andere Geschwindigkeit: **K<sub>neu</sub> = K<sub>aktuell</sub> × V<sub>Traktor</sub> / V<sub>Panel</sub>**.

## Simulation {#imitation}

> **WICHTIG**
>
> **Das Einstellen von „Simulation,km/h“ schaltet die Geschwindigkeitsgrenzen aus.** **„Min Geschw., km/h“** und **„Max Geschw., km/h“** gehen auf **„Nein“**, und das Panel meldet **„Einstellungen für Min/Max-Geschwindigkeit sind ausgeschaltet!“**. Bei einer Maschine mit Dosierermotoren **sperrt es außerdem die Produktausbringung**: Es wird nichts dosiert, bis Sie die Sperre durch Halten von **„HOME“** aufheben ([Produktausbringung von Hand sperren](lock-application-by-hand.md)).

Mit Motoren wird die simulierte Geschwindigkeit zudem innerhalb des Bereichs gehalten, den die Dosierung zulässt: Ein Wert außerhalb wird auf die nächste Grenze gezogen. Solange die Geschwindigkeit simuliert wird, steht in der Verbindungszeile des Statusbildschirms **„SIMULATION“** in Gelb, und die Geschwindigkeitsanzeige zeigt das Simulationszeichen.

Die Geschwindigkeit kann auch vom eingebauten GPS-Empfänger kommen. Der wird im Profil eingeschaltet, Punkt **„GPS“**, nicht hier – [Das Profil](profile.md), [GPS-Empfang](gps-receiver.md).

## Der Statusbildschirm {#the-status-screen}

Er zeigt die Impulsfrequenz **F=** in Hz und die beiden geltenden Grenzen – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md).

![Der Statusbildschirm eines am Panel angeschlossenen Geschwindigkeitssensors.](figures/status-speed)
