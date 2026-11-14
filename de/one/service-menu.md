---
title: Das Service-Menü
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/service-menu.html
---

# Das Service-Menü

Jeder Punkt des Menüs „Service“, seine Zugriffsebene und welche Punkte ein Techniker in Ruhe lassen sollte.

**„MENU“** → **„Service“**. Welche Punkte Sie sehen, hängt von der Zugriffsebene ab ([Zugriffsebenen](access-levels.md)). Das Panel hat vier Ebenen – **„Fahrer“**, **„Agronom“**, **„Service“** und **„Debug“**; **„Debug“** liegt oberhalb von **„Service“** und wird nur bei der Herstellung benutzt.

![Das Menü „Service“, oberer Teil.](figures/menu-service)

| Punkt | Ebene | Was es ist |
| --- | --- | --- |
| **„Profil“** | Service | Welche Geräte die Maschine hat und wie viele. [Das Profil](profile.md) |
| **„Sensorkonfiguration“** | Agronom | Den Geräten ihre Adresse geben. [Gerätekonfiguration](device-configuration.md) |
| **„Register“** | Debug | Eine Rohansicht der Register. Teil keines Verfahrens. |
| **„Elektromotoren“** | Service | Die Controller der Dosiermotoren. [Motorcontroller konfigurieren](configure-motor-controllers.md) |
| **„Seriennummer“** | Debug | Die Seriennummer des Panels, einmalig bei der Herstellung eingegeben. |
| **„Körner immer zählen“** | Agronom | **„Nein“** / **„Ja“** – den Kornzähler weiterlaufen lassen, auch wenn das Panel ihn sonst anhalten würde. |
| **„Schlüssel eingeben“** | Agronom | Gibt den Lizenzschlüssel ein, der das Panel aus dem Demozustand nimmt. |
| **„Demo aktivieren“** | Service | Startet die Demonstrationszeit. |
| **„Demo, Stunden“** | Service | 1 … 999 – wie lange diese Zeit dauert. |
| **„Imitation mode“** | Service | **„Nein“** / **„Ja“** – das Panel arbeitet mit simulierten Daten. Siehe die Warnung unten. |
| **„Display type“** | Debug | Welches Display die Firmware ansteuert. Bei der Herstellung eingestellt. |
| **„Launch updater“** | Service | Startet das Panel im Updater neu, um die Firmware von der Speicherkarte zu laden. |

Drei weitere Punkte – das Tracker-Protokoll und zwei Schalter für die Protokollierung auf der Speicherkarte – gibt es in der Firmware, sie sind aber so eingestellt, dass sie nie angezeigt werden. Sie sind auf keiner Ebene erreichbar.

> **WARNUNG**
>
> **„Imitation mode“ ist keine Testhilfe, die man eingeschaltet lässt.** Ist er eingeschaltet, arbeitet das Panel mit erfundenen Zahlen: Jede Zahl auf jedem Bildschirm und jeder Eintrag der Statistik ist erfunden. Schalten Sie ihn aus, bevor die Maschine an die Arbeit geht – und prüfen Sie ihn, wenn ein Panel ein plausibles Feld meldet, das es nie besät hat.

**„Imitation mode“**, **„Display type“**, **„Launch updater“** und die beiden Protokollschalter erscheinen auf Englisch, gleich auf welche Sprache das Panel eingestellt ist.
