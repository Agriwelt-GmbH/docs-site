---
title: Geschwindigkeitssensor kalibrieren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/calibrate-speed.html
---

# Geschwindigkeitssensor kalibrieren

Fahren Sie eine markierte Strecke von 100 m, damit das Panel den Faktor des Fahrgeschwindigkeitssensors korrigiert.

Die Kalibrierung misst eine bekannte Strecke und korrigiert **„Factor, %“** (Faktor, %) des Geschwindigkeitssensors, sodass die Strecke des Panels mit ihr übereinstimmt. **Stellen Sie vor dem Start „Pulses“** (Impulse) **und „Diameter, cm“** (Durchmesser, cm) des Sensors ein ([Geschwindigkeitssensor](speed-sensor.md)) — die Kalibrierung korrigiert die Strecke je Umdrehung; die Impulse kann sie nicht erfinden.

Es gibt zwei Wege:

- **„Settings“** (Einstellungen) → **„Seeding machine parameters“** (Sämaschinen-Parameter) → **„Speed calibration“** (Geschwindigkeitskalibrierung) — auf der Ebene **„Agronomist“** (Agronom) ([Agronomenebene freischalten](enable-agronomist-level.md));
- **„Speed calibration“** im Kontextmenü des Geschwindigkeitssensors, solange die Maschine steht. Auf der Ebene **„Operator“** (Fahrer) fragt das Panel zuerst nach der PIN der Agronomenebene; auf der Ebene **„Agronomist“** fragt es **„Are you sure?“** (Sind Sie sicher?) — tippen Sie auf **„Yes“** (Ja).

::: steps
1. Stecken Sie auf ebenem Boden **100 m** ab und stellen Sie die Maschine an den Anfang.

2. Tippen Sie auf **„Speed calibration“** und noch einmal darauf; aus dem Kontextmenü heraus beantworten Sie zuerst die PIN-Abfrage oder die Frage. Das Panel zeigt **„Pass 100m and press STOP“** (100 m fahren und STOP drücken) mit einer einzigen Taste **„STOP“**.

   ![Das Fenster der Geschwindigkeitskalibrierung.](figures/five-calib-speed)

3. Fahren Sie die markierte Strecke und halten Sie am Ende an.

4. Tippen Sie auf **„STOP“**. Das Panel zeigt **„Done“** (Fertig) und schließt das Fenster von selbst.

   ![Das Panel bestätigt die Kalibrierung.](figures/five-calib-speed-done)
:::

Die Strecke ist fest auf 100 m eingestellt; das Panel fragt nicht danach. Es wartet nach **„STOP“** eine halbe Sekunde, bevor es den Zähler liest, und prüft in diesem Moment die Verbindung noch einmal — ein Sensor, der auf dem letzten Meter ausfällt, wird als verlorene Verbindung gemeldet, nicht als schlechtes Ergebnis.

> **HINWEIS**
>
> **Ein Tippen neben das Fenster beendet die Kalibrierung ohne Ergebnis.** Lassen Sie während der Fahrt die Hand vom Bildschirm und tippen Sie nur auf **„STOP“**.

## Wenn es nicht funktioniert {#when-it-does-not-work}

| **Das Panel zeigt** | **Bedeutung** |
| --- | --- |
| **„No speed sensor“** (Kein Geschwindigkeitssensor) | Das Profil enthält keinen Geschwindigkeitssensor. Die Kalibrierung startet nicht. |
| **„Connection lost with the sensor! Calibration canceled!“** (Verbindung zum Sensor verloren! Kalibrierung abgebrochen!) | Der Sensor antwortet nicht. |
| **„Sensor not controlled! Calibration canceled!“** (Sensor nicht überwacht! Kalibrierung abgebrochen!) | Der Sensor ist aus der Überwachung genommen. Nehmen Sie ihn in die Überwachung ([Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md)). |
| **„FAILURE! The tractor did not move!“** (Fehler! Der Traktor hat sich nicht bewegt!) | Der Zähler hat sich nicht bewegt: Der Sensor gab überhaupt keine Impulse ab — keine ungenaue Messung, gar keine. Prüfen Sie Sensor und Kabel. |
| **„Calibration canceled!“** (Kalibrierung abgebrochen!) | Das Fenster wurde anders als mit **„STOP“** geschlossen. Nichts hat sich geändert. |
