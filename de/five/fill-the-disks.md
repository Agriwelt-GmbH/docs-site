---
title: Scheiben mit Saatgut füllen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/fill-the-disks.html
---

# Scheiben mit Saatgut füllen

Die Saatgutscheiben eines Einzelkornsägeräts mit Dosierermotoren drehen, bis jede Scheibe Saatgut trägt, damit die Aussaat ab dem ersten Meter beginnt — wie Sie es ausführen und das Ergebnis lesen.

Das gilt nur für Einzelkornsägeräte mit **elektrischen Saatgut-Dosierermotoren** im Überwachungsmodus **„Precise“** (Einzelkorn). Ohne Motoren im Profil oder in einem anderen Modus wird der Menüeintrag nicht angezeigt.

Werden die Scheiben von Elektromotoren angetrieben, stehen sie leer, bis die Motoren laufen. Fahren Sie mit leeren Scheiben los, bekommen die ersten Meter jeder Reihe nichts: Jede Scheibe muss erst Körner aufnehmen und bis zum Abwurfpunkt tragen. Das Füllen dreht die Scheiben im Stand, damit die Aussaat ab dem ersten Meter beginnt.

> **WARNUNG**
>
> **Die Scheiben drehen sich, während die Maschine steht.** Achten Sie vor dem Start darauf, dass sich niemand in der Nähe der Dosiereinheiten, der Dosierwellen oder des Antriebs aufhält. Die Scheiben starten gemeinsam, und jede dreht sich bis zu etwa zwanzig Sekunden weiter. Aus der Kabine sind die Dosiereinheiten nicht zu sehen.

::: steps
1. Halten Sie die Maschine an. Der Eintrag wird nur angezeigt, solange die Maschine **steht**.

2. Tippen Sie auf dem Startbildschirm mit **zwei Fingern**. Das Hauptmenü öffnet sich mit bereits gewähltem **„Fill the disks with seeds“** (Scheiben mit Saatgut füllen); tippen Sie es noch einmal an.

   ![Das Hauptmenü mit gewähltem Eintrag „Fill the disks with seeds“.](figures/five-main-menu)

3. Das Panel fragt **„Are you sure?“** (Sind Sie sicher?). Berühren Sie **„Yes“** (Ja). **„No“** (Nein) oder eine Berührung außerhalb des Fensters bricht ab.

   ![Die Frage, bevor sich die Scheiben drehen.](figures/five-fill-confirm)

4. Beobachten Sie die Kacheln. Jeder Motor dreht seine Scheibe, bis der Kornsensor seiner Reihe das erste Korn registriert. Am Ende piept das Panel dreimal und zeigt **„Operation complete.“** (Vorgang abgeschlossen.)

5. Berühren Sie **„Close“** (Schließen), um zum Startbildschirm zurückzukehren.
:::

Um vor dem Ende abzubrechen, berühren Sie **„Cancel“** (Abbrechen): Die Motoren halten sofort an und gehen zurück in die Aussaatüberwachung.

## Den Bildschirm lesen {#reading-the-screen}

::: {.anatomy fig="five-fill-screen"}
1. **Grüne Kachel.** Fertig: Der Kornsensor hat ein Korn registriert, die Scheibe ist gefüllt.
2. **Dunkelrote Kachel.** Fehlgeschlagen: Die Scheibe ließ sich nicht füllen. Die Motornummer ist hellrot.
3. **Buchstaben für den Grund.** Warum die Kachel fehlschlug — siehe die Tabelle unten.
4. **„Operation complete.“** Jeder Motor ist fertig.
5. **„Close“.** Führt zurück zum Startbildschirm. Solange der Vorgang läuft, steht auf dieser Taste **„Cancel“**.

Das Ende des Vorgangs an einem Einzelkornsägerät mit acht Motoren.
:::

| **Kachel** | **Zustand** |
| --- | --- |
| Dunkelgrau | Wartet, bis sie an der Reihe ist. Bis zu acht Motoren laufen gleichzeitig; die übrigen warten. |
| Gelb | Läuft: Die Scheibe dreht sich. |
| Grün | Fertig. |
| Dunkelrot | Fehlgeschlagen. |

Jeder Motor dreht seine Scheibe mit **4 U/min der angetriebenen Welle**. Wird innerhalb von **1,25 Umdrehungen — etwa 19 Sekunden —** kein Korn registriert, wird dieser Motor angehalten und als fehlgeschlagen markiert. Ein Motor, der sich bereits im Alarmzustand befindet, wird sofort als fehlgeschlagen markiert. Steht der Düngerüberwachungsmodus ebenfalls auf „Precise“, werden die Düngermotoren auf dieselbe Weise gefahren.

> **HINWEIS**
>
> **Solange die Scheiben gefüllt werden, werden Alarmfenster zurückgehalten.** Das Panel hebt seine Zugriffsebene für die Dauer des Vorgangs an und kehrt am Ende auf Ihre Ebene zurück.

## Buchstaben auf einer fehlgeschlagenen Kachel {#letters-on-a-failed-tile}

Die Farbe des Buchstabens ist so wichtig wie der Buchstabe: **Rot bedeutet eine Störung, Weiß bedeutet aus der Überwachung genommen.**

| **Buchstabe** | **Bedeutung** |
| --- | --- |
| **m** rot | Eine Störung des elektrischen Dosierermotors während des Vorgangs. |
| **m** weiß | Der Motor ist aus der Überwachung genommen und kann nicht laufen. |
| **g** rot | Der Kornsensor hat kein Korn registriert, während sich die Scheibe drehte. |
| **s** rot | Eine Störung des Kornsensors während des Vorgangs. |
| **s** weiß | Der Kornsensor ist aus der Überwachung genommen. |

Steht der **Kornsensor** außerhalb der Überwachung, kann das Panel die Scheibe nicht prüfen. Ein betriebsbereiter Motor dreht sie dennoch etwa eineinviertel Umdrehungen, die Scheibe wird in der Praxis also gefüllt — aber das Panel meldet diesen Motor als fehlgeschlagen, weil es nie ein Korn gesehen hat.
