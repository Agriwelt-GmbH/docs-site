---
title: Motor controller diagnostics
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/motor-controller-diagnostics.html
---

# Motor controller diagnostics

How to read what a metering motor controller reports about itself on the Electric motors screen — speed, error code, voltages, temperature, current, status bits and fault counters — and how to move through it by touch.

The **Electric motors** screen shows, live, what a motor controller reports about itself. Open it with a two-finger tap on the home screen → **“Service”** → **“Electric motors”**, or with **“Electric motors”** in the context menu of a motor — both at the **“Agronomist”** level. The working view of the motors is a different screen: [Motors screen](motors-screen.md).

::: {.anatomy fig="five-motors-registers"}
1. **“Mode”** — tap it to switch the page: **“Registers”**, then **“Statistics”**.
2. **“Motor #”** with a number — which controller is shown (the number is left out of the picture). Swipe **right** for the next number, **left** for the previous one.
3. **“Registers”** — the name of the page. A universal controller has two register pages, **“Registers-1”** and **“Registers-2”**.
4. **The status word** — sixteen bits of the controller; a lit (yellow) cell is a bit that is set.
5. **The legend of the bits** — the number and the name of each bit. [Table below](#the-status-bits).
6. **“Speed”** / **“Target speed”** — what the shaft is doing against what the panel asked for. A gap that does not close is the first sign of a load the motor cannot carry.
7. **“Error code”** / **“Act.posit.”** — the controller's own error number ([codes](motor-fault-codes.md)), and the position it counts itself at.
8. **“Volt.mot.,mV”** / **“Volt.elec.,mV”** — the voltage at the motor and at the electronics, in millivolts. A motor voltage far below the electronics voltage means the supply sags under load.
9. **“Temperat.,C”** / **“Current,mA”** — the controller's temperature and the current it draws. Compare the current with **“I_hilo,A”** set for this motor ([Configure the motor controllers](configure-motor-controllers.md)).

The **“Registers”** page of a motor, standing.
:::

| **Gesture** | **What it does** |
| --- | --- |
| Tap **“Mode”** | Next page. |
| Swipe right / left | Next / previous controller number. The numbers run from 1 to 127 and go round; a number without a controller shows nothing useful. |
| Two-finger tap | The menu: **“Change address”**, **“Configuration”** — see [Configure the motor controllers](configure-motor-controllers.md). |
| Three-finger tap, or long swipe up | Close the screen. |

## The status bits

| **Bit** | **Name** | **Bit** | **Name** |
| --- | --- | --- | --- |
| 0 | Enable | 8 | Toggle |
| 1 | Error | 9 | CmdTgl |
| 2 | Warn. | 10 | CmdErr |
| 3 | Moving | 11 | StpHalt |
| 4 | Reach | 12 | LimCur |
| 5 | Limit | 13 | LimVel |
| 6 | FolErr | 14 | LimPos |
| 7 | HomDone | 15 | LimSVel |

The legend is drawn in English on every panel, whatever its language: it is a bit map of the controller, not a message to the operator.

## The fault counters

![The Statistics page of a motor.](figures/five-motors-statistics)

The **“Statistics”** page shows the faults this motor has collected **on the active field** — they are part of the field statistics, not of the motor:

| **Counter** | **What it counts** |
| --- | --- |
| **“Jammed”** | The rotor stalled and the controller had to give up or back off. |
| **“Disconnects”** | The controller stopped answering. |
| **“Other”** | Everything else the controller reported. |
| **“In failure”** | The distance in metres this motor spent in a fault state. |

Each counter is **white at zero and red once it is not**. A red figure does not mean the motor is faulty now — it means it was, somewhere on this field, and the seed placed there is worth a look. To read another field, make it the active field first ([Statistics screen](statistics-screen.md)).
