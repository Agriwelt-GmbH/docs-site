---
title: Dosierung nach Gewicht: Produktmenge zu niedrig oder zu hoch
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-dosing-by-weight.html
---

# Dosierung nach Gewicht: Produktmenge zu niedrig oder zu hoch

Was zu tun ist, wenn der Hectare Mini meldet, dass ein nach Gewicht dosiertes Produkt unter oder über seiner Sollmenge ausgebracht wird oder gar nicht dosiert werden kann.

Das sind Alarme des Systems als Ganzes: Das Fenster hat keine Gerätezeile. Sie kommen nur, wenn ein Produkt nach Gewicht verfolgt wird – durch einen Dosierwellensensor mit **„Massenüberw.“** auf **„Ja“** oder durch Dosierermotoren. Die Zahl im Text ist die Nummer des Produkts, **„Produkt 1“** bis **„Produkt 3“**.

## „Menge Produkt 1 zu gering!“ / „Menge Produkt 1 zu hoch!“ {#rate-of-product-1-is-to-low-rate-of-product-1-is-to-high}

**Was es bedeutet.** Das ausgebrachte Produktgewicht je Hektar weicht von seiner Sollmenge um mehr als **„Produktmenge Fehler,%“** des Menüs **„Einstell.“** ab ([Das Menü Einstellungen](settings-menu.md)).

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Sollmenge des Produkts – [Sollmenge ändern](set-the-target-rate.md).
2. Das Dosiergerät: Walze, Variator- oder Getriebeeinstellung, Produktfluss aus dem Behälter.
3. Die Einstellungen des Dosierwellensensors, der dieses Produkt ausbringt, und sein **„Produkttyp“** – [Dosierwellensensor](dispenser-sensor.md).
4. Der Dosierwellensensor ist in Ordnung.
5. Kalibrieren Sie erneut nach Gewicht – [Dosierer nach Gewicht kalibrieren](calibrate-dispenser-weight.md), bei Motoren [Motor nach Gewicht kalibrieren](calibrate-motor-weight.md). Eine neue Walze, eine andere Einstellung des Antriebs oder anderes Saatgut erfordern immer eine neue Kalibrierung.

## „Produktdosierung nicht möglich! Menge und Kalibrierung prüfen!“ {#product-dosage-is-impossible-check-product-rate-and-calibration}

**Was es bedeutet.** Bei einer Maschine mit Dosierermotoren: Mit den aktuellen Sollmengen und Kalibrierungen gibt es keine Fahrgeschwindigkeit, bei der die Motoren alle Produkte ausbringen könnten. Das Panel zeigt es bei jedem Beginn der Aussaat erneut.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Sollmengen der Produkte.
2. Die Kalibrierung der Motoren und ihre Drehzahlgrenzen der Welle – [Motor nach Gewicht kalibrieren](calibrate-motor-weight.md).
