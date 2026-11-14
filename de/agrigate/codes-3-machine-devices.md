---
title: 3xx · Behälter, Gebläse, Dosierer und Schleppereingänge
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/codes-3-machine-devices.html
---

# 3xx · Behälter, Gebläse, Dosierer und Schleppereingänge

Codes 301–311: die Geräte am Hub HUB-8 — Behälter, Gebläse, Dosierer, Arbeitsstellung und Schleppereingänge.

Die Codes 3xx kommen von den Geräten, die am Hub HUB-8 angeschlossen sind: Behälterfüllstand, Gebläsedrehzahl, Drehung des Dosierers und die Schleppereingänge (Öldruck, Batterieladung, Kraftstoff, Luftfilter). Der Ort ist das Gerät, zum Beispiel *301 · Behälter*. Wie die Geräte eingerichtet werden: [HUB-8-Eingänge](hub8-inputs.md).

Wie ein Code zu lesen ist, die vier Klassen und wie jede in der App aussieht: [So funktionieren Servicecodes](codes.md).

## 301 · Behälter leer {#c301}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Behälter leer“**. Die Behälterkachel zeigt **„Leer“** mit rotem Ring. Dieser Alarm ertönt auch bei stehender Maschine.

**Was zu tun ist:**

1. Füllen Sie den Behälter.
2. Ist der Behälter voll, prüfen Sie den Füllstandssensor und seine Einstellung: [HUB-8-Eingänge](hub8-inputs.md).

## 302 · Gebläse zu langsam {#c302}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Gebläsedrehzahl zu niedrig“**. Die Gebläsekachel zeigt die Drehzahl in U/min mit rotem Ring. Nur während der Aussaat.

**Was zu tun ist:**

1. Erhöhen Sie die Gebläsedrehzahl: Ölstrom der Hydraulik, Motordrehzahl.
2. Prüfen Sie **„Min., U/min“** und **„Impulse pro Umdrehung“** des Gebläses: [HUB-8-Eingänge](hub8-inputs.md).

## 303 · Gebläse zu schnell {#c303}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Gebläsedrehzahl zu hoch“**. Die Gebläsekachel zeigt die Drehzahl in U/min mit rotem Ring.

**Was zu tun ist:**

1. Senken Sie die Gebläsedrehzahl.
2. Prüfen Sie **„Max., U/min“** und **„Impulse pro Umdrehung“** des Gebläses: [HUB-8-Eingänge](hub8-inputs.md).

## 304 · Dosierer dreht nicht {#c304}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Dosierer dreht nicht“**. Die Dosiererkachel zeigt **„Steht“** mit rotem Ring. Nur während der Aussaat, nach der unter **„Periode, s“** eingestellten Zeit.

**Was zu tun ist:**

1. Halten Sie an: Der Dosierer dreht nicht.
2. Prüfen Sie seinen Antrieb, die Kette und die Kupplung.
3. Dreht er sich doch, prüfen Sie den Wellensensor und **„Periode, s“**.

## 305 · Öldruck zu niedrig {#c305}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Öldruck-Störung“**. Bei einem Zündungseingang ertönt es nur bei eingeschalteter Zündung.

**Was zu tun ist:**

1. Stellen Sie den Motor ab.
2. Prüfen Sie den Ölstand.

## 306 · Batterie wird nicht geladen {#c306}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Batterie lädt nicht“**. Bei einem Zündungseingang ertönt es nur bei eingeschalteter Zündung.

**Was zu tun ist:**

1. Prüfen Sie die Lichtmaschine und ihren Riemen.

## 307 · Kraftstoff knapp {#c307}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Wenig Kraftstoff“**.

**Was zu tun ist:**

1. Tanken Sie.

## 308 · Luftfilter verstopft {#c308}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Luftfilter verstopft“**.

**Was zu tun ist:**

1. Reinigen oder ersetzen Sie den Luftfilter.

## 309 · Maschinengerät antwortet nicht {#c309}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Verbindung unterbrochen:“** gefolgt vom Namen des Geräts, zum Beispiel des Behälters. Seine Kachel hat einen grauen Ring.

**Was zu tun ist:**

1. Prüfen Sie das Kabel des genannten Geräts zum HUB-8.
2. Sind alle Geräte des HUB-8 stumm, prüfen Sie die Stromversorgung und das Kabel des HUB-8 selbst.

## 310 · Falsches Gerät an einem HUB-8-Eingang {#c310}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Falscher Gerätetyp:“** gefolgt vom Namen des Geräts. Seine Kachel zeigt **„Falsch“**.

**Was zu tun ist:**

1. Prüfen Sie, ob das Gerät an seinem eigenen Eingang angeschlossen ist.
2. Prüfen Sie, ob die Art des Geräts bei den Geräten der Maschine stimmt: [HUB-8-Eingänge](hub8-inputs.md).

## 311 · Schleppereingang im Alarm {#c311}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** das Gerät.

**Was Sie sehen.** Das Alarmfenster mit **„Alarm:“** gefolgt vom Namen des Geräts.

**Was zu tun ist:**

1. Prüfen Sie das im Fenster genannte Gerät.
