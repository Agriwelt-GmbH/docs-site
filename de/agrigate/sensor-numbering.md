---
title: Die Sensoren nummerieren
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/sensor-numbering.html
---

# Die Sensoren nummerieren

Geben Sie einem Sensor über das Gateway die Nummer seiner Reihe — bei der Inbetriebnahme einer Sämaschine und beim Austausch eines Sensors auf dem Feld.

Jeder Sensor an der Sensorleitung antwortet unter seiner eigenen Nummer, und die App kennt eine Reihe an dieser Nummer. Ein neuer Sensor muss die Nummer seiner Reihe erhalten, bevor er überwacht wird. Die App erledigt das über das Gateway, auf einem Blatt mit zwei Zugängen:

- **„Einstellungen“** › **„Maschine“** › **„Sensoren nummerieren“** — für die Inbetriebnahme;
- das Reihenmenü › **„Sensor ersetzen“** — für eine Reihe auf dem Feld; die Nummer der Reihe ist bereits eingestellt.

Das Blatt hat oben die Liste **„Am Bus“**. Unten bleibt ein Feld stehen, das nicht mitscrollt: **„Sensor“**, **„Neue Nummer“** und die Taste **„Nr. zuweisen“**. **„Schließen“** steht in der Kopfzeile.

> **WICHTIG**
>
> **Solange das Blatt offen ist, überwacht das Gateway die Reihen nicht.** Beim Nummerieren kommt kein Reihenalarm. Erledigen Sie es bei stehender Maschine und schließen Sie das Blatt, wenn Sie fertig sind.

## Einen Sensor auf dem Feld ersetzen {#replace-a-sensor-in-the-field}

::: steps
1. Halten Sie die Maschine an. Schließen Sie den neuen Sensor anstelle des alten an; der alte muss von der Leitung getrennt sein, denn die Taste bleibt aus, solange er noch unter dieser Nummer antwortet.

2. Öffnen Sie das Reihenmenü der Reihe (ihren Balken gedrückt halten) und tippen Sie auf **„Sensor ersetzen“**. Das Blatt **„Sensor ersetzen“** öffnet sich: Der neue Sensor erhält die Nummer dieser Reihe; das Maschinenprofil ändert sich nicht.

3. Unter **„Am Bus“** listet die App die Sensoren auf, die antworten, jeweils mit Nummer und Ort: **„Reihe 5“**, **„Dünger, Reihe 5“** oder **„außerhalb des Profils“**. Sensoren außerhalb des Profils stehen zuerst. Vor der ersten Antwort steht in der Liste **„suche…“**; ist kein Sensor an der Leitung, steht dort **„Kein Sensor am Bus.“** Ist er der einzige, wählt die App ihn selbst: **„Einziger Sensor außerhalb des Profils – von selbst gewählt.“** Andernfalls tippen Sie in der Liste auf den neuen Sensor.

4. Prüfen Sie **„Neue Nummer“** — es ist die Nummer der Reihe — und tippen Sie auf **„Nr. zuweisen“** mit der Nummer.

5. Das Blatt zeigt die Schritte: **„sende den Befehl an die Brücke…“**, **„Sensor gefunden“**, **„Nummer geschrieben“**, **„dauerhaft gespeichert“**, **„Neustart, warte auf Antwort…“**, **„antwortet unter der neuen Nummer“**. Fertig ist es erst, wenn der Sensor unter seiner neuen Nummer antwortet: **„Fertig“** mit der alten und der neuen Nummer und **„Sensor antwortet“**.

6. Tippen Sie auf **„Schließen“**.
:::

## Eine Sämaschine in Betrieb nehmen {#commission-a-seeder}

Öffnen Sie **„Sensoren nummerieren“** und nummerieren Sie die Sensoren einzeln: Wählen Sie in der Liste **„Am Bus“** einen Sensor, stellen Sie **„Neue Nummer“** ein und tippen Sie auf **„Nr. zuweisen“**. Die Nummer kann beliebig von 1 bis 199 sein; stellen Sie sie mit den Tasten Minus und Plus ein. Die App bietet zuerst die erste freie Reihe des Profils an oder, wenn alle Reihen vergeben sind, die Nummer nach der letzten Reihe. Unter der Nummer nennt der Hinweis den Ort dieser Nummer: **„Reihe 5“**, **„Dünger, Reihe 5“** oder **„außerhalb des Profils (Reihen: 24)“**. Sensoren lassen sich an der vollen Sensorleitung nummerieren, solange jeder eine eigene Nummer hat.

> **HINWEIS**
>
> **Schließen Sie neue Sensoren einzeln an.** Antworten zwei Sensoren unter derselben Nummer, kann das Gateway sie nicht unterscheiden und bricht mit **„Mehr als ein Gerät im Netz gefunden!“** ab.

## Wenn es nicht funktioniert {#when-it-does-not-work}

| Das Blatt sagt | Was zu tun ist |
| --- | --- |
| **„Adresse belegt“** (die Taste bleibt aus) | Ein anderer Sensor antwortet bereits unter dieser Nummer. Wählen Sie eine freie Nummer oder nummerieren Sie zuerst den Sensor um, der sie belegt. [Code 920](codes-9-setup.md#c920) |
| **„Der Sensor hat diese Nummer bereits“** | Nichts zu tun. |
| **„Nummer außerhalb 1…199“** | Stellen Sie eine Nummer von 1 bis 199 ein. [Code 916](codes-9-setup.md#c916) |
| **„Sensor in der Liste ‚Am Bus‘ wählen“** | Tippen Sie in der Liste auf einen Sensor. |
| **„Adresse: 7 belegt!“** (mit der gewählten Nummer) | Das Gateway hat die Nummer als vergeben gefunden. Wählen Sie eine freie Nummer. [Code 920](codes-9-setup.md#c920) |
| **„Keine Verbindung“** und **„beim Schritt:“** … | Der Sensor hat bei diesem Schritt aufgehört zu antworten: **„Sensorsuche“**, **„Nummer schreiben“**, **„Speichern“**, **„Neustart“** oder **„Prüfung unter der neuen Nummer“**. Prüfen Sie seinen Stecker und die Stromversorgung der Sensorleitung und versuchen Sie es erneut. [Code 913](codes-9-setup.md#c913) |
| **„Mehr als ein Gerät im Netz gefunden!“** | Lassen Sie nur einen neuen Sensor angeschlossen. [Code 914](codes-9-setup.md#c914) |
| **„Brücke belegt: es fließt noch Korn. Sämaschine anhalten und in einer Minute wiederholen.“** | Halten Sie die Sämaschine an und warten Sie eine Minute. [Code 912](codes-9-setup.md#c912) |
| **„Brücke hat nicht geantwortet“** | Das Gateway hat 30 Sekunden lang nicht geantwortet. Prüfen Sie die Verbindung zum Gateway und versuchen Sie es erneut. |
| **„Es fließt noch Korn – die Brücke hört den Bus nicht ab. Sämaschine anhalten.“** | Halten Sie die Sämaschine an. [Code 912](codes-9-setup.md#c912) |
| **„Die Brücke ist mit etwas anderem beschäftigt, bitte warten.“** | Warten Sie und versuchen Sie es erneut. [Code 917](codes-9-setup.md#c917) |
| **„Fehler #“** und eine Zahl | Siehe [9xx · Setup-Antworten des Gateways](codes-9-setup.md). |

**„Sensoren nummerieren“** und **„Sensor ersetzen“** sind ausgegraut, solange die Verbindung zum Gateway unterbrochen ist.
