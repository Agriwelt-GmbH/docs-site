---
title: Controller des Fahrgassen-Aktuators konfigurieren
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/configure-tramline-actuator.html
---

# Controller des Fahrgassen-Aktuators konfigurieren

Teilen Sie einem Aktuator-Controller mit, welchen Fahrgassen-Aktuator er ansteuert und welche Spuranzeigersensoren an ihm angeschlossen sind.

Der Aktuator-Controller trägt drei Dinge gleichzeitig – den Fahrgassen-Aktuator und die beiden Spuranzeigersensoren des Durchgangs – und jedes hat eine eigene Zeile. Deshalb genügt ein Controller für einen Aktuator und beide Spuranzeiger. Bereiten Sie zuerst vor wie in [Gerätekonfiguration](device-configuration.md): nur dieser Controller am Kabel, Ebene **„Agronom“**.

::: {.anatomy fig="konf-act"}
1. **„Geräteadresse“** – mit welchem Controller das Menü spricht. Lassen Sie sie auf **„AUTO“**.
2. **„Aktuator“** – die Nummer des Fahrgassen-Aktuators, den dieser Controller ansteuert, oder **„Nein“**, wenn er keinen ansteuert.
3. **„Eingangsmodul, Kanal 1“** – der erste Spuranzeigersensor oder **„Nein“**.
4. **„Eingangsmodul, Kanal 2“** – der zweite Spuranzeigersensor oder **„Nein“**.
5. **„Einstellen“** – schreibt die drei Zeilen in den Controller.

Das Konfigurationsmenü eines Aktuator-Controllers, alle Zeilen noch auf **„Nein“**.
:::

::: steps
1. Wählen Sie **„Service“** → **„Sensorkonfiguration“** → **„Fahrgassen-Aktuator“** und drücken Sie **„MENU“**.

2. Lassen Sie **„Geräteadresse“** auf **„AUTO“**.

3. Stellen Sie **„Aktuator“**, **„Eingangsmodul, Kanal 1“** und **„Eingangsmodul, Kanal 2“** mit **„PLUS“** / **„MINUS“** ein.

4. Wählen Sie **„Einstellen“** und drücken Sie **„MENU“**. Das Panel antwortet **„Fertig“**.

5. Trennen Sie den Controller und schließen Sie ihn wieder an. Prüfen Sie auf dem Startbildschirm, dass der Aktuator und die Spuranzeiger erscheinen.
:::

Sind alle Geräte fertig, stellen Sie die Ebene wieder auf **„Fahrer“** oder schalten Sie das Panel aus und wieder ein. Die eigenen Einstellungen des Aktuators: [Fahrgassen-Aktuator](tramline-actuator.md); die Spuranzeiger: [Spuranzeigersensoren](marker-sensors.md).
