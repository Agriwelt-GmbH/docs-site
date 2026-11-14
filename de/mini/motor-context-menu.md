---
title: Das Kontextmenü eines Dosiermotors
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/motor-context-menu.html
---

# Das Kontextmenü eines Dosiermotors

Jeder Punkt des Kontextmenüs eines elektrischen Dosiermotors — was er einstellt, ab welcher Zugriffsstufe er sichtbar ist und was „Standardwerte“ wirklich zurücksetzt.

Halten Sie auf dem [Bildschirm Motoren](motors-screen.md) **„MENU“** gedrückt, wählen Sie den Motor mit **„UP“** / **„DOWN“** und drücken Sie **„MENU“**. Was das Menü enthält, hängt von der Zugriffsstufe und vom Aussaatmodus des Motors ab.

![Das Kontextmenü eines Saatmotors, Stufe Agronom, Maschine im Stillstand, Modus Durchfluss.](figures/mini-motors-context-menu)

| **Punkt** | **Stufe** | **Was er bewirkt** |
| --- | --- | --- |
| **„Information“** | Agronom | Öffnet den Statusbildschirm des Motors. |
| **„Elektromotoren“** | Service | Öffnet den Servicebildschirm der Motoren — siehe [Der Bildschirm Motoren](motors-screen.md). |
| **„Dosierer-Kalibr.(Masse)“** | Fahrer | Startet die [Kalibrierung nach Masse](calibrate-motor-weight.md). Nur angezeigt, solange die Maschine steht. |
| **„Produkttyp“** | Agronom | Welches der drei Produkte der Motor ausbringt — [Produkt einem Motor zuweisen](assign-product-to-motor.md). |
| **„Masse, g“** und **„Umdrehung.“** | Agronom | Zusammen beschreiben sie den Dosierer: diese Masse Produkt bei dieser Zahl von Wellenumdrehungen. Von der Kalibrierung gesetzt; ändern Sie sie von Hand nur, um die Werte eines baugleichen Dosierers zu übernehmen. |
| **„Minimum, U/min“**, **„Maximum, U/min“** | Agronom | Die zulässigen Wellendrehzahlen. Daraus berechnet das Panel die Fahrgeschwindigkeiten, bei denen sich die Menge ausbringen lässt. Das Minimum kann das Maximum nicht erreichen: Das Panel verschiebt den anderen Wert um einen Schritt. |
| **„Tasteneingang“**, **„Aktivier.-Signal“** | Agronom | Ein Taster am Motorcontroller, um den Motor während der Kalibrierung von der Maschine aus laufen zu lassen. Steht **„Tasteneingang“** auf **„Nein“**, wird die Kalibrierung nur vom Panel aus durchgeführt. |
| **„Löcher in Scheibe“** | Fahrer | Die Zahl der Zellen in der Säscheibe; daraus berechnet das Panel die Scheibendrehzahl. Nur im Modus **„Einzelkorn“**. |
| **„Zähler“**, **„Nenner“** | Agronom | Das Übersetzungsverhältnis zwischen Motor und angetriebener Welle, wie der Maschinenhersteller es eingestellt hat. Ändern Sie es nur, nachdem der Antrieb umgebaut wurde. |
| **„Drehrichtung“** | Agronom | **„Vorwärts“** oder **„Rückwärts“**, je nachdem, wie der Motor eingebaut ist. |
| **„Rücklauf bei Block.“** | Agronom | **„Ja“**: Blockiert der Dosierer, läuft der Motor kurz zurück, um ihn zu lösen. **„Nein“**: Der Motor wird nur angehalten. |
| **„Standardwerte“** | Service | Setzt die eigenen Einstellungen dieses Motors zurück — siehe den Kasten VORSICHT unten. |

Weitere Punkte auf der Stufe „Service“ sind Werkzeuge des Servicetechnikers und werden hier nicht beschrieben.

**Massenpunkte nur in „Durchfluss“ und „Hybrid“.** **„Dosierer-Kalibr.(Masse)“**, **„Produkttyp“**, **„Masse, g“**, **„Umdrehung.“**, die Drehzahlgrenzen und die Tasterpunkte erscheinen nur, wenn der Motor im Modus **„Durchfluss“** oder **„Hybrid“** arbeitet. Im Modus **„Einzelkorn“** kommt die Menge von den Kornsensoren, es gibt nichts nach Masse zu kalibrieren, und stattdessen erscheint **„Löcher in Scheibe“**.

Den Motor in die Überwachung zu nehmen oder aus ihr zu nehmen, steht nicht in diesem Menü: Das erledigen **„PLUS“** und **„MINUS“** auf dem Bildschirm Motoren.

> **VORSICHT**
>
> **„Standardwerte“ ist ein Zurücksetzen, keine Einstellung.** **„Löcher in Scheibe“**, **„Zähler“**, **„Nenner“**, **„Drehrichtung“** und **„Rücklauf bei Block.“** dieses Motors kehren zu ihren Werkseinstellungen zurück, und der Motor wird **ohne Rückfrage** wieder in die Überwachung genommen. Die Kalibrierwerte, der Produkttyp und die Drehzahlgrenzen bleiben, wie sie sind.
