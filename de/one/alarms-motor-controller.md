---
title: Dosiermotor: blockiert, elektrische Störungen, Bootloader
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-motor-controller.html
---

# Dosiermotor: blockiert, elektrische Störungen, Bootloader

Was zu tun ist, wenn der Controller eines Dosierer-Elektromotors eine Blockierung, einen Kurzschluss, Überstrom, eine falsche Versorgungsspannung, Überhitzung oder eine unbekannte Störung meldet.

Diese Alarme kommen vom Controller, der einen Elektromotor eines Dosierers ansteuert. Der Name im Alarmfenster sagt Ihnen, welcher Motor betroffen ist. Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

## „Motor klemmt!“ {#motor-jammed}

**Was es bedeutet.** Der Controller sieht keine Drehung, obwohl der Motor laufen sollte.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Das Dosiergerät ist betriebsbereit und dreht sich leicht.
2. Der Drehsensor des Motors ist betriebsbereit, ebenso seine Verbindung zum Controller – das Kabel und der Steckverbinder.

## „Kurzschluss“ {#short-circuit}

**Was es bedeutet.** Der Controller hat einen Kurzschluss festgestellt.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Kabelverbindung: Die Kabel und der Steckverbinder sind unbeschädigt.
2. Tauschen Sie den Controller zum Test gegen einen betriebsbereiten aus.

## „Überstrom“ {#over-current}

**Was es bedeutet.** Der Strom hat den Grenzwert überschritten.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Motor und der Saatmechanismus auf Blockierung.
2. Die Kabelverbindung: Die Kabel und der Steckverbinder sind unbeschädigt.
3. Tauschen Sie den Controller zum Test gegen einen betriebsbereiten aus.

## „Unterspannung“ {#under-voltage}

**Was es bedeutet.** Die Versorgungsspannung des Motors liegt unter dem zulässigen Wert. Der Motor kann nicht laufen.

**Messen Sie zuerst die Versorgungsspannung.**

**Ist sie zu niedrig:**

1. Die Lichtmaschine ist betriebsbereit.
2. Die Spannung der Keilriemen der Lichtmaschine.
3. Der Stromkabelbaum ist fest an den Klemmen der Batterie oder der Lichtmaschine angeschlossen, wie es die erforderliche Versorgungsspannung verlangt.
4. Die Kabelverbindungen haben sicheren elektrischen Kontakt.

**Ist die Versorgungsspannung in Ordnung:** Tauschen Sie den Controller zum Test gegen einen betriebsbereiten aus.

## „Überspannung“ {#over-voltage}

**Was es bedeutet.** Die Versorgungsspannung des Motors liegt über dem zulässigen Wert. Der Motor kann nicht laufen.

**Messen Sie zuerst die Versorgungsspannung.**

**Ist sie zu hoch:**

1. Die Lichtmaschine ist betriebsbereit.
2. Der Stromkabelbaum ist fest an den Klemmen der Batterie oder der Lichtmaschine angeschlossen, wie es die erforderliche Versorgungsspannung verlangt.
3. Die Kabelverbindungen haben sicheren elektrischen Kontakt.

**Ist die Versorgungsspannung in Ordnung:** Tauschen Sie den Controller zum Test gegen einen betriebsbereiten aus.

## „Übertemperatur“ {#over-temperature}

**Was es bedeutet.** Der Motor ist überhitzt.

**Was zu tun ist, in dieser Reihenfolge:**

1. Lassen Sie den Motor abkühlen.
2. Tauschen Sie den Controller zum Test gegen einen betriebsbereiten aus.

## „ALARM“ {#failure}

**Was es bedeutet.** Der Controller hat eine ungewöhnliche Störung festgestellt, die den Service-Support erfordert.

**Was zu tun ist, in dieser Reihenfolge:**

1. Lesen Sie den Fehlercode aus: Kontextmenü des Motors → **„Information“** → Zeile **„Letzter Fehler“**. Siehe [Fehlercode eines Elektromotors auslesen](motor-fault-codes.md).
2. Tauschen Sie den Controller zum Test gegen einen betriebsbereiten aus.
3. Nennen Sie dem Service-Support den Code und die Nummer des Motors.

## „Gerät im Bootloader!“ {#device-in-bootloader}

**Was es bedeutet.** Der Controller ist in seinem Modus für das Firmware-Update geblieben und führt sein Arbeitsprogramm nicht aus. Er kann den Motor nicht ansteuern.

**Was zu tun ist, in dieser Reihenfolge:**

1. Schalten Sie die Stromversorgung aus und wieder ein.
2. Kehrt die Meldung zurück, wurde das Firmware-Update des Controllers nicht abgeschlossen. Wenden Sie sich an den Service-Support.

> **SIEHE AUCH**
>
> Der Pumpencontroller für Flüssigdünger löst dieselben elektrischen Alarme aus – [Flüssigdüngerpumpe](alarms-pump-controller.md).
