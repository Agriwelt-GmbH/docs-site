---
title: Seeding machine parameters
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/seeding-machine-parameters.html
---

# Seeding machine parameters

The working width, the modes of seeding and fertilizing, the tramline, the mapping of sections to actuators, and the two calibrations that need the machine to move.

**“Settings”** → **“Seeding machine parameters”**. The item needs the **“Agronomist”** level ([Enable the Agronomist level](enable-agronomist-level.md)) and is hidden on a machine with neither a speed sensor nor a tramline actuator. Which items it holds depends on the profile.

::: {.anatomy fig="menu-seeding"}
1. **“Width, cm”** — the working width. The selected value stands between **–[** and **]+**.
2. **“Mode of seeding”** — **“Flow”**, **“Hybrid”** or **“Precise”**.
3. **“Tramline”** — the tramline submenu.
4. **“Speed calibration”** — starts the speed calibration.
5. **“Reset to defaults”** — factory values for this menu. **Service** level only.

The menu of a precision planter with a speed sensor and no fertilizer, dispensers or liquid fertilizer.
:::

## Width, cm

The working width of the implement. The worked area is calculated from it, so it must be entered. Press **“MENU”** on the item: the number pad opens. Type the digits — the key at the top right deletes the last one — and touch **“OK”** to accept, or press **“BACK”** to keep the old value.

![The number pad for “Width, cm”.](figures/menu-keypad)

## Mode of seeding, Mode of fertilizers

Three modes each:

| Mode | Unit | For |
| --- | --- | --- |
| **“Flow”** | seeds per second | grain drills |
| **“Hybrid”** | seeds per metre | grain drills — recommended |
| **“Precise”** | seeds per metre, with skips and doubles counted | precision planters |

> **IMPORTANT**
>
> **Switching between “Precise” and the other two modes demands a reset of the statistics** if any field has work recorded in it.

## Mode of liquid fertilizer

**“Flow”** (litres per minute) or **“By area”** (litres per hectare). **Shown only when there is no liquid fertilizer pump controller in the profile** — with a controller the panel chooses the mode itself.

## Actuators to sensors mapping

Which section sensors belong to which tramline actuator or electric motor. When that actuator shuts its sections off, their sensors switch to tramline monitoring.

![The mapping screen: one line for the actuators, one for the motors.](figures/menu-mapping)

A mapping is a **range**: **“Range start”** and **“Range end”** — equal numbers mean a single section. Up to **four ranges** can be attached to one actuator. On a machine with metering motors the screen also has **“Motors to sensors mapping”**.

## Tramline

The rhythms of the tramline, in a submenu of its own with two items: **“Tramline”** (**“No”** / **“Yes”**) and **“Tramline rhythm settings”**.

![The tramline submenu.](figures/menu-tramline)

Setting up a rhythm: [Tramline rhythm](tramline-rhythm.md).

## Speed calibration and Dispenser calibration

The two calibrations that need the machine to move. **“Dispenser calibration”** carries a number beside it: the dispenser to calibrate, or **0** for all of them at once.

- [Calibrate the speed sensor](calibrate-speed.md)
- [Calibrate the dispenser rotation](calibrate-dispenser-rotation.md)
