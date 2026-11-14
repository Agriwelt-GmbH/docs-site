---
title: Dosing by weight: product rate too low or too high
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-dosing-by-weight.html
---

# Dosing by weight: product rate too low or too high

What to do when the Hectare Mini reports that a product dosed by weight is applied below or above its target rate, or cannot be dosed at all.

These are alarms of the system as a whole: the window has no device line. They come only when a product is followed by weight — by a dispenser shaft sensor with **“Weight control”** at **“Yes”**, or by dispenser motors. The number in the text is the number of the product, **“Product 1”** to **“Product 3”**.

## “Rate of Product 1 is to low!” / “Rate of Product 1 is to high!”

**What it means.** The weight of the product applied per hectare deviates from its target rate by more than **“Product rate error,%”** of the **“Settings”** menu ([The Settings menu](settings-menu.md)).

**What to check, in this order:**

1. The target rate of the product — [Change the target rate](set-the-target-rate.md).
2. The metering unit: roller, variator or gearbox setting, product flow from the hopper.
3. The settings of the dispenser shaft sensor that applies this product, and its **“Type of product”** — [Dispenser shaft sensor](dispenser-sensor.md).
4. The dispenser shaft sensor is serviceable.
5. Calibrate by weight again — [Calibrate the dispenser by weight](calibrate-dispenser-weight.md), or for motors [Calibrate a motor by weight](calibrate-motor-weight.md). A new roller, another setting of the drive or another seed always need a new calibration.

## “Product dosage is impossible! Check product rate and calibration!”

**What it means.** On a machine with dispenser motors: with the present target rates and calibrations no travel speed exists at which the motors could apply all products. The panel shows it again each time the seeding starts.

**What to check, in this order:**

1. The target rates of the products.
2. The calibration of the motors and their shaft speed limits — [Calibrate a motor by weight](calibrate-motor-weight.md).
