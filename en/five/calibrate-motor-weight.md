---
title: Calibrate a metering motor by weight
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/calibrate-motor-weight.html
---

# Calibrate a metering motor by weight

Let the electric motor turn the metering roller into a container and weigh the product, so that the panel knows how much one turn delivers.

This calibration stores how much product one turn of the metering roller delivers — **“Weight, gr”** and **“Rotations”** of one motor. Repeat it whenever the product or the roller changes. It is done at the **“Operator”** level, on a motor whose group is in the **“Flow”** or **“Hybrid”** mode.

**You need:** the machine standing still, a container that holds 1 to 60 kg of the product, and scales.

> **IMPORTANT**
>
> **The item appears only while the machine is standing still.** In motion the panel removes it from the context menu without a message. And while the calibration is open, **every** electric motor on the machine — seed and fertilizer — is held at zero speed: nothing meters. Leaving the calibration returns them all to automatic rate control.

::: steps
1. Touch and hold the tile of the motor on the Motors screen or the second home screen. Tap **“Dispenser calibration(weight)”**, and tap it again.

2. The first screen shows the target rates and, under **“Product dosage speed limitation:”**, the **“Min speed, km/h”** and **“Max speed, km/h”** the current settings allow. If it reads **“Can not provide dosage!”** in red, the roller fitted cannot deliver the rate at any speed — calibration will not repair that; fit another roller. Otherwise tap **“Calibrate electric motor N”**. **“Exit”** leaves.

   ![The first screen of the motor calibration.](figures/five-calib-motor-weight)

3. The second screen prepares the rotor. Weigh the empty container and write the weight down. Fill the hopper and place the empty container under the dispenser.

4. Tap **“Fill the rotor cells”**. The motor turns the driven shaft **two turns** and stops by itself. **“Stop motor”** interrupts it. Repeat until the cells are full.

5. Tap **“Go to calibration”**. The third screen shows **“Rotations”** to one decimal.

6. Empty the container and place it under the dispenser again.

7. Tap **“Calibration”**: the motor runs. Tap **“Stop motor”** to stop it. Run and stop as often as needed — the counter keeps a running total. Fill the container as far as possible, **not less than 1 kg and not more than 60 kg**.

8. Tap **“Complete”**. It appears once more than **one full turn** has been made. **“Cancel”** asks **“Are you sure?”** before throwing the measurement away.

9. Weigh the filled container. The number pad asks for the difference of the filled and empty container in grams — **1000 to 60000 g**; the pad offers 10000. Type it and tap **“OK”**. The panel stores **“Weight, gr”** and **“Rotations”** for this motor.
:::

During the rotor filling the motor runs at the middle of its **“Minimum, rpm”** … **“Maximum, rpm”** window, but not faster than 60 rpm.

## Run the motor from a button at the dispenser

If **“Button input”** of the motor is set to an input (1 … 3) and **“Activation signal”** matches the button ([Dispenser electric motor](dispenser-motor.md)), a button on that input runs the motor on the third screen: **the motor runs while the button is held and stops when it is released.** One person can stand at the dispenser with the container instead of walking to the cab between runs. With such a button set up, the motor runs only while the button is held. The screen gives no hint that a button is set up.

## When the calibration stops by itself

The calibration ends with a failure if the motor stops answering, if the motor raises an alarm, or if **ten seconds pass without pulses from the rotation sensor** — then the panel shows **“No data from rotation sensor”**. A jammed or unplugged rotation sensor ends the run rather than quietly storing zero.
