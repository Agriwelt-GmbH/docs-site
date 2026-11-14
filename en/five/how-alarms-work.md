---
title: How alarms work
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/how-alarms-work.html
---

# How alarms work

When the Hectare 5 raises an alarm, what the alarm window shows, how it is closed by touch, which faults sound without a window, and how to use the alarm topics of this manual.

An alarm is a window that opens over the working screen, with the alarm sound. It tells you that one device — a sensor, an actuator, a motor controller — or the system as a whole has found a fault. The alarm topics in this section are grouped by the device that raises the alarm. **Look for the words you see on the screen**, not for a description of them.

## When the panel raises an alarm

A fault is not reported the moment it appears. **The condition must hold without a break for the time set in “Alarm delay” before the alarm window opens.**

| **Setting** | **Value** |
| --- | --- |
| Where it is set | **“Settings”** menu, item **“Alarm delay”**, at the **“Operator”** level. See [The Settings menu](settings-menu.md). |
| Range | **2 to 20 seconds**, in steps of 1 second. |
| Default | **3 seconds.** A value outside the range is reset to the default by itself. |

A short delay makes the panel react quickly, but also to brief disturbances — a single bump, a momentary gap in the seed flow. A long delay keeps the screen quiet, but a real fault can run for up to twenty seconds before you are told.

> **TIP**
>
> **If the system alarms too often on a rough field, raise “Alarm delay” first.** Change the sensor settings only when a longer delay does not help.

Two cases do not follow the delay:

- **Lost communication** is counted in polls, not in seconds. **“Connection lost”** appears after **three polls in a row** without an answer from the device.
- **Right after a sensor has been set up**, its alarms are not processed for a short blocking period. This prevents a burst of alarms while a device is being configured.

## The alarm window

::: {.anatomy fig="five-alarm-window"}
1. **“FAILURE!”** — the title of every alarm window, on a red bar, whatever the fault. It is not the fault itself.
2. **The alarm text** — the fault. Look it up under this text in the alarm topics.
3. **The kind of device** that raises the alarm — here a hopper sensor. The same text can come from different devices; this line tells you which.
4. **The number of the device** — here hopper 2. When several devices of the same kind raise the same alarm, they share one window and are listed together, for example **#3-5,8**.
5. **“Close”** — closes this alarm. [Below](#closing-an-alarm).

The alarm window of an empty hopper.
:::

An over-current alarm of a motor adds a line with the current the controller measured, in amperes. The alarms of the panel itself — for example **“User is Agronomist!”** — have no device line; their text starts with the line **“HOME - close message”**. They are closed like every other alarm, with **“Close”**.

## Closing an alarm

**Tap “Close” in the window.** This alarm closes and the sound stops. If more alarms are waiting, the next one opens. **Nothing else closes an alarm window** — taps elsewhere, swipes and the three-finger tap are ignored while it is open.

Closing a window does not repair the fault. The alarms of a device that are still active are counted on its status screen — see [The sensor status screen](sensor-status-screen.md).

## Alarms are hidden at the higher access levels

At the **“Agronomist”** and **“Service”** levels no alarm windows are shown — apart from the one warning that says so, [User is Agronomist](alarms-access-level.md) — and the faults without a window stay silent too. The alarms are not lost: they wait. When you return to **“Operator”**, the panel drops the ones that have gone away and shows the ones that are still true, one after another. See [Access levels](access-levels.md).

## Alarms without a window

Two faults are not shown as a window, because you have to see the working screen while you correct them. At the **“Operator”** level the alarm sound plays while they last, as long as no alarm window is open:

- **“SLOWER”** or **“FASTER”** — the travel speed is outside the limits set for the speed sensor. The speed field shows the word. See [Indicators](indicators.md#speed).
- **“NOT UNDER CONTROL”** — rows run under the control line of their diagram. See [The section diagram](section-diagram.md#the-line-rows-under-it-are-not-under-control).

## How the alarm topics are written

Every alarm has its own heading with the text exactly as on the screen; where the message has two lines on the panel, both lines are given. Under it: what the panel has detected, and what to check, in the order a mechanic checks it — the quick checks on the panel first, then the machine, then the device itself.

> **NOTE**
>
> If the checks do not clear the fault, call the service support.
