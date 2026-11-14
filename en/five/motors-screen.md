---
title: The Motors screen
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/motors-screen.html
---

# The Motors screen

The dispenser electric motors and the tramline actuators of the machine, one tile each — how to read a tile and how to reach a motor's settings.

The Motors screen shows the dispenser electric motors of the machine, one tile each, and the tramline actuators if the machine has any. Look here when a row stops sowing and you want to know whether the motor is the reason.

It exists on any machine whose profile holds **at least one electric motor or one tramline actuator**. Reach it from the Statistics screen with a **long swipe to the left**. Leave it with a **long swipe to the left** to the home screen, or a **long swipe to the right** back to Statistics.

::: {.anatomy fig="five-motors"}
1. **Motor 1, STOP.** Yellow, blinking — the motor is serviceable, but product application is not running.
2. **Value of motor 1.** The driven shaft speed in rpm.
3. **Motor 2, red ×.** No connection to this motor.
4. **XXX.** No value, because the motor does not answer.

The Motors screen of a machine with two dispenser motors and no tramline actuators.
:::

## Reading a tile

The colour of the symbol is the state. The value beside it is the driven shaft speed in rpm. On the [second home screen](second-home-screen.md) the same tiles show, in the **“Precise”** control mode, the seeds per metre measured by the seed sensor of that row.

| **Symbol** | **Value** | **State** |
| --- | --- | --- |
| Motor, **green** | the figure | Normal. The motor is under control and driven. |
| **STOP**, yellow, blinking against the motor | the figure | The motor is serviceable, but **product application is switched off**. Nothing is wrong with it — the system is simply not applying. |
| Motor, **red** | the figure | The motor is in an alarm state. Read the alarm for the reason. |
| **×**, red | **XXX** | **No connection.** Check the cable and the connector first. |
| **!**, outlined | **!!!** | The motor is **taken out of control**. It is neither driven nor watched. |

> **NOTE**
>
> **Yellow is not a fault.** A screen full of yellow STOP signs means application is off — at the headland, or locked by hand. Red is a fault; yellow is a state you chose.

## Tramline actuators

| **Actuator symbol** | **State** |
| --- | --- |
| Pulled in or pulled out, **green** | The actuator has reached its position. |
| Pulled in or pulled out, **yellow** | The actuator is moving to that position. |
| Alternating between in and out, **yellow** | The panel cannot tell the actuator's position. |
| Blinking **red** | The actuator is in an alarm state. |
| Blinking **red ×** or **?** | No connection, or a device of the wrong kind. |
| Blinking **white** | The actuator is taken out of control. |

## Working with the screen

| **What you want** | **Gesture** |
| --- | --- |
| The settings of one motor or actuator | Touch and hold its tile |
| Back to the Statistics screen | Long swipe right |
| On to the home screen | Long swipe left |

The touch and hold opens the context menu of the motor you pressed. Its **“Information”** item shows the motor's state, and for a controller fault the code of the last fault. Here you see every motor of the machine at once and can choose the one that misbehaves.
