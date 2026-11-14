---
title: Configure a HUB8
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/configure-hub8.html
---

# Configure a HUB8

Tell a HUB8 input device which sensor is wired to each of its eight channels.

The HUB8 carries several sensors at once. Its menu is longer than the others: after the device address come its **eight channels**, each with a type and a number. Prepare first as in [Device configuration](device-configuration.md): only this HUB8 on the cable, **“Agronomist”** level.

::: {.anatomy fig="konf-hub8"}
1. **“Device address”** — which HUB8 the menu talks to. Leave it at **“AUTO”**.
2. **“Channel 1 type”** — what kind of sensor is wired to channel 1.
3. **“Channel 1 address”** — which sensor of that kind it is: hopper 1, dispenser 2, and so on.
4. **The value** of the selected item, changed with **“PLUS”** / **“MINUS”**.
5. **Scroll bar.** Channels 2 to 8 follow in the same pairs, then **“Set”**.

The HUB8 menu with its first channels.
:::

The type and the number together make the sensor appear on the home screen under the right icon.

::: steps
1. Choose **“Service”** → **“Sensors Configuration”** → **“HUB8”** and press **“MENU”**.

2. Leave **“Device address”** at **“AUTO”**.

3. For each channel that carries a sensor, set **“Channel N type”** and **“Channel N address”** with **“PLUS”** / **“MINUS”**. Leave a channel that carries nothing as it is.

4. Select **“Set”** at the end of the menu and press **“MENU”**. The panel answers **“Done”**.

5. Disconnect the HUB8 and connect it again. On the home screen, check that each sensor appears under its icon.
:::

When all devices are done, set the level back to **“Operator”**, or switch the panel off and on.
