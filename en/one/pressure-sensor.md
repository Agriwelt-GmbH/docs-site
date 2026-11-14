---
title: Pressure sensor
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/pressure-sensor.html
---

# Pressure sensor

The parameters of the air pressure sensor — the smoothing filter and the allowed pressure band.

The pressure sensor measures the positive pressure or the vacuum of the air system. Open its context menu as in [Sensor settings](sensor-settings.md).

| Parameter | What it does | Range | Level |
| --- | --- | --- | --- |
| **“Filter”** | How strongly the reading is smoothed. | 1 … 16 | Agronomist |
| **“Minimum, Pa”** | The lower limit of the allowed band. | 0 … 10000, steps of 100 | Operator |
| **“Maximum, Pa”** | The upper limit of the allowed band. | 0 … 10000, steps of 100 | Operator |

The status screen shows the pressure **P=** in kPa. Alarms: [Air pressure](alarms-pressure.md). Giving a new pressure sensor its address: [Configure a pressure sensor](configure-pressure-sensor.md).
