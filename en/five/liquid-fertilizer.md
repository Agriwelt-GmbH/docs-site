---
title: Liquid fertilizer sensors and pump controller
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/liquid-fertilizer.html
---

# Liquid fertilizer sensors and pump controller

The parameters of the liquid fertilizer section sensors and of the liquid fertilizer pump controller, with their ranges and defaults.

Liquid fertilizer is watched by flow sensors in the sections; on some machines a pump controller also drives the pump to the rate. Touch and hold the liquid diagram, or the pump indicator, to open the context menu ([Sensor settings](sensor-settings.md)).

## Liquid fertilizer section sensors

| **Parameter** | **What it does** | **Range, default** | **Level** |
| --- | --- | --- | --- |
| **“Pulses per liter”** | How many pulses the flow sensor gives per litre. Number pad. Hidden when a pump controller is in the profile. | 1 … 60000; 5000 | Agronomist |
| **“Rate error,%”** | How far the actual rate may stand from the target before an alarm. | 5 … 95, steps of 5; 50 | Agronomist |
| **“Tolerable leak to tramline,%”** | How much a section shut off for the tramline may still deliver. | 0 … 50; 20 | Agronomist |
| **“Group start address”** | See [Device configuration](device-configuration.md). | — | Agronomist |

The two target rates of these sensors — one for the **“Flow”** mode, one for the **“By area”** mode — have **no menu item**. They are set on the home screen, like every other target rate ([Change the target rate](set-the-target-rate.md)). The mode itself: [Seeding machine parameters](seeding-machine-parameters.md#liquid-fertilizer-mode).

## Liquid fertilizer pump controller

| **Parameter** | **What it does** | **Range, default** | **Level** |
| --- | --- | --- | --- |
| **“Pulses per liter”** | The pulses of the pump's flow measurement per litre; the panel works out the volume pumped from it. Number pad. | 100 … 10000, steps of 10; 3000 | Agronomist |
| **“Pressure sensor”** | The input of the controller the 4–20 mA pressure sensor of the line is wired to; **“No”** — none. | **“No”**, 1, 2; **“No”** | Agronomist |
| **“Pressure boundary, Bar”** | The pressure the sensor reports at the top of its range (20 mA). Set it from the data sheet of the sensor. | 0.0 … 50.0; 16.0 | Agronomist |
| **“Max pressure, Bar”** | Above it the controller raises **“High pressure”**. 0.0 switches the alarm off. | 0.0 … 50.0; 0.0 | Operator |
| **“Section control D.I.”** | An input of the controller that shuts the pump off: **“Shut off(0)”** when the input reads 0, **“Shut off(1)”** when it reads 1; **“No”** — not used. | **“No”** / **“Shut off(0)”** / **“Shut off(1)”** | Agronomist |
| **“Start delay,mS”** | The shortest time, in milliseconds, between two starts of the pump. | 0 … 500, steps of 5; 30 | Service |
| **“Group start address”** | See [Device configuration](device-configuration.md). | — | Agronomist |

The two pressure values are entered with one decimal place. With a pump controller, the liquid rate is always worked by area.

The status screen of the pump controller shows the flow, the pump load and the line pressure — see [The sensor status screen](sensor-status-screen.md#what-each-kind-of-sensor-adds). Alarms: [Liquid fertilizer pump](alarms-pump-controller.md), [Rate alarms](alarms-rate.md).
