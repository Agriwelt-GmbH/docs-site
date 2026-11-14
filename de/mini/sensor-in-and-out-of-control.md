---
title: Sensor in die Überwachung nehmen oder aus ihr nehmen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/sensor-in-and-out-of-control.html
---

# Sensor in die Überwachung nehmen oder aus ihr nehmen

Schalten Sie die Überwachung eines einzelnen Sensors, Motors oder Aktuators im Sensoreinstellmodus aus und ein — was das Panel fragt und wann es verlangt, die Statistik zu löschen.

Ein Sensor, der **aus der Überwachung** genommen ist, wird nicht mehr überwacht: Er löst keine Alarme aus, und seine Anzeige zeigt das blinkende Zeichen für nicht überwacht. Tun Sie das nur, um mit einem defekten Sensor weiterzuarbeiten, bis er repariert ist — und nehmen Sie ihn danach wieder in die Überwachung.

> **WICHTIG**
>
> **Ein Sensor außerhalb der Überwachung ist blind, nicht ruhig.** Nichts an dieser Reihe oder diesem Gerät wird mehr überwacht. Ein Motor außerhalb der Überwachung wird auch nicht angetrieben: Seine Reihe wird nicht besät.

::: steps
1. Halten Sie auf dem Startbildschirm **„MENU“** gedrückt, bis ein Gerät auf weißem Grund erscheint. Das Panel ist jetzt im Sensoreinstellmodus.

   ![Der Startbildschirm im Sensoreinstellmodus, die Geschwindigkeitsanzeige gewählt.](figures/sensor-mode-enter)

2. Wählen Sie den Sensor mit **„UP“** und **„DOWN“**. In einem Diagramm bekommt die gewählte Säule einen grauen Hintergrund und eine weiße Nummer.

3. Drücken Sie **„MINUS“**, um ihn aus der Überwachung zu nehmen, oder **„PLUS“**, um ihn wieder in die Überwachung zu nehmen.

4. Das Panel fragt, ob Sie sicher sind. Drücken Sie **„MENU“** für **„Ja“** oder **„BACK“** für **„Nein“**; das grüne **„Ja“** und das rote **„Nein“** auf dem Bildschirm können Sie auch berühren.

   ![Die Frage, bevor die Überwachung eines Sensors ausgeschaltet wird.](figures/confirm-window)

5. Drücken Sie **„BACK“**, um den Sensoreinstellmodus zu verlassen.
:::

Die Frage kommt nur beim **ersten** Mal, solange Sie im Sensoreinstellmodus bleiben. Danach wirken **„PLUS“** und **„MINUS“** bei jedem weiteren Sensor ohne Rückfrage, sodass sich eine ganze Reihe von Sensoren schnell umschalten lässt. Haben Sie den Modus verlassen, fragt das Panel wieder.

Dasselbe funktioniert auf dem Bildschirm Sollmengen (**„MENU“** gedrückt halten) und, für Motoren und Fahrgassen-Aktuatoren, auf dem [Bildschirm Motoren](motors-screen.md). Die Überwachung des Geschwindigkeitssensors lässt sich nicht ausschalten.

## Wenn die Statistik gelöscht werden muss {#when-the-statistics-must-be-erased}

Enthält das aktive Feld bereits Daten und ändert die Umschaltung die Menge der ausgebrachten Produkte — möglich bei Motoren in den Modi **„Durchfluss“** und **„Hybrid“** —, verlangt das Panel zuerst, **die Statistik des aktiven Feldes zu löschen**. **„Ja“** löscht sie endgültig; auf der Stufe „Fahrer“ verlangt es außerdem den Code einer höheren Zugriffsstufe. Um die Daten zu behalten, wählen Sie zuerst ein leeres Feld — siehe [Neues Feld beginnen](start-a-new-field.md).

## Was das Kontextmenü bietet {#what-the-context-menu-offers}

Im Sensoreinstellmodus öffnet **„MENU“** das Kontextmenü des gewählten Geräts: seinen Informationsbildschirm und seine Parameter, je nach Zugriffsstufe. Die Parameter jedes Sensors stehen in den [Sensoreinstellungen](sensor-settings.md).
