---
title: Pressure sensor
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/pressure-sensor.html
---

# Pressure sensor

The parameters of the air pressure sensor — the smoothing filter and the allowed pressure band — with ranges, defaults and when the band is watched.

The pressure sensor measures the positive pressure or the vacuum of the air system. Touch and hold the pressure icon on the home screen to open its context menu ([Sensor settings](sensor-settings.md)).

| **Parameter** | **What it does** | **Range, default** | **Level** |
| --- | --- | --- | --- |
| **“Filter”** | How strongly the sensor smooths its reading. | 1 … 16; 1 | Agronomist |
| **“Minimum, Pa”** | The lower limit of the allowed band. **“No”** (0) switches the low-pressure check off. | 0 … 10000, steps of 100; **“No”** | Operator |
| **“Maximum, Pa”** | The upper limit of the allowed band. **“No”** (0) switches the high-pressure check off. | 0 … 10000, steps of 100; **“No”** | Operator |

The band is watched only while the machine seeds, or moves with the implement in work. Both limits apply to the size of the pressure or vacuum, whichever it is. The limits are set in pascals; the home screen and the status screen show the pressure **P=** in kilopascals (1 kPa = 1000 Pa).

Alarms: [Air pressure](alarms-pressure.md). Giving a new pressure sensor its address: [Configure a pressure sensor](configure-pressure-sensor.md).
