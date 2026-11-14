---
title: Liquid fertilizer sensors and pump controller
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/liquid-fertilizer.html
---

# Liquid fertilizer sensors and pump controller

The parameters of the liquid fertilizer section sensors and of the liquid fertilizer pump controller.

Liquid fertilizer is watched by flow sensors in the sections; on some machines a pump controller also drives the pump to the rate. Open the context menu of either as in [Sensor settings](sensor-settings.md).

## Liquid fertilizer section sensors

| Parameter | What it does | Range | Level |
| --- | --- | --- | --- |
| **“Pulses per liter”** | The pulses the flow sensor gives per litre; the panel turns them into litres per minute, litres per hectare and the volume applied. Hidden when a pump controller is in the profile — the controller's figures are used then. | 1 … 60000 | Agronomist |
| **“Rate error,%”** | How far the actual rate may stand from the target before an alarm. | 5 … 95, steps of 5 | Agronomist |
| **“Tolerable leak to tramline,%”** | How much a section shut off for the tramline may still deliver. | 0 … 50 | Agronomist |
| **“Group start address”** | See [Device configuration](device-configuration.md). | | Service |

The two target rates of this sensor — one for the **“Flow”** mode, one for the **“By area”** mode — have **no menu item**. They are set on the home screen with **“PLUS”** and **“MINUS”**, like every other target rate ([Change the target rate](set-the-target-rate.md)). The mode itself: [Seeding machine parameters](seeding-machine-parameters.md#mode-of-liquid-fertilizer).

## Liquid fertilizer pump controller

| Parameter | What it does | Range | Level |
| --- | --- | --- | --- |
| **“Pulses per liter”** | How many pulses of the pump drive make one litre; the panel works out the volume applied from it. The figure is kept in the pump controller: the panel reads it at start-up and writes a change back to it. | 100 … 10000, steps of 10 | Agronomist |
| **“Pressure sensor”** | Which pressure sensor watches the supply line. | 0 … 2 | Agronomist |
| **“Pressure boundary, Bar”** | The pressure the pressure sensor reads at the top of its range, from the sensor's specification; the panel scales the line pressure with it. Default 16.0 bar. | 0.0 … 50.0 | Agronomist |
| **“Max pressure, Bar”** | Above it the controller raises **“High pressure”**. | 0.0 … 50.0 | Operator |
| **“Section control D.I.”** | Has no effect in this firmware: the panel does not read this input for the pump. | **“No”** / **“Shut off(0)”** / **“Shut off(1)”** | Agronomist |
| **“Start delay,mS”** | The shortest time between two starts of the pump: a start that would come sooner waits until this time has passed. Default 30 ms. | 0 … 500, steps of 5 | Service |
| **“Group start address”** | See [Device configuration](device-configuration.md). | | Agronomist |

The status screen of the pump controller shows the flow, the pump load and the line pressure — see [The sensor status screen](sensor-status-screen.md#what-each-kind-of-sensor-adds). Alarms: [Liquid fertilizer pump](alarms-pump-controller.md), [Rate alarms](alarms-rate.md).
