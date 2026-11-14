---
title: Ausbringmenge zu niedrig, zu hoch oder nicht überwacht
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-rate.html
---

# Ausbringmenge zu niedrig, zu hoch oder nicht überwacht

Was zu tun ist, wenn die Korn-, Trockendünger- oder Flüssigdüngersensoren eine Menge unter oder über dem zulässigen Band melden oder zu wenig Produkt, um die Überwachung überhaupt zu starten.

Die Sektionssensoren – Korn, Trockendünger und Flüssigdünger – vergleichen die gemessene Menge mit dem Sollwert. Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

> **TIPP**
>
> **Prüfen Sie zuerst die Fahrgeschwindigkeit.** Jede Menge auf dem Panel wird aus der zurückgelegten Strecke berechnet. Stimmt die Geschwindigkeit auf dem Bildschirm nicht, ist jede Menge um denselben Betrag falsch, und die Sensoren sind nicht schuld.

## „Nicht überwacht!“ / „Saatmenge prüfen“ {#not-under-control-check-seeding-rate}

**Was es bedeutet.** Über die eingestellte Zahl von Sektionssensoren liegt die Menge des Produkts unter dem Minimum, das das Panel braucht, um die Ausbringung überhaupt zu überwachen.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Fahrgeschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. Die Sollmenge oder die minimale Alarmmenge – welche, hängt vom Überwachungsmodus der Sektionsgruppe ab.
3. In den Behältern oder im Tank ist genug Produkt.
4. Korn- oder Trockendüngersensor: **„Fraktion“** in seinen Einstellungen. Der Wert muss eventuell **verringert** werden. Siehe [Korn- und Düngersensoren](seed-and-fertilizer-sensors.md).
5. Flüssigdüngersensor: **„Impulse je Liter“** in seinen Einstellungen. Der Wert muss eventuell **verringert** werden. Siehe [Flüssigdünger](liquid-fertilizer.md).
6. Das Dosiergerät: Ist es betriebsbereit und richtig eingestellt?

## „Unter Sollmenge“ {#under-allowable-rate}

**Was es bedeutet.** Ein Sektionssensor – Korn, Trockendünger oder Flüssigdünger – hat während der Arbeit zu wenig Produkt gemessen.

**Was Sie prüfen, in dieser Reihenfolge:**

1. In den Behältern oder im Tank ist genug Produkt.
2. Die Fahrgeschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
3. Korn- oder Trockendüngersensor: **„Fraktion“**. Der Wert muss eventuell **verringert** werden.
4. Flüssigdüngersensor: **„Impulse je Liter“**. Der Wert muss eventuell **verringert** werden.
5. Kornsensor: sein Status auf dem Statusbildschirm (**„Information“** in seinem Kontextmenü) – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
6. Das Dosiergerät: Ist es betriebsbereit und richtig eingestellt?

## „Über Sollmenge“ {#over-allowable-rate}

**Was es bedeutet.** Ein Sektionssensor – Korn, Trockendünger oder Flüssigdünger – hat während der Arbeit zu viel Produkt gemessen.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Fahrgeschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. Korn- oder Trockendüngersensor: **„Fraktion“**. Der Wert muss eventuell **erhöht** werden.
3. Flüssigdüngersensor: **„Impulse je Liter“**. Der Wert muss eventuell **erhöht** werden.
4. Kornsensor: sein Status auf dem Statusbildschirm.
5. Das Dosiergerät: Ist es betriebsbereit und richtig eingestellt?

> **SIEHE AUCH**
>
> Wie weit die Menge vom Sollwert abweichen darf, bevor diese Alarme auslösen, legt **„Mengenfehler, %“** der Sensorgruppe fest – [Korn- und Düngersensoren](seed-and-fertilizer-sensors.md), [Flüssigdünger](liquid-fertilizer.md). Spalten unter der Kontrolllinie auf dem Startbildschirm werden nicht überwacht – [Sollmenge ändern](set-the-target-rate.md).
