---
title: System nach der Installation prüfen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/check-after-installation.html
---

# System nach der Installation prüfen

Eine Prüfung Schritt für Schritt, einmal nach der Montage — jedes Gerät antwortet, jeder Kornsensor sitzt in seiner eigenen Reihe, Zählung, Arbeitsstellung, Geschwindigkeit und die übrigen Sensoren arbeiten — und was Sie festhalten.

Führen Sie diese Prüfung **einmal durch, nachdem das System montiert ist und bevor Sie auf den ersten Schlag fahren**. Jeder Schritt sagt, was zu tun ist, was der Bildschirm zeigen muss und wohin Sie gehen, wenn er es nicht zeigt. Ihre Maschine hat womöglich nicht jedes Gerät — überspringen Sie die Schritte für das, was sie nicht hat.

Beginnen Sie auf der Ebene **„Operator“** (Fahrer): Auf ihr werden Alarmfenster angezeigt ([Zugriffsebenen](access-levels.md)). Das Panel startet nach jedem Einschalten auf dieser Ebene.

::: steps
1. **Prüfen Sie, ob jedes Gerät antwortet.** Schalten Sie das Panel ein und warten Sie auf den Startbildschirm ([Einschalten](switching-on.md)).

   - Das Profil muss zur Maschine passen: Die Zahl der Kornsensoren entspricht der Zahl der Reihen, und die übrigen Geräte sind die, die die Maschine hat ([Das Profil](profile.md)). Die Maschineneinstellungen stehen unter [Sämaschinen-Parameter](seeding-machine-parameters.md); die zu prüfenden Sensorparameter sind im [Schnellstart](quick-start.md) aufgeführt.
   - Kein Alarmfenster **„Connection lost“** (Verbindung verloren), keine rote Anzeige mit einem **×**, keine weiße Anzeige mit **!**, keine rote Anzeige mit **?** ([Anzeigen](indicators.md)).
   - Öffnen Sie den Statusbildschirm eines Geräts: berühren und halten, dann **„Information“** (Information). Wischen Sie nach links oder rechts durch jedes Gerät der Liste. **„Link:“** (Verbindung:) muss bei jedem **„Normal“** (Normal) lauten ([Der Sensor-Statusbildschirm](sensor-status-screen.md)).
   - Ein Korn- oder Düngersensor muss **Status:** **Working** zeigen.

   **Wenn nicht:** [Verbindung verloren, falsches Gerät](alarms-any-device.md) · [Sensor verstopft oder defekt](alarms-sensor-state.md) · ein Gerät außerhalb der Überwachung: [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md).

2. **Prüfen Sie, ob jeder Kornsensor in seiner eigenen Reihe sitzt.** Die Maschine steht. Öffnen Sie den Tabellenbildschirm mit einem **langen Wischen nach links** auf dem Startbildschirm. Tippen Sie mit **zwei Fingern** darauf und berühren Sie **„Yes“** (Ja) bei der Frage **„Zero readings?“** (Messwerte nullen?) ([Messwerte nullen](zero-the-readings.md)). Lassen Sie dann einige Körner von Hand durch das Saatrohr von Reihe 1 fallen, eines nach dem anderen. Statt Körnern können Sie auch einen beliebigen kleinen Gegenstand, zum Beispiel einen langen Kabelbinder, mehrmals durch das Saatrohr führen – jeder Durchgang wird gezählt. Tun Sie dasselbe bei Reihe 2, Reihe 3 und so weiter bis zur letzten Reihe.

   - Nur die Zeile der Reihe, in die Sie die Körner fallen lassen, reagiert. Im Modus „Precise“ schalten Sie mit einem **langen** Zweifingerwischen auf die Tabelle der Kornzähler um — der Zählerstand dieser Reihe wächst ([Der Tabellenbildschirm](table-screen.md)). Lesen Sie den Zählerstand auf dieser Tabelle ab, die die Anzahl der Körner zeigt, nicht auf der Ansicht mit Körnern je Meter: Diese zeigt nur Werte, solange sich die Maschine bewegt. In den anderen Modi beobachten Sie **sds/s** dieser Reihe.
   - Die Zeile einer **anderen** Reihe reagiert: Dieser Sensor ist in der falschen Reihenfolge angeschlossen. Korrigieren Sie die Reihenfolge der Anschlüsse und wiederholen Sie den Test.
   - Keine Zeile reagiert: Siehe Schritt 1 für diesen Sensor.

   **Wenn nicht:** [Verbindung verloren, falsches Gerät](alarms-any-device.md) · [Sensor verstopft oder defekt](alarms-sensor-state.md).

3. **Prüfen Sie die Zählung.** Nullen Sie die Messwerte erneut, wie in Schritt 2. Lassen Sie eine bekannte Anzahl Körner, zum Beispiel 20, einzeln durch das Saatrohr einer Reihe fallen. Lesen Sie den Zählerstand dieser Reihe in der Tabelle der Kornzähler ab (Modus „Precise“), der Tabelle, die die Anzahl der Körner zeigt. Bei einer Einzelkornsämaschine stimmt er bis auf ein Korn mit der Zahl überein, die Sie fallen ließen, sofern die **„Fraction“** (Fraktion) der Kornsensoren auf die Größe des Korns eingestellt ist. Notieren Sie beide Zahlen. Wiederholen Sie dies bei einer weiteren Reihe.
   Ist der Wert deutlich höher – bis zum Doppelten der Zahl –, ist die Fraktion für dieses Korn zu klein eingestellt: Ein großes Korn, zum Beispiel Mais, wird dann als zwei gezählt. Stellen Sie die Fraktion nach der Tabelle in [Kornsensoren und Trockendüngersensoren](seed-and-fertilizer-sensors.md) ein.

   **Wenn nicht:** Notieren Sie beide Werte und lesen Sie [Bevor Sie den Support kontaktieren](before-you-contact-us.md).

4. **Prüfen Sie den Arbeitsstellungssensor.** Senken Sie die Maschine in die Arbeitsstellung ab, heben Sie sie dann in die Transportstellung an.

   - Die Anzeige der Gerätestellung ist **grün**, wenn die Maschine abgesenkt ist, **gelb** und blinkend, wenn sie angehoben ist ([Anzeigen](indicators.md#implement-position)).
   - Auf dem Statusbildschirm des Sensors folgen **„Position: Working“** (Position: Arbeit) und **„Position: Transporting“** (Position: Transport) der Maschine.
   - Sind beide vertauscht, prüfen Sie die Einstellung **„Transporting position signal“** (Signal Transportstellung) ([Behälter-, Arbeitsstellungs- und Motorsensoren](hopper-position-engine-sensors.md)).

5. **Prüfen Sie die Geschwindigkeit.** Kalibrieren Sie zuerst den Geschwindigkeitssensor, falls noch nicht geschehen ([Geschwindigkeitssensor kalibrieren](calibrate-speed.md)). Fahren Sie dann.

   - Das Geschwindigkeitsfeld zeigt eine weiße Zahl. Sie stimmt mit der Geschwindigkeit des Traktors überein.
   - Es zeigt nicht **XX.X**, **!!.!** oder **????**.
   - Auf dem Statusbildschirm des Geschwindigkeitssensors ändert sich die Frequenz **F=** während der Fahrt.

   **Wenn nicht:** [Alarme des Geschwindigkeitssensors](alarms-speed-sensor.md) · [Geschwindigkeitssensor](speed-sensor.md) · [Ohne Geschwindigkeitssensor arbeiten](work-without-speed-sensor.md).

6. **Prüfen Sie die übrigen Sensoren der Maschine.** Je eine kurze Prüfung:

   - **Behälter.** Das Behältersymbol ist voll und grün, wenn Produkt im Behälter ist. [Behälter leer](alarms-hopper.md).
   - **Gebläse.** Starten Sie das Gebläse. Das Gebläsesymbol ist grün und zeigt die Drehzahl in rpm. [Gebläse oder Dosierwelle: Drehzahlalarme](alarms-rotation.md).
   - **Luftdruck.** Das Drucksymbol ist grün und zeigt den Druck in kPa, solange das Gebläse läuft. [Luftdruck](alarms-pressure.md).
   - **Dosierwelle.** Solange sich die Welle dreht, dreht sich das Symbol der Dosiereinheit. [Gebläse oder Dosierwelle: Drehzahlalarme](alarms-rotation.md).
   - **Spuranzeiger.** Senken und heben Sie die Spuranzeiger. Das Spuranzeigersymbol zeigt den Arm oder die Arme unten oder oben ([Anzeigen](indicators.md#markers)).
   - **Dosierermotoren und Fahrgassen-Aktuatoren.** Öffnen Sie den Motorenbildschirm. Jede Kachel zeigt ihren Wert; keine hat ein rotes **×** ([Der Motorenbildschirm](motors-screen.md)).
   - **Motorsensoren.** Die Motoranzeigen, die die Maschine hat, sind grün; der Zündschlüssel ist bei eingeschalteter Zündung grün ([Anzeigen](indicators.md#engine-sensors)).

7. **Halten Sie das Ergebnis fest.**

   - Mit zwei Fingern auf den Startbildschirm tippen, dann **„About“** (Über). Notieren Sie die Firmware-Version und die Seriennummer. Schließen Sie das Fenster mit **„Close“** (Schließen).
   - Notieren Sie das Datum und die Maschine.
   - Fotografieren Sie die Statusbildschirme der Sensoren — mindestens die Bildschirme, die ein Gerät mit seiner Verbindung und seinem Zustand zeigen.
:::

Bewahren Sie die Notizen und die Fotos auf. Wenn Sie später Hilfe brauchen, fragt der Support zuerst danach ([Bevor Sie den Support kontaktieren](before-you-contact-us.md)).

## Wenn ein Schritt fehlschlägt {#if-a-step-fails}

| **Schritt** | **Weiter mit** |
| --- | --- |
| 1. Ein Gerät antwortet nicht | [Verbindung verloren, falsches Gerät](alarms-any-device.md) |
| 1. Ein Kornsensor meldet eine Störung | [Sensor verstopft oder defekt](alarms-sensor-state.md) |
| 1. Ein Gerät ist außerhalb der Überwachung | [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md) |
| 1. Das Profil passt nicht zur Maschine | [Das Profil](profile.md) |
| 2, 3. Eine Reihe reagiert nicht, reagiert in einer anderen Reihe, oder die Zählung stimmt nicht | [Verbindung verloren, falsches Gerät](alarms-any-device.md), dann [Bevor Sie den Support kontaktieren](before-you-contact-us.md) |
| 4. Die Stellung folgt der Maschine nicht | [Behälter-, Arbeitsstellungs- und Motorsensoren](hopper-position-engine-sensors.md) |
| 5. Keine oder falsche Geschwindigkeit | [Alarme des Geschwindigkeitssensors](alarms-speed-sensor.md), [Geschwindigkeitssensor kalibrieren](calibrate-speed.md), [Ohne Geschwindigkeitssensor arbeiten](work-without-speed-sensor.md) |
| 6. Behälter | [Behälter leer](alarms-hopper.md) |
| 6. Gebläse, Dosierwelle | [Gebläse oder Dosierwelle: Drehzahlalarme](alarms-rotation.md) |
| 6. Luftdruck | [Luftdruck](alarms-pressure.md) |
| Jede andere Störung | [So arbeiten Alarme](how-alarms-work.md) |
