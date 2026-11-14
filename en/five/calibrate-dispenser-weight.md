---
title: Calibrate the dispenser by weight
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/calibrate-dispenser-weight.html
---

# Calibrate the dispenser by weight

Turn a ground-driven dispenser into a container and weigh the product, so that the panel can watch the rate in kilograms per hectare.

This calibration stores how many grams the dispenser delivers per shaft pulse — **“Weight, gr”** and **“Weight, pulses”** of the dispenser sensor. Repeat it whenever the product changes. It is done standing, at the **“Operator”** level; the panel raises itself to **“Agronomist”** for the length of the calibration and puts the level back on exit.

**You need:** a container that holds 2 to 60 kg of the product, and scales.

The item is only there when **“Weight control”** is switched on for this dispenser ([Dispenser shaft sensor](dispenser-sensor.md)). Every step is a tap on a button of the screen.

::: steps
1. Touch and hold the metering unit icon on the home screen. Tap **“Dispenser calibration(weight)”**, and tap it again. The first screen lists the target rates of the products in use, in kg/ha; the product of this dispenser is marked.

   ![The first screen of the calibration by weight.](figures/five-calib-dispenser-weight)

2. Tap **“Calibrate dispenser N”**. If the dispenser cannot be calibrated, a red line stands there instead with the reason: **“Not controlled”**, **“No connection”** or **“FAILURE”**. **“Exit”** leaves.

3. The second screen gives the preparation. Weigh the empty container and write the weight down.

4. Fill the hopper with the product and place the empty container under the dispenser.

5. Turn the rotor until its cells are filled. **This matters more than it looks:** a rotor with empty cells gives short measure for the first turns, and that error lands in the stored figure.

6. Tap **“Go to calibration”**. **“Cancel”** returns to the first screen instead. The third screen counts **“Impulses”** and turns a rotor icon as they arrive.

7. Empty the container and place it under the dispenser again.

8. Turn the dispenser rotor and fill the container as far as possible — **not less than 2 kg and not more than 60 kg**.

9. Tap **“Complete”**. The button appears only after **more than ten pulses**. **“Cancel”** asks **“Are you sure?”** before throwing the measurement away.

10. Weigh the filled container. The number pad asks to **“Enter the difference of the filled and empty container in grams”**. Type the weight of the product alone — **2000 to 60000 g**; the pad offers 10000 — and tap **“OK”**. The panel stores **“Weight, gr”** and **“Weight, pulses”**.
:::

A weight typed outside 2000 … 60000 g is not refused: the panel takes the nearest limit. Weigh carefully and stay inside the range.

> **NOTE**
>
> **A dispenser alarm during the calibration does not stop it** — only a lost connection does. The measurement is mechanical, and the panel keeps out of the way until the container is weighed. A dispenser that is already in alarm cannot start a calibration.
