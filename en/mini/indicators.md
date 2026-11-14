---
title: Indicators of the home screen and their states
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/indicators.html
---

# Indicators of the home screen and their states

Every indicator of the Hectare Mini home screen in every state — speed, hopper, dispenser shaft, fan, pressure, engine sensors, implement position, markers, tramline, clock, area, population and product rates.

Read the indicators by colour. On firmware 2.2.8 a device in order is drawn in **grey**; **red**, mostly blinking, is an alarm; **yellow** is a state you should know about but not a fault. Three states are the same for every sensor:

| **What you see** | **Meaning** | **What to do** |
| --- | --- | --- |
| ![](figures/icons/no-connection.png){height=32px} A red cross, blinking, or **XXXX** in place of the value | No connection to the sensor. | Check its cable and connectors. |
| A red question mark, blinking, or **????** in place of the value | A device of another type answers at this place. | Have the configuration checked by the service. |
| A grey not-controlled sign, blinking, or **!!!!** in place of the value | The sensor is taken out of control. It is not watched. | [Take it back into control](sensor-in-and-out-of-control.md) when the fault is repaired. |

## Speed

| **What you see** | **Meaning** |
| --- | --- |
| ![](figures/icons/speed-ok.png){height=32px} | The travel speed in km/h. |
| ![](figures/icons/speed-high.png){height=32px} alternating with ![](figures/icons/speed-slower.png){height=32px} | Faster than allowed. The red figure alternates with **“SLOWER”**. |
| ![](figures/icons/speed-low.png){height=32px} alternating with ![](figures/icons/speed-faster.png){height=32px} | Slower than allowed. The red figure alternates with **“FASTER”**. |
| Red figure alternating with **“Sensor”** 1 or 2, or with **“Settings”** | One of the two wheel sensors has failed, or the speed limits are set wrongly. |
| ![](figures/icons/speed-lost.png){height=32px} | No connection to the speed sensor. |
| ![](figures/icons/speed-sim-value.png){height=32px} alternating with ![](figures/icons/speed-simulation.png){height=32px} | Speed imitation is on: the figure is yellow and alternates with **“IMITATION”**. Outside the limits, with **INCREASE IMITATION** or **DECREASE IMITATION**. |

The speed is watched against its limits only if that control is switched on in the [speed sensor settings](speed-sensor.md). Where the speed comes from GPS: [GPS reception](gps-receiver.md).

## Hopper

| **What you see** | **Meaning** |
| --- | --- |
| Grey | Product above the sensor. |
| ![](figures/icons/hopper-empty.png){height=32px} red, blinking | The hopper is empty. |

## Dispenser shaft

| **What you see** | **Meaning** |
| --- | --- |
| Grey; turning while the shaft turns | In order. |
| ![](figures/icons/dispenser-alarm.png){height=32px} red, blinking | The shaft does not turn, or not at the speed required. |

## Fan

| **What you see** | **Meaning** |
| --- | --- |
| Grey, with the speed in rpm | In order. |
| Red, blinking, with the speed | The fan speed is outside its limits. |

## Pressure

| **What you see** | **Meaning** |
| --- | --- |
| Grey, with the pressure in kPa | In order. |
| ![](figures/icons/pressure-alarm.png){height=32px} red | The pressure at the fan outlet is outside its limits. |

## Engine sensors

The sensors of a separate fan-drive engine. Oil pressure and battery charge are watched only while the ignition is on.

| **What you see** | **Meaning** |
| --- | --- |
| ![](figures/icons/oil-alarm.png){height=32px} red | Low oil pressure. |
| ![](figures/icons/battery-alarm.png){height=32px} red | The battery is not charging. |
| ![](figures/icons/fuel-alarm.png){height=32px} red | Little fuel in the tank. |
| ![](figures/icons/airfilter-alarm.png){height=32px} red | The air filter is clogged. |
| Key grey / ![](figures/icons/ignition-off.png){height=32px} key yellow | Ignition on / ignition off. |

In order, each of these icons is grey.

## Implement position

| **What you see** | **Meaning** |
| --- | --- |
| Grey | The drill is in the working position. |
| ![](figures/icons/workpos-transport.png){height=32px} yellow, blinking | The drill is in the transport position. |

## Markers

Grey arms show which marker is down and which is up. With two marker sensors, both arms **yellow** means both markers are up.

## Tramline bout

Wheel tracks with the current bout on top and the number of bouts below — see [Next tramline bout](next-tramline-bout.md).

## Clock

| **What you see** | **Meaning** |
| --- | --- |
| White time | The time of day. |
| Red time, with a red **BAT** for a moment every four seconds | The clock battery must be replaced. |
| Red **XX:XX**, blinking | The clock is faulty. |
| Yellow **IMITAT** | The panel runs in an imitation mode — see [About the pictures](about-the-pictures.md). |
| Blue hours:minutes and **TRIAL** | A trial period is active: the time left. It appears every 30 seconds and covers the hopper and shaft icons for a moment. |

## Area

Hectares treated on the active field — shown only with a speed sensor, and only where the screen has room.

## Population

In the **“Precise”** mode: thousands of seeds per hectare, averaged over the seed sensors under control that answer. If seed and fertilizer are both in **“Precise”**, two indicators show, marked **A** (seed) and **B** (fertilizer); the area is then usually not shown.

## Product rate

One indicator per product applied by weight, with the product number, in kg/ha. Red and blinking: the rate deviates more than **“Product rate error,%”**. While it is within the tolerance, the panel shows the **target** figure.

## The column on the right

| **What you see** | **Meaning** |
| --- | --- |
| Motor symbol, yellow, blinking | Product application is locked by hand — see [Lock application by hand](lock-application-by-hand.md). |
| Actuator symbol, red, blinking | A dispenser motor or a tramline actuator is in alarm — see the [Motors screen](motors-screen.md). |
| Actuator symbol alternating with the not-controlled sign | A motor or an actuator is taken out of control. |
| Product symbol, red, blinking | The set rates cannot be applied at any speed — see [Calibrate a motor by weight](calibrate-motor-weight.md). |
