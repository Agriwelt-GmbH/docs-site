---
title: Der Startbildschirm an verschiedenen Maschinen
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/home-screen-examples.html
---

# Der Startbildschirm an verschiedenen Maschinen

Dasselbe Panel an einem Einzelkornsägerät, an einer Drillmaschine und an Maschinen mit 44 und 96 Reihen — im Stillstand und bei der Arbeit —, damit Sie Ihren eigenen Bildschirm wiedererkennen.

Was der Startbildschirm zeigt, folgt dem [Profil](profile.md). Die Bilder unten wurden auf einem Panel mit Firmware 1.2.3 aufgenommen, das als verschiedene Maschinen eingerichtet war. Prüfstandsbesonderheiten — die blaue Uhr, die gelbe Geschwindigkeit — sind unter [Zu den Bildern in dieser Anleitung](about-the-pictures.md) erklärt.

## Ein Achtreihen-Einzelkornsägerät im Stillstand {#an-eight-row-planter-standing-still}

::: {.anatomy fig="one-home-01-main"}
1. **Fahrgeschwindigkeit.** Gelb: Die Geschwindigkeit ist simuliert, nicht gemessen.
2. **Behälter.** Der erste grün, der zweite **rot** — dieser Behälter meldet leer.
3. **Dosiereinheiten.** Zwei Sensoren der Dosierwellen.
4. **Gebläse.** Mit seiner Drehzahl in U/min daneben.
5. **Fläche.** Bearbeitete Hektar auf dem aktiven Feld.
6. **Aussaatmenge.** Die tatsächliche Aussaatmenge in Tausend je Hektar.
7. **Speicherkarte.** Im Steckplatz steckt eine microSD-Karte.
8. **Toleranz.** Die geltende zulässige Abweichung, über dem Diagramm angegeben.
9. **Toleranzmarken.** Obere und untere Grenze in jeder Säule.
10. **Solllinie.** Die Sollmenge.
11. **Sektionssäule.** Leer: Die Maschine steht still.
12. **Mengenfeld.** Oben die gemessenen Körner je Meter, darunter der Sollwert.
13. **Handsperre.** Die gelbe Hand: Die Produktausbringung ist von Hand gesperrt. [Ausbringung von Hand sperren](lock-application-by-hand.md)
14. **Aktuatorstörung.** Eine Störung der Elektromotoren der Dosierer. [Bildschirm Motoren](motors-screen.md)
15. **Sektionsnummern.**

Acht Kornsensoren, zwei Elektromotoren der Dosierer, zwei Behälter, zwei Dosierwellensensoren, ein Gebläse; Modus „Einzelkorn“.
:::

## Drei Maschinen im Stillstand {#three-machines-standing-still}

Die Sollmengen sind eingestellt, die Istmengen sind null. Vierundvierzig Kornsensoren in zwei Reihen zu je zweiundzwanzig, zwei Behälter, zwei Dosierwellen, ein Gebläse, ein Mengenfeld in Körnern je Sekunde; das Sämaschinen-Symbol rechts ist grün — die Maschine ist in Arbeitsstellung.

![Der Startbildschirm einer Maschine mit 44 Reihen im Stillstand.](figures/one-home-comp-44)

Vierundzwanzig Kornsensoren und zwölf Düngersensoren: zwei Diagramme, zwei Mengenfelder. Am oberen Rand zwei Behälter, zwei Dosierwellen, Öldruck, Batterie, Zündung und ein Gebläse.

![Der Startbildschirm einer Drillmaschine mit 24 Saat- und 12 Düngerreihen im Stillstand.](figures/one-home-comp-24-12)

Acht Kornsensoren im Modus „Einzelkorn“ mit einem Drucksensor: eine Säulenreihe mit dem Toleranzband, die Menge in Körnern je Meter und die Zahl je Hektar.

![Der Startbildschirm eines Achtreihen-Einzelkornsägeräts mit Drucksensor im Stillstand.](figures/one-home-comp-8-precise)

## Bei der Arbeit {#at-work}

Das Achtreihen-Einzelkornsägerät bei der Aussaat. Jede Säule ist eine Reihe; die Säulenspitzen bewegen sich mit jeder Zählung, die Schraffur zeigt Fehlstellen und Doppelbelegungen. Lesen Sie es zusammen mit [Das Sektionsdiagramm](section-diagram.md).

![Der Startbildschirm im Modus „Einzelkorn“ bei der Aussaat.](figures/one-home-live-8-precise)

Die Drillmaschine mit 24 Reihen bei 12 km/h. Die Bildfolge beginnt mit den Säulen **unter der Linie** und **„NICHT ÜBERWACHT“** über beiden Diagrammen; dann wird der Sollwert gesenkt, die Säulen steigen über die Linie, und die Reihen sind wieder in der Überwachung.

![Der Startbildschirm der Drillmaschine mit 24 Reihen: von nicht überwacht zu überwacht.](figures/one-home-live-24-12)

Die Maschine mit 44 Reihen bei 12 km/h: zwei Diagramme mit je zweiundzwanzig Säulen, Behälter voll, Dosierwellen drehen sich.

![Der Startbildschirm der Maschine mit 44 Reihen bei der Aussaat.](figures/one-home-live-44)

Die größte Maschine: 48 Saat- und 48 Düngerreihen, drei Behälter, drei Dosierwellen, zwei Gebläse. Auch sie beginnt unter der Linie und kommt wieder in die Überwachung, wenn der Sollwert auf die tatsächliche Menge sinkt.

![Der Startbildschirm einer Maschine mit 96 Reihen bei der Aussaat.](figures/one-home-live-48-48)

## Eine echte Maschine bei der Arbeit {#a-real-machine-at-work}

Aufgenommen an einer Maschine mit 48 Kornsensoren in zwei Reihen, zwei Behältern, zwei Dosierwellensensoren und einem Gebläse während der Aussaat. Das Mengenfeld ist zum Ändern ausgewählt: Sein Hintergrund ist hell, der Sollwert ist weiß und der gemessene Wert grau. Ist es nicht ausgewählt, ist es umgekehrt.

![Der Startbildschirm einer Maschine mit 48 Reihen bei der Arbeit, Mengenfeld ausgewählt.](figures/one-home-main-norm)
