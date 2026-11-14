---
title: Hopper, work position and engine sensors
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/hopper-position-engine-sensors.html
---

# Hopper, work position and engine sensors

The settings of the two-state sensors — hopper level, work position of the implement, and the five tractor engine sensors.

These sensors report one of two states and nothing more. Open the context menu of any of them as in [Sensor settings](sensor-settings.md). Their status screen shows **Pin:** and the level on the input, **"0"** or **"1"**.

## Hopper sensor

The hopper sensor has **no parameters of its own** — its context menu holds only the three common items.

![The context menu of a hopper sensor.](figures/ctx-hopper)

Alarm: [Hopper empty](alarms-hopper.md).

## Work position sensor

The work position sensor tells the panel whether the implement is lowered for work or raised for transport. The status screen shows **Position: Working** or **Position: Transporting**.

![The context menu of the work position sensor.](figures/ctx-work-position)

| Parameter | What it does | Range | Level |
| --- | --- | --- | --- |
| **“Transporting position signal”** | Which state of the input means the transport position. | 0 / 1 | Agronomist |

The menu can also hold **“Alarms criteria”** (**“Yes”** / **“No”**, **“Agronomist”** level): with **“Yes”**, the default, the seed, fertilizer and dispenser shaft alarms are not raised while the implement is in the transport position; the item is hidden, and always **“Yes”**, on machines with metering motors or a liquid fertilizer pump controller.

## Engine sensors

**“No battery charge”**, **“Emergency oil pressure”**, **“Ignition”**, **“Low fuel”** and **“Air filter”** are five separate inputs, each switched on in the profile on its own ([The profile](profile.md)).

![The context menu of the oil pressure sensor.](figures/ctx-oil-pressure)

| Parameter | What it does | Level |
| --- | --- | --- |
| **“Activation signal”** | Which state of the input is the one worth reporting. | Agronomist |
| **“Signal delay, sec”** | How long that state must hold before it counts. Defaults: **15 s** for the fuel level, **5 s** for the air filter. | Agronomist |

Alarms: [Tractor engine alarms](alarms-tractor.md).
