---
title: Dosierwellensensor
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/dispenser-sensor.html
---

# Dosierwellensensor

Die Parameter des Dosierwellensensors – Drehzahlüberwachung gegenüber dem Rad oder Massenüberwachung über die ausgebrachte Masse.

Der Dosierwellensensor zählt die Umdrehungen eines Dosierers, der vom Bodenrad angetrieben wird. Das Panel kann ihn auf zwei Arten überwachen: über seine **Drehung** im Vergleich zum Geschwindigkeitssensor oder über die **Masse** des ausgebrachten Produkts. Öffnen Sie sein Kontextmenü wie in [Sensoreinstellungen](sensor-settings.md).

![Das Kontextmenü eines Dosierersensors, beide Überwachungen ausgeschaltet.](figures/ctx-dispenser)

| Parameter | Was er bewirkt | Bereich | Ebene |
| --- | --- | --- | --- |
| **„Periode,s“** | Die längste Zeit zwischen zwei Impulsen der Welle. Gibt die Welle länger keinen Impuls, während die Maschine sät oder fährt, löst das Panel **„Kein Lauf“** aus. Standardwert 10 s. | 1 … 60 | Fahrer |
| **„Drehzahlüberwachung“** | Die Wellendrehung gegen die Fahrgeschwindigkeit überwachen. | **„Nein“** / **„Ja“** | Agronom |
| **„Rad, Impulse“** | Wird von der Drehungskalibrierung gesetzt. | 1 … 65535 | Agronom |
| **„Dosierer Impulse“** | Wird von der Drehungskalibrierung gesetzt. | 1 … 65535 | Agronom |
| **„Maximaler Fehler, %“** | Wie weit die Wellendrehzahl von der Drehzahl abweichen darf, die die Fahrgeschwindigkeit verlangt; darüber hinaus löst das Panel während der Fahrt **„Drehzahl zu niedrig“** oder **„Drehzahl zu hoch“** aus. Nur sichtbar, wenn **„Drehzahlüberwachung“** auf **„Ja“** steht. Standardwert 10 %. | 1 … 50 | Agronom |
| **„Massenüberwachung“** | Den Dosierer über die ausgebrachte **Masse** statt über seine Drehung überwachen. | **„Nein“** / **„Ja“** | Agronom |
| **„Produkttyp“** | Welches Produkt dieser Dosierer dosiert. | | Agronom |
| **„Masse, g“** / **„Masse, Impulse“** | Beide werden von der Kalibrierung nach Masse gesetzt. | je 1 … 65535 | Agronom |

Bei eingeschalteter **„Massenüberwachung“** enthält das Kontextmenü zusätzlich **„Dosierer-Kalibrierung (Masse)“**.

> **TIPP**
>
> **Bevorzugen Sie die Massenüberwachung gegenüber der Drehzahlüberwachung.** Die Drehzahlüberwachung bemerkt, dass die Welle stehengeblieben ist, nicht, dass das Produkt es getan hat. Die **„Massenüberwachung“** überwacht die ausgebrachten Kilogramm je Hektar und erkennt einen leeren oder überbrückten Behälter, dessen Dosierer sich weiterdreht.

## Kalibrierungen {#calibrations}

- **Drehung** – für die **„Drehzahlüberwachung“**: [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md).
- **Masse** – für die **„Massenüberwachung“**; wiederholen Sie sie bei jedem Produktwechsel: [Dosierer nach Masse kalibrieren](calibrate-dispenser-weight.md).

Der Statusbildschirm zeigt die Impulsfrequenz der Welle **F=** in Hz, auf drei Nachkommastellen. Die zugehörigen Alarme: [Gebläse und Dosierwelle: Drehzahlalarme](alarms-rotation.md), und bei Massenüberwachung [Dosierung nach Masse](alarms-dosing-by-weight.md).
