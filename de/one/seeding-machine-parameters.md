---
title: Sämaschinen-Parameter
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/seeding-machine-parameters.html
---

# Sämaschinen-Parameter

Die Arbeitsbreite, die Modi für Aussaat und Düngung, die Fahrgasse, die Zuordnung von Sektionen zu Aktuatoren und die beiden Kalibrierungen, bei denen die Maschine fahren muss.

**„Einstellungen“** → **„Sämaschinen-Parameter“**. Der Punkt erfordert die Ebene **„Agronom“** ([Agronomen-Ebene aktivieren](enable-agronomist-level.md)) und ist bei einer Maschine ohne Geschwindigkeitssensor und ohne Fahrgassen-Aktuator verborgen. Welche Punkte er enthält, hängt vom Profil ab.

::: {.anatomy fig="menu-seeding"}
1. **„Breite, cm“** – die Arbeitsbreite. Der markierte Wert steht zwischen **–[** und **]+**.
2. **„Aussaatmodus“** – **„Durchfluss“**, **„Hybrid“** oder **„Einzelkorn“**.
3. **„Fahrgasse“** – das Untermenü der Fahrgasse.
4. **„Geschwindigkeitskalibrierung“** – startet die Geschwindigkeitskalibrierung.
5. **„Standardwerte“** – Werkseinstellungen für dieses Menü. Nur Ebene **Service**.

Das Menü einer Einzelkornsämaschine mit Geschwindigkeitssensor, ohne Dünger, Dosierer und Flüssigdünger.
:::

## Breite, cm {#width-cm}

Die Arbeitsbreite des Geräts. Daraus wird die bearbeitete Fläche berechnet, daher muss sie eingegeben werden. Drücken Sie beim Punkt **„MENU“**: Das Zahlenfeld öffnet sich. Geben Sie die Ziffern ein – die Taste oben rechts löscht die letzte – und berühren Sie **„OK“** zum Übernehmen, oder drücken Sie **„BACK“**, um den alten Wert beizubehalten.

![Das Zahlenfeld für „Breite, cm“.](figures/menu-keypad)

## Modus Aussaat, Modus Dünger {#mode-of-seeding-mode-of-fertilizers}

Je drei Modi:

| Modus | Einheit | Für |
| --- | --- | --- |
| **„Durchfluss“** | Körner pro Sekunde | Drillmaschinen |
| **„Hybrid“** | Körner pro Meter | Drillmaschinen – empfohlen |
| **„Einzelkorn“** | Körner pro Meter, mit gezählten Fehlstellen und Doppeln | Einzelkornsämaschinen |

> **WICHTIG**
>
> **Der Wechsel zwischen „Einzelkorn“ und den beiden anderen Modi verlangt ein Zurücksetzen der Statistik**, wenn in einem Feld bereits Arbeit aufgezeichnet ist.

## Modus Flüssigdünger {#mode-of-liquid-fertilizer}

**„Durchfluss“** (Liter pro Minute) oder **„Nach Fläche“** (Liter pro Hektar). **Wird nur angezeigt, wenn im Profil kein Pumpencontroller für Flüssigdünger steht** – mit Controller wählt das Panel den Modus selbst.

## Zuordnung Aktuator-Sensor {#actuators-to-sensors-mapping}

Welche Sektionssensoren zu welchem Fahrgassen-Aktuator oder Elektromotor gehören. Schaltet dieser Aktuator seine Sektionen ab, wechseln deren Sensoren in die Fahrgassenüberwachung.

![Der Zuordnungsbildschirm: eine Zeile für die Aktuatoren, eine für die Motoren.](figures/menu-mapping)

Eine Zuordnung ist ein **Bereich**: **„Bereichsanfang“** und **„Bereichsende“** – gleiche Zahlen bedeuten eine einzelne Sektion. Einem Aktuator lassen sich bis zu **vier Bereiche** zuweisen. Bei einer Maschine mit Dosiermotoren hat der Bildschirm zusätzlich **„Zuordnung Motor-Sensor“**.

## Fahrgasse {#tramline}

Die Rhythmen der Fahrgasse, in einem eigenen Untermenü mit zwei Punkten: **„Fahrgasse“** (**„Nein“** / **„Ja“**) und **„Fahrgassenrhythmus“**.

![Das Untermenü der Fahrgasse.](figures/menu-tramline)

Einen Rhythmus einrichten: [Fahrgassenrhythmus einstellen](tramline-rhythm.md).

## Geschwindigkeitskalibrierung und Dosierer-Kalibrierung {#speed-calibration-and-dispenser-calibration}

Die beiden Kalibrierungen, bei denen die Maschine fahren muss. Neben **„Dosierer-Kalibrierung“** steht eine Zahl: der zu kalibrierende Dosierer, oder **0** für alle auf einmal.

- [Geschwindigkeitssensor kalibrieren](calibrate-speed.md)
- [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md)
