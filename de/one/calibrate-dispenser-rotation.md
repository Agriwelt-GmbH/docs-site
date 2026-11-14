---
title: Dosierer-Drehung kalibrieren
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/calibrate-dispenser-rotation.html
---

# Dosierer-Drehung kalibrieren

Drehen Sie Antriebsrad und Dosierwelle gemeinsam, damit das Panel lernt, wie viele Wellenimpulse zu einem Radimpuls gehören.

Diese Kalibrierung lehrt das Panel, wie viele Impulse der Dosierwelle zu einem Radimpuls gehören, damit es eine stehende Welle von einer fahrenden Maschine unterscheiden kann. Sie ist die Grundlage der **„Drehzahlüberwachung“** des Dosierersensors ([Dosierwellensensor](dispenser-sensor.md)). Sie schreibt **„Rad, Impulse“** und **„Dosierer Impulse“**.

**Vor dem Start:** Der Geschwindigkeitssensor **und** jeder beteiligte Dosierer müssen unter Überwachung stehen und antworten. Sie benötigen die Ebene **„Agronom“** ([Agronomen-Ebene aktivieren](enable-agronomist-level.md)).

::: steps
1. Öffnen Sie **„Einstellungen“** → **„Sämaschinen-Parameter“** → **„Dosierer-Kalibrierung“**. Stellen Sie die Nummer des Dosierers mit **„PLUS“** / **„MINUS“** ein – oder **0** für alle auf einmal – und drücken Sie **„MENU“**. Das Panel zeigt **„Kalibrierung“** und einen Fortschrittsbalken.

   ![Der Fortschrittsbalken der Dosierer-Kalibrierung.](figures/calib-dispenser-progress)

2. Drehen Sie Antriebsrad und Dosierwelle gemeinsam – von Hand oder durch Bewegen der Maschine. Der Balken füllt sich, während die Zähler steigen.

3. Drehen Sie weiter, bis der Balken 100 % erreicht. Das geschieht, wenn der Geschwindigkeitssensor **und jeder** beteiligte Dosierer mindestens **100 Impulse** geliefert haben. Der Balken folgt demjenigen, der am weitesten zurückliegt – ein Dosierer, der sich nicht dreht, hält ihn bei null.

4. Bei 100 % gibt das Panel einen Signalton ab und zeigt **„Drehung stoppen!“**. Stoppen Sie alles.

5. Das Panel wartet, bis sich **zwei Sekunden** lang kein Zähler mehr geändert hat, schreibt dann das Ergebnis und zeigt **„Fertig“**.
:::

**„Zum Abbrechen BACK drücken.“** steht am unteren Rand des Bildschirms; **„BACK“** bricht die Kalibrierung jederzeit ab.

Ist ein beteiligter Sensor nicht überwacht oder antwortet er nicht, endet die Kalibrierung mit **„Sensor nicht überwacht! Kalibrierung abgebrochen!“** oder **„Keine Verbindung zum Sensor! Kalibrierung abgebrochen!“**.

> **HINWEIS**
>
> **Die gespeicherten Zahlen sind nicht die, die Sie beobachtet haben.** Passen die Zählwerte nicht in den Parameterbereich, halbiert das Panel **beide** Zahlen gemeinsam, wieder und wieder, bis sie passen. Das Verhältnis bleibt erhalten; nur die beiden gespeicherten Werte fallen kleiner aus als das, was gezählt wurde.
