---
title: Calibrate the dispenser rotation
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/calibrate-dispenser-rotation.html
---

# Calibrate the dispenser rotation

Turn the drive wheel so that the Hectare Mini learns how many dispenser pulses go with how many wheel pulses — needed before "Rotation speed control" can watch the shaft speed.

With **“Rotation speed control”** at **“Yes”**, a dispenser sensor watches whether the shaft turns as fast as the travel speed demands ([Dispenser shaft sensor](dispenser-sensor.md)). For that the panel must know the ratio between the pulses of the speed sensor and the pulses of the dispenser sensor. The calibration measures it and writes **“Wheel, pulses”** and **“Dispenser pulses”**.

Before you start: the speed sensor and the dispenser sensors to be calibrated must be under control and must answer. You need the **“Agronomist”** level ([Enable the Agronomist level](enable-agronomist-level.md)). Raise the machine so that the drive wheel can be turned, or be ready to move it.

::: steps
1. **“Settings”** → **“Seeding machine parameters”**. Select **“Dispenser calibration”**.

2. Choose with **“PLUS”** / **“MINUS”** which dispensers to calibrate: **“ALL”**, or the number of one dispenser.

3. Press **“MENU”**. The **“Calibration”** screen opens with a progress bar at 0 %.

4. Turn the drive wheel. The bar fills as pulses come in from the wheel and from every dispenser being calibrated.

5. At 100 % — at least 100 pulses from each — the panel beeps and shows **“Stop rotation!”**. Stop turning.

6. When no pulse has come for two seconds, the panel stores the values and shows **“Done”**; the **“Seeding machine parameters”** menu returns.
:::

![Dispenser calibration: the menu, the progress while turning, and the message Stop rotation!](figures/cal-dispenser-steps)

**“BACK”** at any moment aborts with **“Calibration canceled!”**; nothing changes.

| **The panel shows** | **Meaning** |
| --- | --- |
| **“Sensor not controlled! Calibration canceled!”** | The speed sensor or a dispenser sensor to be calibrated is out of control. Take it into control ([Take a sensor into or out of control](sensor-in-and-out-of-control.md)). |
| **“Connection lost with the sensor! Calibration canceled!”** | The speed sensor or a dispenser sensor does not answer, at the start or during the calibration. |

The more you turn before **“Stop rotation!”**, the better: the values are scaled down by themselves if the count grows beyond what they can hold.

Calibrate again after any change to the drive between the wheel and the dispenser — sprockets, gearbox or variator.
