---
title: Begriffe
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/terms.html
---

# Begriffe

Die Wörter, die diese Anleitung für Mengen, Überwachung, Sensoren, Fahrgassen und Geräte verwendet — was jedes am Hectare One bedeutet.

## Mengen und Überwachung {#rates-and-control}

| **Begriff** | **Bedeutung** |
| --- | --- |
| **Sollmenge** | Die Zielintensität, die der Fahrer einstellt. Das Panel vergleicht die tatsächliche Intensität damit und meldet eine zu große Abweichung. |
| **Mengenfehler** | Wie weit die tatsächliche Intensität von der Sollmenge abweichen darf, bevor das zum Alarm wird. Je Sensorgruppe in Prozent eingestellt (**„Mengenfehler, %“**). |
| **Überwachung der Produktausbringung** | Das Panel beurteilt die Aussaat nicht in jedem Augenblick: Es beginnt zu überwachen, sobald die Bedingungen erfüllt sind — das Gerät ist abgesenkt und in Bewegung. Bis dahin ist eine stumme Sektion keine Störung. |
| **Minimale Alarmschwelle** | Die niedrigste Intensität, die noch als normal gilt — die Überwachungslinie des Diagramms. Darunter wird die Sektion gemeldet, was auch immer die Nachbarn tun. Siehe [Das Sektionsdiagramm](section-diagram.md). |
| **Wegintervall** | Die Strecke der Fahrt, über die Fehlstellen, Doppelbelegungen und die übrigen Werte gesammelt werden, bevor sie neu gezeichnet werden. Eingestellt mit **„Neuberechnung, m“**, das das Panel in **„Neuberechnung, Sek“** umbenennt, wenn der Aussaatmodus in Sekunden statt in Metern zählt. |
| **Handsperre** | Das Anhalten der gesamten Produktausbringung von Hand, mit einem langen Druck auf **„HOME“**. Eine gelbe Hand auf dem Startbildschirm zeigt, dass die Sperre eingeschaltet ist. Siehe [Ausbringung von Hand sperren](lock-application-by-hand.md). |
| **Überwachung (eines Sensors)** | Ob das Panel einen Sensor überwacht. Ein Sensor außerhalb der Überwachung wird mit **!** angezeigt und meldet nichts. Siehe [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md). |

## Überwachungsmodi der Aussaat {#seeding-control-modes}

| **Modus** | **Bedeutung** |
| --- | --- |
| **„Einzelkorn“** | Körner je Meter, mit Fehlstellen und Doppelbelegungen — Einzelkornsägeräte. |
| **„Durchfluss“** | Körner je Sekunde gegen eine Alarmschwelle — Drillmaschinen. |
| **„Hybrid“** | Körner je Meter, mit einem Mengenfehler wie bei „Einzelkorn“; die Alarmschwelle lässt sich wie bei „Durchfluss“ automatisch einstellen. |

## Sensoren {#sensors}

| **Begriff** | **Bedeutung** |
| --- | --- |
| **Sektionssensor** | Der gemeinsame Name für einen Korn-, Trockendünger- oder Flüssigdüngersensor. Einer je Sektion des Geräts. |
| **Kornsensor** | Zählt das Saatgut, das eine Sektion durchläuft. An einem **Einzelkornsägerät** trennt er auch **Doppelbelegungen** und **Fehlstellen**; an einer Drillmaschine misst er nur die Intensität — die Körner kommen zu dicht hintereinander, um sie zu unterscheiden. |
| **Trockendüngersensor** | Dasselbe Gerät, das eine Leitung für Granulatdünger überwacht. |
| **Flüssigdüngersensor** | Ein Durchflussmesser, der das Volumen durch eine Sektion zählt. |
| **Geschwindigkeitssensor** | Misst die Fahrgeschwindigkeit. Strecke, Fläche und jede Menge werden daraus berechnet. |
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
| **Fahrgassen-Aktuator** | Das Gerät, das die Sektionen abschaltet. **Ein Aktuator-Controller trägt drei Dinge:** den Aktuator selbst und **beide** Spuranzeigersensoren. |

## Geräte {#devices}

| **Begriff** | **Bedeutung** |
| --- | --- |
| **HUB8** (Eingangsgerät) | Ein achtkanaliger Hub für Sensoren ohne eigenen Controller. Er überwacht sie und meldet jeden dem Panel, als wäre er ein Gerät. |
| **Elektromotor-Controller** | Steuert einen oder zwei Dosiermotoren oder die Flüssigdüngerpumpe. Motoren und Pumpe teilen sich eine Controller-Bauart — deshalb kann eine Maschine keine Pumpe haben, ohne auch den Controller zu haben, den ein Motor benötigt. |
| **SCM** | Section Control Module — die Schnittstelle, über die ein Navigationssystem eines Drittanbieters Sektionen abschalten kann. |
| **microSD** | Die Speicherkarte für Berichte, Profile und Firmware-Updates. Nur **FAT16 oder FAT32**. |
| **Profil** | Die Liste dessen, was die Maschine trägt. Das Panel zeichnet seine Bildschirme danach. Siehe [Profil](profile.md). |

## Zugriffsebenen {#access-levels}

| **Ebene** | **Wofür sie dient** |
| --- | --- |
| **Fahrer** | Die Ebene, auf der das Panel nach jedem Einschalten startet. Alltägliche Arbeit. Nur auf dieser Ebene werden Alarmfenster angezeigt. |
| **Agronom** | Die Einstellungen der Inbetriebnahme und das Zurücksetzen der Statistik. Erfordert eine **PIN**, die für jedes Panel eine andere ist und im Gerätepass steht. |
| **Service** | Das Profil, die Neuvergabe der Adressen von Geräten, die Punkte „Standardwerte“. Wird von der Serviceabteilung genutzt. |

Einzelheiten: [Zugriffsebenen](access-levels.md).
