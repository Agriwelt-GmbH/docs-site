---
title: So funktionieren Servicecodes
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/codes.html
---

# So funktionieren Servicecodes

Was die drei Ziffern eines Agrigate-Servicecodes bedeuten, wie der Ort neben dem Code angezeigt wird, die vier Klassen und wie jede in der App aussieht, und wie Sie einen Code anhand der Worte auf dem Bildschirm finden.

Jeder Alarm, jede Störung und jedes bemerkenswerte Ereignis eines Agrigate-Systems hat einen Servicecode aus drei Ziffern. Ein Code ändert nie seine Bedeutung: Sagen Sie dem Service *102 an Reihe 7*, weiß er, was geschehen ist, ohne den Bildschirm zu sehen.

## Die drei Ziffern {#the-three-digits}

Die erste Ziffer ist der Teil des Systems; die anderen beiden sind die Art der Störung.

| Code | Teil des Systems |
| --- | --- |
| [1xx](codes-1-row-sensor.md) | Der Sensor einer Reihe selbst |
| [2xx](codes-2-seeding.md) | Die Aussaat einer Reihe — der Sensor arbeitet, die Reihe sät falsch |
| [3xx](codes-3-machine-devices.md) | Die Geräte am HUB-8: Behälter, Gebläse, Dosierer, Schleppereingänge |
| [4xx](codes-4-tramline.md) | Fahrgassen-Aktuatoren |
| 5xx | In dieser Version nicht verwendet |
| [6xx](codes-6-gateway-link.md) | Das Gateway und die Verbindung dorthin |
| [7xx](codes-7-tablet.md) | Das iPad oder iPhone |
| [8xx](codes-8-gateway-update.md) | Das Aktualisieren des Gateways |
| [9xx](codes-9-setup.md) | Die Antworten des Gateways, wenn die App etwas einrichtet |

## Der Ort steht neben dem Code {#the-place-is-shown-beside-the-code}

Der Code sagt, *was*; der Ort sagt, *wo*. Er steht neben dem Code, nicht darin: *102 · Reihe 7*, *301 · Behälter*, *404 · Fahrgassen-Aktuator #2*. So deckt derselbe Code jede Reihe und jedes Gerät ab.

## Die vier Klassen {#classes}

### Alarm {#class-alarm}

Ein Fenster mit rotem Titelstreifen **„ALARM!“** und der Summer. Etwas an der Maschine braucht Sie jetzt. [Das Alarmfenster](alarm-window.md)

### Gerätestörung {#class-fault}

Dasselbe Fenster mit orangem Titelstreifen, und der Summer. Ein Gerät meldet, dass es gestört ist — verstopft, geblendet, die falsche Art Gerät.

### Achtung {#class-attention}

Kein Fenster. Eine gelbe Kapsel oder eine Zeile neben dem, was Sie gerade tun — zum Beispiel **„Lautstärke aus“** oder eine Meldung auf der Einrichtungsseite. Lesen Sie sie und handeln Sie, wenn Sie können. [Meldungen über dem Bildschirm](screen-messages.md)

### Protokolleintrag {#class-record}

Nichts zu tun. Das Ereignis wird für den Service aufbewahrt.

## Einen Code anhand des Bildschirms finden {#finding-a-code-from-the-screen}

> **HINWEIS**
>
> **In dieser Vorabversion zeigt das Alarmfenster die Worte des Alarms, nicht seinen Code.** Suchen Sie die Worte in den Code-Themen — jeder Code dort nennt die Worte, die die App zeigt. Die Aktualisierung des Gateways zeigt ihre Codes auf dem Bildschirm, zum Beispiel **804 · „Brücke aktualisiert“**. Bei den Setup-Antworten des Gateways zeigt die App eine Zahl nach den Worten; siehe [9xx](codes-9-setup.md).

Zwei Codes haben auf dem Bildschirm dieselben Worte: 201 und 202 sagen beide **„Unter Sollmenge“**. Der Balken unterscheidet sie — gelb bei 201, dunkelrot blinkend bei 202 — und ebenso das Reihenmenü (**„Sät nicht“** bei 202).

## Wenn Sie den Service anrufen {#when-you-call-the-service}

Nennen Sie den Code (oder die Worte auf dem Bildschirm), den Ort — die Reihe oder das Gerät — und aus den **„Einstellungen“**: die Version der App (**„App“** › **„Version“**) und die Firmware des Gateways (**„Maschine“** › **„Firmware der Brücke“**).
