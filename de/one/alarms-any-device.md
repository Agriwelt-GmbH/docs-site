---
title: Beliebiges Gerät: Verbindung weg oder falscher Gerätetyp
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-any-device.html
---

# Beliebiges Gerät: Verbindung weg oder falscher Gerätetyp

Die zwei Alarme, die jeder Sensor, Aktuator, Controller oder jedes Eingangsmodul auslösen kann – keine Antwort vom Gerät oder Antwort der falschen Geräteart.

Diese beiden Alarme sind nicht an eine Geräteart gebunden. Der Gerätename im Alarmfenster sagt Ihnen, welches Gerät betroffen ist. Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

## „Verbindung weg“ {#connection-lost}

**Was es bedeutet.** Das Panel hat vom Gerät bei drei aufeinanderfolgenden Abfragen keine Antwort erhalten. Das gilt für Sensoren, Aktuatoren, Controller und das Eingangsmodul gleichermaßen.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Das Gerät ist an das Netz angeschlossen.
2. Das Kabel und der Steckverbinder des Geräts.
3. Die Stromversorgung des Geräts. Sie muss den Werten im Gerätepass entsprechen.

## „Falscher Gerätetyp!“ {#wrong-device-type}

**Was es bedeutet.** Dort, wo das Panel ein Gerät dieser Art erwartet, antwortet ein Gerät anderer Art. Ursache ist entweder eine falsche Einstellung im Systemprofil oder eine falsche Konfiguration des Geräts selbst.

**Was zu tun ist:** Wenden Sie sich an den Service-Support. Versuchen Sie nicht, es durch wahlloses Ändern des Profils oder der Gerätekonfiguration zu beheben – siehe [Gerätekonfiguration](device-configuration.md).

> **SIEHE AUCH**
>
> Der Statusbildschirm eines Sensors zeigt dieselben beiden Zustände als **„Keine Verbindung“** und **„Falscher Gerätetyp!“** in Rot – siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md).
