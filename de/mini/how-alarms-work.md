---
title: So arbeiten die Alarme
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/how-alarms-work.html
---

# So arbeiten die Alarme

Wann der Hectare Mini einen Alarm auslöst, was das Alarmfenster zeigt, wie Sie es schließen, welche Meldungen keine Alarmfenster sind und wie die Alarmthemen dieser Anleitung geordnet sind.

Ein Alarm ist ein Fenster, das sich mit einem Alarmsignal über den Arbeitsbildschirm legt. Es teilt Ihnen mit, dass ein Gerät – ein Sensor, ein Motor, ein Aktuator – oder das System als Ganzes eine Störung festgestellt hat. Die Alarmthemen dieses Abschnitts sind nach Geräten geordnet. **Suchen Sie nach den Wörtern, die Sie auf dem Bildschirm sehen.**

## Wann das Panel einen Alarm auslöst {#when-the-panel-raises-an-alarm}

Eine Störung wird nicht in dem Moment gemeldet, in dem sie auftritt. **Die Bedingung muss ununterbrochen für die bei „Alarmverzögerung“ eingestellte Zeit bestehen, bevor sich das Fenster öffnet.**

| **Einstellung** | **Wert** |
| --- | --- |
| Wo | **„Einstell.“** → **„Alarmverzögerung“**, Ebene **„Fahrer“** – [Das Menü Einstellungen](settings-menu.md) |
| Bereich | 2 bis 20 Sekunden, in Schritten von 1 Sekunde |
| Werkseinstellung | 3 Sekunden. Ein gespeicherter Wert außerhalb des Bereichs wird von selbst auf 3 zurückgesetzt. |

Eine kurze Verzögerung reagiert schnell, aber auch auf einen einzelnen Stoß oder eine kurze Lücke im Kornfluss. Eine lange Verzögerung hält den Bildschirm ruhig, doch eine echte Störung kann bis zu zwanzig Sekunden laufen, bevor Sie davon erfahren.

> **TIPP**
>
> **Alarmiert das System auf unebenem Feld zu oft, erhöhen Sie zuerst „Alarmverzögerung“.** Ändern Sie die Sensoreinstellungen erst, wenn eine längere Verzögerung nicht hilft.

Zwei Fälle folgen der Verzögerung nicht:

- **Ein Verbindungsverlust** wird in Abfragen gezählt: **„Verbindung weg“** erscheint nach **drei aufeinanderfolgenden Abfragen** ohne Antwort.
- **Unmittelbar nachdem ein Sensor neue Einstellungen erhalten hat**, werden seine Alarme kurz zurückgehalten, damit das Konfigurieren eines Geräts keine Alarmflut auslöst.

## Das Alarmfenster {#the-alarm-window}

::: {.anatomy fig="alarm-window"}
1. **„ALARM!“** – der rote Titel jedes Alarmfensters, gleich welche Störung vorliegt.
2. **„HOME - Meldung schließen“** – der Hinweis, wie es sich schließen lässt.
3. **Der Alarmtext** – die Störung. Schlagen Sie sie unter diesem Text in den Alarmthemen nach.
4. **Die Art des Geräts**, hier der Drucksensor. Derselbe Text kann von verschiedenen Geräten kommen; diese Zeile sagt Ihnen, von welchem.
5. **Die Nummer des Geräts**, hier die Drucksensoren 1 bis 3. Melden mehrere Geräte einer Art dieselbe Störung, teilen sie sich ein Fenster und werden zusammen aufgeführt, zum Beispiel **#3-5,8**.
6. **„Schließen“** – schließt diesen Alarm.

Das Alarmfenster dreier Drucksensoren, die nicht antworten.
:::

Die Alarme des Systems als Ganzes – zum Beispiel zur Menge eines Produkts – haben keine Gerätezeile.

## Einen Alarm schließen {#closing-an-alarm}

| **Was Sie tun** | **Was geschieht** |
| --- | --- |
| Drücken Sie **„HOME“** oder berühren Sie **„Schließen“** | Dieser Alarm schließt sich. Warten weitere Alarme, öffnet sich der nächste. Die anderen Tasten bewirken im Fenster nichts. |
| Halten Sie **„HOME“** gedrückt | Das Fenster schließt sich, und das Panel kehrt zum Startbildschirm zurück. |

Solange das Fenster offen ist, gibt das Panel das Alarmsignal aus und leuchtet seine Alarmanzeige. **Das Schließen eines Fensters behebt die Störung nicht**, und derselbe Alarm kommt erst wieder, nachdem die Störung verschwunden und erneut aufgetreten ist. Die aktiven Alarme eines Sensors bleiben auf seinem Statusbildschirm aufgelistet – [Der Sensor-Statusbildschirm](sensor-status-screen.md).

## Auf den höheren Zugriffsebenen sind Alarme verborgen {#alarms-are-hidden-at-the-higher-access-levels}

Auf den Ebenen **„Agronom“** und **„Service“** werden keine Alarmfenster angezeigt. Sie gehen nicht verloren: Kehren Sie zu **„Fahrer“** zurück, verwirft das Panel die Alarme, die sich erledigt haben, und zeigt die noch zutreffenden. Siehe [Zugriffsebenen](access-levels.md#what-happens-to-the-alarms-while-the-level-is-high) und [Benutzer ist Agronom](alarms-access-level.md).

## Keine Alarmfenster {#not-alarm-windows}

| **Meldung** | **Wo** | **Thema** |
| --- | --- | --- |
| **„LANGSAMER“**, **„SCHNELLER“** | anstelle des Geschwindigkeitswertes | [Alarme des Geschwindigkeitssensors](alarms-speed-sensor.md) |
| **„NICHT ÜBERWACHT“** | auf dem Saatdiagramm | [Aussaatalarme](alarms-seeding.md#not-under-control) |

## Die Alarmthemen {#the-alarm-topics}

[Beliebiges Gerät](alarms-any-device.md) · [Geschwindigkeitssensor](alarms-speed-sensor.md) · [Aussaat](alarms-seeding.md) · [Zustand des Kornsensors](alarms-sensor-state.md) · [Gebläse und Dosierwelle](alarms-rotation.md) · [Behälter](alarms-hopper.md) · [Druck](alarms-pressure.md) · [Motor](alarms-engine.md) · [Dosierung nach Gewicht](alarms-dosing-by-weight.md) · [Zugriffsebene](alarms-access-level.md) · [Fahrgasse](alarms-tramline.md) · [Dosierermotoren](alarms-electric-motors.md)

Jeder Alarm hat eine eigene Überschrift mit dem Text genau wie auf dem Bildschirm. Darunter: was das Panel festgestellt hat und was Sie prüfen sollten, in der Reihenfolge, in der ein Mechaniker prüft – zuerst die schnellen Prüfungen am Panel, dann die Maschine, dann der Sensor selbst.

> **HINWEIS**
>
> Beseitigen die Prüfungen die Störung nicht, wenden Sie sich an den Service. Die Kontaktdaten stehen im Datenblatt des Systems.
