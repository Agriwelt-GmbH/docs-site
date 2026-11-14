---
title: Das Alarmfenster
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/alarm-window.html
---

# Das Alarmfenster

Wann die App das Alarmfenster öffnet, was das Fenster zeigt, wie Reihen sich ihm anschließen, wie Sie es schließen und wie der Summer und die Alarmverzögerung arbeiten.

Ein Alarm ist ein Fenster, das sich mit dem Summer über der gerade angezeigten Seite öffnet. Es sagt Ihnen, dass eine Reihe, ein Gerät der Maschine oder die Verbindung zum Gateway eine Störung hat.

::: {.anatomy fig="app-alarm-window"}
1. **„ALARM!“** — der Titelstreifen jedes Alarmfensters; er blinkt. Rot bei einem Alarm, orange bei einem Gerät, das sich selbst als gestört meldet (**„Verstopft“**, **„Fremdlicht“**, **„Defekt“**, **„Falscher Gerätetyp!“** …).
2. **Der Alarm** — hier **„Behälter leer“**. Suchen Sie ihn anhand dieser Worte in den Servicecodes.
3. **Die Tonzeile** — hier **„Lautstärke aus“**: Der Summer läuft, aber die Lautstärke des Tablets ist heruntergedreht. Drehen Sie sie auf.
4. **„Schließen“** — schließt das Fenster und stoppt den Summer. Die ganze Taste nimmt die Berührung an.
5. **Die Kachel des Geräts im Alarm**, mit rot blinkendem Ring.

Ein Alarm eines Geräts am HUB-8: Der Behälter ist leer.
:::

Bei einer Reihe nennt das Fenster zusätzlich den Sensor und die Reihen:

![Das Alarmfenster von vier Saatreihen unter der zulässigen Sollmenge.](figures/app-alarm-window-rows)

**„Kornsensor:“** oder **„Düngersensor:“** sagt Ihnen, welche Gruppe, und die Reihennummern folgen — **#4,12–14** bedeutet die Reihen 4, 12, 13 und 14. Bei einem Fahrgassen-Aktuator sagt das Fenster **„Fahrgassenaktor“** und seine Nummer.

## Wie sich das Fenster verhält {#how-the-window-behaves}

- **Die Störung muss die Alarmverzögerung lang anhalten**, bevor sich das Fenster öffnet — 3 Sekunden, sofern unter **„Einstellungen“** › **„Überwachung und Alarme“** › **„Alarmverzögerung“** nichts anderes eingestellt ist (2 bis 20 Sekunden). Ein Gerät, das kein Kornsensor ist (**„Falscher Gerätetyp!“**), wird sofort gemeldet.
- **Derselbe Alarm in einer anderen Reihe schließt sich dem offenen Fenster an**: Ihre Nummer wird ergänzt. Ein anderer Alarm wartet, bis Sie dieses schließen, und öffnet sich dann.
- **Ein geschlossener Alarm kommt nicht wieder**, solange seine Störung anhält. Er erscheint erst wieder, nachdem die Störung verschwunden und zurückgekehrt ist.
- **Die Verbindung zum Gateway hat Vorrang.** War die Verbindung 3 Sekunden lang unterbrochen, ersetzt das Fenster **„Verbindung zur Brücke verloren“** jedes andere Fenster: Jede Zahl auf dem Bildschirm ist veraltet. Es schließt sich von selbst, sobald das Gateway wieder antwortet.
- **Das Schließen des Fensters behebt die Störung nicht.** Aktive Alarme bleiben in der Liste hinter der Glocke — siehe [Zurechtfinden in der App](app-navigation.md#the-list-of-alarms).

## Der Summer {#the-buzzer}

Der Summer ertönt, solange ein Alarmfenster offen ist: alle zwei Sekunden ein kurzer Ton über den Lautsprecher des Tablets. **„Schließen“** stoppt ihn. Solange ein Band **„NICHT ÜBERWACHT“** ist, ertönt er ohne Fenster.

Unter **„Einstellungen“** › **„Überwachung und Alarme“** › **„Alarmsummer“**: **„Lautstärke“** (**„Leise“**, **„Mittel“**, **„Laut“**), **„Testton“** und **„10 Min still“**. Die Stille schaltet nur den Summer stumm: Das Fenster öffnet sich trotzdem.

> **WARNUNG**
>
> **Die eigene Lautstärke des Tablets setzt den Summer außer Kraft.** Bei Lautstärke null öffnet sich das Fenster lautlos. Halten Sie die Lautstärke oben und achten Sie auf **„Lautstärke aus“**.

> **SIEHE AUCH**
>
> [So funktionieren Servicecodes](codes.md) · [Balkenfarben](bar-colours.md) · [Meldungen über dem Bildschirm](screen-messages.md)
