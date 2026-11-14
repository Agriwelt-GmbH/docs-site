---
title: Säulenfarben und die vier Zustände einer Sektion
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/section-states.html
---

# Säulenfarben und die vier Zustände einer Sektion

Was jede Farbe und jedes Symbol einer Säule im Sektionsdiagramm bedeutet und die vier Kombinationen von Überwachung und Produktausbringung, in denen eine Sektion sein kann.

Wie das Diagramm aufgebaut ist — Mengenlinie, Marken, Überwachungslinie —, steht unter [Das Sektionsdiagramm](section-diagram.md). Diese Seite listet auf, wie eine einzelne Säule aussehen kann.

## Säulenfarben {#column-colours}

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| Grüne Säule | Die Reihe sät normal. |
| Blaue Säule | Die Reihe sät **mehr**, als die Sollmenge zulässt („Precise“ und „Hybrid“). |
| Gelbe Säule | Die Reihe sät **weniger**, als die Sollmenge zulässt („Precise“ und „Hybrid“). |
| Hintergrund blinkt dunkelrot, keine Säule | Die Reihe sät fast nichts, während die Maschine sät — ein verstopftes oder leeres Saatrohr. |
| Weiße Säule mit **!** | Die Überwachung dieser Sektion ist ausgeschaltet. Nichts an ihr wird überwacht. |
| Rotes **×** | Der Sensor antwortet nicht. |
| Rotes **?**, Säule blinkt rot | Ein Gerät falscher Art antwortet anstelle dieses Sensors. |
| Gelbes **?** | Der Sensor hat gerade seine Einstellungen erhalten, oder er zählt Körner, aber das Panel hat keine Geschwindigkeit, um sie zu beurteilen. |
| Graue Schraffur über der ganzen Säule | Die Sektion ist für die Fahrgasse abgeschaltet, oder ihre Produktausbringung ist ausgeschaltet. |
| Grüne Schraffur am Fuß einer grauen Säule | Ein kleiner Durchfluss in einer abgeschalteten Sektion, noch innerhalb dessen, was toleriert wird. |
| Rote Schraffur in einer grauen Säule | Die abgeschaltete Sektion sät in die Fahrgasse. |

![Ein Diagramm mit einer Sektion außerhalb der Überwachung, einem stummen Sensor und einer abgeschalteten Sektion.](figures/five-diagram-states)

## Die vier Zustände einer Sektion {#the-four-states-of-a-section}

Jede Sektion hat zwei unabhängige Schalter: ob das Panel sie **überwacht** (Überwachung) und ob die Maschine durch sie **ausbringt** (Produktausbringung).

| **Überwachung** | **Ausbringung** | **Was es bedeutet** | **Was die Säule zeigt** |
| --- | --- | --- | --- |
| an | an | Normale Arbeit. | Die normale Säule. |
| an | aus | Die Reihe sät absichtlich nicht — eine Fahrgassenreihe — und das Panel weiß es. | Graue Schraffur. |
| aus | an | Die Reihe sät, aber niemand prüft sie. | Weiß mit **!** |
| aus | aus | Die Sektion ist ganz aus der Arbeit genommen. | Weiß mit **!** |

Beide Schalter sind Einträge im Kontextmenü des Sensors — berühren und halten Sie die Säule der Sektion:

- **„Disable control“** (Überwachung ausschalten) / **„Enable control“** (Überwachung einschalten), auf der Fahrerebene. Siehe [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md).
- **„Product application“** (Produktausbringung), auf der Agronomenebene. Siehe [Zugriffsebenen](access-levels.md).

> **WICHTIG**
>
> **Eine weiße Säule mit ! sieht ruhig aus, ist aber blind.** Was immer in dieser Reihe geschieht — ein verstopftes Saatrohr, ein defekter Sensor —, das Panel meldet nichts.
