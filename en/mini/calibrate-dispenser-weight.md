---
title: Calibrate the dispenser by weight
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/calibrate-dispenser-weight.html
---

# Calibrate the dispenser by weight

Turn the dispenser into a container and weigh it, so that the Hectare Mini knows how much product one turn of the shaft applies — needed for "Weight control".

With **“Weight control”** at **“Yes”**, the panel counts the product applied from the turns of the dispenser shaft ([Dispenser shaft sensor](dispenser-sensor.md)). The calibration measures the weight per pulse and writes **“Weight, gr”** and **“Weight, pulses”**. It is done at the **“Operator”** level, standing.

> **IMPORTANT**
>
> **Calibrate again after every change of the metering roller, of the variator or gearbox setting in the dispenser drive, and of the seed in the hopper.** Otherwise the weight shown is wrong.

You need a container, scales and a way to turn the dispenser shaft by hand.

::: steps
1. On the home screen hold **“MENU”**, select the dispenser sensor and press **“MENU”**. The context menu opens.

2. Select **“Dispenser calibration(weight)”** and press **“MENU”**. The calibration screen shows the target rates of the products in use — the product of this dispenser between arrows — and **“PLUS - calibrate dispenser 1”** with the number of the dispenser.

3. Press **“PLUS”**. The panel lists what to do before the calibration: weigh the empty container and write the weight down; fill the hopper; put the empty container under the dispenser; turn the rotor until its cells are filled. Do all of it, then press **“UP”**.

4. The next screen lists the calibration itself and counts the **“Impulses”** from the sensor: empty the container, put it back under the dispenser, and turn the rotor, filling the container — as much as possible, between 2 kg and 60 kg.

5. As soon as more than ten pulses have been counted, the line **“MINUS - complete calibration”** appears. Go on turning until the container holds as much as you can manage — at least 100 pulses and 5 kg give a good result. Then stop.

6. Press **“MINUS”**. The number pad opens: **“Enter the difference of the filled and empty container in grams”**.

7. Weigh the full container, subtract the empty weight, type the difference in grams (2000 to 60000) and touch **“OK”**. The panel stores the values and returns to the first screen.

8. Press **“BACK”** to leave.
:::

![Calibration by weight: the menu item, the first screen, the list before the calibration, the list with the pulse counter, the line MINUS - complete calibration, and the weight entry.](figures/cal-mass-steps)

**“BACK”** on the list before the calibration cancels it. **“BACK”** during the calibration asks **“Are you sure?”** — **“PLUS”** cancels, **“MINUS”** goes on. **“BACK”** on the number pad keeps the old values.

## When it does not start or stops

**“PLUS”** in step 3 works only while the sensor is under control, answers and has no alarm. Otherwise the first screen names the reason — **“Not controlled”**, **“No connection”** or **“FAILURE”**. If the sensor fails during the calibration, the panel shows **“FAILURE”** with the reason; **“BACK”** returns to the first screen.
