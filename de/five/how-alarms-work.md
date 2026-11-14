---
title: So arbeiten Alarme
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/how-alarms-work.html
---

# So arbeiten Alarme

Wann der Hectare 5 einen Alarm auslöst, was das Alarmfenster zeigt, wie Sie es per Touch schließen, welche Störungen ohne Fenster ertönen und wie Sie die Alarmthemen dieser Anleitung benutzen.

Ein Alarm ist ein Fenster, das sich mit einem Alarmton über den Arbeitsbildschirm legt. Es teilt Ihnen mit, dass ein Gerät — ein Sensor, ein Aktuator, ein Motorcontroller — oder das System als Ganzes eine Störung festgestellt hat. Die Alarmthemen dieses Abschnitts sind nach dem Gerät geordnet, das den Alarm auslöst. **Suchen Sie nach den Wörtern, die Sie auf dem Bildschirm sehen**, nicht nach einer Beschreibung davon. Die Alarmtexte erscheinen am Hectare 5 auf Englisch; sie stehen hier deshalb in englischer Schreibweise, mit der deutschen Bedeutung daneben.

## Wann das Panel einen Alarm auslöst {#when-the-panel-raises-an-alarm}

Eine Störung wird nicht in dem Moment gemeldet, in dem sie auftritt. **Die Bedingung muss ununterbrochen für die bei „Alarm delay“ (Alarmverzögerung) eingestellte Zeit bestehen, bevor sich das Alarmfenster öffnet.**

| **Einstellung** | **Wert** |
| --- | --- |
| Wo sie eingestellt wird | Menü **„Settings“** (Einstellungen), Punkt **„Alarm delay“**, auf der Ebene **„Operator“** (Fahrer). Siehe [Das Menü Settings](settings-menu.md). |
| Bereich | **2 bis 20 Sekunden**, in Schritten von 1 Sekunde. |
| Standard | **3 Sekunden.** Ein Wert außerhalb des Bereichs wird von selbst auf den Standardwert zurückgesetzt. |

Eine kurze Verzögerung lässt das Panel schnell reagieren, aber auch auf kurze Störungen — einen einzelnen Stoß, eine kurze Lücke im Kornfluss. Eine lange Verzögerung hält den Bildschirm ruhig, doch eine echte Störung kann bis zu zwanzig Sekunden bestehen, bevor Sie davon erfahren.

> **TIPP**
>
> **Alarmiert das System auf unebenem Feld zu oft, erhöhen Sie zuerst „Alarm delay“.** Ändern Sie die Sensoreinstellungen erst, wenn eine längere Verzögerung nicht hilft.

Zwei Fälle folgen der Verzögerung nicht:

- **Verlorene Kommunikation** wird in Abfragen gezählt, nicht in Sekunden. **„Connection lost“** (Verbindung verloren) erscheint nach **drei Abfragen in Folge** ohne Antwort des Geräts.
- **Unmittelbar nach dem Einrichten eines Sensors** werden seine Alarme für eine kurze Sperrzeit nicht verarbeitet. Das verhindert eine Flut von Alarmen, während ein Gerät konfiguriert wird.

## Das Alarmfenster {#the-alarm-window}

::: {.anatomy fig="five-alarm-window"}
1. **„FAILURE!“** (Störung) — der Titel jedes Alarmfensters, auf einem roten Balken, gleich welche Störung vorliegt. Er ist nicht die Störung selbst.
2. **Der Alarmtext** — die Störung. Schlagen Sie ihn unter diesem Text in den Alarmthemen nach.
3. **Die Geräteart**, die den Alarm auslöst — hier ein Behältersensor. Derselbe Text kann von verschiedenen Geräten kommen; diese Zeile sagt Ihnen, von welchem.
4. **Die Nummer des Geräts** — hier Behälter 2. Lösen mehrere Geräte derselben Art denselben Alarm aus, teilen sie sich ein Fenster und werden zusammen aufgelistet, zum Beispiel **#3-5,8**.
5. **„Close“** (Schließen) — schließt diesen Alarm. [Unten](#closing-an-alarm).

Das Alarmfenster eines leeren Behälters.
:::

Ein Überstromalarm eines Motors ergänzt eine Zeile mit dem Strom, den der Controller gemessen hat, in Ampere. Die Alarme des Panels selbst — zum Beispiel **„User is Agronomist!“** — haben keine Gerätezeile; ihr Text beginnt mit der Zeile **„HOME - close message“** (HOME — Meldung schließen). Sie werden wie jeder andere Alarm mit **„Close“** geschlossen.

## Einen Alarm schließen {#closing-an-alarm}

**Tippen Sie im Fenster auf „Close“.** Dieser Alarm schließt sich, und der Ton verstummt. Warten weitere Alarme, öffnet sich der nächste. **Nichts anderes schließt ein Alarmfenster** — Tippen an anderer Stelle, Wischen und das Dreifingertippen werden ignoriert, solange es geöffnet ist.

Das Schließen eines Fensters behebt die Störung nicht. Die Alarme eines Geräts, die noch aktiv sind, werden auf seinem Statusbildschirm gezählt — siehe [Der Sensor-Statusbildschirm](sensor-status-screen.md).

## Auf den höheren Zugriffsebenen sind Alarme verborgen {#alarms-are-hidden-at-the-higher-access-levels}

Auf den Ebenen **„Agronomist“** (Agronom) und **„Service“** (Service) werden keine Alarmfenster angezeigt — abgesehen von der einen Warnung, die das mitteilt, [User is Agronomist](alarms-access-level.md) —, und auch die Störungen ohne Fenster bleiben stumm. Die Alarme gehen nicht verloren: Sie warten. Kehren Sie zu **„Operator“** zurück, verwirft das Panel die, die sich erledigt haben, und zeigt die, die noch zutreffen, nacheinander. Siehe [Zugriffsebenen](access-levels.md).

## Alarme ohne Fenster {#alarms-without-a-window}

Zwei Störungen werden nicht als Fenster angezeigt, weil Sie den Arbeitsbildschirm sehen müssen, während Sie sie beheben. Auf der Ebene **„Operator“** ertönt der Alarmton, solange sie bestehen und kein Alarmfenster offen ist:

- **„SLOWER“** (langsamer) oder **„FASTER“** (schneller) — die Fahrgeschwindigkeit liegt außerhalb der Grenzen, die für den Geschwindigkeitssensor eingestellt sind. Das Geschwindigkeitsfeld zeigt das Wort. Siehe [Anzeigen](indicators.md#speed).
- **„NOT UNDER CONTROL“** (Nicht unter Überwachung) — Reihen laufen unter der Überwachungslinie ihres Diagramms. Siehe [Das Sektionsdiagramm](section-diagram.md#the-line-rows-under-it-are-not-under-control).

## Wie die Alarmthemen aufgebaut sind {#how-the-alarm-topics-are-written}

Jeder Alarm hat eine eigene Überschrift mit dem Text genau wie auf dem Bildschirm; hat die Meldung am Panel zwei Zeilen, werden beide Zeilen angegeben. Darunter: was das Panel erkannt hat und was zu prüfen ist, in der Reihenfolge, in der ein Mechaniker prüft — zuerst die schnellen Prüfungen am Panel, dann die Maschine, dann das Gerät selbst.

> **HINWEIS**
>
> Beheben die Prüfungen die Störung nicht, wenden Sie sich an den Service.
