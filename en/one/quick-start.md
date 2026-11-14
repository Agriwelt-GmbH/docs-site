---
title: Quick start — getting ready and moving off
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/quick-start.html
---

# Quick start — getting ready and moving off

The order of getting the machine ready, what to check before the field, what happens when you move off, and what to watch while working.

Your machine may not have every step — skip what it does not have.

## Before the field

::: steps
1. **Calibrate the speed sensor.** Area, rates and deviations are all calculated from the speed; a wrong speed makes every other figure wrong. **“Settings”** → **“Seeding machine parameters”** → **“Speed calibration”**, at **Agronomist** level. See [Calibrate the speed sensor](calibrate-speed.md).

2. **Calibrate the metering rollers** — on grain drills, and on planters whose fertilizer dispenser is driven by an electric motor. From the context menu of each dispenser or motor, at **Operator** level, standing still. See [Mass calibration of a motor](calibrate-motor-weight.md).

3. **Check the tramline rhythm**, if the machine makes tramlines. See [Set up the tramline rhythm](tramline-rhythm.md).

4. **Check the sensor parameters** — the list is below.

5. **Check each section**: is it under control, does it apply product. See [Four states of a section](section-states.md#the-four-states-of-a-section).

6. **Choose the field** on the Statistics screen. For a new field, erase its statistics first. See [Statistics screen](statistics-screen.md#the-menu-of-the-screen).

7. **Set the rates** — seeding, dry fertilizer, liquid fertilizer. See [Change the target rate](set-the-target-rate.md).

8. **Check the access level.** It must be **Operator**.
:::

Steps 1 and 2 are not at the same level. **“Seeding machine parameters”** and the speed calibration under it are **Agronomist**; the mass calibrations in the context menus are **Operator**. The usual order: raise the level to Agronomist ([Enable the Agronomist level](enable-agronomist-level.md)), do step 1, drop back to Operator, do the rest.

> **IMPORTANT**
>
> **Step 8 is the one that ruins a day.** From Agronomist level upwards the panel suppresses **every alarm but one**: a blocked tube is not reported. The one that still comes through is **“User is Agronomist! Alarms will not be shown!”** — raised **once**, when seeding starts at that level. Dropping back to Operator raises the suppressed alarms again. Check the level before every start, not once a season.

### Sensor parameters to check

- **Speed sensor** — “Min speed, km/h”, “Max speed, km/h”.
- **Dispenser sensor** — “Period, s”, for each sensor.
- **Fan sensor** — “Minimum, rpm”, “Maximum, rpm”, for each sensor.
- **Pressure sensor** — “Minimum, Pa”, “Maximum, Pa”, for each sensor.
- **Liquid fertilizer pump** — “Pulses per liter”, “Max pressure, Bar”.
- **Seed and dry fertilizer sensors** — “Fraction”, “Correction”, “Recalculation,m” or “Recalculation,sec”; in the “Precise” or “Hybrid” mode also “Rate error,%”.
- **Liquid fertilizer sensors** — “Rate error,%” and, without a pump in the profile, “Pulses per liter”. Wilger flow meters: **red 8900**, **green 15500**, **blue 3400** pulses per liter.
- **Electric motors, “Precise” mode** — “Holes in disk”, for any motor in the group.
- **Electric motors, mass dosing** — for each motor, “Weight, gr” divided by “Rotations” against the roller specification. The mass calibration fills both in.

Most parameters are set **per sensor**. In the seed, dry fertilizer and liquid fertilizer sensor groups and in both motor groups, most parameters are common to the whole group — except sensor control and product application, which stay individual. Details: [Sensor settings](sensor-settings.md).

## Moving off

::: steps
1. Put the implement into the **working** position.

2. **Planters with dispenser motors:** fill the disks — main menu, **“Fill the disks with seeds”**. Without it the first metres of every row are empty. See [Fill the disks](fill-the-disks.md).

3. **Grain drills:** nothing to start. The metering motors begin turning by themselves as soon as the product application control starts — the moment you move off. Move off briskly all the same: the rotor cells have to fill before the first metres are sown at the target rate.

4. Drive.
:::

> **WARNING**
>
> **Filling the disks and starting the motors turn machinery while the machine stands still.** Make sure nobody is near the metering units, the dispenser shafts or the fan.

**When the control starts.** The manual lock must be **off** ([Lock application by hand](lock-application-by-hand.md)). If a work position sensor is fitted and switched on, the control begins once you move with the implement lowered; without such a sensor, as soon as you move. The alarms start a few seconds later — the delay is **“Settings”** → **“Alarm delay”**, 2 to 20 seconds.

| **Sound** | **What it means** |
| --- | --- |
| One short beep | The panel sees the machine seeding. From now on the sections are watched. |
| Three short beeps | The seeding has stopped — at the headland, or the columns have sunk under the control line. |

On grain drills in the “Flow” or “Hybrid” mode, let the panel find the alarm level itself: [Set the alarm level automatically](set-the-alarm-level.md).

## While working

Watch four things: the **speed** against the tractor, the **fan and the pressure** inside their range, the **actual rate** against the target, and that no sensor is alarming. The [Table screen](table-screen.md) shows how each section is doing right now; the [Statistics screen](statistics-screen.md) how the whole field has gone.

If the speed sensor fails, see [Work without the speed sensor](work-without-speed-sensor.md).
