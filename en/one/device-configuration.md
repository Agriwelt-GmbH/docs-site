---
title: Device configuration — before you start
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/device-configuration.html
---

# Device configuration — before you start

What device configuration is, the preparation it needs, and the three-item pattern every configuration menu follows.

When a system is commissioned, or a sensor is replaced, each new device must be given its address — the number by which the panel finds it on the sensor network. That is done in **“Service”** → **“Sensors Configuration”**, one device at a time.

> **WARNING**
>
> **For authorised service engineers.** A device given the wrong address disappears from the panel or takes the place of another one. Follow these topics or the instructions of an Agriwelt GmbH engineer, and do not try menu items at random.

## Prepare

::: steps
1. **Disconnect every sensor** from the network connector of the panel.

2. **Connect only the one device** that is to be given a new address.

3. Switch the panel on. Alarms about lost communication appear — close them all ([How alarms work](how-alarms-work.md)).

4. Raise the access level to **“Agronomist”** — see [Enable the Agronomist level](enable-agronomist-level.md).

5. Press **“BACK”**, then choose **“Service”** → **“Sensors Configuration”**. The menu offers four kinds of device.

   ![The “Sensors Configuration” menu.](figures/menu-sensorcfg)
:::

> **IMPORTANT**
>
> **One device on the cable at a time.** The panel addresses whatever answers. With two devices of the same kind connected, which of them takes the new address is not defined.

## The pattern

All four menus work the same way:

| Item | What it is |
| --- | --- |
| **“Sensor address”** / **“Device address”** | Which device the menu talks to. Leave it at **“AUTO”** and the panel talks to the single device that answers. Pressing **“MENU”** on this item starts a **search**; each further press steps to the next device found. |
| **“New address”** | The address the device is to take. Set it with **“PLUS”** / **“MINUS”**. |
| **“Set”** | Writes it. **“Done”** means the device has accepted it. |

> **CAUTION**
>
> **“MENU” on the address item is not a harmless look.** It starts a search on the network and can change what the connected devices answer to. Use it only with a single device on the cable, never on an assembled machine.

**Afterwards, every time:** disconnect the device and connect it again, return to the home screen and check that it appears where it should. Then set the level back to **“Operator”** — or switch the panel off and on, which does the same.

## The devices

| Device | Topic |
| --- | --- |
| Seed sensor | [Configure a seed sensor](configure-seed-sensor.md) |
| Pressure sensor | [Configure a pressure sensor](configure-pressure-sensor.md) |
| HUB8 input device | [Configure a HUB8](configure-hub8.md) |
| Tramline actuator controller | [Configure a tramline actuator controller](configure-tramline-actuator.md) |
| Electric motor controllers — their own way in | [Configure the motor controllers](configure-motor-controllers.md) |
