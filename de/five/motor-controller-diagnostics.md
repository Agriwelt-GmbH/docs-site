---
title: Diagnose der Motorcontroller
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/motor-controller-diagnostics.html
---

# Diagnose der Motorcontroller

Wie Sie auf dem Bildschirm Electric motors lesen, was ein Dosiermotor-Controller über sich meldet — Drehzahl, Fehlercode, Spannungen, Temperatur, Strom, Statusbits und Störungszähler — und wie Sie sich per Touch darin bewegen.

Der Bildschirm **Electric motors** (Elektromotoren) zeigt live, was ein Motorcontroller über sich meldet. Öffnen Sie ihn mit einem Zweifingertippen auf den Startbildschirm → **„Service“** (Service) → **„Electric motors“**, oder mit **„Electric motors“** im Kontextmenü eines Motors — beides auf der Ebene **„Agronomist“** (Agronom). Die Arbeitsansicht der Motoren ist ein anderer Bildschirm: [Motorbildschirm](motors-screen.md).

::: {.anatomy fig="five-motors-registers"}
1. **„Mode“** (Modus) — tippen Sie darauf, um die Seite zu wechseln: **„Registers“** (Register), dann **„Statistics“** (Statistik).
2. **„Motor #“** mit einer Nummer — welcher Motor angezeigt wird, hier Motor 1. Wischen Sie nach **rechts** für die nächste, nach **links** für die vorige Nummer.
3. **„Registers“** — der Name der Seite. Ein Universalcontroller hat zwei Registerseiten, **„Registers-1“** und **„Registers-2“**.
4. **Das Statuswort** — sechzehn Bits des Controllers; eine leuchtende (gelbe) Zelle ist ein gesetztes Bit.
5. **Die Legende der Bits** — die Nummer und der Name jedes Bits. [Tabelle unten](#the-status-bits).
6. **„Speed“** (Drehzahl) / **„Target speed“** (Solldrehzahl) — was die Welle tut gegenüber dem, was das Panel verlangt hat. Eine Lücke, die sich nicht schließt, ist das erste Zeichen für eine Last, die der Motor nicht tragen kann.
7. **„Error code“** (Fehlercode) / **„Act.posit.“** (Istposition) — die eigene Fehlernummer des Controllers ([Codes](motor-fault-codes.md)) und die Position, bei der er sich selbst zählt.
8. **„Volt.mot.,mV“** / **„Volt.elec.,mV“** (Spannung Motor / Elektronik, mV) — die Spannung am Motor und an der Elektronik in Millivolt. Eine Motorspannung weit unter der Elektronikspannung heißt, dass die Versorgung unter Last einbricht.
9. **„Temperat.,C“** / **„Current,mA“** (Temperatur, °C / Strom, mA) — die Temperatur des Controllers und der Strom, den er zieht. Vergleichen Sie den Strom mit **„I_hilo,A“**, das für diesen Motor eingestellt ist ([Motorcontroller konfigurieren](configure-motor-controllers.md)).

Die Seite **„Registers“** eines Motors im Stand.
:::

| **Geste** | **Was sie tut** |
| --- | --- |
| Tippen auf **„Mode“** | Nächste Seite. |
| Wisch nach rechts / links | Nächste / vorige Controllernummer. Die Nummern laufen von 1 bis 127 und beginnen dann von vorn; eine Nummer ohne Controller zeigt nichts Brauchbares. |
| Zweifingertippen | Das Menü: **„Change address“** (Adresse ändern), **„Configuration“** (Konfiguration) — siehe [Motorcontroller konfigurieren](configure-motor-controllers.md). |
| Dreifingertippen oder langes Wischen nach oben | Schließt den Bildschirm. |

## Die Statusbits {#the-status-bits}

| **Bit** | **Name** | **Bit** | **Name** |
| --- | --- | --- | --- |
| 0 | Enable | 8 | Toggle |
| 1 | Error | 9 | CmdTgl |
| 2 | Warn. | 10 | CmdErr |
| 3 | Moving | 11 | StpHalt |
| 4 | Reach | 12 | LimCur |
| 5 | Limit | 13 | LimVel |
| 6 | FolErr | 14 | LimPos |
| 7 | HomDone | 15 | LimSVel |

Die Legende wird auf jedem Panel auf Englisch gezeichnet, gleich welche Sprache eingestellt ist: Sie ist eine Bitzuordnung des Controllers, keine Meldung an den Fahrer.

## Die Störungszähler {#the-fault-counters}

![Die Seite Statistics eines Motors.](figures/five-motors-statistics)

Die Seite **„Statistics“** zeigt die Störungen, die dieser Motor **auf dem aktiven Schlag** gesammelt hat — sie gehören zur Schlagstatistik, nicht zum Motor:

| **Zähler** | **Was er zählt** |
| --- | --- |
| **„Jammed“** (Blockiert) | Der Rotor blieb stehen, und der Controller musste aufgeben oder zurückfahren. |
| **„Disconnects“** (Verbindungsabbrüche) | Der Controller antwortete nicht mehr. |
| **„Other“** (Sonstige) | Alles andere, was der Controller gemeldet hat. |
| **„In failure“** (In Störung) | Die Strecke in Metern, die dieser Motor im Störungszustand verbracht hat. |

Jeder Zähler ist **weiß bei null und rot, sobald er es nicht mehr ist**. Eine rote Zahl heißt nicht, dass der Motor jetzt gestört ist — sie heißt, dass er es irgendwo auf diesem Schlag war und das dort gesäte Saatgut einen Blick wert ist. Um einen anderen Schlag zu lesen, machen Sie ihn zuerst zum aktiven Schlag ([Statistikbildschirm](statistics-screen.md)).
