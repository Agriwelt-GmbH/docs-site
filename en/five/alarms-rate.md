---
title: Application rate too low or too high
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-rate.html
---

# Application rate too low or too high

What to do when the seed, dry fertilizer or liquid fertilizer sensors report a rate below or above the allowed band, and what NOT UNDER CONTROL means.

The section sensors — seed, dry fertilizer and liquid fertilizer — compare the rate they measure with the target. How the window works: [How alarms work](how-alarms-work.md).

| **Mode of the group** | **“Under allowable rate”** | **“Over allowable rate”** |
| --- | --- | --- |
| **“Flow”** | The flow falls below the alarm level — the control line of the diagram. | Not raised. |
| **“Hybrid”**, **“Precise”** | The rate falls below the target by more than **“Rate error,%”**. | The rate rises above the target by more than **“Rate error,%”**. |

> **TIP**
>
> **Check the travel speed first.** Every rate per metre or per hectare is worked out from the distance travelled. If the speed on the screen is wrong, every rate is wrong by the same amount, and the sensors are not to blame.

## “Under allowable rate”

**What it means.** A section sensor — seed, dry fertilizer or liquid fertilizer — has measured too little product during work.

**What to check, in this order:**

1. There is enough product in the hoppers or in the tank.
2. The travel speed on the panel matches the real speed.
3. Seed or dry fertilizer sensor: **“Fraction”**. The value may have to be **reduced**. See [Seed sensors and dry fertilizer sensors](seed-and-fertilizer-sensors.md).
4. Liquid fertilizer sensor: **“Pulses per liter”**. The value may have to be **reduced**. See [Liquid fertilizer](liquid-fertilizer.md).
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

## “NOT UNDER CONTROL” — no window

When rows run under the control line, the home screen shows **“NOT UNDER CONTROL”** in red and, at the **“Operator”** level, the alarm sound plays — but no alarm window opens. The rows under the line are not guarded.

**What to check, in this order:**

1. The travel speed on the panel matches the real speed.
2. The alarm level of the diagram: is it above the rate the machine really applies? Lower it, or let the panel set it — [Set the alarm level](set-the-alarm-level.md).
3. There is enough product in the hoppers or in the tank.
4. **“Fraction”** of the seed or fertilizer sensors, or **“Pulses per liter”** of the liquid sensors — the value may have to be **reduced**.
5. The metering unit: is it serviceable, and is it adjusted correctly?

What the line means: [The section diagram](section-diagram.md#the-line-rows-under-it-are-not-under-control).
