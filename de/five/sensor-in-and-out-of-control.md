---
title: Sensor in die Überwachung nehmen oder herausnehmen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/sensor-in-and-out-of-control.html
---

# Sensor in die Überwachung nehmen oder herausnehmen

Das Panel einen Sensor nicht mehr überwachen lassen — eine abgeschaltete Sektion, ein defekter Sensor — und ihn später wieder aufnehmen.

Ein Sensor **außerhalb der Überwachung** wird nicht überwacht: Das Panel löst keinen Alarm über ihn aus, was er auch meldet. Nehmen Sie einen Sensor aus der Überwachung, wenn seine Sektion absichtlich außer Arbeit ist oder wenn der Sensor defekt ist und Sie das Feld zu Ende bringen müssen. Nehmen Sie ihn so bald wie möglich wieder auf.

## Einen Sensor aus der Überwachung nehmen {#take-a-sensor-out-of-control}

::: steps
1. **Berühren und halten Sie auf dem Startbildschirm** den Sensor — seine Säule im Diagramm oder sein Symbol. Sein Kontextmenü öffnet sich.

   ![Das Kontextmenü eines Kornsensors.](figures/five-ctx-seed)

2. Tippen Sie **„Disable control“** (Überwachung ausschalten) an, um es zu wählen, und tippen Sie es erneut an.

3. Beim ersten Mal in einer Sitzung fragt das Panel **„Are you sure that you want disable control?“** (Sind Sie sicher, dass Sie die Überwachung ausschalten wollen?). Berühren Sie **„Yes“** (Ja). Eine Berührung außerhalb des Fensters bricht ab.

   ![Die Frage, bevor die Überwachung ausgeschaltet wird.](figures/five-question-disable-control)

4. Die Säule wird weiß mit **!** (ein Symbol im Wechsel mit einem weißen [!]). Der Sensor wird nicht mehr überwacht.
:::

## Ihn wieder in die Überwachung nehmen {#take-it-back-into-control}

Gehen Sie genauso vor und wählen Sie **„Enable control“** (Überwachung einschalten). Beim ersten Mal in einer Sitzung fragt das Panel **„Are you sure that you want enable control?“**; bestätigen Sie mit **„Yes“**. Ein Kornsensor, der wieder in die Überwachung genommen wurde, zeigt einige Sekunden ein gelbes **?**, während er seine Einstellungen erhält.

> **WICHTIG**
>
> **Ein abgeschalteter Sensor ist blind, nicht still.** Nichts über ihn wird gemeldet, wie falsch er auch läuft.

## Wenn die Statistik gelöscht werden muss {#when-the-statistics-must-be-erased}

Bei manchen Sensoren fragt das Panel zuerst, ob die Statistik des aktiven Schlags gelöscht werden soll: Es meldet **„Need to erase data, for selected field!“** (Daten des gewählten Schlags müssen gelöscht werden!) und fragt erneut.

- **„Yes“** löscht die Statistik des aktiven Schlags und ändert die Überwachung. Auf der Fahrerebene fragt das Panel zuerst nach der PIN einer höheren Ebene; eine falsche PIN zeigt **„Invalid PIN“** (Ungültige PIN), und nichts ändert sich.
- **„No“** (Nein) lässt beides, wie es ist.

Der Geschwindigkeitssensor lässt sich nicht aus der Überwachung nehmen — sein Kontextmenü hat keinen solchen Eintrag. Motoren nehmen Sie auf dieselbe Weise aus der Überwachung, von ihrer Kachel auf dem [Motorenbildschirm](motors-screen.md) oder mit den Pfeilen auf dem [zweiten Startbildschirm](second-home-screen.md). Was die vier Kombinationen von Überwachung und Produktausbringung bedeuten: [Die vier Zustände einer Sektion](section-states.md#the-four-states-of-a-section).
