---
title: Work without the speed sensor
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/work-without-speed-sensor.html
---

# Work without the speed sensor

When the speed sensor fails in the field — finish the work on a simulated speed and control the application by hand.

**Symptom.** The speed field shows **XX.X** in red, or the speed stays at zero although the machine moves. Without a speed, the panel cannot calculate area, rates or deviations, and the dispenser motors do not know how fast to turn.

**Cause.** The speed sensor or its input device does not answer, or the wheel no longer gives pulses. See [Speed sensor alarms](alarms-speed-sensor.md).

**What to do.** Finish the field on a **simulated speed** and switch the application on and off by hand.

> **WARNING**
>
> **With speed imitation on, the panel drives the dispenser motors and the pump as if the machine were moving** — also while it stands. Switch imitation off before you leave the cab, and lock application whenever you stop.

::: steps
1. On the home screen, touch and hold the speed field. Its context menu opens.

2. Set **“Imitation, km/h”** to the speed you will drive. This item needs the Agronomist level: [Enable the Agronomist level](enable-agronomist-level.md).

3. Return to the **Operator** level, so that alarms are shown again.

4. The speed field now shows a yellow figure alternating with **“IMITATION”** ([Speed](indicators.md#speed)).

5. Control the application with the **manual lock**: hold **“HOME”** to stop applying at the headland, hold it again to start on the next pass. While the lock is on, the yellow hand shows at the right edge and the speed reads zero. See [Lock application by hand](lock-application-by-hand.md).

6. Drive at the speed you set. The rates are right only as long as the real speed matches it.
:::

When the sensor is repaired, set **“Imitation, km/h”** back to 0.

Details of the speed sensor settings: [Speed sensor](speed-sensor.md).
