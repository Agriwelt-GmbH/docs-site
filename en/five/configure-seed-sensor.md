---
title: Configure a seed sensor
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/configure-seed-sensor.html
---

# Configure a seed sensor

Give a new or replaced seed sensor the number of its row.

For a seed sensor the new address is simply **the number of the row** — the same number the operator sees under the column on the home screen. Prepare first as in [Device configuration](device-configuration.md): only this sensor on the cable, **“Agronomist”** level.

::: steps
1. Open **“Service”** → **“Sensors Configuration”** → **“Seed sensor”** — tap each item twice. The menu has three items: **“Sensor address”**, **“New address”** and **“Set”**.

   ![The Seed sensor configuration menu.](figures/five-cfg-seed)

2. Leave **“Sensor address”** at **“AUTO”**.

3. Tap **“New address”** and swipe right or left to the row number.

4. Tap **“Set”**, and tap it again. The panel answers **“Done”** and, below it, **“Found #”** with the number the sensor had until now.

   ![The panel confirms with “Done”. The number after “Found #” is left out of the picture.](figures/five-info-done)

5. Disconnect the sensor and connect it again. On the home screen, check that it appears under its row.
:::

If the panel answers **“More than one device in network!”**, another device is still on the cable. If it answers **“No connection”**, the sensor does not answer — check its cable and power.

When all sensors are done, set the level back to **“Operator”**, or switch the panel off and on. The parameters of the seed sensors: [Seed sensors and dry fertilizer sensors](seed-and-fertilizer-sensors.md).
