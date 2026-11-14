---
title: Das Sektionsdiagramm — Säulen, Linie und Farben
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/section-diagram.html
---

# Das Sektionsdiagramm — Säulen, Linie und Farben

Wie Sie die Säulen des Startbildschirms im Modus „Einzelkorn“ und im Modus „Durchfluss“ lesen und was die Überwachungslinie bedeutet.

Jede Säule des Diagramms ist eine Sektion — ein Korn- oder Düngersensor. Ihre Höhe ist der Durchfluss durch diese Sektion. Wie der Rest gezeichnet wird, hängt vom Modus der Aussaatüberwachung ab: **„Einzelkorn“** (Körner je Meter, mit Fehlstellen und Doppelbelegungen) oder **„Durchfluss“** (Körner je Sekunde gegen eine Alarmschwelle).

## Modus „Einzelkorn“ {#precise-mode}

::: {.anatomy fig="one-diagram-precise"}
1. **Sollmenge.** Grau, in Körnern je Meter (**K/m**). Diese Zahl ändern **„PLUS“** und **„MINUS“**.
2. **Gemessene Menge.** Weiß — der Durchschnitt der Reihen im Moment.
3. **Toleranz.** Die zulässige Abweichung vom Sollwert in Prozent.
4. **Solllinie.** Die Sollmenge, über alle Reihen gezogen.
5. **Obere Marke.** Die obere Toleranzgrenze in jeder Säule.
6. **Untere Marke.** Die untere Toleranzgrenze.
7. **Säule.** Grün — die Reihe sät innerhalb der Toleranz.
8. **Fehlstellenbalken.** Gelbe Schraffur am linken Rand einer Säule. Je höher sie ist, desto mehr Fehlstellen hat diese Reihe.
9. **Doppelbelegungsbalken.** Blaue Schraffur am rechten Rand einer Säule. Je höher sie ist, desto mehr Doppelbelegungen.
10. **Sektionsnummer.**

Ein Achtreihen-Einzelkornsägerät sät mit etwa 5 Körnern je Meter gegen einen Sollwert von 4,3. Die Reihen 3, 6 und 7 haben Fehlstellen; die Reihen 5 und 7 haben Doppelbelegungen.
:::

## Modus „Durchfluss“ {#flow-mode}

::: {.anatomy fig="one-home-flow-at-work"}
1. **Alarmschwelle.** Grau, in Körnern je Sekunde (**K/s**). Das Niveau, unter dem eine Sektion als durchflussschwach gilt. **„PLUS“** und **„MINUS“** ändern es.
2. **Gemessene Menge.** Weiß — der Durchschnitt der Reihen im Moment.
3. **Überwachungslinie.** Die Alarmschwelle, über alle Reihen gezogen.
4. **Säule über der Linie.** Grün — die Reihe arbeitet.
5. **Leerer Teil einer Säule.** Dunkelgrau über dem Grün: Je höher das Grün reicht, desto mehr Durchfluss.
6. **Sektionsnummern.** Die Düngersektionen setzen sich nach den Saatsektionen fort.
7. **Düngerdiagramm.** Dasselbe für die Düngersensoren.
8. **Mengenfeld Dünger.** Oben gemessen, darunter die Alarmschwelle, in Dünger je Sekunde (**D/s**).

Eine Drillmaschine mit 24 Saat- und 12 Düngerreihen, Aussaat mit 12 km/h. Jede Säule steht über ihrer Linie.
:::

## Die Linie: Reihen darunter werden nicht überwacht {#the-line-rows-under-it-are-not-under-control}

Die Linie ist die Grenze einer teilweisen Verstopfung, keine Verzierung. Eine Säule über der Linie ist eine Reihe, die arbeitet; eine Säule, die darunter sinkt, ist eine Reihe, die Durchfluss verliert — lange bevor sie ganz verstopft.

::: {.anatomy fig="one-home-flow-not-under-control"}
1. **„NICHT ÜBERWACHT“.** Die Reihen dieses Diagramms werden nicht überwacht.
2. **Säulen unter der Linie.** Jede Reihe liefert weniger als das Niveau.
3. **Überwachungslinie.** Über den wirklichen Durchfluss hinaufgezogen.
4. **Alarmschwelle.** 18 Körner je Sekunde — mehr, als die Maschine sät.
5. **Gemessene Menge.** 15 Körner je Sekunde.

Dieselbe Drillmaschine mit zu hoch eingestelltem Niveau. Beide Diagramme sind aus der Überwachung gefallen.
:::

Reihen unter der Linie werden absichtlich nicht überwacht: Das Panel weigert sich, ein Niveau zu bewachen, das über dem eingestellt wurde, was die Maschine wirklich liefert. Senken Sie das Niveau, bis die Säulen über der Linie stehen, oder lassen Sie es das Panel setzen: [Alarmschwelle automatisch einstellen](set-the-alarm-level.md).

Ob die Maschine überhaupt sät, entscheidet das Panel anhand des **Anteils der säenden Reihen** — eine Sensoreinstellung, ab Werk 20 %. Am Vorgewende fallen die Reihen aus der Überwachung; beim nächsten Durchgang kommen sie zurück, mit oder ohne Arbeitsstellungssensor. Das Panel meldet es mit Ton: **drei kurze Signale**, wenn die Aussaat aufhört, **ein kurzes Signal**, wenn sie wieder beginnt.

> **WICHTIG**
>
> **Lesen Sie die Säulen gegen die Linie, nicht gegeneinander.** Über der Linie arbeitet die Sektion. Unten an der Linie arbeitet sie nicht — ganz gleich, was die Nachbarn tun.

Was jede Farbe und jedes Symbol einer Säule bedeutet und welche vier Zustände eine Sektion hat: [Säulenfarben und Sektionszustände](section-states.md).
