---
title: Fehlercode eines Elektromotors auslesen
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/motor-fault-codes.html
---

# Fehlercode eines Elektromotors auslesen

Wo das Panel den numerischen Fehlercode eines Dosiermotor-Controllers zeigt und was jeder Code bedeutet.

Löst ein Dosiermotor **„ALARM“** aus, vermerkt sein Controller zusätzlich einen numerischen Code. Lesen Sie ihn aus und nennen Sie ihn dem Service-Support zusammen mit der Nummer des Motors.

::: steps
1. Öffnen Sie auf dem Startbildschirm das Kontextmenü des fehlerhaften Motors: Halten Sie seine Kachel gedrückt, oder halten Sie **„MENU“** gedrückt, wechseln Sie mit **„UP“** / **„DOWN“** zum Motor und drücken Sie **„MENU“**.

2. Wählen Sie **„Information“** und drücken Sie **„MENU“**. Der Statusbildschirm des Motors öffnet sich.

3. Lesen Sie die Zeile **„Letzter Fehler“**. Der Status des Motors lautet **„Defekt“**, solange einer seiner Alarme aktiv ist.
:::

Derselbe Code erscheint auf dem Motorenbildschirm als **„Fehlercode“** – siehe [Der Bildschirm Motoren](motors-screen.md) und [Diagnose der Motorcontroller](motor-controller-diagnostics.md).

## Die Codes {#the-codes}

Das Panel zeigt nur die Zahl. Die Beschreibungen stammen vom Motorcontroller selbst.

### Befehls- und Parameterfehler {#command-and-parameter-errors}

Der Controller hat etwas abgelehnt, was das Panel von ihm verlangt hat.

| Code | Beschreibung |
| --- | --- |
| -250 | Ungültiger Befehl |
| -251 | Unerwarteter Befehl |
| -252 | Ungültige Befehlssyntax |
| -253 | Ungültige Befehlsargumente |
| -260 | Ungültige Anzahl von Argumenten |
| -261 | Angegebener Index ist größer als FFFFh |
| -262 | Angegebener Subindex ist größer als FFh |
| -300 | Parameter existiert nicht |
| -301 | Schreibvorgang in den Speicher fehlgeschlagen |
| -302 | Wiederherstellung fehlgeschlagen |
| -306 | Parameter kann nicht geschrieben werden |
| -307 | Parameter kann nicht gelesen werden |
| -308 | Parameterwert außerhalb des Bereichs |
| -316 | Version des gespeicherten Parametersatzes passt nicht zur Firmware-Version |
| -318 | Gespeicherter Parametersatz hat eine ungültige Prüfsumme |
| -322 | Parameter kann nicht gesetzt werden: Die Achse bewegt sich |
| -325 | Parameter kann nicht gesetzt werden: Der Positioniermodus ist inaktiv |
| -340 | Parameter kann nicht gesetzt werden: Ein Endschalter ist aktiv |
| -343 | Parameter kann nicht gesetzt werden: Ein Stopp- oder Halt-Befehl wird ausgeführt |
| -350 | Parameter ist im angegebenen Index nicht enthalten |
| -351 | Parameter ist im angegebenen Subindex nicht enthalten |

### Gerätefehler {#device-errors}

Der Controller oder der Motor selbst hat ein Problem.

| Code | Beschreibung |
| --- | --- |
| -1000 | Niedrige Versorgungsspannung |
| -1001 | Zu hohe Versorgungsspannung |
| -1002 | Niedrige Versorgungsspannung der Elektronik |
| -1003 | Zu hohe Versorgungsspannung der Elektronik |
| -1020 | Übertemperatur des Geräts |
| -1021 | Übertemperatur des Kühlkörpers |
| -1060 | Kurzschluss einer Motorleitung: zwischen Motorleitungen, zwischen Motor und Masse oder zwischen Motor und Stromversorgung |
| -1061 | Überstrom im Motor |
| -4000 | Schleppfehler im Bewegungsablauf |
| -5100 | Endschalter aktiv |
