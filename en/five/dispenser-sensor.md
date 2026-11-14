---
title: Dispenser shaft sensor
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/dispenser-sensor.html
---

# Dispenser shaft sensor

The parameters of the dispenser shaft sensor — rotation control against the wheel, or weight control by the mass applied — with ranges and defaults.

The dispenser shaft sensor counts the turns of a dispenser driven from the ground wheel. The panel can watch it two ways: by its **rotation** against the speed sensor, or by the **mass** of product it applies. Touch and hold the metering unit icon on the home screen to open its context menu ([Sensor settings](sensor-settings.md)).

![The context menu of a dispenser sensor with both controls switched off.](figures/five-ctx-dispenser)

| **Parameter** | **What it does** | **Range, default** | **Level** |
| --- | --- | --- | --- |
| **“Period, s”** | How long the shaft may give no pulse before it counts as stopped — and how long after the start of seeding or moving the panel waits before it expects rotation. | 1 … 60; 10 | Operator |
| **“Rotation speed control”** | Watch the shaft rotation against the travel speed. | **“No”** / **“Yes”**; **“No”** | Agronomist |
| **“Wheel, pulses”** | Set by the rotation calibration. Shown with rotation control on. | 1 … 65535; 100 | Agronomist |
| **“Dispenser pulses”** | Set by the rotation calibration. Shown with rotation control on. | 1 … 65535; 100 | Agronomist |
| **“Maximum error, %”** | How far the shaft speed may stand from the speed the travel speed asks for before **“Low speed of rotation”** or **“High speed of rotation”**. Shown with rotation control on. | 1 … 50; 10 | Agronomist |
| **“Weight control”** | Watch the dispenser by the **mass** applied instead of by its rotation. | **“No”** / **“Yes”**; **“No”** | Agronomist |
| **“Type of product”** | Which of the four products this dispenser meters. Shown with weight control on. | **“Product 1”** … **“Product 4”** | Agronomist |
| **“Weight, gr”** / **“Weight, pulses”** | Both set by the calibration by weight. Shown with weight control on. Number pad. | 1 … 65535 each | Agronomist |

**Without a speed sensor in the profile, only “Period, s” is offered** — both kinds of control need the travel speed. With **“Weight control”** switched on, the context menu also holds **“Dispenser calibration(weight)”**.

> **TIP**
>
> **Prefer weight control to rotation control.** Rotation control notices that the shaft has stopped, not that the product has. **“Weight control”** watches the kilograms per hectare applied and catches an empty or bridged hopper whose dispenser still turns.

## Calibrations

- **Rotation** — for **“Rotation speed control”**: [Calibrate the dispenser rotation](calibrate-dispenser-rotation.md).
- **Mass** — for **“Weight control”**; repeat it whenever the product changes: [Calibrate the dispenser by weight](calibrate-dispenser-weight.md).

The status screen shows the shaft pulse frequency **F=** in Hz, to three decimals. Its alarms: [Fan or dispenser shaft: speed alarms](alarms-rotation.md), and with weight control [Dosing by weight](alarms-dosing-by-weight.md).
