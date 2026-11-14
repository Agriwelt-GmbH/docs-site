---
title: Dosierer nach Gewicht kalibrieren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/calibrate-dispenser-weight.html
---

# Dosierer nach Gewicht kalibrieren

Drehen Sie einen bodenradgetriebenen Dosierer in einen Behälter und wiegen Sie das Produkt, damit das Panel die Menge in Kilogramm je Hektar überwachen kann.

Diese Kalibrierung speichert, wie viele Gramm der Dosierer je Wellenimpuls abgibt — **„Weight, gr“** (Gewicht, g) und **„Weight, pulses“** (Gewicht, Impulse) des Dosierersensors. Wiederholen Sie sie bei jedem Produktwechsel. Sie erfolgt im Stand, auf der Ebene **„Operator“** (Fahrer); das Panel hebt sich für die Dauer der Kalibrierung selbst auf **„Agronomist“** (Agronom) und setzt die Ebene beim Verlassen zurück.

**Sie brauchen:** einen Behälter, der 2 bis 60 kg des Produkts fasst, und eine Waage.

Der Punkt ist nur da, wenn **„Weight control“** (Gewichtsüberwachung) für diesen Dosierer eingeschaltet ist ([Sensor der Dosierwelle](dispenser-sensor.md)). Jeder Schritt ist ein Tippen auf eine Taste des Bildschirms.

::: steps
1. Berühren und halten Sie das Symbol der Dosiereinheit auf dem Startbildschirm. Tippen Sie auf **„Dispenser calibration(weight)“** (Dosiererkalibrierung nach Gewicht) und noch einmal darauf. Der erste Bildschirm listet die Sollmengen der verwendeten Produkte in kg/ha; das Produkt dieses Dosierers ist markiert.

   ![Der erste Bildschirm der Kalibrierung nach Gewicht.](figures/five-calib-dispenser-weight)

2. Tippen Sie auf **„Calibrate dispenser N“** (Dosierer N kalibrieren). Lässt sich der Dosierer nicht kalibrieren, steht dort stattdessen eine rote Zeile mit dem Grund: **„Not controlled“** (Nicht überwacht), **„No connection“** (Keine Verbindung) oder **„FAILURE“** (Fehler). **„Exit“** (Beenden) verlässt den Bildschirm.

3. Der zweite Bildschirm nennt die Vorbereitung. Wiegen Sie den leeren Behälter und notieren Sie das Gewicht.

4. Füllen Sie den Saatgutbehälter mit dem Produkt und stellen Sie den leeren Behälter unter den Dosierer.

5. Drehen Sie den Rotor, bis seine Zellen gefüllt sind. **Das ist wichtiger, als es aussieht:** Ein Rotor mit leeren Zellen gibt in den ersten Umdrehungen zu wenig ab, und dieser Fehler landet im gespeicherten Wert.

6. Tippen Sie auf **„Go to calibration“** (Zur Kalibrierung). **„Cancel“** (Abbrechen) führt stattdessen zum ersten Bildschirm zurück. Der dritte Bildschirm zählt **„Impulses“** (Impulse) und dreht ein Rotorsymbol, während sie eintreffen.

7. Leeren Sie den Behälter und stellen Sie ihn wieder unter den Dosierer.

8. Drehen Sie den Dosierrotor und füllen Sie den Behälter so weit wie möglich — **nicht weniger als 2 kg und nicht mehr als 60 kg**.

9. Tippen Sie auf **„Complete“** (Abschließen). Die Taste erscheint erst nach **mehr als zehn Impulsen**. **„Cancel“** fragt **„Are you sure?“** (Sind Sie sicher?), bevor die Messung verworfen wird.

10. Wiegen Sie den gefüllten Behälter. Das Zahlenfeld verlangt **„Enter the difference of the filled and empty container in grams“** (Differenz aus vollem und leerem Behälter in Gramm eingeben). Geben Sie das Gewicht des Produkts allein ein — **2000 bis 60000 g**; das Feld schlägt 10000 vor — und tippen Sie auf **„OK“**. Das Panel speichert **„Weight, gr“** und **„Weight, pulses“**.
:::

Ein Gewicht außerhalb von 2000 … 60000 g wird nicht abgelehnt: Das Panel nimmt die nächste Grenze. Wiegen Sie sorgfältig und bleiben Sie im Bereich.

> **HINWEIS**
>
> **Ein Dosiereralarm während der Kalibrierung hält sie nicht an** — nur eine verlorene Verbindung tut das. Die Messung ist mechanisch, und das Panel hält sich heraus, bis der Behälter gewogen ist. Ein Dosierer, der bereits im Alarm steht, kann keine Kalibrierung starten.
