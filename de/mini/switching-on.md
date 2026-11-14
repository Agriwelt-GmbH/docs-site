---
title: Ein- und Ausschalten
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/switching-on.html
---

# Ein- und Ausschalten

Was der Hectare Mini nach dem Einschalten zeigt, mit welchem Bildschirm und welcher Zugriffsstufe er startet und wann Sie gefahrlos ausschalten können.

Nach dem Einschalten der Spannung erscheint ein Startbild mit dem Logo. Es bleibt stehen, bis das Panel alle angeschlossenen Geräte gefunden hat — einige Sekunden —, und wechselt dann zum ersten Arbeitsbildschirm.

![Das Startbild mit dem Logo.](figures/splash)

Das Logo auf dem Startbild hängt vom Lieferanten des Systems ab und kann vom Bild abweichen.

> **HINWEIS**
>
> **Bleibt das Startbild deutlich länger als üblich stehen,** wartet das Panel auf ein Gerät, das nicht antwortet. Sehen Sie sich die Alarme an, sobald der Arbeitsbildschirm erscheint — siehe [So arbeiten die Alarme](how-alarms-work.md).

## In welchem Zustand das Panel startet {#what-state-the-panel-starts-in}

- **Zugriffsstufe: „Fahrer“.** Nach jedem Einschalten steht das Panel auf der Stufe „Fahrer“, gleichgültig, welche Stufe zuvor eingestellt war. „Fahrer“ ist die einzige Stufe, auf der Alarmfenster angezeigt werden; Aus- und Einschalten ist deshalb auch der schnellste Weg zurück zum sicheren Arbeiten. Siehe [Zugriffsstufen](access-levels.md).
- **Der Startbildschirm** — mit einer Ausnahme: War der [Bildschirm Sollmengen](rate-control-screen.md) beim Ausschalten geöffnet, öffnet er sich wieder. Er ist der einzige Bildschirm, den das Panel sich merkt.
- **Arbeit angehalten, am Prüfstand.** Ist die Geschwindigkeitssimulation eingeschaltet und hat die Maschine Dosiermotoren, startet das Panel mit gesperrter Produktausbringung — siehe [Ausbringung von Hand sperren](lock-application-by-hand.md).

Die Version der Software, die Seriennummer des Panels und seine Hardwarekennung lassen sich jederzeit ablesen: Drücken Sie auf dem Startbildschirm **„MENU“** und wählen Sie den letzten Punkt des Hauptmenüs. **„BACK“** oder **„Schließen“** verlässt das Fenster.

## Ausschalten {#switching-off}

| **Was** | **Wann es gespeichert wird** |
| --- | --- |
| Einstellungen, Sollmengen, Alarmschwellen | Von selbst, etwa anderthalb Sekunden nach der letzten Änderung und der letzten Tastenberührung. |
| [Statistik](statistics-screen.md) des aktiven Feldes | Alle fünf Minuten und einige Sekunden nach dem Stillstand der Maschine. |
| Werte der [Aussaattabelle](table-screen.md) | Nie — sie gehören zur Arbeitssitzung und beginnen nach jedem Einschalten bei null. |

> **WICHTIG**
>
> **Halten Sie an, bevor Sie ausschalten, und warten Sie einige Sekunden.** Sonst fehlt das letzte Arbeitsstück in der Statistik, und ein kurz zuvor geänderter Wert wird möglicherweise nicht gespeichert.
