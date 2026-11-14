---
title: Dosierer nach Gewicht kalibrieren
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/calibrate-dispenser-weight.html
---

# Dosierer nach Gewicht kalibrieren

Lassen Sie den Dosierer in einen Behälter laufen und wiegen Sie ihn, damit der Hectare Mini weiß, wie viel Produkt eine Wellenumdrehung ausbringt – nötig für die „Massenüberw.“.

Mit **„Massenüberw.“** auf **„Ja“** zählt das Panel das ausgebrachte Produkt aus den Umdrehungen der Dosierwelle ([Dosierwellensensor](dispenser-sensor.md)). Die Kalibrierung misst das Gewicht je Impuls und schreibt **„Masse, g“** und **„Masse, Impulse“**. Sie wird auf der Ebene **„Fahrer“** im Stand durchgeführt.

> **WICHTIG**
>
> **Kalibrieren Sie nach jedem Wechsel der Dosierwalze, nach jeder Änderung von Variator oder Getriebe im Dosiererantrieb und nach jedem Wechsel des Saatguts im Behälter erneut.** Sonst ist das angezeigte Gewicht falsch.

Sie brauchen einen Behälter, eine Waage und eine Möglichkeit, die Dosierwelle von Hand zu drehen.

::: steps
1. Halten Sie auf dem Startbildschirm **„MENU“** gedrückt, wählen Sie den Dosierersensor und drücken Sie **„MENU“**. Das Kontextmenü öffnet sich.

2. Wählen Sie **„Dosierer-Kalibr.(Masse)“** und drücken Sie **„MENU“**. Der Kalibrierbildschirm zeigt die Sollmengen der verwendeten Produkte – das Produkt dieses Dosierers zwischen Pfeilen – und **„PLUS - Dosierer 1 kalibrieren“** mit der Nummer des Dosierers.

3. Drücken Sie **„PLUS“**. Das Panel listet auf, was vor der Kalibrierung zu tun ist: den leeren Behälter wiegen und das Gewicht notieren; den Behälter füllen; den leeren Behälter unter den Dosierer stellen; den Rotor drehen, bis seine Zellen gefüllt sind. Erledigen Sie alles und drücken Sie dann **„UP“**.

4. Der nächste Bildschirm listet die Kalibrierung selbst auf und zählt die **„Impulse“** vom Sensor: Leeren Sie den Behälter, stellen Sie ihn wieder unter den Dosierer und drehen Sie den Rotor, sodass der Behälter sich füllt – möglichst viel, zwischen 2 kg und 60 kg.

5. Sobald mehr als zehn Impulse gezählt sind, erscheint die Zeile **„MINUS - Kalibrierung beenden“**. Drehen Sie weiter, bis der Behälter so viel enthält, wie Sie schaffen – mindestens 100 Impulse und 5 kg ergeben ein gutes Ergebnis. Hören Sie dann auf.

6. Drücken Sie **„MINUS“**. Das Zahlenfeld öffnet sich: **„Differenz zwischen gefülltem und leerem Behälter in Gramm eingeben“**.

7. Wiegen Sie den vollen Behälter, ziehen Sie das Leergewicht ab, geben Sie die Differenz in Gramm ein (2000 bis 60000) und berühren Sie **„OK“**. Das Panel speichert die Werte und kehrt zum ersten Bildschirm zurück.

8. Drücken Sie **„BACK“**, um zu verlassen.
:::

![Kalibrierung nach Gewicht: der Menüpunkt, der erste Bildschirm, die Liste vor der Kalibrierung, die Liste mit dem Impulszähler, die Zeile MINUS - Kalibrierung beenden und die Gewichtseingabe.](figures/cal-mass-steps)

**„BACK“** auf der Liste vor der Kalibrierung bricht sie ab. **„BACK“** während der Kalibrierung fragt **„Sind Sie sicher?“** – **„PLUS“** bricht ab, **„MINUS“** macht weiter. **„BACK“** auf dem Zahlenfeld behält die alten Werte.

## Wenn sie nicht startet oder stoppt {#when-it-does-not-start-or-stops}

**„PLUS“** in Schritt 3 funktioniert nur, solange der Sensor überwacht wird, antwortet und keinen Alarm hat. Sonst nennt der erste Bildschirm den Grund – **„Nicht überwacht“**, **„Keine Verbindung“** oder **„ALARM“**. Fällt der Sensor während der Kalibrierung aus, zeigt das Panel **„ALARM“** mit dem Grund; **„BACK“** führt zum ersten Bildschirm zurück.
