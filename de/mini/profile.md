---
title: Das Profil
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/profile.html
---

# Das Profil

Was das Profil des Hectare Mini ist, jeder Punkt des Profilmenüs mit seinen Werten und die Regeln, die ein Profil einhalten muss, bevor das Panel es annimmt.

Das **Profil** sagt dem Panel, welche Geräte die Maschine hat und wie viele von jeder Art. Es bestimmt, welche Anzeigen der Startbildschirm zeigt, welche Kontextmenüs es gibt und welche Geräte das Panel abfragt. Ein System wird meist mit eingerichtetem Profil geliefert; ändern Sie es nur, wenn sich die Ausstattung der Maschine ändert. So prüfen Sie es: [Profil und Verbindungen prüfen](check-profile-and-connections.md). So ändern Sie es: [Profil einrichten](set-up-the-profile.md).

Das Profil zählt, **was überwacht und was angesteuert wird**, nicht Gehäuse. Ein Eingangsmodul kann zum Beispiel Gebläsesensoren und Behältersensoren zugleich tragen; ein Aktuator-Steuergerät kann einen Aktuator und zwei Spuranzeiger-Sensoren tragen. Jedes davon wird unter seinem eigenen Punkt eingetragen.

::: {.anatomy fig="menu-profile"}
1. **„Kornsensoren“** – der gewählte Punkt.
2. **Der Wert**, hier 12, zwischen **−** und **+**: Ändern Sie ihn mit **„MINUS“** und **„PLUS“**.
3. **„Düngersensoren“**.
4. **„Flüssigd.-Durchfl.S.“**.
5. **„Behälter“**.
6. **„Dosierer“**.
7. **„Geschw.“** – wie der Geschwindigkeitssensor angeschlossen ist.
8. **Sein Wert**, hier **„Bedienpanel“**.
9. **Bildlaufleiste.** Die Liste geht unterhalb des Bildschirms weiter.

Die ersten Punkte des Profilmenüs.
:::

## Die Punkte {#the-items}

Jeder Punkt erfordert wie das Menü selbst die Ebene **„Service“**.

| **Punkt** | **Was er festlegt** | **Werte** |
| --- | --- | --- |
| **„Kornsensoren“** | Anzahl der Kornsensoren. | 2 … 60 |
| **„Düngersensoren“** | Anzahl der Sensoren für Trockendünger. | 0 … 60 |
| **„Flüssigd.-Durchfl.S.“** | Anzahl der Durchflusssensoren für Flüssigdünger. | 0 … 60 |
| **„Behälter“** | Anzahl der Behälterfüllstandsensoren. | 0 … 9 |
| **„Dosierer“** | Anzahl der Dosierwellensensoren. | 0 … 9 |
| **„Geschw.“** | Ob es einen Fahrgeschwindigkeitssensor gibt und wo er angeschlossen ist: **„Nein“**; **„Bedienpanel“** – ein Sensor am Panel; **„Eingangsmod.“** – ein Sensor an einem Eingangsmodul; **„Eingangsmodul(2)“** – zwei Sensoren an einem Eingangsmodul. | siehe links |
| **„GPS“** | Der eingebaute GPS-Empfänger als Geschwindigkeitsquelle: **„Nein“**; **„UBX“** – die normale Einstellung; **„NMEA“** – der Empfänger liefert seine Daten im Format NMEA 0183. Solange er einen gültigen Fix hat, hat GPS Vorrang vor dem Sensor unter **„Geschw.“**; ohne Fix übernimmt der Sensor von selbst. [GPS-Empfang](gps-receiver.md) | siehe links |
| **„Gebläse“** | Anzahl der Gebläsedrehzahlsensoren. | 0 … 2 |
| **„Drucksensoren“** | Anzahl der Drucksensoren (Unterdruck). | 0 … 3 |
| **„Arbeitsstell.-Sensor“** | Ob es einen Sensor für Arbeits- und Transportstellung des Geräts gibt. | **„Nein“** / **„Ja“** |
| **„Spuranz.“** | Wie die Spuranzeiger überwacht werden: **„Nein“**; **„Einer“** – ein Sensor; **„Beide“** – ein Sensor je Arm. | siehe links |
| **„Batt. lädt nicht“** | Batterieladesensor des Gebläsemotors. Schalten Sie ihn zusammen mit dem Zündungssensor aus. | **„Nein“** / **„Ja“** |
| **„Öldruck-Störung“** | Sensor für niedrigen Öldruck des Gebläsemotors. Schalten Sie ihn zusammen mit dem Zündungssensor aus. | **„Nein“** / **„Ja“** |
| **„Zündung“** | Zündschlüsselsensor des Gebläsemotors. | **„Nein“** / **„Ja“** |
| **„Wenig Kr.“** | Kraftstoffstandsensor des Gebläsemotors. | **„Nein“** / **„Ja“** |
| **„Luftfilter“** | Luftfiltersensor des Gebläsemotors. | **„Nein“** / **„Ja“** |
| **„E-Motoren Saat“** | Anzahl der elektrischen Dosierermotoren für Saatgut. | 0 … 60 |
| **„E-Motoren Dünger“** | Anzahl der elektrischen Dosierermotoren für Dünger. | 0 … 30 |
| **„Fahrg.-Aktuatoren“** | Anzahl der Fahrgassen-Aktuatoren. | 0 … 4 |
| **„Flüssigd.-Pumpencontr.“** | Ob es ein Pumpensteuergerät für Flüssigdünger gibt. | 0 / 1 |
| **„Profil speichern“** | Speichert das Profil und startet das Panel neu. | – |

> **WICHTIG**
>
> **„GPS“ funktioniert nur mit einem unter „Geschw.“ eingetragenen Geschwindigkeitssensor.** Steht **„Geschw.“** auf **„Nein“**, setzt das Panel **„GPS“** von selbst auf **„Nein“** zurück. Stellen Sie bei einer Drillmaschine ohne Antriebsrad **„Geschw.“** auf **„Bedienpanel“** – dort muss kein Sensor angeschlossen sein.

## Regeln, die das Profil einhalten muss {#rules-the-profile-must-keep}

**„Profil speichern“** weist ein Profil zurück, das eine dieser Regeln verletzt, und zeigt **„Ungültiges Profil!“**:

- mindestens **2 Kornsensoren**;
- **„Behälter“**, **„Dosierer“** und die fünf Motorsensoren zusammen: **höchstens 12**; über 10 dürfen **„Gebläse“** und **„Drucksensoren“** zusammen höchstens 4 ergeben;
- **„Gebläse“** und **„Drucksensoren“** zusammen: **höchstens 5**;
- Saat- und Düngermotoren zusammen: höchstens 60; Düngermotoren nur zusammen mit Saatmotoren und mit Düngersensoren;
- Dosierermotoren und ein Flüssigdünger-Pumpensteuergerät brauchen einen Geschwindigkeitssensor.
