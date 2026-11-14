---
title: GPS-Empfang und der Informationsbildschirm GPS
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/gps-receiver.html
---

# GPS-Empfang und der Informationsbildschirm GPS

Wie der Hectare Mini die Fahrgeschwindigkeit aus seinem eingebauten GPS-Empfänger nimmt, was die Farbe des Satellitensymbols bedeutet und wie Sie den Informationsbildschirm GPS lesen.

Im Panel ist ein GPS-Empfänger eingebaut. Er liefert die Fahrgeschwindigkeit dort, wo die Drillmaschine keinen Rad- oder Radarsensor hat, oder zusätzlich zu einem. Solange der Empfänger antwortet und eine gültige Ortung hat, kommt die Geschwindigkeit vom GPS. Verstummt er oder verliert er das Signal, übernimmt der unter **„Geschw.“** im [Profil](profile.md) eingestellte Sensor von selbst — Sie müssen nichts umschalten.

Eingeschaltet wird der Empfänger über den Profilpunkt **GPS**: **UBX** für den eingebauten Empfänger (die normale Einstellung) oder **NMEA**; **„Nein“** schaltet ihn aus und blendet das Satellitensymbol aus.

> **WICHTIG**
>
> **GPS braucht einen Geschwindigkeitssensor im Profil.** Ohne ihn springt der Punkt **GPS** beim Speichern des Profils auf **„Nein“** zurück. An einer Drillmaschine ohne Antriebsrad genügt es, **„Geschw.“** auf **„Bedienpanel“** zu stellen, ohne dort einen Sensor anzuschließen — das belegt keinen Platz im Sensornetz. Geht dann das GPS-Signal verloren, zeigt das Panel keine Fahrgeschwindigkeit an, bis der Empfang zurückkehrt.

## Das Satellitensymbol {#the-satellite-icon}

Das Symbol steht am rechten Rand des Startbildschirms, mit der Zahl der genutzten Satelliten in seiner unteren rechten Ecke.

![Das Satellitensymbol in seinen Zuständen: Empfänger stumm, keine Ortung, 3, 6 und 12 Satelliten.](figures/gps-satellite-icon)

| **Farbe** | **Bedeutung** |
| --- | --- |
| Rot | Der Empfänger antwortet nicht oder antwortet ohne gültige Ortung — normal in Räumen und gleich nach dem Einschalten. Solange der Empfänger schweigt, wird die Zahl nicht angezeigt. |
| Grau | Gültige Ortung, weniger als 5 Satelliten. |
| Gelb | Gültige Ortung, 5 bis 7 Satelliten. |
| Grau | Gültige Ortung, 8 Satelliten oder mehr. Die beiden grauen Zustände unterscheiden sich nur durch die Zahl. |

## Der Informationsbildschirm {#the-information-screen}

Zum Öffnen halten Sie auf dem Startbildschirm **„MENU“** gedrückt, wählen mit **„UP“** / **„DOWN“** das Satellitensymbol und drücken **„MENU“**.

::: {.anatomy fig="gps-information-screen"}
1. **„GPS-Signal:“** **„Ja“**, wenn der Empfänger antwortet, sonst **„Nein“**.
2. **Satelliten** — die Zahl der gesehenen und die Zahl der in der Ortung genutzten.
3. **Geschwindigkeit** — die Geschwindigkeit, wie die Aussaat sie verwendet. Unter einer kleinen Stillstandsschwelle zeigt sie 0 km/h, damit eine stehende Drillmaschine keine Fläche zählt.
4. **raw** — die ungefilterte Geschwindigkeit und ob die Ortung gültig ist.
5. **UTC** — Datum und Uhrzeit vom Empfänger; Nullen vor der ersten gültigen Ortung.
6. **Empfangszähler.** Bei **NMEA**: empfangene Bytes, gültige Sätze, Prüfsummenfehler und die gefundene Baudrate; bei **UBX**: Bytes, Rahmen und Fehler.
7. **ring drop** — im Empfangspuffer verlorene Bytes. Eine steigende Zahl heißt, dass die Verbindung zum Empfänger gestört ist.
8. **BACK** verlässt den Bildschirm.

Der Informationsbildschirm GPS mit auf NMEA gestelltem Empfänger, am Prüfstand.
:::

Der Bildschirm zeigt nur an; nichts darauf lässt sich ändern, und ein Zugangscode ist nicht nötig.
