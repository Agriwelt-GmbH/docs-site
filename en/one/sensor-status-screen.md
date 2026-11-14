---
title: The sensor status screen
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/sensor-status-screen.html
---

# The sensor status screen

How to read the status screen of a sensor — channel, address, type, link state, live figures and active alarms — and what each kind of sensor shows on it.

Reached through **“Information”** in the context menu of a sensor ([Sensor settings](sensor-settings.md)). It shows what the panel knows about one sensor.

## The screen

::: {.anatomy fig="status-hopper"}
1. **“Channel #”** — which sensor of the whole list this is.
2. **Previous sensor** — or press **“MINUS”**. The screen stays open.
3. **Next sensor** — or press **“PLUS”**.
4. **“Address:”** — the address the sensor answers on. Not shown in this manual.
5. **“Type:”** — the kind of sensor and its number, here hopper sensor 1. Some sensors show a line **“Unit:”** instead of the address — where they are connected, for example **“Control panel”**.
6. **“Link:”** — the state of the communication. [Table below](#link-states).
7. **The figures of this kind of sensor** — here the level on the input of a hopper sensor. [Table below](#what-each-kind-of-sensor-adds).
8. **“Alarm 1 from 1”** — the active alarms, one at a time. **“UP”** / **“DOWN”** step through them.
9. **The name of the alarm** shown.

The status screen of a hopper sensor whose hopper is empty.
:::

| Button | Action |
| --- | --- |
| **“PLUS”** / **“MINUS”** | Next / previous sensor — the screen stays open. |
| **“UP”** / **“DOWN”** | Step through the active alarms of this sensor. |
| **“MENU”** | The context menu of this sensor. |
| **“BACK”** | Back to the sensor selection. |

## Link states

| State | Meaning |
| --- | --- |
| **“Normal”** | The sensor answers. |
| **“Not controlled”** | The sensor is out of control: neither the communication nor anything else is watched. |
| **“No connection”** | The sensor does not answer. Red. |
| **“Wrong device type!”** | Something answers, but not the kind of device the profile expects. Red. |
| **“IMITATION”** | Speed sensor only: the speed is simulated, not measured. Yellow. |

The figures are drawn only while the sensor is **under control**, answers, and is of the expected kind. A sensor out of control shows its identity and nothing else.

## What each kind of sensor adds

![The status screen of a speed sensor wired to the panel.](figures/status-speed)

| Sensor | What the screen shows |
| --- | --- |
| Speed sensor | The pulse frequency **F=** in Hz; with two speed sensors **F1=** and **F2=**. Under it the two limits **“Min speed, km/h”** and **“Max speed, km/h”**. On a machine that doses a product by weight with electric motors, the limits are those the motors can hold, narrowed by the two settings; a limit the settings cannot meet is written in red as an inequality. Without such motors a limit set to zero is shown as **----**, switched off. |
| Hopper sensor | **Pin:** and the level on the input, **"0"** or **"1"**. |
| Dispenser shaft sensor | **F=** in Hz, to three decimals. |
| Fan sensor | **F=** in Hz. |
| Pressure sensor | **P=** in kPa. |
| Seed sensor, dry fertilizer sensor | **Status:** and one of eight states — [below](#the-eight-states-of-a-seed-or-fertilizer-sensor). |
| Liquid fertilizer flow sensor | **Status:** **Working**, or **Working:Tramline** in the tramline mode; under it **Flow=** in L/min. |
| Work position sensor | **Position: Working** or **Position: Transporting**, and **Pin:** with the level on the input. |
| Ignition, oil pressure, battery charge, fuel level, air filter | **Pin:** and the level on the input, **"0"** or **"1"**. |
| Marker sensor | Only the common lines. |
| Tramline actuator | **Status:** **Pulled in**, **Pulled out**, **Working** while the shutter moves, or **Unknown**. |
| Dispenser electric motor | **Status:** **Working**, or **Faulty** while any alarm of the motor is active; then **Last fault:** with the controller's code, if there has been one ([codes](motor-fault-codes.md)). A universal controller adds **IN1[ ] IN2[ ] IN3[ ]** with the levels on its three inputs. |
| Liquid fertilizer pump controller | **Status:** **Working** or **Faulty**. With a fault, **Last fault:** and the code. Without one: **Flow=** in L/min, **Load=** in per cent, and **Pressure sensor: No** if there is none, otherwise **Pressure sensor=** in Bar with the raw signal in mA in brackets. Dashes stand for a value the controller cannot give. |

## The eight states of a seed or fertilizer sensor

| Status | Meaning |
| --- | --- |
| **Working** | Normal. |
| **Working:Tramline** | Normal; the sensor is in the tramline control mode for the current bout. |
| **Configuring** | The sensor has received new settings and is applying them. |
| **Calibration in progress** | The sensor runs its initial calibration. It takes a few seconds. |
| **Clogged** | The infrared emitter of the optical channel is blocked — most likely a blocked seed tube. Red. |
| **Light struck** | Too much sunlight falls into the optical channel; the sensor may miscount. Red. |
| **Faulty** | The sensor has failed and must be replaced. Red. |
| **Unknown** | Another fault that cannot be identified. Red. |

