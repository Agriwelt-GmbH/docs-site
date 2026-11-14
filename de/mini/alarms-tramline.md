---
title: Fahrgassenalarme: Undef.Zustand, Blockiert
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/alarms-tramline.html
---

# Fahrgassenalarme: Undef.Zustand, Blockiert

Was zu tun ist, wenn ein Fahrgassen-Aktuator des Hectare Mini beide Endlagen zugleich meldet, seine Stellung nicht erreicht oder wenn Saatgut durch eine für die Fahrgasse abgeschaltete Leitung läuft.

Ein Fahrgassen-Aktuator schaltet die Saatleitungen der Fahrgasse in den Durchgängen ab, die der Rhythmus verlangt ([Zum nächsten Fahrgassen-Durchgang wechseln](next-tramline-bout.md)). Die Gerätezeile nennt ihn: **Fahrgassen-Aktuator: #1**.

## „Undef.Zustand“ {#illegal-state}

**Was es bedeutet.** Der Aktuator meldet beide Endlagen zugleich – eingezogen und ausgefahren. Seine Endlagenschalter widersprechen sich.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Die Endlagenschalter des Aktuators und ihre Verkabelung.
2. Schmutz oder Eis, die einen Schalter festhalten.
3. Der Aktuator selbst.

## „Blockiert“ {#stall}

**Was es bedeutet.** Der Aktuator sollte sich bewegen, hat aber die verlangte Stellung nicht erreicht.

**Was Sie prüfen, in dieser Reihenfolge:**

1. Der Schieber: durch Saatgut, Schmutz oder ein verbogenes Teil blockiert.
2. Die Stromversorgung des Aktuators.
3. Der Endlagenschalter der verlangten Stellung.
4. Der Aktuator selbst.

Auf seinem Statusbildschirm zeigt der Aktuator **Status:** **„Eingezogen“**, **„Ausgefahren“**, **„Betrieb“** während er sich bewegt, oder **„Unbekannt“** – [Der Sensor-Statusbildschirm](sensor-status-screen.md).

## „Saat in Fahrgasse“ {#seeding-to-tramline}

Wird vom Kornsensor einer Leitung ausgelöst, die abgeschaltet sein sollte. Siehe [Aussaatalarme](alarms-seeding.md#seeding-to-tramline).
