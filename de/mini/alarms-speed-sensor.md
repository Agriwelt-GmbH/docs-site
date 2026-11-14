---
title: Fahrgeschwindigkeit: LANGSAMER, SCHNELLER und Alarme des Geschwindigkeitssensors
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-speed-sensor.html
---

# Fahrgeschwindigkeit: LANGSAMER, SCHNELLER und Alarme des Geschwindigkeitssensors

Was zu tun ist, wenn der Hectare Mini LANGSAMER oder SCHNELLER zeigt, wenn ein Geschwindigkeitssensor ausfällt oder wenn sich die Geschwindigkeitsgrenzen nicht einhalten lassen.

Eine Fahrgeschwindigkeit außerhalb ihrer Grenzen löst **kein Alarmfenster** aus. Die Geschwindigkeitsanzeige auf dem Startbildschirm zeigt anstelle des Wertes **„LANGSAMER“** oder **„SCHNELLER“**, solange die Geschwindigkeit nicht stimmt – siehe [Anzeigen](indicators.md#speed). Die Grenzen sind **„Min Geschw., km/h“** und **„Max Geschw., km/h“** des Geschwindigkeitssensors ([Fahrgeschwindigkeitssensor](speed-sensor.md)); sie werden nur überwacht, solange das Panel die Aussaat überwacht.

## „LANGSAMER“ {#slower}

**Was es bedeutet.** Die Maschine fährt schneller, als **„Max Geschw., km/h“** erlaubt.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Fahren Sie langsamer.
2. Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein – vergleichen Sie mit dem Traktor oder einem GPS.
3. Die Einstellungen des Geschwindigkeitssensors: **„Impulse“**, **„Durchm., cm“**, **„Faktor, %“**, **„Max Geschw., km/h“**.
4. Kalibrieren Sie den Geschwindigkeitssensor – [Geschwindigkeitssensor kalibrieren](calibrate-speed.md).
5. Der Geschwindigkeitssensor selbst ist in Ordnung.

## „SCHNELLER“ {#faster}

**Was es bedeutet.** Die Maschine fährt langsamer, als **„Min Geschw., km/h“** erlaubt.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Fahren Sie schneller.
2. Die Geschwindigkeit auf dem Panel stimmt mit der tatsächlichen überein.
3. Die Einstellungen des Geschwindigkeitssensors, einschließlich **„Min Geschw., km/h“**.
4. Kalibrieren Sie den Geschwindigkeitssensor.
5. Der Geschwindigkeitssensor selbst ist in Ordnung.

Solange die Geschwindigkeit simuliert wird, zeigt die Anzeige stattdessen **„SIMULATION ERHÖHEN“** oder **„SIMULATION SENKEN“**: Ändern Sie **„Simulation,km/h“**.

## „Geschw.Sensor 1 defekt“ / „Geschw.Sensor 2 defekt“ {#speed-sensor-1-failed-speed-sensor-2-failed}

**Was es bedeutet.** Nur bei zwei Geschwindigkeitssensoren an einem Eingangsmodul (**„Eingangsmodul(2)“** im Profil): Die Maschine fährt, aber dieser Sensor hat zu lange keinen Impuls geliefert.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Abstand zwischen Sensor und Geber und der Geber selbst.
2. Stecker und Kabel des Sensors bis zum Eingangsmodul.
3. Der Sensor selbst – tauschen Sie die beiden Sensoren; wandert die Störung mit, ist der Sensor defekt.

## „Fehler in Min/Max-Einstell.“ {#error-in-settings-of-minmax}

**Was es bedeutet.** Bei einer Maschine, deren Motoren nach Gewicht dosieren: Eine am Geschwindigkeitssensor eingestellte Geschwindigkeitsgrenze lässt sich nicht zusammen mit den Geschwindigkeiten einhalten, bei denen die Motoren dosieren können – das Minimum liegt auf oder über der höchsten Dosiergeschwindigkeit oder das Maximum auf oder unter der niedrigsten.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Statusbildschirm des Geschwindigkeitssensors: Er zeigt die geltenden Grenzen und schreibt die unmögliche in Rot – [Der Sensor-Statusbildschirm](sensor-status-screen.md).
2. **„Min Geschw., km/h“** und **„Max Geschw., km/h“** des Geschwindigkeitssensors.
3. Die Sollmengen der Produkte und die Geschwindigkeitsgrenzen der Motoren – [Motor nach Gewicht kalibrieren](calibrate-motor-weight.md).
