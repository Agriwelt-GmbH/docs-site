---
title: Travel speed sensor failed, speed limits contradict, or poor GPS signal
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-speed-sensor.html
---

# Travel speed sensor failed, speed limits contradict, or poor GPS signal

What to do when one of two speed sensors stops giving pulses, when the minimum and maximum travel speed are set the wrong way round, or when the built-in receiver sees too few satellites.

How the window works: [How alarms work](how-alarms-work.md).

## “Speed sensor #1 failed” / “Speed sensor #2 failed”

**What it means.** The profile says the machine has **two** travel speed sensors, but the panel sees movement from only one of them. The number names the silent sensor. This alarm cannot appear on a machine with one speed sensor.

**What to do, in this order:**

1. Check that both speed sensors are serviceable, and repair what you find.
2. If one sensor cannot be repaired now: change the system profile so that only one speed sensor is used — see [The profile](profile.md).

## “Error in settings of Min/Max”

**What it means.** The minimum and the maximum travel speed set for the speed sensor contradict each other. The panel cannot decide whether the current speed is allowed.

**What to do:** check **“Min speed, km/h”** and **“Max speed, km/h”** in the settings of the speed sensor. The minimum must be below the maximum. See [Travel speed sensor](speed-sensor.md).

## “Poor GPS signal quality”

**What it means.** The speed is taken from the receiver built into the panel (**“GPS internal”** is **“Yes”**), and it sees **fewer than four satellites**. The speed it gives cannot be trusted. The satellite symbol on the home screen is red.

**What to do, in this order:**

1. Give the panel a clear view of the sky; move off from under trees, buildings or a shed roof.
2. Watch the number beside the satellite symbol: it shows how many satellites the receiver uses. Wait until it reaches four or more.
3. If the reception stays poor, take the speed from the wheel sensor: set **“GPS internal”** to **“No”** — see [GPS](gps.md) and [Travel speed sensor](speed-sensor.md).

> **NOTE**
>
> **“SLOWER” and “FASTER” are not alarm windows.** When the speed leaves the permitted range, the speed field shows **“SLOWER”** or **“FASTER”** and, at the **“Operator”** level, the alarm sound plays until you correct the speed. See [Indicators](indicators.md#speed).
