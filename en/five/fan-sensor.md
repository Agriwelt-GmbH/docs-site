---
title: Fan sensor
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/fan-sensor.html
---

# Fan sensor

The parameters of the fan speed sensor — the allowed speed band and the pulses per turn — with ranges and defaults.

The fan sensor watches the speed of the fan of a pneumatic drill or planter. Touch and hold the fan icon on the home screen to open its context menu ([Sensor settings](sensor-settings.md)).

| **Parameter** | **What it does** | **Range, default** | **Level** |
| --- | --- | --- | --- |
| **“Minimum, rpm”** | Below it the panel raises **“Low speed of rotation”**. | 500 … 9000, steps of 500; 3000 | Operator |
| **“Maximum, rpm”** | Above it the panel raises **“High speed of rotation”**. | 500 … 9000, steps of 500; 5000 | Operator |
| **“Pulses”** | How many pulses one turn of the fan gives. | 1 … 60; 2 | Agronomist |

![The context menu of a fan sensor at the Agronomist level.](figures/five-ctx-fan)

The home screen shows the fan speed in rpm beside the icon; the status screen shows the pulse frequency **F=** in Hz. Alarms: [Fan or dispenser shaft: speed alarms](alarms-rotation.md).
