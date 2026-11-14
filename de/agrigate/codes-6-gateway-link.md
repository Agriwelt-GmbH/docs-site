---
title: 6xx · Gateway und Verbindung
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/codes-6-gateway-link.html
---

# 6xx · Gateway und Verbindung

Codes 601–602: Die Bluetooth-Verbindung zum Gateway ist abgerissen, oder das Gateway ist verbunden, sendet aber nichts.

Die Codes 6xx betreffen das Gateway und die Funkverbindung zwischen dem Gateway und dem iPad oder iPhone. Solange die Verbindung unterbrochen ist, ist jede Zahl auf dem Bildschirm veraltet: Der Bildschirm ist abgedunkelt, und die Alarme der Reihen warten.

Wie ein Code zu lesen ist, die vier Klassen und wie jede in der App aussieht: [So funktionieren Servicecodes](codes.md).

## 601 · Verbindung zum Gateway verloren {#c601}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** kein bestimmter.

**Was Sie sehen.** Das Alarmfenster mit **„Verbindung zur Brücke verloren“**, nachdem die Verbindung 3 Sekunden lang unterbrochen war. Eine rote Kapsel in der Bildschirmmitte sagt, was die App gerade tut, zum Beispiel **„Suche Brücke…“**. Das Fenster schließt sich von selbst, sobald das Gateway wieder antwortet.

**Was zu tun ist:**

1. Prüfen Sie, ob das Gateway Strom hat.
2. Prüfen Sie, ob das iPad oder iPhone noch in der Kabine nahe am Gateway ist.
3. Warten Sie: Die App verbindet sich von selbst neu. Tut sie es nicht, nutzen Sie **„Erneut verbinden“** unter **„Einstellungen“** › **„Maschine“** › **„Brücke“**.

## 602 · Gateway stumm {#c602}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** kein bestimmter.

**Was Sie sehen.** Die rote Kapsel **„Brücke schweigt…“**: Die Verbindung steht, aber es kommen keine Daten. Der Bildschirm ist abgedunkelt; nach 3 Sekunden öffnet sich das Fenster **„Verbindung zur Brücke verloren“** wie bei Code 601.

**Was zu tun ist:**

1. Warten Sie 10 Sekunden.
2. Bleibt es so, schalten Sie die Stromversorgung des Gateways aus und wieder ein.
