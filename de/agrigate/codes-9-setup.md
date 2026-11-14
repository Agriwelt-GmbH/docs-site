---
title: 9xx · Setup-Antworten des Gateways
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/codes-9-setup.html
---

# 9xx · Setup-Antworten des Gateways

Codes 901–921: Das Gateway hat das Schreiben des Maschinenprofils, einer Einstellung oder einer Sensornummer abgelehnt oder konnte es nicht abschließen.

Die Codes 9xx sind die Antworten des Gateways, wenn die App etwas darauf schreibt: das Maschinenprofil, eine Einstellung einer Reihengruppe, die Sollmenge oder die Nummer eines Sensors. In dieser Vorabversion zeigt die App nach den Worten **„Brücke antwortete mit Code“**, nach **„Fehler #“** oder am Ende einer Meldung wie **„Schreibvorgang abgebrochen (Code“** eine Zahl. Addieren Sie 900 zu dieser Zahl, um den Servicecode zu erhalten: *Code 13* ist 913. Manche Antworten haben eigene Worte; sie sind unten angegeben.

Wie ein Code zu lesen ist, die vier Klassen und wie jede in der App aussieht: [So funktionieren Servicecodes](codes.md).

## 901 · Setup-Daten unterwegs beschädigt {#c901}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Brücke hat das Profil nicht angenommen (Prüfsumme)“**. Anderswo: *Code 1*.

**Was zu tun ist:**

1. Schreiben Sie erneut, mit dem Tablet nahe am Gateway.

## 902 · Profil zu groß für das Gateway {#c902}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„zu viele Reihen für die Brücke (bis“** und die größte Reihenzahl.

**Was zu tun ist:**

1. Verringern Sie die Anzahl der Reihen und Geräte im Maschinenprofil.

## 903 · Gateway kennt eine Kanalrolle nicht {#c903}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Brücke versteht dieses Profil nicht (Code“** 3.

**Was zu tun ist:**

1. Bringen Sie die App und die Firmware des Gateways auf denselben Stand: Aktualisieren Sie die App, danach das Gateway.
2. Nennen Sie dem Service den Code.

## 904 · Gateway kennt eine Messart nicht {#c904}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Brücke versteht dieses Profil nicht (Code“** 4.

**Was zu tun ist:**

1. Bringen Sie die App und die Firmware des Gateways auf denselben Stand: Aktualisieren Sie die App, danach das Gateway.
2. Nennen Sie dem Service den Code.

## 905 · Gateway konnte nicht speichern {#c905}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Brücke konnte das Profil nicht speichern“**.

**Was zu tun ist:**

1. Schreiben Sie erneut.
2. Wiederholt es sich, nennen Sie dem Service den Code.

## 906 · Schreibvorgang abgebrochen {#c906}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Schreibvorgang abgebrochen (Code“** 6.

**Was zu tun ist:**

1. Schreiben Sie erneut, mit dem Tablet nahe am Gateway.

## 907 · Gateway kennt den Befehl nicht {#c907}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** **„Brücke antwortete mit Code“** 7 oder **„Fehler #“**7.

**Was zu tun ist:**

1. Bringen Sie die App und die Firmware des Gateways auf denselben Stand: Aktualisieren Sie die App, danach das Gateway.
2. Nennen Sie dem Service den Code.

## 908 · Profilversion nicht unterstützt {#c908}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Brücke versteht dieses Profil nicht (Code“** 8.

**Was zu tun ist:**

1. Bringen Sie die App und die Firmware des Gateways auf denselben Stand: Aktualisieren Sie die App, danach das Gateway.
2. Nennen Sie dem Service den Code.

## 909 · Setup-Daten kamen zu schnell {#c909}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Schreibvorgang abgebrochen (Code“** 9.

**Was zu tun ist:**

1. Schreiben Sie erneut, mit dem Tablet nahe am Gateway.

## 910 · Zeitüberschreitung beim Schreiben {#c910}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Schreibvorgang abgebrochen (Code“** 10.

**Was zu tun ist:**

1. Schreiben Sie erneut, mit dem Tablet nahe am Gateway.

## 911 · Gateway kennt die Gerätedaten nicht {#c911}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** In der Statuszeile des Profils: **„Brücke versteht dieses Profil nicht (Code“** 11.

**Was zu tun ist:**

1. Bringen Sie die App und die Firmware des Gateways auf denselben Stand: Aktualisieren Sie die App, danach das Gateway.
2. Nennen Sie dem Service den Code.

## 912 · Gateway beschäftigt: Aussaat oder anderer Vorgang {#c912}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** **„Brücke beschäftigt: Aussaat läuft“** in der Statuszeile des Profils; **„Brücke belegt: es fließt noch Korn. Sämaschine anhalten und in einer Minute wiederholen.“** oder **„Es fließt noch Korn – die Brücke hört den Bus nicht ab. Sämaschine anhalten.“** beim Nummerieren eines Sensors.

**Was zu tun ist:**

1. Beenden Sie die Aussaat oder warten Sie, bis der andere Einrichtungsvorgang abgeschlossen ist.
2. Versuchen Sie es erneut.

## 913 · Sensor hat beim Nummerieren nicht geantwortet {#c913}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Beim Nummerieren eines Sensors: **„Keine Verbindung“** gefolgt von **„beim Schritt:“** und dem Schritt, zum Beispiel **„Speichern“**.

**Was zu tun ist:**

1. Prüfen Sie, ob der Sensor angeschlossen ist und die Sensorleitung Strom hat.
2. Versuchen Sie es erneut.

## 914 · Mehr als ein neuer Sensor hat geantwortet {#c914}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Beim Nummerieren eines Sensors: **„Mehr als ein Gerät im Netz gefunden!“**

**Was zu tun ist:**

1. Lassen Sie nur einen neuen Sensor angeschlossen.
2. Versuchen Sie es erneut.

## 915 · Sensor hat die Nummer abgelehnt {#c915}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Beim Nummerieren eines Sensors: **„Fehler #“**15 gefolgt vom Schritt.

**Was zu tun ist:**

1. Versuchen Sie es erneut.
2. Wiederholt es sich, nennen Sie dem Service den Code und die Nummer des Sensors.

## 916 · Nummer außerhalb des zulässigen Bereichs {#c916}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Beim Nummerieren eines Sensors: **„Nummer außerhalb 1…199“**; die Taste bleibt aus.

**Was zu tun ist:**

1. Wählen Sie eine Nummer im zulässigen Bereich — die Nummer, die die App für die Reihe anbietet.

## 917 · Gateway mit einem anderen Sensorvorgang beschäftigt {#c917}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Beim Nummerieren eines Sensors: **„Die Brücke ist mit etwas anderem beschäftigt, bitte warten.“**

**Was zu tun ist:**

1. Warten Sie, bis der laufende Vorgang mit den Sensoren abgeschlossen ist.
2. Versuchen Sie es erneut.

## 918 · Einstellung der Reihengruppe abgelehnt {#c918}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** **„Brücke antwortete mit Code“** 18.

**Was zu tun ist:**

1. Bringen Sie die App und die Firmware des Gateways auf denselben Stand: Aktualisieren Sie die App, danach das Gateway.
2. Nennen Sie dem Service den Code.

## 919 · Überwachungsmodus abgelehnt {#c919}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** **„Brücke antwortete mit Code“** 19.

**Was zu tun ist:**

1. Bringen Sie die App und die Firmware des Gateways auf denselben Stand: Aktualisieren Sie die App, danach das Gateway.
2. Nennen Sie dem Service den Code.

## 920 · Sensornummer bereits vergeben {#c920}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** Beim Nummerieren eines Sensors: **„Adresse belegt“** — ein anderer Sensor antwortet bereits unter dieser Nummer; die Taste bleibt aus. Oder **„Adresse: 7 belegt!“** (mit Ihrer Nummer), wenn das Gateway die Nummer als vergeben findet.

**Was zu tun ist:**

1. Wählen Sie eine freie Nummer.
2. Oder geben Sie zuerst dem Sensor, der diese Nummer belegt, eine andere Nummer.

## 921 · Motoreinstellung abgelehnt {#c921}

**Klasse:** [Achtung](codes.md#class-attention) · **Ort:** kein bestimmter.

**Was Sie sehen.** **„Brücke antwortete mit Code“** 21.

**Was zu tun ist:**

1. Bringen Sie die App und die Firmware des Gateways auf denselben Stand: Aktualisieren Sie die App, danach das Gateway.
2. Nennen Sie dem Service den Code.
