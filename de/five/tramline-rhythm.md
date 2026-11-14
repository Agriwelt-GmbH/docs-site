---
title: Fahrgassenrhythmus einstellen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/tramline-rhythm.html
---

# Fahrgassenrhythmus einstellen

Was ein Fahrgassenrhythmus ist, für Ihre Drillmaschine und Ihre Spritze berechnet, wie Sie ihn am Panel per Touch einstellen und wie das Panel die Durchgänge zählt.

Eine **Fahrgasse** ist die Spur, in der später die Spritze fährt. Sie legen sie jetzt bei der Aussaat an, indem Sie in bestimmten Durchgängen ein oder zwei Sektionen abschalten, damit dort, wo die Spritzenräder laufen, nichts gesät wird. Welche Durchgänge das sind, hängt von der Breite der Drillmaschine im Verhältnis zur Breite der Spritze ab. Dieses Muster, über das Feld wiederholt, ist der **Rhythmus**.

## Wie ein Rhythmus funktioniert — ein Beispiel {#how-a-rhythm-works-an-example}

Eine 6-Meter-Drillmaschine und eine 18-Meter-Spritze: Jeder dritte Durchgang muss die Spur tragen. Der Rhythmus ist drei Durchgänge lang, und Aktuator 1 schaltet in einem davon seine Sektionen ab.

| **Durchgang** | **Aktuator 1** | **Was gesät wird** |
| --- | --- | --- |
| 1 | schaltet seine Sektionen ab | Alle Reihen außer den Fahrgassenreihen — die Spur ist angelegt. |
| 2 | offen | Alle Reihen. |
| 3 | offen | Alle Reihen. |
| wieder 1 | schaltet ab | Die nächste Spur, 18 m weiter. |

> **WICHTIG**
>
> **Stellen Sie den Rhythmus falsch ein, sieht das Feld perfekt aus, bis die Spritze kommt und nirgends fahren kann.** Prüfen Sie die Zahl der Durchgänge gegen die Spritze, nicht gegen die Drillmaschine.

## Was das Panel zulässt {#what-the-panel-allows}

| | |
| --- | --- |
| **Gespeicherte Rhythmen** | **Drei.** Einer ist jeweils aktiv. |
| **Aktuatoren in einem Rhythmus** | **Vier.** An einer Maschine, die Fahrgassen durch Anhalten von Dosierermotoren anlegt, treten die Motoren an ihre Stelle. |
| **Abschaltdurchgänge je Aktuator** | **Vier** verschiedene Durchgänge desselben Rhythmus. |
| **Durchgänge in einem Rhythmus** | 1 bis 50. |

## Einstellen {#setting-it-up}

Die Fahrgasseneinträge liegen unter **„Seeding machine parameters“** (Sämaschinenparameter), was die **Agronomen**ebene erfordert: [Agronomenebene freischalten](enable-agronomist-level.md). Der Eintrag **„Tramline“** (Fahrgasse) wird nur an einer Maschine angezeigt, die Fahrgassen anlegen kann.

::: steps
1. Tippen Sie auf dem Startbildschirm mit **zwei Fingern**. Tippen Sie **„Settings“** (Einstellungen) an und tippen Sie es erneut an.

2. Tippen Sie **„Seeding machine parameters“** an und tippen Sie es erneut an.

3. Tippen Sie **„Tramline“** an und tippen Sie es erneut an.

   ![Das Menü „Tramline“.](figures/five-menu-tramline)

4. Tippen Sie **„Tramline“** an und wischen Sie nach rechts auf **„Yes“** (Ja). Tippen Sie dann zweimal auf **„Tramline rhythm settings“** (Einstellungen des Fahrgassenrhythmus). Das Rhythmusformular öffnet sich mit gewähltem Rhythmus 1.

5. Wischen Sie bei **„Rhythm“** (Rhythmus) nach rechts oder links, um die Rhythmusnummer zu wählen. Tippen Sie mit **zwei Fingern** und wählen Sie **„Select“** (Wählen). Neben der Nummer erscheint das Wort **„Active“** (Aktiv) — ohne es ist der Rhythmus gespeichert, aber nicht in Gebrauch.

6. Wischen Sie nach unten zu **„Bouts“** (Durchgänge), tippen Sie mit zwei Fingern und stellen Sie die Zahl der Durchgänge im Rhythmus ein.

7. Wischen Sie zur umrahmten Zelle unter der Aktivierungsüberschrift und tippen Sie mit zwei Fingern. Wählen Sie die Nummer des Aktuators, dann den **Durchgang**, in dem er seine Sektionen abschalten soll.

8. Wenn das Muster es verlangt, fügen Sie demselben Aktuator weitere Durchgänge hinzu — bis zu vier — mit der umrahmten Zelle am Ende seiner Zeile, oder einen weiteren Aktuator mit der Zelle in der leeren Zeile darunter.

9. Tippen Sie mit **drei Fingern**. Der Rhythmus wird gespeichert und das Menü „Tramline“ kehrt zurück. Tippen Sie außerhalb der Menüs, bis der Startbildschirm zurückkehrt. Die Fahrgassenanzeige zeigt den aktuellen Durchgang und die Zahl der Durchgänge.
:::

Ein Berühren und Halten an beliebiger Stelle des Formulars speichert den Rhythmus, ohne es zu verlassen. Kehren Sie vor der Arbeit auf die **Fahrer**ebene zurück — darüber werden keine Alarme angezeigt.

## Das Rhythmusformular {#the-rhythm-form}

::: {.anatomy fig="five-tramline-rhythm-form"}
1. **„Rhythm“.** Die Nummer des Rhythmus; ein Wischen nach rechts oder links schaltet durch die drei.
2. **„Active“.** Dieser Rhythmus ist der in Gebrauch befindliche.
3. **„Bouts“.** Die Zahl der Durchgänge im Rhythmus.
4. **Aktivierungsüberschrift.** **„Tramline actuators activation“** (Aktivierung der Fahrgassen-Aktuatoren) an einer Maschine, die Fahrgassen mit Aktuatoren anlegt; **„Tramline motors activation“** (Aktivierung der Fahrgassen-Motoren) an einer, die Dosierermotoren anhält. Eine Maschine mit beidem zeigt beide Überschriften.
5. **Umrahmte Zelle.** Fügt einen Aktuator (oder Motor) und seinen Abschaltdurchgang hinzu.

Ein neuer Rhythmus: ein Durchgang, noch nichts abgeschaltet.
:::

Im Formular bewegt ein Wischen nach oben oder unten zwischen den Zeilen, ein Wischen nach rechts oder links entlang einer Zeile, und ein **Zweifingertippen** öffnet die gewählte Zelle. **„Reset rhythm settings“** (Rhythmuseinstellungen zurücksetzen) im Menü der Zeile **„Rhythm“** setzt den gewählten Rhythmus auf seine Standardwerte zurück.

## Wie der Durchgang wechselt {#how-the-bout-changes}

Das Panel zählt die Durchgänge selbst. Etwas an der Maschine muss ihm sagen, dass eine Fahrt zu Ende ist:

| **An der Maschine** | **Was einen Durchgang beendet** |
| --- | --- |
| Spuranzeigersensoren im Profil | Mindestens ein Spuranzeigersensor **unter Überwachung** und **antwortend**. Der Wechsel der Spuranzeigerstellung beendet den Durchgang. |
| Keine Spuranzeiger | Der **Arbeitsstellungssensor**, unter Überwachung und antwortend. Das Anheben des Geräts aus der Arbeit beendet den Durchgang. |
| Keines von beiden | Der Durchgang wechselt nicht. |

Kann der Durchgang nicht von selbst wechseln, ist das Fahrgassensymbol auf dem Startbildschirm **gelb** ([Fahrgassen-Durchgang](indicators.md#tramline-bout)). Prüfen Sie die Anzeige auf dem Startbildschirm, bevor Sie eine Fahrt beginnen.
