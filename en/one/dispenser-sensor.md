---
title: Dispenser shaft sensor
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/dispenser-sensor.html
---

# Dispenser shaft sensor

The parameters of the dispenser shaft sensor — rotation control against the wheel, or weight control by the mass applied.

The dispenser shaft sensor counts the turns of a dispenser driven from the ground wheel. The panel can watch it two ways: by its **rotation** against the speed sensor, or by the **mass** of product it applies. Open its context menu as in [Sensor settings](sensor-settings.md).

![The context menu of a dispenser sensor with both controls switched off.](figures/ctx-dispenser)

| Parameter | What it does | Range | Level |
| --- | --- | --- | --- |
| **“Period, s”** | The longest time between two shaft pulses. If the shaft gives no pulse for longer while the machine sows or moves, the panel raises **“No rotation”**. Default 10 s. | 1 … 60 | Operator |
| **“Rotation speed control”** | Watch the shaft rotation against the travel speed. | **“No”** / **“Yes”** | Agronomist |
| **“Wheel, pulses”** | Set by the rotation calibration. | 1 … 65535 | Agronomist |
| **“Dispenser pulses”** | Set by the rotation calibration. | 1 … 65535 | Agronomist |
| **“Maximum error, %”** | How far the shaft speed may stand from the speed the travel speed calls for; beyond it, while the machine moves, the panel raises **“Low speed of rotation”** or **“High speed of rotation”**. Shown only when **“Rotation speed control”** is **“Yes”**. Default 10 %. | 1 … 50 | Agronomist |
| **“Weight control”** | Watch the dispenser by the **mass** applied instead of by its rotation. | **“No”** / **“Yes”** | Agronomist |
| **“Type of product”** | Which product this dispenser meters. | | Agronomist |
| **“Weight, gr”** / **“Weight, pulses”** | Both set by the calibration by weight. | 1 … 65535 each | Agronomist |

With **“Weight control”** switched on, the context menu also holds **“Dispenser calibration(weight)”**.

> **TIP**
>
> **Prefer weight control to rotation control.** Rotation control notices that the shaft has stopped, not that the product has. **“Weight control”** watches the kilograms per hectare applied and catches an empty or bridged hopper whose dispenser still turns.

## Calibrations

- **Rotation** — for **“Rotation speed control”**: [Calibrate the dispenser rotation](calibrate-dispenser-rotation.md).
- **Mass** — for **“Weight control”**; repeat it whenever the product changes: [Calibrate the dispenser by weight](calibrate-dispenser-weight.md).

The status screen shows the shaft pulse frequency **F=** in Hz, to three decimals. Its alarms: [Fan or dispenser shaft: speed alarms](alarms-rotation.md), and with weight control [Dosing by weight](alarms-dosing-by-weight.md).
