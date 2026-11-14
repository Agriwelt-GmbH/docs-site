---
title: Zugriffsebenen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/access-levels.html
---

# Zugriffsebenen

Die drei Zugriffsebenen des Hectare Mini – Fahrer, Agronom, Service –, was jede freigibt, was auf den höheren Ebenen mit den Alarmen geschieht und wie Sie zur Ebene Fahrer zurückkehren.

Das Panel blendet alle Einstellungen aus, die ein Fahrer nicht braucht. Was ein Menü zeigt, hängt von der **Zugriffsebene** ab, die Sie unter **„Benutzer“** im Menü **„Einstell.“** wählen. Nach jedem Einschalten startet das Panel auf der Ebene **„Fahrer“**.

| **Ebene** | **Wer** | **Was sie freigibt** |
| --- | --- | --- |
| **„Fahrer“** | Der Fahrer | Alles für die Arbeit: die Sollmengen, die Felder, die Statistik, **„Alarmverzögerung“**, Datum und Uhrzeit, die Sprache. In den Kontextmenüs: **„Information“** und die alltäglichen Sensoreinstellungen wie **„Fraktion“** oder **„Minimum, U/min“**. |
| **„Agronom“** | Der Landwirt, der Händler | Zusätzlich **„Sämaschinen-Parameter“** (Arbeitsbreite, Modi, Kalibrierungen), die verborgenen Parameter jedes Sensors und im Hauptmenü das Menü **„Service“** mit **„Sensorkonfiguration“** für Korn- und Drucksensoren. |
| **„Service“** | Der Servicetechniker | Zusätzlich das Profil, die Konfiguration der HUB-8-Verteiler und der Fahrgassen-Aktuatoren, der Service-Bildschirm der Motoren, **„Standardwerte“** in jedem Kontextmenü und **„Einstell. zurücksetzen“**. Der Statusbildschirm eines Sensors zeigt dessen Adresse. |

Die Liste unter **„Benutzer“** hat einen vierten Wert, **„Debug“**. Er ist für den Hersteller gedacht und im Feld nutzlos.

Für das Anheben auf **„Agronom“** oder **„Service“** verlangt das Panel die PIN der jeweiligen Ebene. Die PINs sind bei jedem Panel anders: Sie erhalten sie vom Händler für Ihr Panel. Beim Herunterschalten wird nichts abgefragt. Wie es geht: [Agronomen-Ebene aktivieren](enable-agronomist-level.md).

In dieser Anleitung steht bei jedem Parameter und Menüpunkt, welche Ebene er braucht. Ein Punkt, den Sie nicht sehen, liegt über Ihrer Ebene oder trifft auf die Maschine im Profil nicht zu.

## Was mit den Alarmen geschieht, solange die Ebene hoch ist {#what-happens-to-the-alarms-while-the-level-is-high}

> **WICHTIG**
>
> **Auf den Ebenen „Agronom“ und „Service“ zeigt das Panel keine Alarmfenster.** Eine Störung an einem Sensor löst weder ein Fenster noch ein Alarmsignal aus, bis die Ebene wieder **„Fahrer“** ist.

Das einzige Fenster, das noch erscheint, ist **„Benutzer ist Agronom! Alarme nicht sichtbar!“** – einmal pro Sitzung, sobald das Panel Aussaat auf der höheren Ebene erkennt. Siehe [Benutzer ist Agronom](alarms-access-level.md).

Wenn Sie auf **„Fahrer“** zurückschalten, verwirft das Panel die Alarme, die sich inzwischen erledigt haben, und zeigt die noch zutreffenden nacheinander an.

## Zurück zur Ebene Fahrer {#back-to-operator}

- Stellen Sie in **„Einstell.“** den Punkt **„Benutzer“** mit **„MINUS“** auf **„Fahrer“** und drücken Sie **„MENU“**, oder
- schalten Sie das Panel aus und wieder ein.

Tun Sie eines von beiden nach jeder Inbetriebnahme und jeder Reparatur, bevor die Maschine wieder an die Arbeit geht.

## Was das Service-Menü enthält {#what-is-in-the-service-menu}

Das Hauptmenü zeigt **„Service“** ab der Ebene **„Agronom“**. Das steckt darin:

| **Punkt** | **Ebene** | **Wofür er dient** |
| --- | --- | --- |
| **„Profil“** | Service | Die Geräteliste der Maschine. [Das Profil](profile.md) |
| **„Sensorkonfiguration“** | Agronom | Gibt einem neuen oder ersetzten Gerät seine Adresse. [Gerätekonfiguration](device-configuration.md) |
| **„Elektromotoren“** | Service | Der Service-Bildschirm der Dosierermotoren; nur bei Motoren im Profil. |
| **„Körner immer zählen“** | Agronom | **„Ja“**: Die Aussaattabelle und der Statistikbildschirm zählen Körner auch in den Modi **„Durchfluss“** und **„Hybrid“**, nicht nur in **„Einzelkorn“**. |
| **„Schlüssel eingeben“** | Agronom | Nur bei einem Panel mit zeitlich begrenzter Lizenz sichtbar: Geben Sie den Lizenzschlüssel vom Händler ein. |

Die übrigen Punkte dieses Menüs sind für den Servicetechniker und den Hersteller.
