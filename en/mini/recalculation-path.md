---
title: Let the panel calculate the recalculation path
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/recalculation-path.html
---

# Let the panel calculate the recalculation path

Let the Hectare Mini work out the best "Recalculation,m" for skips and doubles from the target rate and the holes in the disk — with or without dispenser motors.

**“Recalculation,m”** of the seed sensors is the stretch over which the panel collects skips, doubles and quality before it updates the diagram and the Seeding table ([Seed and fertilizer sensors](seed-and-fertilizer-sensors.md)). A stretch that covers whole turns of the seed disk gives the steadiest figures. The panel can work it out from the target rate in seeds per metre and the number of holes in the disk.

> **IMPORTANT**
>
> **Calculate the path again whenever the target rate has changed.** The old path no longer matches whole turns of the disk.

::: steps
1. Set the target rate on the home screen first — [Change the target rate](set-the-target-rate.md). The calculation uses the target of the **“Precise”** mode.

2. Open the context menu of any seed sensor ([Sensor settings](sensor-settings.md)), select **“Recalculation,m”** and press **“MENU”**.

3. **With dispenser motors** the panel asks whether the rate and the number of holes are set — **“Calculate path?”**. Press **“PLUS”** for **“Yes”**. It takes the holes from **“Holes in disk”** of the motor ([The context menu of a motor](motor-context-menu.md)).

   **Without motors** it first reminds you that the seeding rate must already be set; close the message. Then type the number of holes in the disk in the **“Holes in disk”** pad (1 to 500) and touch **“OK”**.

4. The panel calculates the path and sets it: the longest stretch of whole disk turns, up to ten, that fits into 50 m, doubled while it is shorter than 25 m.
:::

If even one turn of the disk is longer than 50 m, the panel shows **“Calculated path to big. Maximum setuped.”** and sets 50 m.

**“No”** in step 3, or **“BACK”** on the pad, leaves the path as it was. You can always set **“Recalculation,m”** by hand with **“PLUS”** / **“MINUS”**, from 10 to 50 m.

Without a speed sensor the item is **“Recalculation,sec”** and the stretch is counted in seconds.
