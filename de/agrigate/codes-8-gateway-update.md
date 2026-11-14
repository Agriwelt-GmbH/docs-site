---
title: 8xx · Gateway-Update
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/codes-8-gateway-update.html
---

# 8xx · Gateway-Update

Codes 801–810: die Schritte und die Ergebnisse der Aktualisierung der Gateway-Firmware aus der App.

Die Codes 8xx gehören zur Aktualisierung der Gateway-Firmware aus der App. Der Update-Bildschirm zeigt den Code vor dem Ergebnis, zum Beispiel **804 · „Brücke aktualisiert“**. Wie das Update durchgeführt wird: [Das Gateway aktualisieren](bridge-update.md).

Wie ein Code zu lesen ist, die vier Klassen und wie jede in der App aussieht: [So funktionieren Servicecodes](codes.md).

## 801 · Update-Übertragung gestartet {#c801}

**Klasse:** [Protokolleintrag](codes.md#class-record) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm ist das der Beginn der Phase **„Firmware-Übertragung“**; ein Code wird nicht angezeigt. Das Gateway hält es als Protokolleintrag fest.

**Was zu tun ist.** Nichts. Dieser Code ist ein Protokolleintrag für den Service.

## 802 · Update vollständig übertragen {#c802}

**Klasse:** [Protokolleintrag](codes.md#class-record) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm ist das das Ende der Phase **„Firmware-Übertragung“**; danach geht der Bildschirm weiter zu **„Neustart der Brücke“**; ein Code wird nicht angezeigt. Das Gateway hält es als Protokolleintrag fest. Das Abbild ist übertragen und angenommen; seine Signatur wird später geprüft, wenn das Gateway darauf umschaltet, und eine Ablehnung kommt dann als [806](codes-8-gateway-update.md#c806).

**Was zu tun ist.** Nichts. Dieser Code ist ein Protokolleintrag für den Service.

## 803 · Update aktiviert {#c803}

**Klasse:** [Protokolleintrag](codes.md#class-record) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm ist das die Phase **„Neustart der Brücke“**; ein Code wird nicht angezeigt. Das Gateway hält es als Protokolleintrag seines Neustarts auf die neue Firmware fest.

**Was zu tun ist:**

1. Warten Sie bis zu einer Minute und schalten Sie das Gateway nicht aus.

## 804 · Gateway aktualisiert {#c804}

**Klasse:** [Protokolleintrag](codes.md#class-record) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm: **804 · „Brücke aktualisiert“** und **„Die neue Firmware hat ihre Prüfung bestanden und läuft. Der Monitor arbeitet wie zuvor.“**

**Was zu tun ist.** Nichts. Dieser Code ist ein Protokolleintrag für den Service.

## 805 · Gateway ist zur vorherigen Firmware zurückgekehrt {#c805}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm: **805 · „Die Brücke ist zur vorherigen Firmware zurückgekehrt“**. Die neue Firmware hat ihre eigene Prüfung nicht bestanden; das Gateway läuft mit der vorherigen und arbeitet.

**Was zu tun ist:**

1. Arbeiten Sie weiter.
2. Nennen Sie dem Service den Code.

## 806 · Firmware abgelehnt: Signatur {#c806}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm: **806 · „Die Brücke hat die Firmware abgelehnt: die Signatur stimmt nicht“**. Das Gateway behält seine Firmware.

**Was zu tun ist:**

1. Aktualisieren Sie die Hectare-App und versuchen Sie es erneut.
2. Wiederholt es sich, nennen Sie dem Service den Code.

## 807 · Firmware abgelehnt: nicht neuer {#c807}

**Klasse:** [Protokolleintrag](codes.md#class-record) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm: **807 · „Die Brücke hat die Firmware abgelehnt: sie ist nicht neuer“** und **„Die Brücke läuft mit ihrer eigenen Firmware. Nichts zu tun.“**

**Was zu tun ist.** Nichts. Dieser Code ist ein Protokolleintrag für den Service.

## 808 · Update-Übertragung unterbrochen {#c808}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm: **808 · „Firmware-Übertragung unterbrochen“**. Das Gateway läuft mit seiner vorherigen Firmware.

**Was zu tun ist:**

1. Halten Sie das Tablet nahe am Gateway.
2. Starten Sie das Update erneut; die Übertragung beginnt von vorn.

## 809 · Update jetzt nicht möglich {#c809}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm: **809 · „Die Brücke ist beschäftigt: jetzt kein Update“** oder **809 · „Die Maschine sät: das Update wurde nicht gestartet“**. Es wurde nichts gesendet.

**Was zu tun ist:**

1. Beenden Sie die Aussaat und halten Sie die Maschine an.
2. Beheben Sie den aktiven Alarm an der Sämaschine.
3. Warten Sie eine Minute und versuchen Sie es erneut.

## 810 · Gateway ist nach dem Neustart nicht zurückgekehrt {#c810}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Auf dem Update-Bildschirm: **810 · „Die Brücke ist nach dem Neustart nicht zurückgekehrt“**. Die App hat nach dem Neustart des Gateways 2 Minuten auf es gewartet.

**Was zu tun ist:**

1. Prüfen Sie die Stromversorgung des Gateways und warten Sie eine Minute.
2. Ist es noch immer nicht zurück, schalten Sie die Stromversorgung des Gateways aus und wieder ein und öffnen Sie den Update-Bildschirm erneut.
