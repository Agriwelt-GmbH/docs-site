---
title: Gerätekonfiguration – vor dem Beginn
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/device-configuration.html
---

# Gerätekonfiguration – vor dem Beginn

Was die Gerätekonfiguration ist, welche Vorbereitung sie braucht und nach welchem Muster aus drei Punkten jedes Konfigurationsmenü aufgebaut ist.

Bei der Inbetriebnahme eines Systems oder beim Austausch eines Sensors muss jedes neue Gerät seine Adresse erhalten – die Nummer, unter der das Panel es im Sensornetz findet. Das geschieht unter **„Service“** → **„Sensorkonfiguration“**, jeweils für ein Gerät.

> **WARNUNG**
>
> **Für befugte Service-Techniker.** Ein Gerät mit falscher Adresse verschwindet vom Panel oder nimmt den Platz eines anderen ein. Folgen Sie diesen Themen oder den Anweisungen eines Technikers der Agriwelt GmbH, und probieren Sie Menüpunkte nicht aufs Geratewohl aus.

## Vorbereitung {#prepare}

::: steps
1. **Trennen Sie alle Sensoren** vom Netzanschluss des Panels.

2. **Schließen Sie nur das eine Gerät an**, das eine neue Adresse erhalten soll.

3. Schalten Sie das Panel ein. Es erscheinen Alarme über verlorene Kommunikation – schließen Sie sie alle ([So arbeiten die Alarme](how-alarms-work.md)).

4. Heben Sie die Zugriffsebene auf **„Agronom“** an – siehe [Agronomen-Ebene aktivieren](enable-agronomist-level.md).

5. Drücken Sie **„BACK“** und wählen Sie dann **„Service“** → **„Sensorkonfiguration“**. Das Menü bietet vier Geräteklassen an.

   ![Das Menü „Sensorkonfiguration“.](figures/menu-sensorcfg)
:::

> **WICHTIG**
>
> **Immer nur ein Gerät am Kabel.** Das Panel adressiert, was antwortet. Sind zwei Geräte derselben Art angeschlossen, ist nicht festgelegt, welches die neue Adresse übernimmt.

## Das Muster {#the-pattern}

Alle vier Menüs funktionieren gleich:

| Punkt | Was er ist |
| --- | --- |
| **„Sensoradresse“** / **„Geräteadresse“** | Mit welchem Gerät das Menü spricht. Lassen Sie ihn auf **„AUTO“**, dann spricht das Panel mit dem einzigen Gerät, das antwortet. **„MENU“** bei diesem Punkt startet eine **Suche**; jeder weitere Druck springt zum nächsten gefundenen Gerät. |
| **„Neue Adresse“** | Die Adresse, die das Gerät annehmen soll. Stellen Sie sie mit **„PLUS“** / **„MINUS“** ein. |
| **„Einstellen“** | Schreibt sie. **„Fertig“** bedeutet, dass das Gerät sie übernommen hat. |

> **VORSICHT**
>
> **„MENU“ beim Adresspunkt ist kein harmloser Blick.** Es startet eine Suche im Netz und kann ändern, worauf die angeschlossenen Geräte antworten. Benutzen Sie es nur mit einem einzigen Gerät am Kabel, nie an einer fertig montierten Maschine.

**Danach, jedes Mal:** Trennen Sie das Gerät und schließen Sie es wieder an, kehren Sie zum Startbildschirm zurück und prüfen Sie, dass es dort erscheint, wo es soll. Stellen Sie dann die Ebene wieder auf **„Fahrer“** – oder schalten Sie das Panel aus und wieder ein, was dasselbe bewirkt.

## Die Geräte {#the-devices}

| Gerät | Thema |
| --- | --- |
| Kornsensor | [Kornsensor konfigurieren](configure-seed-sensor.md) |
| Drucksensor | [Drucksensor konfigurieren](configure-pressure-sensor.md) |
| Eingangsmodul HUB8 | [HUB8 konfigurieren](configure-hub8.md) |
| Controller des Fahrgassen-Aktuators | [Controller des Fahrgassen-Aktuators konfigurieren](configure-tramline-actuator.md) |
| Elektromotor-Controller – mit eigenem Zugang | [Motorcontroller konfigurieren](configure-motor-controllers.md) |
