---
title: Einem Dosiermotor ein Produkt zuweisen
product: Hectare Mini
language: de
firmware: 2.2.8
url: https://docs.agriwelt.com/de/mini/assign-product-to-motor.html
---

# Einem Dosiermotor ein Produkt zuweisen

Sagen Sie dem Panel, welches seiner drei Produkte jeder Dosiermotor ausbringt, damit eine Sollmenge in kg/ha für alle Motoren dieses Produkts gilt.

Jeder elektrische Dosiermotor treibt einen Dosierer an und gehört zu genau einem Produkt. Das Panel führt bis zu drei Produkte: **„Produkt 1“**, **„Produkt 2“** und **„Produkt 3“**. Mehrere Motoren können dasselbe Produkt ausbringen; seine Menge wird dann einmal für alle eingestellt. Im Werkszustand sind **alle** Motoren **„Produkt 1“**.

Das braucht die Stufe „Agronom“ ([Stufe „Agronom“ freischalten](enable-agronomist-level.md)) und Motoren im Modus **„Durchfluss“** oder **„Hybrid“**.

> **VORSICHT**
>
> **Das aktive Feld muss unter Umständen gelöscht werden.** Enthält das aktive Feld bereits Daten, verlangt das Panel, dass seine Statistik gelöscht wird, bevor sich der Produkttyp ändert; **„Ja“** löscht sie endgültig. Wählen Sie zuerst ein leeres Feld, wenn Sie sie behalten wollen — [Neues Feld beginnen](start-a-new-field.md).

::: steps
1. Gehen Sie zum Bildschirm Motoren und halten Sie **„MENU“** gedrückt. Der erste Motor ist gewählt.

   ![Der Bildschirm Motoren mit gewähltem Motor.](figures/mini-motors-focus)

2. Wählen Sie den Motor mit **„UP“** und **„DOWN“**.

3. Drücken Sie **„MENU“**. Das Kontextmenü öffnet sich.

4. Gehen Sie mit **„DOWN“** zu **„Produkttyp“**.

5. Wählen Sie das Produkt mit **„PLUS“** und **„MINUS“**.

   ![Produkttyp vor und nach der Änderung.](figures/mini-motors-product-type)

6. Fragt das Panel, ob die Statistik gelöscht werden soll, drücken Sie **„MENU“** für **„Ja“** oder **„BACK“** für **„Nein“**.

   ![Die Frage, bevor der Produkttyp auf einem Feld mit Daten geändert wird.](figures/mini-motors-product-change-confirm)

7. Drücken Sie **„BACK“**. Sie sind wieder auf dem Bildschirm Motoren. Wiederholen Sie ab Schritt 2 für jeden weiteren Motor.
:::

Während Sie durch die Werte schalten, wird ein Produkt übersprungen, das eine Dosierwelle mit Massenüberwachung bereits ausbringt — ein Produkt wird entweder von Motoren oder von solchen Dosierern ausgebracht, nicht von beiden. Steht kein anderes Produkt zur Verfügung, bewegt sich der Wert nicht; das ist keine Störung.

Stellen Sie dann die Menge jedes Produkts ein: [Sollmenge ändern](set-the-target-rate.md), und kalibrieren Sie jeden Motor: [Motor nach Masse kalibrieren](calibrate-motor-weight.md).
