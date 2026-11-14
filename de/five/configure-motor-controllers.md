---
title: Motorcontroller konfigurieren
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/configure-motor-controllers.html
---

# Motorcontroller konfigurieren

Geben Sie einem Dosiermotor-Controller seine Adresse, wählen Sie die Art des Controllers und stellen Sie seine Parameter ein.

Die Controller, die die Dosiermotoren antreiben, werden nicht über **„Sensors Configuration“** (Sensorkonfiguration) adressiert. Sie haben ihren eigenen Zugang, ihre eigene Wahl der Controllerart und ihre eigenen Parameter.

> **WARNUNG**
>
> **Für befugte Servicetechniker.** Wie bei jedem Gerät am Kabel: **Es darf immer nur ein Controller angeschlossen sein.** Das Panel schreibt an den Controller, der antwortet.

## Das Menü der Motorcontroller öffnen {#open-the-motor-controller-menu}

::: steps
1. Heben Sie die Ebene auf **„Agronomist“** (Agronom) an ([Agronomenebene freischalten](enable-agronomist-level.md)).

2. Tippen Sie mit zwei Fingern auf den Startbildschirm, tippen Sie zweimal auf **„Service“** (Service), dann zweimal auf **„Electric motors“** (Elektromotoren). Der Diagnosebildschirm der Controller öffnet sich bei Motor 1. Derselbe Bildschirm öffnet sich über **„Electric motors“** im Kontextmenü eines Motors.

   ![Der Bildschirm Electric motors von Motor 1, Seite „Registers“.](figures/five-motors-registers)

3. Tippen Sie mit **zwei Fingern** auf den Bildschirm. Zwei Punkte erscheinen: **„Change address“** (Adresse ändern) und **„Configuration“** (Konfiguration).

   ![Das Menü des Bildschirms Electric motors.](figures/five-motors-menu)
:::

## Die Adresse ändern {#change-the-address}

::: steps
1. Tippen Sie auf **„Change address“** und noch einmal darauf. Drei Punkte öffnen sich.

2. **„Motor address“** (Motoradresse) — die Adresse, unter der der Controller jetzt antwortet. Lassen Sie sie, wie sie ist.

3. **„New address“** (Neue Adresse) — die Adresse, die er annehmen soll. **Entnehmen Sie sie dem Datenblatt des Systems; die Werte sind in dieser Anleitung nicht abgedruckt.**

4. Tippen Sie auf **„Set“** (Setzen) und noch einmal darauf, um sie zu schreiben.
:::

## Die Controllerart wählen {#choose-the-controller-kind}

**„Configuration“** öffnet die Wahl der Controllerart, nach Nummern angeboten. Das Panel liest die Art vom Controller zurück und öffnet bei der, die antwortet. Eine andere Art von Hand zu wählen, ist der Weg, eine Ersatzplatine einzurichten — kein Weg, zu ändern, was ein Motor ist.

| **Art** | **Was es ist** |
| --- | --- |
| **„1)universal“** | Der Universalcontroller: zwei Gleichstromkanäle oder ein Schrittmotorkanal auf derselben Platine. |
| **„2)DC motor“** | Ein Gleichstrommotor-Controller. |
| **„3)STEPPER fw0.006+“** | Ein Schrittmotor-Controller, Firmware 0.006 und neuer. |
| **„4)BGxxCI“** | Ein BG45CI-Motor mit eingebautem Controller, auf der älteren Platine. |

Passt der antwortende Controller nicht zum Menü, sagt das Panel es: **„Wrong controller type!“** (Falscher Controllertyp), **„Old firmware version!“** (Alte Firmwareversion) oder **„Wrong controller work mode!“** (Falscher Arbeitsmodus des Controllers).

## Die Parameter einstellen {#set-the-parameters}

Jedes Konfigurationsmenü endet mit **„Set“**, und **„Set“** trägt einen eigenen Wert — die **Adressgruppe**: **„Motor address“** (nur dieser Controller), **„ALL“** (alle), **„All-Seeding“** (alle Saatgut) oder **„All-Fertilizer“** (alle Dünger). **Nichts erreicht den Controller, bevor „Set“ bestätigt ist** — die Punkte darüber ändern die Zahlen, die das Panel hält, nicht die, mit denen der Controller läuft. **„Set“** antwortet **„Done“** (Fertig), **„FAILURE“** (Fehler) oder **„No connection“** (Keine Verbindung); eine Gruppe, die im Profil keine Motoren hat, wird mit **„EM of dispensers is missing in profile“** (Elektromotoren der Dosierer fehlen im Profil) beantwortet.

| **Art** | **Was eingestellt wird** |
| --- | --- |
| STEPPER | **„Pulses“** (Impulse) 1 … 8192 — die Impulse einer Umdrehung der Motorwelle; **„Motor type“** (Motortyp) aus einer Liste; **„Set“**. |
| BGxxCI | **„Pulses“** 1 … 8192; **„Set“**. Sonst nichts — den Rest trägt der Controller. |
| DC motor | **„Pulses“**, **„Motor type“**, die Reglerglieder **„PID kP“**, **„PID kI“**, **„PID kD“** (0 … 65535, als Hundertstel gelesen), **„TURBINA“** 0/1 und zwei Paare aus Drehzahl und Zeit **„TIME1“** / **„SPEED1“**, **„TIME2“** / **„SPEED2“**; **„Set“**. |
| universal | Der größte Satz, in drei Menüs: **„Work mode“** (Arbeitsmodus), **„Inputs setup“** (Eingänge einrichten) und **„Parameters“** (Parameter). |

Das Menü **„Parameters“** des Universalcontrollers:

| **Parameter** | **Bereich** |
| --- | --- |
| **„Motor type“** | 0 … 255, aus der eigenen Tabelle des Controllers |
| **„Pulses“** | 1 … 8192 je Wellenumdrehung |
| **„Acceleration,Ms“** (Beschleunigung, ms) / **„Deceleration,Ms“** (Verzögerung, ms) | 50 … 65535 — die Rampe hinauf und hinunter |
| **„Minimum, rpm“** (Minimum, U/min) / **„Maximum, rpm“** (Maximum, U/min) | 0 … 65535 — das Drehzahlfenster der Welle |
| **„PID kP“**, **„PID kI“**, **„PID kD“** | 0 … 65535, Hundertstel |
| **„!! Temp,\*C“** | 0 … 200 — die Temperatur, bei der der Controller Alarm gibt |
| **„I_peak,A“** / **„I_peak,mS“** | der Spitzenstrom in Zehntelampere und wie lange er fließen darf |
| **„I_push,A“** / **„I_push,Sec“** | der Losbrechstrom und seine Zeit |
| **„I_hilo,A“** / **„I_hilo,Sec“** | die Schwelle des Dauerstroms und ihre Zeit |
| **„Set“** | schreibt alles, an der gewählten Adressgruppe |

> **WICHTIG**
>
> **Die Grenzen für Strom und Temperatur schützen den Motor.** Sie sind die eigenen Schutzschwellen des Controllers: Stellen Sie sie nach dem Datenblatt des Motors ein, nicht durch Probieren von Werten, bis die Alarme aufhören.

Die vier Artnamen und die Punkte **„PID kP“**, **„PID kI“**, **„PID kD“**, **„TURBINA“**, **„TIME1“**, **„SPEED1“**, **„TIME2“**, **„SPEED2“**, **„!! Temp,\*C“**, **„I_peak,A“**, **„I_push,A“**, **„I_hilo,A“** und ihre Zeitpartner lauten in jeder Sprache des Panels gleich.

Was der Controller meldet, lesen: [Diagnose der Motorcontroller](motor-controller-diagnostics.md).
