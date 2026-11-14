---
title: Alarme der Dosierermotoren
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-electric-motors.html
---

# Alarme der Dosierermotoren

Was die Alarme eines elektrischen Dosierermotors des Hectare Mini bedeuten – Spannung, Temperatur, Kurzschluss, Strom, Blockieren – und was zu prüfen ist.

Das Steuergerät jedes elektrischen Dosierermotors meldet seine Störungen an das Panel. Die Gerätezeile nennt den Motor: **Elektromotor: #5**. Der Code der letzten Störung steht auf dem Statusbildschirm des Motors, Zeile **Letzter Fehler:** – geben Sie ihn dem Service weiter. Der Motor und seine Einstellungen: [Das Kontextmenü eines Motors](motor-context-menu.md).

| **Alarmtext** | **Was es bedeutet** | **Was Sie prüfen, in dieser Reihenfolge** |
| --- | --- | --- |
| **„Unterspannung“** | Die Versorgungsspannung des Motorsteuergeräts – für den Motor oder für seine Elektronik – ist zu niedrig. | Batterie und Lichtmaschine des Traktors; das Stromkabel und seine Stecker; die Sicherung. |
| **„Überspannung“** | Die Versorgungsspannung ist zu hoch. | Die Ladespannung des Traktors; die Stromversorgung des Systems gegenüber dem Datenblatt. |
| **„Übertemperatur“** | Das Steuergerät oder sein Kühlkörper ist zu heiß. | Lassen Sie es abkühlen; ein schwergängiger Dosierer; Schmutz, der den Motor bedeckt. |
| **„Kurzschluss“** | Ein Kurzschluss an den Motorleitungen – untereinander, nach Masse oder zur Versorgung. | Das Motorkabel und der Stecker; der Motor. |
| **„Überstrom“** | Der Motor zieht zu viel Strom. | Ein schwergängiger oder blockierter Dosierer; der Motor. |
| **„Motor klemmt!“** | Der Motor soll drehen, dreht aber nicht. Bei **„Rücklauf bei Block.“** auf **„Ja“** läuft er zuerst kurz zurück, um sich zu befreien. | Fremdkörper im Dosierer; der Antrieb zwischen Motor und Dosierer; der Motor. |
| **„Gerät im Bootloader!“** | Das Motorsteuergerät ist in seinem Aktualisierungsmodus und läuft nicht. | Schalten Sie das Panel und das System aus und wieder ein. Bleibt es so, rufen Sie den Service. |
| **„ALARM“** | Jede andere Störung des Steuergeräts. | Notieren Sie **Letzter Fehler:** vom Statusbildschirm und rufen Sie den Service. |

Alle Motoren teilen mit jedem Gerät noch einen Alarm: **„Verbindung weg“** – [Gerät antwortet nicht](alarms-any-device.md).
