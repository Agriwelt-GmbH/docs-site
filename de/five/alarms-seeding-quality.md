---
title: Zu viele Doppelbelegungen oder Fehlstellen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-seeding-quality.html
---

# Zu viele Doppelbelegungen oder Fehlstellen

Was zu tun ist, wenn ein Kornsensor einer Einzelkornsämaschine mehr Doppelbelegungen oder Fehlstellen zählt als zulässig.

Doppelbelegungen und Fehlstellen werden nur im Aussaatmodus **„Precise“** (Einzelkorn) gezählt — an einer Einzelkornsämaschine. Jeder Alarm wird nur ausgelöst, wenn seine Grenze eingestellt ist: **„Doubles error,%“** (Fehler Doppelbelegungen, %) und **„Skips error,%“** (Fehler Fehlstellen, %) auf **„No“** (Nein) schalten ihn aus. Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „High % of doubles“ — Hoher Anteil an Doppelbelegungen {#high-of-doubles}

**Was es bedeutet.** Der Anteil an Doppelbelegungen, den der Sensor zählt, liegt über **„Doubles error,%“**.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Fahrgeschwindigkeit am Panel stimmt mit der wirklichen überein.
2. **„Doubles error,%“** in den Einstellungen der Kornsensoren — ist die Grenze sinnvoll? Siehe [Kornsensoren und Trockendüngersensoren](seed-and-fertilizer-sensors.md).
3. **„Fraction“** (Fraktion) in den Einstellungen der Kornsensoren. Der Wert muss unter Umständen **erhöht** werden.
4. Der Status des Sensors auf seinem Statusbildschirm — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
5. Die Dosiereinheit: Ist sie in Ordnung und richtig eingestellt?

## „High % of skips“ — Hoher Anteil an Fehlstellen {#high-of-skips}

**Was es bedeutet.** Der Anteil an Fehlstellen, den der Sensor zählt, liegt über **„Skips error,%“**.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Fahrgeschwindigkeit am Panel stimmt mit der wirklichen überein.
2. In den Behältern ist genug Saatgut.
3. **„Skips error,%“** in den Einstellungen der Kornsensoren — ist die Grenze sinnvoll?
4. **„Fraction“** in den Einstellungen der Kornsensoren. Der Wert muss unter Umständen **verringert** werden.
5. Der Status des Sensors auf seinem Statusbildschirm.
6. Die Dosiereinheit: Ist sie in Ordnung und richtig eingestellt?

Das Wegstück, über das die Anteile gezählt werden, ist **„Recalculation,m“** (Neuberechnung, m) der Kornsensoren. Wie Fehlstellen und Doppelbelegungen im Diagramm aussehen: [Das Sektionsdiagramm](section-diagram.md).
