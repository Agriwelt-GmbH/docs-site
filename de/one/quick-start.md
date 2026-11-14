---
title: Kurzanleitung — vorbereiten und losfahren
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/quick-start.html
---

# Kurzanleitung — vorbereiten und losfahren

Die Reihenfolge, in der Sie die Maschine bereitmachen, was Sie vor dem Feld prüfen, was beim Losfahren geschieht und was Sie während der Arbeit beobachten.

Ihre Maschine hat möglicherweise nicht jeden Schritt — überspringen Sie, was sie nicht hat.

## Vor dem Feld {#before-the-field}

::: steps
1. **Geschwindigkeitssensor kalibrieren.** Fläche, Mengen und Abweichungen werden alle aus der Geschwindigkeit berechnet; eine falsche Geschwindigkeit macht jede andere Zahl falsch. **„Einstellungen“** → **„Sämaschinen-Parameter“** → **„Geschwindigkeitskalibrierung“**, auf der Ebene **„Agronom“**. Siehe [Geschwindigkeitssensor kalibrieren](calibrate-speed.md).

2. **Dosierwalzen kalibrieren** — an Drillmaschinen und an Einzelkornsägeräten, deren Düngerdosierer von einem Elektromotor angetrieben wird. Aus dem Kontextmenü jedes Dosierers oder Motors, auf der Ebene **„Fahrer“**, im Stand. Siehe [Massekalibrierung eines Motors](calibrate-motor-weight.md).

3. **Fahrgassenrhythmus prüfen**, wenn die Maschine Fahrgassen anlegt. Siehe [Fahrgassenrhythmus einstellen](tramline-rhythm.md).

4. **Sensorparameter prüfen** — die Liste steht unten.

5. **Jede Sektion prüfen**: Ist sie in der Überwachung, bringt sie Produkt aus? Siehe [Vier Zustände einer Sektion](section-states.md#the-four-states-of-a-section).

6. **Das Feld wählen** auf dem Bildschirm Statistik. Löschen Sie bei einem neuen Feld zuerst seine Statistik. Siehe [Bildschirm Statistik](statistics-screen.md#the-menu-of-the-screen).

7. **Die Mengen einstellen** — Aussaat, Trockendünger, Flüssigdünger. Siehe [Sollmenge ändern](set-the-target-rate.md).

8. **Die Zugriffsebene prüfen.** Sie muss **„Fahrer“** sein.
:::

Die Schritte 1 und 2 liegen nicht auf derselben Ebene. **„Sämaschinen-Parameter“** und die Geschwindigkeitskalibrierung darunter gehören zur Ebene **„Agronom“**; die Massekalibrierungen in den Kontextmenüs zur Ebene **„Fahrer“**. Üblicher Ablauf: die Ebene auf „Agronom“ anheben ([Ebene „Agronom“ freischalten](enable-agronomist-level.md)), Schritt 1 ausführen, auf „Fahrer“ zurückgehen, den Rest erledigen.

> **WICHTIG**
>
> **Schritt 8 ist der, der einen Arbeitstag ruiniert.** Ab der Ebene „Agronom“ unterdrückt das Panel **jeden Alarm bis auf einen**: Ein verstopftes Saatrohr wird nicht gemeldet. Der eine, der noch durchkommt, ist **„Benutzer ist Agronom! Alarme nicht sichtbar!“** — **einmal** ausgelöst, wenn auf dieser Ebene die Aussaat beginnt. Die Rückkehr auf „Fahrer“ löst die unterdrückten Alarme wieder aus. Prüfen Sie die Ebene vor jedem Start, nicht einmal pro Saison.

### Zu prüfende Sensorparameter {#sensor-parameters-to-check}

- **Geschwindigkeitssensor** — „Min. Geschwindigkeit, km/h“, „Max. Geschwindigkeit, km/h“.
- **Dosierersensor** — „Periode,s“, für jeden Sensor.
- **Gebläsesensor** — „Minimum, U/min“, „Maximum, U/min“, für jeden Sensor.
- **Drucksensor** — „Minimum,Pa“, „Maximum,Pa“, für jeden Sensor.
- **Flüssigdüngerpumpe** — „Impulse je Liter“, „Maximaler Druck, Bar“.
- **Korn- und Trockendüngersensoren** — „Fraktion“, „Korrektur“, „Neuberechnung, m“ oder „Neuberechnung, Sek“; im Modus „Einzelkorn“ oder „Hybrid“ außerdem „Mengenfehler, %“.
- **Flüssigdüngersensoren** — „Mengenfehler, %“ und, ohne Pumpe im Profil, „Impulse je Liter“. Durchflussmesser von Wilger: **rot 8900**, **grün 15500**, **blau 3400** Impulse je Liter.
- **Elektromotoren, Modus „Einzelkorn“** — „Löcher in Scheibe“, für einen beliebigen Motor der Gruppe.
- **Elektromotoren, Dosierung nach Masse** — für jeden Motor „Masse, g“ geteilt durch „Umdrehungen“ gegen die Spezifikation der Walze. Die Massekalibrierung füllt beide aus.

Die meisten Parameter werden **je Sensor** eingestellt. In den Sensorgruppen für Saatgut, Trockendünger und Flüssigdünger und in beiden Motorgruppen gelten die meisten Parameter für die ganze Gruppe — außer Sensorüberwachung und Produktausbringung, die individuell bleiben. Einzelheiten: [Sensoreinstellungen](sensor-settings.md).

## Losfahren {#moving-off}

::: steps
1. Bringen Sie das Gerät in die **Arbeitsstellung**.

2. **Einzelkornsägeräte mit Dosiermotoren:** Füllen Sie die Scheiben — Hauptmenü, **„Scheiben mit Korn füllen“**. Ohne das sind die ersten Meter jeder Reihe leer. Siehe [Scheiben füllen](fill-the-disks.md).

3. **Drillmaschinen:** Es ist nichts zu starten. Die Dosiermotoren beginnen von selbst zu drehen, sobald die Überwachung der Produktausbringung startet — im Moment des Losfahrens. Fahren Sie trotzdem zügig los: Die Rotorzellen müssen sich füllen, bevor die ersten Meter mit der Sollmenge gesät werden.

4. Fahren Sie.
:::

> **WARNUNG**
>
> **Das Füllen der Scheiben und das Starten der Motoren drehen Maschinenteile, während die Maschine steht.** Vergewissern Sie sich, dass sich niemand in der Nähe der Dosiereinheiten, der Dosierwellen oder des Gebläses aufhält.

**Wann die Überwachung startet.** Die Handsperre muss **ausgeschaltet** sein ([Ausbringung von Hand sperren](lock-application-by-hand.md)). Ist ein Arbeitsstellungssensor angebaut und eingeschaltet, beginnt die Überwachung, sobald Sie mit abgesenktem Gerät fahren; ohne einen solchen Sensor, sobald Sie fahren. Die Alarme beginnen einige Sekunden später — die Verzögerung ist **„Einstellungen“** → **„Alarmverzögerung“**, 2 bis 20 Sekunden.

| **Ton** | **Bedeutung** |
| --- | --- |
| Ein kurzer Signalton | Das Panel sieht die Maschine säen. Von jetzt an werden die Sektionen überwacht. |
| Drei kurze Signaltöne | Die Aussaat hat aufgehört — am Vorgewende oder weil die Säulen unter die Überwachungslinie gesunken sind. |

Lassen Sie an Drillmaschinen im Modus „Durchfluss“ oder „Hybrid“ das Panel die Alarmschwelle selbst finden: [Alarmschwelle automatisch einstellen](set-the-alarm-level.md).

## Während der Arbeit {#while-working}

Beobachten Sie vier Dinge: die **Geschwindigkeit** gegen den Traktor, **Gebläse und Druck** innerhalb ihres Bereichs, die **tatsächliche Menge** gegen den Sollwert und dass kein Sensor Alarm gibt. Der [Bildschirm Tabelle](table-screen.md) zeigt, wie jede Sektion gerade arbeitet; der [Bildschirm Statistik](statistics-screen.md), wie das ganze Feld gelaufen ist.

Fällt der Geschwindigkeitssensor aus, siehe [Arbeiten ohne Geschwindigkeitssensor](work-without-speed-sensor.md).
