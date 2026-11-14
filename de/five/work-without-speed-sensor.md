---
title: Ohne Geschwindigkeitssensor arbeiten
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/work-without-speed-sensor.html
---

# Ohne Geschwindigkeitssensor arbeiten

Wenn der Geschwindigkeitssensor auf dem Feld ausfällt — die Geschwindigkeit vom GPS nehmen oder die Arbeit mit simulierter Geschwindigkeit beenden und die Ausbringung von Hand steuern.

**Symptom.** Das Geschwindigkeitsfeld zeigt **XX.X** in Rot, oder die Geschwindigkeit bleibt null, obwohl die Maschine fährt. Ohne Geschwindigkeit kann das Panel Fläche, Mengen und Abweichungen nicht berechnen, und die Dosierermotoren wissen nicht, wie schnell sie drehen sollen.

**Ursache.** Der Geschwindigkeitssensor oder das Gerät, das ihn trägt, antwortet nicht, oder das Rad gibt keine Impulse mehr.

**Was zu tun ist.** Zwei Wege, beide über das Kontextmenü des Geschwindigkeitssensors — Geschwindigkeitsfeld berühren und halten. Beide Einträge erfordern die Agronomenebene: [Agronomenebene freischalten](enable-agronomist-level.md).

## Die Geschwindigkeit vom GPS nehmen {#take-the-speed-from-gps}

Stellen Sie **„GPS internal“** (internes GPS) auf **„Yes“** (Ja). Das Panel nimmt die Fahrgeschwindigkeit von seinem eigenen Empfänger. Beobachten Sie das Satellitensymbol in der rechten Spalte: Grün oder Gelb ist brauchbar, Rot nicht. Siehe [GPS](gps.md).

## Mit simulierter Geschwindigkeit arbeiten {#work-on-a-simulated-speed}

> **WARNUNG**
>
> **Bei eingeschalteter Geschwindigkeitssimulation steuert das Panel die Dosierermotoren und die Pumpe an, als ob die Maschine fahren würde** — auch im Stand. Schalten Sie die Simulation aus, bevor Sie die Kabine verlassen, und sperren Sie die Ausbringung, wann immer Sie anhalten.

::: steps
1. Berühren und halten Sie das Geschwindigkeitsfeld. Sein Kontextmenü öffnet sich.

2. Stellen Sie **„Imitation, km/h“** (Simulation, km/h) auf die Geschwindigkeit ein, mit der Sie fahren werden, bis 20 km/h. Das Panel meldet **„Settings of Min and Max speed switched off!“** (Einstellungen für Min. und Max. Geschwindigkeit ausgeschaltet!) — die Geschwindigkeitsgrenzen werden nicht überwacht, solange die Geschwindigkeit simuliert wird.

3. Das Panel sperrt die Produktausbringung von selbst: Die gelbe Hand erscheint in der rechten Spalte.

4. Kehren Sie auf die **Fahrer**ebene zurück, damit Alarme wieder angezeigt werden.

5. Das Geschwindigkeitsfeld zeigt nun eine gelbe Zahl im Wechsel mit **„IMITATION“** ([Geschwindigkeit](indicators.md#speed)).

6. Steuern Sie die Ausbringung mit der **Handsperre**: Berühren und halten Sie eine leere Stelle der rechten Spalte, um in einem Durchgang mit dem Ausbringen zu beginnen, und erneut, um am Vorgewende anzuhalten. Siehe [Ausbringung von Hand sperren](lock-application-by-hand.md).

7. Fahren Sie mit der eingestellten Geschwindigkeit. Die Mengen stimmen nur, solange die tatsächliche Geschwindigkeit mit ihr übereinstimmt.
:::

Ist der Sensor repariert, stellen Sie **„Imitation, km/h“** wieder auf **„No“** (Nein) — wischen Sie nach links, bis der Wert **„No“** lautet — und stellen Sie die Geschwindigkeitsgrenzen neu ein.

> **HINWEIS**
>
> **Ein Panel, das mit noch gesetzter Simulation eingeschaltet wird, startet gesperrt.** Wird nach einem Neustart nichts ausgebracht, suchen Sie nach der gelben Hand.

Einzelheiten zu den Einstellungen des Geschwindigkeitssensors: [Geschwindigkeitssensor](speed-sensor.md).
