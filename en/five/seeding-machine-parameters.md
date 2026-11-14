---
title: Seeding machine parameters
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/seeding-machine-parameters.html
---

# Seeding machine parameters

The working width, the modes of seeding and fertilizing, the tramline, the relation of sections to actuators and motors, and the two calibrations that need the machine to move.

**“Settings”** → **“Seeding machine parameters”**. The item needs the **“Agronomist”** level ([Enable the Agronomist level](enable-agronomist-level.md)) and is hidden on a machine with neither a speed sensor nor a tramline actuator. Which items it holds depends on the profile.

![The Seeding machine parameters menu of a planter: the width in square brackets, the two modes, the two calibrations.](figures/five-param-edit)

| **Item** | **Values** |
| --- | --- |
| **“Width, cm”** | 100 … 2500; default 560. Number pad. |
| **“Mode of seeding”** | **“Flow”** / **“Hybrid”** / **“Precise”**; default **“Flow”**. |
| **“Mode of fertilizers”** | **“Flow”** / **“Hybrid”** / **“Precise”**. |
| **“Mode of liq.fert.”** | **“Flow”** / **“By area”**. |
| **“Tramline”** | Submenu. |
| **“Relation of sensors to actuators”** | Opens the mapping screen. |
| **“Speed calibration”** | Starts the speed calibration. |
| **“Dispenser calibration”** | **“ALL”**, or the number of one dispenser; starts the rotation calibration. |
| **“Reset to defaults”** | Returns the width and the modes to the factory values. **Service** level only. |

## Width, cm

The working width of the implement. The worked area is calculated from it, so it must be entered. Tap the item twice, or swipe on it: the number pad opens. Type the width and tap **“OK”**; a tap outside the pad keeps the old value. The item is hidden without a speed sensor.

If the statistics already hold work, the panel first asks to erase them — the area of the old width and of the new one cannot be added together.

## Mode of seeding, Mode of fertilizers

| **Mode** | **Unit** | **For** |
| --- | --- | --- |
| **“Flow”** | seeds per second | grain drills |
| **“Hybrid”** | seeds per metre | grain drills |
| **“Precise”** | seeds per metre, with skips and doubles counted | precision planters |

The fertilizers can be set to **“Precise”** only while the seeding is **“Precise”**. On a machine with two groups of seed sensors the two items read **“Mode of seeding gr.A”** and **“Mode of seeding gr.B”**; group B can be **“Precise”** only while group A is, so set group B to **“Flow”** or **“Hybrid”** before you take group A out of **“Precise”**.

> **IMPORTANT**
>
> **Switching between “Precise” and the other two modes demands a reset of the statistics** if any field has work recorded in it. The panel asks first; **“No”** keeps the old mode.

## Liquid fertilizer mode

**“Flow”** (litres per minute) or **“By area”** (litres per hectare). **Shown only when there is no liquid fertilizer pump controller in the profile** — with a controller the panel works by area.

## Relation of sensors to actuators

Which section sensors belong to which tramline actuator or dispenser motor. When an actuator shuts its sections off, their sensors switch to tramline monitoring. The item is shown only where there is something to relate: tramline actuators, or dispenser motors that are not one to one with the section sensors.

![The mapping screen: one line for the actuators, one for the motors.](figures/five-mapping)

A mapping is a **range** of sections, **“Diapason start”** to **“Diapason end”** — equal numbers mean a single section. Up to **four ranges** can be attached to one actuator. On a machine with dispenser motors the screen also has **“Motors to sensors mapping”**.

On the screen, a swipe up or down moves between the lines, a swipe right or left along a line, and a **two-finger tap** opens the menu of the selected cell — to add a range or to **“Remove diapason”**. **Touch and hold** anywhere on the screen to apply the mapping.

## Tramline

A submenu with two items: **“Tramline”** (**“No”** / **“Yes”**) and **“Tramline rhythm settings”**. Shown only on a machine that can make tramlines. Setting up a rhythm: [Set up the tramline rhythm](tramline-rhythm.md).

## Speed calibration and Dispenser calibration

The two calibrations that need the machine to move. Both are hidden without a speed sensor. Select **“Dispenser calibration”** and swipe right or left to choose the dispenser — or **“ALL”** for all of them at once — then tap it again to start.

- [Calibrate the speed sensor](calibrate-speed.md)
- [Calibrate the dispenser rotation](calibrate-dispenser-rotation.md)
