---
title: Der Tabellenbildschirm
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/table-screen.html
---

# Der Tabellenbildschirm

Die Messwerte jeder Sektion in Zahlen — welche Tabellen Ihre Maschine hat, was jede Spalte bedeutet und wie Sie die Farben lesen.

Der Tabellenbildschirm zeigt die Messwerte jeder Sektion als Zahlen, eine Zeile je Sektion. Er beantwortet die Frage, die das Diagramm nicht beantworten kann: *welche Sektion genau und um wie viel.* Öffnen Sie ihn vom Startbildschirm mit einem **langen Wischen nach links**. Er hat keinen Weg zurück: Ein weiteres langes Wischen nach links führt weiter zum Statistikbildschirm und über den Kreis zum Startbildschirm ([Arbeitsbildschirme](working-screens.md)).

## Ein Einzelkornsägerät im Modus „Precise“ {#a-planter-in-the-precise-mode}

::: {.anatomy fig="five-table-precise"}
1. **#.** Die Nummer der Sektion.
2. **sds/m.** Körner je Meter, jetzt gemessen.
3. **Q.%.** Qualität — der Anteil der Körner, die wie vorgesehen einzeln abgelegt wurden.
4. **Db%.** Doppelbelegungen — zwei Körner, wo eines vorgesehen war.
5. **Sk%.** Fehlstellen — eine Lücke, wo ein Korn vorgesehen war.
6. **ks/Ha.** Die ausgebrachte Menge in tausend Körnern je Hektar (in der zweiten Tabelle: Körner je Meter).
7. **%.** Die Abweichung dieser Sektion von der eingestellten Menge.
8. **Tabellennummer.** Diese Tabelle und wie viele es gibt, in der Ecke. Nur angezeigt, wenn es mehr als eine gibt.
9. **Sektionsnummer auf Gelb.** Etwas in dieser Zeile ist auf seine Grenze zugedriftet.
10. **Wert auf Gelb.** Die Zahl, die gedriftet ist.
11. **Summen.** Dieselben Spalten für die ganze Maschine.

Die erste von drei Tabellen eines Achtreihen-Einzelkornsägeräts, bei der Aussaat.
:::

Ein Wert auf **Gelb** driftet auf seine Grenze zu; auf **Rot** liegt er jenseits davon. Eine ganze Zeile in **Grau** mit **!** ist eine Sektion, die aus der Überwachung genommen wurde; eine Zeile in **Rot** mit **×** ist ein Sensor, der nicht antwortet, mit **?** ein Gerät falscher Art.

> **HINWEIS**
>
> **Lesen Sie zuerst die Abweichungsspalte.** Eine Sektion, die 20 % unter den anderen liegt, hat ein Problem, das der Durchschnitt nicht zeigt — einen teilweise verstopften Auslauf, eine verschlissene Scheibe, einen Sensor, der gereinigt werden muss.

## Eine Drillmaschine im Modus „Flow“ {#a-drill-in-the-flow-mode}

::: {.anatomy fig="five-table-flow"}
1. **#.** Die Nummer der Sektion.
2. **sds/s.** Körner je Sekunde. Striche, solange nichts gezählt wird.
3. **Abweichungsskala.** Von −50 % über 0 bis +50 %.
4. **Abweichungsbalken.** Wie weit diese Sektion von der eingestellten Menge entfernt steht.
5. **%.** Dieselbe Abweichung als Zahl.
6. **Tabellennummer.** Hier Tabelle 1 von 2 — die zweite enthält die Düngersektionen.
7. **Niedrigste Abweichung.** Die Sektion, die am weitesten unter der Menge liegt.
8. **Höchste Abweichung.** Die Sektion, die am weitesten über der Menge liegt.
9. **Neuberechnungsintervall.** Die Strecke, über die die Werte gesammelt werden — **„Recalculation,m“** (Neuberechnung) der Sensoren.

Die Saatguttabelle einer Drillmaschine mit Saatgut- und Düngerreihen im Stand.
:::

## Welche Tabellen Ihre Maschine hat {#which-tables-your-machine-has}

| **Tabelle** | **Angezeigt, wenn** |
| --- | --- |
| **Kornzähler** — Körner je Sekunde oder je Meter, mit den Abweichungsbalken | Immer. |
| **Menge je Fläche** (Tausend je Hektar) und **Menge je Strecke** (Körner je Meter) | Nur im Aussaat-Überwachungsmodus **„Precise“**. |
| **Trockendünger** | Die Maschine hat Düngersensoren und der Düngerüberwachungsmodus ist nicht „Precise“. |
| **Flüssigdünger** | Die Maschine hat Flüssigdüngersensoren. |

Im Modus „Precise“ hat ein Einzelkornsägerät drei Saatguttabellen: Menge je Fläche (1/3), Menge je Strecke (2/3) und die Kornzähler (3/3) — die Zahl der Körner, die jede Sektion gesät hat, neben den Abweichungsbalken, mit der Summe für die Maschine unten.

![Die Tabelle der Kornzähler: Körner je Sektion, Abweichungsbalken, Summe.](figures/five-table-counters)

## Mit dem Bildschirm arbeiten {#working-with-the-screen}

| **Was Sie wollen** | **Geste** |
| --- | --- |
| Nächste oder vorige Tabelle | **Langes** Wischen nach rechts oder links mit **zwei Fingern** |
| Die Zeilen blättern | Nach oben oder unten wischen |
| Die Messwerte nullen | Mit **zwei Fingern** tippen — [Messwerte nullen](zero-the-readings.md) |
| Weiter zur Statistik | Langes Wischen nach links |

An großen Maschinen passen die Reihen nicht auf eine Seite: Wischen Sie nach oben und unten, um sie zu blättern. Eine Zeile, die driftet, wird gelb, während Sie zusehen.
