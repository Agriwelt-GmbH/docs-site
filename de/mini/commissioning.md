---
title: Inbetriebnahme — ein neues System einrichten
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/commissioning.html
---

# Inbetriebnahme — ein neues System einrichten

In welcher Reihenfolge ein neues System Hectare Mini an einer Maschine eingerichtet wird — vom Anschließen der Geräte bis zu den Kalibrierungen — mit einem Link zu den Einzelheiten jedes Schritts.

Das ist die Reihenfolge für den Händler oder Servicetechniker beim Einbau des Systems. Jeder Schritt verweist auf das Thema mit den Einzelheiten. Die meisten Parameter brauchen die Zugriffsstufe **„Agronom“** — [Stufe „Agronom“ freischalten](enable-agronomist-level.md).

::: steps
1. **Schließen Sie** alle Geräte am Panel **an** und prüfen Sie ihre Stromversorgung nach dem Schaltplan im Datenblatt des Systems.

2. **Prüfen Sie das Profil.** Es muss zur Ausstattung der Maschine passen — [Das Profil](profile.md). Passt es nicht, richten Sie es zuerst ein.

3. **Prüfen Sie die Verbindungen.** Jeder Sensor muss antworten und überwacht sein — das rote Kreuz und das Zeichen für den Zustand nicht überwacht erklären die [Anzeigen](indicators.md).

4. **Stellen Sie die allgemeinen Parameter ein** unter **„Einstell.“** → **„Sämaschinen-Parameter“** ([Einstellungsmenü](settings-menu.md)):
   die Arbeitsbreite, **„Breite, cm“**; **„Aussaatmodus“** — **„Durchfluss“** für eine Drillmaschine; **„Düngermodus“** — **„Durchfluss“**.

5. **Stellen Sie die Sensoren ein** ([Sensoreinstellungen](sensor-settings.md)):
   - Geschwindigkeitssensor: **„Durchm., cm“** und **„Impulse“**; **„Simulation,km/h“** auf **„Nein“**; danach die Geschwindigkeitskalibrierung;
   - Dosierwellensensoren: **„Periode,s“**; bei Bedarf **„Drehzahlüberwachung“** oder **„Massenüberw.“**, jeweils gefolgt von ihrer Kalibrierung;
   - Gebläse: **„Impulse“**, **„Minimum, U/min“**, **„Maximum, U/min“**;
   - Drucksensoren: **„Filter“**, **„Minimum,Pa“**, **„Maximum,Pa“**;
   - Gerätestellungssensor: **„Signal Transportstellung“**;
   - Motorsensoren: **„Aktivier.-Signal“**;
   - Kornsensoren und, getrennt davon, Düngersensoren: mindestens **„Fraktion“** für die Kulturart.

6. **Richten Sie die Fahrgasse ein**, wenn die Maschine Fahrgassen anlegt — nach dem Profil, nie davor: [Fahrgassenrhythmus einstellen](tramline-rhythm.md).

7. **An Maschinen mit Dosiermotoren:** Weisen Sie die Produkte zu und kalibrieren Sie jeden Motor — [Produkt einem Motor zuweisen](assign-product-to-motor.md), [Motor nach Masse kalibrieren](calibrate-motor-weight.md).
:::

> **WICHTIG**
>
> **Das Panel speichert eine Änderung von selbst** etwa anderthalb Sekunden nach der letzten Änderung und der letzten Tastenberührung. Warten Sie einige Sekunden, bevor Sie ausschalten.

Jeder Sensor wird einzeln eingestellt — außer den Kornsensoren, die sich einen Satz Einstellungen teilen, und den Düngersensoren, die sich einen anderen teilen.

Ist alles eingestellt, kehren Sie zur Stufe **„Fahrer“** zurück (Aus- und Einschalten erledigt das) und gehen Sie weiter zur [Kurzanleitung](quick-start.md).
