---
title: So arbeiten die Alarme
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/how-alarms-work.html
---

# So arbeiten die Alarme

Wann der Hectare One einen Alarm auslöst, was das Alarmfenster zeigt, wie Sie es schließen und wie Sie die Alarmthemen dieser Anleitung benutzen.

Ein Alarm ist ein Fenster, das sich mit einem Warnton über den Arbeitsbildschirm legt. Es teilt Ihnen mit, dass ein Gerät – ein Sensor, ein Aktuator, ein Motorcontroller – oder das System als Ganzes eine Störung festgestellt hat. Die Alarmthemen dieses Abschnitts sind nach dem Gerät geordnet, das den Alarm auslöst. **Suchen Sie nach den Wörtern, die Sie auf dem Bildschirm sehen**, nicht nach einer Beschreibung davon.

## Wann das Panel einen Alarm auslöst {#when-the-panel-raises-an-alarm}

Eine Störung wird nicht in dem Moment gemeldet, in dem sie auftritt. **Die Bedingung muss ununterbrochen für die bei „Alarmverzögerung“ eingestellte Zeit bestehen, bevor sich das Alarmfenster öffnet.**

| Einstellung | Wert |
| --- | --- |
| Wo sie eingestellt wird | Menü **„Einstellungen“**, Punkt **„Alarmverzögerung“**. Verfügbar auf der Zugriffsebene **„Fahrer“**. Siehe [Das Menü Einstellungen](settings-menu.md). |
| Bereich | **2 bis 20 Sekunden**, in Schritten von 1 Sekunde. |
| Standard | **3 Sekunden.** Ein Wert außerhalb des Bereichs wird von selbst auf den Standardwert zurückgesetzt. |

Eine kurze Verzögerung lässt das Panel schnell reagieren, aber auch auf kurze Störungen – einen einzelnen Stoß, eine kurze Lücke im Kornfluss. Eine lange Verzögerung hält den Bildschirm ruhig, doch eine echte Störung kann bis zu zwanzig Sekunden bestehen, bevor Sie davon erfahren.

> **TIPP**
>
> **Alarmiert das System auf unebenem Feld zu oft, erhöhen Sie zuerst die „Alarmverzögerung“.** Ändern Sie die Sensoreinstellungen erst, wenn eine längere Verzögerung nicht hilft.

Zwei Fälle folgen der Verzögerung nicht:

- **Der Verbindungsverlust** wird in Abfragen gezählt, nicht in Sekunden. **„Verbindung weg“** erscheint nach **drei aufeinanderfolgenden Abfragen** ohne Antwort des Geräts.
- **Unmittelbar nach der Einrichtung eines Sensors** werden dessen Alarme für eine kurze Sperrzeit nicht verarbeitet. Das verhindert eine Flut von Alarmen, während ein Gerät konfiguriert wird.

## Das Alarmfenster {#the-alarm-window}

::: {.anatomy fig="alarm-window"}
1. **„ALARM!“** – der Titel jedes Alarmfensters, gleich welche Störung vorliegt. Er ist nicht die Störung selbst.
2. **Der Alarmtext** – die Störung. Schlagen Sie sie unter diesem Text in den Alarmthemen nach.
3. **Die Art des Geräts**, das den Alarm auslöst – hier ein Behältersensor. Derselbe Text kann von verschiedenen Geräten kommen; diese Zeile sagt Ihnen, von welchem.
4. **Die Nummer des Geräts** – hier Behälter 2. Lösen mehrere Geräte derselben Art denselben Alarm aus, teilen sie sich ein Fenster und werden zusammen aufgeführt, zum Beispiel **#3-5,8**.
5. **„Schließen“** – schließt diesen Alarm. [Unten](#closing-an-alarm).

Das Alarmfenster eines leeren Behälters.
:::

Die Alarme des Panels selbst tragen in ihrem Text statt einer Gerätezeile die Zeile **„HOME - Meldung schließen“**. Die Alarme der Sensoren nicht.

## Einen Alarm schließen {#closing-an-alarm}

| Was Sie tun | Was geschieht |
| --- | --- |
| Berühren Sie im Fenster die rote Taste **„Schließen“** oder drücken Sie **„HOME“** | Dieser Alarm schließt sich. Warten weitere Alarme, öffnet sich der nächste. Solange das Fenster offen ist, ist **„HOME“** die einzige beleuchtete Taste. |
| Halten Sie **„HOME“** gedrückt | Alle offenen Alarmfenster schließen sich auf einmal, und das Panel kehrt zum Startbildschirm zurück. |

Das Schließen eines Fensters behebt die Störung nicht. Die noch aktiven Alarme eines Sensors stehen auf seinem Statusbildschirm – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md).

## Auf den höheren Zugriffsebenen sind Alarme verborgen {#alarms-are-hidden-at-the-higher-access-levels}

Auf den Ebenen **„Agronom“** und **„Service“** werden keine Alarmfenster angezeigt. Sie gehen nicht verloren: Sie warten. Kehren Sie zu **„Fahrer“** zurück, verwirft das Panel die Alarme, die inzwischen verschwunden sind, und zeigt die, die noch zutreffen, nacheinander. Siehe [Zugriffsebenen](access-levels.md).

## Keine Alarme: LANGSAMER und SCHNELLER {#not-alarms-slower-and-faster}

Verlässt die Fahrgeschwindigkeit den zulässigen Bereich, öffnet sich kein Alarmfenster. Stattdessen zeigt der Startbildschirm **„LANGSAMER“** oder **„SCHNELLER“** und zeigt es weiter an, während Sie die Geschwindigkeit korrigieren. Siehe [Anzeigen des Startbildschirms](indicators.md).

## Wie die Alarmthemen aufgebaut sind {#how-the-alarm-topics-are-written}

Jeder Alarm hat eine eigene Überschrift mit dem Text genau wie auf dem Bildschirm; steht die Meldung auf dem Panel in zwei Zeilen, werden beide Zeilen angegeben. Darunter: was das Panel festgestellt hat und was Sie prüfen sollten, in der Reihenfolge, in der ein Mechaniker prüft – zuerst die schnellen Prüfungen am Panel, dann die Maschine, dann der Sensor selbst.

> **HINWEIS**
>
> Beseitigen die Prüfungen die Störung nicht, wenden Sie sich an den Service-Support. Die Kontaktdaten stehen auf der Rückseite der gedruckten Anleitung.
