---
title: Calibrate the dispenser rotation
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/calibrate-dispenser-rotation.html
---

# Calibrate the dispenser rotation

Turn the drive wheel and the dispenser shaft together so that the panel learns how many shaft pulses belong to the wheel pulses.

This calibration teaches the panel how many dispenser shaft pulses belong to the wheel pulses, so that it can tell a stopped or slipping shaft from a moving machine. It is the basis of **“Rotation speed control”** of the dispenser sensor ([Dispenser shaft sensor](dispenser-sensor.md)). It writes **“Wheel, pulses”** and **“Dispenser pulses”**.

**Before you start:** the speed sensor **and** every dispenser taking part must be under control and answering. You need the **“Agronomist”** level ([Enable the Agronomist level](enable-agronomist-level.md)). Have everything ready to turn the wheel and the dispenser shafts: **once started, the calibration runs until the panel has its result.**

::: steps
1. Open **“Settings”** → **“Seeding machine parameters”**. Tap **“Dispenser calibration”** and swipe right or left to the number of the dispenser — or to **“ALL”** for all of them at once.

2. Tap **“Dispenser calibration”** again. The panel shows **“Calibration”** and a progress bar.

   ![The progress bar of the dispenser calibration.](figures/five-calib-dispenser-progress)

3. Turn the drive wheel and the dispenser shaft together — by hand, or by moving the machine. The bar fills as the counters rise.

4. Keep turning until the bar reaches 100 %. That happens when the speed sensor **and every** dispenser taking part have each given at least **100 pulses**. The bar follows whichever is furthest behind — a dispenser that does not turn holds it at zero.

5. At 100 % the panel beeps once and shows **“Stop rotation!”**. Stop everything.

6. The panel waits until no counter has changed for **two seconds**, then writes the result and shows **“Done”**.
:::

Let the calibration run to the end. If any sensor taking part is out of control when you start, or stops answering on the way, the calibration ends with **“Sensor not controlled! Calibration canceled!”** or **“Connection lost with the sensor! Calibration canceled!”**, and nothing is written.

> **NOTE**
>
> **The stored numbers are not the ones you watched.** If the counts do not fit the parameter range, the panel halves **both** numbers together, again and again, until they fit. The ratio is kept; only the two stored figures come out smaller than what was counted.
