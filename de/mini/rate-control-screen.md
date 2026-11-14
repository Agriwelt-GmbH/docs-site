---
title: Der Bildschirm Sollmengen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/rate-control-screen.html
---

# Der Bildschirm Sollmengen

Der Bildschirm für Maschinen, die Produkte mit einer Sollmenge ausbringen — was er zeigt, seine drei Zustände, seine Farben und wie Sie von hier zu den Motoren und ihrer Kalibrierung gelangen.

Auf dem Bildschirm Sollmengen stellen Sie die Sollmengen von Saatgut, Trockendünger, Flüssigdünger und der nach Masse ausgebrachten Produkte ein und beobachten die tatsächlich ausgebrachte Menge. Er zeigt außerdem die Fläche, die Geschwindigkeit, die Behälter, die Gebläse und die Gerätestellung. Er ist der letzte Arbeitsbildschirm: **„HOME“** aus dem Bildschirm Statistik (oder dem Bildschirm Motoren) führt Sie hierher, ein weiteres **„HOME“** zurück zum Startbildschirm. **„BACK“** verlässt diesen Bildschirm nicht.

Er ist der einzige Bildschirm, den sich das Panel über das Ausschalten hinaus merkt: War er geöffnet, öffnet er sich nach dem nächsten Einschalten wieder.

## Was der Bildschirm zeigt {#what-the-screen-shows}

::: {.anatomy fig="mini-rate-screen"}
1. **Fläche**, die auf dem aktiven Feld bearbeitet wurde, in **ha**. Nur mit Geschwindigkeitssensor.
2. **Fahrgeschwindigkeit**, in km/h, mit denselben Meldungen wie auf dem Startbildschirm — siehe [Geschwindigkeit](indicators.md#speed). Nur mit Geschwindigkeitssensor.
3. **Einstellungssymbol.** Berühren und halten Sie es, um das Hauptmenü zu öffnen.
4. **Produktanzeige** — hier Produkt 1, in kg/ha. Eine für jedes Produkt, das mindestens eine überwachte Dosiereinheit nach Masse ausbringt.
5. **Menge.** Die tatsächlich ausgebrachte Menge; solange die Anzeige gewählt ist, der Sollwert.
6. **Arbeitspause** — die Hand. Dunkelgrau: Es wird gearbeitet; gelb blinkend: Ausbringung gesperrt — siehe [Ausbringung von Hand sperren](lock-application-by-hand.md).
7. **Behälter**, einer für jeden Behälter.

Der Bildschirm Sollmengen einer Drillmaschine mit einem nach Masse ausgebrachten Produkt, im Stillstand.
:::

Je nach Maschine erscheinen weitere Anzeigen: die Sollmenge des Flüssigdüngers in L/ha, die Menge von Saatgut und Trockendünger im Modus **„Einzelkorn“**, eine Gebläseanzeige für jedes Gebläse und unten rechts die Gerätestellung. Reicht der Platz nicht für alle Gebläse und Behälter, lässt das Panel zuerst ein Gebläse weg, dann Behälter; der Startbildschirm zeigt sie weiterhin alle.

## Drei Zustände {#three-states}

- **Beobachtung** — nichts ist gewählt. Die Anzeigen zeigen die tatsächlich ausgebrachten Mengen.
- **Mengenänderung** — **„PLUS“** oder **„MINUS“**. Die Mengenanzeigen lassen sich wählen; siehe [Sollmenge ändern](set-the-target-rate.md).
- **Sensoreinstellung** — **„MENU“** gedrückt halten. Das Einstellungssymbol, die Geschwindigkeit, die Gebläse, die Behälter und die Gerätestellung lassen sich wählen; **„PLUS“** und **„MINUS“** nehmen den gewählten Sensor in die Überwachung oder aus ihr, **„MENU“** öffnet sein Kontextmenü — oder, beim Einstellungssymbol, das Hauptmenü.

In beiden Modi bewegen **„UP“** und **„DOWN“** die Auswahl, **„BACK“** verlässt den Modus, und **„HOME“** gedrückt gehalten sperrt oder gibt die Ausbringung frei.

## Farben einer Mengenanzeige {#colours-of-a-rate-indicator}

| **Was Sie sehen** | **Bedeutung** |
| --- | --- |
| Symbol und Einheit grün, Wert weiß | In Ordnung; der Wert ist die ausgebrachte Menge. |
| Symbol, Einheit und Wert rot blinkend | Die ausgebrachte Menge weicht stärker vom Sollwert ab als zulässig. |
| Dunkel blaugrüner Hintergrund, hellblaues Symbol, gelber Wert | Gewählt; der Wert ist der Sollwert. |
| **!!!!**, **XXXX** oder **????** rot blinkend (nur Flüssigdünger) | Nicht überwacht / keine Verbindung / ein Gerät falscher Art. |

Im Modus **„Einzelkorn“** zeigen die Anzeigen für Saatgut und Dünger die Aussaatdichte in **Tsd/ha**, solange sie nicht gewählt sind, und den Sollwert in **K/m**, solange sie gewählt sind.

Die Menge eines Produkts wird über jeweils 10 m Fahrstrecke gemittelt. Sie gilt als abweichend, wenn sie um mehr als **„Produktmenge Fehler,%“** danebenliegt: Der Alarm kommt nach zwei solchen Abschnitten in Folge und endet nach zwei guten Abschnitten. Im Stillstand, bei gesperrter Ausbringung oder ohne überwachte Dosiereinheit zeigt die Anzeige 0,00, und der Alarm ist gelöscht.

## Zu den Motoren und ihrer Kalibrierung {#to-the-motors-and-their-calibration}

Berühren und halten Sie eine Produktanzeige — oder wählen Sie sie im Zustand Mengenänderung und drücken Sie **„MENU“**. Es öffnet sich eine Liste der Motoren dieses Produkts (**„Motor“** oder **„Düng.mot.“** mit der Nummer). Wählen Sie einen Motor und drücken Sie **„MENU“**: **„Kalibrierung, Produkt“**, **„Masse, g“** und **„Umdrehung.“**. Wie Sie kalibrieren: [Motor nach Masse kalibrieren](calibrate-motor-weight.md).

Die Liste gibt es nur für Produkte, deren Motoren im Modus **„Durchfluss“** oder **„Hybrid“** arbeiten. Fährt die Maschine, lehnt das Panel ab: Für eine Kalibrierung muss die Geschwindigkeit null sein. Berühren und Halten der Flüssigdüngeranzeige öffnet das Kontextmenü der Pumpe.
