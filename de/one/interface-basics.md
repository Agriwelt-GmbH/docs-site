---
title: Menüs, Kontextmenüs, Ziffernblock und Fenster
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/interface-basics.html
---

# Menüs, Kontextmenüs, Ziffernblock und Fenster

Die fünf Dinge, über die am Panel alles geschieht — Arbeitsbildschirme, Hauptmenü, Kontextmenü eines Geräts, Ziffernblock und die Fenster, die fragen oder etwas mitteilen.

Alles am Panel geschieht über fünf Dinge: die **Arbeitsbildschirme**, das **Hauptmenü**, das **Kontextmenü** eines Geräts, den **Ziffernblock** und die **Fenster**, die etwas fragen oder etwas mitteilen. Die Arbeitsbildschirme haben ein eigenes Thema: [Arbeitsbildschirme](working-screens.md).

## Das Hauptmenü {#the-main-menu}

Drücken Sie auf dem Startbildschirm **„MENU“** oder tippen Sie mit zwei Fingern auf den Bildschirm. Das Hauptmenü öffnet sich über dem Startbildschirm.

::: {.anatomy fig="menu-main"}
1. **Gewählter Punkt.** Schwarze Schrift auf hellblauem Band. **„UP“** und **„DOWN“** bewegen das Band; **„MENU“** öffnet den Punkt. Hier **„Scheiben mit Korn füllen“** — siehe [Scheiben füllen](fill-the-disks.md).
2. **„Einstellungen“.** Die Einstellungen des Systems und der Maschine. Siehe [Das Menü Einstellungen](settings-menu.md).
3. **Pfeilspitze.** Der Punkt öffnet ein weiteres Menü.
4. **„Service“.** Punkte für Inbetriebnahme und Service. Siehe [Servicemenü](service-menu.md).
5. **„Information“.** Öffnet den Bildschirm mit den Informationen über das System.

Das Hauptmenü eines Einzelkornsägeräts mit Dosiermotoren im Modus „Einzelkorn“ im Stillstand.
:::

In jedem Menü lesen Sie einen Punkt an dem, was rechts von ihm steht:

| **Was Sie rechts sehen** | **Was es bedeutet** |
| --- | --- |
| Eine Pfeilspitze | Der Punkt öffnet ein weiteres Menü. Drücken Sie **„MENU“**. |
| Ein Wert zwischen **-** und **+** | Ändern Sie ihn mit **„PLUS“** und **„MINUS“**, gleich dort in der Liste. |
| Ein Wert zwischen **-[** und **]+** | **„PLUS“** oder **„MINUS“** öffnet den Ziffernblock. |
| Nichts | Der Punkt führt eine Aktion aus. Drücken Sie **„MENU“**. |

![Eine Menüseite mit Werten: Das Jahr wird auf dem Ziffernblock bearbeitet, die übrigen Werte in der Liste.](figures/menu-datetime)

**„BACK“** verlässt ein Menü und führt eine Ebene nach oben.

## Das Kontextmenü eines Geräts {#the-context-menu-of-a-device}

Jeder Sensor, jeder Motor und jede Anzeige auf dem Startbildschirm hat ein eigenes Menü. **Berühren und halten Sie das Gerät** — sein Symbol oder seine Säule im Diagramm —, und sein Kontextmenü öffnet sich. Auf dem Bildschirm Motoren und auf dem zweiten Startbildschirm funktioniert dasselbe bei einer Motorkachel.

![Das Kontextmenü eines Kornsensors: Information, Überwachung ein oder aus und die Parameter des Sensors.](figures/one-ctx-seed-sensor)

Der erste Punkt, **„Information“**, öffnet den [Statusbildschirm](sensor-status-screen.md) des Geräts. Der zweite schaltet seine Überwachung um: **„Überwachung aus“** oder **„Überwachung ein“** — siehe [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md). Darunter stehen die Parameter; welche Sie sehen, hängt von der Zugriffsebene ab ([Zugriffsebenen](access-levels.md)).

## Zahlen eingeben {#entering-numbers}

Steht ein Wert zwischen eckigen Klammern, öffnet das Ändern den Ziffernblock.

::: {.anatomy fig="menu-keypad"}
1. **Name des Parameters.** Hier **„Breite, cm“**.
2. **Wert.** Was Sie bisher eingegeben haben.
3. **Rücktaste.** Löscht die letzte Ziffer. Berühren und halten Sie sie, um den ganzen Wert zu löschen.
4. **Ziffern.** **1** bis **9** und **0**.
5. **Dezimalpunkt und Minus.** Eine Berührung fügt den Punkt ein; Berühren und Halten schaltet das Minuszeichen um, wo ein negativer Wert erlaubt ist.
6. **Null.**
7. **„OK“.** Übernimmt den Wert. **„MENU“** bewirkt dasselbe.

Der Ziffernblock. **„BACK“** oder eine Berührung außerhalb des Blocks verlässt ihn, ohne etwas zu ändern.
:::

Ein Wert außerhalb des zulässigen Bereichs wird nicht wie eingegeben übernommen: Das Panel setzt stattdessen die nächstgelegene Grenze.

## Fenster, die fragen, und Fenster, die mitteilen {#windows-that-ask-and-windows-that-tell}

Jedes Fenster hat dieselbe Form: ein Kasten in der Bildschirmmitte, ein **farbiger Streifen** an seinem oberen Rand mit einem Wort darin, darunter die Meldung und — falls vorhanden — unten die Tasten. **Lesen Sie zuerst den Streifen:**

| **Streifen** | **Was für ein Fenster** | **Wie es sich schließt** |
| --- | --- | --- |
| **Gelb, „Bestätigung“** | Das Panel fragt. Es geschieht nichts, bis Sie antworten. | Berühren Sie **„Ja“** (grün) oder **„Nein“** (rot). **„PLUS“** antwortet mit Ja, **„MINUS“** mit Nein, **„BACK“** bricht ab. |
| **Blau, „Information“** | Das Panel teilt mit, was geschehen ist. | Manche schließen sich von selbst; andere schließen mit einer Berührung, **„PLUS“** oder **„BACK“**. |
| **Rot, „ALARM!“** | Ein Alarm. | Siehe unten. |

![Ein Bestätigungsfenster: der gelbe Streifen, die Frage, Ja und Nein.](figures/question-zero-readings)

Das folgende Informationsfenster schließt sich von selbst.

![Ein Informationsfenster: der blaue Streifen, das Wort Information, die Meldung Fertig.](figures/info-done)

## Alarmfenster {#alarm-windows}

Ein Alarmfenster sagt, **was geschehen ist**, **an welcher Art von Gerät** und **an welchen Geräten** — ihre Nummern werden aufgeführt, wenn mehrere gleiche Sensoren dieselbe Störung gleichzeitig melden. Solange es offen ist, piept das Panel.

| **Was Sie tun** | **Was geschieht** |
| --- | --- |
| **„Schließen“** im Fenster berühren oder **„HOME“** drücken | Dieser Alarm schließt sich. Der nächste in der Warteschlange erscheint. |
| **„HOME“** gedrückt halten | Das Fenster schließt sich, und das Panel kehrt zum Startbildschirm zurück. |

Die übrigen sechs Tasten sind dunkel und bewirken nichts, solange ein Alarmfenster offen ist.

> **WICHTIG**
>
> **Das Schließen des Fensters beendet den Ton, nicht die Störung.** Alarme kommen einzeln und werden einzeln geschlossen. Was jeder Alarm bedeutet, steht unter [So arbeiten Alarme](how-alarms-work.md).
