---
title: Zugriffsebenen
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/access-levels.html
---

# Zugriffsebenen

Die drei Zugriffsebenen des Hectare 5, was jede öffnet und was mit den Alarmen geschieht, solange eine höhere Ebene eingestellt ist.

Nicht jede Einstellung steht jedem offen. Das Panel hat drei Zugriffsebenen. **Nach jedem Einschalten startet es auf der niedrigsten, „Operator“** (Fahrer).

| **Ebene** | **Was sie öffnet** |
| --- | --- |
| **„Operator“** (Fahrer) | Die tägliche Arbeit: Helligkeit, Lautstärke, Sprache, Alarmverzögerung, die Uhr, die Sollmengen und Alarmschwellen, Sensoren in die Überwachung nehmen oder herausnehmen, die Kalibrierungen nach Masse. Das Zurücksetzen der Statistik verlangt auf dieser Ebene eine PIN. |
| **„Agronomist“** (Agronom) | Die Einstellungen der Inbetriebnahme: **„Seeding machine parameters“** (Parameter der Sämaschine), **„Product rate error,%“** (Mengenfehler Produkt, %), die meisten Sensorparameter, die Kalibrierungen von Geschwindigkeit und Dosierer sowie das Menü **„Service“** (Service) mit Profil und Gerätekonfiguration. Erfordert eine PIN. |
| **„Service“** (Service) | Alles Obige, dazu die Punkte zum Zurücksetzen auf die Standardwerte, **„Reset settings“** (Einstellungen zurücksetzen), **„Save factory defaults“** (Werkseinstellungen speichern), die Seriennummer, die Testzeit und **„Imitation mode“** (Simulationsmodus). Für die Serviceabteilung. Erfordert eine PIN. |

Jede Einstellungstabelle in dieser Anleitung nennt die Ebene, die ein Punkt braucht. **Ein Punkt oberhalb Ihrer Ebene wird im Menü gar nicht angezeigt** — fehlt ein hier genannter Punkt, prüfen Sie zuerst die Ebene.

## Die Ebene wechseln {#switch-the-level}

Die Ebene wird nur an einer Stelle gewechselt: **„Settings“** (Einstellungen) → **„User“** (Benutzer). Beim Wechsel **nach oben** verlangt das Panel die PIN dieser Ebene, beim Wechsel nach unten nicht. Schritt für Schritt: [Agronomenebene freischalten](enable-agronomist-level.md).

Die PIN erfahren Sie bei Ihrem Händler oder beim Service.

> **WICHTIG**
>
> **Auf den Ebenen „Agronomist“ und „Service“ werden keine Alarmfenster angezeigt.** Beginnt die Aussaat auf einer solchen Ebene, warnt das Panel einmal in einem roten Fenster — siehe [User is Agronomist](alarms-access-level.md). Kehren Sie vor der Arbeit auf **„Operator“** zurück oder schalten Sie das Panel aus und wieder ein.

## Was mit den Alarmen geschieht, solange die Ebene hoch ist {#what-happens-to-the-alarms-while-the-level-is-high}

Die Alarme gehen nicht verloren, solange sie verborgen sind — sie warten. Senken Sie die Ebene auf **„Operator“**, verwirft das Panel die Alarme, die sich inzwischen erledigt haben, und zeigt die, die **noch zutreffen**, ein Fenster nach dem anderen — auch jene, die Sie schon geschlossen hatten, bevor Sie die Ebene angehoben haben. Nach einer Stunde Inbetriebnahme auf **„Agronomist“** erwarten Sie auf dem Rückweg eine kurze Folge von Alarmfenstern. Das ist der Rückstau, keine neue Störung. Wie die Fenster funktionieren: [So arbeiten Alarme](how-alarms-work.md).
