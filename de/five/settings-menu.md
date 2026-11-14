---
title: Das Menü Settings
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/settings-menu.html
---

# Das Menü Settings

Jeder Punkt des eigenen Menüs „Settings“ des Panels — Helligkeit, Lautstärke, Sprache, Tastenton, Diagrammeinstellungen, Datum und Uhrzeit, Alarmverzögerung, Zugriffsebene — mit Bereich, Standardwert und Ebene.

Das Menü **„Settings“** (Einstellungen) enthält die Einstellungen des Panels selbst. Öffnen Sie es vom Startbildschirm aus: Tippen Sie mit **zwei Fingern**, dann zweimal auf **„Settings“**. Die Einstellungen der einzelnen Sensoren stehen woanders — siehe [Sensoreinstellungen](sensor-settings.md).

::: {.anatomy fig="five-menu-settings"}
1. **„Brightness,%“** (Helligkeit, %) — die Hintergrundbeleuchtung. Der gewählte Punkt zeigt seinen Wert zwischen **-** und **+**; wischen Sie nach rechts oder links, um ihn zu ändern.
2. **„Volume“** (Lautstärke) — die Lautstärke des Alarmtons.
3. **„Language“** (Sprache) — die Sprache der Bildschirme.
4. **„Buttons sound“** (Tastenton) — ein Klick bei jeder Berührung, die der Bildschirm annimmt.
5. **„Seeding diagram settings“** (Einstellungen des Saatgutdiagramms) — wie das Saatgutdiagramm gezeichnet wird. [Weiter unten](#diagram-settings).
6. **„Change Date&Time“** (Datum und Uhrzeit ändern) — die Uhr. [Weiter unten](#change-date-and-time).
7. **„Alarm delay“** (Alarmverzögerung) — wie lange eine Störung andauern muss, bevor sich das Alarmfenster öffnet.
8. **„User“** (Benutzer) — die Zugriffsebene. [Zugriffsebenen](access-levels.md).

Das Menü **„Settings“** einer Einzelkornsämaschine mit Geschwindigkeitssensor im Modus **„Precise“** (Einzelkorn), auf der Ebene **„Operator“** (Fahrer), mit gewähltem Punkt **„Brightness,%“**.
:::

> **WICHTIG**
>
> **Das Menü hat nicht immer dieselben Punkte.** Die Zugriffsebene, die Maschine im Profil und die Modi der Diagramme verändern es. Fehlt ein hier genannter Punkt, prüfen Sie diese drei, bevor Sie nach einer Störung suchen.

## Die Punkte {#the-items}

| **Punkt** | **Bereich und Standardwert** | **Ebene** |
| --- | --- | --- |
| **„Brightness,%“** | 0 … 100 in Schritten von 10; Standard 100. 0 ist die dunkelste Einstellung, nicht aus. Siehe [Bildschirmhelligkeit](screen-brightness.md). | Operator |
| **„Volume“** | 0 … 100 in Schritten von 10; Standard 100. | Operator |
| **„Language“** | Englisch, Ukrainisch, Polnisch, Ungarisch, Rumänisch, Bulgarisch. | Operator |
| **„Buttons sound“** | **„No“** (Nein) / **„Yes“** (Ja); Standard **„Yes“**. | Operator |
| **„Seeding diagram settings“**, **„Fertil. diagram settings“** (Einstellungen des Düngerdiagramms), **„Liq.fert. diagram settings“** (Einstellungen des Flüssigdüngerdiagramms) | Untermenüs. Jedes wird nur angezeigt, wenn die Maschine einen Geschwindigkeitssensor hat, die zugehörigen Sensoren im Profil stehen und ihr Diagramm **nicht** im Modus **„Flow“** (Durchfluss) ist. | Operator |
| **„Change Date&Time“** | Untermenü. | Operator |
| **„Alarm delay“** | **2 … 20 s**; Standard 3 s. Siehe [So arbeiten Alarme](how-alarms-work.md). | Operator |
| **„Product rate error,%“** (Mengenfehler Produkt, %) | **3 … 20 %**; Standard 5 %. Wie weit ein nach Masse dosiertes Produkt oder die Flüssigdüngerpumpe von ihrer Sollmenge abweichen darf, bevor ein Alarm kommt. Wird nur angezeigt, wenn ein Produkt nach Masse dosiert wird oder ein Pumpencontroller im Profil steht. | Agronomist |
| **„Seeding machine parameters“** (Parameter der Sämaschine) | Untermenü: Arbeitsbreite, Modi, Fahrgasse, Kalibrierungen. Verborgen, wenn die Maschine weder einen Geschwindigkeitssensor noch einen Fahrgassen-Aktuator hat. [Parameter der Sämaschine](seeding-machine-parameters.md) | Agronomist |
| **„User“** | **„Operator“** / **„Agronomist“** / **„Service“**. [Agronomenebene freischalten](enable-agronomist-level.md) | Operator |
| **„Reset settings“** (Einstellungen zurücksetzen) | Setzt die Einstellungen auf die Werkswerte zurück. | Service |

An einer Maschine mit zwei Gruppen von Kornsensoren heißen die beiden Diagrammpunkte **„Seeding gr.A diagram“** und **„Seeding gr.B diagram“** (Saatgutdiagramm Gruppe A und B).

**Die Einstellungen werden von selbst gespeichert**, einige Sekunden nach der letzten Änderung. Warten Sie einen Moment, bevor Sie das Panel ausschalten.

## Diagrammeinstellungen {#diagram-settings}

![Die Diagrammeinstellungen der Kornsensoren.](figures/five-menu-diagram)

Es gibt drei dieser Menüs — Saatgut, Trockendünger, Flüssigdünger. Das Flüssigdüngermenü hat nur **„Grid“** (Raster) und **„Reset to defaults“** (Auf Standard zurücksetzen).

| **Punkt** | **Was er tut** |
| --- | --- |
| **„Skips & Doubles“** (Fehlstellen und Doppelbelegungen) | **„Yes“** zeigt die Balken für Fehlstellen und Doppelbelegungen über dem letzten Wegstück. **Nur im Modus „Precise“.** Standard **„Yes“**. |
| **„Grid“** | **„No“** — nur die Mengenlinie; **„Partial“** (Teilweise) — nur die Toleranzgrenzen; **„Full“** (Vollständig) — beides. Standard **„Full“**. |
| **„Scale S&D,%“** (Maßstab Fehlstellen und Doppelbelegungen, %) | Die Höhe der Balken für Fehlstellen und Doppelbelegungen, **5 … 50 %** in Schritten von 5; Standard 20. **Nur im Modus „Precise“.** |
| **„Reset to defaults“** | Setzt dieses Menü auf die Werkswerte zurück. Nur Ebene **Service**. |

## Datum und Uhrzeit ändern {#change-date-and-time}

::: steps
1. Tippen Sie auf **„Change Date&Time“** und noch einmal darauf. Die Felder **„Year“** (Jahr), **„Month“** (Monat), **„Day“** (Tag), **„Hours“** (Stunden), **„Minutes“** (Minuten) und **„Seconds“** (Sekunden) öffnen sich, am Ende steht **„Set“** (Setzen).

   ![Die Felder für Datum und Uhrzeit.](figures/five-menu-datetime)

2. Tippen Sie auf ein Feld und wischen Sie nach rechts oder links, bis es den gewünschten Wert zeigt — ein Schritt je Wisch. Die Tage richten sich nach dem Monat.

3. Tippen Sie auf **„Set“** und noch einmal darauf. Die Uhr übernimmt die neuen Werte, und das Menü **„Settings“** erscheint wieder.
:::

Verlassen Sie die Felder mit einem Tippen neben das Menü, ohne **„Set“**, bleibt die alte Zeit erhalten.
