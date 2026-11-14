---
title: Work without the speed sensor
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/work-without-speed-sensor.html
---

# Work without the speed sensor

When the speed sensor fails in the field — take the speed from GPS, or finish the work on a simulated speed and control the application by hand.

**Symptom.** The speed field shows **XX.X** in red, or the speed stays at zero although the machine moves. Without a speed, the panel cannot calculate area, rates or deviations, and the dispenser motors do not know how fast to turn.

**Cause.** The speed sensor or the device that carries it does not answer, or the wheel no longer gives pulses.

**What to do.** Two ways, both through the context menu of the speed sensor — touch and hold the speed field. Both items need the Agronomist level: [Enable the Agronomist level](enable-agronomist-level.md).

## Take the speed from GPS

Set **“GPS internal”** to **“Yes”**. The panel takes the travel speed from its own receiver. Watch the satellite symbol in the right-hand column: green or yellow is usable, red is not. See [GPS](gps.md).

## Work on a simulated speed

> **WARNING**
>
> **With speed imitation on, the panel drives the dispenser motors and the pump as if the machine were moving** — also while it stands. Switch imitation off before you leave the cab, and lock application whenever you stop.

::: steps
1. Touch and hold the speed field. Its context menu opens.

2. Set **“Imitation, km/h”** to the speed you will drive, up to 20 km/h. The panel tells you **“Settings of Min and Max speed switched off!”** — the speed limits are not watched while the speed is simulated.

3. The panel locks product application by itself: the yellow hand appears in the right-hand column.

4. Return to the **Operator** level, so that alarms are shown again.

5. The speed field now shows a yellow figure alternating with **“IMITATION”** ([Speed](indicators.md#speed)).

6. Control the application with the **manual lock**: touch and hold an empty place of the right-hand column to start applying on a pass, and again to stop at the headland. See [Lock product application by hand](lock-application-by-hand.md).

7. Drive at the speed you set. The rates are right only as long as the real speed matches it.
:::

When the sensor is repaired, set **“Imitation, km/h”** back to **“No”** — swipe left until the value reads **“No”** — and set the speed limits again.

> **NOTE**
>
> **A panel switched on with imitation still set starts locked.** If nothing is applied after a restart, look for the yellow hand.

Details of the speed sensor settings: [Speed sensor](speed-sensor.md).
