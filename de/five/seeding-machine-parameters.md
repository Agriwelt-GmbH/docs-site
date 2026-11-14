---
title: Sämaschinen-Parameter
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/seeding-machine-parameters.html
---

# Sämaschinen-Parameter

Die Arbeitsbreite, die Modi für Aussaat und Düngung, die Fahrgasse, die Zuordnung von Sektionen zu Aktuatoren und Motoren und die beiden Kalibrierungen, bei denen die Maschine fahren muss.

**„Settings“** (Einstellungen) → **„Seeding machine parameters“** (Sämaschinen-Parameter). Der Punkt braucht die Ebene **„Agronomist“** (Agronom) ([Agronomenebene freischalten](enable-agronomist-level.md)) und ist an einer Maschine ohne Geschwindigkeitssensor und ohne Fahrgassen-Aktuator verborgen. Welche Punkte er enthält, hängt vom Profil ab.

![Das Menü Seeding machine parameters einer Einzelkornsämaschine: die Breite in eckigen Klammern, die zwei Modi, die zwei Kalibrierungen.](figures/five-param-edit)

| **Punkt** | **Werte** |
| --- | --- |
| **„Width, cm“** (Breite, cm) | 100 … 2500; Standard 560. Zahlenfeld. |
| **„Mode of seeding“** (Modus der Aussaat) | **„Flow“** (Durchfluss) / **„Hybrid“** (Hybrid) / **„Precise“** (Einzelkorn); Standard **„Flow“**. |
| **„Mode of fertilizers“** (Modus der Düngung) | **„Flow“** / **„Hybrid“** / **„Precise“**. |
| **„Mode of liq.fert.“** (Modus Flüssigdünger) | **„Flow“** / **„By area“** (nach Fläche). |
| **„Tramline“** (Fahrgasse) | Untermenü. |
| **„Relation of sensors to actuators“** (Zuordnung der Sensoren zu den Aktuatoren) | Öffnet den Zuordnungsbildschirm. |
| **„Speed calibration“** (Geschwindigkeitskalibrierung) | Startet die Geschwindigkeitskalibrierung. |
| **„Dispenser calibration“** (Dosiererkalibrierung) | **„ALL“** (alle) oder die Nummer eines Dosierers; startet die Drehungskalibrierung. |
| **„Reset to defaults“** (Auf Standard zurücksetzen) | Setzt Breite und Modi auf die Werkswerte zurück. Nur Ebene **Service**. |

## Width, cm {#width-cm}

Die Arbeitsbreite des Geräts. Die bearbeitete Fläche wird daraus berechnet, deshalb muss sie eingegeben werden. Tippen Sie den Punkt zweimal an oder wischen Sie darauf: Das Zahlenfeld öffnet sich. Geben Sie die Breite ein und tippen Sie auf **„OK“**; ein Tippen neben das Feld behält den alten Wert. Ohne Geschwindigkeitssensor ist der Punkt verborgen.

Enthält die Statistik schon Arbeit, verlangt das Panel zuerst, sie zu löschen — die Fläche der alten und der neuen Breite lassen sich nicht addieren.

## Mode of seeding, Mode of fertilizers {#mode-of-seeding-mode-of-fertilizers}

| **Modus** | **Einheit** | **Für** |
| --- | --- | --- |
| **„Flow“** | Körner je Sekunde | Drillmaschinen |
| **„Hybrid“** | Körner je Meter | Drillmaschinen |
| **„Precise“** | Körner je Meter, mit gezählten Fehlstellen und Doppelbelegungen | Einzelkornsägeräte |

Der Dünger lässt sich nur auf **„Precise“** stellen, solange die Aussaat **„Precise“** ist. An einer Maschine mit zwei Gruppen von Kornsensoren heißen die beiden Punkte **„Mode of seeding gr.A“** und **„Mode of seeding gr.B“** (Modus der Aussaat Gruppe A und B); Gruppe B kann nur **„Precise“** sein, solange Gruppe A es ist. Stellen Sie also Gruppe B auf **„Flow“** oder **„Hybrid“**, bevor Sie Gruppe A aus **„Precise“** nehmen.

> **WICHTIG**
>
> **Das Umschalten zwischen „Precise“ und den beiden anderen Modi verlangt das Zurücksetzen der Statistik**, wenn auf irgendeinem Schlag Arbeit gespeichert ist. Das Panel fragt zuerst; **„No“** (Nein) behält den alten Modus.

## Liquid fertilizer mode {#liquid-fertilizer-mode}

**„Flow“** (Liter je Minute) oder **„By area“** (Liter je Hektar). **Wird nur angezeigt, wenn im Profil kein Flüssigdünger-Pumpencontroller steht** — mit einem Controller arbeitet das Panel nach Fläche.

## Relation of sensors to actuators {#relation-of-sensors-to-actuators}

Welche Sektionssensoren zu welchem Fahrgassen-Aktuator oder Dosierermotor gehören. Schaltet ein Aktuator seine Sektionen ab, wechseln deren Sensoren in die Fahrgassenüberwachung. Der Punkt wird nur angezeigt, wo es etwas zuzuordnen gibt: Fahrgassen-Aktuatoren oder Dosierermotoren, die nicht eins zu eins zu den Sektionssensoren gehören.

![Der Zuordnungsbildschirm: eine Zeile für die Aktuatoren, eine für die Motoren.](figures/five-mapping)

Eine Zuordnung ist ein **Bereich** von Sektionen, **„Diapason start“** (Bereichsanfang) bis **„Diapason end“** (Bereichsende) — gleiche Zahlen bedeuten eine einzelne Sektion. Bis zu **vier Bereiche** lassen sich einem Aktuator zuordnen. An einer Maschine mit Dosierermotoren hat der Bildschirm außerdem **„Motors to sensors mapping“** (Zuordnung der Motoren zu den Sensoren).

Auf dem Bildschirm wechselt ein Wisch nach oben oder unten zwischen den Zeilen, ein Wisch nach rechts oder links bewegt sich entlang einer Zeile, und ein **Zweifingertippen** öffnet das Menü der gewählten Zelle — um einen Bereich hinzuzufügen oder **„Remove diapason“** (Bereich entfernen). **Berühren und halten** Sie irgendwo auf dem Bildschirm, um die Zuordnung zu übernehmen.

## Tramline {#tramline}

Ein Untermenü mit zwei Punkten: **„Tramline“** (**„No“** / **„Yes“**) und **„Tramline rhythm settings“** (Einstellungen des Fahrgassenrhythmus). Wird nur an einer Maschine angezeigt, die Fahrgassen anlegen kann. Einen Rhythmus einstellen: [Fahrgassenrhythmus einstellen](tramline-rhythm.md).

## Speed calibration and Dispenser calibration {#speed-calibration-and-dispenser-calibration}

Die beiden Kalibrierungen, bei denen die Maschine fahren muss. Beide sind ohne Geschwindigkeitssensor verborgen. Wählen Sie **„Dispenser calibration“** und wischen Sie nach rechts oder links, um den Dosierer zu wählen — oder **„ALL“** für alle auf einmal —, dann tippen Sie noch einmal darauf, um zu starten.

- [Geschwindigkeitssensor kalibrieren](calibrate-speed.md)
- [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md)
