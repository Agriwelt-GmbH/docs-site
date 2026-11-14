---
title: Gerät antwortet nicht: Verbindung weg, Falscher Gerätetyp!
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-any-device.html
---

# Gerät antwortet nicht: Verbindung weg, Falscher Gerätetyp!

Die zwei Alarme, die jeder Sensor, Motor oder Aktuator des Hectare Mini auslösen kann – keine Antwort vom Gerät oder Antwort der falschen Geräteart – und was zu prüfen ist.

Jedes Gerät im Sensornetz kann diese beiden Alarme auslösen. **Die Gerätezeile des Alarmfensters sagt Ihnen, welches** – siehe [So arbeiten die Alarme](how-alarms-work.md).

## „Verbindung weg“ {#connection-lost}

**Was es bedeutet.** Das Gerät hat drei Abfragen in Folge nicht beantwortet. Das Panel kennt seinen Zustand nicht mehr: Nichts an ihm wird überwacht, bis es wieder antwortet. Seine Anzeige zeigt ein rotes Kreuz oder **XXXX**; sein Statusbildschirm zeigt **„Keine Verbindung“**.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Wurde das Gerät erst kürzlich ins Profil aufgenommen? Dann hat es womöglich noch keine Adresse – [Gerätekonfiguration](device-configuration.md).
2. Die Stecker des Geräts und des Kabelbaums: vollständig eingesteckt, Kontakte sauber und gerade, kein Wasser darin.
3. Das Kabel des Geräts und des Kabelbaums: gequetscht, durchgescheuert oder gerissen, besonders an Gelenken und Klappstellen.
4. Die Stromversorgung des Geräts. Sie muss den Werten im Datenblatt des Systems entsprechen.
5. Das Profil: Führt es ein Gerät auf, das die Maschine nicht hat? – [Profil und Verbindungen prüfen](check-profile-and-connections.md).
6. Das Gerät selbst: Tauschen Sie es gegen ein funktionierendes Gerät derselben Art. Wandert die Störung mit, ist das Gerät defekt.

Fallen mehrere Geräte einer Art zugleich aus, schauen Sie zuerst auf das, was sie gemeinsam haben: ein Eingangsmodul, ein HUB-8-Verteiler, ein Strang des Kabelbaums.

## „Falscher Gerätetyp!“ {#wrong-device-type}

**Was es bedeutet.** Unter der Adresse dieses Geräts antwortet etwas, aber nicht die Geräteart, die das Profil dort erwartet – zum Beispiel ein Eingangsmodul, wo ein Drucksensor sein sollte.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Das Profil: die Art jedes Geräts, wie es verbaut ist – [Das Profil](profile.md).
2. Wurde kürzlich ein Gerät ersetzt oder neu adressiert? Möglicherweise teilen sich nun zwei Geräte eine Adresse, oder eines hat die für ein anderes bestimmte Adresse. Vergeben Sie die Adresse erneut – [Gerätekonfiguration](device-configuration.md).
3. Bei einem HUB-8-Verteiler: der Typ jedes Kanals – [HUB-8-Verteiler konfigurieren](configure-hub8.md).

Müssen Sie mit einem Gerät weiterarbeiten, das nicht antwortet, können Sie es bis zur Reparatur aus der Überwachung nehmen – [Sensor in die Überwachung nehmen oder herausnehmen](sensor-in-and-out-of-control.md). Es wird dann gar nicht überwacht.
