---
title: Quick start — getting ready and moving off
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/quick-start.html
---

# Quick start — getting ready and moving off

The order of getting the machine ready, what to check before the field, what happens when you move off, and what to watch while working.

Your machine may not have every step — skip what it does not have. The main menu opens with a **two-finger tap** on the home screen; a device's context menu with a **touch and hold** on the device ([Interface basics](interface-basics.md)).

## Before the field

::: steps
1. **Calibrate the speed sensor.** Area, rates and deviations are all calculated from the speed; a wrong speed makes every other figure wrong. Standing still, touch and hold the speed field and choose **“Speed calibration”** — at the Operator level. The same item is under **“Settings”** → **“Seeding machine parameters”**, at the Agronomist level. See [Speed sensor](speed-sensor.md).

2. **Calibrate the metering rollers** — on machines that apply products by weight. From the context menu of each dispenser (**“Dispenser calibration(weight)”**, shown when its weight control is on) or of each dispenser motor, at the Operator level, standing still. See [Sensor settings](sensor-settings.md).

3. **Check the tramline rhythm**, if the machine makes tramlines. See [Set up the tramline rhythm](tramline-rhythm.md).

4. **Check the sensor parameters** — the list is below.

5. **Check each section**: is it under control, does it apply product. See [The four states of a section](section-states.md#the-four-states-of-a-section).

6. **Choose the field** on the Statistics screen: two-finger tap, **“Select field”**. For a new field, erase its statistics first with **“Zero statistics”**. See [Statistics screen](statistics-screen.md#the-menu-of-the-screen).

7. **Set the rates** — seeding, dry fertilizer, liquid fertilizer. See [Change the target rate](set-the-target-rate.md).

8. **Check the access level.** It must be **“Operator”**: **“Settings”** → **“User”**.
:::

Several of these settings need the Agronomist level — **“Seeding machine parameters”** among them. Raise the level ([Enable the Agronomist level](enable-agronomist-level.md)), do what needs it, drop back to Operator, do the rest.

> **IMPORTANT**
>
> **Step 8 is the one that ruins a day.** From the Agronomist level upwards the panel shows **no alarm windows but one**: a blocked tube is not reported. The one that still comes through is **“User is Agronomist! Alarms will not be shown!”** — raised **once**, when seeding starts at that level. Faults that are still present are reported once you are back at Operator. Check the level before every start, not once a season.

### Sensor parameters to check

- **Speed sensor** — “Min speed, km/h”, “Max speed, km/h”.
- **Dispenser sensor** — “Period, s”, for each sensor.
- **Fan sensor** — “Minimum, rpm”, “Maximum, rpm”, for each sensor.
- **Pressure sensor** — “Minimum, Pa”, “Maximum, Pa”, for each sensor.
- **Liquid fertilizer pump** — “Pulses per liter”, “Max pressure, Bar”.
- **Seed and dry fertilizer sensors** — “Fraction”, “Correction”, “Recalculation,m” or “Recalculation,sec”; in the “Precise” or “Hybrid” mode also “Rate error,%”.
- **Electric motors, “Precise” mode** — “Holes in disk”.
- **Electric motors, dosing by weight** — for each motor, “Weight, gr” and “Rotations”. The mass calibration fills both in.

Details: [Sensor settings](sensor-settings.md).

## Moving off

::: steps
1. Put the implement into the **working** position.

2. **Planters with dispenser motors:** fill the disks — main menu, **“Fill the disks with seeds”**. Without it the first metres of every row are empty. See [Fill the disks](fill-the-disks.md).

3. **Grain drills:** nothing to start. The metering motors begin turning by themselves as soon as the product application control starts — the moment you move off.

4. Drive.
:::

> **WARNING**
>
> **Filling the disks and starting the motors turn machinery while the machine stands still.** Make sure nobody is near the metering units, the dispenser shafts or the fan.

**When the control starts.** The manual lock must be **off** ([Lock product application by hand](lock-application-by-hand.md)). If a work position sensor is fitted and under control, the control begins once you move with the implement lowered; without such a sensor, as soon as you move. Alarms start after the delay set in **“Settings”** → **“Alarm delay”**, 2 to 20 seconds.

| **Sound** | **What it means** |
| --- | --- |
| One short beep | The panel sees the machine seeding. From now on the sections are watched. |
| Three short beeps | The seeding has stopped — at the headland, or the columns have sunk under the control line. |

On grain drills in the “Flow” or “Hybrid” mode, let the panel find the alarm level itself: [Set the alarm level automatically](set-the-alarm-level.md).

## While working

Watch four things: the **speed** against the tractor, the **fan and the pressure** inside their range, the **actual rate** against the target, and that no sensor is alarming. The [Table screen](table-screen.md) shows how each section is doing right now; the [Statistics screen](statistics-screen.md) how the whole field has gone.

If the speed sensor fails, see [Work without the speed sensor](work-without-speed-sensor.md).
