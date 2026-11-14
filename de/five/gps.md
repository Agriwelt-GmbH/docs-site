---
title: Der eingebaute GPS-Empfänger
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/gps.html
---

# Der eingebaute GPS-Empfänger

Was das Satellitensymbol auf dem Startbildschirm sagt, wie das Panel die Fahrgeschwindigkeit vom GPS nehmen kann und was bei schlechtem Signal geschieht.

Das Hectare 5 hat einen eigenen GPS-Empfänger. Das Panel nutzt ihn auf zwei Arten: Es zeigt, wie viele Satelliten es empfängt, und — wenn es so eingestellt ist — nimmt es die **Fahrgeschwindigkeit** von den Satelliten statt von einem Radsensor.

## Das Satellitensymbol {#the-satellite-symbol}

An einer Maschine mit einem Geschwindigkeitssensor im Profil steht ein **Satellitensymbol** in der rechten Spalte des Startbildschirms, daneben die Zahl der genutzten Satelliten.

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| Satellit **grau** | Der Empfänger arbeitet, aber die Geschwindigkeit wird nicht von ihm genommen. Die Zahl zeigt, was er empfängt. |
| Satellit **grün** | Die Geschwindigkeit kommt vom GPS; mehr als 6 Satelliten — ein gutes Signal. |
| Satellit **gelb** | Die Geschwindigkeit kommt vom GPS; 4 bis 6 Satelliten. Brauchbar, beobachten Sie es. |
| Satellit **rot** | Die Geschwindigkeit kommt vom GPS; weniger als 4 Satelliten. Auf die Geschwindigkeit ist kein Verlass. |

![Das Satellitensymbol in seinen vier Zuständen — grau, grün, gelb, rot — mit der Zahl der genutzten Satelliten.](figures/five-gps-icon)

## Geschwindigkeit vom GPS {#speed-from-gps}

Ob die Geschwindigkeit vom Empfänger kommt, ist die Einstellung **„GPS internal“** (internes GPS) im Kontextmenü des Geschwindigkeitssensors (Geschwindigkeitsfeld berühren und halten). Sie erfordert die Agronomenebene. Siehe [Geschwindigkeitssensor](speed-sensor.md).

Ist das GPS die Geschwindigkeitsquelle und werden weniger als vier Satelliten empfangen, löst das Panel den Alarm **„Poor GPS signal quality“** (schlechte GPS-Signalqualität) aus. Alles, was das Panel aus der Geschwindigkeit berechnet — Fläche, Mengen, Abweichungen, der Antrieb der Dosierermotoren —, hängt dann von einem schwachen Signal ab. Fahren Sie ins Freie oder schalten Sie zurück auf den Radsensor.

![Der Alarm bei schwachem GPS-Signal.](figures/five-gps-alarm-poor-signal)

> **WICHTIG**
>
> **Unter Bäumen, Gebäuden oder einem Hallendach verliert der Empfänger Satelliten.** Beginnen Sie die Arbeit erst, wenn das Satellitensymbol grün oder gelb ist.

## Der Bildschirm GPS {#the-gps-screen}

Auf dem [zweiten Startbildschirm](second-home-screen.md) öffnet ein Tippen auf das GPS-Symbol einen Bildschirm mit den eigenen Daten des Empfängers: die von ihm gemessene Geschwindigkeit, Datum und Uhrzeit, die er empfängt (UTC, nicht die Ortszeit des Panels), und die Zahl der genutzten und der sichtbaren Satelliten. Darunter läuft ein Protokoll des Empfängers für den Servicetechniker. Die Texte auf diesem Bildschirm sind in jeder Panelsprache englisch. Verlassen Sie ihn mit einem langen Wischen nach oben.

![Der GPS-Bildschirm, geöffnet vom zweiten Startbildschirm.](figures/five-gps-test)
