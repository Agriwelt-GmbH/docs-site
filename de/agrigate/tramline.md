---
title: Fahrgasse
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/tramline.html
---

# Fahrgasse

Wie die App die Fahrgassen-Durchgänge zählt, wie Sie den Rhythmus und die Aktuatoren einstellen und wie Sie den Durchgang von Hand über die Durchgangskachel ändern.

Die App zählt die Durchgänge des Fahrgassenrhythmus. In den Durchgängen des Rhythmus werden die Reihen der Fahrgassen-Aktuatoren stumm: Ihre Spalten sind grau schraffiert, sie lösen kein **„Sät nicht“** aus, und eine Reihe, die dennoch sät, löst **„Saat in Fahrgasse“** aus.

## Einstellungen {#settings}

**„Einstellungen“** › **„Maschine“**, Abschnitt **„Fahrgasse“** — wird nur an Maschinen angezeigt, die eine Fahrgasse haben können.

![Der Abschnitt Fahrgasse der Maschineneinstellungen.](figures/app-tramline-settings)

| Einstellung | Was sie bewirkt |
| --- | --- |
| **„Fahrgassenaktoren“** | Wie viele Fahrgassen-Aktuatoren die Maschine hat. |
| **„Fahrgasse“** | Schaltet die Fahrgasse ein oder aus. |
| **„Fahrgassenrhythmus“** | Der Rhythmus: Wählen Sie mit **„Wählen“** einen von drei Rhythmen — der aktive ist mit **„Aktiv“** gekennzeichnet —, stellen Sie seine Anzahl **„Durchgänge“** ein (1–50) und unter **„Fahrgassenaktoren aktivieren“** die Durchgänge, in denen jeder Aktuator seine Reihen abschaltet (bis zu vier je Aktuator). **„Rhythmus zurücksetzen“** löscht den Rhythmus. |
| **„Zuordnung Aktuator-Sensor“** | Welche Reihen jeder Aktuator abschaltet — bis zu vier Reihenbereiche je Aktuator. |
| **„Fahrgassenaktor“** #1, #2 … | Jeder Aktuator: sein Zustand, **„Aus-Position“** (**„Ausgefahren“** oder **„Eingezogen“**), **„Umschalten“** (**„bei Aussaat“** oder **„immer“**) und **„Überwachung aus“** / **„Überwachung ein“**. |
| **„Quelle der Umschaltung“** | Die erste Auswahl der Liste — der Durchgang wechselt von selbst: über die Spuranreißer, wenn die Maschine sie hat, sonst bei jedem Ausheben der Sämaschine. |

Ein Aktuator, der aus der Überwachung genommen wurde, ist virtuell: Seine Reihen werden nach dem Rhythmus stumm, aber das Gateway steuert ihn nicht an.

Unter **„Einstellungen“** › **„Produkte“** legt **„Max. Saat in Fahrgasse,%“** fest, wie viel eine Fahrgassenreihe säen darf, bevor **„Saat in Fahrgasse“** ausgelöst wird (20 % der Sollmenge, sofern nicht geändert). [Einstellungen „Produkte“](settings-products.md)

## Die Durchgangskachel und das Durchgangsmenü {#the-bout-tile-and-the-bout-menu}

Auf dem Reihenbildschirm zeigt die Kachel **„Durchgang“** den aktuellen Durchgang über den Durchgängen des Rhythmus, zum Beispiel *2 / 4*, und den Rhythmus. Ihr Ring ist grün, solange der Durchgang von selbst wechselt, und gelb, solange er das nicht tut; er wird rot und blinkt, wenn ein Aktuator im Alarm ist.

Tippen Sie auf die Kachel, um das Menü **„Fahrgasse“** zu öffnen:

![Das Durchgangsmenü über dem Reihenbildschirm.](figures/app-tramline-bout-menu)

| Eintrag | Was er bewirkt |
| --- | --- |
| **„Nächster Durchgang“** | Wechselt zum nächsten Durchgang und schließt das Menü. Wird angeboten, wenn der Durchgang nicht von selbst wechseln kann. |
| **„Automatische Umschaltung“** | Schaltet den automatischen Wechsel des Durchgangs ein oder aus. Wird angeboten, wenn die Maschine ihn von selbst wechseln kann. |
| **„Aktueller Durchgang“** | Stellt den Durchgang mit **−** / **+** ein. Wird beim Schließen des Menüs geschrieben. |

**„Fertig“** schließt das Menü.

> **SIEHE AUCH**
>
> [4xx · Fahrgassen-Aktuatoren](codes-4-tramline.md) · [Code 206](codes-2-seeding.md#c206) · [Balkenfarben](bar-colours.md)
