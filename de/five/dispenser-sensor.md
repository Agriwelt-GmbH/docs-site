---
title: Sensor der Dosierwelle
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/dispenser-sensor.html
---

# Sensor der Dosierwelle

Die Parameter des Sensors der Dosierwelle — Drehungsüberwachung gegen das Rad oder Gewichtsüberwachung nach der ausgebrachten Masse — mit Bereichen und Standardwerten.

Der Sensor der Dosierwelle zählt die Umdrehungen eines Dosierers, der vom Bodenrad angetrieben wird. Das Panel kann ihn auf zwei Arten überwachen: nach seiner **Drehung** gegen den Geschwindigkeitssensor oder nach der **Masse** des Produkts, das er ausbringt. Berühren und halten Sie das Symbol der Dosiereinheit auf dem Startbildschirm, um sein Kontextmenü zu öffnen ([Sensoreinstellungen](sensor-settings.md)).

![Das Kontextmenü eines Dosierersensors, beide Überwachungen ausgeschaltet.](figures/five-ctx-dispenser)

| **Parameter** | **Was er tut** | **Bereich, Standard** | **Ebene** |
| --- | --- | --- | --- |
| **„Period, s“** (Periode, s) | Wie lange die Welle ohne Impuls bleiben darf, bevor sie als stehend gilt — und wie lange das Panel nach Beginn der Aussaat oder der Fahrt wartet, bevor es Drehung erwartet. | 1 … 60; 10 | Operator |
| **„Rotation speed control“** (Drehzahlüberwachung) | Die Wellendrehung gegen die Fahrgeschwindigkeit überwachen. | **„No“** (Nein) / **„Yes“** (Ja); **„No“** | Agronomist |
| **„Wheel, pulses“** (Rad, Impulse) | Wird durch die Drehungskalibrierung eingestellt. Wird bei eingeschalteter Drehungsüberwachung angezeigt. | 1 … 65535; 100 | Agronomist |
| **„Dispenser pulses“** (Dosiererimpulse) | Wird durch die Drehungskalibrierung eingestellt. Wird bei eingeschalteter Drehungsüberwachung angezeigt. | 1 … 65535; 100 | Agronomist |
| **„Maximum error, %“** (Höchstabweichung, %) | Wie weit die Wellendrehzahl von der Drehzahl abweichen darf, die die Fahrgeschwindigkeit verlangt, bevor **„Low speed of rotation“** (Drehzahl zu niedrig) oder **„High speed of rotation“** (Drehzahl zu hoch) kommt. Wird bei eingeschalteter Drehungsüberwachung angezeigt. | 1 … 50; 10 | Agronomist |
| **„Weight control“** (Gewichtsüberwachung) | Den Dosierer nach der ausgebrachten **Masse** statt nach seiner Drehung überwachen. | **„No“** / **„Yes“**; **„No“** | Agronomist |
| **„Type of product“** (Produktart) | Welches der vier Produkte dieser Dosierer dosiert. Wird bei eingeschalteter Gewichtsüberwachung angezeigt. | **„Product 1“** … **„Product 4“** (Produkt 1 … 4) | Agronomist |
| **„Weight, gr“** (Gewicht, g) / **„Weight, pulses“** (Gewicht, Impulse) | Beide werden durch die Kalibrierung nach Gewicht eingestellt. Wird bei eingeschalteter Gewichtsüberwachung angezeigt. Zahlenfeld. | je 1 … 65535 | Agronomist |

**Ohne Geschwindigkeitssensor im Profil wird nur „Period, s“ angeboten** — beide Überwachungsarten brauchen die Fahrgeschwindigkeit. Ist **„Weight control“** eingeschaltet, enthält das Kontextmenü zusätzlich **„Dispenser calibration(weight)“** (Dosiererkalibrierung nach Gewicht).

> **TIPP**
>
> **Bevorzugen Sie die Gewichts- vor der Drehungsüberwachung.** Die Drehungsüberwachung bemerkt, dass die Welle stillsteht, nicht dass das Produkt ausbleibt. **„Weight control“** überwacht die ausgebrachten Kilogramm je Hektar und erkennt einen leeren oder überbrückten Behälter, dessen Dosierer sich noch dreht.

## Kalibrierungen {#calibrations}

- **Drehung** — für **„Rotation speed control“**: [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md).
- **Masse** — für **„Weight control“**; wiederholen Sie sie bei jedem Produktwechsel: [Dosierer nach Gewicht kalibrieren](calibrate-dispenser-weight.md).

Der Statusbildschirm zeigt die Impulsfrequenz der Welle **F=** in Hz mit drei Nachkommastellen. Seine Alarme: [Gebläse oder Dosierwelle: Drehzahlalarme](alarms-rotation.md), und bei Gewichtsüberwachung [Dosierung nach Gewicht](alarms-dosing-by-weight.md).
