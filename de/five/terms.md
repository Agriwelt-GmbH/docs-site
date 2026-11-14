---
title: Begriffe
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/terms.html
---

# Begriffe

Die Wörter, die diese Anleitung für Gesten, Mengen, Überwachung, Sensoren, Fahrgassen und Geräte verwendet — was jedes am Hectare 5 bedeutet.

## Gesten {#gestures}

| **Begriff** | **Bedeutung** |
| --- | --- |
| **Tippen** | Ein Finger, sofort aufsetzen und abheben. |
| **Berühren und Halten** | Ein Finger länger als eine halbe Sekunde an einer Stelle. |
| **Langes Wischen** | Ein Strich eines Fingers über mehr als ein Drittel des Bildschirms. Er wechselt zwischen den Arbeitsbildschirmen. |
| **Zweifingertippen** | Ein Tippen mit zwei Fingern gleichzeitig. Auf dem Startbildschirm öffnet es das Hauptmenü. |

Alle Gesten: [Touchzonen und Gesten](buttons-and-gestures.md).

## Mengen und Überwachung {#rates-and-control}

| **Begriff** | **Bedeutung** |
| --- | --- |
| **Sollmenge** | Die Zielintensität, die der Fahrer einstellt. Das Panel vergleicht die tatsächliche Intensität damit und meldet eine zu große Abweichung. |
| **Mengenfehler** | Wie weit die tatsächliche Intensität von der Sollmenge abweichen darf, bevor das zum Alarm wird. Je Sensorgruppe in Prozent eingestellt (**„Rate error,%“** (Mengenfehler, %)). Für Produkte nach Masse und die Pumpe heißt die Einstellung **„Product rate error,%“** (Mengenfehler Produkt, %). |
| **Überwachung der Produktausbringung** | Das Panel beurteilt die Aussaat nicht in jedem Augenblick: Es beginnt zu überwachen, sobald die Bedingungen erfüllt sind — das Gerät ist abgesenkt und in Bewegung. Bis dahin ist eine stumme Sektion keine Störung. |
| **Alarmschwelle** | Im Modus „Flow“ die niedrigste Intensität, die noch als normal gilt — die Überwachungslinie des Diagramms. Darunter wird die Sektion gemeldet, was auch immer die Nachbarn tun. Siehe [Das Sektionsdiagramm](section-diagram.md). |
| **Wegintervall** | Die Strecke der Fahrt, über die Fehlstellen, Doppelbelegungen und die übrigen Werte gesammelt werden, bevor sie neu gezeichnet werden. Eingestellt mit **„Recalculation,m“** (Neuberechnung, m), das das Panel in **„Recalculation,sec“** umbenennt, wenn der Aussaatmodus in Sekunden statt in Metern zählt. |
| **Anteil säender Reihen** | Der Anteil der Reihen, die säen müssen, damit das Panel entscheidet, dass die Maschine sät — **„Percent of sowing,%“** (Anteil säender Reihen, %), standardmäßig 20 %. |
| **Handsperre** | Das Anhalten der gesamten Produktausbringung von Hand, mit Berühren und Halten einer leeren Stelle der rechten Spalte des Startbildschirms. Eine gelbe Hand zeigt, dass die Sperre eingeschaltet ist. Siehe [Ausbringung von Hand sperren](lock-application-by-hand.md). |
| **Überwachung (eines Sensors)** | Ob das Panel einen Sensor überwacht. Ein Sensor außerhalb der Überwachung wird mit **!** angezeigt und meldet nichts. Siehe [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md). |
| **Simulation** | Eine simulierte Fahrgeschwindigkeit, im Geschwindigkeitssensor eingestellt, genutzt, wenn der Geschwindigkeitssensor ausgefallen ist. Siehe [Ohne Geschwindigkeitssensor arbeiten](work-without-speed-sensor.md). |

## Überwachungsmodi der Aussaat {#seeding-control-modes}

| **Modus** | **Bedeutung** |
| --- | --- |
| **„Precise“** (Einzelkorn) | Körner je Meter, mit Fehlstellen und Doppelbelegungen — Einzelkornsägeräte. |
| **„Flow“** (Durchfluss) | Körner je Sekunde gegen eine Alarmschwelle — Drillmaschinen. |
| **„Hybrid“** (Hybrid) | Körner je Meter, mit einem Mengenfehler wie bei „Precise“; die Alarmschwelle lässt sich wie bei „Flow“ automatisch einstellen. |

## Sensoren {#sensors}

| **Begriff** | **Bedeutung** |
| --- | --- |
| **Sektionssensor** | Der gemeinsame Name für einen Korn-, Trockendünger- oder Flüssigdüngersensor. Einer je Sektion des Geräts. |
| **Kornsensor** | Zählt das Saatgut, das eine Sektion durchläuft. An einem **Einzelkornsägerät** trennt er auch **Doppelbelegungen** und **Fehlstellen**; an einer Drillmaschine misst er nur die Intensität — die Körner kommen zu dicht hintereinander, um sie zu unterscheiden. |
| **Trockendüngersensor** | Dasselbe Gerät, das eine Leitung für Granulatdünger überwacht. |
| **Flüssigdüngersensor** | Ein Durchflussmesser, der das Volumen durch eine Sektion zählt. |
| **Geschwindigkeitssensor** | Misst die Fahrgeschwindigkeit. Strecke, Fläche und jede Menge werden daraus berechnet. Am Hectare 5 kann die Geschwindigkeit auch vom eingebauten GPS-Empfänger kommen. |
| **Dosierersensor** | Überwacht, dass sich die Dosierwelle dreht. |
| **Gebläsesensor** | Überwacht die Gebläsedrehzahl gegen ein eingestelltes Minimum und Maximum. |
| **Drucksensor** | Überwacht Überdruck oder Unterdruck, je nachdem, wie er angeschlossen ist. |
| **Behältersensor** | Meldet, wenn das Produkt unter die Stelle gefallen ist, an der der Sensor sitzt. |
| **Arbeitsstellungssensor** | Sagt dem Panel, ob das Gerät in die Arbeit abgesenkt oder für den Transport angehoben ist. |
| **Spuranzeigersensoren** | Melden, welcher mechanische Spuranzeiger unten ist, damit der Fahrgassen-Durchgang von selbst weiterspringen kann. |

## Fahrgasse {#tramline}

| **Begriff** | **Bedeutung** |
| --- | --- |
| **Fahrgasse** | Eine ungesäte Fahrspur, angelegt durch Abschalten einer oder mehrerer Sektionen in gewählten Durchgängen. |
| **Rhythmus** | Die sich wiederholende Folge von Durchgängen, in der die Durchgänge markiert sind, in denen bestimmte Sektionen nicht säen dürfen. Siehe [Fahrgassenrhythmus einstellen](tramline-rhythm.md). |
| **Durchgang** | Eine Fahrt des Geräts über das Feld. Der Rhythmus zählt sie und kehrt zum ersten zurück, wenn sie aufgebraucht sind. |
| **Fahrgassen-Aktuator** | Das Gerät, das die Sektionen abschaltet. Eine Maschine kann bis zu vier haben. |

## Geräte {#devices}

| **Begriff** | **Bedeutung** |
| --- | --- |
| **HUB8** (Eingangsgerät; in den Menüs **„Concentrator-8“**) | Ein achtkanaliger Hub für Sensoren ohne eigenen Controller. Er überwacht sie und meldet jeden dem Panel, als wäre er ein Gerät. |
| **Elektromotor-Controller** | Steuert einen oder zwei Dosierermotoren oder die Flüssigdüngerpumpe. |
| **microSD** | Die Speicherkarte für Berichte. |
| **Profil** | Die Liste dessen, was die Maschine trägt. Das Panel zeichnet seine Bildschirme danach. Siehe [Profil](profile.md). |

## Zugriffsebenen {#access-levels}

| **Ebene** | **Wofür sie dient** |
| --- | --- |
| **„Operator“** (Fahrer) | Die Ebene, auf der das Panel nach jedem Einschalten startet. Alltägliche Arbeit. Nur auf dieser Ebene werden Alarmfenster angezeigt. |
| **„Agronomist“** (Agronom) | Die Einstellungen der Inbetriebnahme, das Maschinenprofil und die Adresseinrichtung der Geräte. Erfordert eine **PIN**. |
| **„Service“** (Service) | Die Rücksetzeinträge und die Service-Einstellungen. Wird von der Serviceabteilung genutzt; erfordert eine eigene PIN. |

Die Ebene wird unter **„Settings“** (Einstellungen) → **„User“** (Benutzer) gewählt. Einzelheiten: [Zugriffsebenen](access-levels.md).
