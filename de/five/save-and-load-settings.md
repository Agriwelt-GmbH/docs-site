---
title: Einstellungen speichern und laden
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/save-and-load-settings.html
---

# Einstellungen speichern und laden

Eine Kopie der Einstellungen im Panel aufbewahren und zurückholen und das Profil auf eine Speicherkarte schreiben.

Das Panel kann **eine Kopie seiner Einstellungen aufbewahren** und später zurückholen — nützlich, bevor Sie etwas ausprobieren. Mit einer Speicherkarte im Schacht kann es das Profil außerdem **auf die Karte schreiben**. Alle diese Punkte stehen am Ende des Menüs **„Profile“** (Profil) ([Das Profil](profile.md)) und brauchen die Ebene **„Agronomist“** (Agronom).

| **Punkt im Menü „Profile“** | **Was er tut** |
| --- | --- |
| **„Save settings“** (Einstellungen speichern) | Bewahrt eine Kopie der aktuellen Einstellungen im Panel auf. |
| **„Load settings“** (Einstellungen laden) | Holt diese Kopie zurück. |
| **„Save to SD-card“** (Auf SD-Karte speichern) | Schreibt das Profil auf die Speicherkarte. Wird nur angezeigt, solange eine Karte im Schacht steckt und bereit ist. |
| **„Load from SD-card“** (Von SD-Karte laden) | Zeigt die Liste der Profile auf der Karte. Wird nur angezeigt, solange eine Karte bereit ist. |
| **„Save factory defaults“** (Werkseinstellungen speichern) | Speichert die aktuellen Einstellungen als Werkswerte. Nur Ebene **„Service“** (Service). |

## Einstellungen aufbewahren und zurückholen {#keep-and-restore-the-settings}

::: steps
1. Heben Sie die Ebene an ([Agronomenebene freischalten](enable-agronomist-level.md)), tippen Sie mit zwei Fingern auf den Startbildschirm und öffnen Sie **„Service“** → **„Profile“** — tippen Sie jeden Punkt zweimal an.

2. Wischen Sie nach oben ans Ende des Menüs. Tippen Sie auf **„Save settings“** oder **„Load settings“** und noch einmal darauf. Das Panel fragt **„Are you sure?“** (Sind Sie sicher?).

   ![Die Frage vor dem Speichern der Einstellungen.](figures/five-confirm-sure)

3. Tippen Sie auf **„Yes“** (Ja). Das Panel antwortet **„Saved“** (Gespeichert) oder **„Loaded“** (Geladen).

   ![Das Panel bestätigt mit „Saved“.](figures/five-info-saved)
:::

Gibt es keine Kopie zum Zurückholen, endet **„Load settings“** mit **„FAILURE“** (Fehler) in einem roten Fenster.

## Das Profil auf die Speicherkarte schreiben {#write-the-profile-to-the-memory-card}

Tippen Sie zweimal auf **„Save to SD-card“**. Es gibt keine Rückfrage: Das Panel schreibt das Profil und antwortet **„Saved“**. Lässt sich die Karte nicht beschreiben, antwortet es **„FAILURE“**; fehlt die Karte, **„FAILURE“** und **„Insert SD-card“** (SD-Karte einlegen).

- Die Dateien werden automatisch benannt, **P0001.pfl** und fortlaufend, im Ordner **PROFILES** der Karte.
- Behalten Sie die Karte für ihr eigenes Panel: Eine Profildatei, die von einer Firmwareversion geschrieben wurde, ist von einer anderen sehr wahrscheinlich **nicht lesbar**.

## Die Liste der Profile auf der Karte {#the-list-of-profiles-on-the-card}

**„Load from SD-card“** öffnet eine Liste der Profildateien auf der Karte. Eine Datei, die das Panel nicht lesen kann, wird **rot** angezeigt. Ein Tippen mit **drei Fingern** schließt die Liste. Sind keine Profildateien auf der Karte, antwortet der Punkt mit **„FAILURE“**.
