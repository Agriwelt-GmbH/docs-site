---
title: Das Menü Einstellungen
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/settings-menu.html
---

# Das Menü Einstellungen

Jeder Punkt des paneleigenen Menüs „Einstellungen“ – Helligkeit, Lautstärke, Sprache, Alarmverzögerung, Diagrammeinstellungen, Datum und Uhrzeit – mit Bereich und Zugriffsebene.

Das Menü **„Einstellungen“** enthält die Einstellungen des Panels selbst. Sie öffnen es vom Startbildschirm aus: **„MENU“** → **„Einstellungen“**. Die Einstellungen der einzelnen Sensoren stehen an anderer Stelle – siehe [Sensoreinstellungen](sensor-settings.md).

::: {.anatomy fig="menu-settings"}
1. **„Helligkeit,%“** – die Hintergrundbeleuchtung. **„AUTO“** lässt das Panel sie über seinen Lichtsensor einstellen.
2. **„Lautstärke“** – die Lautstärke der Panel-Töne.
3. **„Sprache“** – die Sprache der Bildschirme.
4. **„Tastenton“** – ein Ton bei jedem Tastendruck.
5. **„Aussaatdiagramm“** – wie das Saatdiagramm gezeichnet wird. [Weiter unten](#diagram-settings).
6. **„Datum/Zeit ändern“** – die Uhr. [Weiter unten](#change-date-and-time).
7. **„Alarmverzögerung“** – wie lange eine Störung bestehen muss, bevor sich das Alarmfenster öffnet.
8. **„Sämaschinen-Parameter“** – Breite, Modi, Fahrgasse, Kalibrierungen. [Sämaschinen-Parameter](seeding-machine-parameters.md).
9. **Bildlaufleiste.** Weitere Punkte folgen weiter unten.

Das Menü **„Einstellungen“** einer Drillmaschine mit Geschwindigkeitssensor auf der Ebene **„Agronom“**.
:::

> **WICHTIG**
>
> **Das Menü hat nicht immer dieselben Punkte.** Die Zugriffsebene, die Maschine im Profil und der Darstellungsmodus der Diagramme verändern es. Fehlt ein hier genannter Punkt, prüfen Sie zuerst diese drei, bevor Sie nach einer Störung suchen.

## Die Punkte {#the-items}

| Punkt | Bereich | Ebene |
| --- | --- | --- |
| **„Helligkeit,%“** | 0 … 100, in Schritten von 10. **Bei 0 steht beim Punkt „AUTO“**, und das Panel stellt die Beleuchtung über seinen Lichtsensor ein – es hellt schnell auf und dunkelt langsam ab. Jeder andere Wert legt die Beleuchtung fest. | Fahrer |
| **„Lautstärke“** | 0 … 100, in Schritten von 10 | Fahrer |
| **„Sprache“** | die installierten Sprachen | Fahrer |
| **„Tastenton“** | **„Nein“** / **„Ja“** | Fahrer |
| **„Aussaatdiagramm“**, **„Düngerdiagramm“**, **„Diagramm Flüssigdünger“** | Untermenüs. Jedes wird nur angezeigt, wenn die Maschine einen Geschwindigkeitssensor hat, die zugehörigen Sensoren im Profil stehen und ihr Diagramm **nicht** im Modus **„Durchfluss“** ist. | Fahrer |
| **„Datum/Zeit ändern“** | Untermenü | Fahrer |
| **„Alarmverzögerung“** | **2 … 20 s**, Standard 3 s. Siehe [So arbeiten die Alarme](how-alarms-work.md). | Fahrer |
| **„Produktmenge Fehler,%“** | **3 … 20 %**. Wird nur angezeigt, wenn ein Produkt nach Masse dosiert wird oder ein Pumpencontroller für Flüssigdünger im Profil steht. | Agronom |
| **„Sämaschinen-Parameter“** | Untermenü. Verborgen, wenn die Maschine weder einen Geschwindigkeitssensor noch einen Fahrgassen-Aktuator hat. | Agronom |
| **„Benutzer“** | Die Zugriffsebene – siehe [Zugriffsebenen](access-levels.md). | Fahrer |
| **„Einstellungen zurücksetzen“** | Setzt dieses Menü auf die Werkseinstellungen zurück. | Service |

Bei einer Maschine mit zwei Gruppen von Kornsensoren heißen die beiden Diagrammpunkte **„Aussaatdiagramm Gr.A“** und **„Aussaatdiagramm Gr.B“**.

**Die Einstellungen werden von selbst gespeichert**, einige Sekunden nach dem letzten Tastendruck. Warten Sie einen Moment, bevor Sie das Panel ausschalten.

## Diagrammeinstellungen {#diagram-settings}

![Die Diagrammeinstellungen der Kornsensoren.](figures/nast-seedgraph)

Es gibt drei solcher Menüs – Saatgut, Trockendünger, Flüssigdünger – mit denselben Punkten:

| Punkt | Was er bewirkt |
| --- | --- |
| **„Fehlstellen & Doppel“** | Zeigt die Balken für Fehlstellen und Doppel über dem letzten Wegabschnitt. **Nur im Modus „Einzelkorn“.** |
| **„Raster“** | **„Nein“** – nur die Mengenlinie; **„Teilweise“** – nur die Toleranzgrenzen; **„Voll“** – beides. |
| **„Skala F&D,%“** | Die Höhe der Balken für Fehlstellen und Doppel, **5 … 50 %** in Schritten von 5. **Nur im Modus „Einzelkorn“.** |
| **„Standardwerte“** | Setzt dieses Menü auf die Werkseinstellungen zurück. Nur Ebene **Service**. |

## Datum und Uhrzeit ändern {#change-date-and-time}

::: steps
1. Wählen Sie **„Datum/Zeit ändern“** und drücken Sie **„MENU“**. Die Felder für Datum und Uhrzeit öffnen sich.

   ![Die Felder für Datum und Uhrzeit.](figures/menu-datetime)

2. Wählen Sie jedes Feld mit **„UP“** / **„DOWN“** und stellen Sie es mit **„PLUS“** / **„MINUS“** ein.

3. Wählen Sie **„Einstellen“** und drücken Sie **„MENU“**. Die Uhr übernimmt die neuen Werte. **„BACK“** lässt die Uhr stattdessen unverändert.
:::
