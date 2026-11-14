---
title: Anzeigen des Startbildschirms
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/indicators.html
---

# Anzeigen des Startbildschirms

Jede Anzeige des Startbildschirms mit allen ihren Zuständen — was Sie sehen, was es bedeutet, was zu tun ist.

Wo jede Anzeige sitzt, zeigt [Der Startbildschirm](home-screen.md). Diese Seite sagt, was jede bedeutet, Zustand für Zustand. Berühren und halten Sie eine beliebige Anzeige, um das Kontextmenü ihres Geräts zu öffnen.

## So lesen Sie jede Anzeige {#how-to-read-any-indicator}

![](figures/icons/fan.png){height=40px} ![](figures/icons/fan-red.png){height=40px} ![](figures/icons/no-connection.png){height=40px} ![](figures/icons/not-controlled.png){height=40px}

Fast jede Anzeige folgt derselben Regel. Lernen Sie sie einmal, und Sie können eine Anzeige lesen, die Sie nie gesehen haben.

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| ![](figures/icons/fan.png){height=32px} **Grünes** Symbol | Normal. Das Gerät antwortet und sein Wert liegt innerhalb der Grenzen. |
| ![](figures/icons/fan-red.png){height=32px} **Rotes** Symbol, blinkend | Alarm. Das Gerät antwortet, aber der Wert hat die Grenzen verlassen. Nach der Alarmverzögerung folgt ein Alarmfenster. |
| ![](figures/icons/no-connection.png){height=32px} Symbol im Wechsel mit einem **roten ×** | Keine Antwort vom Gerät. Der Wert wird als **XXXX** angezeigt. |
| ![](figures/icons/not-controlled.png){height=32px} Symbol im Wechsel mit einem **weißen [!]** | Das Gerät steht im Profil, aber seine Überwachung ist ausgeschaltet. Der Wert wird als **!!!!** angezeigt. |
| Symbol im Wechsel mit einem roten **?** | Ein Gerät falscher Art antwortet an seiner Stelle. Der Wert wird als **????** angezeigt. |
| ![](figures/icons/work-blocked.png){height=32px} **Gelbes** Symbol | Keine Störung. Ein Zustand, den Sie gewählt haben oder der Ihre Aufmerksamkeit braucht: Gerät angehoben, Spuranzeiger oben, Zündung aus, Ausbringung von Hand gesperrt. |

> **WICHTIG**
>
> **Eine ausgeschaltete Anzeige ist nicht still — sie ist blind.** Weiß mit **!!!!** bedeutet, dass das Panel dieses Gerät gar nicht überwacht. Es wird nichts darüber gemeldet, wie falsch es auch läuft.

## Geschwindigkeit {#speed}

Die Fahrgeschwindigkeit in km/h, groß, oben links. Meldungen zur Geschwindigkeit ersetzen die Zahl und blinken etwa einmal je Sekunde, damit die Zahl lesbar bleibt.

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| Eine weiße Zahl, z. B. **10.0** | Normal. |
| **„SLOWER“** (langsamer) auf Rot | Sie fahren schneller als der am Geschwindigkeitssensor eingestellte Höchstwert. Fahren Sie langsamer. |
| **„FASTER“** (schneller) auf Rot | Sie fahren langsamer als der Mindestwert. Fahren Sie schneller. |
| **XX.X** in Rot, blinkend | Keine Antwort vom Gerät, das den Geschwindigkeitssensor trägt. |
| **????** in Rot | Ein Gerät falscher Art antwortet anstelle des Geschwindigkeitssensors. |
| **!!.!** in Weiß | Der Geschwindigkeitssensor steht nicht unter Überwachung. |
| Eine gelbe Zahl im Wechsel mit **„IMITATION“** (Simulation) | Die Geschwindigkeit wird nach der Einstellung des Geschwindigkeitssensors simuliert, nicht gemessen. Siehe [Ohne Geschwindigkeitssensor arbeiten](work-without-speed-sensor.md). |
| **INCREASE IMITATION** / **DECREASE IMITATION** | Die simulierte Geschwindigkeit selbst liegt außerhalb des zulässigen Bereichs. Ändern Sie die Einstellung, nicht die Fahrgeschwindigkeit. |
| **„Sensor“** (Sensor) mit einer Zahl | Einer von zwei Geschwindigkeitssensoren ist ausgefallen. |
| **„Settings“** (Einstellungen) | Mindest- und Höchstgeschwindigkeit widersprechen sich. |

**„SLOWER“** und **„FASTER“** sind keine Alarmfenster. Sie bleiben im Geschwindigkeitsfeld, solange die Geschwindigkeit falsch ist, denn Sie müssen sie beim Korrigieren sehen. Geschwindigkeit vom eingebauten Empfänger: [GPS](gps.md).

## Uhr {#clock}

Das Uhrfeld oben rechts teilen sich mehrere Meldungen.

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| Die Uhrzeit in Weiß | Normal. |
| **BAT** in Rot, etwa eine Sekunde in jeder vierten | Die Uhrenbatterie ist schwach. Die Uhr läuft weiter; zwischen den Blitzen wird die Zeit in Rot angezeigt. Lassen Sie die Batterie ersetzen. |
| **XX:XX** in Rot, blinkend | Der Uhrenchip antwortet nicht. Alles, was das Panel aufzeichnet, trägt ein falsches Datum und eine falsche Uhrzeit. |
| **IMITAT** in Gelb | Der Simulationsmodus des Servicemenüs ist eingeschaltet. |
| Blaue Stunden:Minuten, dann **TRIAL**, dann leer | Eine Testzeit läuft; die blaue Zahl ist die verbleibende Zeit. |

Die Uhr wird unter **„Settings“** (Einstellungen) → **„Change Date&Time“** (Datum und Uhrzeit ändern) gestellt: Tippen Sie jede Zeile an und wischen Sie sie auf ihren Wert, dann tippen Sie zweimal auf **„Set“** (Setzen) — einmal zum Wählen, einmal zum Speichern der Zeit. Verlassen ohne **„Set“** behält die alte Zeit.

## Speicherkarte {#memory-card}

![](figures/icons/microsd.png){height=40px}

Ein Kartensymbol neben der Uhr oder in der rechten Spalte. Angezeigt, solange eine microSD-Karte im Schacht steckt und beschreibbar ist.

## Behälter {#hopper}

![](figures/icons/bunker-full.png){height=40px} ![](figures/icons/bunker-empty.png){height=40px}

Ein **voller grüner** Behälter ist normal. Ein **leerer roter**, blinkend, bedeutet, dass der Füllstand unter den Sensor gefallen ist: nachfüllen.

## Dosiereinheit {#metering-unit}

![](figures/icons/dosator.png){height=40px}

Die Drehung der Dosierwelle. Solange sich die Welle dreht, **dreht sich** das Symbol — der schnellste Weg zu sehen, dass die Dosiereinheit wirklich läuft. Rot bedeutet keine Drehung oder nicht die geforderte Drehzahl.

## Gebläse {#fan}

![](figures/icons/fan.png){height=40px} ![](figures/icons/fan-red.png){height=40px}

Die Gebläsedrehzahl in Umdrehungen je Minute (**rpm**). Grün ist normal; Rot — über dem Höchstwert oder unter dem Mindestwert.

## Druck {#pressure}

![](figures/icons/pressure.png){height=40px}

Der Unterdruck oder der Überdruck der Luft im Verteilsystem, in **kPa**. Grün ist normal; Rot — außerhalb des zulässigen Bereichs.

## Motorsensoren {#engine-sensors}

![](figures/icons/ignition.png){height=40px} ![](figures/icons/oil.png){height=40px} ![](figures/icons/battery.png){height=40px} ![](figures/icons/fuel.png){height=40px} ![](figures/icons/airfilter.png){height=40px}

Die Sensoren des Motors, der das Gebläse antreibt.

| **Anzeige** | **Grün** | **Rot oder gelb** |
| --- | --- | --- |
| Öldruck | Normal | **Rot:** Der Öldruck ist unter den zulässigen Wert gefallen. |
| Batterieladung | Normal | **Rot:** Die Batterie wird nicht geladen. |
| Zündung | **Grüner Schlüssel:** Zündung an | **Gelber Schlüssel:** Zündung aus. Keine Störung und nie ein Alarmfenster. |
| Kraftstoffstand | Normal | **Rot:** Wenig Kraftstoff im Tank. |
| Luftfilter | Normal | **Rot:** Der Luftfilter ist verstopft; reinigen oder ersetzen. |

> **WICHTIG**
>
> **Öldruck und Batterieladung werden nur bei eingeschalteter Zündung überwacht.** Kraftstoffstand und Luftfilter werden immer überwacht.

## Fläche {#area}

![](figures/icons/area.png){height=40px}

Die auf dem [aktiven Schlag](statistics-screen.md) bearbeitete Fläche, in Hektar.

## Aussaatstärke {#population}

![](figures/icons/seeds.png){height=40px}

Im Modus „Precise“: die tatsächliche Aussaatmenge in **tausend Körnern je Hektar**.

## Produktmenge nach Masse {#product-rate-by-weight}

![](figures/icons/product.png){height=40px}

Angezeigt, wenn Produkte nach Masse ausgebracht werden; eine Anzeige je Produkt, mit ihrer Nummer. Sie zeigt **eine Zahl**, in kg/ha.

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| Symbol **grün**, Zahl weiß | Normal. Solange die tatsächliche Menge innerhalb der zulässigen Abweichung bleibt, ist die angezeigte Zahl die Sollmenge. |
| Symbol **rot**, blinkend | Die tatsächliche Menge liegt außerhalb der zulässigen Abweichung von der Sollmenge. |
| Feld aufgehellt | Sie haben gerade den Sollwert eingestellt. |

Um den Sollwert einzustellen, berühren und halten Sie die Anzeige. Der Zahlenblock öffnet sich mit der Überschrift **Product** und ihrer Nummer; geben Sie die Menge ein, 10.0 bis 500.0 kg/ha, und berühren Sie **„OK“**.

## Dosierung nach Masse nicht möglich {#dosing-by-weight-is-not-possible}

![](figures/icons/product.png){height=40px}

Ein **rotes blinkendes Produktsymbol** in der rechten Spalte. Das Panel hat errechnet, dass sich die Sollmenge bei keiner Fahrgeschwindigkeit halten lässt: Die niedrigste Geschwindigkeit, bei der die Dosierwalzen die Menge liefern können, liegt bereits auf oder über der höchsten.

**Was zu tun ist.** Prüfen Sie zuerst die Sollmengen — ein Produkt, das zu viel verlangt, schließt das Fenster für alle. Prüfen Sie dann die Dosierwalzen. Die vom Panel berechneten Geschwindigkeitsgrenzen stehen auf dem Bildschirm **„Information“** des Geschwindigkeitssensors.

## Spuranzeiger {#markers}

![](figures/icons/markers.png){height=40px}

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| **Grün**, beide Arme unten | Beide Spuranzeiger sind abgesenkt. |
| **Grün**, ein Arm unten | Nur dieser Spuranzeiger ist abgesenkt. |
| **Gelb**, beide Arme oben | Beide Spuranzeiger sind angehoben. An einer Maschine, die den Durchgang über die Spuranzeiger weiterschaltet, wechselt der Durchgang jetzt. |

Eine Maschine mit einem Spuranzeiger hat ein Symbol, das diesen Spuranzeiger unten oder oben zeigt.

## Gerätestellung {#implement-position}

![](figures/icons/work-allowed.png){height=40px} ![](figures/icons/work-blocked.png){height=40px}

**Grün** — abgesenkt, in Arbeit. **Gelb**, blinkend — angehoben, im Transport, bringt nicht aus.

## Fahrgassen-Durchgang {#tramline-bout}

![](figures/icons/tramline.png){height=40px}

Nur angezeigt, wenn die Fahrgasse eingeschaltet ist. Die große Zahl ist der aktuelle Durchgang, die kleine darüber die Anzahl der Durchgänge im Rhythmus.

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| Fahrgassensymbol **grau** | Der Durchgang wechselt am Ende jeder Fahrt von selbst. |
| Fahrgassensymbol **gelb** | Der Durchgang wechselt nicht von selbst: Die Maschine hat keinen Spuranzeiger- oder Arbeitsstellungssensor, der antwortet und unter Überwachung steht. |
| Ein gelbes Symbol blinkt anstelle des Symbols | Der Durchgang könnte von selbst wechseln, aber der automatische Wechsel ist ausgeschaltet. |

Wie der Durchgang gezählt wird: [Fahrgassenrhythmus einstellen](tramline-rhythm.md#how-the-bout-changes).

## Handsperre {#manual-lock}

![](figures/icons/hand.png){height=40px}

Eine **gelbe Hand**, blinkend, in der rechten Spalte: Die Produktausbringung ist von Hand gesperrt. Die Maschine bringt nichts aus, wie auch immer sie fährt. Nicht angezeigt, solange die Ausbringung erlaubt ist. Sie erscheint an Maschinen mit elektrischen Dosierermotoren oder einer Flüssigdüngerpumpe. Siehe [Ausbringung von Hand sperren](lock-application-by-hand.md).

## Aktuatorstörung {#actuator-failure}

![](figures/icons/actuator-fail.png){height=40px}

Ein Symbol für alle Elektromotoren und Fahrgassen-Aktuatoren zusammen, in der rechten Spalte. **Wird gar nicht angezeigt, solange alles in Ordnung ist.**

| **Was Sie sehen** | **Was es bedeutet** |
| --- | --- |
| **Rot**, blinkend | Mindestens ein Motor oder Aktuator ist im Alarmzustand. |
| Im Wechsel mit **weißem [!]** | Die Überwachung mindestens eines Aktuators ist ausgeschaltet. |

Welcher und warum, steht auf dem [Motorenbildschirm](motors-screen.md).

## Flüssigdüngerpumpe {#liquid-fertilizer-pump}

| **Anzeige** | **Was sie zeigt** |
| --- | --- |
| ![](figures/icons/pump-rate.png){height=32px} **Menge** | In **L/min**, wenn die Maschine Flüssigsektionssensoren hat, sonst in **L/Ha**. Grün, Rot, × und [!] wie üblich. Solange die Menge innerhalb der zulässigen Abweichung bleibt, ist die angezeigte Zahl die Sollmenge. |
| ![](figures/icons/pump-load.png){height=32px} **Last**, % | Wie stark die Pumpe arbeitet. **Gelb ab 99 %:** Die Pumpe ist am Limit — fahren Sie langsamer, sonst fällt die Menge unter die Sollmenge. **----** rot blinkend: Der Controller liefert keinen Lastwert. |
| ![](figures/icons/pump-pressure.png){height=32px} **Druck**, **Bar** | Nur, wenn der Drucksensor in den Pumpeneinstellungen eingeschaltet ist. **Rot: Der Flüssigkeitsdruck ist zu hoch.** **----** rot blinkend: Der Drucksensor ist defekt oder liefert keinen Wert. |
