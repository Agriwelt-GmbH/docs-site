---
title: Säulenfarben und die vier Zustände einer Sektion
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/section-states.html
---

# Säulenfarben und die vier Zustände einer Sektion

Was jede Farbe und jedes Symbol einer Säule im Sektionsdiagramm bedeutet und welche vier Kombinationen aus Überwachung und Produktausbringung eine Sektion haben kann.

Wie das Diagramm aufgebaut ist — Solllinie, Marken, Überwachungslinie — steht unter [Das Sektionsdiagramm](section-diagram.md). Diese Seite listet auf, wie eine einzelne Säule aussehen kann.

## Säulenfarben {#column-colours}

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| Grüne Säule | Die Reihe sät normal. |
| Blaue Säule | Die Reihe sät **mehr**, als der Sollwert zulässt („Einzelkorn“ und „Hybrid“). |
| Gelbe Säule | Die Reihe sät **weniger**, als der Sollwert zulässt („Einzelkorn“ und „Hybrid“). |
| Hintergrund blinkt dunkelrot, keine Säule | Die Reihe sät fast nichts, während die Maschine sät — ein verstopftes oder leeres Saatrohr. |
| Weiße Säule mit **!** | Die Überwachung dieser Sektion ist ausgeschaltet. Nichts an ihr wird überwacht. |
| Rotes **×** | Der Sensor antwortet nicht. |
| Rotes **?**, Säule blinkt rot | Ein Gerät der falschen Art antwortet anstelle dieses Sensors. |
| Gelbes **?** | Der Sensor hat gerade seine Einstellungen erhalten, oder er zählt Körner, aber das Panel hat keine Geschwindigkeit, um sie zu beurteilen. |
| Graue Schraffur über der ganzen Säule | Die Sektion ist für die Fahrgasse abgeschaltet, oder ihre Produktausbringung ist ausgeschaltet. |
| Grüne Schraffur unten in einer grauen Säule | Ein kleiner Durchfluss in einer abgeschalteten Sektion, noch innerhalb des Tolerierten. |
| Rote Schraffur in einer grauen Säule | Die abgeschaltete Sektion sät in die Fahrgasse. |

## Die vier Zustände einer Sektion {#the-four-states-of-a-section}

Jede Sektion hat zwei voneinander unabhängige Schalter: ob das Panel sie **überwacht** (Überwachung) und ob die Maschine durch sie **ausbringt** (Produktausbringung).

| **Überwachung** | **Ausbringung** | **Bedeutung** | **Was die Säule zeigt** |
| --- | --- | --- | --- |
| ein | ein | Normale Arbeit. | Die normale Säule. |
| ein | aus | Fahrgasse: Die Reihe sät absichtlich nicht, und das Panel weiß es. | Graue Schraffur. |
| aus | ein | Die Reihe sät, aber niemand kontrolliert sie. | Weiß mit **!** |
| aus | aus | Die Sektion ist ganz aus der Arbeit genommen. | Weiß mit **!** |

Die Überwachung wird im Kontextmenü des Sensors geschaltet: [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md). **„Produktausbringung“** ist ein Punkt desselben Menüs auf der Ebene „Agronom“; im Fahrgassenbetrieb schalten die Aktuatoren oder Motoren die Sektionen selbst, und dieser Punkt wird ignoriert.
