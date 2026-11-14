---
title: Sensoreinstellungen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/sensor-settings.html
---

# Sensoreinstellungen

Wie Sie die Einstellungen eines einzelnen Sensors des Hectare Mini erreichen, was jedes Kontextmenü enthält, welche Einstellungen für eine ganze Gruppe gelten und welche Kalibrierungen es gibt.

Jeder Sensor, jeder Motor und jeder Aktuator hat sein eigenes **Kontextmenü**: seinen Statusbildschirm, seine Parameter und bei manchen eine Kalibrierung. Die Parameter der einzelnen Sensorarten stehen in den Themen nach diesem.

## Einen Sensor erreichen {#reach-a-sensor}

::: steps
1. **Halten Sie auf dem Startbildschirm „MENU“ gedrückt**, bis die Geschwindigkeitsanzeige einen weißen Hintergrund hat. Das Panel ist im Sensoreinstellmodus. Lassen Sie die Taste los.

   ![Der Sensoreinstellmodus, der Geschwindigkeitssensor ist gewählt.](figures/sensor-mode-enter)

2. Wählen Sie den Sensor mit **„UP“** / **„DOWN“**. Ein gewählter Korn- oder Düngersensor zeigt seine Nummer unter der Säule auf weißem Hintergrund.

3. Drücken Sie **„MENU“**. Das Kontextmenü des gewählten Sensors öffnet sich.

4. Ändern Sie einen Wert mit **„UP“** / **„DOWN“** und **„PLUS“** / **„MINUS“**, wie in jedem Menü. **„BACK“** schließt das Kontextmenü; mit nochmals **„BACK“** verlassen Sie den Sensoreinstellmodus.
:::

Was das Kontextmenü enthält, hängt von der Sensorart, von der Maschine und von der Zugriffsebene ab. Ein Parameter, den Sie nicht sehen, liegt entweder über Ihrer Ebene oder trifft nicht zu – das Thema des jeweiligen Sensors sagt es.

## Das Kontextmenü {#the-context-menu}

::: {.anatomy fig="ctx-speed"}
1. **„Information“** – öffnet den Statusbildschirm dieses Sensors. Jedes Kontextmenü beginnt damit. [Der Sensor-Statusbildschirm](sensor-status-screen.md)
2. **Eine Aktion dieser Sensorart** – hier **„Geschw.-Kalibrierung“**. Ein Dosierersensor hat stattdessen **„Dosierer-Kalibr.(Masse)“**; Korn- und Düngersensoren haben **„Produktausbringung“**.
3. **Ein Parameter** – hier **„Impulse“** des Geschwindigkeitssensors.
4. **Sein Wert.** Wählen Sie die Zeile; der Wert steht zwischen **−** und **+** und ändert sich mit **„MINUS“** / **„PLUS“**.
5. **Bildlaufleiste.** Weitere Parameter folgen; der letzte Punkt ist **„Standardwerte“**.

Das Kontextmenü des Geschwindigkeitssensors auf der Ebene **„Agronom“**.
:::

**„Standardwerte“** setzt die Parameter dieses Sensors auf die Werkswerte zurück. Dafür ist die Ebene **„Service“** nötig, und es wirkt sofort, ohne Rückfrage.

Das Kontextmenü, das Sie vom [Statusbildschirm](sensor-status-screen.md) mit **„MENU“** erreichen, hat als ersten Punkt statt **„Information“** den Punkt **„Überwachung aus“** oder **„Überwachung ein“** – siehe [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md).

## Ein Satz für eine Gruppe oder je einer pro Sensor {#one-set-for-a-group-or-one-per-sensor}

| **Sensoren** | **Einstellungen** |
| --- | --- |
| Kornsensoren | Ein Satz für alle. Ändern Sie ihn an einem beliebigen Kornsensor – er gilt für alle. Nur **„Produktausbringung“** wird je Saatleitung eingestellt. |
| Düngersensoren | Ein Satz für alle Düngersensoren, getrennt von den Kornsensoren. **„Produktausbringung“** je Leitung. |
| Alle anderen Sensoren | Jeder Sensor hat eigene Einstellungen – stellen Sie jeden Dosierer-, Gebläse- oder Drucksensor einzeln ein. |

## Kalibrierungen {#calibrations}

| **Was sie richtigstellt** | **Wo** | **Ebene** | **Maschine** |
| --- | --- | --- | --- |
| Fahrgeschwindigkeit – **„Faktor, %“** des Geschwindigkeitssensors, über 100 m. [Geschwindigkeitssensor kalibrieren](calibrate-speed.md) | **„Sämaschinen-Parameter“** → **„Geschw.-Kalibrierung“**, oder das Kontextmenü des Geschwindigkeitssensors | Agronom; aus dem Kontextmenü auch Fahrer mit PIN | fährt 100 m |
| Dosierer-Drehung – **„Rad, Impulse“** gegenüber **„Dosierer Impulse“**. [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md) | **„Sämaschinen-Parameter“** → **„Dosierer-Kalibrierung“** | Agronom | Antriebsrad gedreht |
| Dosierer nach Gewicht – **„Masse, g“** und **„Masse, Impulse“**. [Dosierer nach Gewicht kalibrieren](calibrate-dispenser-weight.md) | Kontextmenü des Dosierersensors → **„Dosierer-Kalibr.(Masse)“** | Fahrer | steht |
| Dosierermotor nach Gewicht. [Motor nach Gewicht kalibrieren](calibrate-motor-weight.md) | Kontextmenü des Motors | Fahrer | steht |

Die beiden Gewichtskalibrierungen liegen auf der Ebene **„Fahrer“**, weil sie bei jedem Produktwechsel wiederholt werden müssen.

## Die Sensorarten {#the-kinds-of-sensor}

[Geschwindigkeitssensor](speed-sensor.md) · [Korn- und Düngersensoren](seed-and-fertilizer-sensors.md) · [Dosierersensor](dispenser-sensor.md) · [Gebläsesensor](fan-sensor.md) · [Drucksensor](pressure-sensor.md) · [Behälter- und Arbeitsstellungssensoren](hopper-and-work-position-sensors.md) · [Motorsensoren](engine-sensors.md) · [Spuranzeiger-Sensoren](marker-sensors.md) · [Dosierermotoren](motor-context-menu.md)
