---
title: Assign a product to a dispenser motor
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/assign-product-to-motor.html
---

# Assign a product to a dispenser motor

Tell the panel which of its three products each dispenser motor applies, so that one target rate in kg/ha serves all motors of that product.

Every dispenser electric motor drives one dispenser and belongs to exactly one product. The panel keeps up to three products: **“Product 1”**, **“Product 2”** and **“Product 3”**. Several motors may apply the same product; its rate is then set once for all of them. In the factory state **all** motors are **“Product 1”**.

This needs the Agronomist level ([Enable the Agronomist level](enable-agronomist-level.md)) and motors in the **“Flow”** or **“Hybrid”** mode.

> **CAUTION**
>
> **The active field may have to be erased.** If the active field already holds data, the panel demands that its statistics be erased before the product type changes; **“Yes”** erases them for good. Select an empty field first if you want to keep them — [Start a new field](start-a-new-field.md).

::: steps
1. Go to the Motors screen and hold **“MENU”**. The first motor is selected.

   ![The Motors screen with a motor selected.](figures/mini-motors-focus)

2. Select the motor with **“UP”** and **“DOWN”**.

3. Press **“MENU”**. The context menu opens.

4. Go to **“Type of product”** with **“DOWN”**.

5. Choose the product with **“PLUS”** and **“MINUS”**.

   ![Type of product before and after the change.](figures/mini-motors-product-type)

6. If the panel asks to erase the statistics, press **“MENU”** for **“Yes”** or **“BACK”** for **“No”**.

   ![The question before the product type is changed on a field with data.](figures/mini-motors-product-change-confirm)

7. Press **“BACK”**. You are back on the Motors screen. Repeat from step 2 for every other motor.
:::

While you step through the values, a product that a dispenser shaft with weight control already applies is skipped — one product is applied either by motors or by such dispensers, not by both. If no other product is available, the value does not move; that is not a fault.

Then set the rate of each product: [Change the target rate](set-the-target-rate.md), and calibrate each motor: [Calibrate a motor by weight](calibrate-motor-weight.md).
