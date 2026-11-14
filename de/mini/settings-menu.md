---
title: Das Menü Einstellungen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/settings-menu.html
---

# Das Menü Einstellungen

Jeder Punkt des Menüs „Einstell.“ des Hectare Mini – Ton, Sprache, Diagrammeinstellungen, Datum und Uhrzeit, Alarmverzögerung, Mengenfehler, Maschinenparameter, Benutzer – mit Zugriffsebene, Bereich und Werkseinstellung.

**„MENU“** auf dem Startbildschirm → **„Einstell.“**. Das Menü enthält die allgemeinen Einstellungen des Panels. Welche Punkte Sie sehen, hängt von der Zugriffsebene ([Zugriffsebenen](access-levels.md)) und von der Maschine im Profil ab.

::: {.anatomy fig="menu-settings"}
1. **„Lautstärke“** – der gewählte Punkt.
2. **Sein Wert zwischen − und +.** **„PLUS“** und **„MINUS“** ändern ihn sofort.
3. **„Sprache“**.
4. **„Tastenton“**.
5. **„Datum/Zeit ändern“** – die Pfeilspitze öffnet ein Untermenü.
6. **„Alarmverzögerung“**, in Sekunden.
7. **„Sämaschinen-Parameter“** – ein Untermenü, ab der Ebene Agronom.
8. **Bildlaufleiste.** Weiter unten folgt **„Benutzer“**.

Das Menü **„Einstell.“** auf der Ebene Agronom.
:::

Das Panel speichert jede Änderung selbst, etwa anderthalb Sekunden nach der letzten Änderung und der letzten Tastenberührung.

## Die Punkte {#the-items}

| **Punkt** | **Ebene** | **Was er bewirkt** | **Bereich · Werkseinstellung** |
| --- | --- | --- | --- |
| **„Lautstärke“** | Fahrer | Lautstärke des Alarmsignals, in Prozent. | 0 … 100, in Schritten von 10 · 100 |
| **„Sprache“** | Fahrer | Sprache der Texte auf dem Bildschirm: Englisch, Ukrainisch, Polnisch, Ungarisch, Rumänisch, Bulgarisch oder Deutsch. | · Englisch |
| **„Tastenton“** | Fahrer | Ein kurzer Piepton bei jeder Berührung, die das Panel annimmt. | **„Nein“** / **„Ja“** · **„Ja“** |
| **„Aussaatdiagramm“** | Fahrer | Wie das Saatdiagramm des Startbildschirms gezeichnet wird – [unten](#diagram-settings). Nur sichtbar mit Geschwindigkeitssensor und **„Aussaatmodus“** auf **„Hybrid“** oder **„Einzelkorn“**. | Untermenü |
| **„Düngerdiagramm“** | Fahrer | Dasselbe für das Düngerdiagramm. Nur sichtbar mit Geschwindigkeitssensor, Düngersensoren und **„Düngermodus“** auf **„Hybrid“** oder **„Einzelkorn“**. | Untermenü |
| **„Diagramm Flüssigdünger“** | Fahrer | **„Raster“** des Flüssigdüngerdiagramms. Nur sichtbar mit Geschwindigkeitssensor, Flüssigdünger-Sensoren und **„Modus Flüssigd.“** auf **„Nach Fläche“**. | Untermenü |
| **„Datum/Zeit ändern“** | Fahrer | Datum und Uhrzeit des Panels – [Datum und Uhrzeit einstellen](set-date-and-time.md). | Untermenü |
| **„Alarmverzögerung“** | Fahrer | Wie lange eine Störung andauern muss, bevor sich das Alarmfenster öffnet – [So arbeiten die Alarme](how-alarms-work.md). | 2 … 20 s · 3 s |
| **„Produktmenge Fehler,%“** | Agronom | Zulässige Abweichung des ausgebrachten Produktgewichts vom Sollwert; darüber löst das Panel **„Menge Produkt 1 zu gering!“** oder **„Menge Produkt 1 zu hoch!“** aus (mit der Nummer des Produkts). Nur sichtbar, wenn ein Produkt nach Gewicht dosiert wird oder bei einem Pumpensteuergerät für Flüssigdünger. | 3 … 20 % · 5 % |
| **„Sämaschinen-Parameter“** | Agronom | Arbeitsbreite, Überwachungsmodi, Kalibrierungen – [Sämaschinen-Parameter](seeding-machine-parameters.md). | Untermenü |
| **„Benutzer“** | Fahrer | Die Zugriffsebene – [Agronomen-Ebene aktivieren](enable-agronomist-level.md). | **„Fahrer“** … **„Debug“** |
| **„Einstell. zurücksetzen“** | Service | Setzt die Werte dieses Menüs und von **„Sämaschinen-Parameter“** sofort und ohne Rückfrage auf die Werkswerte zurück – auch **„Sprache“** (Englisch), **„Breite, cm“**, die Modi, das aktive Feld und die Einstellung **„GPS“** des Profils. | – |

> **WICHTIG**
>
> **Das Gewicht wird nur nach einer frischen Dosierer-Kalibrierung richtig berechnet**, wenn die Dosierwalze gewechselt, der Variator oder das Getriebe des Dosiererantriebs verstellt oder anderes Saatgut im Behälter ist. Siehe [Dosierer nach Gewicht kalibrieren](calibrate-dispenser-weight.md).

## Diagrammeinstellungen {#diagram-settings}

Die Untermenüs **„Aussaatdiagramm“** und **„Düngerdiagramm“** enthalten dieselben Punkte, jeweils für das eigene Diagramm. Laufen die Düngersensoren in **„Einzelkorn“**, gelten sie als zweite Saatgruppe, und die Punkte heißen **„Aussaatdiagramm Gr.A“** und **„Aussaatdiagramm Gr.B“**.

| **Punkt** | **Ebene** | **Was er bewirkt** | **Werte · Werkseinstellung** |
| --- | --- | --- | --- |
| **„Fehlst. & Doppel“** | Fahrer | Zeigt oder verbirgt die Säulen der Fehlstellen und Doppelablagen über der letzten abgeschlossenen Strecke. Nur in **„Einzelkorn“**. | **„Nein“** / **„Ja“** · **„Ja“** |
| **„Raster“** | Fahrer | **„Nein“** – nur die Linie der Sollmenge; **„Teilweise“** – nur die Grenzen der zulässigen Abweichung; **„Voll“** – beides. | · **„Voll“** |
| **„Skala F&D,%“** | Fahrer | Volle Höhe einer Säule für Fehlstellen oder Doppelablagen, in Prozent der Diagrammhöhe. Nur in **„Einzelkorn“**. | 5 … 50 %, in Schritten von 5 · 20 % |
| **„Standardwerte“** | Service | Setzt die drei obigen Punkte auf ihre Werkseinstellung zurück. | – |

Was das Diagramm zeigt: [Das Abschnittsdiagramm](section-diagram.md).
