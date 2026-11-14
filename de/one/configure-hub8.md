---
title: HUB8 konfigurieren
product: Hectare One
language: de
firmware: 1.2.3
url: https://docs.agriwelt.com/de/one/configure-hub8.html
---

# HUB8 konfigurieren

Teilen Sie einem Eingangsmodul HUB8 mit, welcher Sensor an welchem seiner acht Kanäle angeschlossen ist.

Das HUB8 trägt mehrere Sensoren auf einmal. Sein Menü ist länger als die anderen: Nach der Geräteadresse folgen seine **acht Kanäle**, jeweils mit Typ und Nummer. Bereiten Sie zuerst vor wie in [Gerätekonfiguration](device-configuration.md): nur dieses HUB8 am Kabel, Ebene **„Agronom“**.

::: {.anatomy fig="konf-hub8"}
1. **„Geräteadresse“** – mit welchem HUB8 das Menü spricht. Lassen Sie sie auf **„AUTO“**.
2. **„Kanal 1 Typ“** – welche Art Sensor an Kanal 1 angeschlossen ist.
3. **„Kanal 1 Adresse“** – welcher Sensor dieser Art es ist: Behälter 1, Dosierer 2 und so weiter.
4. **Der Wert** des markierten Punktes, geändert mit **„PLUS“** / **„MINUS“**.
5. **Bildlaufleiste.** Die Kanäle 2 bis 8 folgen in denselben Paaren, danach **„Einstellen“**.

Das HUB8-Menü mit seinen ersten Kanälen.
:::

Typ und Nummer zusammen sorgen dafür, dass der Sensor auf dem Startbildschirm unter dem richtigen Symbol erscheint.

::: steps
1. Wählen Sie **„Service“** → **„Sensorkonfiguration“** → **„HUB8“** und drücken Sie **„MENU“**.

2. Lassen Sie **„Geräteadresse“** auf **„AUTO“**.

3. Stellen Sie für jeden Kanal, der einen Sensor trägt, **„Kanal N Typ“** und **„Kanal N Adresse“** mit **„PLUS“** / **„MINUS“** ein. Einen Kanal, der nichts trägt, lassen Sie, wie er ist.

4. Wählen Sie am Ende des Menüs **„Einstellen“** und drücken Sie **„MENU“**. Das Panel antwortet **„Fertig“**.

5. Trennen Sie das HUB8 und schließen Sie es wieder an. Prüfen Sie auf dem Startbildschirm, dass jeder Sensor unter seinem Symbol erscheint.
:::

Sind alle Geräte fertig, stellen Sie die Ebene wieder auf **„Fahrer“** oder schalten Sie das Panel aus und wieder ein.
