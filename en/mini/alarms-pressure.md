---
title: Pressure alarms: High pressure, Low pressure
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-pressure.html
---

# Pressure alarms: High pressure, Low pressure

What to do when the vacuum measured by a pressure sensor of the Hectare Mini is too high or too low.

The panel compares the absolute value of the measured pressure with **“Minimum, Pa”** and **“Maximum, Pa”** of the sensor ([Pressure sensor](pressure-sensor.md)), while the machine sows or moves in the working position. The device line names the sensor: **Pressure sensor: #1**.

## “High pressure”

**What it means.** The measured pressure is above **“Maximum, Pa”** — too much vacuum.

**What to check, in this order:**

1. Lower the speed of the fan or turbine.
2. The damper of the air intake, if the machine has one.
3. The tube to the pressure sensor: connected at the right point, not kinked, not blocked.
4. **“Maximum, Pa”** of the sensor.

## “Low pressure”

**What it means.** The measured pressure is below **“Minimum, Pa”** — too little vacuum.

**What to check, in this order:**

1. Raise the speed of the fan or turbine.
2. The damper of the air intake, if the machine has one.
3. The air ducts and meters for leaks — hoses, seals, covers.
4. The tube to the pressure sensor: connected at the right point, not kinked, not blocked.
5. **“Minimum, Pa”** of the sensor.

The measured pressure is on the status screen of the sensor, **P=** in kPa — compare it with the limits, which are set in Pa (1 kPa = 1000 Pa).
