---
title: Flüssigdüngersensoren und Pumpencontroller
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/liquid-fertilizer.html
---

# Flüssigdüngersensoren und Pumpencontroller

Die Parameter der Sektionssensoren für Flüssigdünger und des Pumpencontrollers für Flüssigdünger.

Flüssigdünger wird von Durchflusssensoren in den Sektionen überwacht; bei manchen Maschinen regelt zusätzlich ein Pumpencontroller die Pumpe auf die Sollmenge. Öffnen Sie das Kontextmenü von beiden wie in [Sensoreinstellungen](sensor-settings.md).

## Sektionssensoren für Flüssigdünger {#liquid-fertilizer-section-sensors}

| Parameter | Was er bewirkt | Bereich | Ebene |
| --- | --- | --- | --- |
| **„Impulse je Liter“** | Die Impulse, die der Durchflusssensor je Liter abgibt; das Panel rechnet sie in Liter pro Minute, Liter pro Hektar und die ausgebrachte Menge um. Ausgeblendet, wenn ein Pumpencontroller im Profil steht – dann gelten die Werte des Controllers. | 1 … 60000 | Agronom |
| **„Mengenfehler, %“** | Wie weit die tatsächliche Menge vom Sollwert abweichen darf, bevor ein Alarm ausgelöst wird. | 5 … 95, Schritte von 5 | Agronom |
| **„Zulässiger Verlust in Fahrgasse,%“** | Wie viel eine für die Fahrgasse abgeschaltete Sektion noch ausbringen darf. | 0 … 50 | Agronom |
| **„Startadresse Gruppe“** | Siehe [Gerätekonfiguration](device-configuration.md). | | Service |

Die beiden Sollmengen dieses Sensors – eine für den Modus **„Durchfluss“**, eine für den Modus **„Nach Fläche“** – haben **keinen Menüpunkt**. Sie werden auf dem Startbildschirm mit **„PLUS“** und **„MINUS“** eingestellt, wie jede andere Sollmenge ([Sollmenge ändern](set-the-target-rate.md)). Der Modus selbst: [Sämaschinen-Parameter](seeding-machine-parameters.md#mode-of-liquid-fertilizer).

## Pumpencontroller für Flüssigdünger {#liquid-fertilizer-pump-controller}

| Parameter | Was er bewirkt | Bereich | Ebene |
| --- | --- | --- | --- |
| **„Impulse je Liter“** | Wie viele Impulse des Pumpenantriebs einen Liter ergeben; daraus berechnet das Panel die ausgebrachte Menge. Der Wert liegt im Pumpencontroller: Das Panel liest ihn beim Start aus und schreibt eine Änderung dorthin zurück. | 100 … 10000, Schritte von 10 | Agronom |
| **„Drucksensor“** | Welcher Drucksensor die Versorgungsleitung überwacht. | 0 … 2 | Agronom |
| **„Druckgrenze, Bar“** | Der Druck, den der Drucksensor am oberen Ende seines Messbereichs anzeigt, laut Datenblatt des Sensors; damit rechnet das Panel den Leitungsdruck um. Standardwert 16,0 bar. | 0,0 … 50,0 | Agronom |
| **„Maximaler Druck, Bar“** | Oberhalb davon löst der Controller **„Druck hoch“** aus. | 0,0 … 50,0 | Fahrer |
| **„Sektionssteuerung D.E.“** | Hat in dieser Firmware keine Wirkung: Das Panel liest diesen Eingang für die Pumpe nicht aus. | **„Nein“** / **„Abschalten(0)“** / **„Abschalten(1)“** | Agronom |
| **„Startverzögerung, mS“** | Die kürzeste Zeit zwischen zwei Starts der Pumpe: Ein Start, der früher käme, wartet, bis diese Zeit vergangen ist. Standardwert 30 ms. | 0 … 500, Schritte von 5 | Service |
| **„Startadresse Gruppe“** | Siehe [Gerätekonfiguration](device-configuration.md). | | Agronom |

Der Statusbildschirm des Pumpencontrollers zeigt den Durchfluss, die Pumpenlast und den Leitungsdruck – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md#what-each-kind-of-sensor-adds). Alarme: [Flüssigdüngerpumpe](alarms-pump-controller.md), [Mengenalarme](alarms-rate.md).
