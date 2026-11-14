---
title: Seed or fertilizer sensor clogged, light-struck or broken
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-sensor-state.html
---

# Seed or fertilizer sensor clogged, light-struck or broken

What to do when an optical seed or fertilizer sensor reports a blocked channel, too much light, a fault of its own, or outdated firmware.

The seed and dry fertilizer sensors count the product optically: an emitter shines across the channel, a receiver sees each grain. These alarms report the state of the sensor itself, not the rate. How the window works: [How alarms work](how-alarms-work.md).

## “Clogged”

**What it means.** The seed or dry fertilizer sensor has detected that its optical channel is blocked.

**What to do, in this order:**

1. Remove the blockage.
2. Check for a build-up of dust in the channel.
3. Check the power supply of the sensor. It must meet the values in the device passport.

## “Light struck”

**What it means.** The seed or fertilizer sensor has detected an extremely high level of light in its optical channel.

**What to do:** keep direct sunlight out of the optical channel of the sensor.

## “Broken”

**What it means.** The seed or dry fertilizer sensor has detected a fault of its own. It may have to be replaced. Its status screen shows **“Faulty”**.

**What to do:** check the power supply of the sensor. It must meet the values in the device passport. If the power supply is in order, the sensor may have to be replaced — call the service support.

## “Old firmware! Wrong S&D calc!”

**What it means.** A **dry fertilizer** sensor with outdated firmware is in use while the fertilizers are in the **“Precise”** mode. It counts, but its skips and doubles cannot be trusted.

**What to do:** call the service support to have the firmware of the sensor updated — or set **“Mode of fertilizers”** to **“Flow”** or **“Hybrid”** ([Seeding machine parameters](seeding-machine-parameters.md)).

> **SEE ALSO**
>
> The status screen of the sensor shows the same states — **“Clogged”**, **“Light struck”**, **“Faulty”** — in red: [The sensor status screen](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
