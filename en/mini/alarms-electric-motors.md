---
title: Dispenser motor alarms
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-electric-motors.html
---

# Dispenser motor alarms

What the alarms of an electric dispenser motor of the Hectare Mini mean — voltage, temperature, short circuit, current, jamming — and what to check.

The controller of each electric dispenser motor reports its faults to the panel. The device line names the motor: **Electric motor: #5**. The code of the last fault is on the status screen of the motor, line **Last fault:** — give it to the service. The motor and its settings: [The context menu of a motor](motor-context-menu.md).

| **Alarm text** | **What it means** | **What to check, in this order** |
| --- | --- | --- |
| **“Under voltage”** | The supply voltage of the motor controller — for the motor or for its electronics — is too low. | Battery and alternator of the tractor; the power cable and its connectors; the fuse. |
| **“Over voltage”** | The supply voltage is too high. | The charging voltage of the tractor; the power supply of the system against the data sheet. |
| **“Over temperature”** | The controller or its heat sink is too hot. | Let it cool; a dispenser that runs hard; dirt covering the motor. |
| **“Short circuit”** | A short on the motor leads — between them, to ground or to the supply. | The motor cable and connector; the motor. |
| **“Over current”** | The motor draws too much current. | A dispenser that runs hard or is blocked; the motor. |
| **“Motor jammed!”** | The motor is told to turn but does not turn. With **“Rollback when jammed”** at **“Yes”** it first runs back briefly to free itself. | Foreign matter in the dispenser; the drive between motor and dispenser; the motor. |
| **“Device in bootloader!”** | The motor controller is in its update mode and does not run. | Switch the panel and the system off and on. If it stays, call the service. |
| **“FAILURE”** | Any other fault of the controller. | Note **Last fault:** from the status screen and call the service. |

All motors share one more alarm with every device: **“Connection lost”** — [Device does not answer](alarms-any-device.md).
