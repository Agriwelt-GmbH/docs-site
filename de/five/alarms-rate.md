---
title: Ausbringmenge zu niedrig oder zu hoch
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-rate.html
---

# Ausbringmenge zu niedrig oder zu hoch

Was zu tun ist, wenn die Korn-, Trockendünger- oder Flüssigdüngersensoren eine Menge unter oder über dem zulässigen Band melden, und was NOT UNDER CONTROL bedeutet.

Die Sektionssensoren — Korn, Trockendünger und Flüssigdünger — vergleichen die gemessene Menge mit der Sollmenge. Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

| **Modus der Gruppe** | **„Under allowable rate“** (Menge unter dem Zulässigen) | **„Over allowable rate“** (Menge über dem Zulässigen) |
| --- | --- | --- |
| **„Flow“** (Durchfluss) | Der Durchfluss fällt unter die Alarmschwelle — die Überwachungslinie des Diagramms. | Wird nicht ausgelöst. |
| **„Hybrid“** (Hybrid), **„Precise“** (Einzelkorn) | Die Menge fällt um mehr als **„Rate error,%“** (Mengenfehler, %) unter die Sollmenge. | Die Menge steigt um mehr als **„Rate error,%“** über die Sollmenge. |

> **TIPP**
>
> **Prüfen Sie zuerst die Fahrgeschwindigkeit.** Jede Menge je Meter oder je Hektar wird aus der zurückgelegten Strecke berechnet. Stimmt die Geschwindigkeit auf dem Bildschirm nicht, ist jede Menge um denselben Betrag falsch, und die Sensoren sind nicht schuld.

## „Under allowable rate“ — Menge unter dem Zulässigen {#under-allowable-rate}

**Was es bedeutet.** Ein Sektionssensor — Korn, Trockendünger oder Flüssigdünger — hat während der Arbeit zu wenig Produkt gemessen.

**Was Sie in dieser Reihenfolge prüfen:**

1. In den Behältern oder im Tank ist genug Produkt.
2. Die Fahrgeschwindigkeit am Panel stimmt mit der wirklichen überein.
3. Korn- oder Trockendüngersensor: **„Fraction“** (Fraktion). Der Wert muss unter Umständen **verringert** werden. Siehe [Kornsensoren und Trockendüngersensoren](seed-and-fertilizer-sensors.md).
4. Flüssigdüngersensor: **„Pulses per liter“** (Impulse je Liter). Der Wert muss unter Umständen **verringert** werden. Siehe [Flüssigdünger](liquid-fertilizer.md).
5. Kornsensor: sein Status auf dem Statusbildschirm (**„Information“** (Information) in seinem Kontextmenü) — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
6. Die Dosiereinheit: Ist sie in Ordnung und richtig eingestellt?

## „Over allowable rate“ — Menge über dem Zulässigen {#over-allowable-rate}

**Was es bedeutet.** Ein Sektionssensor — Korn, Trockendünger oder Flüssigdünger — hat während der Arbeit zu viel Produkt gemessen.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Fahrgeschwindigkeit am Panel stimmt mit der wirklichen überein.
2. Korn- oder Trockendüngersensor: **„Fraction“**. Der Wert muss unter Umständen **erhöht** werden.
3. Flüssigdüngersensor: **„Pulses per liter“**. Der Wert muss unter Umständen **erhöht** werden.
4. Kornsensor: sein Status auf dem Statusbildschirm.
5. Die Dosiereinheit: Ist sie in Ordnung und richtig eingestellt?

## „NOT UNDER CONTROL“ — Nicht unter Überwachung — kein Fenster {#not-under-control-no-window}

Laufen Reihen unter der Überwachungslinie, zeigt der Startbildschirm in Rot **„NOT UNDER CONTROL“**, und auf der Ebene **„Operator“** (Fahrer) ertönt der Alarmton — aber es öffnet sich kein Alarmfenster. Die Reihen unter der Linie werden nicht überwacht.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Fahrgeschwindigkeit am Panel stimmt mit der wirklichen überein.
2. Die Alarmschwelle des Diagramms: Liegt sie über der Menge, die die Maschine tatsächlich ausbringt? Senken Sie sie oder lassen Sie sie vom Panel einstellen — [Alarmschwelle automatisch einstellen](set-the-alarm-level.md).
3. In den Behältern oder im Tank ist genug Produkt.
4. **„Fraction“** der Korn- oder Düngersensoren oder **„Pulses per liter“** der Flüssigkeitssensoren — der Wert muss unter Umständen **verringert** werden.
5. Die Dosiereinheit: Ist sie in Ordnung und richtig eingestellt?

Was die Linie bedeutet: [Das Sektionsdiagramm](section-diagram.md#the-line-rows-under-it-are-not-under-control).
