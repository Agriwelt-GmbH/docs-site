---
title: Configure a tramline actuator controller
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/configure-tramline-actuator.html
---

# Configure a tramline actuator controller

Tell an actuator controller which tramline actuator it drives and which marker sensors are wired to it.

The actuator controller carries three things at once — the tramline actuator and the two marker sensors of the bout — and each has its own line. That is why one controller serves an actuator and both markers. Prepare first as in [Device configuration](device-configuration.md): only this controller on the cable, **“Agronomist”** level.

::: {.anatomy fig="konf-act"}
1. **“Device address”** — which controller the menu talks to. Leave it at **“AUTO”**.
2. **“Actuator”** — the number of the tramline actuator this controller drives, or **“No”** if it drives none.
3. **“Input device, channel 1”** — the first marker sensor, or **“No”**.
4. **“Input device, channel 2”** — the second marker sensor, or **“No”**.
5. **“Set”** — writes the three lines to the controller.

The configuration menu of a tramline actuator controller, all lines still at **“No”**.
:::

::: steps
1. Choose **“Service”** → **“Sensors Configuration”** → **“Tramline actuator”** and press **“MENU”**.

2. Leave **“Device address”** at **“AUTO”**.

3. Set **“Actuator”**, **“Input device, channel 1”** and **“Input device, channel 2”** with **“PLUS”** / **“MINUS”**.

4. Select **“Set”** and press **“MENU”**. The panel answers **“Done”**.

5. Disconnect the controller and connect it again. On the home screen, check that the actuator and the markers appear.
:::

When all devices are done, set the level back to **“Operator”**, or switch the panel off and on. The actuator's own settings: [Tramline actuator](tramline-actuator.md); the markers: [Marker sensors](marker-sensors.md).
