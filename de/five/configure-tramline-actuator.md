---
title: Controller des Fahrgassen-Aktuators konfigurieren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/configure-tramline-actuator.html
---

# Controller des Fahrgassen-Aktuators konfigurieren

Sagen Sie einem Aktuator-Controller, welchen Fahrgassen-Aktuator er antreibt und welche Spuranzeigersensoren an ihm angeschlossen sind.

Der Aktuator-Controller trägt drei Dinge zugleich — den Fahrgassen-Aktuator und die zwei Spuranzeigersensoren des Durchgangs —, und jedes hat seine eigene Zeile. Deshalb bedient ein Controller einen Aktuator und beide Spuranzeiger. Bereiten Sie zuerst vor wie in [Gerätekonfiguration](device-configuration.md): nur dieser Controller am Kabel, Ebene **„Agronomist“** (Agronom).

| **Punkt** | **Was er ist** |
| --- | --- |
| **„Device address“** (Geräteadresse) | Mit welchem Controller das Menü spricht. Lassen Sie ihn auf **„AUTO“** (automatisch). |
| **„Actuator“** (Aktuator) | Die Nummer des Fahrgassen-Aktuators, den dieser Controller antreibt, oder **„No“** (Nein), wenn er keinen antreibt. |
| **„Input device, channel 1“** (Eingangsgerät, Kanal 1) | Der erste Spuranzeigersensor oder **„No“**. |
| **„Input device, channel 2“** (Eingangsgerät, Kanal 2) | Der zweite Spuranzeigersensor oder **„No“**. |
| **„Set“** (Setzen) | Schreibt die drei Zeilen in den Controller. |

![Das Konfigurationsmenü eines Aktuator-Controllers, alle Zeilen noch auf „No“.](figures/five-cfg-actuator)

::: steps
1. Öffnen Sie **„Service“** (Service) → **„Sensors Configuration“** (Sensorkonfiguration) → **„Tramline actuator“** (Fahrgassen-Aktuator) — tippen Sie jeden Punkt zweimal an.

2. Lassen Sie **„Device address“** auf **„AUTO“**.

3. Stellen Sie **„Actuator“**, **„Input device, channel 1“** und **„Input device, channel 2“** ein: Tippen Sie auf jede Zeile und wischen Sie nach rechts oder links zu ihrem Wert.

4. Tippen Sie auf **„Set“** und noch einmal darauf. Das Panel antwortet **„Done“** (Fertig).

5. Trennen Sie den Controller und schließen Sie ihn wieder an. Prüfen Sie auf dem Startbildschirm, dass der Aktuator und die Spuranzeiger erscheinen.
:::

**„Set“** lehnt mit **„Invalid profile!“** (Ungültiges Profil) ab und schreibt nichts, wenn alle drei Zeilen auf **„No“** stehen oder wenn beide Spuranzeigerkanäle dieselbe Nummer tragen.

Sind alle Geräte fertig, setzen Sie die Ebene zurück auf **„Operator“** (Fahrer) oder schalten Sie das Panel aus und wieder ein. Die eigenen Einstellungen des Aktuators: [Fahrgassen-Aktuator](tramline-actuator.md); die Spuranzeiger: [Spuranzeigersensoren](marker-sensors.md).
