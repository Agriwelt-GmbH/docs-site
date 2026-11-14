---
title: Sollmenge oder Alarmschwelle ändern
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/set-the-target-rate.html
---

# Sollmenge oder Alarmschwelle ändern

Die Alarmschwelle, die Sollmenge in Körnern je Meter oder die Produktmenge in kg/ha anheben oder absenken — auf dem Startbildschirm oder dem Bildschirm Sollmengen.

Jedes Diagramm und jedes nach Masse ausgebrachte Produkt hat ein **Mengenfeld**: oben der gemessene Wert, darunter der eingestellte. Was der eingestellte Wert ist, hängt vom Modus ab — siehe [Das Sektionsdiagramm](section-diagram.md):

| **Modus** | **Der eingestellte Wert** | **Ein Schritt** |
| --- | --- | --- |
| **„Durchfluss“** | Alarmschwelle, Körner je Sekunde | 1 K/s |
| **„Hybrid“** | Sollmenge, Körner je Meter | 1 K/m |
| **„Einzelkorn“** | Sollmenge, Körner je Meter | 0,1 K/m (0,5 bis 50,0) |
| Produkt nach Masse | Sollmenge, kg/ha | 0,1 kg/ha bis 50,0, darüber 1 kg/ha (1,0 bis 999,0) |
| Flüssigdünger | Sollmenge, L/ha | 0,1 L/ha bis 50,0, darüber 1 L/ha |

## Auf dem Startbildschirm {#on-the-home-screen}

::: steps
1. Drücken Sie einmal **„PLUS“** oder **„MINUS“**. Das zuletzt benutzte Mengenfeld wird gewählt und blinkt; es hat sich noch nichts geändert.

   ![Die Sollmenge eines Produkts in kg/ha auf dem Startbildschirm ändern.](figures/rate-mass-change)

2. Hat die Maschine mehr als ein Mengenfeld — Saatgut und Dünger, Produkte nach Masse —, drücken Sie **„DOWN“** oder **„UP“**, um zum nächsten oder zum vorigen zu wechseln.

3. Drücken Sie **„PLUS“**, um den Wert zu erhöhen, oder **„MINUS“**, um ihn zu senken, einen Schritt je Berührung. Gedrückt halten wiederholt die Taste nicht.

4. Drücken Sie **„BACK“**, um abzuschließen, oder warten Sie einfach: Fünf Sekunden nach der letzten Berührung hört das Feld auf zu blinken. Der neue Wert gilt.
:::

Im Modus **„Einzelkorn“** zeigt das Panel, während Sie die Sollmenge ändern, dieselbe Menge auch als Aussaatdichte in **Tsd/ha** und als Abstand zwischen den Körnern in Zentimetern.

## Auf dem Bildschirm Sollmengen {#on-the-rate-control-screen}

::: steps
1. Drücken Sie **„PLUS“** oder **„MINUS“**. Der zuletzt gewählte Sollwert wird hervorgehoben — dunkel blaugrüner Hintergrund, gelber Wert; nach dem Einschalten **„Produkt 1“**. Der erste Druck ändert nichts.

   ![Der Bildschirm Sollmengen mit zur Änderung gewähltem Produkt 2.](figures/mini-rate-edit)

2. Wechseln Sie mit **„UP“** und **„DOWN“** zum gewünschten Sollwert.

3. Stellen Sie den Wert mit **„PLUS“** und **„MINUS“** ein.

4. Drücken Sie **„BACK“**. Die Hervorhebung verschwindet; die Anzeigen zeigen wieder die ausgebrachten Mengen.
:::

Kommt man von oberhalb von 50,0 herunter, hält die Produkt- oder Flüssigmenge genau bei 50,0 an; die nächste Berührung führt darunter, in Schritten von 0,1. Die Sollmenge für Saatgut im Modus **„Einzelkorn“** ist eine Zahl für alle Kornsensoren: Der Startbildschirm und der Bildschirm Sollmengen ändern denselben Wert, und es gibt dafür keinen Menüpunkt.

Der Wert wird etwa anderthalb Sekunden nach der letzten Änderung von selbst gespeichert; warten Sie so lange, bevor Sie ausschalten.

> **WICHTIG**
>
> **Säulen unter der Linie werden nicht überwacht.** Wird der Wert weit über das hinaus eingestellt, was die Maschine liefert, sinken die Säulen unter die Linie, und das Panel zeigt **„NICHT ÜBERWACHT“**. Lassen Sie das Panel an einer Drillmaschine das Niveau selbst finden: [Alarmschwelle einstellen](set-the-alarm-level.md).
