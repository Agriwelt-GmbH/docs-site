---
title: Flüssigdüngerpumpe: Druck- und Mengenalarme
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-pump-controller.html
---

# Flüssigdüngerpumpe: Druck- und Mengenalarme

Was zu tun ist, wenn der Pumpencontroller für Flüssigdünger zu hohen Druck, einen ausgefallenen Drucksensor oder eine nicht haltbare Menge meldet.

Der Pumpencontroller baut auf derselben Elektronik auf wie der Controller eines Dosiermotors. Neben den Alarmen auf dieser Seite löst er **alle elektrischen Alarme des Dosiermotor-Controllers** aus – **„Kurzschluss“**, **„Überstrom“**, **„Unterspannung“**, **„Überspannung“**, **„Übertemperatur“**, **„ALARM“** und **„Gerät im Bootloader!“** – mit derselben Bedeutung und denselben Maßnahmen: siehe [Alarme der Dosiermotoren](alarms-motor-controller.md). Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

## „Druck hoch“ {#high-pressure}

**Was es bedeutet.** Der gemessene Flüssigkeitsdruck ist größer als zulässig.

**Was zu tun ist, in dieser Reihenfolge:**

1. Verringern Sie die Fahrgeschwindigkeit.
2. Erhöhen Sie in den Einstellungen des Pumpencontrollers **„Maximaler Druck, Bar“** – siehe [Flüssigdünger](liquid-fertilizer.md).

## „Drucksensor defekt!“ {#pressure-sensor-failure}

**Was es bedeutet.** Das Signal des Drucksensors liegt weit außerhalb seines Arbeitsbereichs von 4–20 mA.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Verbindung des Sensors zum Controller – das Kabel und der Steckverbinder sind unbeschädigt.
2. Der Sensor ist betriebsbereit. Ist er ausgefallen, tauschen Sie ihn aus.

Der Statusbildschirm des Pumpencontrollers zeigt den Druck und das Rohsignal des Sensors in mA – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#what-each-kind-of-sensor-adds).

## „Zu wenig“ {#rate-low}

**Was es bedeutet.** Der Pumpencontroller kann die eingestellte Menge nicht erreichen.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Fahrgeschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein und ist einigermaßen gleichmäßig.
2. Die Arbeitslast der Pumpe. **Über 90 %:** Fahren Sie langsamer.
3. **Last unter 90 % oder stark springend:** Erhöhen Sie **„Produktmenge Fehler,%“** im Menü **„Einstellungen“** – siehe [Das Menü Einstellungen](settings-menu.md).
4. Die Pumpe ist betriebsbereit.

## „Zu viel“ {#rate-high}

**Was es bedeutet.** Der Pumpencontroller bringt mehr als die eingestellte Menge aus.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Fahrgeschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein und ist einigermaßen gleichmäßig.
2. Die Arbeitslast der Pumpe. **Unter 10 %:** Fahren Sie schneller.
3. **Last über 10 % oder stark springend:** Erhöhen Sie **„Produktmenge Fehler,%“** im Menü **„Einstellungen“**.
4. Die Pumpe ist betriebsbereit.
