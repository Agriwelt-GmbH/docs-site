---
title: Geschwindigkeitssensor ausgefallen, Geschwindigkeitsgrenzen widersprüchlich oder schlechtes GPS-Signal
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-speed-sensor.html
---

# Geschwindigkeitssensor ausgefallen, Geschwindigkeitsgrenzen widersprüchlich oder schlechtes GPS-Signal

Was zu tun ist, wenn einer von zwei Geschwindigkeitssensoren keine Impulse mehr gibt, wenn die minimale und die maximale Fahrgeschwindigkeit verkehrt herum eingestellt sind oder wenn der eingebaute Empfänger zu wenige Satelliten sieht.

Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „Speed sensor #1 failed“ / „Speed sensor #2 failed“ — Geschwindigkeitssensor Nr. 1 / Nr. 2 ausgefallen {#speed-sensor-1-failed-speed-sensor-2-failed}

**Was es bedeutet.** Das Profil sagt, dass die Maschine **zwei** Fahrgeschwindigkeitssensoren hat, aber das Panel sieht Bewegung nur von einem von ihnen. Die Nummer nennt den stummen Sensor. Dieser Alarm kann an einer Maschine mit einem Geschwindigkeitssensor nicht erscheinen.

**Was Sie in dieser Reihenfolge tun:**

1. Prüfen Sie, dass beide Geschwindigkeitssensoren in Ordnung sind, und beheben Sie, was Sie finden.
2. Lässt sich ein Sensor jetzt nicht reparieren: Ändern Sie das Systemprofil so, dass nur ein Geschwindigkeitssensor verwendet wird — siehe [Das Profil](profile.md).

## „Error in settings of Min/Max“ — Fehler in den Einstellungen von Min/Max {#error-in-settings-of-minmax}

**Was es bedeutet.** Die für den Geschwindigkeitssensor eingestellte minimale und maximale Fahrgeschwindigkeit widersprechen einander. Das Panel kann nicht entscheiden, ob die aktuelle Geschwindigkeit zulässig ist.

**Was Sie tun:** Prüfen Sie **„Min speed, km/h“** (Mindestgeschwindigkeit) und **„Max speed, km/h“** (Höchstgeschwindigkeit) in den Einstellungen des Geschwindigkeitssensors. Das Minimum muss unter dem Maximum liegen. Siehe [Geschwindigkeitssensor](speed-sensor.md).

## „Poor GPS signal quality“ — Schlechte GPS-Signalqualität {#poor-gps-signal-quality}

**Was es bedeutet.** Die Geschwindigkeit wird vom im Panel eingebauten Empfänger genommen (**„GPS internal“** (internes GPS) steht auf **„Yes“** (Ja)), und er sieht **weniger als vier Satelliten**. Der Geschwindigkeit, die er liefert, ist nicht zu trauen. Das Satellitensymbol auf dem Startbildschirm ist rot.

**Was Sie in dieser Reihenfolge tun:**

1. Geben Sie dem Panel freie Sicht zum Himmel; fahren Sie weg von Bäumen, Gebäuden oder einem Hallendach.
2. Beobachten Sie die Zahl neben dem Satellitensymbol: Sie zeigt, wie viele Satelliten der Empfänger nutzt. Warten Sie, bis sie vier oder mehr erreicht.
3. Bleibt der Empfang schlecht, nehmen Sie die Geschwindigkeit vom Radsensor: Stellen Sie **„GPS internal“** auf **„No“** (Nein) — siehe [GPS](gps.md) und [Geschwindigkeitssensor](speed-sensor.md).

> **HINWEIS**
>
> **„SLOWER“ und „FASTER“ sind keine Alarmfenster.** Verlässt die Geschwindigkeit den zulässigen Bereich, zeigt das Geschwindigkeitsfeld **„SLOWER“** (langsamer) oder **„FASTER“** (schneller), und auf der Ebene **„Operator“** (Fahrer) ertönt der Alarmton, bis Sie die Geschwindigkeit korrigieren. Siehe [Anzeigen](indicators.md#speed).
