---
title: Travel speed: SLOWER, FASTER and speed sensor alarms
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-speed-sensor.html
---

# Travel speed: SLOWER, FASTER and speed sensor alarms

What to do when the Hectare Mini shows SLOWER or FASTER, when a speed sensor fails, or when the speed limits cannot be met.

The travel speed outside its limits raises **no alarm window**. The speed indicator on the home screen shows **“SLOWER”** or **“FASTER”** instead of the figure, as long as the speed is wrong — see [Indicators](indicators.md#speed). The limits are **“Min speed, km/h”** and **“Max speed, km/h”** of the speed sensor ([Travel speed sensor](speed-sensor.md)); they are watched only while the panel is controlling the seeding.

## “SLOWER”

**What it means.** The machine moves faster than **“Max speed, km/h”** permits.

**What to check, in this order:**

1. Drive slower.
2. The speed on the panel matches the real speed — compare with the tractor or a GPS.
3. The settings of the speed sensor: **“Pulses”**, **“Diameter, cm”**, **“Factor, %”**, **“Max speed, km/h”**.
4. Calibrate the speed sensor — [Calibrate the speed sensor](calibrate-speed.md).
5. The speed sensor itself is serviceable.

## “FASTER”

**What it means.** The machine moves slower than **“Min speed, km/h”** permits.

**What to check, in this order:**

1. Drive faster.
2. The speed on the panel matches the real speed.
3. The settings of the speed sensor, including **“Min speed, km/h”**.
4. Calibrate the speed sensor.
5. The speed sensor itself is serviceable.

While the speed is imitated, the indicator shows **“INCREASE IMITATION”** or **“DECREASE IMITATION”** instead: change **“Imitation, km/h”**.

## “Speed sensor #1 failed” / “Speed sensor #2 failed”

**What it means.** Only with two speed sensors on an input device (**“Input device (2)”** in the profile): the machine moves, but this sensor has given no pulse for too long.

**What to check, in this order:**

1. The gap between the sensor and its target, and the target itself.
2. The connector and cable of the sensor up to the input device.
3. The sensor itself — swap the two sensors; if the fault moves, the sensor is faulty.

## “Error in settings of Min/Max”

**What it means.** On a machine whose motors dose by weight: a speed limit set on the speed sensor cannot be met together with the speeds the motors can dose at — the minimum lies at or above the highest dosing speed, or the maximum at or below the lowest.

**What to check, in this order:**

1. The status screen of the speed sensor: it shows the limits in force and writes the impossible one in red — [The sensor status screen](sensor-status-screen.md).
2. **“Min speed, km/h”** and **“Max speed, km/h”** of the speed sensor.
3. The target rates of the products and the speed limits of the motors — [Calibrate a motor by weight](calibrate-motor-weight.md).
