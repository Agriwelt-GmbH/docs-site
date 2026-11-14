---
title: Das Maschinenprofil einrichten
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/machine-profile.html
---

# Das Maschinenprofil einrichten

Sagen Sie der App, wie viele Saatreihen und Düngersensoren die Maschine hat und — für Hybrid und Einzelkorn — wie breit sie arbeitet; die App schreibt das Profil selbst in das Gateway.

Das Maschinenprofil sagt dem Gateway, welche Sensoren es lesen soll, und der App, wie sie diese zeichnen soll: wie viele Saatreihen, wie viele Düngersensoren und für die Modi Hybrid und Einzelkorn die Arbeitsbreite. Es wird im Gateway gespeichert, ein anderes Tablet am selben Gateway liest also dasselbe Profil.

::: steps
1. Öffnen Sie **„Einstellungen“** › **„Maschine“**. Oben öffnet sich der Abschnitt **„Maschinenprofil“**.

2. Stellen Sie **„Reihen“** — die Anzahl der Saatreihen — mit **−** / **+** ein.

3. Stellen Sie **„Düngersensoren“** ein — die Anzahl der Düngerreihen mit Sensor — oder **„keine“**.

4. Warten Sie einen Moment. Es gibt keine Speichern-Taste: Nach einer kurzen Pause schreibt die App das Profil in das Gateway. Die Statuszeile unter den Zahlen sagt **„schreibe Profil in die Brücke…“** und danach **„Profil in die Brücke geschrieben um“** mit der Uhrzeit.

5. Vergleichen Sie **„Sensoren derzeit am Bus“** mit dem, was an der Sämaschine ist: Die Zahl zählt jedes Gerät, das an der Sensorleitung antwortet.

6. **Nur Hybrid und Einzelkorn:** Stellen Sie **„Breite, cm“** ein — die Arbeitsbreite. **„Reihenabstand“** darunter rechnet die App aus: die Breite geteilt durch die Reihen der Gruppe.
:::

## Wenn das Profil nicht geschrieben wird {#when-the-profile-is-not-written}

| Die Statuszeile sagt | Was es bedeutet | Was zu tun ist |
| --- | --- | --- |
| **„Brücke beschäftigt: Aussaat läuft“** | Das Gateway nimmt kein neues Profil an, solange Saatgut fließt. | Halten Sie die Sämaschine an und ändern Sie die Zahl erneut. |
| **„zu viele Reihen für die Brücke (bis“** … | Das Profil ist größer, als das Gateway annimmt. | Verringern Sie die Reihen oder Geräte. Siehe [Code 902](codes-9-setup.md#c902). |
| Jede andere Meldung mit einem Code | Das Gateway hat das Profil abgelehnt. | Siehe [9xx · Setup-Antworten des Gateways](codes-9-setup.md). |

## Breite und Statistik {#width-and-statistics}

Die Fläche und der Reihenabstand ergeben sich aus der Breite. Hat der aktive Schlag bereits Statistik, fragt eine neue Breite zuerst nach: **„Statistik muss gelöscht werden!“** — **„Ja“** beginnt die Statistik des aktiven Schlags bei null, **„Nein“** behält die alte Breite.

Die Düngerreihen folgen auf die Saatreihen. Sind Düngersensoren im Profil, zeigt der Reihenbildschirm zwei Bänder: oben Saat, darunter Dünger. Siehe [Der Reihenbildschirm](rows-screen.md).

> **SIEHE AUCH**
>
> [Die Sensoren nummerieren](sensor-numbering.md) · [Einstellungen — Maschine](settings-machine.md)
