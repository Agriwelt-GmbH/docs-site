---
title: Seed sensors and dry fertilizer sensors
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/seed-and-fertilizer-sensors.html
---

# Seed sensors and dry fertilizer sensors

The parameters shared by a group of optical seed or dry fertilizer sensors — fraction, sensitivity, rate error, skips and doubles, percent of sowing, tramline tolerance — and the per-sensor switch for product application.

Seed sensors and dry fertilizer sensors are the same kind of device and share one parameter set. **Almost everything here is common to the whole group**: change it on one sensor and it changes for all sensors of the group. Only two things are set per sensor — whether it is **under control** (**“Disable control”** / **“Enable control”**) and **“Product application”**. Touch and hold the column of any sensor of the group to open its context menu ([Sensor settings](sensor-settings.md)).

![The context menu of a seed sensor, top part.](figures/five-ctx-seed)

| **Parameter** | **What it does** | **Range, default** | **Level** |
| --- | --- | --- | --- |
| **“Product application”** | **Per sensor.** **“No”** — the row deliberately applies nothing, and the panel watches it as a shut-off tramline row. Not offered when every sensor of the group has its own dispenser motor. | **“No”** / **“Yes”** | Agronomist |
| **“Sensitivity”** | The sensitivity of the optical channel. Shown only for the sensor types that use it. | 1 … 120; 80 | Agronomist |
| **“Fraction”** | The sensor's filter for the size of the product particles. The rate, skip and double alarms tell you in which direction to change it. | 1 … 100; 10 | Operator |
| **“Correction”** | A correction of the detection window of the optical channel. Shown only for the sensor type that uses it. | 100 … 3300, steps of 10; 300 | Operator |
| **“Rate error,%”** | How far the actual rate may stand from the target before an alarm. **“Hybrid”** and **“Precise”** modes only. | 5 … 95, steps of 5; 50 | Agronomist |
| **“Doubles error,%”** | The share of doubles that raises an alarm. **“No”** (0) switches the alarm off. **“Precise” mode only.** | 0 … 95; **“No”** | Agronomist |
| **“Skips error,%”** | The share of skips that raises an alarm. **“No”** (0) switches the alarm off. **“Precise” mode only.** | 0 … 95; **“No”** | Agronomist |
| **“Recalculation,m”** / **“Recalculation,sec”** | The stretch the skips and doubles are counted over — in metres on a machine with a speed sensor, in seconds without one. | 10 … 50; 20 | Operator |
| **“Percent of sowing,%”** | The share of the seed sensors under control that must see seed before the panel decides that seeding has started. Seed sensors only; hidden on a machine with dispenser motors or a pump. | 5 … 80, steps of 5; 20 | Agronomist |
| **“Toler.sowing to tramline,%”** | How much a section that should be shut off for the tramline may still deliver. | 0 … 50; 20 | Agronomist |
| **“Group start address”** | Fertilizer sensors only. Set at commissioning — see [Device configuration](device-configuration.md). | — | Agronomist |

> **TIP**
>
> **“Fraction” is the first setting to look at when the rate alarms do not match reality.** Most rate, skip and double alarms name it, with the direction to change it: [Rate alarms](alarms-rate.md), [Doubles and skips](alarms-seeding-quality.md), [Tramline alarms](alarms-tramline.md).

The target rates and the alarm level are not menu items: they are changed while you work, on the home screen — see [Change the target rate](set-the-target-rate.md). The status screen of these sensors shows one of eight states — see [The sensor status screen](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor). If a sensor reports **“Clogged”**, **“Light struck”** or **“Broken”**: [Sensor clogged or broken](alarms-sensor-state.md).

## Fraction for the crop {#fraction-for-the-crop}

Go by the size of the seed:

| **Crop** | **“Fraction”** |
| --- | --- |
| Rapeseed | 1 – 5 |
| Wheat | 5 – 10 |
| Maize | 10 – 30 |
| Sunflower | 10 – 30 |

On pneumatic drills set **1** whatever the crop. Too high a fraction makes small seeds disappear from the count — the panel then reports too low a rate.

> **IMPORTANT**
>
> **Change “Correction” only after talking to the service.** It is needed in rare cases only; a wrong value makes the sensors miss seed or count dust.
