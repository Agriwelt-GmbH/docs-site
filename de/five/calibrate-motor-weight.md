---
title: Dosierermotor nach Gewicht kalibrieren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/calibrate-motor-weight.html
---

# Dosierermotor nach Gewicht kalibrieren

Lassen Sie den Elektromotor die Dosierwalze in einen Behälter drehen und wiegen Sie das Produkt, damit das Panel weiß, wie viel eine Umdrehung abgibt.

Diese Kalibrierung speichert, wie viel Produkt eine Umdrehung der Dosierwalze abgibt — **„Weight, gr“** (Gewicht, g) und **„Rotations“** (Umdrehungen) eines Motors. Wiederholen Sie sie bei jedem Wechsel von Produkt oder Walze. Sie erfolgt auf der Ebene **„Operator“** (Fahrer), an einem Motor, dessen Gruppe im Modus **„Flow“** (Durchfluss) oder **„Hybrid“** (Hybrid) ist.

**Sie brauchen:** die stehende Maschine, einen Behälter, der 1 bis 60 kg des Produkts fasst, und eine Waage.

> **WICHTIG**
>
> **Der Punkt erscheint nur, solange die Maschine steht.** In Bewegung entfernt ihn das Panel ohne Meldung aus dem Kontextmenü. Und solange die Kalibrierung geöffnet ist, wird **jeder** Elektromotor der Maschine — für Saatgut und Dünger — auf Drehzahl null gehalten: Nichts dosiert. Das Verlassen der Kalibrierung stellt alle wieder auf automatische Mengenregelung.

::: steps
1. Berühren und halten Sie die Kachel des Motors auf dem Motorbildschirm oder dem zweiten Startbildschirm. Tippen Sie auf **„Dispenser calibration(weight)“** (Dosiererkalibrierung nach Gewicht) und noch einmal darauf.

2. Der erste Bildschirm zeigt die Sollmengen und unter **„Product dosage speed limitation:“** (Begrenzung der Fahrgeschwindigkeit durch die Dosierung) die Werte **„Min speed, km/h“** (Mindestgeschwindigkeit) und **„Max speed, km/h“** (Höchstgeschwindigkeit), die die aktuellen Einstellungen zulassen. Steht dort in Rot **„Can not provide dosage!“** (Dosierung nicht möglich), kann die eingebaute Walze die Menge bei keiner Geschwindigkeit liefern — die Kalibrierung behebt das nicht; bauen Sie eine andere Walze ein. Sonst tippen Sie auf **„Calibrate electric motor N“** (Elektromotor N kalibrieren). **„Exit“** (Beenden) verlässt den Bildschirm.

   ![Der erste Bildschirm der Motorkalibrierung.](figures/five-calib-motor-weight)

3. Der zweite Bildschirm bereitet den Rotor vor. Wiegen Sie den leeren Behälter und notieren Sie das Gewicht. Füllen Sie den Saatgutbehälter und stellen Sie den leeren Behälter unter den Dosierer.

4. Tippen Sie auf **„Fill the rotor cells“** (Rotorzellen füllen). Der Motor dreht die angetriebene Welle **zwei Umdrehungen** und hält von selbst an. **„Stop motor“** (Motor stoppen) unterbricht ihn. Wiederholen Sie das, bis die Zellen voll sind.

5. Tippen Sie auf **„Go to calibration“** (Zur Kalibrierung). Der dritte Bildschirm zeigt **„Rotations“** mit einer Nachkommastelle.

6. Leeren Sie den Behälter und stellen Sie ihn wieder unter den Dosierer.

7. Tippen Sie auf **„Calibration“** (Kalibrierung): Der Motor läuft. Tippen Sie auf **„Stop motor“**, um ihn anzuhalten. Starten und stoppen Sie so oft wie nötig — der Zähler addiert fortlaufend. Füllen Sie den Behälter so weit wie möglich, **nicht weniger als 1 kg und nicht mehr als 60 kg**.

8. Tippen Sie auf **„Complete“** (Abschließen). Die Taste erscheint, sobald mehr als **eine volle Umdrehung** gemacht wurde. **„Cancel“** (Abbrechen) fragt **„Are you sure?“** (Sind Sie sicher?), bevor die Messung verworfen wird.

9. Wiegen Sie den gefüllten Behälter. Das Zahlenfeld verlangt die Differenz aus vollem und leerem Behälter in Gramm — **1000 bis 60000 g**; das Feld schlägt 10000 vor. Geben Sie sie ein und tippen Sie auf **„OK“**. Das Panel speichert **„Weight, gr“** und **„Rotations“** für diesen Motor.
:::

Beim Füllen des Rotors läuft der Motor in der Mitte seines Fensters **„Minimum, rpm“** … **„Maximum, rpm“**, aber nicht schneller als 60 U/min.

## Den Motor über eine Taste am Dosierer bedienen {#run-the-motor-from-a-button-at-the-dispenser}

Ist **„Button input“** (Tasteneingang) des Motors auf einen Eingang (1 … 3) gestellt und **„Activation signal“** (Aktivierungssignal) passt zur Taste ([Dosierer-Elektromotor](dispenser-motor.md)), bedient eine Taste an diesem Eingang den Motor auf dem dritten Bildschirm: **Der Motor läuft, solange die Taste gehalten wird, und hält an, wenn sie losgelassen wird.** Eine Person kann mit dem Behälter am Dosierer stehen, statt zwischen den Läufen zur Kabine zu gehen. Ist eine solche Taste eingerichtet, läuft der Motor nur, solange die Taste gehalten wird. Der Bildschirm gibt keinen Hinweis darauf, dass eine Taste eingerichtet ist.

## Wenn die Kalibrierung von selbst endet {#when-the-calibration-stops-by-itself}

Die Kalibrierung endet mit einem Fehler, wenn der Motor nicht mehr antwortet, wenn der Motor einen Alarm auslöst oder wenn **zehn Sekunden ohne Impulse vom Drehsensor** vergehen — dann zeigt das Panel **„No data from rotation sensor“** (Keine Daten vom Drehsensor). Ein blockierter oder abgesteckter Drehsensor beendet den Lauf, statt stillschweigend null zu speichern.
