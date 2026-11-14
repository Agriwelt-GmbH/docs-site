---
title: Tramline: actuator stalled or product in the tramline
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-tramline.html
---

# Tramline: actuator stalled or product in the tramline

What to do when the tramline actuator jams, its position sensors contradict each other, or a shut-off section still delivers product.

The tramline actuator shuts the sections of the tramline bout. Two gate position sensors tell the panel where its shutter stands. How the window works: [How alarms work](how-alarms-work.md).

## “Stall”

**What it means.** The tramline actuator has jammed.

**What to check, in this order:**

1. The gate position sensors of the actuator are serviceable.
2. The mechanism of the tramline actuator is serviceable.

## “Illegal state”

**What it means.** The actuator reports a position that cannot be: both gate position sensors have triggered at the same time. With a serviceable installation this cannot happen.

**What to check:** the gate position sensors are serviceable.

## “Seeding to tramline”

**What it means.** A section that should be shut off for the tramline still delivers too much product. The seed sensor, the dry fertilizer sensor or the liquid fertilizer sensor of that section has measured it in the tramline control mode.

**Seed sensor or dry fertilizer sensor — check, in this order:**

1. The metering unit and the flow cut-off mechanism are serviceable.
2. **“Toler.sowing to tramline,%”** in the settings of the group of section sensors. The value may have to be **increased**. See [Seed sensors and dry fertilizer sensors](seed-and-fertilizer-sensors.md).
3. **“Fraction”** in the settings of the group of the alarming sensor. The value may have to be **increased**.
4. The sensor's status on its status screen — see [The sensor status screen](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).

**Liquid fertilizer sensor — check, in this order:**

1. The metering unit and the flow cut-off mechanism are serviceable.
2. **“Tolerable leak to tramline,%”** in the settings of the group of section sensors. The value may have to be **increased**. See [Liquid fertilizer](liquid-fertilizer.md).

A sensor whose **“Product application”** is set to **“No”** is watched the same way — as a shut-off row.

> **SEE ALSO**
>
> Which sections belong to which actuator is set in **“Relation of sensors to actuators”** — [Seeding machine parameters](seeding-machine-parameters.md#relation-of-sensors-to-actuators). The rhythm: [Set up the tramline rhythm](tramline-rhythm.md).
