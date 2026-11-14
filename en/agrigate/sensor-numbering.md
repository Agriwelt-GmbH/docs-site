---
title: Number the sensors
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/sensor-numbering.html
---

# Number the sensors

Give a sensor the number of its row through the gateway — when commissioning a seeder, and when replacing a sensor in the field.

Every sensor on the sensor line answers on its own number, and the app knows a row by that number. A new sensor must get the number of its row before it is watched. The app does this through the gateway, from one sheet with two doors:

- **“Settings”** › **“Machine”** › **“Number the sensors”** — for commissioning;
- the row menu › **“Replace the sensor”** — for one row in the field; the row's number is already set.

The sheet has the list **“On the bus”** on top. At the bottom stays a panel that does not scroll: **“Sensor”**, **“New number”** and the button **“Assign No.”**. **“Close”** is in the header.

> **IMPORTANT**
>
> **While the sheet is open, the gateway does not watch the rows.** No row alarm comes during numbering. Do it with the machine standing, and close the sheet when you are done.

## Replace a sensor in the field

::: steps
1. Stop the machine. Connect the new sensor in place of the old one; the old one must be off the line, because the button stays off while it still answers on this number.

2. Open the row menu of the row (press and hold its bar) and tap **“Replace the sensor”**. The sheet **“Replace the sensor”** opens: the new sensor gets this row's number; the machine profile does not change.

3. Under **“On the bus”** the app lists the sensors that answer, each with its number and its place: **“row 5”**, **“fertiliser, row 5”** or **“outside the profile”**. Sensors outside the profile come first. Before the first answer the list says **“searching…”**; with no sensor on the line it says **“No sensor on the bus.”** If it is the only one, the app chooses it by itself: **“The only sensor outside the profile — chosen by itself.”** Otherwise tap the new sensor in the list.

4. Check **“New number”** — it is the row's number — and tap **“Assign No.”** with the number.

5. The sheet shows the steps: **“sending the command to the bridge…”**, **“sensor found”**, **“number written”**, **“saved for good”**, **“rebooting, waiting for the answer…”**, **“answers on the new number”**. It is done only when the sensor answers on its new number: **“Done.”** with the old and the new number and **“sensor answers”**.

6. Tap **“Close”**.
:::

## Commission a seeder

Open **“Number the sensors”** and number the sensors one by one: pick a sensor in the list **“On the bus”**, set **“New number”**, tap **“Assign No.”**. The number can be any from 1 to 199; set it with the minus and plus keys. The app first offers the first free row of the profile, or, when all rows are taken, the number after the last row. Under the number the hint names the place of that number: **“row 5”**, **“fertiliser, row 5”** or **“outside the profile (rows: 24)”**. Sensors can be numbered on the full sensor line, as long as each has a number of its own.

> **NOTE**
>
> **Connect new sensors one at a time.** When two sensors answer on the same number, the gateway cannot tell them apart and stops with **“More than one device on the network!”**.

## When it does not work

| The sheet says | What to do |
| --- | --- |
| **“Address taken”** (the button stays off) | Another sensor already answers on this number. Choose a free number, or first renumber the sensor that holds it. [Code 920](codes-9-setup.md#c920) |
| **“The sensor already has this number”** | Nothing to do. |
| **“Number outside 1…199”** | Set a number from 1 to 199. [Code 916](codes-9-setup.md#c916) |
| **“Pick the sensor in the list “On the bus””** | Tap a sensor in the list. |
| **“Address 7 already used!”** (with the number you chose) | The gateway found that number taken. Choose a free number. [Code 920](codes-9-setup.md#c920) |
| **“No connection”** and **“at step:”** … | The sensor stopped answering at that step: **“finding the sensor”**, **“writing the number”**, **“saving”**, **“restart”** or **“check on the new number”**. Check its plug and the power of the sensor line, and try again. [Code 913](codes-9-setup.md#c913) |
| **“More than one device on the network!”** | Leave only one new sensor connected. [Code 914](codes-9-setup.md#c914) |
| **“Bridge busy: seed is still flowing. Stop the seeder and retry in a minute.”** | Stop the seeder and wait a minute. [Code 912](codes-9-setup.md#c912) |
| **“The bridge did not answer”** | The gateway sent no answer for 30 seconds. Check the link to the gateway and try again. |
| **“Seed is still flowing — the bridge does not listen to the bus. Stop the seeder.”** | Stop the seeder. [Code 912](codes-9-setup.md#c912) |
| **“The bridge is busy with another action, please wait.”** | Wait and try again. [Code 917](codes-9-setup.md#c917) |
| **“Error #”** and a number | See [9xx · Setup answers of the gateway](codes-9-setup.md). |

**“Number the sensors”** and **“Replace the sensor”** are greyed out while the link to the gateway is down.
