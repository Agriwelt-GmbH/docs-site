---
title: Lieferumfang
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/whats-supplied.html
---

# Lieferumfang

Das Mindestsystem, die optionalen Geräte, die eine Maschine tragen kann, und die Kabel, die sie verbinden.

**Das Mindestsystem besteht aus dem Panel Hectare One und den Kornsensoren** — ein Sensor je Sektion. Kornsensoren von Agriwelt haben einen eigenen Controller und werden direkt an das Panel angeschlossen.

![Das Panel Hectare One.](figures/hw/display)

Jede Sektion des Geräts erhält einen eigenen Kornsensor.

![Kornsensor für runde Saatrohre, 25–35 mm.](figures/hw/seed-sensor)

## Optionale Geräte {#optional-devices}

Alles Weitere ist optional. Was eine Maschine trägt, wird im [Profil](profile.md) des Panels festgelegt.

| **Gerät** | **Wie viele** | **Wofür es dient** |
| --- | --- | --- |
| Drucksensor | Bis zu drei | Überdruck oder Unterdruck. |
| Eingangsgerät HUB8 | Nach Bedarf | Sensoren vom Typ Open Collector — Geschwindigkeit, Behälter, Gebläse, Dosierer, Arbeitsstellung, Marker, Durchflussmesser von Wilger. |
| Elektromotoren der Dosierer | Mit ihrem Controller | Ausbringen von Saatgut oder Trockendünger mit der eingestellten Menge. |
| Fahrgassen-Aktuatoren | Bis zu vier | Sektionen für die Fahrgasse abschalten. |
| Controller der Elektropumpe | Eine | Flüssigdünger — AHL, Mikronährstoffe und Ähnliches. |

Der Induktivsensor unten hat zwei Aufgaben: Er misst die Fahrgeschwindigkeit, und er überwacht, ob sich eine Dosierwelle dreht.

![Induktivsensor für die Geschwindigkeit und für die Drehung der Dosierwelle.](figures/hw/inductive-sensor)

Das HUB8 nimmt Sensoren ohne eigenen Controller auf und meldet jeden von ihnen dem Panel, als wäre er ein eigenes Gerät.

![HUB8, das achtkanalige Eingangsgerät für Kontaktsensoren.](figures/hw/hub8)

Eine Controller-Bauart treibt die Dosiermotoren und die Flüssigdüngerpumpe an. Deshalb kann eine Maschine keine Pumpe haben, ohne auch den Controller zu haben, den ein Motor benötigt.

![Der Controller der Elektromotoren; dieselbe Einheit treibt die Flüssigdüngerpumpe an.](figures/hw/motor-controller)

> **HINWEIS**
>
> Das Panel arbeitet auch mit Kornsensoren von **DICKEY-John, Kuhn, Gaspardo** und anderen Herstellern.

## Kabel {#cables}

Das Panel wird über sein eigenes Versorgungskabel mit Strom versorgt.

![Versorgungskabel der Panels Hectare.](figures/hw/power-cable)

Ein HUB8 wird mit einem vierpoligen Amphenol-Netzwerkkabel an das System angeschlossen.

![Netzwerkanschlusskabel des HUB8, Amphenol, vierpolig.](figures/hw/hub8-network-cable)

Die Sensoren werden über einen Kabelbaum an das HUB8 angeschlossen.

![Sensoranschluss-Kabelbaum des HUB8.](figures/hw/hub8-harness)

> **SIEHE AUCH**
>
> [Was das System leistet](overview.md) · [Begriffe](terms.md#devices)
