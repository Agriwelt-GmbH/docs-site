---
title: Das Sektionsdiagramm — Säulen, Linie und Farben
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/section-diagram.html
---

# Das Sektionsdiagramm — Säulen, Linie und Farben

Wie Sie die Säulen des Startbildschirms im Modus „Precise“ und im Modus „Flow“ lesen und was die Überwachungslinie bedeutet.

Jede Säule des Diagramms ist eine Sektion — ein Korn- oder Düngersensor. Ihre Höhe ist der Durchfluss durch diese Sektion. Wie der Rest gezeichnet wird, hängt vom Überwachungsmodus der Aussaat ab: **„Precise“** (Einzelkorn; Körner je Meter, mit Fehlstellen und Doppelbelegungen) oder **„Flow“** (Durchfluss; Körner je Sekunde gegen eine Alarmschwelle). Das Mengenfeld steht am rechten Ende jedes Diagramms: oben der gemessene Wert, darunter die Sollmenge oder die Alarmschwelle, darunter die Einheit.

## Modus „Precise“ {#precise-mode}

::: {.anatomy fig="five-diagram-precise"}
1. **Sollmenge.** Grau, in Körnern je Meter (**s/m**). Diesen Wert ändern Sie per Touch.
2. **Gemessene Menge.** Weiß — der Durchschnitt der Reihen im Augenblick.
3. **Maßstab der Balken.** Der Anteil an Fehlstellen oder Doppelbelegungen, bei dem ein Balken bis oben reicht — **„Scale S&D,%“** in den Einstellungen.
4. **Mengenlinie.** Die Sollmenge, über alle Reihen gezeichnet.
5. **Obere Marke.** Die obere Toleranzgrenze, in jeder Säule.
6. **Untere Marke.** Die untere Toleranzgrenze.
7. **Säule.** Grün — die Reihe sät innerhalb der Toleranz.
8. **Fehlstellenbalken.** Gelbe Schraffur am linken Rand einer Säule. Je höher, desto mehr Fehlstellen in dieser Reihe.
9. **Doppelbelegungsbalken.** Blaue Schraffur am rechten Rand einer Säule. Je höher, desto mehr Doppelbelegungen.
10. **Sektionsnummer.**

Ein Achtreihen-Einzelkornsägerät bei der Aussaat; manche Reihen haben Fehlstellen, manche Doppelbelegungen.
:::

## Modus „Flow“ {#flow-mode}

::: {.anatomy fig="five-home-flow-at-work"}
1. **Alarmschwelle.** Grau, in Körnern je Sekunde (**s/s**). Der Wert, unter dem eine Sektion als Durchfluss verlierend gilt.
2. **Gemessene Menge.** Weiß — der Durchschnitt der Reihen im Augenblick.
3. **Überwachungslinie.** Die Alarmschwelle, über alle Reihen gezeichnet.
4. **Säule über der Linie.** Grün — die Reihe arbeitet.
5. **Leerer Teil einer Säule.** Dunkelgrau über dem Grün: Je höher das Grün reicht, desto mehr Durchfluss.
6. **Sektionsnummern.** Die Düngersektionen zählen nach den Saatgutsektionen weiter.
7. **Düngerdiagramm.** Dasselbe für die Düngersensoren.
8. **Mengenfeld Dünger.** Oben der gemessene Wert, darunter die Alarmschwelle, in Dünger je Sekunde (**f/s**).

Eine Drillmaschine mit Saatgut- und Düngerreihen bei der Aussaat. Jede Säule steht über ihrer Linie.
:::

Um die Sollmenge oder die Alarmschwelle zu ändern, **berühren und halten Sie das Diagramm,** bis sein Sollwert aufleuchtet, und wischen Sie dann nach oben oder unten — ein Schritt je Wischen. Ein Tippen außerhalb der Diagramme beendet das. Siehe [Sollmenge ändern](set-the-target-rate.md).

## Die Linie: Reihen darunter stehen nicht unter Überwachung {#the-line-rows-under-it-are-not-under-control}

Die Linie ist die Grenze einer Teilverstopfung, keine Dekoration. Eine Säule über der Linie ist eine Reihe, die arbeitet; eine Säule, die darunter sinkt, ist eine Reihe, die Durchfluss verliert — lange bevor sie ganz verstopft.

::: {.anatomy fig="five-home-not-under-control"}
1. **„NOT UNDER CONTROL“** (Nicht unter Überwachung). Die Reihen dieses Diagramms werden nicht überwacht.
2. **Säulen unter der Linie.** Jede Reihe liefert weniger als der Wert.
3. **Überwachungslinie.** Über den tatsächlichen Durchfluss hinaufgezogen.
4. **Alarmschwelle.** Höher, als die Maschine sät.
5. **Gemessene Menge.** Niedriger als die Alarmschwelle.

Eine Drillmaschine mit zu hoch eingestellter Alarmschwelle. Die Diagramme sind aus der Überwachung gefallen.
:::

**„NOT UNDER CONTROL“** öffnet kein Alarmfenster; auf der Fahrerebene gibt das Panel stattdessen den Alarmton aus. Reihen unter der Linie stehen mit Absicht nicht unter Überwachung: Das Panel weigert sich, einen Wert zu bewachen, der über dem liegt, was die Maschine tatsächlich liefert. Senken Sie den Wert, bis die Säulen über der Linie stehen, oder lassen Sie das Panel ihn mit einem Doppeltippen einstellen: [Alarmschwelle automatisch einstellen](set-the-alarm-level.md).

Ob die Maschine überhaupt sät, entscheidet das Panel nach dem **Anteil der säenden Reihen** — die Sensoreinstellung **„Percent of sowing,%“** (Anteil säender Reihen, %), standardmäßig 20 %. Am Vorgewende fallen die Reihen aus der Überwachung; im nächsten Durchgang kommen sie zurück, mit oder ohne Arbeitsstellungssensor. Das Panel sagt es mit Ton: **drei kurze Pieptöne**, wenn die Aussaat endet, **ein kurzer Piepton**, wenn sie wieder beginnt.

> **WICHTIG**
>
> **Lesen Sie die Säulen gegen die Linie, nicht gegeneinander.** Über der Linie arbeitet die Sektion. Unten an der Linie nicht — was immer die Nachbarn tun.

Was jede Farbe und jedes Symbol einer Säule bedeutet und die vier Zustände einer Sektion: [Säulenfarben und Sektionszustände](section-states.md).
