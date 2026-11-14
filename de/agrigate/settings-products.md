---
title: Einstellungen — Produkte: Überwachungsmodus, Fraktion und Sollmenge
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/settings-products.html
---

# Einstellungen — Produkte: Überwachungsmodus, Fraktion und Sollmenge

Wählen Sie, wie jede Reihengruppe bewertet wird — Durchfluss, Hybrid oder Einzelkorn —, stellen Sie die Fraktion ein, ab der die Sensoren etwas als Korn zählen, und die Sollmenge in Körnern je Meter.

**„Einstellungen“** › **„Produkte“** hat einen Abschnitt **„Saatgut“** und, wenn Düngersensoren im Profil sind, einen Abschnitt **„Dünger“**. Jede Gruppe hat ihre eigenen Einstellungen.

## Überwachungsmodus {#control-mode}

**„Überwachungsmodus“** bestimmt, wie die Reihen der Gruppe bewertet werden.

| Modus | Was er misst | Was er braucht |
| --- | --- | --- |
| Durchfluss | Körner je Sekunde in jeder Reihe, gegen die Überwachungslinie, die Sie auf dem Reihenbildschirm ziehen. Eine Reihe unter der Linie ist gelb; eine Reihe ohne Fluss ist rot. | Nichts weiter: keine Geschwindigkeit, keine Fläche. |
| **„Hybrid“** | Körner je Meter Reihe, in ganzen Zahlen, aus der GNSS-Geschwindigkeit des iPad. Eine Reihe unter dem Toleranzband zeigt **„Unter Sollmenge“**, darüber **„Über Sollmenge“**. Doppelbelegungen und Fehlstellen werden nicht gezählt. | Ein iPad mit GNSS und erlaubtem Standort. |
| **„Einzelkorn“** | Körner je Meter mit Zehnteln, aus der GNSS-Geschwindigkeit. Die Sensoren zählen auch Doppelbelegungen und Fehlstellen. Ohne frische Geschwindigkeit seit 2 Sekunden sagt das Reihenmenü **„Unbekannt: keine Geschwindigkeit“**. | Ein iPad mit GNSS und erlaubtem Standort. |

Hybrid und Einzelkorn werden nur angeboten, wenn das iPad eine Geschwindigkeit liefert. Wenn Sie zum ersten Mal einen der beiden wählen, zeigt die App **„Warte auf die GNSS-Geschwindigkeit des iPads …“**; kommt keine Geschwindigkeit, bleibt nur Durchfluss. Siehe [Was Sie brauchen](what-you-need.md).

## Sollmenge (Hybrid und Einzelkorn) {#rate-hybrid-and-precision}

**„Saatmenge“** — die gewünschten Körner je Meter, mit **−** / **+**. Darunter **„Tsd. Körner/ha“** — dieselbe Sollmenge je Hektar, aus der Arbeitsbreite errechnet — und das Alarmband: die Sollmenge, unter und über der eine Reihe einen Alarm auslöst, aus **„Toleranz“** in [Überwachung und Alarme](settings-control-alarms.md).

Sie können die Sollmenge auch auf dem Reihenbildschirm ändern (die Mengenspalte ziehen), auf der Kachel **„Dichte“** oder **„Saatmenge“** und auf der Seite **„Maschine“**.

## Fraktion {#fraction}

**„Fraktion“** — die Einstellung der Sensoren für die Korngröße. Wählen Sie die Kultur oder die Korngröße: **„Raps“**, **„Weizen“**, **„Gerste“**, **„Soja“**, **„Erbsen“**, **„Bohnen“**, **„Mais“**, **„Sonnenblume“**, **„Fein“**, **„Mittel“**, **„Grob“** oder **„Pneumatische Drillmaschine“**. Die Zahl in Klammern ist das, was der Sensor erhält.

Es gibt eine Fraktion für alle Saatreihen und eine für alle Düngerreihen. Das Gateway sendet sie an jeden Sensor der Gruppe; die Reihen zeigen dann nacheinander den Einrichtungsbalken, je einige Sekunden.

**„Experte“** öffnet **„Wert für den Sensor“**, die Zahl selbst, für den Service.

## Höchstsaat in der Fahrgasse {#max-seeding-in-tramline}

**„Max. Saat in Fahrgasse,%“** — wird an Maschinen mit Fahrgasse angezeigt. Eine Reihe in der Fahrgasse, die mehr als diesen Anteil der Sollmenge sät, löst **„Saat in Fahrgasse“** aus. Von 0 bis 50 %, 20 %, sofern nicht geändert. Siehe [Fahrgasse](tramline.md).

> **SIEHE AUCH**
>
> [Einstellungen „Überwachung und Alarme“](settings-control-alarms.md) · [Der Reihenbildschirm](rows-screen.md)
