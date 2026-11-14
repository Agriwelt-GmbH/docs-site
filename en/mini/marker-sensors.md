---
title: Marker sensors
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/marker-sensors.html
---

# Marker sensors

The two settings of the marker arm sensors of the Hectare Mini — which arm a single sensor watches, and which signal means "down".

Marker sensors tell the panel whether the marker arms are up or down. The home screen draws the two arms; both up are shown yellow — see [Indicators](indicators.md#markers). How many sensors watch the arms is set under **“Markers”** in the [profile](profile.md): **“One”** or **“Both”**.

Open the context menu of a marker sensor as in [Sensor settings](sensor-settings.md). Both settings need the **“Agronomist”** level.

| **Parameter** | **What it does** | **Values · default** |
| --- | --- | --- |
| **“Connected marker”** | Which arm the single sensor watches: **“Left”** or **“Right”**. Shown only with **“Markers”** at **“One”**. | · **“Left”** |
| **“Signal "down"”** | The level on the input, **0** or **1**, that means the arm is down. Set it to what the sensor gives with the arm lowered. | 0 / 1 · 0 |

The status screen of a marker sensor shows only the common lines — type, link and alarms ([The sensor status screen](sensor-status-screen.md)). A marker sensor raises only the alarms every device can raise: **“Connection lost”** and **“Wrong device type!”** — see [Device does not answer](alarms-any-device.md).
