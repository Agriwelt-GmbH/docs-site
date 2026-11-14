---
title: Balkenfarben und die drei Rottöne
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/bar-colours.html
---

# Balkenfarben und die drei Rottöne

Was jede Farbe, Schraffur und jedes Zeichen am Balken einer Reihe auf dem Reihenbildschirm bedeutet, und die drei verschiedenen Rottöne.

In der Kabine lesen Sie die Farbe, nicht den Text. Jeder Balken des [Reihenbildschirms](rows-screen.md) hat eines der folgenden Erscheinungsbilder.

## Der Balken selbst {#the-bar-itself}

| Was Sie sehen | Was es bedeutet |
| --- | --- |
| Grüner Balken | Die Reihe sät innerhalb der Norm. |
| Gelber Balken | Die Reihe sät unter der Überwachungslinie (Durchfluss) oder unter dem Toleranzband (Hybrid, Einzelkorn). |
| Blauer Balken | Die Reihe sät über dem Toleranzband. Nur bei Hybrid und Einzelkorn. |
| Gelbe und blaue schmale Balken beiderseits eines grünen | Fehlstellen (gelb, links) und Doppelbelegungen (blau, rechts) der Reihe. Nur bei Einzelkorn, bei eingeschaltetem **„Fehlstellen & Doppel“**. |

## Die drei Rottöne {#the-three-reds}

| Was Sie sehen | Was es bedeutet | Was zu tun ist |
| --- | --- | --- |
| **Hellrot, blinkend**, mit einem roten ✕ | Der Sensor hat seit dem Einschalten des Gateways **nie geantwortet**. | Prüfen Sie Stecker und Kabel des Sensors. [Code 101](codes-1-row-sensor.md#c101) |
| **Grauer Hintergrund mit einem roten ✕** | Der Sensor hat geantwortet und ist dann **verstummt**. | Prüfen Sie Stecker und Kabel des Sensors. [Code 101](codes-1-row-sensor.md#c101) |
| **Dunkelrot, blinkend** | Der Sensor ist da, aber **kein Korn passiert ihn**. | Prüfen Sie den Dosierer und das Saatrohr. [Code 202](codes-2-seeding.md#c202) |

Eine hellrote Spalte, die mit einem *?* blinkt, bedeutet, dass das Gerät unter der Nummer dieser Reihe kein Kornsensor ist. [Code 106](codes-1-row-sensor.md#c106)

## Weitere Erscheinungsbilder {#other-looks}

| Was Sie sehen | Was es bedeutet |
| --- | --- |
| Weiße Spalte mit einem schwarzen *!* | Die Reihe ist aus der Überwachung genommen: Sie löst keine Alarme aus und zählt nicht zum Anteil säender Reihen. [Das Reihenmenü](row-menu.md) |
| Graue Schraffur | Die Reihe liegt in der Fahrgasse und soll nicht säen. [Fahrgasse](tramline.md) |
| Rote Schraffur über dem Grau | Die Reihe sät, obwohl sie in der Fahrgasse liegt. [Code 206](codes-2-seeding.md#c206) |
| Ein *?* über einer leeren Spalte | Über die Reihe ist noch nichts bekannt. |
| Ein Balken, der sich langsam füllt, mit einem gelben *?* | Das Gateway schickt dem Sensor eine neue Einstellung, zum Beispiel eine neue **„Fraktion“**. Die Reihen tun das nacheinander; es dauert je Reihe einige Sekunden. |

Ein Sensor, der eine Störung meldet — verstopft, geblendet, defekt —, behält seinen Balken; den Grund nennt das Alarmfenster. [1xx · Störungen des Reihensensors](codes-1-row-sensor.md)

Dieselben Farben stehen in der eingebauten Hilfe: **„Einstellungen“** › **„App“** › **„Hilfe“** › **„Farben der Balken und die drei Roten“**.
