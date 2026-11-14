---
title: Fan sensor
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/fan-sensor.html
---

# Fan sensor

The parameters of the fan speed sensor — the allowed speed band and the pulses per turn.

The fan sensor watches the speed of the fan of a pneumatic drill or planter. Open its context menu as in [Sensor settings](sensor-settings.md) — the picture there shows exactly this menu.

| Parameter | What it does | Range | Level |
| --- | --- | --- | --- |
| **“Minimum, rpm”** | Below it the panel raises **“Low speed of rotation”**. | 500 … 9000, steps of 500 | Operator |
| **“Maximum, rpm”** | Above it the panel raises **“High speed of rotation”**. | 500 … 9000, steps of 500 | Operator |
| **“Pulses”** | How many pulses one turn of the fan gives. | 1 … 60 | Agronomist |

The status screen shows the pulse frequency **F=** in Hz. Alarms: [Fan or dispenser shaft: speed alarms](alarms-rotation.md).
