---
title: Kornsensor konfigurieren
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/configure-seed-sensor.html
---

# Kornsensor konfigurieren

Geben Sie einem neuen oder ersetzten Kornsensor des Hectare Mini die Nummer seiner Reihe – wie Sie einen offenen Sensor halten, die drei Menüpunkte und die Kontrolle danach.

Für einen Kornsensor ist die neue Adresse **die Nummer seiner Reihe** – die Nummer, die auf dem Startbildschirm unter seiner Säule steht. Bereiten Sie zuerst vor wie in [Gerätekonfiguration](device-configuration.md): nur dieser Sensor am Kabelbaum, Ebene **„Agronom“**, Menü **„Sensorkonfiguration“** geöffnet.

Die Adresse eines Kornsensors lässt sich nur ändern, solange der Sensor **normal arbeitet**. Ein Rohrsensor ist bereit, sobald er angeschlossen ist. Ein **offener** Sensor muss auf seinem Schar sitzen oder so gehalten werden, dass **kein direktes Licht in den optischen Kanal fällt** – den Spalt zwischen den beiden Gläsern. Im direkten Licht meldet der Sensor eine Störung und übernimmt die neue Adresse nicht.

![Einen offenen Kornsensor halten: Ein Finger deckt den optischen Kanal zwischen den Gläsern ab.](figures/sensor-orientation)

::: steps
1. Wählen Sie in **„Sensorkonfiguration“** **„Kornsensor“** und drücken Sie **„MENU“**. Das Menü hat drei Punkte: **„Sensoradresse“**, **„Neue Adresse“** und **„Einstellen“**.

2. Lassen Sie **„Sensoradresse“** auf **„AUTO“**. Zeigt es etwas anderes, stellen Sie es mit **„PLUS“** / **„MINUS“** zurück.

3. Wählen Sie **„Neue Adresse“** und stellen Sie mit **„PLUS“** / **„MINUS“** die Reihennummer ein.

4. Wählen Sie **„Einstellen“** und drücken Sie **„MENU“**. Das Panel antwortet mit **„Fertig“** und der Adresse, unter der es den Sensor gefunden hat.

5. Trennen Sie den Sensor und schließen Sie ihn wieder an. Kehren Sie mit **„BACK“** zum Startbildschirm zurück (zweimal aus dem Menü **„Service“**). Der Sensor muss unter seiner Reihe erscheinen; die nicht angeschlossenen Reihen zeigen ein rotes Kreuz.

   ![Der Startbildschirm nach der Neuvergabe, mit nur einem Sensor am Kabelbaum: Die anderen Reihen und Geräte sind rot durchgestrichen.](figures/home-after-readdress)
:::

Wiederholen Sie das für jeden Sensor, der eine Adresse erhalten soll. Wenn alle fertig sind, kehren Sie auf **„Fahrer“** zurück – stellen Sie **„Benutzer“** in **„Einstell.“** zurück oder schalten Sie das Panel aus und wieder ein – und schließen Sie alle Geräte wieder an.

## Nach einem Sensor suchen {#searching-for-a-sensor}

**Halten Sie „MENU“** auf **„Sensoradresse“**, um das Netz nach einem Kornsensor abzusuchen: Der Punkt zeigt dann die aktuelle Adresse des gefundenen Sensors. Halten Sie **„MENU“** erneut, um nach dem nächsten zu suchen. Steht anstelle von **„AUTO“** eine gefundene Adresse, vergibt **„Einstellen“** genau diesem Sensor eine neue Adresse, und das Panel prüft, ob die neue Adresse frei ist. Wird nichts gefunden, zeigt das Panel **„Keine Verbindung“**.

Was die Fehlermeldungen bedeuten: [Die Regeln jeder Konfiguration](device-configuration.md#the-rules-of-every-configuration).
