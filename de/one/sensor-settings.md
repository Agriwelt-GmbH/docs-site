---
title: Sensoreinstellungen
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/sensor-settings.html
---

# Sensoreinstellungen

Wie Sie die Einstellungen eines einzelnen Sensors erreichen, was sein Kontextmenü enthält und welche Kalibrierungen es gibt.

Jeder Sensor, Aktuator und Motor an der Maschine hat eigene Einstellungen und einen eigenen Statusbildschirm. Beide erreichen Sie vom Startbildschirm aus. Die Parameter der einzelnen Sensorarten stehen in den Themen nach diesem.

## Einen Sensor erreichen {#reach-a-sensor}

::: steps
1. Halten Sie auf dem Startbildschirm **„MENU“** einige Sekunden **gedrückt**. Das Panel wechselt in den Einstellmodus für Sensoren; der markierte Sensor wird in einem weißen Rechteck gezeichnet.

2. Wechseln Sie mit **„UP“** / **„DOWN“** von Sensor zu Sensor. **„PLUS“** nimmt den markierten Sensor in die Überwachung, **„MINUS“** nimmt ihn heraus – siehe [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md).

3. Drücken Sie **„MENU“**. Das Kontextmenü des markierten Sensors öffnet sich.

   ![Das Kontextmenü des Geschwindigkeitssensors.](figures/ctx-speed)

4. Drücken Sie **„BACK“**, um den Modus zu verlassen.
:::

Wenn Sie eine Sensorkachel auf dem Bildschirm gedrückt halten, öffnet sich direkt dasselbe Kontextmenü.

## Das Kontextmenü {#the-context-menu}

::: {.anatomy fig="ctx-fan"}
1. **„Information“** – öffnet den Statusbildschirm dieses Sensors. [Der Sensor-Statusbildschirm](sensor-status-screen.md).
2. **„Überwachung aus“** / **„Überwachung ein“** – nimmt den Sensor aus der Überwachung oder wieder hinein. Beim ersten Mal in einer Sitzung fragt das Panel nach einer Bestätigung.
3. **Die Parameter dieses Sensors** – hier die drei eines Gebläsesensors. Welche davon Sie sehen, hängt von der Zugriffsebene ab.
4. **Der aktuelle Wert.** Markieren Sie die Zeile; der Wert steht zwischen **–** und **+** und ändert sich mit **„MINUS“** / **„PLUS“**.
5. **„Standardwerte“** – setzt die Parameter dieses Sensors auf die Werkseinstellungen zurück. Nur Ebene **Service**.

Das Kontextmenü eines Gebläsesensors auf der Ebene **„Agronom“**.
:::

![Die Bestätigung, die vor dem Ausschalten der Überwachung abgefragt wird.](figures/confirm-disable-control)

## Der Statusbildschirm {#the-status-screen}

**„Information“** öffnet den Statusbildschirm des Sensors: seine Kennung, seine Verbindung, seine aktuellen Messwerte und seine aktiven Alarme. Wie Sie ihn lesen: [Der Sensor-Statusbildschirm](sensor-status-screen.md).

## Kalibrierungen {#calibrations}

Es gibt vier Kalibrierungen. Sie sind keine Varianten eines Verfahrens: Jede schreibt andere Parameter und wird auf anderem Weg erreicht.

| Was sie richtigstellt | Wo | Ebene | Maschine |
| --- | --- | --- | --- |
| Fahrgeschwindigkeit – die Impulse des Geschwindigkeitssensors auf einer bekannten Strecke. [Geschwindigkeitssensor kalibrieren](calibrate-speed.md) | **„Einstellungen“** → **„Sämaschinen-Parameter“** → **„Geschwindigkeitskalibrierung“** | Agronom | fährt 100 m |
| Dosierer-Drehung – **„Rad, Impulse“** gegen **„Dosierer Impulse“**. [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md) | **„Einstellungen“** → **„Sämaschinen-Parameter“** → **„Dosierer-Kalibrierung“** | Agronom | Rad und Dosierwelle werden gemeinsam gedreht |
| Dosierer-Masse – **„Masse, g“** und **„Masse, Impulse“**. [Dosierer nach Masse kalibrieren](calibrate-dispenser-weight.md) | Kontextmenü des Dosierwellensensors | Fahrer | steht |
| Masse der Dosierwalze – **„Masse, g“** und **„Umdrehungen“** eines Motors. [Dosierer-Elektromotor nach Masse kalibrieren](calibrate-motor-weight.md) | Kontextmenü des Dosierer-Elektromotors | Fahrer | steht |

Die beiden Menü-Kalibrierungen erfordern die Ebene **„Agronom“**, wie das Menü, das zu ihnen führt. Die beiden Massenkalibrierungen liegen auf der Ebene **„Fahrer“**, weil sie bei jedem Produktwechsel wiederholt werden müssen.
