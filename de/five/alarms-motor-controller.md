---
title: Dosiermotor: blockiert, elektrische Störungen, Bootloader
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-motor-controller.html
---

# Dosiermotor: blockiert, elektrische Störungen, Bootloader

Was zu tun ist, wenn der Controller eines Dosierer-Elektromotors eine Blockade, einen Kurzschluss, Überstrom, eine falsche Versorgungsspannung, Überhitzung, eine unbekannte Störung oder ein hängendes Firmware-Update meldet.

Diese Alarme kommen vom Controller, der einen Elektromotor eines Dosierers antreibt. Der Name im Alarmfenster sagt Ihnen, welcher Motor; der Motorbildschirm zeigt, welche Kachel Probleme hat ([Motorbildschirm](motors-screen.md)). Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „Motor jammed!“ — Motor blockiert {#motor-jammed}

**Was es bedeutet.** Der Controller sieht keine Drehung, obwohl der Motor laufen sollte.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Dosiereinheit ist in Ordnung und dreht frei.
2. Der Drehsensor des Motors ist in Ordnung, ebenso seine Verbindung zum Controller — Kabel und Stecker.

Kommen Blockaden häufig vor, lässt **„Rollback when jammed“** (Rücklauf bei Blockade) den Motor zurückfahren und es erneut versuchen — siehe [Dosierer-Elektromotor](dispenser-motor.md).

## „Short circuit“ — Kurzschluss {#short-circuit}

**Was es bedeutet.** Der Controller hat einen Kurzschluss erkannt.

**Was Sie in dieser Reihenfolge prüfen:**

1. Die Kabelverbindung: Kabel und Stecker sind unbeschädigt.
2. Ersetzen Sie den Controller zum Test durch einen einwandfreien.

## „Over current“ — Überstrom {#over-current}

**Was es bedeutet.** Der Strom hat die Grenze überschritten. Das Fenster ergänzt eine Zeile mit dem Strom, den der Controller gemessen hat, in Ampere.

**Was Sie in dieser Reihenfolge prüfen:**

1. Motor und Saatmechanik auf Blockade.
2. Die Kabelverbindung: Kabel und Stecker sind unbeschädigt.
3. Ersetzen Sie den Controller zum Test durch einen einwandfreien.

## „Under voltage“ — Unterspannung {#under-voltage}

**Was es bedeutet.** Die Versorgungsspannung des Motors liegt unter dem zulässigen Wert. Der Motor kann nicht laufen.

**Messen Sie zuerst die Versorgungsspannung.**

**Ist sie zu niedrig:**

1. Die Lichtmaschine ist in Ordnung.
2. Die Spannung der Keilriemen der Lichtmaschine.
3. Der Stromkabelbaum sitzt fest an den Klemmen von Batterie oder Lichtmaschine, wie es die erforderliche Versorgungsspannung verlangt.
4. Die Kabelverbindungen haben sicheren elektrischen Kontakt.

**Ist die Versorgungsspannung in Ordnung:** Ersetzen Sie den Controller zum Test durch einen einwandfreien.

## „Over voltage“ — Überspannung {#over-voltage}

**Was es bedeutet.** Die Versorgungsspannung des Motors liegt über dem zulässigen Wert. Der Motor kann nicht laufen.

**Messen Sie zuerst die Versorgungsspannung.**

**Ist sie zu hoch:**

1. Die Lichtmaschine ist in Ordnung.
2. Der Stromkabelbaum sitzt fest an den Klemmen von Batterie oder Lichtmaschine, wie es die erforderliche Versorgungsspannung verlangt.
3. Die Kabelverbindungen haben sicheren elektrischen Kontakt.

**Ist die Versorgungsspannung in Ordnung:** Ersetzen Sie den Controller zum Test durch einen einwandfreien.

## „Over temperature“ — Übertemperatur {#over-temperature}

**Was es bedeutet.** Der Motorcontroller ist überhitzt.

**Was Sie in dieser Reihenfolge tun:**

1. Lassen Sie den Motor abkühlen.
2. Ersetzen Sie den Controller zum Test durch einen einwandfreien.

## „FAILURE“ — Störung {#failure}

**Was es bedeutet.** Der Controller hat eine ungewöhnliche Störung erkannt, die den Service braucht.

**Was Sie in dieser Reihenfolge tun:**

1. Lesen Sie den Fehlercode ab: Berühren und halten Sie die Motorkachel → **„Information“** (Information) → Zeile **„Last fault:“** (Letzte Störung:). Siehe [Fehlercode eines Elektromotors lesen](motor-fault-codes.md).
2. Ersetzen Sie den Controller zum Test durch einen einwandfreien.
3. Geben Sie den Code und die Nummer des Motors an den Service weiter.

## „Device in bootloader!“ — Gerät im Bootloader {#device-in-bootloader}

**Was es bedeutet.** Der Controller ist in seinem Modus für das Firmware-Update stehen geblieben und führt sein Arbeitsprogramm nicht aus. Er kann den Motor nicht antreiben.

**Was Sie in dieser Reihenfolge tun:**

1. Schalten Sie die Stromversorgung aus und wieder ein.
2. Kehrt die Meldung zurück, wurde das Firmware-Update des Controllers nicht abgeschlossen. Wenden Sie sich an den Service.

> **SIEHE AUCH**
>
> Der Flüssigdünger-Pumpencontroller löst dieselben elektrischen Alarme aus — [Flüssigdüngerpumpe](alarms-pump-controller.md).
