---
title: Arbeiten ohne Geschwindigkeitssensor
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/work-without-speed-sensor.html
---

# Arbeiten ohne Geschwindigkeitssensor

Wenn der Geschwindigkeitssensor auf dem Feld ausfällt — die Arbeit mit simulierter Geschwindigkeit zu Ende bringen und die Ausbringung von Hand steuern.

**Symptom.** Das Geschwindigkeitsfeld zeigt **XX.X** in Rot, oder die Geschwindigkeit bleibt null, obwohl sich die Maschine bewegt. Ohne Geschwindigkeit kann das Panel Fläche, Mengen und Abweichungen nicht berechnen, und die Dosiermotoren wissen nicht, wie schnell sie drehen sollen.

**Ursache.** Der Geschwindigkeitssensor oder sein Eingangsgerät antwortet nicht, oder das Rad liefert keine Impulse mehr. Siehe [Alarme des Geschwindigkeitssensors](alarms-speed-sensor.md).

**Was zu tun ist.** Bringen Sie das Feld mit einer **simulierten Geschwindigkeit** zu Ende und schalten Sie die Ausbringung von Hand ein und aus.

> **WARNUNG**
>
> **Bei eingeschalteter Geschwindigkeitssimulation steuert das Panel die Dosiermotoren und die Pumpe an, als würde sich die Maschine bewegen** — auch im Stand. Schalten Sie die Simulation aus, bevor Sie die Kabine verlassen, und sperren Sie die Ausbringung bei jedem Halt.

::: steps
1. Berühren und halten Sie auf dem Startbildschirm das Geschwindigkeitsfeld. Sein Kontextmenü öffnet sich.

2. Stellen Sie **„Simulation,km/h“** auf die Geschwindigkeit ein, mit der Sie fahren werden. Dieser Punkt erfordert die Ebene „Agronom“: [Ebene „Agronom“ freischalten](enable-agronomist-level.md).

3. Kehren Sie auf die Ebene **„Fahrer“** zurück, damit wieder Alarme angezeigt werden.

4. Das Geschwindigkeitsfeld zeigt jetzt eine gelbe Zahl im Wechsel mit **„SIMULIERT“** ([Geschwindigkeit](indicators.md#speed)).

5. Steuern Sie die Ausbringung mit der **Handsperre**: Halten Sie **„HOME“** gedrückt, um am Vorgewende die Ausbringung zu beenden, und halten Sie sie erneut gedrückt, um beim nächsten Durchgang zu beginnen. Solange die Sperre eingeschaltet ist, erscheint die gelbe Hand am rechten Rand, und die Geschwindigkeit zeigt null. Siehe [Ausbringung von Hand sperren](lock-application-by-hand.md).

6. Fahren Sie mit der eingestellten Geschwindigkeit. Die Mengen stimmen nur, solange die wirkliche Geschwindigkeit mit ihr übereinstimmt.
:::

Ist der Sensor repariert, stellen Sie **„Simulation,km/h“** wieder auf 0.

Einzelheiten zu den Einstellungen des Geschwindigkeitssensors: [Geschwindigkeitssensor](speed-sensor.md).
