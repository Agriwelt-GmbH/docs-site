---
title: Zugriffsebenen
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/access-levels.html
---

# Zugriffsebenen

Die drei Zugriffsebenen des Hectare One, was jede erlaubt und wie Sie zwischen ihnen wechseln.

Nicht jede Einstellung steht jedem offen. Das Panel kennt drei Arbeitsebenen. **Nach jedem Einschalten startet es auf der niedrigsten, „Fahrer“.**

| Ebene | Was sie erlaubt |
| --- | --- |
| **„Fahrer“** | Alltägliche Arbeit. Einige Parameter lassen sich nicht ändern, und die Statistik kann nicht zurückgesetzt werden. |
| **„Agronom“** | Zurücksetzen der Statistik, die Sämaschinen-Parameter, der Fehler der Produktmenge und die übrigen Einstellungen der Inbetriebnahme. Erfordert eine PIN. |
| **„Service“** | Das Profil und die Punkte zum Zurücksetzen auf Standardwerte. Für den Kundendienst. Erfordert eine PIN. |

Oberhalb von **„Service“** gibt es eine vierte Ebene, **„Debug“**. Sie wird nur bei der Herstellung benutzt; siehe [Das Service-Menü](service-menu.md).

Jede Einstelltabelle in dieser Anleitung nennt die Ebene, die ein Punkt erfordert. Ein Punkt oberhalb Ihrer Ebene wird im Menü überhaupt nicht angezeigt.

## Ebene wechseln {#switch-the-level}

Die Ebene wird im Menü **„Einstellungen“** beim Punkt **„Benutzer“** gewechselt und nirgends sonst – es gibt dafür keine Tastenkombination. Beim Wechsel **nach oben** wird die PIN abgefragt, beim Wechsel nach unten nicht. Schritt für Schritt, mit den Bildschirmen: [Agronomen-Ebene aktivieren](enable-agronomist-level.md).

Die PIN ist für jedes Panel eine andere. Sie steht im Gerätepass, oder Sie erfragen sie beim Service-Support.

> **WICHTIG**
>
> **Auf den Ebenen „Agronom“ und „Service“ werden keine Alarmfenster angezeigt.** Das Panel weist in einem roten Fenster darauf hin – siehe [Benutzer ist Agronom](alarms-access-level.md). Kehren Sie vor der Arbeit auf **„Fahrer“** zurück – oder schalten Sie das Panel aus und wieder ein.

## Was mit den Alarmen geschieht, solange die Ebene hoch ist {#what-happens-to-the-alarms-while-the-level-is-high}

Die Alarme gehen nicht verloren, solange sie verborgen sind – sie warten. Wenn Sie die Ebene senken, verwirft das Panel die Alarme, die inzwischen verschwunden sind, und zeigt diejenigen, die **weiterhin zutreffen**, nacheinander als Fenster. Nach einer Stunde Inbetriebnahme auf **„Agronom“** erwartet Sie beim Zurückschalten daher eine kurze Folge von Alarmfenstern. Das ist der angestaute Rückstand, keine neue Störung. Wie die Fenster funktionieren: [So arbeiten die Alarme](how-alarms-work.md).
