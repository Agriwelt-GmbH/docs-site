---
title: Das Menü Service
product: Hectare 5
language: de
firmware: 1.0.20
url: https://docs.agriwelt.com/de/five/service-menu.html
---

# Das Menü Service

Jeder Punkt des Menüs „Service“, seine Zugriffsebene und welche ein Techniker besser in Ruhe lässt.

Tippen Sie mit zwei Fingern auf den Startbildschirm, dann zweimal auf **„Service“** (Service). Das Menü selbst wird ab der Ebene **„Agronomist“** (Agronom) angezeigt; welche Punkte Sie sehen, hängt von der Ebene ab ([Zugriffsebenen](access-levels.md)).

![Das Menü Service auf der Ebene Service.](figures/five-menu-service)

| **Punkt** | **Ebene** | **Was es ist** |
| --- | --- | --- |
| **„Profile“** (Profil) | Agronomist | Welche Geräte die Maschine hat und wie viele. [Das Profil](profile.md) |
| **„Sensors Configuration“** (Sensorkonfiguration) | Agronomist | Geräten ihre Adresse geben. [Gerätekonfiguration](device-configuration.md) |
| **„Registers“** (Register) | Agronomist | Eine Rohansicht der Register. Nicht Teil irgendeines Ablaufs. |
| **„Electric motors“** (Elektromotoren) | Agronomist | Der Diagnosebildschirm und die Konfiguration der Dosiermotor-Controller. [Motorcontroller konfigurieren](configure-motor-controllers.md) |
| **„Serial number“** (Seriennummer) | Service | Die Seriennummer des Panels, einmalig bei der Fertigung eingegeben. |
| **„Imitation mode“** (Simulationsmodus) | Service | **„No“** (Nein) / **„Yes“** (Ja) — das Panel arbeitet mit simulierten Daten. Siehe die Warnung unten. |
| **„Count seeds always“** (Körner immer zählen) | Agronomist | **„No“** / **„Yes“** — **„Yes“** zeigt die Kornzähler auch in den Modi **„Flow“** (Durchfluss) und **„Hybrid“** (Hybrid); sonst werden sie nur im Modus **„Precise“** (Einzelkorn) angezeigt. |
| **„Enter key“** (Schlüssel eingeben) | Agronomist | Gibt den Lizenzschlüssel ein, der das Panel aus dem Vorführzustand nimmt. Wird nur angezeigt, solange sich das Panel in diesem Zustand befindet. |
| **„Set trial“** (Testzeit setzen) | Service | Startet die Vorführzeit. |
| **„Trial, hours“** (Testzeit, Stunden) | Service | 1 … 999 — wie lange diese Zeit dauert. |

Vier weitere Punkte — das Protokoll des Trackers, zwei Schalter für die Protokollierung auf die Speicherkarte und die Displayart — gibt es in der Firmware, sie sind aber so eingestellt, dass sie nie angezeigt werden. Sie sind auf keiner Ebene erreichbar.

> **WARNUNG**
>
> **„Imitation mode“ ist kein Prüfhilfsmittel, das man eingeschaltet lässt.** Eingeschaltet arbeitet das Panel mit Werten, die es sich ausdenkt: Jede Zahl auf jedem Bildschirm und jeder Eintrag in der Statistik ist erfunden. Das Uhrenfeld des Startbildschirms zeigt in Gelb **IMITAT**, solange er eingeschaltet ist. Schalten Sie ihn aus, bevor die Maschine an die Arbeit geht — und prüfen Sie ihn, wenn ein Panel einen plausiblen Schlag meldet, den es nie gesät hat.

**„Imitation mode“** wird auf Englisch angezeigt, gleich welche Sprache am Panel eingestellt ist.
