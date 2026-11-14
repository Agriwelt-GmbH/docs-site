---
title: Den Fahrgassenrhythmus einstellen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/tramline-rhythm.html
---

# Den Fahrgassenrhythmus einstellen

Sagen Sie dem Hectare Mini, bei welchen Durchgängen welcher Aktuator oder Motor abschaltet — die Grenzen, der Rhythmus-Editor, seine Dialoge und die Reihenfolge, die verhindert, dass Ihr Rhythmus überschrieben wird.

Eine **Fahrgasse** ist die Spur, in der später die Spritze fährt. Sie legen sie beim Säen an: Das Panel schaltet bei bestimmten **Durchgängen** — Überfahrten über das Feld — Saatreihen oder Motoren ab. Es zählt die Durchgänge und beginnt nach dem letzten wieder beim ersten. Die Zahl der Durchgänge und die Liste, welches Gerät bei welchem Durchgang abschaltet, bilden den **Rhythmus**. Beispiel: vier Durchgänge, Aktuator 1 schaltet bei Durchgang 4 ab — jede vierte Überfahrt lässt eine Fahrgasse.

| **Grenze** | **Wert** |
| --- | --- |
| Gespeicherte Rhythmen | **Drei**, jeweils einer aktiv. Behalten Sie die Muster der Maschinen, mit denen Sie arbeiten. |
| Durchgänge in einem Rhythmus | **1 bis 50**. |
| Fahrgassen-Aktuatoren | Höchstens **vier**; der Profilpunkt **„Fahrg.-Aktuatoren“** legt fest, wie viele. |
| Abschaltdurchgänge je Gerät | **Vier**. |

Mehr weiß das Panel nicht: Es gibt keine Einstellung für eine Startseite oder für die Breite der Fahrgasse. Welche Saatreihen ein Aktuator tatsächlich abschaltet, stellt **„Zuordnung Sensor-Aktuator“** ein ([Einstellungsmenü](settings-menu.md)); ohne sie zählt das Panel die Durchgänge, schaltet aber nichts ab.

> **WICHTIG**
>
> **Richten Sie zuerst das Profil ein, danach die Fahrgasse.** Das Speichern eines Profils übernimmt seinen gesamten Satz an Einstellungen, alle drei Rhythmen eingeschlossen — ein zuvor eingerichteter Rhythmus ist dann weg. Und prüfen Sie die Zahl der Durchgänge an der Spritze, nicht an der Drillmaschine: Ein falscher Rhythmus sieht perfekt aus, bis die Spritze keine Spur zum Fahren hat.

Der Punkt **„Fahrgasse“** ist nur vorhanden, wenn die Maschine einen Fahrgassen-Aktuator hat oder ebenso viele Saatmotoren wie Kornsensoren oder ebenso viele Düngermotoren wie Düngersensoren. Das Einrichten braucht die Stufe „Agronom“ ([Stufe „Agronom“ freischalten](enable-agronomist-level.md)).

::: steps
1. Drücken Sie **„MENU“** und öffnen Sie dann **„Einstell.“** → **„Sämaschinen-Parameter“** → **„Fahrgasse“**. Stellen Sie **„Fahrgasse“** mit **„PLUS“** auf **„Ja“**.

   ![Das Untermenü Fahrgasse.](figures/mini-tramline-menu)

2. Wählen Sie **„Fahrgassenrhythmus“** und drücken Sie **„MENU“**. Der Rhythmus-Editor öffnet sich.

3. Wählen Sie die Rhythmusnummer mit **„PLUS“** / **„MINUS“**, drücken Sie **„MENU“** und wählen Sie **„Wählen“**. Neben der Nummer erscheint **(„Aktiv“)**. Ohne das wird der Rhythmus gespeichert, aber nicht verwendet.

4. Gehen Sie mit **„DOWN“** zur Zahl der Durchgänge, drücken Sie **„MENU“**, stellen Sie **„Durchgänge“** mit **„PLUS“** / **„MINUS“** ein und bestätigen Sie mit **„MENU“**.

5. Gehen Sie mit **„DOWN“** in die leere Zeile eines Abschnitts und drücken Sie **„MENU“**. Stellen Sie die Gerätenummer und den **„Durchgang“** ein, bei dem es abschaltet; bestätigen Sie mit **„MENU“**.

6. Für weitere Abschaltdurchgänge desselben Geräts gehen Sie mit **„PLUS“** zur Zelle mit dem **„MENU“**-Zeichen am Ende seiner Zeile und drücken **„MENU“** — bis zu vier.

7. Drücken Sie **„BACK“** oder halten Sie **„HOME“** gedrückt. Der Rhythmus ist gespeichert.
:::

## Der Rhythmus-Editor {#the-rhythm-editor}

![Der Rhythmus-Editor mit einem neuen Rhythmus: ein Durchgang, noch nichts abgeschaltet.](figures/mini-tramline-rhythm-form)

Lesen Sie ihn von oben nach unten: **„Rhythmus“** mit seiner Nummer zwischen Pfeilen und **(Aktiv)**, wenn er benutzt wird; darunter die Zahl der Durchgänge in einem Feld; dann bis zu drei Abschnitte — **„Fahrg.-Aktuatoren aktiv.“**, **„Fahrg.-Motoren aktivieren“**, **„Fahrg.-Düngermotoren aktiv.“** (bei beiden Modi **„Einzelkorn“**: **„Fahrg.-Motoren Gr.A aktiv.“** und **„Fahrg.-Motoren Gr.B aktiv.“**). Jede Zeile nennt ein Gerät — **„Aktuator“**, **„Motor“**, **„Düng.mot.“** — und die Durchgänge, bei denen es abschaltet; eine Zelle mit dem **„MENU“**-Zeichen fügt einen Durchgang oder eine Zeile hinzu. Eine gewählte Zelle ist weiß auf Blau.

| **Taste** | **Was sie bewirkt** |
| --- | --- |
| **„UP“** / **„DOWN“** | Eine Zeile nach oben oder unten, über die Abschnitte hinweg. |
| **„PLUS“** / **„MINUS“** | Auf der Rhythmusnummer: nächster / voriger Rhythmus. In einer Zeile: eine Zelle nach rechts / links. Auf der Zahl der Durchgänge: nichts — öffnen Sie sie mit **„MENU“**. |
| **„MENU“** | Öffnet den Dialog der gewählten Zelle. |
| **„BACK“** | Speichert und kehrt zum Menü **„Fahrgasse“** zurück. |
| **„HOME“** gedrückt gehalten | Speichert und kehrt zum Startbildschirm zurück. Ein kurzer Druck bewirkt hier nichts. |

## Die Dialoge {#the-dialogs}

- **Rhythmusnummer:** **„Wählen“** macht ihn zu dem in Benutzung; **„Rhythmus zurücksetzen“** löscht seine Zeilen und setzt seine Durchgänge auf 1.
- **Zahl der Durchgänge:** Wird sie gesenkt, werden die Einträge für wegfallende Durchgänge gelöscht; eine Zeile ohne Durchgang verschwindet. War der aktuelle Durchgang größer als die neue Zahl, beginnt das Zählen wieder bei 1.
- **Zeile eines Geräts:** die Gerätenummer und **„Löschen“**. Nummern, die im Abschnitt schon verwendet sind, werden übersprungen — lesen Sie den Wert ab, zählen Sie nicht die Drücke.
- **Durchgang einer Zeile:** **„Durchgang“**, **„Durchg.lös.“** und **„Alle Durchg.lös.“**. Durchgänge, die schon in der Zeile stehen, werden übersprungen. Sind schon alle Durchgänge eingetragen, erscheint stattdessen **„Keine freien Durchgänge!“**; jede Taste schließt das Fenster.

> **VORSICHT**
>
> **Die Löschpunkte stehen direkt unter dem Wert.** Einmal **„DOWN“** zu viel und ein **„MENU“** löschen die Zeile, an der Sie arbeiten. **„Rhythmus zurücksetzen“** verwirft auch nicht gespeicherte Änderungen an den beiden anderen Rhythmen und ein nicht gespeichertes **„Wählen“**.

## Was wo gespeichert wird {#what-is-stored-where}

Die drei Rhythmen, die Zahl der Durchgänge, der aktuelle Durchgang, **„Fahrgasse“** und **„Autom. Umschaltung“** gehören zu den Einstellungen des Panels und werden kurz nach der letzten Berührung von selbst gespeichert. Das Profil enthält nur, wie viele Geräte es gibt; beim Öffnen löscht der Editor Zeilen, für die das Profil kein Gerät hat. Bei **„Fahrgasse“** auf **„Nein“** kehren alle Aktuatoren und Motoren zur Aussaat zurück.

Die Arbeit auf dem Feld: [Nächster Fahrgassen-Durchgang](next-tramline-bout.md).
