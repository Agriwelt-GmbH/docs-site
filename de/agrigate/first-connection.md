---
title: Erste Verbindung mit dem Gateway
product: Agrigate
language: de
firmware: 
url: https://docs.agriwelt.com/de/agrigate/first-connection.html
---

# Erste Verbindung mit dem Gateway

Wie die Hectare-App das Gateway beim ersten Mal findet, wie Sie Ihres wählen, wenn mehrere in Reichweite sind, und wie Sie es später wechseln oder vergessen.

Die App findet das Gateway von selbst. Sie wählen es nur, wenn mehr als ein Gateway in Reichweite ist.

::: steps
1. Schalten Sie das Gateway ein und halten Sie das Tablet in der Kabine, nahe am Gateway.

2. Öffnen Sie die Hectare-App. Beim ersten Mal fragt iPadOS, ob die App Bluetooth verwenden darf. Erlauben Sie es — ohne Bluetooth erreicht die App das Gateway nicht.

3. Die App sucht das Gateway. Eine rote Kapsel in der Bildschirmmitte sagt **„Suche Brücke…“**, und die Reihenseiten sagen **„Die Brücke sendet die Reihenzahl nach dem Verbinden.“**

4. **Ein Gateway in Reichweite:** Nach wenigen Sekunden verbindet sich die App von selbst damit und merkt es sich. Die Kapsel zeigt **„Verbindung zu“** und den Namen des Gateways und verschwindet dann.

   **Mehrere Gateways in Reichweite:** Die Liste **„Brücke wählen“** öffnet sich. Jedes Gateway ist eine Zeile mit seinem Namen, seinen Signalbalken und seiner Signalstärke; das stärkste — meist das nächste — steht oben. Tippen Sie auf das Gateway Ihrer Sämaschine.

5. Die Reihen der Maschine erscheinen auf dem Reihenbildschirm. Stimmen sie nicht mit Ihrer Sämaschine überein, richten Sie das Maschinenprofil ein: [Das Maschinenprofil einrichten](machine-profile.md).
:::

Von nun an verbindet sich die App nur noch mit diesem Gateway — es ist **„Meine Brücke“** unter **„Einstellungen“** › **„Maschine“** › **„Brücke“**. Wird das gemerkte Gateway einige Sekunden lang nicht gefunden, während andere in Reichweite sind, öffnet sich die Liste **„Brücke wählen“** erneut.

## Der Abschnitt „Brücke“ in den Einstellungen {#the-bridge-section-in-settings}

**„Einstellungen“** › **„Maschine“**, Abschnitt **„Brücke“**:

| Zeile | Was sie ist |
| --- | --- |
| Die erste Zeile | Die Verbindung: ein grüner Punkt und der Name des Gateways, wenn verbunden, oder was die App gerade tut, mit der Signalstärke. |
| **„Meine Brücke“** | Das gemerkte Gateway oder **„nicht gewählt“**. Tippen Sie darauf, um die Liste **„Brücke wählen“** zu öffnen und ein anderes zu wählen. |
| **„Erneut verbinden“** | Trennt die Verbindung und verbindet sich erneut mit demselben Gateway. |
| **„Brücke vergessen“** | Die App vergisst das Gateway, trennt die Verbindung und bietet die Liste erneut an. Sie fragt zuvor nach: **„Die App trennt die Verbindung und lässt dich die Brücke neu wählen.“** — **„Vergessen“** oder **„Nein“**. |
| **„Firmware der Brücke“**, **„Hardware-Revision“** | Was das Gateway über sich selbst meldet. Geben Sie beides an den Service weiter, wenn danach gefragt wird. |
| **„Brücken-Update“** | Siehe [Das Gateway aktualisieren](bridge-update.md). |
| **„Empfangene Frames“**, **„Schnappschüsse“**, **„Verlorene Frames“** | Zähler der Verbindung, für den Service. |

> **HINWEIS**
>
> **Ein Gateway spricht jeweils mit einem Tablet.** Ein zweites Tablet in der Nähe der Maschine kann dem ersten die Verbindung wegnehmen. Halten Sie ein Tablet je Maschine.

> **SIEHE AUCH**
>
> [Meldungen über dem Bildschirm](screen-messages.md) · [Code 601](codes-6-gateway-link.md#c601) · [Code 704](codes-7-tablet.md#c704)
