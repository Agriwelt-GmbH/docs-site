---
title: Einstellungen speichern und laden
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/save-and-load-settings.html
---

# Einstellungen speichern und laden

Eine Kopie aller Einstellungen des aktuellen Profils im Panel oder auf einer Speicherkarte aufbewahren und wieder einspielen – zum Beispiel, um ein Panel zwischen Geräten umzusetzen.

Für das aktuelle Profil kann das Panel **alle Einstellungen speichern** und später wiederherstellen – nützlich, bevor Sie etwas ausprobieren. Steckt eine Speicherkarte im Schacht, lässt sich ein Profil samt Einstellungen auch auf der Karte ablegen, sodass ein Panel mehrere Geräte bedienen kann.

| Punkt im Menü **„Profil“** | Was er bewirkt |
| --- | --- |
| **„Einstellungen speichern“** / **„Einstellungen laden“** | Eine Kopie der Einstellungen im Panel ablegen und wieder einspielen. |
| **„Auf SD-Karte sichern“** / **„Von SD-Karte laden“** | Dasselbe mit der Speicherkarte; das Profil wandert mit seinen Einstellungen. Ohne Karte endet das Speichern mit **„SD-Karte einlegen“**. |

Auf der Ebene **„Service“** enthält das Menü außerdem **„Werkseinstellungen sichern“**: Nach **„Sind Sie sicher?“** speichert es die Einstellungen wie **„Einstellungen speichern“** und legt sie zusätzlich mit dem Profil als Werkskopie des Panels ab, die kein Menüpunkt dieser Firmware wieder einspielt.

::: steps
1. Heben Sie die Ebene an ([Agronomen-Ebene aktivieren](enable-agronomist-level.md) – wählen Sie **„Service“**) und öffnen Sie **„MENU“** → **„Service“** → **„Profil“** ([Das Profil](profile.md)).

2. Blättern Sie zum gewünschten Punkt und drücken Sie **„MENU“**. **„Einstellungen speichern“** und **„Einstellungen laden“** fragen **„Sind Sie sicher?“**.

   ![Das Bestätigungsfenster.](figures/confirm-sure)

3. Berühren Sie **„Ja“**. Das Panel antwortet **„Gespeichert“** oder **„Geladen“**.

   ![Das Panel bestätigt mit „Gespeichert“.](figures/info-saved)
:::

## Profildateien auf der Speicherkarte {#profile-files-on-the-memory-card}

- Die Dateien heißen automatisch **P0001.pfl** und liegen im Ordner **PROFILES** der Karte. Sie dürfen eine Datei umbenennen – halten Sie den Namen auf acht Zeichen, lateinische Buchstaben und Ziffern.
- **„Von SD-Karte laden“** öffnet eine Liste der Profile auf der Karte. Eine von einer Firmware-Version geschriebene Profildatei ist von einer anderen Version sehr wahrscheinlich **nicht lesbar**: Ein unverträgliches Profil wird in dieser Liste **rot** angezeigt.
