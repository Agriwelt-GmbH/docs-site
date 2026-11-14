---
title: Sensor in die Überwachung nehmen oder herausnehmen
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/sensor-in-and-out-of-control.html
---

# Sensor in die Überwachung nehmen oder herausnehmen

Das Panel einen Sensor nicht mehr überwachen lassen — eine abgeschaltete Sektion, ein defekter Sensor — und ihn später wieder aufnehmen.

Ein Sensor **außerhalb der Überwachung** wird nicht überwacht: Das Panel löst keinen Alarm für ihn aus, was auch immer er meldet. Nehmen Sie einen Sensor aus der Überwachung, wenn seine Sektion absichtlich außer Betrieb ist oder wenn der Sensor defekt ist und Sie das Feld zu Ende bringen müssen. Nehmen Sie ihn so bald wie möglich wieder auf.

## Einen Sensor aus der Überwachung nehmen {#take-a-sensor-out-of-control}

::: steps
1. **Berühren und halten** Sie auf dem Startbildschirm den Sensor — seine Säule im Diagramm oder sein Symbol. Sein Kontextmenü öffnet sich.

   ![Das Kontextmenü eines Kornsensors.](figures/one-ctx-seed-sensor)

2. Wählen Sie mit **„UP“** / **„DOWN“** den Punkt **„Überwachung aus“** und drücken Sie **„MENU“**, oder berühren Sie den Punkt.

3. Das Panel fragt **„Überwachung wirklich ausschalten?“**. Berühren Sie **„Ja“** oder drücken Sie **„PLUS“**.

   ![Die Bestätigung, bevor die Überwachung ausgeschaltet wird.](figures/one-question-disable-control)

4. Die Säule wird weiß mit **!** (ein Symbol wechselt mit einem weißen [!]). Der Sensor wird nicht mehr überwacht.
:::

## Ihn wieder in die Überwachung nehmen {#take-it-back-into-control}

Gehen Sie ebenso vor und wählen Sie **„Überwachung ein“**. Das Panel fragt **„Überwachung wirklich einschalten?“**; bestätigen Sie mit **„Ja“**. Ein Kornsensor, der wieder in die Überwachung genommen wurde, zeigt einige Sekunden lang ein gelbes **?**, während er seine Einstellungen erhält.

> **WICHTIG**
>
> **Ein ausgeschalteter Sensor ist blind, nicht ruhig.** Es wird nichts über ihn gemeldet, so falsch er auch läuft.

## Wenn die Statistik gelöscht werden muss {#when-the-statistics-must-be-erased}

Bei manchen Sensoren verlangt das Panel zuerst, die Statistik des aktiven Feldes zu löschen: Es meldet **„Daten für gewähltes Feld müssen gelöscht werden!“** und fragt nochmals. **„Ja“** löscht die Statistik des aktiven Feldes — auf der Ebene „Fahrer“ nur nach Eingabe der PIN der Ebene „Agronom“ — und ändert die Überwachung; **„Nein“** lässt beides, wie es ist.

Der Geschwindigkeitssensor kann nicht aus der Überwachung genommen werden. Motoren werden auf dieselbe Weise aus der Überwachung genommen, von ihrer Kachel auf dem [Bildschirm Motoren](motors-screen.md) oder mit den Pfeilspitzen auf dem [zweiten Startbildschirm](second-home-screen.md). Was die vier Kombinationen aus Überwachung und Produktausbringung bedeuten: [Die vier Zustände einer Sektion](section-states.md#the-four-states-of-a-section).
