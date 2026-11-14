---
title: 1xx · Störungen des Reihensensors
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/codes-1-row-sensor.html
---

# 1xx · Störungen des Reihensensors

Codes 101–106: Ein Korn- oder Düngersensor einer Reihe ist stumm, blockiert, geblendet, defekt oder gar kein Kornsensor.

Die Codes 1xx betreffen den Sensor einer Reihe selbst: Der Sensor antwortet nicht, oder er meldet, dass er nicht zählen kann. Der Ort ist die Reihe: Sagen Sie dem Service zum Beispiel *102 · Reihe 7*. Der Fenstertitel ist bei einer Gerätestörung orange und bei einem Alarm rot.

Wie ein Code zu lesen ist, die vier Klassen und wie jede in der App aussieht: [So funktionieren Servicecodes](codes.md).

## 101 · Reihensensor antwortet nicht {#c101}

**Klasse:** [Alarm](codes.md#class-alarm) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit **„Verbindung weg“**, **„Kornsensor:“** oder **„Düngersensor:“** und den Reihennummern. Der Balken der Reihe zeigt ein rotes ✕ auf grauem Grund. Verlieren mehrere Reihen die Verbindung, vereinen sich ihre Nummern in einem Fenster.

**Was zu tun ist:**

1. Prüfen Sie Stecker und Kabel des Sensors dieser Reihe.
2. Sind mehrere benachbarte Reihen stumm, suchen Sie vor der ersten von ihnen nach einem gebrochenen Hauptkabel oder einem Stromausfall.
3. Ist nur diese Reihe stumm und ihr Kabel in Ordnung, ersetzen Sie den Sensor: [Die Sensoren nummerieren](sensor-numbering.md).

## 102 · Reihensensor verstopft {#c102}

**Klasse:** [Gerätestörung](codes.md#class-fault) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit orangem Titel, **„Verstopft“** und der Reihennummer. Der Balken der Reihe zeigt weiterhin ihren Füllstand.

**Was zu tun ist:**

1. Halten Sie an.
2. Reinigen Sie das Saatrohr und das Fenster des Sensors dieser Reihe.

## 103 · Reihensensor geblendet {#c103}

**Klasse:** [Gerätestörung](codes.md#class-fault) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit orangem Titel, **„Fremdlicht“** und der Reihennummer.

**Was zu tun ist:**

1. Schirmen Sie den Sensor gegen direktes Licht ab: Prüfen Sie seine Abdeckung und die Lage des Saatrohrs.
2. Kommt es auch im Schatten wieder, nennen Sie dem Service den Code und die Reihennummer.

## 104 · Reihensensor defekt {#c104}

**Klasse:** [Gerätestörung](codes.md#class-fault) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit orangem Titel, **„Defekt“** und der Reihennummer.

**Was zu tun ist:**

1. Ziehen Sie den Sensor ab und stecken Sie ihn wieder an.
2. Bleibt die Störung, ersetzen Sie den Sensor (Reihenmenü, **„Sensor ersetzen“**). Bis dahin können Sie die Reihe aus der Überwachung nehmen: **„Überwachung aus“** im Reihenmenü.

## 105 · Reihensensor meldet eine andere Störung {#c105}

**Klasse:** [Gerätestörung](codes.md#class-fault) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit orangem Titel, **„Anderer Defekt“** und der Reihennummer.

**Was zu tun ist:**

1. Nennen Sie dem Service den Code und die Reihennummer.
2. Sie können die Reihe aus der Überwachung nehmen (**„Überwachung aus“** im Reihenmenü) und weitersäen.

## 106 · Kein Kornsensor an dieser Reihe {#c106}

**Klasse:** [Gerätestörung](codes.md#class-fault) · **Ort:** die Reihe.

**Was Sie sehen.** Das Alarmfenster mit orangem Titel, **„Falscher Gerätetyp!“** und der Reihennummer. Der Balken blinkt hellrot mit einem *?*. Dieser Alarm kommt sofort, ohne die Alarmverzögerung.

**Was zu tun ist:**

1. Prüfen Sie, dass für diese Reihe ein Kornsensor und kein anderes Gerät angeschlossen ist.
2. Korrigieren Sie die Nummerierung: [Die Sensoren nummerieren](sensor-numbering.md).
