---
title: Behälter- und Arbeitsstellungssensoren
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/hopper-and-work-position-sensors.html
---

# Behälter- und Arbeitsstellungssensoren

Der Behälterfüllstandsensor des Hectare Mini, der keine Einstellungen hat, und der Arbeitsstellungssensor mit seinem Transportsignal und seinem Alarmkriterium.

## Behälterfüllstandsensor {#hopper-level-sensor}

Der Behältersensor meldet, wenn das Produkt im Behälter unter die Höhe sinkt, in der der Sensor montiert ist. Er hat **keine Einstellungen**: Sein Kontextmenü enthält nur **„Information“** (und auf der Ebene Service **„Standardwerte“**, wo es nichts zurückzusetzen gibt).

Der Statusbildschirm zeigt **Pin:** mit dem Pegel an seinem Eingang: **"1"** – der Behälter ist am Sensor leer, und das Panel löst **„Behäl. leer“** aus; **"0"** – Produkt bedeckt den Sensor. Siehe [Behälteralarme](alarms-hopper.md).

## Arbeitsstellungssensor {#work-position-sensor}

Der Arbeitsstellungssensor sagt dem Panel, ob das Gerät in **Arbeitsstellung** abgesenkt oder in **Transportstellung** angehoben ist. Öffnen Sie sein Kontextmenü wie in [Sensoreinstellungen](sensor-settings.md) beschrieben.

![Das Kontextmenü des Arbeitsstellungssensors.](figures/ctx-workpos)

| **Parameter** | **Ebene** | **Was er bewirkt** | **Werte · Werkseinstellung** |
| --- | --- | --- | --- |
| **„Signal Transportstellung“** | Agronom | Der Pegel am Eingang, der **Transportstellung** bedeutet: **0** oder **1**. Stellen Sie ein, was der Sensor bei angehobenem Gerät liefert. | 0 / 1 · 0 |
| **„Alarmkriterium“** | Agronom | **„Ja“**: In Transportstellung überwacht das Panel die Aussaat nicht, und das Gebläseminimum, die Druckgrenzen und die Dosierwellen werden unterwegs nicht überwacht – keine Alarme am Vorgewende. **„Nein“**: Die Stellung wird nur angezeigt; sie wirkt sich nicht auf die Alarme aus. Bei Maschinen mit Dosierermotoren oder Flüssigdünger-Pumpensteuergerät ausgeblendet und immer **„Ja“**. | **„Nein“** / **„Ja“** · **„Ja“** |

Bei einer Maschine mit Dosierermotoren gilt ein Arbeitsstellungssensor, der nicht antwortet, als **Transportstellung** – aus Sicherheitsgründen wird nichts dosiert. Ohne Motoren gilt ein Sensor, der nicht antwortet oder nicht überwacht wird, als Arbeitsstellung.

Der Statusbildschirm zeigt **„Position: Arbeit“** oder **„Position: Transport“** und **Pin:** mit dem Pegel am Eingang – vergleichen Sie ihn mit der tatsächlichen Stellung, wenn Sie **„Signal Transportstellung“** einstellen. Die Stellung wechselt erst nach einem kurzen Filter, sodass ein Stoß sie nicht umschaltet.

![Der Statusbildschirm des Arbeitsstellungssensors.](figures/status-workpos)

Auf dem Startbildschirm blinkt die Geräteanzeige in Transportstellung gelb – siehe [Anzeigen](indicators.md).
