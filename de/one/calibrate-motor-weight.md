---
title: Dosiermotor nach Masse kalibrieren
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/calibrate-motor-weight.html
---

# Dosiermotor nach Masse kalibrieren

Lassen Sie den Elektromotor die Dosierwalze in einen Behälter drehen und wiegen Sie das Produkt, damit das Panel weiß, wie viel eine Umdrehung fördert.

Diese Kalibrierung speichert, wie viel Produkt eine Umdrehung der Dosierwalze fördert – **„Masse, g“** und **„Umdrehungen“** eines Motors. Wiederholen Sie sie bei jedem Wechsel von Produkt oder Walze. Sie erfolgt auf der Ebene **„Fahrer“**.

**Sie benötigen:** die stehende Maschine, einen Behälter, der 1 bis 60 kg des Produkts fasst, und eine Waage.

> **WICHTIG**
>
> **Der Punkt erscheint nur, solange die Maschine steht.** In Bewegung entfernt ihn das Panel ohne Meldung aus dem Kontextmenü. Und solange die Kalibrierung geöffnet ist, befindet sich **jeder** Elektromotor der Maschine – Saat und Dünger – im Handmodus bei Drehzahl null: Nichts wird dosiert. Beim Verlassen der Kalibrierung kehren alle zur automatischen Mengenregelung zurück.

::: steps
1. Halten Sie die Kachel des Motors gedrückt und wählen Sie **„Dosierer-Kalibrierung (Masse)“**.

   ![Das Kontextmenü des Motors mit dem Kalibrierpunkt oben.](figures/ctx-motor-lower)

2. Der erste Bildschirm zeigt die Sollmengen und unter **„Geschwindigkeitsgrenze der Dosierung:“** die Werte **„Min. Geschwindigkeit, km/h“** und **„Max. Geschwindigkeit, km/h“**, die die aktuellen Einstellungen zulassen. Steht dort in Rot **„Dosierung unmöglich!“**, kann die eingebaute Walze die Menge bei keiner Geschwindigkeit liefern – die Kalibrierung behebt das nicht; bauen Sie eine andere Walze ein. Andernfalls berühren Sie **„Elektromotor N kalibrieren“** (oder drücken Sie **„PLUS“**).

3. Der zweite Bildschirm bereitet den Rotor vor. Wiegen Sie den leeren Behälter und notieren Sie das Gewicht. Füllen Sie den Saatgutbehälter und stellen Sie den leeren Behälter unter den Dosierer.

4. Berühren Sie **„Rotorzellen füllen“** (oder drücken Sie **„MENU“**). Der Motor dreht die angetriebene Welle genau **zwei Umdrehungen** und stoppt von selbst. **„Motor stoppen“** (**„BACK“**) unterbricht ihn. Wiederholen Sie dies, bis die Zellen voll sind.

5. Berühren Sie **„Zur Kalibrierung“** (oder drücken Sie **„UP“**). Der dritte Bildschirm zeigt **„Umdrehungen“** auf eine Nachkommastelle.

6. Leeren Sie den Behälter und stellen Sie ihn wieder unter den Dosierer.

7. Berühren Sie **„Kalibrierung“** (oder drücken Sie **„MENU“**): Der Motor läuft. Berühren Sie **„Motor stoppen“** (oder drücken Sie **„BACK“**), um ihn anzuhalten. Starten und stoppen Sie so oft wie nötig – der Zähler führt eine laufende Summe. Füllen Sie den Behälter so voll wie möglich, **nicht weniger als 1 kg und nicht mehr als 60 kg**.

8. Berühren Sie **„Beenden“** (oder drücken Sie **„MINUS“**). Die Taste erscheint, sobald mehr als **eine volle Umdrehung** gemacht wurde.

9. Wiegen Sie den gefüllten Behälter. Das Zahlenfeld fragt nach der Differenz zwischen gefülltem und leerem Behälter in Gramm – **1000 bis 60000 g**. Geben Sie sie ein und berühren Sie **„OK“**. Das Panel speichert **„Masse, g“** und **„Umdrehungen“** für diesen Motor.
:::

Beim Füllen des Rotors läuft der Motor in der Mitte seines Fensters **„Minimum, U/min“** … **„Maximum, U/min“**, jedoch nicht schneller als 60 U/min.

## Motor von einer Taste am Dosierer aus laufen lassen {#run-the-motor-from-a-button-at-the-dispenser}

Ist **„Tasteneingang“** des Motors auf einen Eingang (1 … 3) gesetzt und **„Aktivierungssignal“** passend zu dieser Taste eingestellt ([Dosierer-Elektromotor](dispenser-motor.md)), startet und stoppt eine Taste an diesem Eingang den Motor genau wie **„Kalibrierung“** und **„Motor stoppen“**: **Der Motor läuft, solange die Taste gehalten wird, und stoppt, wenn sie losgelassen wird.** So kann eine Person mit dem Behälter am Dosierer stehen, statt zwischen den Durchläufen zur Kabine zu gehen. Der Bildschirm zeigt dieselben Tasten, ob eine solche Taste eingerichtet ist oder nicht – das Panel gibt keinen Hinweis darauf.

## Wenn die Kalibrierung von selbst stoppt {#when-the-calibration-stops-by-itself}

Die Kalibrierung endet mit einem Fehler, wenn der Motor nicht mehr antwortet, wenn der Motor einen Alarm auslöst oder wenn **zehn Sekunden lang keine Impulse vom Drehsensor** kommen – dann zeigt das Panel **„Keine Daten vom Drehsensor“**. Ein blockierter oder abgezogener Drehsensor beendet den Lauf, statt stillschweigend null zu speichern.
