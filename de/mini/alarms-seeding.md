---
title: Aussaatalarme: Menge, Fehlstellen, Doppelablagen, NICHT ÜBERWACHT
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-seeding.html
---

# Aussaatalarme: Menge, Fehlstellen, Doppelablagen, NICHT ÜBERWACHT

Was zu tun ist, wenn eine Saat- oder Düngerleitung des Hectare Mini zu wenig oder zu viel sät, zu viele Fehlstellen oder Doppelablagen hat, in eine Fahrgasse sät – oder wenn das Panel gar nicht überwacht.

Diese Alarme kommen von den Kornsensoren und den Düngersensoren. **Die Gerätezeile sagt Ihnen, welche Leitung** – zum Beispiel **Kornsensor: #4**. Die Grenzen sind die Einstellungen der Gruppe ([Korn- und Düngersensoren](seed-and-fertilizer-sensors.md)). Prüfen Sie in jedem Fall zuerst die Geschwindigkeit: Eine falsche Fahrgeschwindigkeit macht jede Menge je Meter falsch.

## NICHT ÜBERWACHT {#not-under-control}

**Was es bedeutet.** Kein Alarmfenster: Das Saatdiagramm zeigt **„NICHT ÜBERWACHT“**. Saatgut fließt, aber nicht durch genügend Leitungen, um die Bedingung für die Überwachung zu erfüllen – weniger als **„Anteil säend,%“** der Saatleitungen säen innerhalb der Sollmenge. Bis die Bedingung erfüllt ist, überwacht das Panel keine Aussaatstörung.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. Die Sollmenge – im Modus **„Durchfluss“** die Alarmschwelle – auf dem Startbildschirm: Liegt sie weit über dem, was die Maschine tatsächlich sät? – [Sollmenge ändern](set-the-target-rate.md).
3. **„Fraktion“** der Kornsensoren – ein zu hoher Wert verbirgt kleine Körner.
4. Genug Saatgut in den Behältern.

## „Unter Sollmenge“ {#under-allowable-rate}

**Was es bedeutet.** Eine Leitung sät weniger als zulässig: im Modus **„Durchfluss“** unter der Alarmschwelle, in **„Hybrid“** und **„Einzelkorn“** um mehr als **„Mengenfehl.%“** unter der Sollmenge.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. Genug Saatgut in den Behältern.
3. Das Dosiergerät arbeitet und ist richtig eingestellt.
4. **„Fraktion“** der Sensoren – sie muss eventuell verringert werden.
5. Der Sensor selbst – sein Zustand auf dem Statusbildschirm ([Der Sensor-Statusbildschirm](sensor-status-screen.md#states-of-a-seed-or-fertilizer-sensor)).

## „Über Sollmenge“ {#over-allowable-rate}

**Was es bedeutet.** Eine Leitung sät mehr als die Sollmenge plus **„Mengenfehl.%“**. Nur in **„Hybrid“** und **„Einzelkorn“**.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. Das Dosiergerät arbeitet und ist richtig eingestellt.
3. **„Fraktion“** der Sensoren – sie muss eventuell erhöht werden.
4. Der Sensor selbst – sein Zustand auf dem Statusbildschirm.

## „Hoher % Doppel“ {#high-of-doubles}

**Was es bedeutet.** Der Anteil der Doppelablagen über der letzten Strecke liegt über **„Doppelfehler,%“**. Nur in **„Einzelkorn“**, und nur, wenn diese Einstellung nicht auf **„Nein“** steht.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. **„Doppelfehler,%“** der Kornsensoren.
3. Das Dosiergerät: Unterdruck, Vereinzeler, Scheibe für das Saatgut.
4. **„Fraktion“** – sie muss eventuell erhöht werden.
5. Der Sensor selbst – sein Zustand auf dem Statusbildschirm.

## „Hoher % Fehlst.“ {#high-of-skips}

**Was es bedeutet.** Der Anteil der Fehlstellen über der letzten Strecke liegt über **„Fehlst.Fehl,%“**. Nur in **„Einzelkorn“**, und nur, wenn diese Einstellung nicht auf **„Nein“** steht.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
2. **„Fehlst.Fehl,%“** der Kornsensoren.
3. Genug Saatgut in den Behältern.
4. Das Dosiergerät: Unterdruck, Vereinzeler, Scheibe für das Saatgut.
5. **„Fraktion“** – sie muss eventuell verringert werden.
6. Der Sensor selbst – sein Zustand auf dem Statusbildschirm.

## „Saat in Fahrgasse“ {#seeding-to-tramline}

**Was es bedeutet.** Eine Leitung, die abgeschaltet sein sollte – in einem Fahrgassen-Durchgang oder mit **„Produktausbringung“** auf **„Nein“** –, lässt mehr Saatgut durch als **„Zul. Saat in Fahrgasse,%“** der Sollmenge.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Fahrgassen-Aktuator dieser Leitung schaltet ab – siehe [Fahrgassenalarme](alarms-tramline.md).
2. Die Einstellung **„Zuordnung Sensor-Aktuator“** – die richtigen Leitungen sind dem Aktuator zugeordnet ([Sämaschinen-Parameter](seeding-machine-parameters.md)).
3. **„Zul. Saat in Fahrgasse,%“**.

## „Alte Firmware! F&D falsch!“ {#old-firmware-wrong-sd-calc}

**Was es bedeutet.** Ein Düngersensor im Modus **„Einzelkorn“** hat eine zu alte Firmware, um Fehlstellen und Doppelablagen richtig zu zählen.

**Was Sie prüfen:** Lassen Sie die Düngersensoren im Modus **„Durchfluss“** oder **„Hybrid“** laufen, oder lassen Sie den Sensor vom Service ersetzen oder aktualisieren.
