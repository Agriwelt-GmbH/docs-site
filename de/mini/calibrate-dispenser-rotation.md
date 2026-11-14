---
title: Dosierer-Drehung kalibrieren
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/calibrate-dispenser-rotation.html
---

# Dosierer-Drehung kalibrieren

Drehen Sie das Antriebsrad, damit der Hectare Mini lernt, wie viele Dosierer-Impulse zu wie vielen Rad-Impulsen gehören – nötig, bevor die „Drehzahlüberwachung“ die Wellendrehzahl überwachen kann.

Mit **„Drehzahlüberwachung“** auf **„Ja“** überwacht ein Dosierersensor, ob sich die Welle so schnell dreht, wie es die Fahrgeschwindigkeit verlangt ([Dosierwellensensor](dispenser-sensor.md)). Dazu muss das Panel das Verhältnis zwischen den Impulsen des Geschwindigkeitssensors und den Impulsen des Dosierersensors kennen. Die Kalibrierung misst es und schreibt **„Rad, Impulse“** und **„Dosierer Impulse“**.

Bevor Sie beginnen: Der Geschwindigkeitssensor und die zu kalibrierenden Dosierersensoren müssen überwacht werden und antworten. Sie brauchen die Ebene **„Agronom“** ([Agronomen-Ebene aktivieren](enable-agronomist-level.md)). Heben Sie die Maschine an, damit sich das Antriebsrad drehen lässt, oder halten Sie sich bereit, sie zu bewegen.

::: steps
1. **„Einstell.“** → **„Sämaschinen-Parameter“**. Wählen Sie **„Dosierer-Kalibrierung“**.

2. Wählen Sie mit **„PLUS“** / **„MINUS“**, welche Dosierer kalibriert werden sollen: **„ALLE“** oder die Nummer eines Dosierers.

3. Drücken Sie **„MENU“**. Der Bildschirm **„Kalibrierung“** öffnet sich mit einem Fortschrittsbalken bei 0 %.

4. Drehen Sie das Antriebsrad. Der Balken füllt sich, während Impulse vom Rad und von jedem zu kalibrierenden Dosierer eintreffen.

5. Bei 100 % – mindestens 100 Impulse von jedem – piept das Panel und zeigt **„Drehung stoppen!“**. Hören Sie auf zu drehen.

6. Kommt zwei Sekunden lang kein Impuls mehr, speichert das Panel die Werte und zeigt **„Fertig“**; das Menü **„Sämaschinen-Parameter“** kehrt zurück.
:::

![Dosierer-Kalibrierung: das Menü, der Fortschritt beim Drehen und die Meldung Drehung stoppen!](figures/cal-dispenser-steps)

**„BACK“** bricht jederzeit mit **„Kalibrierung abgebrochen!“** ab; nichts ändert sich.

| **Das Panel zeigt** | **Bedeutung** |
| --- | --- |
| **„Sensor nicht überwacht! Kalibrierung abgebrochen!“** | Der Geschwindigkeitssensor oder ein zu kalibrierender Dosierersensor ist nicht in der Überwachung. Nehmen Sie ihn in die Überwachung ([Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md)). |
| **„Keine Verbindung zum Sensor! Kalibrierung abgebrochen!“** | Der Geschwindigkeitssensor oder ein Dosierersensor antwortet nicht, beim Start oder während der Kalibrierung. |

Je mehr Sie vor **„Drehung stoppen!“** drehen, desto besser: Die Werte werden von selbst herunterskaliert, wenn der Zählerstand über das hinauswächst, was sie fassen können.

Kalibrieren Sie nach jeder Änderung am Antrieb zwischen Rad und Dosierer erneut – Kettenräder, Getriebe oder Variator.
