---
title: Engine sensors of the fan drive
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/engine-sensors.html
---

# Engine sensors of the fan drive

The five sensors of a separate fan-drive engine on the Hectare Mini — ignition, emergency oil pressure, battery charge, low fuel, air filter — their two settings and how the ignition sensor gates the others.

Drills whose fan is driven by its own engine can watch that engine with up to five switch sensors on an input device. Each is entered in the [profile](profile.md) on its own. All five have the same two settings and the same status screen; they differ in what the signal means.

![The context menu of the ignition sensor.](figures/ctx-ignition)

| **Parameter** | **Level** | **What it does** | **Range · default** |
| --- | --- | --- | --- |
| **“Activation signal”** | Agronomist | The level on the input, **0** or **1**, that means the state in the table below. | 0 / 1 · 1 |
| **“Signal delay, sec”** | Agronomist | How long the input must hold its new level before the panel accepts the change — against false triggering from vibration or a loose contact. | 1 … 30 s · 1 s; **“Low fuel”** 15 s, **“Air filter”** 5 s |

| **Sensor** | **The activation signal means** | **Alarm** |
| --- | --- | --- |
| **“Ignition”** | The ignition of the fan-drive engine is switched on. | none — see below |
| **“Emergency oil pressure”** | The oil pressure of the engine is too low. | yes, only with the ignition on |
| **“No battery charge”** | The battery is not being charged by the engine. | yes, only with the ignition on |
| **“Low fuel”** | Little fuel is left in the tank of the engine. | yes |
| **“Air filter”** | The air filter of the engine is dirty. | yes |

The defaults of **“Signal delay, sec”** for **“Low fuel”** and **“Air filter”** are set when the sensor is reset to its defaults.

## How the ignition sensor gates the others

The ignition sensor raises no alarm of its own. It keeps the oil pressure and battery charge sensors quiet while the engine is off — with the ignition off, low oil pressure and no charging are normal. While the ignition sensor is under control, answers and signals the ignition off, these two stay quiet. If the ignition sensor is out of control or does not answer, they report whatever the state of the ignition.

That is why **“Emergency oil pressure”** and **“No battery charge”** should be in the profile only together with **“Ignition”**, and be taken out together with it.

On the home screen the ignition indicator is yellow while the ignition is off and grey while it is on — see [Indicators](indicators.md).

## The status screen

Shows **Pin:** with the present level on the input, **"0"** or **"1"** — compare it with the real state of the engine to set **“Activation signal”**. See [The sensor status screen](sensor-status-screen.md).

![The status screen of the ignition sensor.](figures/status-ignition)

The alarms and what to check: [Engine alarms](alarms-engine.md).
