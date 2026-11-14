---
title: Kornsensor konfigurieren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/configure-seed-sensor.html
---

# Kornsensor konfigurieren

Geben Sie einem neuen oder ersetzten Kornsensor die Nummer seiner Reihe.

Für einen Kornsensor ist die neue Adresse einfach **die Nummer der Reihe** — dieselbe Nummer, die der Fahrer unter der Säule auf dem Startbildschirm sieht. Bereiten Sie zuerst vor wie in [Gerätekonfiguration](device-configuration.md): nur dieser Sensor am Kabel, Ebene **„Agronomist“** (Agronom).

::: steps
1. Öffnen Sie **„Service“** (Service) → **„Sensors Configuration“** (Sensorkonfiguration) → **„Seed sensor“** (Kornsensor) — tippen Sie jeden Punkt zweimal an. Das Menü hat drei Punkte: **„Sensor address“** (Sensoradresse), **„New address“** (Neue Adresse) und **„Set“** (Setzen).

   ![Das Konfigurationsmenü Seed sensor.](figures/five-cfg-seed)

2. Lassen Sie **„Sensor address“** auf **„AUTO“** (automatisch).

3. Tippen Sie auf **„New address“** und wischen Sie nach rechts oder links bis zur Reihennummer.

4. Tippen Sie auf **„Set“** und noch einmal darauf. Das Panel antwortet **„Done“** (Fertig) und darunter **„Found #“** (Gefunden Nr.) mit der Nummer, die der Sensor bisher hatte.

   ![Das Panel bestätigt mit „Done“. Die Nummer hinter „Found #“ ist im Bild ausgelassen.](figures/five-info-done)

5. Trennen Sie den Sensor und schließen Sie ihn wieder an. Prüfen Sie auf dem Startbildschirm, dass er unter seiner Reihe erscheint.
:::

Antwortet das Panel **„More than one device in network!“** (Mehr als ein Gerät im Netz), steckt noch ein anderes Gerät am Kabel. Antwortet es **„No connection“** (Keine Verbindung), antwortet der Sensor nicht — prüfen Sie sein Kabel und seine Stromversorgung.

Sind alle Sensoren fertig, setzen Sie die Ebene zurück auf **„Operator“** (Fahrer) oder schalten Sie das Panel aus und wieder ein. Die Parameter der Kornsensoren: [Kornsensoren und Trockendüngersensoren](seed-and-fertilizer-sensors.md).
