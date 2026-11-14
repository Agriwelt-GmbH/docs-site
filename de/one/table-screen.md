---
title: Der Bildschirm Tabelle
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/table-screen.html
---

# Der Bildschirm Tabelle

Die Messwerte jeder Sektion in Zahlen — welche Tabellen Ihre Maschine hat, was jede Spalte bedeutet und wie Sie die Farben lesen.

Der Bildschirm Tabelle zeigt die Messwerte jeder Sektion als Zahlen, eine Zeile je Sektion. Er beantwortet die Frage, die das Diagramm nicht beantwortet: *welche Sektion genau, und um wie viel.* Öffnen Sie ihn vom Startbildschirm aus mit **„HOME“**; verlassen Sie ihn mit **„BACK“**.

## Ein Einzelkornsägerät im Modus „Einzelkorn“ {#a-planter-in-the-precise-mode}

::: {.anatomy fig="one-table-precise-at-work"}
1. **#.** Die Nummer der Sektion.
2. **K/m.** Körner je Meter, jetzt gemessen.
3. **Q.%.** Qualität — der Anteil der Körner, die wie vorgesehen einzeln abgelegt wurden.
4. **Dp%.** Doppelbelegungen — zwei Körner, wo eines vorgesehen war.
5. **Fs%.** Fehlstellen — eine Lücke, wo ein Korn vorgesehen war.
6. **Tsd/ha.** Die ausgebrachte Menge in Tausend Körnern je Hektar (in der zweiten Tabelle: Körner je Meter).
7. **%.** Die Abweichung dieser Sektion von der eingestellten Menge.
8. **Tabellennummer.** Diese Tabelle und wie viele es gibt, zwischen **(−)** und **(+)** — **„MINUS“** und **„PLUS“** schalten die Tabellen um.
9. **Sektionsnummer auf Gelb.** Etwas in dieser Zeile hat sich seiner Grenze genähert.
10. **Wert auf Gelb.** Die Zahl, die sich genähert hat — hier die Fehlstellen von Sektion 7.
11. **Summen.** Dieselben Spalten für die ganze Maschine.

Die erste von drei Tabellen eines Achtreihen-Einzelkornsägeräts bei der Aussaat.
:::

Ein Wert auf **Gelb** nähert sich seiner Grenze; auf **Rot** hat er sie überschritten. Eine ganze Zeile in **Grau** mit **!** ist eine Sektion, die aus der Überwachung genommen wurde; eine Zeile in **Rot** mit **×** ist ein Sensor, der nicht antwortet, mit **?** ein Gerät der falschen Art.

> **HINWEIS**
>
> **Lesen Sie zuerst die Spalte der Abweichung.** Eine Sektion, die 20 % unter den anderen liegt, hat ein Problem, das der Durchschnitt nicht zeigt — einen teilweise verstopften Auslauf, eine verschlissene Scheibe, einen Sensor, der gereinigt werden muss.

## Eine Drillmaschine im Modus „Durchfluss“ {#a-drill-in-the-flow-mode}

::: {.anatomy fig="table-1"}
1. **#.** Die Nummer der Sektion.
2. **K/s.** Körner je Sekunde. Striche, solange nichts gezählt wird.
3. **Abweichungsskala.** Von −50 % über 0 bis +50 %.
4. **Abweichungsbalken.** Wie weit diese Sektion von der eingestellten Menge entfernt ist.
5. **%.** Dieselbe Abweichung als Zahl.
6. **Tabellennummer.** Tabelle 1 von 2 — die zweite enthält die Düngersektionen.
7. **Niedrigste Abweichung.** Die Sektion, die am weitesten unter der Menge liegt.
8. **Höchste Abweichung.** Die Sektion, die am weitesten über der Menge liegt.
9. **Neuberechnungsintervall.** Die Strecke, über die die Werte gesammelt werden — **„Neuberechnung, m“** der Sensoren.

Die Korntabelle einer Drillmaschine mit 24 Saat- und 12 Düngerreihen im Stillstand.
:::

## Welche Tabellen Ihre Maschine hat {#which-tables-your-machine-has}

| **Tabelle** | **Wird angezeigt, wenn** |
| --- | --- |
| **Kornzähler** — Körner je Sekunde oder je Meter, mit den Abweichungsbalken | Immer. |
| **Menge je Fläche** (Tausend je Hektar) und **Menge je Strecke** (Körner je Meter) | Nur im Überwachungsmodus **„Einzelkorn“**. |
| **Trockendünger** | Die Maschine hat Düngersensoren, und der Überwachungsmodus für Dünger ist nicht „Einzelkorn“. |
| **Flüssigdünger** | Die Maschine hat Flüssigdüngersensoren. |

Im Modus „Einzelkorn“ hat das Einzelkornsägerät oben drei Tabellen: Menge je Fläche (1/3), Menge je Strecke (2/3) und die Kornzähler (3/3) — die Zahl der Körner, die jede Sektion gesät hat, neben den Abweichungsbalken, mit der Summe für die Maschine in Tausend unten.

![Die Tabelle der Kornzähler des Achtreihen-Einzelkornsägeräts: Körner je Sektion, Abweichungsbalken, Summe.](figures/one-table-counters)

## Arbeiten mit dem Bildschirm {#working-with-the-screen}

| **Was Sie möchten** | **Taste** | **Oder Geste** |
| --- | --- | --- |
| Nächste oder vorherige Tabelle | **„PLUS“** / **„MINUS“** | Lang mit zwei Fingern nach links oder rechts wischen |
| Zeilen blättern | **„UP“** / **„DOWN“** | Nach oben oder unten wischen |
| Werte zurücksetzen | **„MENU“** | Mit zwei Fingern tippen |
| Zur Statistik wechseln | **„HOME“** | Nach links wischen |
| Zurück zum Startbildschirm | **„BACK“** | Nach rechts wischen |

Zurücksetzen: [Werte zurücksetzen](zero-the-readings.md).

## Die Tabelle während der Aussaat {#the-table-while-seeding}

Die Zeilen ändern sich mit jeder Zählung; eine Zeile, die sich der Grenze nähert, wird gelb.

![Die Tabelle der Drillmaschine mit 24 Reihen bei der Aussaat, Saatgut und Dünger.](figures/one-table-live-24-12)

An großen Maschinen passen die Reihen nicht auf eine Seite: **„UP“** und **„DOWN“** blättern sie.

![Die Tabelle der Maschine mit 96 Reihen bei der Aussaat.](figures/one-table-live-48-48)
