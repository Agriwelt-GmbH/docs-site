---
title: Travel speed sensor failed, or speed limits contradict
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/alarms-speed-sensor.html
---

# Travel speed sensor failed, or speed limits contradict

What to do when one of two speed sensors stops giving pulses, or when the minimum and maximum travel speed are set the wrong way round.

How the window works: [How alarms work](how-alarms-work.md).

## “Speed sensor #1 failed” / “Speed sensor #2 failed”

**What it means.** The profile says the machine has **two** travel speed sensors, but the panel sees movement from only one of them. The number names the silent sensor. This alarm cannot appear on a machine with one speed sensor.

**What to do, in this order:**

1. Check that both speed sensors are serviceable, and repair what you find.
2. If one sensor cannot be repaired now: change the system profile so that only one speed sensor is used — see [The profile](profile.md).

## “Error in settings of Min/Max”

**What it means.** The minimum and the maximum travel speed set for the speed sensor contradict each other. The panel cannot decide whether the current speed is allowed.

**What to do:** check **“Min speed, km/h”** and **“Max speed, km/h”** in the settings of the speed sensor. The minimum must be below the maximum. See [Speed sensor](speed-sensor.md).

> **NOTE**
>
> **“SLOWER” and “FASTER” are not alarms.** When the speed leaves the permitted range, no alarm window opens: the home screen shows **“SLOWER”** or **“FASTER”** and keeps showing it while you correct the speed. See [Indicators](indicators.md).
