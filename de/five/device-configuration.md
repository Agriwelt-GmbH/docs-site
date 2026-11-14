---
title: Gerätekonfiguration — bevor Sie beginnen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/device-configuration.html
---

# Gerätekonfiguration — bevor Sie beginnen

Was die Gerätekonfiguration ist, welche Vorbereitung sie braucht und das Muster aus drei Punkten, dem jedes Konfigurationsmenü folgt.

Wird ein System in Betrieb genommen oder ein Sensor ersetzt, muss jedes neue Gerät seine Adresse erhalten — die Nummer, unter der das Panel es im Sensornetz findet. Das geschieht unter **„Service“** (Service) → **„Sensors Configuration“** (Sensorkonfiguration), ein Gerät nach dem anderen.

> **WARNUNG**
>
> **Für befugte Servicetechniker.** Ein Gerät mit falscher Adresse verschwindet vom Panel oder nimmt den Platz eines anderen ein. Folgen Sie diesen Themen oder den Anweisungen eines Technikers der Agriwelt GmbH und probieren Sie keine Menüpunkte aufs Geratewohl aus.

## Vorbereiten {#prepare}

::: steps
1. **Trennen Sie jeden Sensor** vom Netzanschluss des Panels.

2. **Schließen Sie nur das eine Gerät an**, das eine neue Adresse bekommen soll.

3. Schalten Sie das Panel ein. Alarme über verlorene Kommunikation erscheinen — schließen Sie alle mit **„Close“** (Schließen) ([So arbeiten Alarme](how-alarms-work.md)).

4. Heben Sie die Zugriffsebene auf **„Agronomist“** (Agronom) an — siehe [Agronomenebene freischalten](enable-agronomist-level.md).

5. Tippen Sie mit zwei Fingern auf den Startbildschirm, dann zweimal auf **„Service“** und zweimal auf **„Sensors Configuration“**. Das Menü bietet vier Gerätearten an: **„Seed sensor“** (Kornsensor), **„Pressure sensor“** (Drucksensor), **„Concentrator-8“** (Hub mit acht Kanälen) und **„Tramline actuator“** (Fahrgassen-Aktuator).

   ![Das Menü Sensors Configuration.](figures/five-menu-sensorcfg)
:::

## Das Muster {#the-pattern}

Alle vier Menüs funktionieren gleich:

| **Punkt** | **Was er ist** |
| --- | --- |
| **„Sensor address“** (Sensoradresse) / **„Device address“** (Geräteadresse) | Mit welchem Gerät das Menü spricht. Lassen Sie ihn auf **„AUTO“** (automatisch), dann spricht das Panel mit dem einzigen Gerät, das antwortet. Ein weiteres Tippen auf den gewählten Punkt startet eine **Suche**; jedes weitere Tippen springt zum nächsten gefundenen Gerät. |
| **„New address“** (Neue Adresse) | Die Adresse, die das Gerät annehmen soll. Stellen Sie sie mit einem Wisch nach rechts oder links ein. |
| **„Set“** (Setzen) | Schreibt sie. Tippen Sie darauf und noch einmal darauf. **„Done“** (Fertig) bedeutet, dass das Gerät sie angenommen hat. |

**Was „Set“ antworten kann:**

| **Meldung** | **Bedeutung** |
| --- | --- |
| **„Done“** | Das Gerät hat die neue Adresse übernommen. |
| **„More than one device in network!“** (Mehr als ein Gerät im Netz) | Mit **„AUTO“** antwortet mehr als ein Gerät. Trennen Sie alle bis auf eines. |
| **„No connection“** (Keine Verbindung) | Kein Gerät antwortet. Prüfen Sie Kabel und Stromversorgung des Geräts. |
| **„Address: … is used!“** (Adresse … ist vergeben) | Die gewählte Adresse gehört schon einem anderen Gerät. Wählen Sie eine andere. |

> **VORSICHT**
>
> **Die Suche am Adresspunkt ist kein harmloser Blick.** Sie spricht mit den Geräten im Netz. Nutzen Sie sie nur mit einem einzigen Gerät am Kabel, nie an einer fertig aufgebauten Maschine. Bei einer von Hand eingegebenen Adresse statt **„AUTO“** schreibt das Panel an das, was auf dieser Adresse antwortet.

**Danach, jedes Mal:** Trennen Sie das Gerät und schließen Sie es wieder an, kehren Sie zum Startbildschirm zurück und prüfen Sie, dass es dort erscheint, wo es hingehört. Setzen Sie dann die Ebene zurück auf **„Operator“** (Fahrer) — oder schalten Sie das Panel aus und wieder ein, was dasselbe bewirkt.

## Die Geräte {#the-devices}

| **Gerät** | **Thema** |
| --- | --- |
| Kornsensor | [Kornsensor konfigurieren](configure-seed-sensor.md) |
| Drucksensor | [Drucksensor konfigurieren](configure-pressure-sensor.md) |
| HUB8-Eingangsgerät — auf dem Bildschirm **„Concentrator-8“** | [HUB8 konfigurieren](configure-hub8.md) |
| Controller des Fahrgassen-Aktuators | [Controller des Fahrgassen-Aktuators konfigurieren](configure-tramline-actuator.md) |
| Elektromotor-Controller — ihr eigener Zugang | [Motorcontroller konfigurieren](configure-motor-controllers.md) |
