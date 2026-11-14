---
title: Menüs, Kontextmenüs, Zahlenblock und Fenster
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/interface-basics.html
---

# Menüs, Kontextmenüs, Zahlenblock und Fenster

Die fünf Dinge, über die am Panel alles läuft — Arbeitsbildschirme, Hauptmenü, Kontextmenü eines Geräts, Zahlenblock und die Fenster, die fragen oder melden — und wie jedes per Touch bedient wird.

Am Panel läuft alles über fünf Dinge: die **Arbeitsbildschirme**, das **Hauptmenü**, das **Kontextmenü** eines Geräts, den **Zahlenblock** und die **Fenster**, die etwas fragen oder melden. Alle werden mit den Fingern bedient; die Gesten stehen unter [Touchzonen und Gesten](buttons-and-gestures.md). Die Arbeitsbildschirme haben ein eigenes Thema: [Arbeitsbildschirme](working-screens.md).

## Das Hauptmenü {#the-main-menu}

Tippen Sie mit **zwei Fingern** auf den Startbildschirm. Das Hauptmenü öffnet sich über dem Startbildschirm, der erste Eintrag ist gewählt. Auf dem zweiten Startbildschirm bewirkt ein Tippen auf das Einstellungssymbol dasselbe.

::: {.anatomy fig="five-main-menu"}
1. **Gewählter Eintrag.** Schwarzer Text auf blauem Balken. Hier **„Fill the disks with seeds“** (Scheiben mit Saatgut füllen) — siehe [Scheiben füllen](fill-the-disks.md).
2. **„Settings“** (Einstellungen). Die Einstellungen des Systems und der Maschine. Siehe [Das Menü „Settings“](settings-menu.md).
3. **Pfeilspitze.** Der Eintrag öffnet ein weiteres Menü.
4. **„Service“** (Service). Einträge für Inbetriebnahme und Service. Angezeigt ab der Agronomenebene.
5. **„About“** (Über). Ein Fenster mit der Firmware-Version und der Seriennummer des Panels; **„Close“** (Schließen) schließt es.

Das Hauptmenü eines Einzelkornsägeräts mit Dosierermotoren im Modus „Precise“, im Stand, auf der Agronomenebene.
:::

**Ein Menü per Touch bedienen:**

- **Tippen** Sie auf einen Eintrag, um ihn zu wählen — der blaue Balken springt dorthin.
- **Tippen Sie den gewählten Eintrag erneut an,** um ihn zu betreten: Er öffnet sein Menü, führt seine Aktion aus oder öffnet den Zahlenblock. **Berühren und Halten** eines Eintrags tut beides in einem Zug.
- **Wischen Sie nach rechts oder links** an beliebiger Stelle über das Menü, um den Wert des **gewählten** Eintrags zu erhöhen oder zu verringern. Ein kurzer Strich ändert ihn um einen Schritt; ein längerer zählt weiter, solange der Finger wandert. Das Wischen verändert immer den Eintrag auf dem blauen Balken, nicht den unter Ihrem Finger. Wortlisten laufen im Kreis: Nach dem letzten Wort kommt wieder das erste.
- **Wischen Sie nach oben oder unten,** um ein langes Menü zu blättern.
- **Tippen Sie außerhalb des Menüs** auf den abgedunkelten Bildschirm, um es zu verlassen. Ein Tippen mit drei Fingern bewirkt dasselbe.

Ein Eintrag wird an dem gelesen, was rechts von ihm steht. Die Zeichen **-** und **+** erscheinen nur um den Wert des gewählten Eintrags.

| **Was Sie rechts sehen** | **Was es bedeutet** |
| --- | --- |
| Eine Pfeilspitze **>** | Der Eintrag öffnet ein weiteres Menü. Tippen Sie ihn erneut an. |
| Ein Wert zwischen **-** und **+** | Wischen Sie nach rechts, um ihn zu erhöhen, nach links, um ihn zu verringern — direkt in der Liste. |
| Ein Wert zwischen **-[** und **]+** | Ein Wischen oder ein zweites Tippen öffnet den Zahlenblock. |
| **!** | Der Eintrag überschreibt gespeicherte Werte: Er nullt die Statistik, speichert oder lädt Einstellungen, stellt ein Gerät ein oder setzt Werte auf ihre Standardwerte zurück. Tippen Sie ihn erneut an. |
| Nichts | Der Eintrag führt eine Aktion aus. Tippen Sie ihn erneut an. |

![Das Menü „Seeding machine parameters“: Die Breite in eckigen Klammern öffnet den Zahlenblock; die Modi wechseln in der Liste; die beiden Kalibrierungen sind Aktionen.](figures/five-param-edit)

Einstellungen werden einige Sekunden nach der letzten Änderung von selbst gespeichert; Sie müssen nichts sichern.

## Das Kontextmenü eines Geräts {#the-context-menu-of-a-device}

Jeder Sensor, jeder Motor und jede Anzeige auf dem Startbildschirm hat ein eigenes Menü. **Berühren und halten Sie das Gerät** — sein Symbol oder seine Säule im Diagramm — länger als eine halbe Sekunde, dann öffnet sich sein Kontextmenü. Ein kurzes Tippen bewirkt nichts. Auf dem Motorenbildschirm und auf dem zweiten Startbildschirm funktioniert dasselbe bei einer Motorkachel.

![Das Kontextmenü eines Kornsensors.](figures/five-ctx-seed)

Der erste Eintrag, **„Information“** (Information), öffnet den Statusbildschirm des Geräts; dort zeigt ein Wischen nach rechts oder links das nächste oder das vorige Gerät, ein Wischen nach oben oder ein Dreifingertippen führt zurück. Der zweite Eintrag schaltet die Überwachung: **„Disable control“** (Überwachung ausschalten) oder **„Enable control“** (Überwachung einschalten) — siehe [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md). Darunter stehen die Parameter; welche Sie sehen, hängt von der Zugriffsebene ab ([Zugriffsebenen](access-levels.md)). Alle Parameter: [Sensoreinstellungen](sensor-settings.md).

## Zahlen eingeben {#entering-numbers}

Steht ein Wert in eckigen Klammern, öffnet seine Änderung den Zahlenblock.

::: {.anatomy fig="five-number-pad"}
1. **Name des Parameters.** Hier **„Width, cm“** (Breite, cm).
2. **Wert.** Was Sie bisher eingegeben haben.
3. **Rücktaste.** Löscht die letzte Ziffer. Berühren und halten Sie sie, um den ganzen Wert zu löschen.
4. **Ziffern.** **1** bis **9**.
5. **Punkttaste.** Fügt den Dezimalpunkt ein — nur bei einem Wert mit Nachkommastellen.
6. **Null.**
7. **„OK“.** Übernimmt den Wert.

Der Zahlenblock. Ein Tippen außerhalb des Blocks verlässt ihn, ohne etwas zu ändern.
:::

Ein Wert außerhalb des zulässigen Bereichs wird nicht abgelehnt: Das Panel setzt stattdessen den nächstgelegenen Grenzwert.

## Fenster, die fragen, und Fenster, die melden {#windows-that-ask-and-windows-that-tell}

Ein Fenster ist ein Kasten in der Bildschirmmitte mit einem **farbigen Streifen** am oberen Rand — ohne ein Wort darin — und der Meldung unter dem Streifen.

| **Fenster** | **Was es ist** | **Wie es sich schließt** |
| --- | --- | --- |
| **Blauer Streifen, Tasten darunter** | Das Panel fragt. Nichts geschieht, bis Sie antworten. | Berühren Sie **„Yes“** (Ja, grün) oder **„No“** (Nein, rot). Eine Berührung außerhalb des Kastens bricht ab: Nichts wird geändert. |
| **Blauer Streifen, ohne Tasten** | Das Panel meldet, was geschehen ist. | Manche schließen sich nach etwa zwei Sekunden von selbst, andere mit einer Berührung im Kasten. |
| **Roter Streifen, ohne Tasten** | Das Panel meldet einen Fehler, zum Beispiel **„Invalid PIN“** (Ungültige PIN). | Wie oben. |
| **Roter Streifen und ein roter Balken mit „FAILURE!“** | Ein Alarm. | Siehe unten. |

Ein Fragefenster ignoriert Berührungen in der ersten halben Sekunde, damit die Berührung, die es geöffnet hat, es nicht gleich beantwortet.

![Ein Fragefenster: der blaue Streifen, die Frage, Yes und No.](figures/five-question)

## Alarmfenster {#alarm-windows}

Ein Alarmfenster sagt, **was geschehen ist**, **an welcher Art von Gerät** und **an welchen Geräten** — deren Nummern werden aufgelistet, wenn mehrere gleiche Sensoren denselben Fehler melden, zum Beispiel **#1-4,7**. Solange es offen ist, gibt das Panel den Alarmton aus.

![Ein Alarmfenster mit der Taste „Close“.](figures/five-alarm-window)

**Berühren Sie im Fenster „Close“** (Schließen). Dieser Alarm schließt sich und der Ton endet; der nächste Alarm in der Warteschlange erscheint. Nichts sonst schließt ein Alarmfenster — Berührungen an anderer Stelle werden ignoriert.

> **WICHTIG**
>
> **Das Schließen des Fensters beendet den Ton, nicht die Störung.** Alarme werden einzeln geschlossen und **nur auf der Fahrerebene** angezeigt. Was jeder Alarm bedeutet: [So funktionieren Alarme](how-alarms-work.md).
