---
title: Dosierwellensensor
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/dispenser-sensor.html
---

# Dosierwellensensor

Die Einstellungen eines Dosierwellensensors des Hectare Mini – die Periode für „Kein Lauf“, die Überwachung der Wellendrehzahl gegen die Fahrgeschwindigkeit und die Überwachung des Produktgewichts – mit Bereichen und Werkseinstellungen.

Ein Dosierwellensensor zählt die Umdrehungen der Dosierwelle. Mindestens zeigt er an, dass die Welle stehen geblieben ist. Kalibriert, überwacht er außerdem die Wellendrehzahl gegen die Fahrgeschwindigkeit oder zählt das Gewicht des ausgebrachten Produkts. **Jeder Dosierersensor hat eigene Einstellungen** – stellen Sie jeden einzeln ein.

Öffnen Sie sein Kontextmenü wie in [Sensoreinstellungen](sensor-settings.md) beschrieben.

![Das Kontextmenü eines Dosierwellensensors.](figures/ctx-dispenser)

| **Parameter** | **Ebene** | **Was er bewirkt** | **Bereich · Werkseinstellung** |
| --- | --- | --- | --- |
| **„Dosierer-Kalibr.(Masse)“** | Fahrer | Startet die Kalibrierung nach Gewicht – [Dosierer nach Gewicht kalibrieren](calibrate-dispenser-weight.md). Nur sichtbar mit **„Massenüberw.“** auf **„Ja“**. | – |
| **„Periode,s“** | Fahrer | Die längste Zeit zwischen zwei Impulsen des Sensors. Liefert die Welle länger keinen Impuls, während die Maschine sät oder fährt, löst das Panel **„Kein Lauf“** aus. | 1 … 60 s · 10 s |
| **„Drehzahlüberwachung“** | Agronom | **„Ja“**: Die Wellendrehzahl wird gegen die Fahrgeschwindigkeit überwacht, innerhalb von **„Max. Fehler, %“**. **„Nein“**: nur, ob sich die Welle überhaupt dreht. **Erfordert die Drehungskalibrierung.** | **„Nein“** / **„Ja“** · **„Nein“** |
| **„Rad, Impulse“** | Agronom | Impulse des Geschwindigkeitssensors, die zu **„Dosierer Impulse“** dieses Sensors gehören. Wird von der Drehungskalibrierung geschrieben. Sichtbar mit **„Drehzahlüberwachung“** auf **„Ja“**. | 1 … 65535 · 100 |
| **„Dosierer Impulse“** | Agronom | Impulse dieses Sensors, die zu **„Rad, Impulse“** gehören. Wird von der Drehungskalibrierung geschrieben. | 1 … 65535 · 100 |
| **„Max. Fehler, %“** | Agronom | Zulässige Abweichung der Wellendrehzahl; darüber, während die Maschine fährt, **„Drehzahl zu niedrig“** oder **„Drehzahl zu hoch“**. | 1 … 50 % · 10 % |
| **„Massenüberw.“** | Agronom | **„Ja“**: Das Panel zählt aus den Umdrehungen dieser Welle das Gewicht des ausgebrachten Produkts je Hektar. **Erfordert die Kalibrierung nach Gewicht.** | **„Nein“** / **„Ja“** · **„Nein“** |
| **„Produkttyp“** | Agronom | Welches Produkt dieser Dosierer ausbringt: **„Produkt 1“**, **„Produkt 2“** oder **„Produkt 3“**. Sichtbar mit **„Massenüberw.“** auf **„Ja“**. | · **„Produkt 1“** |
| **„Masse, g“** | Agronom | Gewicht des Produkts, das zu **„Masse, Impulse“** gehört – zusammen die Ausbringung des Dosierers je Umdrehung. Wird von der Kalibrierung nach Gewicht geschrieben. | 1 … 65535 · 10000 |
| **„Masse, Impulse“** | Agronom | Impulse dieses Sensors, die zu **„Masse, g“** gehören. | 1 … 65535 · 100 |

Ohne Geschwindigkeitssensor im Profil kann das Panel nur überwachen, ob sich die Welle dreht: Die Punkte für Drehzahl und Gewicht sind ausgeblendet.

## Produkttyp {#type-of-product}

Das Panel verfolgt bis zu drei Produkte nach Gewicht. Dosierer, die dasselbe Produkt ausbringen, erhalten dieselbe Nummer:

| **Maschine** | **Einstellung** |
| --- | --- |
| Ein Dosierersensor | **„Produkt 1“**. |
| Zwei Dosierer, dasselbe Saatgut | **„Produkt 1“** an beiden. |
| Zwei Dosierer, Saatgut und Trockendünger | **„Produkt 1“** am Saatgut-Dosierer, **„Produkt 2“** am Dünger-Dosierer. |
| Drei Dosierer, zwei für Saatgut, einer für Dünger | **„Produkt 1“** an den beiden Saatgut-Dosierern, **„Produkt 2“** am dritten. |

Ein Produkt, das bereits ein Elektromotor dosiert, lässt sich hier nicht wählen; das Panel springt zum nächsten freien. Ist kein Produkt frei, bleibt **„Massenüberw.“** auf **„Nein“**.

> **WICHTIG**
>
> **Das Ändern von „Produkttyp“, das Ein- oder Ausschalten von „Massenüberw.“ oder das Hinein- oder Herausnehmen eines gewichtsüberwachten Dosierersensors in die oder aus der Überwachung kann die Statistik des aktiven Feldes löschen.** Enthält das Feld bereits Daten, fragt das Panel zuvor nach – Statistik des aktiven Feldes löschen; **„MENU“** für **„Ja“**, **„BACK“** für **„Nein“**. Um die Daten zu erhalten, wählen Sie zuerst ein leeres Feld ([Neues Feld beginnen](start-a-new-field.md)).

## Der Statusbildschirm {#the-status-screen}

Zeigt die Impulsfrequenz **F=** in Hz, mit drei Nachkommastellen – [Der Sensor-Statusbildschirm](sensor-status-screen.md).

![Der Statusbildschirm eines Dosierwellensensors.](figures/status-dispenser)
