---
title: Scheiben mit Korn füllen
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/fill-the-disks.html
---

# Scheiben mit Korn füllen

Die Saatscheiben eines Einzelkornsägeräts mit Dosiermotoren drehen, bis jede Scheibe Saatgut trägt, damit die Aussaat vom ersten Meter an beginnt — wie Sie es starten und das Ergebnis lesen.

Das gilt nur für Einzelkornsägeräte mit **Elektromotoren der Dosierer** für Saatgut im Überwachungsmodus **„Einzelkorn“**. Sind im Profil keine Motoren eingetragen oder ist ein anderer Modus eingestellt, wird der Menüpunkt nicht angezeigt.

Werden die Scheiben von Elektromotoren angetrieben, stehen sie leer, bis die Motoren laufen. Fahren Sie mit leeren Scheiben los, erhält jede Reihe auf den ersten Metern nichts: Jede Scheibe muss zuerst Körner aufnehmen und bis zum Abwurfpunkt tragen. Beim Füllen drehen sich die Scheiben, während die Maschine steht, damit die Aussaat vom ersten Meter an beginnt.

> **WARNUNG**
>
> **Die Scheiben drehen sich, während die Maschine steht.** Vergewissern Sie sich vor dem Start, dass sich niemand in der Nähe der Dosiereinheiten, der Dosierwellen oder des Antriebs aufhält. Jede Scheibe läuft gleichzeitig an und dreht sich bis zu etwa zwanzig Sekunden lang. Von der Kabine aus sind die Dosiereinheiten nicht zu sehen.

::: steps
1. Halten Sie die Maschine an. Der Punkt wird nur angezeigt, solange die Maschine **steht**.

2. Drücken Sie auf dem Startbildschirm **„MENU“**. Wählen Sie **„Scheiben mit Korn füllen“** und drücken Sie **„MENU“**.

   ![Das Hauptmenü mit gewähltem Punkt „Scheiben mit Korn füllen“.](figures/menu-main)

3. Das Panel fragt **„Sind Sie sicher?“**. Berühren Sie **„Ja“** oder drücken Sie **„PLUS“**. **„Nein“**, **„MINUS“** oder **„BACK“** bricht ab.

   ![Die Bestätigung, bevor sich die Scheiben drehen.](figures/one-fill-01-confirm)

4. Beobachten Sie die Kacheln. Jeder Motor dreht seine Scheibe, bis der Kornsensor seiner Reihe das erste Korn registriert. Am Ende piept das Panel dreimal und zeigt **„Vorgang beendet.“**

5. Berühren Sie **„Schließen“** oder drücken Sie **„BACK“**, um zum Startbildschirm zurückzukehren.
:::

Um vor dem Ende abzubrechen, berühren Sie **„Abbrechen“** oder drücken Sie **„BACK“**: Die Motoren halten sofort an, und ihre Steuerung geht zur Aussaatlogik zurück.

## Den Bildschirm lesen {#reading-the-screen}

::: {.anatomy fig="one-fill-02-screen"}
1. **Grüne Kachel.** Fertig: Der Kornsensor hat ein Korn registriert, die Scheibe ist gefüllt.
2. **Dunkelrote Kachel.** Fehlgeschlagen: Die Scheibe konnte nicht gefüllt werden. Die Motornummer ist hellrot.
3. **Buchstaben für den Grund.** Warum die Kachel fehlgeschlagen ist — siehe die Tabelle unten. Hier **m k**.
4. **„Vorgang beendet.“** Alle Motoren sind fertig.
5. **„Schließen“.** Kehrt zum Startbildschirm zurück. Solange der Vorgang läuft, steht auf dieser Taste **„Abbrechen“**.

Das Ende des Vorgangs an einem Einzelkornsägerät mit acht Motoren: Motor 1 gefüllt, die Motoren 2 bis 8 fehlgeschlagen.
:::

| **Kachel** | **Zustand** |
| --- | --- |
| Dunkelgrau | Wartet, bis sie an der Reihe ist. Bis zu acht Motoren laufen gleichzeitig; die übrigen warten. |
| Gelb | Läuft: Die Scheibe dreht sich. |
| Grün | Fertig. |
| Dunkelrot | Fehlgeschlagen. |

Jeder Motor dreht seine Scheibe mit **4 U/min der angetriebenen Welle**. Wird innerhalb von **1,25 Umdrehungen — etwa 19 Sekunden —** kein Korn registriert, wird dieser Motor angehalten und als fehlgeschlagen markiert. Ein Motor, der sich bereits im Alarmzustand befindet, wird sofort als fehlgeschlagen markiert.

## Buchstaben auf einer fehlgeschlagenen Kachel {#letters-on-a-failed-tile}

Die Farbe des Buchstabens ist ebenso wichtig wie der Buchstabe: **Rot bedeutet eine Störung, Weiß bedeutet aus der Überwachung genommen.**

![Eine fehlgeschlagene Kachel in Nahaufnahme.](figures/one-fill-tile-red)

| **Buchstabe** | **Bedeutung** |
| --- | --- |
| **m** rot | Eine Störung des Elektromotors des Dosierers während des Vorgangs. |
| **m** weiß | Der Motor wurde aus der Überwachung genommen und kann nicht laufen. |
| **k** rot | Der Kornsensor hat kein Korn registriert, während sich die Scheibe drehte. |
| **s** rot | Eine Störung des Kornsensors während des Vorgangs. |
| **s** weiß | Der Kornsensor wurde aus der Überwachung genommen. |

Ist der **Kornsensor** aus der Überwachung genommen, kann das Panel die Scheibe nicht prüfen. Ein betriebsbereiter Motor dreht sie trotzdem etwa eineinviertel Umdrehungen, die Scheibe wird in der Praxis also gefüllt — aber das Panel meldet diesen Motor als fehlgeschlagen, weil es nie ein Korn gesehen hat.
