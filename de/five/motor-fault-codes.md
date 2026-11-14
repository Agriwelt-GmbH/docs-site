---
title: Fehlercode eines Elektromotors lesen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/motor-fault-codes.html
---

# Fehlercode eines Elektromotors lesen

Wo das Panel den numerischen Fehlercode eines Dosiermotor-Controllers zeigt und was jeder Code bedeutet.

Löst ein Dosiermotor **„FAILURE“** (Fehler) aus, speichert sein Controller zusätzlich einen numerischen Code. Lesen Sie ihn ab und geben Sie ihn zusammen mit der Nummer des Motors an den Service weiter.

::: steps
1. Wischen Sie auf dem Startbildschirm lang nach links, bis der Motorbildschirm erscheint ([Arbeitsbildschirme](working-screens.md)). Berühren und halten Sie die Kachel des gestörten Motors; sein Kontextmenü öffnet sich. Eine Motorkachel auf dem zweiten Startbildschirm funktioniert genauso.

2. Tippen Sie auf **„Information“** (Information) und noch einmal darauf. Der Statusbildschirm des Motors öffnet sich.

3. Lesen Sie die Zeile **„Last fault:“** (Letzte Störung:). Der Status des Motors lautet **„Faulty“** (gestört), solange einer seiner Alarme aktiv ist.
:::

Derselbe Code wird als **„Error code“** (Fehlercode) auf dem Bildschirm Electric motors angezeigt, auf der Ebene **„Agronomist“** (Agronom) — siehe [Diagnose der Motorcontroller](motor-controller-diagnostics.md).

## Die Codes {#the-codes}

Das Panel zeigt nur die Nummer. Die Beschreibungen stammen vom Motorcontroller selbst.

### Befehls- und Parameterfehler {#command-and-parameter-errors}

Der Controller hat etwas abgelehnt, was das Panel von ihm verlangt hat.

| **Code** | **Beschreibung** |
| --- | --- |
| -250 | Ungültiger Befehl |
| -251 | Unerwarteter Befehl |
| -252 | Ungültige Befehlssyntax |
| -253 | Ungültige Befehlsargumente |
| -260 | Ungültige Anzahl von Argumenten |
| -261 | Angegebener Index größer als FFFFh |
| -262 | Angegebener Subindex größer als FFh |
| -300 | Parameter existiert nicht |
| -301 | Schreiben in den Speicher fehlgeschlagen |
| -302 | Wiederherstellung fehlgeschlagen |
| -306 | Parameter kann nicht geschrieben werden |
| -307 | Parameter kann nicht gelesen werden |
| -308 | Parameterwert außerhalb des Bereichs |
| -316 | Version des gespeicherten Parametersatzes passt nicht zur Firmwareversion |
| -318 | Gespeicherter Parametersatz hat eine ungültige Prüfsumme |
| -322 | Parameter kann nicht gesetzt werden: Die Achse ist in Bewegung |
| -325 | Parameter kann nicht gesetzt werden: Der Positioniermodus ist nicht aktiv |
| -340 | Parameter kann nicht gesetzt werden: Ein Endschalter ist aktiv |
| -343 | Parameter kann nicht gesetzt werden: Ein Stopp- oder Halt-Befehl wird ausgeführt |
| -350 | Parameter nicht im angegebenen Index enthalten |
| -351 | Parameter nicht im angegebenen Subindex enthalten |

### Gerätefehler {#device-errors}

Der Controller oder der Motor selbst hat ein Problem.

| **Code** | **Beschreibung** |
| --- | --- |
| -1000 | Versorgungsspannung zu niedrig |
| -1001 | Versorgungsspannung zu hoch |
| -1002 | Versorgungsspannung der Elektronik zu niedrig |
| -1003 | Versorgungsspannung der Elektronik zu hoch |
| -1020 | Übertemperatur des Geräts |
| -1021 | Übertemperatur des Kühlkörpers |
| -1060 | Kurzschluss einer Motorleitung: zwischen den Motorleitungen, zwischen Motor und Masse oder zwischen Motor und Stromversorgung |
| -1061 | Überstrom des Motors |
| -4000 | Schleppfehler im Bewegungsablauf |
| -5100 | Endschalter aktiv |
