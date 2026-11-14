---
title: Fahrgeschwindigkeitssensor ausgefallen oder Geschwindigkeitsgrenzen widersprüchlich
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/alarms-speed-sensor.html
---

# Fahrgeschwindigkeitssensor ausgefallen oder Geschwindigkeitsgrenzen widersprüchlich

Was zu tun ist, wenn einer von zwei Geschwindigkeitssensoren keine Impulse mehr liefert oder wenn die minimale und die maximale Fahrgeschwindigkeit vertauscht eingestellt sind.

Wie das Fenster funktioniert: [So arbeiten die Alarme](how-alarms-work.md).

## „Geschwindigkeitssensor 1 defekt“ / „Geschwindigkeitssensor 2 defekt“ {#speed-sensor-1-failed-speed-sensor-2-failed}

**Was es bedeutet.** Laut Profil hat die Maschine **zwei** Fahrgeschwindigkeitssensoren, doch das Panel sieht nur von einem davon Bewegung. Die Zahl nennt den stummen Sensor. Dieser Alarm kann bei einer Maschine mit einem Geschwindigkeitssensor nicht erscheinen.

**Was zu tun ist, in dieser Reihenfolge:**

1. Prüfen Sie, ob beide Geschwindigkeitssensoren betriebsbereit sind, und beheben Sie, was Sie finden.
2. Lässt sich ein Sensor jetzt nicht reparieren: Ändern Sie das Systemprofil so, dass nur ein Geschwindigkeitssensor benutzt wird – siehe [Das Profil](profile.md).

## „Fehler in Min/Max-Einstellungen“ {#error-in-settings-of-minmax}

**Was es bedeutet.** Die für den Geschwindigkeitssensor eingestellte minimale und maximale Fahrgeschwindigkeit widersprechen sich. Das Panel kann nicht entscheiden, ob die aktuelle Geschwindigkeit zulässig ist.

**Was zu tun ist:** Prüfen Sie **„Min. Geschwindigkeit, km/h“** und **„Max. Geschwindigkeit, km/h“** in den Einstellungen des Geschwindigkeitssensors. Das Minimum muss unter dem Maximum liegen. Siehe [Fahrgeschwindigkeitssensor](speed-sensor.md).

> **HINWEIS**
>
> **„LANGSAMER“ und „SCHNELLER“ sind keine Alarme.** Verlässt die Geschwindigkeit den zulässigen Bereich, öffnet sich kein Alarmfenster: Der Startbildschirm zeigt **„LANGSAMER“** oder **„SCHNELLER“** und zeigt es weiter an, während Sie die Geschwindigkeit korrigieren. Siehe [Anzeigen des Startbildschirms](indicators.md).
