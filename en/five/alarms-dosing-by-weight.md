---
title: Product rate by weight too low, too high, or impossible
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-dosing-by-weight.html
---

# Product rate by weight too low, too high, or impossible

What to do when a product dosed by weight — by an electric motor or a weight-controlled dispenser — misses its target rate, or cannot reach it at all.

These alarms are raised by the system as a whole, not by one device. They exist **for each of the four products** separately: the number in the message is the number of the product. How far a product may stand from its target is **“Product rate error,%”** in the **“Settings”** menu ([The Settings menu](settings-menu.md)). How the window works: [How alarms work](how-alarms-work.md).

## “Rate of Product 1” / “is to low!” — or — “is to high!”

The same for Product 2, 3 and 4. The panel writes the message in this spelling.

**What it means.** The product is applied below or above its target rate in kilograms per hectare by more than **“Product rate error,%”**.

**Product metered by an electric motor — check, in this order:**

1. The target rate of the product.
2. The speed limits in force, on the status screen of the speed sensor — see [The sensor status screen](sensor-status-screen.md#what-each-kind-of-sensor-adds).
3. The settings of the electric motor that drives the dispenser shaft — see [Dispenser electric motor](dispenser-motor.md).
4. The metering unit.
5. The rotation sensor of the electric motor is serviceable.
6. The working load of the motor. **Below 20 % or above 80 %**, try a metering roller of another size: a **larger** one if too little is applied, a **smaller** one if too much.
7. Calibrate the metering roller — see [Calibrate a metering motor by weight](calibrate-motor-weight.md).

**Dispenser sensor with “Weight control” switched on — check, in this order:**

1. The target rate of the product.
2. The settings of the dispenser shaft sensor — see [Dispenser shaft sensor](dispenser-sensor.md).
3. The metering unit.
4. The dispenser sensor is serviceable.
5. Calibrate the dispenser — see [Calibrate the dispenser by weight](calibrate-dispenser-weight.md).

## “Product dosage is” / “impossible! Check product” / “rate and calibration!”

**What it means.** With the current settings and target rate, the product cannot be applied by weight at all: the lowest speed at which the metering rollers can deliver the rate is already at or above the highest. On the home screen a red product icon blinks in the right-hand column.

**What to check, in this order:**

1. The target rates of the products — one product asking too much closes the window for all of them.
2. **“Min speed, km/h”** and **“Max speed, km/h”** of the speed sensor — see [Travel speed sensor](speed-sensor.md).
3. The settings of the electric motors that apply the products by weight, above all **“Minimum, rpm”** and **“Maximum, rpm”**.
4. Calibrate the metering rollers of the electric motors.
5. If that does not help: fit metering rollers of another size.

> **TIP**
>
> The calibration screen of a metering motor shows the speed window the current roller allows. If it reads **“Can not provide dosage!”**, no calibration will help — the roller does not suit the rate. See [Calibrate a metering motor by weight](calibrate-motor-weight.md).
