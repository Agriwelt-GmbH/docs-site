---
title: Tramline
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/tramline.html
---

# Tramline

How the app counts the tramline bouts, how to set the rhythm and the actuators, and how to change the bout by hand from the bout tile.

The app counts the bouts of the tramline rhythm. On the bouts of the rhythm the rows of the tramline actuators go quiet: their columns are hatched grey, they raise no **“Not seeding”**, and a row that sows anyway raises **“Seeding in tramline”**.

## Settings

**“Settings”** › **“Machine”**, section **“Tramline”** — shown only on machines that can have a tramline.

![The tramline section of the machine settings.](figures/app-tramline-settings)

| Setting | What it does |
| --- | --- |
| **“Tramline actuators”** | How many tramline actuators the machine has. |
| **“Tramline”** | Switches the tramline on or off. |
| **“Tramline rhythm settings”** | The rhythm: choose one of three rhythms with **“Select”** — the active one is marked **“Active”** —, set its number of **“Bouts”** (1–50), and under **“Tramline actuators activation”** the bouts on which each actuator shuts its rows (up to four per actuator). **“Reset rhythm settings”** clears the rhythm. |
| **“Actuators to sensors mapping”** | Which rows each actuator shuts — up to four ranges of rows per actuator. |
| **“Tramline actuator”** #1, #2 … | Every actuator: its state, **“Cutoff position”** (**“Extended”** or **“Retracted”**), **“Switch”** (**“when seeding”** or **“always”**), and **“Disable control”** / **“Enable control”**. |
| **“Auto switching source”** | The first choice in the list — the bout changes by itself: by the markers when the machine has them, otherwise on every lift of the seeder. |

An actuator taken off control is virtual: its rows go quiet by the rhythm, but the gateway does not drive it.

In **“Settings”** › **“Products”**, **“Max seeding in tramline,%”** sets how much a tramline row may sow before **“Seeding in tramline”** (20 % of the rate unless changed). [Products settings](settings-products.md)

## The bout tile and the bout menu

On the rows screen the tile **“Bout”** shows the current bout over the bouts of the rhythm, for example “2 / 4”, and the rhythm. Its ring is green while the bout changes by itself and yellow while it does not; it turns red and blinks when an actuator is in alarm.

Tap the tile to open the menu **“Tramline”**:

![The bout menu over the rows screen.](figures/app-tramline-bout-menu)

| Item | What it does |
| --- | --- |
| **“Next bout”** | Moves to the next bout and closes the menu. Offered when the bout cannot change by itself. |
| **“Auto switching”** | Switches the automatic change of the bout on or off. Offered when the machine can change it by itself. |
| **“Active bout”** | Sets the bout with **−** / **+**. Written when the menu closes. |

**“Done”** closes the menu.

> **SEE ALSO**
>
> [4xx · Tramline actuators](codes-4-tramline.md) · [Code 206](codes-2-seeding.md#c206) · [Bar colours](bar-colours.md)
