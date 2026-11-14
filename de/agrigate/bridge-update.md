---
title: Das Gateway aktualisieren
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/bridge-update.html
---

# Das Gateway aktualisieren

Die Firmware des Gateways aus der App per Bluetooth aktualisieren — wann das Update angeboten wird, die Voraussetzungen, die drei Phasen und was jedes Ergebnis bedeutet.

Die Hectare-App bringt die Firmware für das Gateway mit. Hat die App eine neuere Version als die, die das Gateway ausführt, bietet sie das Update an. Das Update läuft per Bluetooth und dauert etwa 3 Minuten. Das Gateway schreibt die neue Firmware in einen freien Teil seines Speichers; die laufende Firmware bleibt unberührt und arbeitet weiter, bis die neue sich bewährt hat. Ihre Maschineneinstellungen (das Reihenprofil) werden durch das Update nicht gelöscht.

Öffnen Sie **„Einstellungen“** › **„Maschine“** › **„Brücke“** › **„Brücken-Update“**. Die Zeile **„Brücken-Update“** zeigt rechts die Version, die die App installieren kann; leer heißt, dass nichts zu installieren ist. Die Seite zeigt **„Version in der Brücke“** und **„Version in der App“**.

| Die Seite sagt | Bedeutung |
| --- | --- |
| **„Brücke aktualisieren auf“** und eine Version | Ein Update wird angeboten. |
| **„Die Brücke hat die neueste Version“** | Nichts zu tun. |
| **„Die Brücke ist nicht verbunden“** | Verbinden Sie zuerst: [Erste Verbindung mit dem Gateway](first-connection.md). |
| **„Die Brücke kann nicht über Bluetooth aktualisiert werden“** | Dieses Gateway kann kein Update aus der App annehmen. Fragen Sie Agriwelt. |

Die App bietet nur Firmware an, die für diese Gateway-Platine gemacht ist, und nur eine Version, die neuer ist als die, die das Gateway ausführt. Alles andere wird gar nicht angeboten.

## Das Update durchführen {#run-the-update}

::: steps
1. Halten Sie die Maschine an. Lassen Sie das Gateway eingeschaltet und Ihr Gerät — Tablet oder Telefon — nahe daran.

2. Tippen Sie auf **„Brücke aktualisieren auf“**. Die Voraussetzungen erscheinen unter **„Vor dem Update“**: **„Die Brücke ist eingeschaltet, das Gerät in ihrer Nähe.“** · **„Die Maschine steht: während des Updates nicht säen.“** · **„Dauert etwa 3 Minuten.“** · **„App nicht verlassen und den Bildschirm nicht sperren.“**

3. Tippen Sie auf **„Update starten“** (oder **„Abbrechen“**). Es folgen drei Phasen: **„Firmware-Übertragung“** mit einer Prozentzahl, **„Neustart der Brücke“**, **„Prüfung der neuen Firmware“**. Verlassen Sie die App nicht und gehen Sie nicht mit Ihrem Gerät weg. Der Bildschirm wird nicht dunkel, und die Zurück-Taste ist ausgeblendet, bis das Ergebnis erscheint.

4. Das Ergebnis erscheint mit seinem Code, zum Beispiel 804 · **„Brücke aktualisiert“**. Tippen Sie auf **„Fertig“**.
:::

Das ganze Update dauert 2 bis 2,5 Minuten: die Übertragung 1 bis 1,5 Minuten (57 Sekunden auf einem iPhone XS, 95 Sekunden auf einem iPad), der Neustart 12 bis 25 Sekunden, die Prüfung etwa 25 Sekunden.

## Nach dem Neustart {#after-the-restart}

Etwa 20 Sekunden nach dem Start der neuen Firmware prüft sich das Gateway selbst — sein Funkmodul, die Sensorleitung, seine Einstellungen und seine Gerätebeschreibung — und behält die neue Firmware nur, wenn alles in Ordnung ist. Besteht sie die Prüfung nicht, startet die App das Gateway nach 50 Sekunden noch einmal neu, und es kehrt zur vorherigen Firmware zurück (Code 805); das dauert etwa 2,5 Minuten. Ist in diesem Moment kein Gerät mit der App in der Nähe, arbeitet das Gateway auf der unbestätigten Firmware weiter, bis es aus- und wieder eingeschaltet wird, und kehrt dann von selbst zur vorherigen zurück.

Während des Updates werden die Reihen nicht überwacht: Die App löst kein **„Verbindung zur Brücke verloren“** aus, und der Summer schweigt.

## Die Ergebnisse {#the-results}

| Ergebnis | Was zu tun ist |
| --- | --- |
| **804 · „Brücke aktualisiert“** | Nichts. Das Gateway läuft mit der neuen Firmware und arbeitet wie zuvor. |
| **805 · „Die Brücke ist zur vorherigen Firmware zurückgekehrt“** | Die neue Firmware hat ihre Prüfung nicht bestanden; das Gateway läuft mit der vorherigen und arbeitet. Nennen Sie dem Service den Code. |
| **806 · „Die Brücke hat die Firmware abgelehnt: die Signatur stimmt nicht“** | Aktualisieren Sie die App und versuchen Sie es erneut. Wiederholt es sich, nennen Sie dem Service den Code. |
| **807 · „Die Brücke hat die Firmware abgelehnt: sie ist nicht neuer“** | Nichts. Das Gateway behält seine eigene Firmware. |
| **808 · „Firmware-Übertragung unterbrochen“** | Halten Sie Ihr Gerät nahe am Gateway und versuchen Sie es erneut; die Übertragung beginnt von vorn. |
| **809 · „Die Brücke ist beschäftigt: jetzt kein Update“** oder **„Die Maschine sät: das Update wurde nicht gestartet“** | Beenden Sie die Aussaat, beheben Sie den aktiven Alarm, warten Sie eine Minute und versuchen Sie es erneut. |
| **810 · „Die Brücke ist nach dem Neustart nicht zurückgekehrt“** | Prüfen Sie die Stromversorgung des Gateways, warten Sie eine Minute. Kommt es nicht zurück — schalten Sie seine Stromversorgung aus und wieder ein und öffnen Sie diese Seite erneut. |

Jedes Ergebnis: [8xx · Gateway-Update](codes-8-gateway-update.md).

> **WARNUNG**
>
> **Schalten Sie das Gateway während des Updates nicht aus.** Bricht die Übertragung ab, bleibt das Gateway auf seiner vorherigen Firmware; beginnen Sie von vorn.
