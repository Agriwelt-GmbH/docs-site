---
title: Air pressure too high or too low
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-pressure.html
---

# Air pressure too high or too low

What to do when the pressure sensor of the air system reports a pressure or vacuum outside the allowed range.

The pressure sensor measures the positive pressure or the vacuum of the air system. Both alarms look at the size of the pressure or vacuum, whichever it is, and only while the machine seeds or moves with the implement in work. The limits are described in [Pressure sensor](pressure-sensor.md). How the window works: [How alarms work](how-alarms-work.md).

## “High pressure”

**What it means.** The measured pressure or vacuum is greater than **“Maximum, Pa”**.

**What to check, in this order:**

1. Reduce the speed of the fan or turbine.
2. The position of the regulating damper of the air intake, if there is one.
3. The tube to the pressure sensor is connected correctly, and the measuring line is free of blockages.

## “Low pressure”

**What it means.** The measured pressure or vacuum is less than **“Minimum, Pa”**.

**What to check, in this order:**

1. Increase the speed of the fan or turbine.
2. The position of the regulating damper of the air intake, if there is one.
3. The air duct for leaks.
4. The tube to the pressure sensor is connected correctly, and the measuring line is free of blockages.

> **NOTE**
>
> The liquid fertilizer pump controller has its own **“High pressure”** alarm for the liquid line. It is a different alarm — see [Liquid fertilizer pump](alarms-pump-controller.md).
