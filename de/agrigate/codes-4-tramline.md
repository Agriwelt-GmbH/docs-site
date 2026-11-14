---
title: 4xx · Fahrgassen-Aktuatoren
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/codes-4-tramline.html
---

# 4xx · Fahrgassen-Aktuatoren

Codes 401–404: Ein Fahrgassen-Aktuator ist stumm, ist das falsche Gerät, kennt seine Stellung nicht oder klemmt.

Die Codes 4xx kommen von den Fahrgassen-Aktuatoren. Das Fenster nennt das Gerät **„Fahrgassenaktor“** und gibt seine Nummer an, zum Beispiel *#1*. Wie die Fahrgasse eingerichtet wird: [Fahrgasse](tramline.md).

Wie ein Code zu lesen ist, die vier Klassen und wie jede in der App aussieht: [So funktionieren Servicecodes](codes.md).

## 401 · Fahrgassen-Aktuator antwortet nicht {#c401}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** der Fahrgassen-Aktuator.

**Was Sie sehen.** Das Alarmfenster mit **„Verbindung weg“**, **„Fahrgassenaktor“** und seiner Nummer.

**Was zu tun ist:**

1. Prüfen Sie das Kabel und die Stromversorgung des Fahrgassen-Aktuators.

## 402 · Kein Fahrgassen-Aktuator {#c402}

**Klasse:** [Gerätestörung](codes.md#class-fault) · **Ort:** der Fahrgassen-Aktuator.

**Was Sie sehen.** Das Alarmfenster mit orangem Titel, **„Falscher Gerätetyp!“**, **„Fahrgassenaktor“** und seiner Nummer. Es kommt sofort, ohne Verzögerung.

**Was zu tun ist:**

1. Anstelle dieses Aktuators antwortet ein anderes Gerät: Prüfen Sie die Nummerierung der Geräte an der Maschine.

## 403 · Stellung des Fahrgassen-Aktuators unbekannt {#c403}

**Klasse:** [Gerätestörung](codes.md#class-fault) · **Ort:** der Fahrgassen-Aktuator.

**Was Sie sehen.** Das Alarmfenster mit orangem Titel, **„Undefiniert“**, **„Fahrgassenaktor“** und seiner Nummer.

**Was zu tun ist:**

1. Prüfen Sie die Abschaltmechanik.
2. Öffnen Sie **„Einstellungen“** › **„Maschine“** › den Aktuator › **„Register“** und drücken Sie **„Zurücksetzen“**, um den Zustand zu löschen.

## 404 · Fahrgassen-Aktuator klemmt {#c404}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** der Fahrgassen-Aktuator.

**Was Sie sehen.** Das Alarmfenster mit **„Blockiert“**, **„Fahrgassenaktor“** und seiner Nummer.

**Was zu tun ist:**

1. Machen Sie die Abschaltmechanik gängig.
2. Öffnen Sie **„Einstellungen“** › **„Maschine“** › den Aktuator › **„Register“** und drücken Sie **„Zurücksetzen“**, um den Zustand zu löschen.
