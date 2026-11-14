---
title: Fahrgassenrhythmus einstellen
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/tramline-rhythm.html
---

# Fahrgassenrhythmus einstellen

Was ein Fahrgassenrhythmus ist, für Ihre Drillmaschine und Ihre Spritze berechnet, und wie Sie ihn Schritt für Schritt am Panel einstellen.

Eine **Fahrgasse** ist die Spur, in der später die Spritze fährt. Sie legen sie jetzt bei der Aussaat an, indem Sie in bestimmten Durchgängen eine oder zwei Sektionen abschalten, damit dort, wo die Spritzenräder laufen, nichts gesät wird. Welche Durchgänge das sind, hängt von der Breite der Drillmaschine im Verhältnis zur Breite der Spritze ab. Dieses Muster, das sich über das Feld wiederholt, ist der **Rhythmus**.

## Wie ein Rhythmus funktioniert — ein Beispiel {#how-a-rhythm-works-an-example}

Eine Drillmaschine mit 6 Metern und eine Spritze mit 18 Metern: Jeder dritte Durchgang muss die Spur tragen. Der Rhythmus ist drei Durchgänge lang, und Aktuator 1 schaltet seine Sektionen in einem davon ab.

| **Durchgang** | **Aktuator 1** | **Was gesät wird** |
| --- | --- | --- |
| 1 | schaltet seine Sektionen ab | Alle Reihen außer den Fahrgassenreihen — die Spur wird angelegt. |
| 2 | offen | Alle Reihen. |
| 3 | offen | Alle Reihen. |
| wieder 1 | schaltet ab | Die nächste Spur, 18 m weiter. |

Das Panel zählt die Durchgänge und schaltet die Sektionen im richtigen ab. Nach dem letzten Durchgang beginnt es wieder bei Durchgang 1.

> **WICHTIG**
>
> **Ist der Rhythmus falsch, sieht das Feld perfekt aus, bis die Spritze kommt und nirgends fahren kann.** Prüfen Sie die Zahl der Durchgänge gegen die Spritze, nicht gegen die Drillmaschine.

## Was das Panel zulässt {#what-the-panel-allows}

| | |
| --- | --- |
| **Gespeicherte Rhythmen** | **Drei.** Einer ist jeweils aktiv. Bewahren Sie die Muster der Maschinen auf, mit denen Sie arbeiten, und schalten Sie zwischen ihnen um. |
| **Aktuatoren in einem Rhythmus** | **Vier.** |
| **Abschaltende Durchgänge je Aktuator** | **Vier** verschiedene Durchgänge desselben Rhythmus. |
| **Durchgänge in einem Rhythmus** | Mindestens einer. |

## Einstellen {#setting-it-up}

Die Punkte der Fahrgasse stehen unter **„Sämaschinen-Parameter“**, wofür die Ebene **„Agronom“** erforderlich ist: [Ebene „Agronom“ freischalten](enable-agronomist-level.md).

::: steps
1. Drücken Sie auf dem Startbildschirm **„MENU“**, wählen Sie **„Einstellungen“** und drücken Sie **„MENU“**.

   ![Das Hauptmenü.](figures/menu-main)

2. Wählen Sie **„Sämaschinen-Parameter“** und drücken Sie **„MENU“**.

   ![Das Menü Einstellungen; Sämaschinen-Parameter ganz unten.](figures/menu-settings)

3. Wählen Sie **„Fahrgasse“** und drücken Sie **„MENU“**.

   ![Das Menü Sämaschinen-Parameter mit dem Punkt Fahrgasse.](figures/menu-seeding)

4. Stellen Sie **„Fahrgasse“** mit **„PLUS“** auf **„Ja“**. Wählen Sie dann **„Fahrgassenrhythmus“** und drücken Sie **„MENU“**.

   ![Das Menü Fahrgasse.](figures/menu-tramline)

5. Wählen Sie bei **„Rhythmus“** mit **„PLUS“** / **„MINUS“** die Nummer des Rhythmus, drücken Sie **„MENU“** und wählen Sie **„Wählen“**. Neben der Nummer erscheint das Wort **„Aktiv“** — ohne es ist der Rhythmus gespeichert, wird aber nicht verwendet.

   ![Das Menü des Rhythmus: Wählen, Rhythmus zurücksetzen.](figures/one-tramline-rhythm-select)

6. Gehen Sie nach unten zu **„Durchgänge“** und stellen Sie die Zahl der Durchgänge im Rhythmus ein.

7. Gehen Sie zur umrahmten Zelle unter der Überschrift der Aktivierung und drücken Sie **„MENU“**. Wählen Sie die Nummer des Aktuators und dann den **Durchgang**, in dem er seine Sektionen abschalten soll.

8. Wenn das Muster es verlangt, fügen Sie demselben Aktuator weitere Durchgänge hinzu — bis zu vier — mit der umrahmten Zelle am Ende seiner Zeile, oder einen weiteren Aktuator mit der Zelle in der leeren Zeile darunter.

9. Drücken Sie **„BACK“**, bis der Startbildschirm wiederkehrt. Der Rhythmus ist gespeichert; die Fahrgassenanzeige zeigt oben den aktuellen Durchgang und unten die Zahl der Durchgänge.

   ![Der Startbildschirm mit der Fahrgassenanzeige, Durchgang 1 von 1.](figures/one-home-tramline)
:::

Kehren Sie vor der Arbeit auf die Ebene **„Fahrer“** zurück — darüber werden keine Alarme angezeigt.

## Das Formular des Rhythmus {#the-rhythm-form}

::: {.anatomy fig="one-tramline-rhythm-form"}
1. **Rhythmus.** Die Nummer des Rhythmus; **„PLUS“** und **„MINUS“** schalten durch die drei.
2. **„Aktiv“.** Dieser Rhythmus ist der verwendete.
3. **„Durchgänge“.** Die Zahl der Durchgänge im Rhythmus.
4. **Überschrift der Aktivierung.** **„Fahrgassen-Aktuatoren aktivieren“** an einer Maschine, die Fahrgassen mit Aktuatoren anlegt; **„Fahrgassen-Motoren aktivieren“** an einer, die Dosiermotoren anhält.
5. **Umrahmte Zelle.** Fügt einen Aktuator (oder Motor) und seinen Abschalt-Durchgang hinzu.

Ein neuer Rhythmus: ein Durchgang, noch nichts abgeschaltet.
:::

Im Formular bewegen **„UP“** und **„DOWN“** zwischen den Zeilen, **„MINUS“** und **„PLUS“** entlang einer Zeile, **„MENU“** öffnet die gewählte Zelle. Zum nächsten Durchgang wechseln während der Arbeit: [Zum nächsten Fahrgassen-Durchgang wechseln](next-tramline-bout.md).
