---
title: Profil einrichten
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/set-up-the-profile.html
---

# Profil einrichten

Die Schritte, um das Profil des Hectare Mini zu ändern – das Profilmenü auf der Ebene Service erreichen, die Geräte der Maschine eintragen, speichern und das Panel neu starten lassen.

Richten Sie das Profil ein, wenn sich die Ausstattung der Maschine ändert – ein Gerät kommt hinzu, entfällt oder ist von anderer Art. Die Punkte und ihre Grenzen: [Das Profil](profile.md). Das Profilmenü erfordert die Ebene **„Service“**.

> **WARNUNG**
>
> **Ändern Sie das Profil nur bei der Inbetriebnahme, durch den Service.** Ein falsches Profil lässt das Panel Geräte überwachen, die nicht vorhanden sind, und die vorhandenen übergehen.

::: steps
1. Schließen Sie alle Geräte an das Panel an und versorgen Sie sie gemäß dem Schaltplan im Datenblatt des Systems mit Strom.

2. Schalten Sie das Panel ein. Nach dem Logo erscheint der Startbildschirm; was er zeigt, hängt vom vorhandenen Profil ab.

   ![Der Startbildschirm nach dem Einschalten.](figures/home-idle)

3. Heben Sie die Zugriffsebene auf **„Service“** an: **„MENU“** → **„Einstell.“** → **„Benutzer“** → **„Service“**, **„MENU“**, PIN – wie in [Agronomen-Ebene aktivieren](enable-agronomist-level.md).

4. Drücken Sie **„BACK“**. Das Hauptmenü kehrt zurück, nun mit **„Service“**.

5. Wählen Sie **„Service“** und drücken Sie **„MENU“**. Das Menü **„Service“** öffnet sich mit **„Profil“** als erstem Punkt.

6. Wählen Sie **„Profil“** und drücken Sie **„MENU“**. Das Profilmenü öffnet sich.

   ![Der Weg zum Profil: Einstellungen mit der Ebene Service, das Hauptmenü, das Service-Menü, das Profilmenü.](figures/menu-to-profile)

7. Gehen Sie die Punkte mit **„UP“** / **„DOWN“** durch und stellen Sie jeden mit **„PLUS“** / **„MINUS“** auf die Ausstattung der Maschine ein.

   ![Das Profilmenü.](figures/menu-profile)

8. Wählen Sie **„Profil speichern“**, den letzten Punkt, und drücken Sie **„MENU“**. Das Panel fragt **„Sind Sie sicher?“** – drücken Sie **„PLUS“** für **„Ja“**, **„MINUS“** für **„Nein“**.

9. Das Panel bittet um Geduld, zeigt dann **„Gespeich.“** und **„Neu starten“** und startet von selbst neu. Das neue Profil gilt nach dem Neustart.

   ![Das Profil speichern: der Punkt Profil speichern, die Frage, dann die Meldung Gespeichert und Neustart.](figures/profile-save)
:::

**„BACK“** verlässt das Profilmenü; die geänderten Gerätezahlen werden nicht gespeichert. Eine Ausnahme ist **„GPS“**: Es wird sofort gespeichert, wie eine Einstellung des Menüs **„Einstell.“**.

## Wenn das Profil nicht gespeichert wird {#when-the-profile-is-not-saved}

| **Das Panel zeigt** | **Bedeutung** |
| --- | --- |
| **„Keine Änderungen“** | Das Profil ist dasselbe wie das gespeicherte. Nichts wird gespeichert, nichts startet neu. |
| **„Ungültiges Profil!“** | Das Profil verletzt eine Regel – zu wenige Kornsensoren, zu viele kleine Anzeigen, zu viele Gebläse und Drucksensoren oder Motoren ohne Geschwindigkeitssensor. Siehe [Regeln, die das Profil einhalten muss](profile.md#rules-the-profile-must-keep). Korrigieren Sie es und speichern Sie erneut. |

Nach dem Neustart steht das Panel auf der Ebene **„Fahrer“**. Prüfen Sie das Ergebnis wie in [Profil und Verbindungen prüfen](check-profile-and-connections.md) beschrieben. Erzeugt die Maschine Fahrgassen, stellen Sie danach – immer nach dem Profil – den Fahrgassenrhythmus ein: [Fahrgassenrhythmus einstellen](tramline-rhythm.md).
