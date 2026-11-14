---
title: Einstellungen — Überwachung und Alarme
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/settings-control-alarms.html
---

# Einstellungen — Überwachung und Alarme

Wann die Maschine als säend gilt, wie lange eine Störung anhalten muss, bevor es Alarm gibt, die Toleranz und die Schwellen für Doppelbelegungen und Fehlstellen sowie der Alarmsummer.

**„Einstellungen“** › **„Überwachung und Alarme“** bestimmt, wie die Reihen bewertet werden und wie laut der Alarm ist.

## Durchflussüberwachung {#flow-control}

| Einstellung | Was sie bewirkt | Bereich | Standard |
| --- | --- | --- | --- |
| **„Anteil säender Reihen“** | Die Überwachung beginnt, wenn mindestens dieser Anteil der Reihen 3 Sekunden hintereinander innerhalb der Norm sät, und endet sofort, wenn der Anteil verloren geht. Solange sie überwacht wird, gilt die Maschine als säend. | 5–80 %, in 5er-Schritten | 20 % |
| **„Alarmverzögerung“** | Wie lange eine Störung einer Reihe anhalten muss, bevor sich das Alarmfenster öffnet. | 2–20 s | 3 s |
| **„Eigener Anteil für Dünger“** | Bei Düngersensoren: gibt dem Düngerband einen eigenen Anteil, **„Anteil säender Düngerreihen“**. Aus — es gilt der Saatanteil. | — | Aus |

Die Maschine gilt als säend, wenn mindestens ein Band — Saat oder Dünger — überwacht wird.

> **TIPP**
>
> **Wenn die App auf einem holprigen Feld zu oft alarmiert, erhöhen Sie zuerst die „Alarmverzögerung“.** Eine kurze Verzögerung reagiert auf jede Bodenwelle; eine lange lässt eine echte Störung länger laufen, bevor Sie sie hören.

## Hybrid- und Einzelkornsaat {#hybrid-and-precision-seeding}

Wird angezeigt, wenn eine Gruppe im Modus Hybrid oder Einzelkorn ist. Ein Wert für die ganze Maschine.

| Einstellung | Was sie bewirkt | Bereich | Standard |
| --- | --- | --- | --- |
| **„Toleranz“** | Das Band um die Sollmenge: darunter **„Unter Sollmenge“**, darüber **„Über Sollmenge“**. | 5–95 %, in 5er-Schritten | 50 % |
| **„Doppel, Alarmschwelle“** | Anteil der Doppelbelegungen auf den letzten 20 m, über dem **„Zu viele Doppel“** ausgelöst wird. **„Nein“** — kein Alarm. | Nein, 1–95 % | Nein |
| **„Fehlstellen, Alarmschwelle“** | Dasselbe für Fehlstellen: **„Zu viele Fehlstellen“**. | Nein, 1–95 % | Nein |
| **„Fehlstellen & Doppel“** | Schmale Balken neben der Spalte jeder Reihe: Fehlstellen links, Doppelbelegungen rechts. Die Zahlen stehen immer in der Tabelle. | Ein / Aus | Aus |

## Alarmsummer {#alarm-buzzer}

| Einstellung | Was sie bewirkt |
| --- | --- |
| **„Lautstärke“** | **„Leise“**, **„Mittel“** oder **„Laut“** (Standard). Die eigene Lautstärke des Tablets begrenzt sie weiterhin. |
| **„Testton“** | Spielt einen Piepton in der gewählten Lautstärke. |
| **„10 Min still“** | Schaltet den Summer für 10 Minuten stumm. **„Stille“** zeigt die verbleibenden Minuten; **„Stille aufheben“** beendet sie. |

> **WICHTIG**
>
> **„10 Min still“ schaltet den Summer stumm, nicht den Alarm.** Das Alarmfenster öffnet sich immer; nur der Ton wird für diese zehn Minuten zurückgehalten.

> **SIEHE AUCH**
>
> [Das Alarmfenster](alarm-window.md) · [Einstellungen „Produkte“](settings-products.md)
