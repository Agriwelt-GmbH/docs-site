---
title: Dosierer-Drehung kalibrieren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/calibrate-dispenser-rotation.html
---

# Dosierer-Drehung kalibrieren

Drehen Sie Antriebsrad und Dosierwelle gemeinsam, damit das Panel lernt, wie viele Wellenimpulse zu den Radimpulsen gehören.

Diese Kalibrierung bringt dem Panel bei, wie viele Impulse der Dosierwelle zu den Radimpulsen gehören, damit es eine stehende oder durchrutschende Welle von einer fahrenden Maschine unterscheiden kann. Sie ist die Grundlage von **„Rotation speed control“** (Drehzahlüberwachung) des Dosierersensors ([Sensor der Dosierwelle](dispenser-sensor.md)). Sie schreibt **„Wheel, pulses“** (Rad, Impulse) und **„Dispenser pulses“** (Dosiererimpulse).

**Bevor Sie beginnen:** Der Geschwindigkeitssensor **und** jeder beteiligte Dosierer müssen unter Überwachung stehen und antworten. Sie brauchen die Ebene **„Agronomist“** (Agronom) ([Agronomenebene freischalten](enable-agronomist-level.md)). Halten Sie alles bereit, um Rad und Dosierwellen zu drehen: **Einmal gestartet, läuft die Kalibrierung, bis das Panel sein Ergebnis hat.**

::: steps
1. Öffnen Sie **„Settings“** (Einstellungen) → **„Seeding machine parameters“** (Sämaschinen-Parameter). Tippen Sie auf **„Dispenser calibration“** (Dosiererkalibrierung) und wischen Sie nach rechts oder links bis zur Nummer des Dosierers — oder zu **„ALL“** (alle) für alle auf einmal.

2. Tippen Sie noch einmal auf **„Dispenser calibration“**. Das Panel zeigt **„Calibration“** (Kalibrierung) und einen Fortschrittsbalken.

   ![Der Fortschrittsbalken der Dosiererkalibrierung.](figures/five-calib-dispenser-progress)

3. Drehen Sie Antriebsrad und Dosierwelle gemeinsam — von Hand oder durch Fahren der Maschine. Der Balken füllt sich, während die Zähler steigen.

4. Drehen Sie weiter, bis der Balken 100 % erreicht. Das geschieht, wenn der Geschwindigkeitssensor **und jeder** beteiligte Dosierer je mindestens **100 Impulse** gegeben haben. Der Balken folgt dem, der am weitesten zurückliegt — ein Dosierer, der sich nicht dreht, hält ihn bei null.

5. Bei 100 % piept das Panel einmal und zeigt **„Stop rotation!“** (Drehung stoppen). Halten Sie alles an.

6. Das Panel wartet, bis sich **zwei Sekunden** lang kein Zähler verändert hat, schreibt dann das Ergebnis und zeigt **„Done“** (Fertig).
:::

Lassen Sie die Kalibrierung bis zum Ende laufen. Ist beim Start ein beteiligter Sensor aus der Überwachung genommen oder antwortet er unterwegs nicht mehr, endet die Kalibrierung mit **„Sensor not controlled! Calibration canceled!“** (Sensor nicht überwacht! Kalibrierung abgebrochen!) oder **„Connection lost with the sensor! Calibration canceled!“** (Verbindung zum Sensor verloren! Kalibrierung abgebrochen!), und nichts wird geschrieben.

> **HINWEIS**
>
> **Die gespeicherten Zahlen sind nicht die, die Sie beobachtet haben.** Passen die Zählwerte nicht in den Parameterbereich, halbiert das Panel **beide** Zahlen gemeinsam, immer wieder, bis sie passen. Das Verhältnis bleibt erhalten; nur die beiden gespeicherten Werte fallen kleiner aus als gezählt.
