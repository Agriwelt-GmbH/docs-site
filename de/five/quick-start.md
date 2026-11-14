---
title: Schnellstart — Vorbereitung und Losfahren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/quick-start.html
---

# Schnellstart — Vorbereitung und Losfahren

Die Reihenfolge der Vorbereitung der Maschine, was vor dem Feld zu prüfen ist, was beim Losfahren geschieht und worauf Sie während der Arbeit achten.

Ihre Maschine hat womöglich nicht jeden Schritt — überspringen Sie, was sie nicht hat. Das Hauptmenü öffnet sich mit einem **Zweifingertippen** auf den Startbildschirm; das Kontextmenü eines Geräts mit **Berühren und Halten** des Geräts ([Bedienung im Überblick](interface-basics.md)).

## Vor dem Feld {#before-the-field}

::: steps
1. **Geschwindigkeitssensor kalibrieren.** Fläche, Mengen und Abweichungen werden alle aus der Geschwindigkeit berechnet; eine falsche Geschwindigkeit verfälscht jede andere Zahl. Berühren und halten Sie im Stand das Geschwindigkeitsfeld und wählen Sie **„Speed calibration“** (Geschwindigkeitskalibrierung) — auf der Fahrerebene. Derselbe Eintrag steht unter **„Settings“** (Einstellungen) → **„Seeding machine parameters“** (Sämaschinenparameter), auf der Agronomenebene. Siehe [Geschwindigkeitssensor](speed-sensor.md).

2. **Dosierwalzen kalibrieren** — an Maschinen, die Produkte nach Masse ausbringen. Im Kontextmenü jedes Dosierers (**„Dispenser calibration(weight)“**, Dosiererkalibrierung (Masse), angezeigt, wenn seine Massenüberwachung eingeschaltet ist) oder jedes Dosierermotors, auf der Fahrerebene, im Stand. Siehe [Sensoreinstellungen](sensor-settings.md).

3. **Fahrgassenrhythmus prüfen,** wenn die Maschine Fahrgassen anlegt. Siehe [Fahrgassenrhythmus einstellen](tramline-rhythm.md).

4. **Sensorparameter prüfen** — die Liste steht unten.

5. **Jede Sektion prüfen:** Steht sie unter Überwachung, bringt sie Produkt aus? Siehe [Die vier Zustände einer Sektion](section-states.md#the-four-states-of-a-section).

6. **Den Schlag wählen** auf dem Statistikbildschirm: Zweifingertippen, **„Select field“** (Schlag wählen). Bei einem neuen Schlag löschen Sie zuerst dessen Statistik mit **„Zero statistics“** (Statistik nullen). Siehe [Statistikbildschirm](statistics-screen.md#the-menu-of-the-screen).

7. **Die Mengen einstellen** — Saatgut, Trockendünger, Flüssigdünger. Siehe [Sollmenge ändern](set-the-target-rate.md).

8. **Zugriffsebene prüfen.** Sie muss **„Operator“** (Fahrer) sein: **„Settings“** → **„User“** (Benutzer).
:::

Mehrere dieser Einstellungen erfordern die Agronomenebene — darunter **„Seeding machine parameters“**. Heben Sie die Ebene an ([Agronomenebene freischalten](enable-agronomist-level.md)), erledigen Sie, was sie braucht, fallen Sie auf die Fahrerebene zurück, erledigen Sie den Rest.

> **WICHTIG**
>
> **Schritt 8 ist der, der einen Arbeitstag ruiniert.** Ab der Agronomenebene zeigt das Panel **kein einziges Alarmfenster außer einem**: Ein verstopftes Saatrohr wird nicht gemeldet. Das eine, das dennoch durchkommt, ist **„User is Agronomist! Alarms will not be shown!“** (Benutzer ist Agronom! Alarme werden nicht angezeigt!) — es erscheint **einmal**, wenn auf dieser Ebene die Aussaat beginnt. Noch bestehende Störungen werden gemeldet, sobald Sie wieder auf der Fahrerebene sind. Prüfen Sie die Ebene vor jedem Start, nicht einmal im Jahr.

### Sensorparameter, die zu prüfen sind {#sensor-parameters-to-check}

- **Geschwindigkeitssensor** — „Min speed, km/h“ (Mindestgeschwindigkeit), „Max speed, km/h“ (Höchstgeschwindigkeit).
- **Dosierersensor** — „Period, s“ (Periode), je Sensor.
- **Gebläsesensor** — „Minimum, rpm“, „Maximum, rpm“, je Sensor.
- **Drucksensor** — „Minimum, Pa“, „Maximum, Pa“, je Sensor.
- **Flüssigdüngerpumpe** — „Pulses per liter“ (Impulse je Liter), „Max pressure, Bar“ (Höchstdruck).
- **Korn- und Trockendüngersensoren** — „Fraction“ (Anteil), „Correction“ (Korrektur), „Recalculation,m“ oder „Recalculation,sec“ (Neuberechnung); im Modus „Precise“ oder „Hybrid“ außerdem „Rate error,%“ (Mengenfehler).
- **Elektromotoren, Modus „Precise“** — „Holes in disk“ (Löcher in der Scheibe).
- **Elektromotoren, Dosierung nach Masse** — je Motor „Weight, gr“ (Masse) und „Rotations“ (Umdrehungen). Die Massenkalibrierung füllt beide aus.

Einzelheiten: [Sensoreinstellungen](sensor-settings.md).

## Losfahren {#moving-off}

::: steps
1. Bringen Sie das Gerät in die **Arbeitsstellung**.

2. **Einzelkornsägeräte mit Dosierermotoren:** Scheiben füllen — Hauptmenü, **„Fill the disks with seeds“**. Ohne das sind die ersten Meter jeder Reihe leer. Siehe [Scheiben füllen](fill-the-disks.md).

3. **Drillmaschinen:** Nichts zu starten. Die Dosiermotoren beginnen von selbst zu drehen, sobald die Überwachung der Produktausbringung startet — in dem Moment, in dem Sie losfahren.

4. Fahren Sie.
:::

> **WARNUNG**
>
> **Das Füllen der Scheiben und das Starten der Motoren setzen Maschinenteile in Bewegung, während die Maschine steht.** Achten Sie darauf, dass sich niemand in der Nähe der Dosiereinheiten, der Dosierwellen oder des Gebläses aufhält.

**Wann die Überwachung startet.** Die Handsperre muss **ausgeschaltet** sein ([Ausbringung von Hand sperren](lock-application-by-hand.md)). Ist ein Arbeitsstellungssensor angebaut und steht er unter Überwachung, beginnt die Überwachung, sobald Sie mit abgesenktem Gerät fahren; ohne einen solchen Sensor, sobald Sie fahren. Alarme beginnen nach der Verzögerung, die unter **„Settings“** → **„Alarm delay“** (Alarmverzögerung) eingestellt ist, 2 bis 20 Sekunden.

| **Ton** | **Was er bedeutet** |
| --- | --- |
| Ein kurzer Piepton | Das Panel sieht die Maschine säen. Ab jetzt werden die Sektionen überwacht. |
| Drei kurze Pieptöne | Die Aussaat hat aufgehört — am Vorgewende, oder die Säulen sind unter die Überwachungslinie gesunken. |

An Drillmaschinen im Modus „Flow“ oder „Hybrid“ lassen Sie das Panel die Alarmschwelle selbst finden: [Alarmschwelle automatisch einstellen](set-the-alarm-level.md).

## Während der Arbeit {#while-working}

Achten Sie auf vier Dinge: die **Geschwindigkeit** gegenüber dem Traktor, **Gebläse und Druck** innerhalb ihres Bereichs, die **tatsächliche Menge** gegenüber der Sollmenge und darauf, dass kein Sensor alarmiert. Der [Tabellenbildschirm](table-screen.md) zeigt, wie jede Sektion gerade arbeitet; der [Statistikbildschirm](statistics-screen.md), wie der ganze Schlag verlaufen ist.

Fällt der Geschwindigkeitssensor aus, siehe [Ohne Geschwindigkeitssensor arbeiten](work-without-speed-sensor.md).
