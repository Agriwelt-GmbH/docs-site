---
title: 2xx · Aussaatalarme
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/codes-2-seeding.html
---

# 2xx · Aussaatalarme

Codes 201–207: Der Sensor arbeitet, aber die Reihe sät zu wenig, zu viel, mit Doppelbelegungen oder Fehlstellen, in die Fahrgasse oder ohne Überwachung.

Die Codes 2xx bedeuten, dass der Sensor der Reihe arbeitet und die Aussaat selbst nicht stimmt: Die Ursache liegt an der Sämaschine, nicht in der Elektronik. Der Ort ist die Reihe.

Wie ein Code zu lesen ist, die vier Klassen und wie jede in der App aussieht: [So funktionieren Servicecodes](codes.md).

## 201 · Reihe unter der zulässigen Sollmenge {#c201}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit **„Unter Sollmenge“** und den Reihennummern. Der Balken der Reihe ist gelb: unter der Überwachungslinie (Durchfluss) oder unter dem Toleranzband (Hybrid, Einzelkorn).

**Was zu tun ist:**

1. Prüfen Sie den Dosierer und das Saatrohr dieser Reihe.
2. Prüfen Sie, ob über dem Dosierer Saatgut ist.

## 202 · Reihe sät nicht {#c202}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit **„Unter Sollmenge“** und den Reihennummern — dieselben Worte wie bei Code 201. Die Spalte der Reihe blinkt dunkelrot; das Reihenmenü sagt **„Sät nicht“**. Der Sensor antwortet, kein Korn passiert ihn, während die meisten Reihen säen.

**Was zu tun ist:**

1. Halten Sie an: Die Reihe sät nicht.
2. Prüfen Sie den Dosierer, seinen Antrieb und das Saatrohr dieser Reihe.
3. Prüfen Sie, ob Saatgut im Behälter ist.

## 203 · Reihe über der zulässigen Sollmenge {#c203}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit **„Über Sollmenge“** und den Reihennummern. Der Balken der Reihe ist blau. Nur in den Modi Hybrid und Einzelkorn.

**Was zu tun ist:**

1. Prüfen Sie die Einstellung des Dosierers dieser Reihe.

## 204 · Zu viele Doppelbelegungen {#c204}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit **„Zu viele Doppel“** und den Reihennummern. Nur im Modus Einzelkorn und nur, wenn **„Doppel, Alarmschwelle“** nicht auf **„Nein“** steht.

**Was zu tun ist:**

1. Prüfen Sie die Säscheibe, den Abstreifer und den Unterdruck dieser Reihe.

## 205 · Zu viele Fehlstellen {#c205}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit **„Zu viele Fehlstellen“** und den Reihennummern. Nur im Modus Einzelkorn und nur, wenn **„Fehlstellen, Alarmschwelle“** nicht auf **„Nein“** steht.

**Was zu tun ist:**

1. Prüfen Sie die Säscheibe und den Unterdruck dieser Reihe.
2. Prüfen Sie die Fahrgeschwindigkeit: Fahren Sie langsamer, wenn sie für die Scheibe zu hoch ist.

## 206 · Aussaat in die Fahrgasse {#c206}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit **„Saat in Fahrgasse“** und den Reihennummern. Die Spalte der Reihe ist grau schraffiert (Fahrgasse), und das Saatgut darüber ist rot schraffiert.

**Was zu tun ist:**

1. Prüfen Sie die Abschaltklappe oder die Kupplung der Fahrgassenschaltung an dieser Reihe.
2. Soll die Reihe säen, prüfen Sie den Fahrgassenrhythmus und die Einstellungen der Aktuatoren: [Fahrgasse](tramline.md).

## 207 · Aussaat ohne Überwachung {#c207}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** die Reihe.

**Was Sie sehen.** Kein Fenster. Die gelbe Kapsel **„NICHT ÜBERWACHT“** mit den Reihen des Bandes blinkt über dem Band, und der Summer ertönt. Im Band fließt Saatgut, aber weniger Reihen säen innerhalb der Norm, als **„Anteil säender Reihen“** verlangt — zum Beispiel, wenn die Überwachungslinie oder die Sollmenge weit von dem entfernt ist, was die Reihen wirklich säen.

**Was zu tun ist:**

1. Prüfen Sie die Überwachungslinie oder die Sollmenge gegen das, was die Reihen wirklich säen.
2. Prüfen Sie die gelben oder dunkelroten Reihen: [Balkenfarben](bar-colours.md).
