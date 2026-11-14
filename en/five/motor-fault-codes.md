---
title: Read the fault code of an electric motor
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/motor-fault-codes.html
---

# Read the fault code of an electric motor

Where the panel shows the numeric fault code of a metering motor controller, and what each code means.

When a metering motor raises **“FAILURE”**, its controller also records a numeric code. Read it out and give it to the service support together with the number of the motor.

::: steps
1. Long swipe left on the home screen until the Motors screen appears ([Working screens](working-screens.md)). Touch and hold the tile of the faulty motor; its context menu opens. A motor tile on the second home screen works the same way.

2. Tap **“Information”**, and tap it again. The status screen of the motor opens.

3. Read the line **“Last fault:”**. The status of the motor reads **“Faulty”** while any of its alarms is active.
:::

The same code is shown as **“Error code”** on the Electric motors screen, at the **“Agronomist”** level — see [Motor controller diagnostics](motor-controller-diagnostics.md).

## The codes

The panel shows only the number. The descriptions come from the motor controller itself.

### Command and parameter errors

The controller refused something the panel asked of it.

| **Code** | **Description** |
| --- | --- |
| -250 | Invalid command |
| -251 | Unexpected command |
| -252 | Invalid command syntax |
| -253 | Invalid command arguments |
| -260 | Invalid number of arguments |
| -261 | Specified index is greater than FFFFh |
| -262 | Specified sub-index is greater than FFh |
| -300 | Parameter does not exist |
| -301 | Memory write operation failed |
| -302 | Restore operation failed |
| -306 | Parameter cannot be written |
| -307 | Parameter cannot be read |
| -308 | Parameter value out of range |
| -316 | Version of the stored parameter set does not match the firmware version |
| -318 | Stored parameter set has an invalid check sum |
| -322 | Parameter cannot be set: the axis is in motion |
| -325 | Parameter cannot be set: the positioning mode is inactive |
| -340 | Parameter cannot be set: a limit switch is active |
| -343 | Parameter cannot be set: a stop or halt command is being executed |
| -350 | Parameter not contained in the specified index |
| -351 | Parameter not contained in the specified sub-index |

### Device errors

The controller or the motor itself is in trouble.

| **Code** | **Description** |
| --- | --- |
| -1000 | Low supply voltage |
| -1001 | Excessive supply voltage |
| -1002 | Low electronics supply voltage |
| -1003 | Excessive electronics supply voltage |
| -1020 | Overtemperature of the device |
| -1021 | Overtemperature of the heat sink |
| -1060 | Short circuit of a motor lead: between motor leads, motor and ground, or motor and power supply |
| -1061 | Motor overcurrent |
| -4000 | Following-difference error in the motion sequence |
| -5100 | Limit switch active |
