---
title: Fill the disks with seeds
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/fill-the-disks.html
---

# Fill the disks with seeds

Turn the seed disks of a planter with dispenser motors until every disk holds seed, so that sowing starts from the first metre — how to run it and read the result.

This applies only to planters with seed **dispenser electric motors** in the **“Precise”** control mode. Without motors in the profile, or in another mode, the menu item is not shown.

When the disks are driven by electric motors, they stand empty until the motors run. Drive off with empty disks and the first metres of every row get nothing: each disk has to pick up seeds and carry them round to the drop point first. Filling turns the disks while the machine stands still, so that sowing starts from the first metre.

> **WARNING**
>
> **The disks turn while the machine stands still.** Before you start, make sure nobody is near the metering units, the dispenser shafts or the drive. Every disk starts at once and keeps turning for up to about twenty seconds. From the cab the metering units cannot be seen.

::: steps
1. Stop the machine. The item is shown only while the machine **stands still**.

2. On the home screen, press **“MENU”**. Select **“Fill the disks with seeds”** and press **“MENU”**.

   ![The main menu with Fill the disks with seeds selected.](figures/menu-main)

3. The panel asks **“Are you sure?”**. Touch **“Yes”**, or press **“PLUS”**. **“No”**, **“MINUS”** or **“BACK”** cancels.

   ![The confirmation before the disks turn.](figures/one-fill-01-confirm)

4. Watch the tiles. Each motor turns its disk until the seed sensor of its row registers the first seed. At the end the panel beeps three times and shows **“Operation complete.”**

5. Touch **“Close”**, or press **“BACK”**, to return to the home screen.
:::

To stop before the end, touch **“Cancel”** or press **“BACK”**: the motors stop at once and their control goes back to the seeding logic.

## Reading the screen

::: {.anatomy fig="one-fill-02-screen"}
1. **Green tile.** Done: the seed sensor registered a seed, the disk is filled.
2. **Dark red tile.** Failed: the disk could not be filled. The motor number is bright red.
3. **Reason letters.** Why the tile failed — see the table below. Here **m g**.
4. **“Operation complete.”** Every motor has finished.
5. **“Close”.** Returns to the home screen. While the operation runs, this button reads **“Cancel”**.

The end of the operation on an eight-motor planter: motor 1 filled, motors 2 to 8 failed.
:::

| **Tile** | **State** |
| --- | --- |
| Dark grey | Waiting its turn. Up to eight motors run at the same time; the rest wait. |
| Yellow | Running: the disk is turning. |
| Green | Done. |
| Dark red | Failed. |

Each motor turns its disk at **4 rpm of the driven shaft**. If no seed is registered within **1.25 revolutions — about 19 seconds** — that motor is stopped and marked as failed. A motor already in an alarm state is marked as failed at once.

## Letters on a failed tile

The colour of the letter matters as much as the letter: **red means a fault, white means taken out of control.**

![A failed tile close up.](figures/one-fill-tile-red)

| **Letter** | **Meaning** |
| --- | --- |
| **m** red | A fault of the dispenser electric motor during the operation. |
| **m** white | The motor is taken out of control and cannot run. |
| **g** red | The seed sensor registered no seed while the disk was turning. |
| **s** red | A fault of the seed sensor during the operation. |
| **s** white | The seed sensor is taken out of control. |

If the **seed sensor** is out of control, the panel cannot check the disk. A serviceable motor still turns it for about one and a quarter turns, so in practice the disk does get filled — but the panel reports that motor as failed, because it never saw a seed.
