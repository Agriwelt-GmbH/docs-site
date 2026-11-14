---
title: Application rate too low, too high, or not under control
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/alarms-rate.html
---

# Application rate too low, too high, or not under control

What to do when the seed, dry fertilizer or liquid fertilizer sensors report a rate below or above the allowed band, or too little product to start control at all.

The section sensors — seed, dry fertilizer and liquid fertilizer — compare the rate they measure with the target. How the window works: [How alarms work](how-alarms-work.md).

> **TIP**
>
> **Check the travel speed first.** Every rate on the panel is worked out from the distance travelled. If the speed on the screen is wrong, every rate is wrong by the same amount, and the sensors are not to blame.

## “Not under control!” / “Check seeding rate”

**What it means.** Over the set number of section sensors, the rate of the product is below the minimum needed for the panel to start controlling the application at all.

**What to check, in this order:**

1. The travel speed on the panel matches the real speed.
2. The target rate, or the minimum alarm rate — which one depends on the control mode of the group of sections.
3. There is enough product in the hoppers or in the tank.
4. Seed or dry fertilizer sensor: **“Fraction”** in its settings. The value may have to be **reduced**. See [Seed and fertilizer sensors](seed-and-fertilizer-sensors.md).
5. Liquid fertilizer sensor: **“Pulses per liter”** in its settings. The value may have to be **reduced**. See [Liquid fertilizer](liquid-fertilizer.md).
6. The metering unit: is it serviceable, and is it adjusted correctly?

## “Under allowable rate”

**What it means.** A section sensor — seed, dry fertilizer or liquid fertilizer — has measured too little product during work.

**What to check, in this order:**

1. There is enough product in the hoppers or in the tank.
2. The travel speed on the panel matches the real speed.
3. Seed or dry fertilizer sensor: **“Fraction”**. The value may have to be **reduced**.
4. Liquid fertilizer sensor: **“Pulses per liter”**. The value may have to be **reduced**.
5. Seed sensor: its status on the status screen (**“Information”** in its context menu) — see [The sensor status screen](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor).
6. The metering unit: is it serviceable, and is it adjusted correctly?

## “Over allowable rate”

**What it means.** A section sensor — seed, dry fertilizer or liquid fertilizer — has measured too much product during work.

**What to check, in this order:**

1. The travel speed on the panel matches the real speed.
2. Seed or dry fertilizer sensor: **“Fraction”**. The value may have to be **increased**.
3. Liquid fertilizer sensor: **“Pulses per liter”**. The value may have to be **increased**.
4. Seed sensor: its status on the status screen.
5. The metering unit: is it serviceable, and is it adjusted correctly?

> **SEE ALSO**
>
> How far the rate may stand from the target before these alarms is set by **“Rate error,%”** of the sensor group — [Seed and fertilizer sensors](seed-and-fertilizer-sensors.md), [Liquid fertilizer](liquid-fertilizer.md). Columns under the control line on the home screen are not guarded — [Change the target rate](set-the-target-rate.md).
