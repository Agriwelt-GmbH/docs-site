---
title: Der Reihenbildschirm
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/rows-screen.html
---

# Der Reihenbildschirm

Die wichtigste Arbeitsseite — ein Balken je Reihe, die Überwachungslinie oder die Sollmenge, die Mengenspalte rechts von jedem Band und die Kacheln unten.

**„Reihen“** ist die wichtigste Arbeitsseite und standardmäßig die Startseite. Jede Reihe der Maschine ist ein Balken, der von der unteren Linie aus wächst; seine Höhe ist der Fluss seiner Reihe, seine Farbe ist die Bewertung.

::: {.anatomy fig="app-rows"}
1. **Tonwarnung.** Hier **„Lautstärke aus“**: Ein Alarm wäre nicht zu hören. [Meldungen über dem Bildschirm](screen-messages.md)
2. **Mengenspalte des Saatbandes.** Oben der Istwert des Bandes, darunter der Sollwert (grau), unten die Einheit: **„K/m“** (Körner je Meter, Hybrid und Einzelkorn) oder **„K/s“** (Körner je Sekunde, Durchfluss).
3. **Eine Reihe in der Fahrgasse** — grau schraffiert. Über Reihe 4 ist das Saatgut rot schraffiert: Diese Reihe sät in die Fahrgasse. [Fahrgasse](tramline.md)
4. **Blauer Balken** — die Reihe sät mehr, als die Sollmenge zulässt (Hybrid und Einzelkorn).
5. **Die Sollmengenlinie** quer über jede Spalte, mit den Toleranzlinien darüber und darunter (Hybrid und Einzelkorn). Im Durchfluss steht hier eine einzelne Überwachungslinie.
6. **Grüner Balken** — die Reihe sät innerhalb ihrer Toleranz.
7. **Rote Spalte** — ein Sensor, der seit dem Einschalten nie geantwortet hat, blinkt hellrot. [Balkenfarben](bar-colours.md)
8. **Gelber Balken** — die Reihe sät weniger als erlaubt.
9. **Reihennummern**, unter den Spalten.
10. **Mengenspalte des Düngerbandes**, hier in Körnern je Sekunde.
11. **Düngerband.** Sind Düngersensoren im Profil, stehen die Saatreihen im oberen Band und die Düngerreihen im unteren Band.
12. **Die Kacheln** — Geschwindigkeit, Fläche, Saatstärke und die Geräte der Maschine. [Die Kacheln unten](bottom-tiles.md)

24 Saatreihen im Modus Einzelkorn und 24 Düngerreihen im Modus Durchfluss, am Prüfstand.
:::

Ohne Düngersensoren stehen bis zu 20 Saatreihen in einem Band; mehr stehen in zwei Bändern, die erste Hälfte oben.

## Was Sie auf dieser Seite tun können {#what-you-can-do-on-this-page}

| Um dies zu tun | Gehen Sie so vor |
| --- | --- |
| Die Überwachungslinie (Durchfluss) oder die Sollmenge (Hybrid, Einzelkorn) verschieben | Halten Sie die Ziffern in der Mengenspalte gedrückt und ziehen Sie dann nach oben oder unten. Der Wert ändert sich mit jeweils 12 Punkten Fingerweg (eine kurze Bewegung) um einen Schritt; die Hervorhebung erlischt 5 Sekunden nach der letzten Berührung. Bei Hybrid und Einzelkorn geht die neue Sollmenge an das Gateway, wenn Sie den Finger heben. |
| Das Menü einer Reihe öffnen | Halten Sie einen Balken gedrückt: Eine Lupe nennt die Reihe unter dem Finger; gleiten Sie zur gewünschten Reihe und heben Sie den Finger. Oder tippen Sie auf ein Band: Die acht Reihen um den Finger öffnen sich groß; tippen Sie auf eine. [Das Reihenmenü](row-menu.md) |
| Die Sollmenge durch Eintippen ändern | Tippen Sie auf die Kachel **„Dichte“** oder **„Saatmenge“**. [Die Kacheln unten](bottom-tiles.md) |
| Zu einer anderen Seite gehen | Wischen Sie nach links oder rechts oder tippen Sie auf einen Reiter. [Zurechtfinden in der App](app-navigation.md) |

## Wenn das Band nicht überwacht wird {#when-the-band-is-not-under-control}

Die Überwachung beginnt, wenn genügend Reihen 3 Sekunden hintereinander innerhalb der Norm säen — der Anteil wird bei **„Anteil säender Reihen“** eingestellt. Fließt Saatgut, aber zu wenige Reihen liegen innerhalb der Norm, zeigt das Band die blinkende gelbe Kapsel **„NICHT ÜBERWACHT“** mit ihren Reihen, und der Summer ertönt. Es öffnet sich kein Fenster. Prüfen Sie die Überwachungslinie oder die Sollmenge und die aus der Überwachung genommenen Reihen. [Code 207](codes-2-seeding.md#c207)

Solange die Verbindung zum Gateway unterbrochen ist, ist die ganze Seite abgedunkelt: Die Balken zeigen die letzte Messung, nicht die gegenwärtige.

> **SIEHE AUCH**
>
> [Balkenfarben](bar-colours.md) · [Einstellungen „Produkte“](settings-products.md) · [Einstellungen „Überwachung und Alarme“](settings-control-alarms.md)
