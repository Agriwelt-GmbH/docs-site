---
title: Indicators of the home screen
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/indicators.html
---

# Indicators of the home screen

Every indicator of the home screen with all its states — what you see, what it means, what to do.

Where each indicator sits is shown in [The home screen](home-screen.md). This page says what each one means, state by state. Touch and hold any indicator to open the context menu of its device.

## How to read any indicator

![](figures/icons/fan.png){height=40px} ![](figures/icons/fan-red.png){height=40px} ![](figures/icons/no-connection.png){height=40px} ![](figures/icons/not-controlled.png){height=40px}

Almost every indicator follows the same rule. Learn it once and you can read an indicator you have never seen.

| **What you see** | **What it means** |
| --- | --- |
| ![](figures/icons/fan.png){height=32px} **Green** icon | Normal. The device answers and its value is inside the limits. |
| ![](figures/icons/fan-red.png){height=32px} **Red** icon, blinking | Alarm. The device answers, but the value has left the limits. An alarm window follows after the alarm delay. |
| ![](figures/icons/no-connection.png){height=32px} Icon alternating with a **red ×** | No answer from the device. The value is shown as **XXXX**. |
| ![](figures/icons/not-controlled.png){height=32px} Icon alternating with a **white [!]** | The device is in the profile, but its control is switched off. The value is shown as **!!!!**. |
| Icon alternating with a red **?** | A device of the wrong kind answers in its place. The value is shown as **????**. |
| ![](figures/icons/work-blocked.png){height=32px} **Yellow** icon | Not a fault. A state you have chosen or that needs your attention: implement raised, markers up, ignition off, application locked by hand. |

> **IMPORTANT**
>
> **A switched-off indicator is not a quiet one — it is a blind one.** White with **!!!!** means the panel does not watch that device at all. Nothing will be reported about it, however wrong it goes.

## Speed

The travel speed in km/h, large, at the top left. Messages about the speed replace the figure and blink about once a second, so that the figure stays readable.

| **What you see** | **What it means** |
| --- | --- |
| A number in white, e.g. **10.0** | Normal. |
| **“SLOWER”** on red | You drive faster than the maximum set for the speed sensor. Slow down. |
| **“FASTER”** on red | You drive slower than the minimum. Speed up. |
| **XX.X** in red, blinking | No answer from the device that carries the speed sensor. |
| **????** in red | A device of the wrong kind answers in place of the speed sensor. |
| **!!.!** in white | The speed sensor is not under control. |
| A yellow number alternating with **“IMITATION”** | The speed is simulated from the setting of the speed sensor, not measured. See [Work without the speed sensor](work-without-speed-sensor.md). |
| **INCREASE IMITATION** / **DECREASE IMITATION** | The simulated speed itself is outside the permitted range. Change the setting, not the travel speed. |
| **“Sensor”** with a number | One of two speed sensors has failed. |
| **“Settings”** | The minimum and the maximum speed contradict each other. |

**“SLOWER”** and **“FASTER”** are not alarm windows. They stay in the speed field for as long as the speed is wrong, because you have to see them while correcting it. Speed from the built-in receiver: [GPS](gps.md).

## Clock

The clock slot at the top right is shared by several messages.

| **What you see** | **What it means** |
| --- | --- |
| The time in white | Normal. |
| **BAT** in red, for about a second in every four | The clock battery is low. The clock still runs; between the flashes the time is shown in red. Have the battery replaced. |
| **XX:XX** in red, blinking | The clock chip does not answer. Everything the panel records carries a wrong date and time. |
| **IMITAT** in yellow | The imitation mode of the service menu is on. |
| Blue hours:minutes, then **TRIAL**, then blank | A trial period is running; the blue figure is the time left. |

The clock is set in **“Settings”** → **“Change Date&Time”**: tap each line and swipe it to its value, then tap **“Set”** twice — once to select it, once to store the time. Leaving without **“Set”** keeps the old time.

## Memory card

![](figures/icons/microsd.png){height=40px}

A card symbol next to the clock, or in the right-hand column. Shown while a microSD card is in the slot and ready to be written to.

## Hopper

![](figures/icons/bunker-full.png){height=40px} ![](figures/icons/bunker-empty.png){height=40px}

A **full green** hopper is normal. An **empty red** one, blinking, means the level has fallen below the sensor: refill.

## Metering unit

![](figures/icons/dosator.png){height=40px}

The rotation of the dispenser shaft. While the shaft turns, the icon **turns** — the fastest way to see that the metering unit really runs. Red means no rotation, or not the speed required.

## Fan

![](figures/icons/fan.png){height=40px} ![](figures/icons/fan-red.png){height=40px}

The fan speed in revolutions per minute (**rpm**). Green is normal; red — above the maximum or below the minimum.

## Pressure

![](figures/icons/pressure.png){height=40px}

The vacuum or the positive air pressure in the distribution system, in **kPa**. Green is normal; red — outside the permitted range.

## Engine sensors

![](figures/icons/ignition.png){height=40px} ![](figures/icons/oil.png){height=40px} ![](figures/icons/battery.png){height=40px} ![](figures/icons/fuel.png){height=40px} ![](figures/icons/airfilter.png){height=40px}

The sensors of the engine that drives the fan.

| **Indicator** | **Green** | **Red or yellow** |
| --- | --- | --- |
| Oil pressure | Normal | **Red:** the oil pressure has fallen below the permitted level. |
| Battery charge | Normal | **Red:** the battery is not being charged. |
| Ignition | **Green key:** ignition on | **Yellow key:** ignition off. Not a fault, and never an alarm window. |
| Fuel level | Normal | **Red:** little fuel left in the tank. |
| Air filter | Normal | **Red:** the air filter is clogged; clean or replace it. |

> **IMPORTANT**
>
> **Oil pressure and battery charge are watched only while the ignition is on.** Fuel level and air filter are watched always.

## Area

![](figures/icons/area.png){height=40px}

The area treated on the [active field](statistics-screen.md), in hectares.

## Population

![](figures/icons/seeds.png){height=40px}

In the “Precise” mode: the actual seeding rate in **thousands of seeds per hectare**.

## Product rate by weight

![](figures/icons/product.png){height=40px}

Shown when products are applied by weight; one indicator per product, with its number. It shows **one figure**, in kg/ha.

| **What you see** | **What it means** |
| --- | --- |
| Icon **green**, figure white | Normal. While the actual rate stays inside the permitted deviation, the figure shown is the target. |
| Icon **red**, blinking | The actual rate is outside the permitted deviation from the target. |
| Field lit | You have just set the target. |

To set the target, touch and hold the indicator. The number pad opens with the caption **Product** and its number; type the rate, 10.0 to 500.0 kg/ha, and touch **“OK”**.

## Dosing by weight is not possible

![](figures/icons/product.png){height=40px}

A **red blinking product icon** in the right-hand column. The panel has worked out that the target cannot be held at any travel speed: the lowest speed at which the metering rollers can deliver the rate is already at or above the highest.

**What to do.** Check the target rates first — one product asking too much closes the window for all of them. Then check the metering rollers. The speed limits the panel calculated are on the **“Information”** screen of the speed sensor.

## Markers

![](figures/icons/markers.png){height=40px}

| **What you see** | **What it means** |
| --- | --- |
| **Green**, both arms down | Both markers are lowered. |
| **Green**, one arm down | Only that marker is lowered. |
| **Yellow**, both arms up | Both markers are raised. On a machine that changes the tramline bout by the markers, the bout changes now. |

A machine with one marker has one icon that shows that marker down or up.

## Implement position

![](figures/icons/work-allowed.png){height=40px} ![](figures/icons/work-blocked.png){height=40px}

**Green** — lowered, in work. **Yellow**, blinking — raised, in transport, not applying.

## Tramline bout

![](figures/icons/tramline.png){height=40px}

Shown only if the tramline is switched on. The large number is the current bout, the small one above it the number of bouts in the rhythm.

| **What you see** | **What it means** |
| --- | --- |
| Tramline icon **grey** | The bout changes by itself at the end of every pass. |
| Tramline icon **yellow** | The bout does not change by itself: the machine has no marker or work position sensor that answers and is under control. |
| A yellow symbol blinking in place of the icon | The bout could change by itself, but automatic change is switched off. |

How the bout is counted: [Set up the tramline rhythm](tramline-rhythm.md#how-the-bout-changes).

## Manual lock

![](figures/icons/hand.png){height=40px}

A **yellow hand**, blinking, in the right-hand column: product application is locked by hand. The machine applies nothing, however it moves. Not shown while application is allowed. It appears on machines with dispenser electric motors or a liquid fertilizer pump. See [Lock product application by hand](lock-application-by-hand.md).

## Actuator failure

![](figures/icons/actuator-fail.png){height=40px}

One icon for all electric motors and tramline actuators together, in the right-hand column. **Not shown at all while everything is in order.**

| **What you see** | **What it means** |
| --- | --- |
| **Red**, blinking | At least one motor or actuator is in an alarm state. |
| Alternating with **white [!]** | The control of at least one actuator is switched off. |

Which one and why is on the [Motors screen](motors-screen.md).

## Liquid fertilizer pump

| **Indicator** | **What it shows** |
| --- | --- |
| ![](figures/icons/pump-rate.png){height=32px} **Rate** | In **L/min** when the machine has liquid section sensors, otherwise in **L/Ha**. Green, red, × and [!] as usual. While the rate stays inside the permitted deviation, the figure shown is the target. |
| ![](figures/icons/pump-load.png){height=32px} **Load**, % | How hard the pump works. **Yellow at 99 % and above**: the pump is at its limit — drive slower, or the rate falls below the target. **----** blinking red: the controller gives no load figure. |
| ![](figures/icons/pump-pressure.png){height=32px} **Pressure**, **Bar** | Only if the pressure sensor is switched on in the pump settings. **Red: the liquid pressure is too high.** **----** blinking red: the pressure sensor is broken or gives no reading. |
