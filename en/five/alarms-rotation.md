---
title: Fan or dispenser shaft: speed alarms
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-rotation.html
---

# Fan or dispenser shaft: speed alarms

What to do when the fan or the dispenser shaft turns too slowly, too fast, or not at all.

The fan sensor and the dispenser shaft sensor use the same two messages. **The device name in the alarm window tells you which one it is.** How the window works: [How alarms work](how-alarms-work.md).

## “Low speed of rotation” / “High speed of rotation”

**What it means.** The fan or the dispenser shaft turns slower or faster than allowed. For the fan the limits are **“Minimum, rpm”** and **“Maximum, rpm”**; for the dispenser shaft the panel compares it with the speed the travel speed asks for, within **“Maximum error, %”**.

**What to check, in this order:**

1. The component being watched — the fan or the dispenser and its drive.
2. The settings of the sensor: for the fan **“Minimum, rpm”**, **“Maximum, rpm”** and **“Pulses”** — see [Fan sensor](fan-sensor.md); for the dispenser — see [Dispenser shaft sensor](dispenser-sensor.md).
3. **Dispenser only:** the travel speed on the panel matches the real speed.
4. The sensor itself is serviceable.
5. **Dispenser only:** run the calibration — see [Calibrate the dispenser rotation](calibrate-dispenser-rotation.md).

## “No rotation”

**What it means.** The dispenser shaft does not turn while the machine seeds or moves. Only the dispenser shaft sensor raises this alarm. The shaft counts as stopped when no pulse has come for **“Period, s”**.

**What to check, in this order:**

1. The dispenser and its drive.
2. The settings of the sensor, above all **“Period, s”** — see [Dispenser shaft sensor](dispenser-sensor.md).
3. The sensor itself is serviceable.
