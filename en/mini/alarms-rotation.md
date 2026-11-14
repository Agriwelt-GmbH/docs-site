---
title: Fan or dispenser shaft: speed alarms
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-rotation.html
---

# Fan or dispenser shaft: speed alarms

What to do when the fan or a dispenser shaft of the Hectare Mini turns too slowly, too fast, or not at all.

The fan sensor and the dispenser shaft sensor use the same two messages. **The device line of the alarm window tells you which one** — **Fan** or **Dispenser**, with its number. How the window works: [How alarms work](how-alarms-work.md).

## “Low speed of rotation”

**What it means.** The fan turns slower than **“Minimum, rpm”**, or the dispenser shaft slower than the travel speed demands, by more than **“Maximum error, %”**.

**What to check, in this order:**

1. **Dispenser only:** the speed on the panel matches the real speed.
2. The component being watched — the fan and its drive, or the dispenser and its drive.
3. The settings of the sensor: for the fan **“Minimum, rpm”** and **“Pulses”** — [Fan sensor](fan-sensor.md); for the dispenser **“Maximum error, %”** — [Dispenser shaft sensor](dispenser-sensor.md).
4. The sensor itself is serviceable.
5. **Dispenser only:** calibrate the rotation again — [Calibrate the dispenser rotation](calibrate-dispenser-rotation.md).

## “High speed of rotation”

**What it means.** The fan turns faster than **“Maximum, rpm”** — this is watched also when the machine stands — or the dispenser shaft faster than the travel speed demands, by more than **“Maximum error, %”**.

**What to check, in this order:**

1. **Dispenser only:** the speed on the panel matches the real speed.
2. The component being watched — the fan and its drive, or the dispenser and its drive.
3. The settings of the sensor: for the fan **“Maximum, rpm”** and **“Pulses”**; for the dispenser **“Maximum error, %”**.
4. The sensor itself is serviceable.
5. **Dispenser only:** calibrate the rotation again.

The dispenser shaft speed is watched only with **“Rotation speed control”** at **“Yes”**, and only while the machine moves.

## “No rotation”

**What it means.** The dispenser shaft gives no pulse for longer than **“Period, s”** while the machine sows or moves. Only the dispenser shaft sensor raises this alarm.

**What to check, in this order:**

1. The dispenser and its drive — chain, clutch, shear pin.
2. **“Period, s”** of the sensor: long enough for the slowest shaft speed at work — [Dispenser shaft sensor](dispenser-sensor.md).
3. The gap between the sensor and its target, and the sensor itself.
