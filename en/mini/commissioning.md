---
title: Commissioning — setting up a new system
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/commissioning.html
---

# Commissioning — setting up a new system

The order in which a new Hectare Mini system is set up on a machine — from connecting the devices to the calibrations — with a link to the details of every step.

This is the sequence for the dealer or service engineer when the system is installed. Each step links to the topic with the details. Most of the parameters need the **Agronomist** access level — [Enable the Agronomist level](enable-agronomist-level.md).

::: steps
1. **Connect** all devices to the panel and check their power supply according to the wiring diagram in the data sheet of the system.

2. **Check the profile.** It must match the equipment of the machine — [The profile](profile.md). If it does not, set it up first.

3. **Check the connections.** Every sensor must answer and be under control — see [Indicators](indicators.md) for the red cross and the not-controlled sign.

4. **Set the general parameters** in **“Settings”** → **“Seeding machine parameters”** ([Settings menu](settings-menu.md)):
   the working width, **“Width, cm”**; **“Mode of seeding”** — **“Flow”** for a grain drill; **“Mode of fertilizers”** — **“Flow”**.

5. **Set the sensors** ([Sensor settings](sensor-settings.md)):
   - speed sensor: **“Diameter, cm”** and **“Pulses”**; **“Imitation, km/h”** at **“No”**; then the speed calibration;
   - dispenser shaft sensors: **“Period, s”**; if wanted, **“Rotation speed control”** or **“Weight control”**, each followed by its calibration;
   - fans: **“Pulses”**, **“Minimum, rpm”**, **“Maximum, rpm”**;
   - pressure sensors: **“Filter”**, **“Minimum, Pa”**, **“Maximum, Pa”**;
   - implement position sensor: **“Transporting position signal”**;
   - engine sensors: **“Activation signal”**;
   - seed sensors, and separately fertilizer sensors: at least **“Fraction”** for the crop.

6. **Set up the tramline**, if the machine makes tramlines — after the profile, never before: [Set up the tramline rhythm](tramline-rhythm.md).

7. **On machines with dispenser motors:** assign the products and calibrate every motor — [Assign a product to a motor](assign-product-to-motor.md), [Calibrate a motor by weight](calibrate-motor-weight.md).
:::

> **IMPORTANT**
>
> **The panel stores a change by itself** about one and a half seconds after the last change and the last touch of a button. Wait a few seconds before switching off.

Each sensor is set separately — except the seed sensors, which share one set of settings, and the fertilizer sensors, which share another.

When everything is set, return to the **“Operator”** level (switching off and on does it) and go to [Quick start](quick-start.md).
