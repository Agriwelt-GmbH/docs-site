---
title: Flüssigdüngerpumpe: Druck- und Mengenalarme
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-pump-controller.html
---

# Flüssigdüngerpumpe: Druck- und Mengenalarme

Was zu tun ist, wenn der Flüssigdünger-Pumpencontroller zu hohen Druck, einen ausgefallenen Drucksensor oder eine Menge meldet, die er nicht halten kann.

Der Pumpencontroller baut auf derselben Elektronik auf wie der Controller eines Dosiermotors. Außer den Alarmen dieser Seite löst er **die elektrischen Alarme des Dosiermotor-Controllers** aus — **„Short circuit“**, **„Over current“**, **„Under voltage“**, **„Over voltage“**, **„Over temperature“**, **„FAILURE“** und **„Device in bootloader!“** — mit derselben Bedeutung und denselben Maßnahmen: siehe [Alarme der Dosiermotoren](alarms-motor-controller.md). Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „High pressure“ — Druck zu hoch {#high-pressure}

**Was es bedeutet.** Der gemessene Flüssigkeitsdruck hat **„Max pressure, Bar“** (Höchstdruck, bar) erreicht.

**Was Sie in dieser Reihenfolge tun:**

1. Verringern Sie die Fahrgeschwindigkeit.
2. Prüfen Sie in den Einstellungen des Pumpencontrollers **„Max pressure, Bar“** und erhöhen Sie ihn, wenn die Leitung es zulässt — siehe [Flüssigdünger](liquid-fertilizer.md).

## „Pressure sensor failure!“ — Drucksensor ausgefallen {#pressure-sensor-failure}

**Was es bedeutet.** Das Signal des Drucksensors ist weit unter seinen Arbeitsbereich von 4–20 mA gefallen.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Verbindung des Sensors zum Controller — Kabel und Stecker sind unbeschädigt.
2. **„Pressure sensor“** (Drucksensor) in den Einstellungen des Pumpencontrollers nennt den Eingang, an dem der Sensor tatsächlich angeschlossen ist.
3. Der Sensor ist in Ordnung. Ist er ausgefallen, ersetzen Sie ihn.

Der Statusbildschirm des Pumpencontrollers zeigt den Druck und das Rohsignal des Sensors in mA — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#what-each-kind-of-sensor-adds).

## „Rate low“ — Menge zu niedrig {#rate-low}

**Was es bedeutet.** Der Pumpencontroller erreicht die eingestellte Menge nicht: Die tatsächliche Menge liegt um mehr als **„Product rate error,%“** (Mengenfehler Produkt, %) unter der Sollmenge.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Fahrgeschwindigkeit am Panel stimmt mit der wirklichen überein und ist einigermaßen gleichmäßig.
2. Die Arbeitsauslastung der Pumpe. **Über 90 %:** Fahren Sie langsamer.
3. **Auslastung unter 90 % oder stark springend:** Erhöhen Sie **„Product rate error,%“** im Menü **„Settings“** (Einstellungen), auf der Ebene **„Agronomist“** (Agronom) — siehe [Das Menü Settings](settings-menu.md).
4. Die Pumpe ist in Ordnung.

## „Rate high“ — Menge zu hoch {#rate-high}

**Was es bedeutet.** Der Pumpencontroller bringt mehr als die eingestellte Menge aus: Die tatsächliche Menge liegt um mehr als **„Product rate error,%“** über der Sollmenge.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Fahrgeschwindigkeit am Panel stimmt mit der wirklichen überein und ist einigermaßen gleichmäßig.
2. Die Arbeitsauslastung der Pumpe. **Unter 10 %:** Fahren Sie schneller.
3. **Auslastung über 10 % oder stark springend:** Erhöhen Sie **„Product rate error,%“** im Menü **„Settings“**.
4. Die Pumpe ist in Ordnung.
