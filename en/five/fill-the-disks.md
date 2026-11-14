---
title: Fill the disks with seeds
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/fill-the-disks.html
---

# Fill the disks with seeds

Turn the seed disks of a planter with dispenser motors until every disk holds seed, so that sowing starts from the first metre — how to run it and read the result.

This applies only to planters with seed **dispenser electric motors** in the **“Precise”** control mode. Without motors in the profile, or in another mode, the menu item is not shown.

When the disks are driven by electric motors, they stand empty until the motors run. Drive off with empty disks and the first metres of every row get nothing: each disk has to pick up seeds and carry them round to the drop point first. Filling turns the disks while the machine stands still, so that sowing starts from the first metre.

> **WARNING**
>
> **The disks turn while the machine stands still.** Before you start, make sure nobody is near the metering units, the dispenser shafts or the drive. The disks start together and each keeps turning for up to about twenty seconds. From the cab the metering units cannot be seen.

::: steps
1. Stop the machine. The item is shown only while the machine **stands still**.

2. On the home screen, tap with **two fingers**. The main menu opens with **“Fill the disks with seeds”** already selected; tap it once more.

   ![The main menu with Fill the disks with seeds selected.](figures/five-main-menu)

3. The panel asks **“Are you sure?”**. Touch **“Yes”**. **“No”**, or a touch outside the window, cancels.

   ![The question before the disks turn.](figures/five-fill-confirm)

4. Watch the tiles. Each motor turns its disk until the seed sensor of its row registers the first seed. At the end the panel beeps three times and shows **“Operation complete.”**

5. Touch **“Close”** to return to the home screen.
:::

To stop before the end, touch **“Cancel”**: the motors stop at once and go back to the seeding control.

## Reading the screen

::: {.anatomy fig="five-fill-screen"}
1. **Green tile.** Done: the seed sensor registered a seed, the disk is filled.
2. **Dark red tile.** Failed: the disk could not be filled. The motor number is bright red.
3. **Reason letters.** Why the tile failed — see the table below.
4. **“Operation complete.”** Every motor has finished.
5. **“Close”.** Returns to the home screen. While the operation runs, this button reads **“Cancel”**.

The end of the operation on an eight-motor planter.
:::

| **Tile** | **State** |
| --- | --- |
| Dark grey | Waiting its turn. Up to eight motors run at the same time; the rest wait. |
| Yellow | Running: the disk is turning. |
| Green | Done. |
| Dark red | Failed. |

Each motor turns its disk at **4 rpm of the driven shaft**. If no seed is registered within **1.25 revolutions — about 19 seconds** — that motor is stopped and marked as failed. A motor already in an alarm state is marked as failed at once. With the fertilizer control mode also in “Precise”, the fertilizer motors are run the same way.

> **NOTE**
>
> **While the disks are being filled, alarm windows are held back.** The panel raises its access level for the duration of the operation and returns to your level at the end.

## Letters on a failed tile

The colour of the letter matters as much as the letter: **red means a fault, white means taken out of control.**

| **Letter** | **Meaning** |
| --- | --- |
| **m** red | A fault of the dispenser electric motor during the operation. |
| **m** white | The motor is taken out of control and cannot run. |
| **g** red | The seed sensor registered no seed while the disk was turning. |
| **s** red | A fault of the seed sensor during the operation. |
| **s** white | The seed sensor is taken out of control. |

If the **seed sensor** is out of control, the panel cannot check the disk. A serviceable motor still turns it for about one and a quarter turns, so in practice the disk does get filled — but the panel reports that motor as failed, because it never saw a seed.
