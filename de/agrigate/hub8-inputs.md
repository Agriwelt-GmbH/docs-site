---
title: HUB-8-Eingänge — die Geräte der Maschine
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/hub8-inputs.html
---

# HUB-8-Eingänge — die Geräte der Maschine

Sagen Sie der App, welche Geräte der HUB-8 trägt — Behälter, Gebläse, Dosierer, Schleppereingänge, Arbeitsstellung, Durchflussmesser —, welchen Eingang jedes belegt und wie jedes eingestellt wird und Alarm auslöst.

Der Hub HUB-8 bringt die übrigen Geräte der Maschine auf die Sensorleitung. Das Gateway liest nur seine Eingänge; was an einem Eingang angeschlossen ist — ein Behältersensor, ein Gebläsesensor, die Arbeitsstellung —, weiß nur die App. Sie sagen der App also, was an der Maschine ist, und die App rechnet aus, welchen Eingang jedes Gerät belegt.

Öffnen Sie **„Einstellungen“** › **„Maschine“** › **HUB-8**. Die Seite **„Geräte“** öffnet sich.

## Geräte an der Maschine {#devices-on-the-machine}

Stellen Sie unter **„Geräte der Maschine“** mit **−** / **+** ein, wie viele von jeder Art die Maschine hat. Die Grenzen: 2 Gebläse, 9 Dosierer, 9 Behälter, von jeder anderen Art eines; Dosierer, Behälter und Schleppereingänge zusammen höchstens 12. An einer Grenze bleibt **+** aus.

## Welchen Eingang jedes Gerät belegt {#which-input-each-device-takes}

Die Geräte belegen die Eingänge des HUB-8 in fester Reihenfolge: Geschwindigkeitssensor → Gebläse → Dosierer → Behälter → Schleppereingänge → Arbeitsstellung → Durchflussmesser. Das erste Gerät in dieser Reihenfolge wird an Eingang 1 angeschlossen, das nächste an Eingang 2 und so weiter. Die Liste **„HUB-8-Eingänge“** zeigt jeden Eingang mit seinem Gerät und seinem aktuellen Zustand.

> **WICHTIG**
>
> **Das Hinzufügen eines Geräts verschiebt die Geräte danach.** Fügen Sie einen Behälter hinzu, rückt die Arbeitsstellung um einen Eingang weiter. Verdrahten Sie den HUB-8 nach der neuen Liste um. Hält das Gateway die Geräte in anderer Reihenfolge, sagt die Seite **„Adressen in der Bridge folgen nicht der Reihe“**; tippen Sie auf **„Nach der Reihe anordnen“**.

Die Spuranreißer hängen nicht am HUB-8: Sie sind an den Fahrgassen-Controller angeschlossen. Schalten Sie sie im Abschnitt der Spuranreißer am Ende der Seite ein.

Der Abschnitt **„Profil in der Bridge“** zeigt, ob das Gateway die Liste übernommen hat.

## Die Einstellungen jedes Geräts {#the-settings-of-each-device}

Tippen Sie in der Liste auf ein Gerät (oder auf seine Kachel auf dem Reihenbildschirm), um seine Seite zu öffnen: seinen Zustand und seine **„Parameter“**.

| Gerät | Parameter | Wann es Alarm auslöst |
| --- | --- | --- |
| **„Arbeitsstellung“** | **„Signal Transportstellung“** (0 oder 1), **„Alarmkriterium“** | Der Zustand wird als **„Arbeit“** oder **„Transport“** angezeigt. In Transportstellung — die Sämaschine ist ausgehoben, auch beim Wenden am Vorgewende — bleiben **„Unter Sollmenge“**, **„Sät nicht“**, ein langsames Gebläse und ein stehender Dosierer stumm. Störungen der Kornsensoren melden sich auch in Transportstellung. |
| **„Behälter“** | **„Signal ‚leer‘“** ist 1 | Immer, auch bei stehender Maschine: **„Behälter leer“**. |
| **„Gebläse“** | **„Impulse pro Umdrehung“** (1–60), **„Min., U/min“** und **„Max., U/min“** (500–9000) | Zu schnell — immer; zu langsam — nur während der Aussaat. |
| **„Dosierer“** | **„Periode, s“** (1–60) | Dreht sich länger als die Periode nicht, während gesät wird: **„Dosierer dreht nicht“**. |
| **„Öldruck“**, **„Batterieladung“** | **„Alarmsignal“** (0 oder 1), **„Verzögerung, s“** (1–30) | Das Signal muss die Verzögerung lang anliegen. Bei einem Zündungseingang nur bei eingeschalteter Zündung. |
| **„Kraftstoff“**, **„Luftfilter“** | **„Alarmsignal“**, **„Verzögerung, s“** | Das Signal muss die Verzögerung lang anliegen. |
| **„Zündung“** | **„Signal ‚ein‘“** | Nie — sie ist ein Zustand, von dem der Öldruck und die Batterieladung abhängen. |
| **„Durchflussmesser“** | **„Impulse pro Liter“** (1–60000) | — Er zeigt Liter je Minute und die bisherigen Liter. |
| **„Spuranreißer links“**, **„Spuranreißer rechts“** | **„Signal ‚abgesenkt‘“** | — Sie werden als **„Unten“** oder **„Oben“** angezeigt. |

Die Zustände, die in der Liste und auf den Kacheln angezeigt werden: **„keine Daten“** — noch nichts gelesen; **„stumm“** — der Eingang antwortet nicht; **„falsches Gerät“** — eine andere Art Gerät antwortet. Die Alarme dieser Geräte: [3xx · Behälter, Gebläse, Dosierer und Schleppereingänge](codes-3-machine-devices.md).

> **SIEHE AUCH**
>
> [Die Maschinenseite](machine-screen.md) · [Die Kacheln unten](bottom-tiles.md)
