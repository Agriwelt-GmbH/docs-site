---
title: Profil und Verbindungen prüfen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/check-profile-and-connections.html
---

# Profil und Verbindungen prüfen

Die erste Prüfung nach dem Einbau eines Hectare Mini – stimmt das Profil mit der Maschine überein, antwortet jedes Gerät, wird jeder Sensor überwacht – als Ablauf mit dem, was der Bildschirm bei jedem Schritt zeigt.

Das Panel überwacht nur die Geräte, die sein **Profil** aufführt. Meist werden Systeme mit bereits eingerichtetem Profil geliefert; prüfen Sie trotzdem, bevor Sie einen Parameter einstellen, ob es zur Maschine passt und ob jedes Gerät antwortet. Die Prüfung des Profils erfordert die Ebene **„Service“**, die eine PIN verlangt – der Händler gibt sie für Ihr Panel heraus; siehe [Agronomen-Ebene aktivieren](enable-agronomist-level.md). Die beiden anderen Prüfungen brauchen keinen Code.

## 1. Profil prüfen {#check-the-profile}

::: steps
1. Schließen Sie alle Geräte an das Panel an und versorgen Sie sie gemäß dem Schaltplan im Datenblatt des Systems mit Strom.

2. Schalten Sie das Panel ein. Nach dem Logo erscheint der Startbildschirm.

3. Heben Sie die Zugriffsebene auf **„Service“** an: **„MENU“** → **„Einstell.“** → **„Benutzer“** → **„Service“**, **„MENU“**, PIN – wie in [Agronomen-Ebene aktivieren](enable-agronomist-level.md).

4. Drücken Sie **„BACK“**. Das Hauptmenü kehrt zurück, nun mit **„Service“**. Wählen Sie **„Service“** und drücken Sie **„MENU“**, wählen Sie dann **„Profil“** und drücken Sie **„MENU“**. Das Profilmenü öffnet sich.

   ![Der Weg zum Profil: Einstellungen mit der Ebene Service, das Hauptmenü, das Service-Menü, das Profilmenü.](figures/menu-to-profile)

5. Lesen Sie das Profilmenü von oben. Jeder Punkt ist eine Geräteart mit der Anzahl, die das Panel erwartet, zum Beispiel **„Kornsensoren“**; **„Geschw.“** zeigt, wie der Geschwindigkeitssensor angeschlossen ist: **„Bedienpanel“**, **„Eingangsmod.“** oder **„Eingangsmodul(2)“**. **„UP“** und **„DOWN“** gehen durch die Liste, die länger ist als der Bildschirm. Alle Punkte: [Das Profil](profile.md).

   ![Das Profilmenü.](figures/menu-profile)

6. Vergleichen Sie die Liste mit der Maschine und dem Schaltplan. Ändern Sie hier nichts: **„BACK“** verlässt das Profilmenü ohne zu speichern.

7. Gehen Sie zurück auf die Ebene **„Fahrer“**: Schalten Sie das Panel aus und wieder ein, wie in [Agronomen-Ebene aktivieren](enable-agronomist-level.md). Auf der Ebene **„Service“** zeigt das Panel keine Alarmfenster, und die nächste Prüfung braucht sie.
:::

Passt das Profil nicht zur Maschine, richten Sie es zuerst ein: [Profil einrichten](set-up-the-profile.md).

## 2. Prüfen, ob jedes Gerät antwortet {#check-that-every-device-answers}

Warten Sie auf dem Startbildschirm einige Sekunden. Erscheint kein Fenster **„Verbindung weg“**, hat das Panel alle Geräte des Profils gefunden.

![„Verbindung weg“ für Gebläsesensor 1.](figures/alarm-link-lost-fan)

Antworten mehrere Geräte einer Art nicht, listet ein Fenster alle ihre Nummern auf – hier die Drucksensoren 1 bis 3:

![„Verbindung weg“ für drei Drucksensoren.](figures/alarm-link-lost-pressure)

> **WICHTIG**
>
> **Ein Gerät, das nicht antwortet, wird nicht überwacht.** Prüfen Sie seinen Anschluss noch einmal anhand des Schaltplans und des Profils. Finden Sie die Ursache nicht, wenden Sie sich an den Service – siehe [Gerät antwortet nicht](alarms-any-device.md).

## 3. Prüfen, ob jeder Sensor überwacht wird {#check-that-every-sensor-is-under-control}

Ein Sensor **außer Überwachung** wird gar nicht überwacht. Seine Anzeige zeigt das blinkende graue Zeichen (nicht überwacht) oder **!!!!** anstelle des Wertes; unter einer Diagrammsäule zeigt sie ein weißes Feld mit **!** – siehe [Anzeigen](indicators.md).

![Der Behältersensor, der Gebläsesensor und Kornsensor 11 sind nicht überwacht.](figures/home-unmonitored)

Gibt es einen solchen Sensor, nehmen Sie ihn in die Überwachung:

::: steps
1. Halten Sie auf dem Startbildschirm **„MENU“** gedrückt, bis die Geschwindigkeitsanzeige einen weißen Hintergrund hat. Das Panel ist im Sensoreinstellmodus. Lassen Sie die Taste los.

   ![Der Sensoreinstellmodus, der Geschwindigkeitssensor ist gewählt.](figures/sensor-mode-enter)

2. Drücken Sie **„DOWN“** (oder **„UP“**), bis der nicht überwachte Sensor gewählt ist. Ein Kornsensor ist gewählt, wenn seine Nummer unter der Säule einen weißen Hintergrund hat.

   ![Der Gebläsesensor ist gewählt; Kornsensor 11 unter dem Diagramm ist gewählt.](figures/sensor-selected)

3. Drücken Sie **„PLUS“**. Das Panel fragt, ob Sie sicher sind; drücken Sie **„MENU“** für **„Ja“**. **„BACK“** antwortet mit **„Nein“**.

   ![Die Frage, bevor die Überwachung eines Sensors geändert wird.](figures/confirm-window)

4. Wiederholen Sie die Schritte 2 und 3 für jeden nicht überwachten Sensor. Solange Sie in diesem Modus bleiben, kommt die Frage nur beim ersten Mal.

5. Drücken Sie **„BACK“**, um den Sensoreinstellmodus zu verlassen.
:::

Die Überwachung eines Sensors einzuschalten heißt in dieser Anleitung, *einen Sensor in die Überwachung zu nehmen*. Mehr dazu: [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md).

## Das Ergebnis {#the-result}

Jeder Sensor muss überwacht werden, und keine Anzeige darf ein rotes Kreuz zeigen – das Zeichen für ein Gerät, das nicht antwortet.

Ist alles in Ordnung, zeigt der Startbildschirm jedes Gerät im normalen Grau, ohne rotes Kreuz und ohne das Zeichen für nicht überwacht:

![Alle Geräte antworten und werden überwacht.](figures/home-all-ok)

Machen Sie dann mit den Einstellungen weiter: [Inbetriebnahme](commissioning.md).
