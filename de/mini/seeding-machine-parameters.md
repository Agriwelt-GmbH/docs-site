---
title: Sämaschinen-Parameter
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/seeding-machine-parameters.html
---

# Sämaschinen-Parameter

Das Untermenü mit Arbeitsbreite und Überwachungsmodi des Hectare Mini, was eine Änderung mit der Statistik macht und wo die beiden Kalibrierungen im Menü starten.

**„Einstell.“** → **„Sämaschinen-Parameter“**, Ebene **„Agronom“** ([Agronomen-Ebene aktivieren](enable-agronomist-level.md)). Stellen Sie diese Werte bei einer neuen Maschine zuerst ein – jede Angabe zu Fläche und Menge wird aus ihnen berechnet.

::: {.anatomy fig="menu-machine-params"}
1. **„Breite, cm“** – der gewählte Punkt.
2. **Sein Wert zwischen -[ und ]+**: **„PLUS“** / **„MINUS“** verstellen ihn schrittweise, **„MENU“** öffnet das Zahlenfeld.
3. **„Aussaatmodus“**.
4. **Sein Wert**, hier **„Durchfluss“**.
5. **„Geschw.-Kalibrierung“** – startet die Kalibrierung des Geschwindigkeitssensors.

Eine Maschine nur mit Kornsensoren, einem Geschwindigkeitssensor und ohne Dosierersensoren.
:::

| **Punkt** | **Was er bewirkt** | **Bereich · Werkseinstellung** |
| --- | --- | --- |
| **„Breite, cm“** | Die Arbeitsbreite der Maschine. Daraus werden die Fläche und jede Menge je Hektar berechnet. **Tragen Sie sie immer ein.** | 100 … 2500 cm · 560 |
| **„Aussaatmodus“** | Wie die Kornsensoren überwacht und angezeigt werden: **„Durchfluss“** – Körner je Sekunde, für Drillmaschinen; **„Hybrid“** – Körner je Meter, an Drillmaschinen möglich, in der Praxis aber nicht üblich; **„Einzelkorn“** – Körner je Meter mit Fehlstellen und Doppelablagen, für Einzelkornsägeräte. | · **„Durchfluss“** |
| **„Düngermodus“** | Dieselben drei Modi für die Düngersensoren. Nur sichtbar, wenn das Profil Düngersensoren enthält. | · **„Durchfluss“** |
| **„Modus Flüssigd.“** | **„Durchfluss“** oder **„Nach Fläche“** für die Flüssigdünger-Sensoren. Nur sichtbar mit solchen Sensoren und ohne Pumpensteuergerät. | · **„Nach Fläche“** |
| **„Fahrgasse“** | Die Fahrgasseneinstellungen – [Fahrgassenrhythmus einstellen](tramline-rhythm.md). Nur sichtbar, wenn die Maschine Fahrgassen anlegen kann. | Untermenü |
| **„Zuordnung Sensor-Aktuator“** | Welche Saatleitungen jeder Fahrgassen-Aktuator oder Motor abschaltet. Nur sichtbar, wenn die Zuordnung nicht eins zu eins ist. | Bildschirm |
| **„Geschw.-Kalibrierung“** | [Geschwindigkeitssensor kalibrieren](calibrate-speed.md). | – |
| **„Dosierer-Kalibrierung“** | [Dosierer-Drehung kalibrieren](calibrate-dispenser-rotation.md) für **„ALLE“** Dosierer oder für einen, nach seiner Nummer. Nur sichtbar mit Dosierersensoren im Profil. | **„ALLE“**, 1 … Anzahl der Dosierer |
| **„Standardwerte“** | Ebene **„Service“**. Setzt Breite und Modi auf ihre Werkseinstellung zurück. | – |

Ohne Geschwindigkeitssensor im Profil sind die drei Modus-Punkte und **„Geschw.-Kalibrierung“** ausgeblendet: Das Panel kann dann nur im Modus **„Durchfluss“** arbeiten.

Die Sollmenge stellen Sie auf dem Startbildschirm ein, nicht hier – [Sollmenge ändern](set-the-target-rate.md). Ihr Bereich folgt dem Modus: **„Durchfluss“** 1 bis 1500 Körner je Sekunde, **„Hybrid“** 1 bis 200 Körner je Meter, **„Einzelkorn“** 0,5 bis 50,0 Körner je Meter.

## Was eine Änderung mit der Statistik macht {#what-a-change-does-to-the-statistics}

> **WICHTIG**
>
> **Eine neue Breite oder ein Moduswechsel von oder nach „Einzelkorn“ löscht die Statistik aller Felder.** Enthält ein Feld Daten, fragt das Panel zuvor nach – bei der Breite mit **„Statistik muss gelöscht werden!“** und **„PLUS“** für **„Ja“**, beim Modus mit einer Meldung, dass die Statistik gelöscht werden muss, mit **„MENU“** zum Löschen und **„BACK“** zum Abbrechen. **„Nein“** oder **„BACK“** behält den alten Wert. Notieren Sie die Zahlen, die Sie brauchen, bevor Sie etwas ändern.

Ein Wechsel zwischen **„Durchfluss“** und **„Hybrid“** erhält die Statistik.

Die beiden Modi hängen voneinander ab: Die Düngersensoren können nur dann in **„Einzelkorn“** laufen, wenn die Kornsensoren es tun. Die anderen Kombinationen weist das Panel mit einer Meldung zurück, die den Punkt nennt, den Sie zuerst ändern müssen. Laufen beide in **„Einzelkorn“**, werden die Düngersensoren zu einer zweiten Saatgruppe, und die Punkte heißen **„Aussaatmodus Gr.A“** und **„Aussaatmodus Gr.B“**.

Wird ein nach Gewicht dosiertes Produkt anschließend sowohl von einem Dosierersensor als auch von einem Motor beansprucht, schaltet das Panel die **„Massenüberw.“** der Dosierersensoren aus und meldet das in einem Fenster mit **„ACHTUNG!“**.
