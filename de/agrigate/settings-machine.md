---
title: Einstellungen — Maschine
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/settings-machine.html
---

# Einstellungen — Maschine

Das Maschinenprofil, die Arbeitsbreite, die Nummerierung der Sensoren, die Geräte am HUB-8, die Fahrgasse und das Gateway — was jeder Abschnitt der Gruppe „Maschine“ enthält.

**„Einstellungen“** › **„Maschine“** enthält alles, was die App und das Gateway über die Sämaschine wissen müssen. Die Seite **„Maschine“** des Rings führt mit **„In Einstellungen öffnen“** hierher.

| Abschnitt | Was darin ist | Wo es erklärt wird |
| --- | --- | --- |
| **„Maschinenprofil“** | **„Reihen“**, **„Düngersensoren“**, **„Sensoren derzeit am Bus“**, die Statuszeile des Profils im Gateway; bei Hybrid und Einzelkorn **„Breite, cm“** und **„Reihenabstand“**; die Taste **„Sensoren nummerieren“**. | [Das Maschinenprofil einrichten](machine-profile.md) · [Die Sensoren nummerieren](sensor-numbering.md) |
| **„Geräte“** | **HUB-8** — die Geräte der Maschine und die Eingänge, die sie belegen; **„Standardbelegung“** — stellt die Standardwerte in den Kacheln unten wieder her. | [HUB-8-Eingänge](hub8-inputs.md) · [Die Kacheln unten](bottom-tiles.md) |
| **„Fahrgasse“** | Die Anzahl der Fahrgassen-Aktuatoren, der Schalter **„Fahrgasse“**, der Rhythmus, die Zuordnung der Aktuatoren zu den Reihen und jeder Aktuator. Wird nur an Maschinen angezeigt, die eine Fahrgasse haben können. | [Fahrgasse](tramline.md) |
| **„Brücke“** | Die Verbindung und ihr Signal, **„Meine Brücke“**, **„Erneut verbinden“**, **„Brücke vergessen“**, **„Firmware der Brücke“**, **„Hardware-Revision“**, **„Brücken-Update“** und die Zähler der Verbindung; bei Hybrid und Einzelkorn auch **„GNSS-Geschwindigkeit“** mit ihrem Alter in Sekunden. | [Erste Verbindung mit dem Gateway](first-connection.md) · [Das Gateway aktualisieren](bridge-update.md) |

## Die Statuszeile des Profils {#the-profile-status-line}

Unter den Zahlen des Profils sagt eine Zeile, was das Gateway damit gemacht hat:

| Die Zeile sagt | Bedeutung |
| --- | --- |
| **„Profil von der Brücke gelesen um“** und eine Uhrzeit | Die App hat das Profil beim Verbinden aus dem Gateway gelesen. |
| **„schreibe Profil in die Brücke…“** | Eine Änderung ist unterwegs. |
| **„Profil in die Brücke geschrieben um“** und eine Uhrzeit | Das Gateway hat die Änderung übernommen. |
| **„Profil wurde noch nicht von der Brücke gelesen“** | Seit dem Start der App wurde noch nichts gelesen. |
| Eine Meldung mit einem Code | Das Gateway hat abgelehnt. Siehe [9xx · Setup-Antworten des Gateways](codes-9-setup.md). |

## GNSS-Geschwindigkeit {#gnss-speed}

**„GNSS-Geschwindigkeit“** zeigt die Geschwindigkeit, die das iPad liefert, und wie viele Sekunden alt sie ist, zum Beispiel *10.0 km/h · 0 s*. Liegt keine frische Geschwindigkeit vor, zeigt es **„keine Geschwindigkeit“** in Orange. [Code 703](codes-7-tablet.md#c703)

> **SIEHE AUCH**
>
> [Einstellungen](settings.md) · [Die Maschinenseite](machine-screen.md)
