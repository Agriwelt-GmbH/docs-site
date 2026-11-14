---
title: Neuberechnungsweg vom Panel berechnen lassen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/recalculation-path.html
---

# Neuberechnungsweg vom Panel berechnen lassen

Lassen Sie den Hectare Mini den besten Wert für „Neuberechn.,m“ für Fehlstellen und Doppelablagen aus der Sollmenge und den Löchern der Scheibe berechnen – mit oder ohne Dosierermotoren.

**„Neuberechn.,m“** der Kornsensoren ist die Strecke, über die das Panel Fehlstellen, Doppelablagen und Qualität sammelt, bevor es das Diagramm und die Aussaattabelle aktualisiert ([Korn- und Düngersensoren](seed-and-fertilizer-sensors.md)). Eine Strecke, die ganze Umdrehungen der Saatscheibe abdeckt, liefert die ruhigsten Werte. Das Panel kann sie aus der Sollmenge in Körnern je Meter und der Lochzahl der Scheibe berechnen.

> **WICHTIG**
>
> **Berechnen Sie den Weg immer neu, wenn sich die Sollmenge geändert hat.** Der alte Weg entspricht dann keinen ganzen Scheibenumdrehungen mehr.

::: steps
1. Stellen Sie zuerst die Sollmenge auf dem Startbildschirm ein – [Sollmenge ändern](set-the-target-rate.md). Die Berechnung verwendet die Sollmenge des Modus **„Einzelkorn“**.

2. Öffnen Sie das Kontextmenü eines beliebigen Kornsensors ([Sensoreinstellungen](sensor-settings.md)), wählen Sie **„Neuberechn.,m“** und drücken Sie **„MENU“**.

3. **Mit Dosierermotoren** fragt das Panel, ob Menge und Lochzahl eingestellt sind – **„Weg berechnen?“**. Drücken Sie **„PLUS“** für **„Ja“**. Es übernimmt die Löcher aus **„Löcher in Scheibe“** des Motors ([Das Kontextmenü eines Motors](motor-context-menu.md)).

   **Ohne Motoren** erinnert es zuerst daran, dass die Aussaatmenge bereits eingestellt sein muss; schließen Sie die Meldung. Geben Sie dann im Feld **„Löcher in Scheibe“** die Lochzahl der Scheibe ein (1 bis 500) und berühren Sie **„OK“**.

4. Das Panel berechnet den Weg und stellt ihn ein: die längste Strecke aus ganzen Scheibenumdrehungen, bis zu zehn, die in 50 m passt, verdoppelt, solange sie kürzer als 25 m ist.
:::

Ist schon eine einzige Umdrehung der Scheibe länger als 50 m, zeigt das Panel **„Berechneter Weg zu groß. Maximum gesetzt.“** und stellt 50 m ein.

**„Nein“** in Schritt 3 oder **„BACK“** im Feld lässt den Weg, wie er war. Sie können **„Neuberechn.,m“** jederzeit von Hand mit **„PLUS“** / **„MINUS“** einstellen, von 10 bis 50 m.

Ohne Geschwindigkeitssensor heißt der Punkt **„Neuberechn.,Sek“**, und die Strecke wird in Sekunden gezählt.
