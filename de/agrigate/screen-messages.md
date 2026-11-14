---
title: Meldungen über dem Bildschirm
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/screen-messages.html
---

# Meldungen über dem Bildschirm

Die roten und gelben Kapseln, die über jeder Seite erscheinen — die Verbindung zum Gateway, der Ton und die Aussaat ohne Überwachung — was jede bedeutet und was zu tun ist.

Neben dem Alarmfenster spricht die App über kleine Kapseln über der Seite. Das sind keine Fenster: Sie müssen nicht geschlossen werden und verschwinden, sobald die Ursache weg ist.

## Rote Kapsel in der Bildschirmmitte — die Verbindung zum Gateway {#red-capsule-in-the-middle-of-the-screen-the-link-to-the-gateway}

Solange die rote Kapsel angezeigt wird, hat die App keine Live-Daten: Die Seite ist abgedunkelt und zeigt die letzte Messung.

| Die Kapsel sagt | Was es bedeutet | Was zu tun ist |
| --- | --- | --- |
| **„Suche Brücke…“** | Die App sucht ihr Gateway. | Prüfen Sie, ob das Gateway Strom hat und das Tablet nahe daran ist. |
| **„Verbindung zu“** und ein Name | Das Gateway ist gefunden; die App verbindet sich. | Warten Sie. |
| **„Verbindung zu“** ein Name **„verloren, suche…“** | Die Verbindung ist abgerissen; die App sucht dasselbe Gateway erneut. | Warten Sie; prüfen Sie die Stromversorgung des Gateways. Nach 3 Sekunden öffnet sich das Fenster **„Verbindung zur Brücke verloren“**. [Code 601](codes-6-gateway-link.md#c601) |
| **„Brücke schweigt…“** | Die Verbindung steht, aber das Gateway sendet nichts. | Warten Sie 10 Sekunden; bleibt es so, schalten Sie die Stromversorgung des Gateways aus und wieder ein. [Code 602](codes-6-gateway-link.md#c602) |
| **„Brücke wählen“** | Mehrere Gateways sind in Reichweite, oder Ihres wird nicht gefunden. Tippen Sie auf die Kapsel, um die Liste zu öffnen. | Tippen Sie auf Ihr Gateway. [Erste Verbindung](first-connection.md) |
| **„Bluetooth ausgeschaltet“** | Bluetooth ist am Tablet ausgeschaltet. | Schalten Sie es ein. [Code 704](codes-7-tablet.md#c704) |
| **„Keine Bluetooth-Berechtigung“** | Die App darf Bluetooth nicht verwenden. | Erlauben Sie es in den iPad-Einstellungen. [Code 705](codes-7-tablet.md#c705) |

## Gelbe Kapsel oben — der Ton {#yellow-capsule-at-the-top-the-sound}

| Die Kapsel sagt | Was es bedeutet | Was zu tun ist |
| --- | --- | --- |
| **„Lautstärke aus“** | Die Lautstärke des Tablets liegt unter 20 %: Ein Alarm wäre nicht zu hören. | Drehen Sie die Lautstärke auf. [Code 701](codes-7-tablet.md#c701) |
| **„Ton im Kopfhörer“** | Der Ton geht an Kopfhörer, einen Bluetooth-Lautsprecher oder ein anderes Gerät. | Trennen Sie es. [Code 702](codes-7-tablet.md#c702) |

Dieselbe gelbe Zeile erscheint im Alarmfenster, damit Sie wissen, warum Sie ihn nicht gehört haben.

## Gelbe Kapsel über einem Band — Überwachung {#yellow-capsule-over-a-band-control}

| Die Kapsel sagt | Was es bedeutet | Was zu tun ist |
| --- | --- | --- |
| **„NICHT ÜBERWACHT“** und die Reihen des Bandes, blinkend | Im Band fließt Saatgut, aber weniger Reihen säen innerhalb der Norm, als dem eingestellten Anteil entspricht. Der Summer ertönt. | Prüfen Sie die Überwachungslinie oder die Sollmenge und die gelben und dunkelroten Reihen. [Code 207](codes-2-seeding.md#c207) |

> **SIEHE AUCH**
>
> [Das Alarmfenster](alarm-window.md) · [Was Sie brauchen](what-you-need.md)
