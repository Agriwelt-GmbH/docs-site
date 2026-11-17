---
title: Seed sensors and dry fertilizer sensors
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/seed-and-fertilizer-sensors.html
---

# Seed sensors and dry fertilizer sensors

The parameters shared by a group of optical seed or dry fertilizer sensors — target rates, fraction, sensitivity, rate error, skips and doubles, tramline tolerance.

Seed sensors and dry fertilizer sensors are the same kind of device and share one parameter set. **Almost everything here is common to the whole group**: change it on one sensor and it changes for all sensors of the group. Only two things are set per sensor — whether it is **under control** (**“Disable control”** / **“Enable control”**) and **“Product application”**. Open the context menu of any sensor of the group as in [Sensor settings](sensor-settings.md).

![The context menu of a seed sensor, top part.](figures/ctx-seed)

| Parameter | What it does | Range | Level |
| --- | --- | --- | --- |
| **“Flow rate”** | The rate for the **“Flow”** mode, in seeds per second. Below it the section raises the low-rate alarm. | 1 … 1500 | Operator |
| **“Hybrid rate”** | The target in the **“Hybrid”** mode. | 1 … 200 | Operator |
| **“Precise rate,x10”** | The target in the **“Precise”** mode, in tenths. | 5 … 500 | Operator |
| **“Sensitivity”** | The sensitivity of sensors of an older generation; the panel sends it to them. Shown only when such a sensor is connected. | 1 … 120 | Agronomist |
| **“Fraction”** | The count filter of the sensors, set for the size of the seed or granule; the panel sends it to every sensor of the group. The rate, skip and double alarms tell you which way to change it. | 1 … 100 | Operator |
| **“Correction”** | A fine adjustment of seed detection for the sensor generation that uses it; the panel sends it to those sensors only, and the item appears only when one is connected. Default 300. | 100 … 3300, steps of 10 | Operator |
| **“Rate error,%”** | How far the actual rate may stand from the target before an alarm. | 5 … 95, steps of 5 | Agronomist |
| **“Doubles error,%”** | The share of doubles that raises an alarm. **“Precise” mode only.** | 0 … 95 | Agronomist |
| **“Skips error,%”** | The share of skips that raises an alarm. **“Precise” mode only.** | 0 … 95 | Agronomist |
| **“Recalculation,m”** / **“Recalculation,sec”** | The stretch the skips and doubles are counted over — in metres or in seconds, depending on the mode. | 10 … 50 | Operator |
| **“Percent of sowing,%”** | The share of the seed rows under control that must sow before the panel takes the drill as seeding; until then the seed and dry fertilizer sensors raise no rate, skip, double or tramline alarm. Seed sensors only; hidden on machines with metering motors or a liquid fertilizer pump controller. | 5 … 80, steps of 5 | Agronomist |
| **“Tolerable sowing to tramline,%”** | How much a section that should be shut off for the tramline may still deliver. | 0 … 50 | Agronomist |
| **“Group start address”** | Set at commissioning — see [Device configuration](device-configuration.md). | | Service |

> **TIP**
>
> **“Fraction” is the first setting to look at when the rate alarms do not match reality.** Most rate, skip and double alarms name it, with the direction to change it: [Rate alarms](alarms-rate.md), [Doubles and skips](alarms-seeding-quality.md), [Tramline alarms](alarms-tramline.md).

The target rates themselves are changed while you work, on the home screen — see [Change the target rate](set-the-target-rate.md). The status screen of these sensors shows one of eight states — see [The sensor status screen](sensor-status-screen.md#the-eight-states-of-a-seed-or-fertilizer-sensor). If a sensor reports **“Clogged”**, **“Light struck”** or **“Broken”**: [Sensor clogged or broken](alarms-sensor-state.md).

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
