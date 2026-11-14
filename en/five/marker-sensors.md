---
title: Marker sensors
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/marker-sensors.html
---

# Marker sensors

The parameters of the marker sensors — which marker a sensor watches and which input state means "lowered".

The marker sensors tell the panel which marker is down. The profile declares **“No”**, **“One”** or **“Both”** ([The profile](profile.md)). Touch and hold the marker icon on the home screen to open the context menu of a marker sensor ([Sensor settings](sensor-settings.md)).

| **Parameter** | **What it does** | **Values, default** | **Level** |
| --- | --- | --- | --- |
| **“Connected marker”** | Which marker the single sensor watches. Hidden when the profile has both markers. | **“Left”** / **“Right”**; **“Left”** | Agronomist |
| **“Signal "down"”** | Which state of the input means the marker is lowered. | 0 / 1; 0 | Agronomist |

The status screen of a marker sensor shows only the common lines. On a machine that makes tramlines, the change of the marker position ends a bout — see [Set up the tramline rhythm](tramline-rhythm.md#how-the-bout-changes).

> **NOTE**
>
> **The marker sensors are wired to the tramline actuator controller.** One such controller carries the actuator **and** both marker sensors — see [Configure a tramline actuator controller](configure-tramline-actuator.md).
