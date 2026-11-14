---
title: Wie die Teile zusammenarbeiten
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/how-it-connects.html
---

# Wie die Teile zusammenarbeiten

Der Weg eines Messwerts vom Sensor im Saatrohr bis zum Bildschirm des iPad — Sensorleitung, Gateway, Bluetooth, App — und was jeder Teil weiß.

Ein Messwert nimmt diesen Weg:

1. **Der Sensor** im Saatrohr zählt die Körner seiner Reihe.
2. **Die Sensorleitung** an der Sämaschine führt die Messwerte aller Sensoren, des HUB-8 und der Fahrgassen-Aktuatoren in die Kabine. Jedes Gerät an der Leitung hat seine eigene Nummer; bei einem Kornsensor gehört sie zu seiner Reihe.
3. **Das Gateway** am Kabinenende der Sensorleitung fragt jedes Gerät der Reihe nach ab und sammelt die Antworten.
4. **Bluetooth** trägt sie vom Gateway zum Tablet, etwa zweimal pro Sekunde.
5. **Die Hectare-App** zeichnet die Reihen, bewertet sie gegen die Sollmenge und löst die Alarme aus.

## Was jeder Teil weiß {#what-each-part-knows}

| Teil | Weiß | Weiß nicht |
| --- | --- | --- |
| Sensor | Seine eigene Zählung und seine eigenen Störungen | Etwas über die anderen Reihen |
| Gateway | Welche Geräte an der Leitung sind, in welcher Reihenfolge, und was jedes antwortet. Es speichert das Maschinenprofil, das die App darauf schreibt. | Was ein Eingang des HUB-8 bedeutet — ein Behälter, ein Gebläse, die Arbeitsstellung. Das steckt in der App. |
| App | Alles, was Sie sehen: die Menge, die Überwachungslinie, die Alarme, die Statistik, die Bedeutung jedes Geräts | — |

Die Bewertung findet also in der App statt: die Alarmverzögerung, der Anteil der Reihen, die säen müssen, die Toleranz — all das wird in der App eingestellt. Siehe [Einstellungen „Überwachung und Alarme“](settings-control-alarms.md).

## Ein Gateway, ein Tablet {#one-gateway-one-tablet}

Ein Gateway spricht jeweils mit einem Tablet. Die App merkt sich ihr Gateway und verbindet sich von da an nur noch mit diesem; sind mehrere Gateways in Reichweite, fragt sie, welches Ihres ist. Siehe [Erste Verbindung mit dem Gateway](first-connection.md).

## Wenn die Verbindung abreißt {#when-the-link-is-lost}

Reißt Bluetooth ab oder hört das Gateway auf zu senden, dunkelt die App den Bildschirm ab — jede Zahl darauf ist veraltet — und öffnet nach 3 Sekunden das Alarmfenster **„Verbindung zur Brücke verloren“**. Das Fenster schließt sich von selbst, sobald das Gateway wieder antwortet. Siehe [Code 601](codes-6-gateway-link.md#c601).

> **SIEHE AUCH**
>
> [Was im Set enthalten ist](whats-in-the-kit.md) · [Das Gateway montieren und anschließen](mount-and-connect.md)
