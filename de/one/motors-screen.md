---
title: Der Bildschirm Motoren
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/motors-screen.html
---

# Der Bildschirm Motoren

Die Elektromotoren der Dosierer und die Fahrgassen-Aktuatoren der Maschine, je eine Kachel — wie Sie eine Kachel lesen und wie Sie zu den Einstellungen eines Motors gelangen.

Der Bildschirm Motoren zeigt die Elektromotoren der Dosierer der Maschine, je eine Kachel, und die Fahrgassen-Aktuatoren, falls die Maschine welche hat. Sehen Sie hier nach, wenn eine Reihe nicht mehr sät und Sie wissen möchten, ob der Motor der Grund ist.

Er ist an jeder Maschine vorhanden, deren Profil **mindestens einen Elektromotor oder einen Fahrgassen-Aktuator** enthält. Erreichen Sie ihn mit **„HOME“** vom Bildschirm Statistik aus; verlassen Sie ihn mit **„HOME“** oder **„BACK“**.

::: {.anatomy fig="motors"}
1. **Motor 1, STOP.** Gelb — der Motor ist betriebsbereit, aber die Produktausbringung läuft nicht.
2. **Wert von Motor 1.** Die Drehzahl der angetriebenen Welle in U/min oder, im Modus „Einzelkorn“, Körner je Meter.
3. **Motor 2, rotes ×.** Keine Verbindung zu diesem Motor.
4. **XXX.** Kein Wert, weil der Motor nicht antwortet.

Der Bildschirm Motoren einer Maschine mit zwei Dosiermotoren und ohne Fahrgassen-Aktuatoren.
:::

## Eine Kachel lesen {#reading-a-tile}

Die Farbe des Symbols ist der Zustand. Der Wert daneben ist die Drehzahl der angetriebenen Welle in U/min — oder, im Überwachungsmodus **„Einzelkorn“**, die Körner je Meter, die der Kornsensor dieser Reihe gemessen hat.

| **Symbol** | **Wert** | **Zustand** |
| --- | --- | --- |
| Motor, **grün** | die Zahl | Normal. Der Motor wird überwacht und angesteuert. |
| **STOP**, gelb | die Zahl | Der Motor ist betriebsbereit, aber die **Produktausbringung ist ausgeschaltet**. Mit ihm ist nichts falsch — das System bringt nur gerade nichts aus. |
| Motor, **rot** | die Zahl | Der Motor befindet sich im Alarmzustand. Den Grund nennt der Alarm: [Alarme des Motor-Controllers](alarms-motor-controller.md). |
| **×**, rot | **XXX** | **Keine Verbindung.** Prüfen Sie zuerst Kabel und Stecker. |
| **?**, rot | **???** | Das Panel kann nicht erkennen, was dieses Gerät ist: Ein Gerät anderer Art antwortet an seiner Stelle, oder der Controller ist im Modus für die Firmware-Aktualisierung geblieben. |
| **!**, umrandet | **!!!** | Der Motor wurde vom Fahrer **aus der Überwachung genommen**. Er wird weder angesteuert noch überwacht. |

> **HINWEIS**
>
> **Gelb ist keine Störung.** Ein Bildschirm voller gelber STOP-Zeichen bedeutet, dass die Ausbringung aus ist — am Vorgewende oder vom Startbildschirm aus von Hand gesperrt. Rot ist eine Störung; gelb ist ein Zustand, den Sie gewählt haben.

## Fahrgassen-Aktuatoren {#tramline-actuators}

| **Symbol des Aktuators** | **Zustand** |
| --- | --- |
| Eingezogen oder ausgefahren, **grün** | Der Aktuator hat seine Stellung erreicht. |
| Eingezogen oder ausgefahren, **gelb** | Der Aktuator fährt in diese Stellung. |
| Im Wechsel zwischen ein und aus, **gelb** | Das Panel kann die Stellung des Aktuators nicht erkennen. |
| **Rot** blinkend | Der Aktuator befindet sich im Alarmzustand: [Fahrgassen-Alarme](alarms-tramline.md). |
| **Rotes ×** oder **?** blinkend | Keine Verbindung oder ein Gerät der falschen Art. |
| **Weiß** blinkend | Der Aktuator wurde aus der Überwachung genommen. |

## Arbeiten mit dem Bildschirm {#working-with-the-screen}

| **Was Sie möchten** | **Taste** | **Oder Geste** |
| --- | --- | --- |
| Die Einstellungen eines Motors | — | Seine Kachel berühren und halten |
| Zurück zum Bildschirm Statistik | — | Nach rechts wischen |
| Zurück zum Startbildschirm | **„HOME“** oder **„BACK“** | Nach links wischen |

Der lange Druck öffnet das Kontextmenü des Motors, den Sie gedrückt haben. Dasselbe Menü erreichen Sie vom Startbildschirm aus, aber hier sehen Sie alle Motoren der Maschine auf einmal und können den wählen, der sich falsch verhält. Siehe [Einstellungen der Dosiermotoren](dispenser-motor.md).
