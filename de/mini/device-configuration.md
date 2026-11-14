---
title: Gerätekonfiguration
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/device-configuration.html
---

# Gerätekonfiguration

Wofür die Gerätekonfiguration am Hectare Mini dient und wie Sie sie vorbereiten – nur das eine Gerät am Kabelbaum, die Ebene Agronom, das Menü Sensorkonfiguration.

Jedes Gerät im Sensornetz antwortet unter seiner eigenen **Adresse**. Die Adresse eines Kornsensors ist die Nummer seiner Reihe. Ein neuer oder ersetzter Sensor muss die richtige Adresse erhalten, bevor das Panel ihn finden kann. Das ist die **Gerätekonfiguration**, unter **„Service“** → **„Sensorkonfiguration“**.

> **WICHTIG**
>
> **Diese Arbeit gehört zur Inbetriebnahme und zum Austausch eines Korn- oder Düngersensors.** Sie wird meist im Werk oder von einem autorisierten Servicetechniker erledigt. Eine falsche Adresse lässt einen Sensor anstelle eines anderen antworten. Probieren Sie keine unbekannten Punkte des Menüs **„Service“** aus; folgen Sie nur dieser Anleitung oder dem Servicetechniker der Agriwelt GmbH.

## Vorbereiten {#prepare}

::: steps
1. Trennen Sie alle Sensoren vom Kabeleingang des Kommunikationskabelbaums am Panel – dem vierpoligen Stecker.

   ![Der Kabeleingang des Kommunikationskabelbaums: der vierpolige Stecker, der Kabelbaum und der Stromanschluss.](figures/cable-entry)

2. Schließen Sie **nur** das Gerät an, das eine neue Adresse erhalten soll.

3. Schalten Sie das Panel ein. Nach dem Start meldet es **„Verbindung weg“** für alle fehlenden Geräte. Schließen Sie die Fenster mit **„HOME“**.

4. Heben Sie die Ebene auf **„Agronom“** an – [Agronomen-Ebene aktivieren](enable-agronomist-level.md). Für einen HUB-8-Verteiler oder einen Fahrgassen-Aktuator heben Sie sie auf **„Service“** an.

5. Drücken Sie **„BACK“**, um zum Hauptmenü zurückzukehren. Wählen Sie **„Service“** und drücken Sie **„MENU“**.

6. Wählen Sie **„Sensorkonfiguration“** und drücken Sie **„MENU“**. Das Menü listet die Geräte auf, die sich konfigurieren lassen.

   ![Der Weg zur Sensorkonfiguration: Einstellungen, das Hauptmenü, das Service-Menü, das Menü Sensorkonfiguration.](figures/menu-to-sensorconfig)
:::

| **Punkt** | **Ebene** | **Wie** |
| --- | --- | --- |
| **„Kornsensor“** | Agronom | [Kornsensor konfigurieren](configure-seed-sensor.md) |
| **„Drucksensor“** | Agronom | [Drucksensor konfigurieren](configure-pressure-sensor.md) |
| **„HUB8“** | Service | [HUB-8-Verteiler konfigurieren](configure-hub8.md) |
| **„Fahrgas.-Aktuator“** | Service | Nur für den Servicetechniker. |

## Die Regeln jeder Konfiguration {#the-rules-of-every-configuration}

- **Ein Gerät am Kabelbaum.** Bei **„Sensoradresse“** auf **„AUTO“** nimmt das Panel das eine Gerät, das es findet. Antwortet mehr als eines, lehnt es mit **„Mehr als ein Gerät im Netz gefunden!“** ab; antwortet keines, zeigt es **„Keine Verbindung“**.
- **Die neue Adresse muss frei sein.** Wurde das Gerät statt über **„AUTO“** über seine aktuelle Adresse gewählt, prüft das Panel auch die neue: Benutzt sie schon ein anderes Gerät, zeigt es **„Adresse: … belegt!“** mit der Nummer und ändert nichts.
- **Jede andere Ablehnung** lautet **„Fehler #“** mit einer Nummer. Trennen Sie das Gerät, schließen Sie es wieder an und versuchen Sie es erneut.
- **Prüfen Sie das Ergebnis**: Trennen Sie das Gerät, schließen Sie es wieder an und kehren Sie mit **„BACK“** zum Startbildschirm zurück. Das Gerät muss an seinem Platz erscheinen, ohne rotes Kreuz.

> **WICHTIG**
>
> **Kehren Sie, wenn alle Geräte fertig sind, auf „Fahrer“ zurück** – stellen Sie **„Benutzer“** im Menü **„Einstell.“** zurück oder schalten Sie das Panel aus und wieder ein. Schließen Sie dann alle Geräte wieder an.
