---
title: Sensor settings
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/sensor-settings.html
---

# Sensor settings

How to reach the settings of one sensor, what its context menu holds, and which calibrations exist.

Every sensor, actuator and motor on the machine has its own settings and its own status screen. Both are reached from the home screen. The parameters of each kind of sensor are in the topics that follow this one.

## Reach a sensor

::: steps
1. On the home screen **hold “MENU”** for a few seconds. The panel enters the sensor setting mode; the selected sensor is drawn inside a white rectangle.

2. Move from sensor to sensor with **“UP”** / **“DOWN”**. **“PLUS”** takes the selected sensor into control, **“MINUS”** takes it out — see [Take a sensor in and out of control](sensor-in-and-out-of-control.md).

3. Press **“MENU”**. The context menu of the selected sensor opens.

   ![The context menu of the speed sensor.](figures/ctx-speed)

4. Press **“BACK”** to leave the mode.
:::

Holding a sensor tile on the screen opens the same context menu directly.

## The context menu

::: {.anatomy fig="ctx-fan"}
1. **“Information”** — opens the status screen of this sensor. [The sensor status screen](sensor-status-screen.md).
2. **“Disable control”** / **“Enable control”** — takes the sensor out of monitoring, or back in. The first time in a session the panel asks for confirmation.
3. **The parameters of this sensor** — here the three of a fan sensor. Which of them you see depends on the access level.
4. **The current value.** Select the line; the value stands between **–** and **+** and changes with **“MINUS”** / **“PLUS”**.
5. **“Reset to defaults”** — returns this sensor's parameters to the factory values. **Service** level only.

The context menu of a fan sensor at the **“Agronomist”** level.
:::

![The confirmation asked before control is switched off.](figures/confirm-disable-control)

## The status screen

**“Information”** opens the status screen of the sensor: its identity, its link, its live figures and its active alarms. How to read it: [The sensor status screen](sensor-status-screen.md).

## Calibrations

Four calibrations exist. They are not variants of one procedure: each writes different parameters and is reached a different way.

| What it puts right | Where | Level | Machine |
| --- | --- | --- | --- |
| Travel speed — the pulses of the speed sensor over a known distance. [Calibrate the speed sensor](calibrate-speed.md) | **“Settings”** → **“Seeding machine parameters”** → **“Speed calibration”** | Agronomist | drives 100 m |
| Dispenser rotation — **“Wheel, pulses”** against **“Dispenser pulses”**. [Calibrate the dispenser rotation](calibrate-dispenser-rotation.md) | **“Settings”** → **“Seeding machine parameters”** → **“Dispenser calibration”** | Agronomist | wheel and dispenser shaft turned together |
| Dispenser mass — **“Weight, gr”** and **“Weight, pulses”**. [Calibrate the dispenser by weight](calibrate-dispenser-weight.md) | context menu of the dispenser sensor | Operator | standing |
| Metering roller mass — **“Weight, gr”** and **“Rotations”** of one motor. [Calibrate a metering motor by weight](calibrate-motor-weight.md) | context menu of the dispenser electric motor | Operator | standing |

The two menu calibrations need the **“Agronomist”** level, like the menu that leads to them. The two mass calibrations are at the **“Operator”** level, because they have to be repeated whenever the product changes.
