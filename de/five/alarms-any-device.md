---
title: Jedes Gerät: Verbindung verloren oder falscher Gerätetyp
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/alarms-any-device.html
---

# Jedes Gerät: Verbindung verloren oder falscher Gerätetyp

Die zwei Alarme, die jeder Sensor, Aktuator, Controller oder jedes Eingangsgerät auslösen kann — keine Antwort des Geräts oder die Antwort einer falschen Geräteart.

Diese zwei Alarme sind nicht an eine Geräteart gebunden. Der Name des Geräts im Alarmfenster sagt Ihnen, welches betroffen ist. Wie das Fenster funktioniert: [So arbeiten Alarme](how-alarms-work.md).

## „Connection lost“ — Verbindung verloren {#connection-lost}

**Was es bedeutet.** Das Panel hat in drei Abfragen in Folge keine Antwort vom Gerät erhalten. Das gilt für Sensoren, Aktuatoren, Controller und Eingangsgeräte gleichermaßen.

**Was Sie in dieser Reihenfolge prüfen:**

1. Das Gerät ist an das Netz angeschlossen.
2. Das Kabel und der Stecker des Geräts.
3. Die Stromversorgung des Geräts. Sie muss den Werten im Gerätepass entsprechen.
4. Das Gerät soll auch wirklich da sein: Ein Gerät im [Profil](profile.md), das nicht verbaut ist, löst diesen Alarm ebenfalls aus. Lassen Sie ein solches Gerät außerhalb der Überwachung ([Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md)).

## „Wrong device type!“ — Falscher Gerätetyp {#wrong-device-type}

**Was es bedeutet.** Dort, wo das Panel ein Gerät dieser Art erwartet, antwortet ein Gerät einer anderen Art. Die Ursache ist entweder eine falsche Einstellung im Systemprofil oder eine falsche Konfiguration des Geräts selbst.

**Was Sie tun:** Wenden Sie sich an den Service. Versuchen Sie nicht, es durch wahlloses Ändern von Profil oder Gerätekonfiguration zu beheben — siehe [Gerätekonfiguration](device-configuration.md).

> **SIEHE AUCH**
>
> Der Statusbildschirm eines Geräts zeigt dieselben zwei Zustände in Rot als **„No connection“** (Keine Verbindung) und **„Wrong device type!“** — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md).
