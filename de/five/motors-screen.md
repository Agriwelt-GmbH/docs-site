---
title: Der Motorenbildschirm
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/motors-screen.html
---

# Der Motorenbildschirm

Die elektrischen Dosierermotoren und die Fahrgassen-Aktuatoren der Maschine, je eine Kachel — wie Sie eine Kachel lesen und die Einstellungen eines Motors erreichen.

Der Motorenbildschirm zeigt die elektrischen Dosierermotoren der Maschine, je eine Kachel, und die Fahrgassen-Aktuatoren, falls die Maschine welche hat. Schauen Sie hierher, wenn eine Reihe aufhört zu säen und Sie wissen wollen, ob der Motor der Grund ist.

Es gibt ihn an jeder Maschine, deren Profil **mindestens einen Elektromotor oder einen Fahrgassen-Aktuator** enthält. Erreichen Sie ihn vom Statistikbildschirm mit einem **langen Wischen nach links**. Verlassen Sie ihn mit einem **langen Wischen nach links** zum Startbildschirm oder einem **langen Wischen nach rechts** zurück zur Statistik.

::: {.anatomy fig="five-motors"}
1. **Motor 1, STOP.** Gelb, blinkend — der Motor ist betriebsbereit, aber die Produktausbringung läuft nicht.
2. **Wert von Motor 1.** Die Drehzahl der angetriebenen Welle in U/min.
3. **Motor 2, rotes ×.** Keine Verbindung zu diesem Motor.
4. **XXX.** Kein Wert, weil der Motor nicht antwortet.

Der Motorenbildschirm einer Maschine mit zwei Dosierermotoren und ohne Fahrgassen-Aktuatoren.
:::

## Eine Kachel lesen {#reading-a-tile}

Die Farbe des Symbols ist der Zustand. Der Wert daneben ist die Drehzahl der angetriebenen Welle in U/min. Auf dem [zweiten Startbildschirm](second-home-screen.md) zeigen dieselben Kacheln im Überwachungsmodus **„Precise“** (Einzelkorn) die Körner je Meter, die der Kornsensor dieser Reihe misst.

| **Symbol** | **Wert** | **Zustand** |
| --- | --- | --- |
| Motor, **grün** | die Zahl | Normal. Der Motor steht unter Überwachung und wird angesteuert. |
| **STOP**, gelb, blinkend im Wechsel mit dem Motor | die Zahl | Der Motor ist betriebsbereit, aber die **Produktausbringung ist ausgeschaltet**. Mit ihm ist nichts falsch — das System bringt nur gerade nicht aus. |
| Motor, **rot** | die Zahl | Der Motor ist im Alarmzustand. Den Grund lesen Sie im Alarm. |
| **×**, rot | **XXX** | **Keine Verbindung.** Prüfen Sie zuerst Kabel und Stecker. |
| **!**, umrandet | **!!!** | Der Motor ist **aus der Überwachung genommen**. Er wird weder angesteuert noch überwacht. |

> **HINWEIS**
>
> **Gelb ist keine Störung.** Ein Bildschirm voller gelber STOP-Zeichen bedeutet, dass die Ausbringung aus ist — am Vorgewende oder von Hand gesperrt. Rot ist eine Störung; Gelb ist ein Zustand, den Sie gewählt haben.

## Fahrgassen-Aktuatoren {#tramline-actuators}

| **Aktuatorsymbol** | **Zustand** |
| --- | --- |
| Eingezogen oder ausgefahren, **grün** | Der Aktuator hat seine Stellung erreicht. |
| Eingezogen oder ausgefahren, **gelb** | Der Aktuator fährt in diese Stellung. |
| Im Wechsel zwischen ein und aus, **gelb** | Das Panel kann die Stellung des Aktuators nicht bestimmen. |
| Blinkend **rot** | Der Aktuator ist im Alarmzustand. |
| Blinkend **rotes ×** oder **?** | Keine Verbindung oder ein Gerät falscher Art. |
| Blinkend **weiß** | Der Aktuator ist aus der Überwachung genommen. |

## Mit dem Bildschirm arbeiten {#working-with-the-screen}

| **Was Sie wollen** | **Geste** |
| --- | --- |
| Die Einstellungen eines Motors oder Aktuators | Seine Kachel berühren und halten |
| Zurück zum Statistikbildschirm | Langes Wischen nach rechts |
| Weiter zum Startbildschirm | Langes Wischen nach links |

Berühren und Halten öffnet das Kontextmenü des Motors, den Sie gedrückt haben. Sein Eintrag **„Information“** zeigt den Zustand des Motors und bei einer Controllerstörung den Code der letzten Störung. Hier sehen Sie alle Motoren der Maschine auf einmal und können den wählen, der sich schlecht verhält.
