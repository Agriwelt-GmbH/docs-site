---
title: Der Bildschirm Statistik
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/statistics-screen.html
---

# Der Bildschirm Statistik

Der Bericht über die Arbeit auf jedem Feld, Block für Block und Zeile für Zeile — und das Menü, das das Feld wählt, den Bericht speichert und ihn löscht.

Der Bildschirm Statistik ist der Bericht über die Arbeit: wie weit Sie gefahren sind, wie viel Sie bearbeitet haben, wie viel Sie gesät haben und wie gleichmäßig. Er wird **für jedes Feld getrennt** geführt und übersteht das Ausschalten. Öffnen Sie ihn mit **„HOME“** vom Bildschirm Tabelle aus (zweimal vom Startbildschirm aus); verlassen Sie ihn mit **„BACK“**.

Der Bericht ist eine lange Liste. Blättern Sie mit **„UP“** und **„DOWN“** oder wischen Sie nach oben und unten.

## Der Kopf und die Arbeit auf dem Feld {#the-head-and-the-work-on-the-field}

::: {.anatomy fig="one-stat-precise-head"}
1. **Feldnummer.** Das Feld, dessen Bericht Sie sehen. **„MINUS“** und **„PLUS“** — oder ein Wischen mit zwei Fingern — zeigen ein anderes Feld.
2. **(A).** Dies ist das aktive Feld — das, in das das Panel jetzt schreibt.
3. **Datum und Uhrzeit.** Das heutige Datum und die Uhrzeit.
4. **Weg.** Gefahrene Strecke in km.
5. **Fläche.** Bearbeitete Fläche in ha.
6. **Betriebszeit.** Stunden, Minuten und Sekunden Arbeit.
7. **Fahrgeschwindigkeit.** Die durchschnittliche Fahrgeschwindigkeit.
8. **Start / Ende.** Wann die Arbeit auf diesem Feld begann und endete.
9. **Aussaat.** Der nächste Block — siehe unten.

Der Kopf des Berichts eines Achtreihen-Einzelkornsägeräts im Modus „Einzelkorn“, leer.
:::

## Der Block Aussaat {#the-seeding-block}

::: {.anatomy fig="one-stat-precise-seeding"}
1. **Körner ges.(x1000).** Die Summe in Tausend Körnern.
2. **Qualität.** Der Anteil der Körner, die wie vorgesehen einzeln abgelegt wurden. Beurteilen Sie die Arbeit nach dieser Zahl.
3. **Doppel.** Zwei Körner, wo eines vorgesehen war.
4. **Fehlstellen.** Eine Lücke, wo ein Korn vorgesehen war.
5. **Nicht gesät.** Der Anteil der Fahrt, auf dem überhaupt nichts herauskam.
6. **Istwert / Sollwert.** Was ausgebracht wurde, gegen das, was eingestellt war.
7. **Dichte,Tsd/ha.** In Tausend je Hektar; die Abweichung in Klammern.
8. **Menge,K/m.** In Körnern je Meter; der Sollwert rechts.
9. **Gesät / Nicht gesät / Unbekannt.** Das Feld in drei Teilen, in Hektar.
10. **Balken.** Dieselbe Aufteilung als farbiger Balken: grün gesät, rot nicht gesät, grau unbekannt.
11. **Kornsensoren.** Der nächste Block — Sektion für Sektion.
:::

**Unbekannt** ist die Fläche, die gefahren wurde, während das Panel nicht urteilen konnte — keine Störung, aber auch kein Beweis für getane Arbeit.

> **HINWEIS**
>
> **Eine große Abweichung ist nicht immer ein Fehler der Maschine.** Prüfen Sie, bevor Sie etwas an der Drillmaschine ändern, ob die Geschwindigkeit, die das Panel sieht, mit der wirklichen übereinstimmt — eine falsche Geschwindigkeit verschiebt jede Mengenzahl mit.

## Sektion für Sektion {#section-by-section}

::: {.anatomy fig="one-stat-precise-sensors"}
1. **Kornsensoren.** Es folgt ein Block je Sektion.
2. **Kornsensor 1.** Die Sektionsnummer und die Körner, die sie gezählt hat.
3. **q d s n.** Qualität, Doppelbelegungen, Fehlstellen und nicht gesät für diese Sektion.
4. **Gesät / nicht gesät / unbekannt.** Der Anteil jedes Zustands für diese Sektion (**s**, **n**, **?**) und der Balken.
5. **Dichte.** Tausend je Hektar für diese Sektion, mit ihrer Abweichung.
6. **Abstand.** Körner je Meter für diese Sektion, mit ihrer Abweichung.
:::

Hier zeigt sich eine ungleichmäßig arbeitende Drillmaschine. Eine Sektion mit geringerer Qualität als die übrigen oder mit einem längeren roten Teil ihres Balkens weist auf diese Reihe hin: ein verstopfter Auslauf, eine verschlissene Scheibe, ein Sensor, der gereinigt werden muss.

## Blöcke, die an anderen Maschinen erscheinen {#blocks-that-appear-on-other-machines}

| **Block** | **Was er enthält** |
| --- | --- |
| **Arbeit ohne Alarmüberwachung** | Der Teil der Arbeit, den das Panel **nicht** überwacht hat — gefahren bei ausgeschalteter oder gesperrter Überwachung. |
| **Geschwindigkeitsüberwachung** | Wie weit und wie lange Sie außerhalb des zulässigen Geschwindigkeitsbereichs gefahren sind. |
| **Düngung**, **Flüssigdünger** | Gedüngt / nicht gedüngt / unbekannt, wenn die Maschine sie ausbringt. |
| **Produkt** | Für ein nach Masse ausgebrachtes Produkt: die ausgebrachte Menge und die Istmenge gegen die Sollmenge in kg/ha. |

![Der Bericht einer Drillmaschine mit einem nach Masse ausgebrachten Produkt.](figures/one-stat-1-field)

## Das Menü des Bildschirms {#the-menu-of-the-screen}

Drücken Sie **„MENU“** oder tippen Sie mit zwei Fingern.

![Das Menü des Bildschirms Statistik.](figures/one-stat-menu)

| **Punkt** | **Was er bewirkt** |
| --- | --- |
| **„Feld wählen“** | Macht das angezeigte Feld zum aktiven — das Panel schreibt von jetzt an in dieses. Wird nur angezeigt, solange Sie ein Feld ansehen, das nicht aktiv ist. Ein Feld, dessen Statistik nicht leer ist, kann erst gewählt werden, wenn seine Daten gelöscht sind; das Panel sagt es und fragt nach. |
| **„Statistik“** | Schaltet den Bericht zwischen **kurz** und **voll** um. Der kurze Bericht behält die Summen und lässt die Einzelheiten je Sektion weg. |
| **„Wegstrecke“** | Weg in km und Fläche in ha über die gesamte Lebensdauer des Systems. Diese Summen lassen sich nicht zurücksetzen. Ohne Geschwindigkeitssensor stattdessen die aufgelaufene Laufzeit. |
| **„Auf SD-Karte sichern“** | Schreibt ein Feld oder alle auf die Speicherkarte. Wird angezeigt, solange eine Karte im Steckplatz steckt. |
| **„Statistik zurücksetzen“** | Löscht die Statistik. |

> **WICHTIG**
>
> **Die Statistik wird auch durch etwas anderes gelöscht.** Wenn Sie den Überwachungsmodus der Aussaat zwischen „Einzelkorn“ und den anderen wechseln, wird eine Bestätigung verlangt und, wenn Sie bestätigen, die **Statistik jedes Feldes gelöscht**. Speichern Sie vorher auf die Speicherkarte, was Sie brauchen.
