---
title: Die Kacheln unten
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/bottom-tiles.html
---

# Die Kacheln unten

Der Kachelstreifen unter den Reihen und dem Feldbild — was jede Kachel zeigt, was ein Tippen öffnet, wie Sie wählen, was ein Platz zeigt, und der Alarmplatz rechts.

Unter **„Reihen“** und unter **„Feld“** steht ein Streifen aus Kacheln. Jede Kachel zeigt einen Wert: oben ein Wort, den Wert in großen Ziffern, die Einheit und ein Symbol in einem Ring. Die Farbe des Rings ist der Zustand: grün — normal, rot — Alarm (der Ring blinkt), gelb — Achtung, grau — keine Daten oder keine Antwort.

Der Streifen ist da, wenn die Maschine etwas darin zu zeigen hat: eine Saatgruppe im Modus Hybrid oder Einzelkorn oder Geräte am HUB-8. Eine Maschine im Modus Durchfluss ohne Geräte hat keinen Streifen.

## Was die Kacheln zeigen können {#what-the-tiles-can-show}

| Kachel | Was sie zeigt | Ein Tippen öffnet |
| --- | --- | --- |
| **„Geschw.“** | Die Fahrgeschwindigkeit in km/h vom GNSS des iPad | Das Geschwindigkeitsblatt: die Geschwindigkeit und woher sie kommt |
| **„Fläche“** | Hektar des aktiven Schlags | **„Statistik“** |
| **„Dichte“** | Tausend Körner je Hektar (Einzelkorn) | Das Mengenblatt |
| **„Saatmenge“** | Die eingestellte Sollmenge in Körnern je Meter | Das Mengenblatt |
| **„Betriebszeit“** | Stunden und Minuten Arbeit auf dem aktiven Schlag | **„Statistik“** |
| **„Feld“** | Die Nummer des aktiven Schlags | **„Statistik“** |
| **„Durchgang“** | Der Fahrgassen-Durchgang, zum Beispiel *2 / 4* | Das Durchgangsmenü. [Fahrgasse](tramline.md) |
| Ein Gerät — **„Behälter“**, **„Gebläse“**, **„Dosierer“**, **„Stellung“**, **„Durchflussmesser“** … | Sein Zustand in einem Wort (**„Voll“** / **„Leer“**, **„Läuft“** / **„Steht“**, **„Arbeit“** / **„Transport“**) oder sein Wert (U/min, l/min) | Die Seite dieses Geräts. [HUB-8-Eingänge](hub8-inputs.md) |

## Wählen, was ein Platz zeigt {#choose-what-a-place-shows}

Der Streifen hat so viele Plätze, wie quer über den Bildschirm passen: 3 auf einem hochgehaltenen iPhone, bis zu 8 auf einem quer gehaltenen iPad.

::: steps
1. Halten Sie eine Kachel eine halbe Sekunde lang gedrückt. Darunter öffnet sich die Liste **„Wert wählen“**: jeder Wert, den die Maschine zeigen kann, mit seinem Symbol und seinem aktuellen Wert; der an diesem Platz ist markiert.

2. Tippen Sie auf den gewünschten Wert. Ist er schon an einem anderen Platz, tauschen die beiden.
:::

Die Auswahl wird für das Maschinenprofil gespeichert. **„Standardbelegung“** unter **„Einstellungen“** › **„Maschine“** stellt Geschwindigkeit, Fläche, Dichte und die ersten Geräte wieder her.

## Der Alarmplatz {#the-alarm-place}

Der Platz ganz rechts ist zugleich der Alarmplatz. Geht ein Gerät in Alarm, das an keinem Platz des Streifens steht, steht seine Kachel dort mit blinkendem Ring, bis der Alarm vorbei ist; ein Tippen öffnet seine Seite. Solange sie dort steht, öffnet langes Drücken keine Auswahl — der Alarm wird nicht durch eine Auswahl verdeckt.

## Das Mengenblatt {#the-rate-sheet}

Das Mengenblatt zeigt die Sollmenge in Körnern je Meter in großen Ziffern und darunter die Dichte in Tausend Körnern je Hektar. Ändern Sie sie mit **−** / **+** (gedrückt halten für Zehnerschritte) oder tippen Sie auf eine Zahl und geben Sie sie ein. Nichts erreicht das Gateway, bevor Sie **„Übernehmen“** drücken; Wischen des Blattes nach unten lässt die Sollmenge unverändert.

> **SIEHE AUCH**
>
> [Der Reihenbildschirm](rows-screen.md) · [Feld](field-screen.md)
