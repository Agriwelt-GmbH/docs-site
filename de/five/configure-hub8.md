---
title: HUB8 konfigurieren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/configure-hub8.html
---

# HUB8 konfigurieren

Sagen Sie einem HUB8-Eingangsgerät — auf dem Bildschirm „Concentrator-8“ —, was an seinen acht Kanälen angeschlossen ist.

Der HUB8 trägt mehrere Geräte zugleich. Am Panel heißt er **„Concentrator-8“** (Hub mit acht Kanälen). Sein Menü ist länger als die anderen: Nach der Geräteadresse folgen seine **acht Kanäle**, jeder mit Typ und Nummer. Bereiten Sie zuerst vor wie in [Gerätekonfiguration](device-configuration.md): nur dieser HUB8 am Kabel, Ebene **„Agronomist“** (Agronom).

| **Punkt** | **Was er ist** |
| --- | --- |
| **„Device address“** (Geräteadresse) | Mit welchem HUB8 das Menü spricht. Lassen Sie ihn auf **„AUTO“** (automatisch). |
| **„Channel 1 type“** (Kanal 1, Typ) … **„Channel 8 type“** | Was am Kanal angeschlossen ist: **„Seed sensors“** (Kornsensoren) oder **„Input device“** (Eingangsgerät). |
| **„Channel 1 address“** (Kanal 1, Adresse) … **„Channel 8 address“** | Welches Gerät dieser Art es ist: bei einem Kornsensor die Nummer seiner Reihe, bei einem Eingangsgerät der Wert aus dem Datenblatt des Systems. |
| **„Set“** (Setzen) | Schreibt alle Kanäle in den HUB8. |

![Das Menü Concentrator-8 mit seinen ersten Kanälen.](figures/five-cfg-hub8)

Typ und Nummer zusammen bewirken, dass das Gerät auf dem Startbildschirm an der richtigen Stelle erscheint.

::: steps
1. Öffnen Sie **„Service“** (Service) → **„Sensors Configuration“** (Sensorkonfiguration) → **„Concentrator-8“** — tippen Sie jeden Punkt zweimal an.

2. Lassen Sie **„Device address“** auf **„AUTO“**.

3. Tippen Sie für jeden Kanal, der ein Gerät trägt, auf seinen Typpunkt — **„Channel 1 type“** für Kanal 1 — und wischen Sie zum Typ, dann auf seinen Adresspunkt — **„Channel 1 address“** — und wischen Sie zur Nummer. Lassen Sie einen Kanal, der nichts trägt, wie er ist.

4. Wischen Sie nach oben zu **„Set“** am Ende des Menüs, tippen Sie darauf und noch einmal darauf. Das Panel antwortet **„Done“** (Fertig).

5. Trennen Sie den HUB8 und schließen Sie ihn wieder an. Prüfen Sie auf dem Startbildschirm, dass jedes Gerät an seiner Stelle erscheint.
:::

Zwei Kanäle desselben Typs dürfen nicht dieselbe Nummer haben: **„Set“** lehnt das dann mit **„Invalid profile!“** (Ungültiges Profil) ab und schreibt nichts.

Sind alle Geräte fertig, setzen Sie die Ebene zurück auf **„Operator“** (Fahrer) oder schalten Sie das Panel aus und wieder ein.
