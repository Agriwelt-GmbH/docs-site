---
title: Der Startbildschirm
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/home-screen.html
---

# Der Startbildschirm

Was jeder Teil des Startbildschirms ist — Geschwindigkeit, Anzeigen, Fläche, Mengen, die Sektionsdiagramme — an einer stehenden Drillmaschine und an einem Einzelkornsägerät bei der Arbeit.

Der Startbildschirm ist der wichtigste Arbeitsbildschirm. Er zeigt die Diagramme der Sektionssensoren, die Zustandsanzeigen der Geräte und die wichtigsten Kennzahlen der Arbeit. Was er zeigt, folgt dem [Profil](profile.md): Jede dort eingetragene Gruppe von Sensoren und Geräten bekommt ihre Kacheln, ihre Säulen, ihr Mengenfeld.

## Eine Drillmaschine mit Saatgut und Dünger {#a-grain-drill-with-seed-and-fertilizer}

::: {.anatomy fig="one-home-m1"}
1. **Fahrgeschwindigkeit.** In km/h. Meldungen zur Geschwindigkeit ersetzen die Zahl. [Geschwindigkeit](indicators.md#speed)
2. **Behälter.** Ein Symbol je Behältersensor, nummeriert. Rot — der Füllstand liegt unter dem Sensor. [Behälter](indicators.md#hopper)
3. **Dosiereinheiten.** Drehung der Dosierwellen; das Symbol dreht sich, solange sich die Welle dreht. [Dosiereinheit](indicators.md#metering-unit)
4. **Motorsensoren.** Öldruck, Batterieladung und Zündung des Gebläse-Antriebsmotors. [Motorsensoren](indicators.md#engine-sensors)
5. **Uhr.** Die Uhrzeit; das Feld trägt auch Meldungen. [Uhr](indicators.md#clock)
6. **Speicherkarte.** Wird angezeigt, solange eine microSD-Karte im Steckplatz steckt. [Speicherkarte](indicators.md#memory-card)
7. **Gebläse.** Das Gebläsesymbol und seine Drehzahl in U/min. [Gebläse](indicators.md#fan)
8. **Spuranzeiger.** Welcher Spuranzeiger-Arm abgesenkt ist. [Spuranzeiger](indicators.md#markers)
9. **Fahrgassen-Durchgang.** Der aktuelle Durchgang über der Zahl der Durchgänge im Rhythmus. [Fahrgassen-Durchgang](indicators.md#tramline-bout)
10. **Fläche.** Bearbeitete Hektar auf dem aktiven Feld. [Fläche](indicators.md#area)
11. **Produktmenge nach Masse.** Die Menge von Produkt 1 in kg/ha. [Produktmenge nach Masse](indicators.md#product-rate-by-weight)
12. **Saatdiagramm.** Eine Säule je Kornsensor; die weiße Linie ist die Überwachungslinie. [Das Sektionsdiagramm](section-diagram.md)
13. **Sektionsnummern.** Die Nummer jeder Sektion unter ihrer Säule.
14. **Mengenfeld.** Oben die gemessene Menge, darunter der Sollwert, hier in Körnern je Sekunde. [Sollmenge ändern](set-the-target-rate.md)
15. **Gerätestellung.** Hier ein rotes × — der Arbeitsstellungssensor antwortet nicht. [Gerätestellung](indicators.md#implement-position)
16. **Düngerdiagramm.** Die Sektionen 25 bis 36 mit eigenem Mengenfeld in Düngereinheiten je Sekunde.
17. **Aktuatorstörung.** Mindestens ein Motor oder Fahrgassen-Aktuator befindet sich im Alarmzustand. [Aktuatorstörung](indicators.md#actuator-failure)

Eine Drillmaschine mit 24 Saatreihen und 12 Düngerreihen, am Prüfstand im Stillstand: Sollmengen eingestellt, Istmengen null.
:::

## Ein Einzelkornsägerät bei der Arbeit {#a-planter-at-work}

::: {.anatomy fig="one-home-precise-at-work"}
1. **Fahrgeschwindigkeit.** Hier gelb, weil sie am Prüfstand simuliert wird. [Geschwindigkeit](indicators.md#speed)
2. **Behälter.** Grün — Produkt über dem Sensor.
3. **Druck.** Unterdruck oder Überdruck in kPa. [Druck](indicators.md#pressure)
4. **Fläche.** Bearbeitete Hektar auf dem aktiven Feld.
5. **Aussaatmenge.** Die tatsächliche Aussaatmenge in Tausend Körnern je Hektar. [Aussaatmenge](indicators.md#population)
6. **Speicherkarte.**
7. **Sektionssäule.** Grün — die Reihe sät innerhalb ihrer Toleranz. [Säulenfarben](section-states.md#column-colours)
8. **Fehlstellenbalken.** Gelbe Schraffur links an einer Säule: der Anteil der Fehlstellen in dieser Reihe.
9. **Doppelbelegungsbalken.** Blaue Schraffur rechts an einer Säule: der Anteil der Doppelbelegungen.
10. **Solllinie.** Die Sollmenge über alle Reihen.
11. **Toleranzmarken.** Obere und untere Grenze der zulässigen Abweichung in jeder Säule.
12. **Mengenfeld.** Oben die gemessenen Körner je Meter, darunter der Sollwert.
13. **Gerätestellung.** Grün — abgesenkt, in Arbeit.
14. **Sektionsnummern.**

Ein Achtreihen-Einzelkornsägerät im Modus „Einzelkorn“ bei der Aussaat.
:::

Was jede Anzeige in allen ihren Zuständen bedeutet, steht unter [Anzeigen](indicators.md); das Diagramm selbst — Linie, Marken, Farben — unter [Das Sektionsdiagramm](section-diagram.md).

## Was Sie vom Startbildschirm aus tun können {#what-you-can-do-from-the-home-screen}

| **Aufgabe** | **So geht es** |
| --- | --- |
| Das Hauptmenü öffnen | **„MENU“** oder mit zwei Fingern tippen |
| Die Sollmenge ändern | **„PLUS“** / **„MINUS“** — [Sollmenge ändern](set-the-target-rate.md) |
| Die Produktausbringung sperren oder freigeben | **„HOME“** gedrückt halten — [Ausbringung von Hand sperren](lock-application-by-hand.md) |
| Das Menü des Fahrgassen-Durchgangs öffnen | **„BACK“** — [Nächster Fahrgassen-Durchgang](next-tramline-bout.md) |
| Das Panel die Alarmschwelle setzen lassen | Doppeltippen, während ausgebracht wird — [Alarmschwelle einstellen](set-the-alarm-level.md) |
| Die Einstellungen eines Geräts öffnen | Sein Symbol oder seine Säule berühren und halten |
| Zum nächsten Arbeitsbildschirm wechseln | **„HOME“** oder nach links wischen — [Arbeitsbildschirme](working-screens.md) |
| Den zweiten Startbildschirm öffnen | Nach rechts wischen — [Zweiter Startbildschirm](second-home-screen.md) |

Alle Tasten auf allen Bildschirmen: [Tasten und Gesten](buttons-and-gestures.md).
