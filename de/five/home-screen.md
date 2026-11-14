---
title: Der Startbildschirm
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/home-screen.html
---

# Der Startbildschirm

Was jeder Teil des Startbildschirms ist — Geschwindigkeit, Anzeigen, Fläche, Mengen, Sektionsdiagramme — an einer stehenden Drillmaschine und an einem arbeitenden Einzelkornsägerät, und was Sie von hier aus per Touch tun können.

Der Startbildschirm ist der wichtigste Arbeitsbildschirm. Er zeigt die Diagramme der Sektionssensoren, die Zustandsanzeigen der Geräte und die Kennzahlen der Arbeit. Was er zeigt, folgt dem [Profil](profile.md): Jede dort eingetragene Gruppe von Sensoren und Geräten bekommt ihre Symbole, ihre Säulen, ihr Mengenfeld.

Der Bildschirm hat vier Zonen. Die **Fahrgeschwindigkeit** steht groß oben links. Die **Anzeigenreihen** laufen oben entlang, mit der **Uhr** oben rechts. Eine **Spalte von Anzeigen** läuft am rechten Rand nach unten. Der untere Teil enthält die **Diagramme** — eine Säule je Sektion —, jedes mit seinem **Mengenfeld** rechts.

## Eine Drillmaschine mit Saatgut und Dünger {#a-grain-drill-with-seed-and-fertilizer}

::: {.anatomy fig="five-home-flow"}
1. **Fahrgeschwindigkeit.** In km/h. Meldungen zur Geschwindigkeit ersetzen die Zahl. [Geschwindigkeit](indicators.md#speed)
2. **Behälter.** Ein Symbol je Behältersensor, nummeriert. Rot — der Füllstand liegt unter dem Sensor. [Behälter](indicators.md#hopper)
3. **Dosiereinheiten.** Drehung der Dosierwellen; das Symbol dreht sich, solange sich die Welle dreht. [Dosiereinheit](indicators.md#metering-unit)
4. **Gebläse.** Das Gebläsesymbol und seine Drehzahl in U/min. [Gebläse](indicators.md#fan)
5. **Motorsensoren.** Öldruck, Batterieladung und Zündung des Gebläseantriebsmotors. [Motorsensoren](indicators.md#engine-sensors)
6. **Uhr.** Die Uhrzeit; das Feld trägt auch Meldungen. [Uhr](indicators.md#clock)
7. **Speicherkarte.** Angezeigt, solange eine microSD-Karte bereit ist. [Speicherkarte](indicators.md#memory-card)
8. **Fläche.** Bearbeitete Hektar auf dem aktiven Schlag. [Fläche](indicators.md#area)
9. **Produktmenge nach Masse.** Die Menge eines Produkts in kg/ha. [Produktmenge nach Masse](indicators.md#product-rate-by-weight)
10. **Saatgutdiagramm.** Eine Säule je Kornsensor; die weiße Linie ist die Überwachungslinie. [Das Sektionsdiagramm](section-diagram.md)
11. **Mengenfeld.** Oben die gemessene Menge, darunter die Sollmenge, hier in Körnern je Sekunde. [Sollmenge ändern](set-the-target-rate.md)
12. **Düngerdiagramm.** Die Düngersektionen, mit eigenem Mengenfeld.
13. **Rechte Spalte.** Gerätestellung, Handsperre, Satelliten, Aktuatorstörung — was immer die Maschine hat. [Anzeigen](indicators.md)
14. **Sektionsnummern.** Die Nummer jeder Sektion, unter ihrer Säule.

Eine Drillmaschine mit Saatgut- und Düngerreihen im Stand: Sollwerte eingestellt, tatsächliche Mengen null.
:::

## Ein Einzelkornsägerät bei der Arbeit {#a-planter-at-work}

::: {.anatomy fig="five-home-precise"}
1. **Fahrgeschwindigkeit.** [Geschwindigkeit](indicators.md#speed)
2. **Behälter.** Grün — Produkt oberhalb des Sensors.
3. **Druck.** Unterdruck oder Überdruck in kPa. [Druck](indicators.md#pressure)
4. **Fläche.** Bearbeitete Hektar auf dem aktiven Schlag.
5. **Aussaatstärke.** Die tatsächliche Aussaatmenge in tausend Körnern je Hektar. [Aussaatstärke](indicators.md#population)
6. **Sektionssäule.** Grün — die Reihe sät innerhalb ihrer Toleranz. [Säulenfarben](section-states.md#column-colours)
7. **Fehlstellenbalken.** Gelbe Schraffur links an einer Säule: der Anteil der Fehlstellen in dieser Reihe.
8. **Doppelbelegungsbalken.** Blaue Schraffur rechts an einer Säule: der Anteil der Doppelbelegungen.
9. **Mengenlinie.** Die Sollmenge über alle Reihen.
10. **Toleranzmarken.** Obere und untere Grenze der zulässigen Abweichung, in jeder Säule.
11. **Mengenfeld.** Oben die gemessenen Körner je Meter, darunter die Sollmenge.
12. **Gerätestellung.** Grün — abgesenkt, in Arbeit. [Gerätestellung](indicators.md#implement-position)

Ein Achtreihen-Einzelkornsägerät im Modus **„Precise“** (Einzelkorn), bei der Aussaat.
:::

Was jede Anzeige in all ihren Zuständen bedeutet, steht unter [Anzeigen](indicators.md); das Diagramm selbst — Linie, Marken, Farben — unter [Das Sektionsdiagramm](section-diagram.md).

## Was Sie vom Startbildschirm aus tun können {#what-you-can-do-from-the-home-screen}

| **Aufgabe** | **So geht es** |
| --- | --- |
| Das Hauptmenü öffnen | Mit **zwei Fingern** tippen |
| Sollmenge oder Alarmschwelle ändern | Das Diagramm berühren und halten, dann nach oben oder unten wischen — [Sollmenge ändern](set-the-target-rate.md) |
| Den Sollwert eines Produkts nach Masse einstellen | Die kg/ha-Anzeige berühren und halten; der Zahlenblock öffnet sich |
| Das Panel die Alarmschwelle einstellen lassen | **Doppeltippen**, während ausgebracht wird — [Alarmschwelle einstellen](set-the-alarm-level.md) |
| Die Produktausbringung sperren oder freigeben | Eine leere Stelle der rechten Spalte berühren und halten — [Ausbringung von Hand sperren](lock-application-by-hand.md) |
| Die Einstellungen eines Geräts öffnen | Sein Symbol oder seine Säule berühren und halten |
| Zum nächsten Arbeitsbildschirm gehen | **Langes Wischen nach links** — [Arbeitsbildschirme](working-screens.md) |
| Den zweiten Startbildschirm öffnen | **Langes Wischen nach rechts** — [Zweiter Startbildschirm](second-home-screen.md) |

Ein langes Wischen läuft über mehr als ein Drittel des Bildschirms. Alle Gesten auf allen Bildschirmen: [Touchzonen und Gesten](buttons-and-gestures.md).
