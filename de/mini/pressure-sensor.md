---
title: Drucksensor
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/pressure-sensor.html
---

# Drucksensor

Die Einstellungen eines Drucksensors (Unterdruck) des Hectare Mini – Filter, minimaler und maximaler Druck – und wann das Panel seine Alarme auslöst.

Ein Drucksensor misst den Unterdruck (oder Überdruck) des Luftsystems – zum Beispiel am Gebläseauslass oder in den Säaggregaten einer Unterdruck-Einzelkornmaschine. Das Panel arbeitet mit dem Absolutwert: **Eine höhere Zahl bedeutet mehr Unterdruck.** **Jeder Drucksensor hat eigene Einstellungen.**

Öffnen Sie sein Kontextmenü wie in [Sensoreinstellungen](sensor-settings.md) beschrieben.

![Das Kontextmenü eines Drucksensors.](figures/ctx-pressure)

| **Parameter** | **Ebene** | **Was er bewirkt** | **Bereich · Werkseinstellung** |
| --- | --- | --- | --- |
| **„Filter“** | Agronom | Wie lange der Sensor den Druck misst und mittelt. Erhöhen Sie den Wert, wenn die Anzeige stark springt. | 1 … 16 · 1 |
| **„Minimum,Pa“** | Fahrer | Unter diesem Druck – zu wenig Unterdruck – löst das Panel **„Druck nied.“** aus. **„Nein“** schaltet die Prüfung aus. | **„Nein“**, 100 … 10000 Pa, in Schritten von 100 · **„Nein“** |
| **„Maximum,Pa“** | Fahrer | Über diesem Druck – zu viel Unterdruck – löst das Panel **„Druck hoch“** aus. **„Nein“** schaltet die Prüfung aus. | **„Nein“**, 100 … 10000 Pa, in Schritten von 100 · **„Nein“** |

Beide Grenzen werden nur überwacht, solange die Maschine sät oder in Arbeitsstellung fährt – siehe [Wann das Panel die Aussaat überwacht](seed-and-fertilizer-sensors.md#when-the-panel-controls-the-seeding). Ohne Geschwindigkeitssensor werden sie überwacht, solange das Panel Aussaat erkennt.

Die Grenzen werden in Pascal eingestellt; der Statusbildschirm zeigt den Druck in Kilopascal: 1 kPa = 1000 Pa.

## Der Statusbildschirm {#the-status-screen}

Zeigt den gemessenen Druck **P=** in kPa, nur solange der Sensor antwortet – [Der Sensor-Statusbildschirm](sensor-status-screen.md).

![Der Statusbildschirm eines Drucksensors, der nicht antwortet: Die Verbindungszeile ist rot, es wird kein Druck angezeigt.](figures/status-pressure)

Die Alarme und was zu prüfen ist: [Druckalarme](alarms-pressure.md). Ein neuer oder ersetzter Drucksensor muss zuerst seine Adresse erhalten – [Drucksensor konfigurieren](configure-pressure-sensor.md).
