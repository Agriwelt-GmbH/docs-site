---
title: Set up the machine profile
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/machine-profile.html
---

# Set up the machine profile

Tell the app how many seed rows and fertilizer sensors the machine has and, for Hybrid and Precision, its working width; the app writes the profile to the gateway by itself.

The machine profile tells the gateway which sensors to read and the app how to draw them: how many seed rows, how many fertilizer sensors, and for the Hybrid and Precision modes the working width. It is kept in the gateway, so another tablet connected to the same gateway reads the same profile.

::: steps
1. Open **“Settings”** › **“Machine”**. The section **“Machine profile”** opens at the top.

2. Set **“Rows”** — the number of seed rows — with **−** / **+**.

3. Set **“Fertilizer sensors”** — the number of fertilizer rows with a sensor, or **“none”**.

4. Wait a moment. There is no Save button: after a short pause the app writes the profile to the gateway. The status line under the numbers says **“writing the profile to the bridge…”** and then **“profile written to the bridge at”** with the time.

5. Compare **“Sensors on the bus now”** with what is on the seeder: it counts every device that answers on the sensor line.

6. **Hybrid and Precision only:** set **“Width, cm”** — the working width. **“Row spacing”** under it is worked out by the app: the width divided by the rows of the group.
:::

## When the profile is not written

| The status line says | What it means | What to do |
| --- | --- | --- |
| **“bridge busy: seeding under way”** | The gateway does not take a new profile while seed flows. | Stop the seeder and change the number again. |
| **“too many rows for the bridge (up to”** … | The profile is larger than the gateway takes. | Reduce rows or devices. See [code 902](codes-9-setup.md#c902). |
| Any other message with a code | The gateway refused the profile. | See [9xx · Setup answers of the gateway](codes-9-setup.md). |

## Width and statistics

The area and the row spacing come from the width. When the active field already has statistics, a new width asks first: **“Statistics must be erased!”** — **“Yes”** starts the statistics of the active field from zero, **“No”** keeps the old width.

The fertilizer rows come after the seed rows. With fertilizer sensors in the profile, the rows screen shows two bands: seed on top, fertilizer below. See [The rows screen](rows-screen.md).

> **SEE ALSO**
>
> [Number the sensors](sensor-numbering.md) · [Settings — Machine](settings-machine.md)
