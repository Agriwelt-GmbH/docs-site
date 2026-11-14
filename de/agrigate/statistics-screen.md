---
title: Statistik
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/statistics-screen.html
---

# Statistik

Die Statistik von fünf Schlägen — Strecke, Fläche, Zeit, besäte und unbesäte Fläche, Qualität, Dichte — und wie Sie einen Schlag wählen oder seine Statistik zurücksetzen.

**„Statistik“** führt Buch über die Arbeit auf fünf Schlägen. Einer davon ist aktiv: Alles, was die Maschine sät, wird auf ihn gezählt.

::: {.anatomy fig="app-statistics"}
1. **Der Schlag auf dem Bildschirm.** **(A)** kennzeichnet den aktiven Schlag.
2. **◄ ►** und **1/5** — die anderen vier Schläge ansehen.
3. **Das Menü …** — **„Feld wählen“** und **„Statistik zurücksetzen“**. [Weiter unten](#select-a-field-or-reset-it)
4. **„Feldarbeit“** — **„Strecke“**, **„Fläche“**, **„Betriebszeit“** und die mittlere **„Fahrgeschw.“**.
5. Wann die Arbeit auf diesem Schlag **„Start“** und **„Ende“** hatte.
6. **„Überwachung“** — **„Ohne Alarmüberwachung“** und **„Außerhalb Geschw.-Bereich“**. In dieser Version zeigen beide einen Strich.
7. **Der Qualitätsbalken** der **„Aussaat“**: **„Qualität“**, **„Doppel“**, **„Fehlstelle“** und **„Ungesät“** als Anteile eines Balkens (Einzelkorn).
8. **„Körner gesamt“** (in Tausend), **„Dichte“** und **„Saatmenge“**: der Istwert groß, darunter der Sollwert und der Istwert in Prozent des Sollwerts — rot jenseits der Toleranz.
9. **„Gesät“**, **„Ungesät“**, **„Unbekannt“** — in Hektar, wenn eine Geschwindigkeit vorliegt; sonst als Anteile der Zeit ohne Geschwindigkeit.
10. **Die Reihen einzeln** — dieselben Zahlen für jeden Sensor (**„Kornsensoren“**, danach die Düngersensoren).

Die Statistik eines Schlags am Prüfstand, nach vielen Stunden simulierter Arbeit.
:::

Was der Block **„Aussaat“** zeigt, hängt vom Überwachungsmodus der Gruppe ab. Bei Einzelkorn erhalten Sie den Qualitätsbalken, die gesamten Körner, die Dichte und die Sollmenge. Bei Durchfluss und Hybrid erhalten Sie die drei Mengen **„Gesät“**, **„Ungesät“** und **„Unbekannt“**. Bei zwei Gruppen im Modus Einzelkorn zeigt ein Seitenschalter im Titel des Blocks die andere Gruppe.

## Einen Schlag wählen oder zurücksetzen {#select-a-field-or-reset-it}

::: steps
1. Holen Sie mit **◄ ►** den gewünschten Schlag auf den Bildschirm.

2. Tippen Sie auf **…** rechts vom Titel.

3. Wählen Sie:
   - **„Feld wählen“** — dieser Schlag wird der aktive. Enthält er bereits Statistik, sagt die App zuerst **„Daten löschen, um dieses Feld zu wählen!“**: **„Ja“** macht ihn aktiv, mit Zählern bei null.
   - **„Statistik zurücksetzen“** — die App fragt **„Sind Sie sicher?“**; **„Ja“** setzt die Statistik dieses Schlags auf null.
:::

**„Feld wählen“** wird nur angeboten, wenn der Schlag auf dem Bildschirm nicht der aktive ist.

> **WICHTIG**
>
> **Ein Zurücksetzen lässt sich nicht rückgängig machen.** Die Statistik des Schlags ist weg. Auch eine Änderung der Arbeitsbreite bei vorhandener Statistik im aktiven Schlag setzt sie zurück — die App fragt zuvor nach. Siehe [Das Maschinenprofil einrichten](machine-profile.md).

> **SIEHE AUCH**
>
> [Tabelle](table-screen.md) · [Die Kacheln unten](bottom-tiles.md)
