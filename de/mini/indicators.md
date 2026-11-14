---
title: Anzeigen des Startbildschirms und ihre Zustände
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/indicators.html
---

# Anzeigen des Startbildschirms und ihre Zustände

Jede Anzeige des Startbildschirms am Hectare Mini in jedem Zustand — Geschwindigkeit, Behälter, Dosierwelle, Gebläse, Druck, Motorsensoren, Gerätestellung, Spuranzeiger, Fahrgasse, Uhr, Fläche, Aussaatdichte und Produktmengen.

Lesen Sie die Anzeigen an der Farbe. In der Firmware 2.2.8 wird ein Gerät in Ordnung **grau** gezeichnet; **Rot**, meist blinkend, ist ein Alarm; **Gelb** ist ein Zustand, den Sie kennen sollten, aber keine Störung. Drei Zustände sind für jeden Sensor gleich:

| **Was Sie sehen** | **Bedeutung** | **Was zu tun ist** |
| --- | --- | --- |
| ![](figures/icons/no-connection.png){height=32px} Ein rotes Kreuz, blinkend, oder **XXXX** anstelle des Wertes | Keine Verbindung zum Sensor. | Prüfen Sie sein Kabel und die Steckverbinder. |
| Ein rotes Fragezeichen, blinkend, oder **????** anstelle des Wertes | An dieser Stelle antwortet ein Gerät anderer Art. | Lassen Sie die Konfiguration vom Service prüfen. |
| Ein graues Zeichen für den Zustand nicht überwacht, blinkend, oder **!!!!** anstelle des Wertes | Der Sensor ist aus der Überwachung genommen. Er wird nicht überwacht. | [Nehmen Sie ihn wieder in die Überwachung](sensor-in-and-out-of-control.md), wenn die Störung behoben ist. |

## Geschwindigkeit {#speed}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| ![](figures/icons/speed-ok.png){height=32px} | Die Fahrgeschwindigkeit in km/h. |
| ![](figures/icons/speed-high.png){height=32px} im Wechsel mit ![](figures/icons/speed-slower.png){height=32px} | Schneller als zulässig. Die rote Zahl wechselt mit **„LANGSAMER“**. |
| ![](figures/icons/speed-low.png){height=32px} im Wechsel mit ![](figures/icons/speed-faster.png){height=32px} | Langsamer als zulässig. Die rote Zahl wechselt mit **„SCHNELLER“**. |
| Rote Zahl im Wechsel mit **„Sensor“** 1 oder 2 oder mit **„Einstell.“** | Einer der beiden Radsensoren ist ausgefallen, oder die Geschwindigkeitsgrenzen sind falsch eingestellt. |
| ![](figures/icons/speed-lost.png){height=32px} | Keine Verbindung zum Geschwindigkeitssensor. |
| ![](figures/icons/speed-sim-value.png){height=32px} im Wechsel mit ![](figures/icons/speed-simulation.png){height=32px} | Die Geschwindigkeitssimulation ist eingeschaltet: Die Zahl ist gelb und wechselt mit **„SIMULATION“**. Außerhalb der Grenzen mit **SIMULATION ERHÖHEN** oder **SIMULATION SENKEN**. |

Die Geschwindigkeit wird nur dann gegen ihre Grenzen überwacht, wenn diese Überwachung in den [Einstellungen des Geschwindigkeitssensors](speed-sensor.md) eingeschaltet ist. Wo die Geschwindigkeit vom GPS kommt: [GPS-Empfang](gps-receiver.md).

## Behälter {#hopper}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| Grau | Produkt über dem Sensor. |
| ![](figures/icons/hopper-empty.png){height=32px} rot, blinkend | Der Behälter ist leer. |

## Dosierwelle {#dispenser-shaft}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| Grau; dreht sich, solange sich die Welle dreht | In Ordnung. |
| ![](figures/icons/dispenser-alarm.png){height=32px} rot, blinkend | Die Welle dreht sich nicht oder nicht mit der geforderten Drehzahl. |

## Gebläse {#fan}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| Grau, mit der Drehzahl in U/min | In Ordnung. |
| Rot, blinkend, mit der Drehzahl | Die Gebläsedrehzahl liegt außerhalb ihrer Grenzen. |

## Druck {#pressure}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| Grau, mit dem Druck in kPa | In Ordnung. |
| ![](figures/icons/pressure-alarm.png){height=32px} rot | Der Druck am Gebläseausgang liegt außerhalb seiner Grenzen. |

## Motorsensoren {#engine-sensors}

Die Sensoren eines eigenen Gebläseantriebsmotors. Öldruck und Batterieladung werden nur bei eingeschalteter Zündung überwacht.

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| ![](figures/icons/oil-alarm.png){height=32px} rot | Niedriger Öldruck. |
| ![](figures/icons/battery-alarm.png){height=32px} rot | Die Batterie wird nicht geladen. |
| ![](figures/icons/fuel-alarm.png){height=32px} rot | Wenig Kraftstoff im Tank. |
| ![](figures/icons/airfilter-alarm.png){height=32px} rot | Der Luftfilter ist verstopft. |
| Schlüssel grau / ![](figures/icons/ignition-off.png){height=32px} Schlüssel gelb | Zündung ein / Zündung aus. |

In Ordnung ist jedes dieser Symbole grau.

## Gerätestellung {#implement-position}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| Grau | Die Drillmaschine ist in Arbeitsstellung. |
| ![](figures/icons/workpos-transport.png){height=32px} gelb, blinkend | Die Drillmaschine ist in Transportstellung. |

## Spuranzeiger {#markers}

Graue Arme zeigen, welcher Spuranzeiger unten und welcher oben ist. Sind zwei Spuranzeigersensoren vorhanden, bedeuten beide Arme **gelb**: beide Spuranzeiger sind oben.

## Fahrgassen-Durchgang {#tramline-bout}

Reifenspuren mit dem aktuellen Durchgang oben und der Zahl der Durchgänge darunter — siehe [Nächster Fahrgassen-Durchgang](next-tramline-bout.md).

## Uhr {#clock}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| Weiße Uhrzeit | Die Uhrzeit. |
| Rote Uhrzeit, mit einem roten **BAT** für einen Moment alle vier Sekunden | Die Uhrenbatterie muss ersetzt werden. |
| Rotes **XX:XX**, blinkend | Die Uhr ist defekt. |
| Gelbes **IMITAT** | Das Panel läuft in einem Simulationsmodus — siehe [Zu dieser Anleitung und ihren Bildern](about-the-pictures.md). |
| Blaue Stunden:Minuten und **DEMO** | Ein Testzeitraum ist aktiv: die verbleibende Zeit. Sie erscheint alle 30 Sekunden und verdeckt für einen Moment die Symbole von Behälter und Welle. |

## Fläche {#area}

Auf dem aktiven Feld bearbeitete Hektar — nur mit Geschwindigkeitssensor angezeigt und nur dort, wo der Bildschirm Platz hat.

## Aussaatdichte {#population}

Im Modus **„Einzelkorn“**: Tausend Körner je Hektar, gemittelt über die überwachten Kornsensoren, die antworten. Stehen Saatgut und Dünger beide auf **„Einzelkorn“**, erscheinen zwei Anzeigen, gekennzeichnet mit **A** (Saatgut) und **B** (Dünger); die Fläche wird dann meist nicht angezeigt.

## Produktmenge {#product-rate}

Eine Anzeige je nach Masse ausgebrachtem Produkt, mit der Produktnummer, in kg/ha. Rot und blinkend: Die Menge weicht um mehr als **„Produktmenge Fehler,%“** ab. Solange sie innerhalb der Toleranz liegt, zeigt das Panel den **Soll**wert.

## Die Spalte rechts {#the-column-on-the-right}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| Motorsymbol, gelb, blinkend | Die Produktausbringung ist von Hand gesperrt — siehe [Ausbringung von Hand sperren](lock-application-by-hand.md). |
| Aktuatorsymbol, rot, blinkend | Ein Dosiermotor oder ein Fahrgassen-Aktuator ist im Alarm — siehe den [Bildschirm Motoren](motors-screen.md). |
| Aktuatorsymbol im Wechsel mit dem Zeichen für den Zustand nicht überwacht | Ein Motor oder ein Aktuator ist aus der Überwachung genommen. |
| Produktsymbol, rot, blinkend | Die eingestellten Mengen lassen sich bei keiner Geschwindigkeit ausbringen — siehe [Motor nach Masse kalibrieren](calibrate-motor-weight.md). |
