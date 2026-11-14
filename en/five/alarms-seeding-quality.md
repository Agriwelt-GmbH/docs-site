---
title: Too many doubles or skips
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-seeding-quality.html
---

# Too many doubles or skips

What to do when a seed sensor of a precision planter counts more doubles or skips than allowed.

Doubles and skips are counted only in the **“Precise”** mode of seeding — on a precision planter. Each alarm is raised only if its limit is set: **“Doubles error,%”** and **“Skips error,%”** at **“No”** switch it off. How the window works: [How alarms work](how-alarms-work.md).

## “High % of doubles”

**What it means.** The share of doubles the sensor counts is higher than **“Doubles error,%”**.

**What to check, in this order:**

1. The travel speed on the panel matches the real speed.
2. **“Doubles error,%”** in the settings of the seed sensors — is the limit sensible? See [Seed sensors and dry fertilizer sensors](seed-and-fertilizer-sensors.md).
3. **“Fraction”** in the settings of the seed sensors. The value may have to be **increased**.
4. The sensor's status on its status screen — see [The sensor status screen](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
5. The metering unit: is it serviceable, and is it adjusted correctly?

## “High % of skips”

**What it means.** The share of skips the sensor counts is higher than **“Skips error,%”**.

**What to check, in this order:**

1. The travel speed on the panel matches the real speed.
2. There is enough seed in the hoppers.
3. **“Skips error,%”** in the settings of the seed sensors — is the limit sensible?
4. **“Fraction”** in the settings of the seed sensors. The value may have to be **reduced**.
5. The sensor's status on its status screen.
6. The metering unit: is it serviceable, and is it adjusted correctly?

The stretch over which the shares are counted is **“Recalculation,m”** of the seed sensors. How the skips and doubles look on the diagram: [The section diagram](section-diagram.md).
