---
title: Dosierer-Elektromotor
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/dispenser-motor.html
---

# Dosierer-Elektromotor

Die Parameter eines elektrischen Dosiermotors – Übersetzung, Drehrichtung, Drehzahlfenster, Produkt, Kalibrierwerte und die Kalibriertaste.

Ein Elektromotor treibt einen Dosierer mit der Drehzahl an, die das Panel aus der Sollmenge und der Fahrgeschwindigkeit berechnet. Öffnen Sie sein Kontextmenü wie in [Sensoreinstellungen](sensor-settings.md).

![Das Kontextmenü eines Dosiermotors, oberer Teil.](figures/ctx-motor)

| Parameter | Was er bewirkt | Bereich | Ebene |
| --- | --- | --- | --- |
| **„Löcher in Scheibe“** | **Nur im Modus „Einzelkorn“.** | 1 … 200 | Fahrer |
| **„Zähler“** / **„Nenner“** | Zusammen: das Übersetzungsverhältnis zwischen Motor und Dosierwelle. | je 1 … 500 | Agronom |
| **„Drehrichtung“** | Die Drehrichtung des Motors. Stellen Sie sie so ein, dass sich der Dosierer bei der Einbaulage des Motors richtig herum dreht; Standardwert **„Vorwärts“**. | **„Vorwärts“** / **„Rückwärts“** | Agronom |
| **„Rücklauf bei Blockierung“** | Den Rotor zurückdrehen und erneut versuchen, statt stehenzubleiben. | **„Nein“** / **„Ja“** | Agronom |
| **„Sektionssteuerung D.E.“** | Lässt einen Schalter am Sektionssteuerungseingang des Motorcontrollers diesen Motor anhalten: **„Abschalten(0)“** hält ihn an, solange der Eingang 0 meldet, **„Abschalten(1)“**, solange er 1 meldet; **„Nein“** ignoriert den Eingang. | **„Nein“** / **„Abschalten(0)“** / **„Abschalten(1)“** | Service |
| **„Startverzögerung, mS“** | Die kürzeste Zeit zwischen dem Start eines Dosiermotors und dem nächsten: Ein Motor, der früher starten würde, wartet, sodass die Motoren nacheinander anlaufen. Standardwert 30 ms. | 0 … 500, Schritte von 5 | Service |
| **„Startadresse Gruppe“** | Wird bei der Inbetriebnahme eingestellt – siehe [Gerätekonfiguration](device-configuration.md). | | Service |
| **„Produkttyp“** | Welches der vier Produkte dieser Motor dosiert. | | Agronom |
| **„Masse, g“** / **„Umdrehungen“** | Beide werden von der Kalibrierung nach Masse gesetzt. | je 1 … 65535 | Agronom |
| **„Minimum, U/min“** / **„Maximum, U/min“** | Das Drehzahlfenster der Welle, das das Panel nutzen darf. | je 0,1 … 500,0 | Agronom |
| **„Tasteneingang“** | Digitaler Eingang des Motorcontrollers, der als Kalibriertaste dient; **„Nein“** = keiner. | Nein, 1 … 3 | Agronom |
| **„Aktivierungssignal“** | Welcher Zustand dieses Eingangs als gedrückt zählt. | 0 / 1 | Agronom |

![Der untere Teil desselben Menüs mit dem Kalibrierpunkt.](figures/ctx-motor-lower)

**„Minimum, U/min“** und **„Maximum, U/min“** sind keine Sicherheitsgrenze, sondern das Fenster, in dem die Mengenregelung arbeitet. Das Fenster der Dosiergeschwindigkeit auf dem Kalibrierbildschirm wird aus ihnen zusammen mit den Werten der Dosierwalze berechnet. **„Tasteneingang“** und **„Aktivierungssignal“** erlauben es einer Person, den Motor während der Kalibrierung am Dosierer zu starten – siehe [Dosiermotor nach Masse kalibrieren](calibrate-motor-weight.md).

Der Statusbildschirm zeigt **„Betrieb“** oder **„Defekt“** und den letzten Fehlercode ([Fehlercode eines Elektromotors auslesen](motor-fault-codes.md)). Alarme: [Alarme der Dosiermotoren](alarms-motor-controller.md), [Dosierung nach Masse](alarms-dosing-by-weight.md). Der Controller selbst wird eingerichtet unter [Motorcontroller konfigurieren](configure-motor-controllers.md). **„Elektromotoren“** im Kontextmenü (Ebene **„Service“**) öffnet den Motorenbildschirm bei diesem Motor – denselben Bildschirm wie **„Service“** → **„Elektromotoren“** ([Diagnose der Motorcontroller](motor-controller-diagnostics.md)).
