---
title: Der Statistikbildschirm
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/statistics-screen.html
---

# Der Statistikbildschirm

Der Bericht über die Arbeit auf jedem Schlag, Block für Block und Zeile für Zeile — und das Menü, das den Schlag wählt, den Bericht speichert und löscht.

Der Statistikbildschirm ist der Arbeitsbericht: wie weit Sie gefahren sind, wie viel Sie bearbeitet haben, wie viel Sie gesät haben und wie gleichmäßig. Er wird **getrennt für jeden von fünf Schlägen** geführt und übersteht das Ausschalten. Öffnen Sie ihn vom Tabellenbildschirm mit einem **langen Wischen nach links**. Er hat keinen Weg zurück: Ein weiteres langes Wischen nach links führt weiter zum Motorenbildschirm oder, an einer Maschine ohne Motoren, zum Startbildschirm.

Der Bericht ist eine lange Liste. **Wischen Sie nach oben oder unten,** um sie zu blättern, eine Zeile je Wischen.

## Kopf und Arbeit auf dem Schlag {#the-head-and-the-work-on-the-field}

::: {.anatomy fig="five-stat-head"}
1. **Schlagnummer.** **Field #** und die Nummer des Schlags, dessen Bericht Sie sehen. Ein **Zweifingerwischen** nach rechts oder links zeigt den nächsten oder den vorigen Schlag.
2. **(A).** Dies ist der aktive Schlag — der, in den das Panel jetzt schreibt.
3. **Datum und Uhrzeit.** Das heutige Datum und die Uhrzeit.
4. **Strecke.** Gefahrene Strecke, in **km**.
5. **Fläche.** Bearbeitete Fläche, in **Ha**.
6. **Betriebszeit.** Stunden, Minuten und Sekunden Arbeit.
7. **Fahrgeschwindigkeit.** Die durchschnittliche Fahrgeschwindigkeit.
8. **Beginn / Ende.** Wann die Arbeit auf diesem Schlag begann und endete.
9. **Aussaat.** Der nächste Block — siehe unten.

Der Kopf des Berichts eines Achtreihen-Einzelkornsägeräts im Modus **„Precise“** (Einzelkorn).
:::

## Der Aussaatblock {#the-seeding-block}

::: {.anatomy fig="five-stat-seeding"}
1. **„Seeds sown (x1000)“** (gesäte Körner, ×1000). Die Gesamtzahl, in tausend Körnern.
2. **„Quality“** (Qualität). Der Anteil der Körner, die wie vorgesehen einzeln abgelegt wurden. Beurteilen Sie die Arbeit nach dieser Zahl.
3. **„Doubles“** (Doppelbelegungen). Zwei Körner, wo eines vorgesehen war.
4. **„Skips“** (Fehlstellen). Eine Lücke, wo ein Korn vorgesehen war.
5. **„Not sown“** (nicht gesät). Der Anteil der Fahrt, auf dem gar nichts herauskam.
6. **„Factical“** / **„Setuped“** (Ist / Soll). Die beiden Spaltenüberschriften: was tatsächlich ausgebracht wurde und was eingestellt war.
7. **„Population,ks/Ha“** (Aussaatstärke). In tausend Körnern je Hektar; die Abweichung in Klammern.
8. **„Rate, s/m“** (Menge). In Körnern je Meter; rechts die Sollmenge.
9. **„Sown“** / **„Not sown“** / **„Unknown“** (gesät / nicht gesät / unbekannt). Der Schlag in drei Teile geteilt, in Hektar.
10. **Balken.** Dieselbe Aufteilung als farbiger Balken: grün gesät, rot nicht gesät, grau unbekannt.
11. **„Seed sensors“** (Kornsensoren). Der nächste Block — Sektion für Sektion.
:::

**„Unknown“** ist die Fläche, die gefahren wurde, während das Panel nicht urteilen konnte — keine Störung, aber auch kein Beleg für geleistete Arbeit.

> **HINWEIS**
>
> **Eine große Abweichung ist nicht immer ein Fehler der Maschine.** Prüfen Sie, bevor Sie etwas an der Maschine ändern, ob die Geschwindigkeit, die das Panel sieht, mit der tatsächlichen übereinstimmt — eine falsche Geschwindigkeit verschiebt jede Mengenzahl mit.

## Sektion für Sektion {#section-by-section}

::: {.anatomy fig="five-stat-sensors"}
1. **„Seed sensors“.** Es folgt ein Block je Sektion.
2. **Sektion.** Die Sektionsnummer und die Körner, die sie gezählt hat.
3. **q d s n.** Qualität, Doppelbelegungen, Fehlstellen und nicht gesät für diese Sektion, in Prozent.
4. **Gesät / nicht gesät / unbekannt.** Der Anteil jedes Werts für diese Sektion und der Balken.
5. **Aussaatstärke.** Tausend je Hektar für diese Sektion, mit ihrer Abweichung.
6. **Abstand.** Körner je Meter für diese Sektion, mit ihrer Abweichung.
:::

Hier zeigt sich eine ungleichmäßig arbeitende Maschine. Eine Sektion mit niedrigerer Qualität als der Rest oder einem längeren roten Teil ihres Balkens weist auf diese Reihe hin: einen verstopften Auslauf, eine verschlissene Scheibe, einen Sensor, der gereinigt werden muss.

## Blöcke, die an anderen Maschinen erscheinen {#blocks-that-appear-on-other-machines}

| **Block** | **Was er enthält** |
| --- | --- |
| **„Work without alarms control“** (Arbeit ohne Alarmüberwachung) | Der Teil der Arbeit, den das Panel **nicht** überwacht hat — gefahren mit ausgeschalteter oder gesperrter Überwachung. |
| **„Speed control“** (Geschwindigkeitskontrolle) | Wie weit und wie lange Sie außerhalb des zulässigen Geschwindigkeitsbereichs gefahren sind. |
| **„Fertilizing“** (Düngung), Flüssigdünger | Gedüngt / nicht gedüngt / unbekannt, wenn die Maschine sie ausbringt. |
| **Product** | Für ein nach Masse ausgebrachtes Produkt: die ausgebrachte Menge und die tatsächliche gegenüber der eingestellten Menge in kg/ha, in der Zeile **Factical: … Setuped: …**. |

## Das Menü des Bildschirms {#the-menu-of-the-screen}

Tippen Sie mit **zwei Fingern** auf den Bildschirm.

![Das Menü des Statistikbildschirms.](figures/five-stat-menu)

| **Eintrag** | **Was er bewirkt** |
| --- | --- |
| **„Select field“** (Schlag wählen) | Macht den gezeigten Schlag zum aktiven — das Panel schreibt von nun an in ihn. Nur angezeigt, solange Sie einen Schlag ansehen, der nicht aktiv ist. Wurde dieser Schlag mit einem anderen Satz von Produkten nach Masse bearbeitet, fragt das Panel, ob zuvor seine Daten gelöscht werden sollen. |
| **„Statistics“** (Statistik) | Schaltet den Bericht zwischen **„Short“** (kurz) und **„Full“** (vollständig) um. An einer Maschine ohne Geschwindigkeitssensor nicht angezeigt. |
| **„Mileage“** (Laufleistung) | Strecke in km und Fläche in ha über die gesamte Lebensdauer des Systems. Diese Summen lassen sich nicht zurücksetzen. Ohne Geschwindigkeitssensor stattdessen die aufgelaufene Laufzeit. |
| **„Save to SD-card“** (Auf SD-Karte speichern) | Schreibt einen Schlag oder alle auf die Speicherkarte. Angezeigt, solange eine Karte bereit ist. |
| **„Zero statistics“** (Statistik nullen) | Löscht die Statistik des Schlags. Auf der Fahrerebene fragt das Panel zuerst nach der PIN einer höheren Ebene; oberhalb der Fahrerebene fragt es **„Are you sure?“** (Sind Sie sicher?). |

> **WICHTIG**
>
> **Die Statistik wird auch durch etwas anderes gelöscht.** Das Umschalten des Aussaat-Überwachungsmodus auf oder von „Precise“ oder das Ändern von **„Width, cm“** (Breite, cm) verlangt eine Bestätigung und **löscht, wenn Sie bestätigen, die Statistik jedes Schlags**. Sichern Sie zuvor auf der Speicherkarte, was Sie brauchen.
