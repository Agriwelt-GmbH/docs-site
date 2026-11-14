---
title: Access levels
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/access-levels.html
---

# Access levels

The three access levels of the Hectare Mini — Operator, Agronomist, Service — what each one opens, what happens to the alarms at the higher levels, and how to get back to Operator.

The panel hides every setting a driver does not need. What a menu shows depends on the **access level** chosen under **“User”** in the **“Settings”** menu. After every power-on the panel starts at **“Operator”**.

| **Level** | **Who** | **What it opens** |
| --- | --- | --- |
| **“Operator”** | The driver | Everything for work: the target rates, the fields, the statistics, **“Alarm delay”**, the date and time, the language. In the context menus: **“Information”** and the everyday sensor settings such as **“Fraction”** or **“Minimum, rpm”**. |
| **“Agronomist”** | The farmer, the dealer | Also **“Seeding machine parameters”** (working width, modes, calibrations), the hidden parameters of every sensor, and in the main menu the **“Service”** menu with **“Sensors Configuration”** for seed and pressure sensors. |
| **“Service”** | The service engineer | Also the profile, the configuration of HUB-8 concentrators and tramline actuators, the service screen of the motors, **“Reset to defaults”** in every context menu and **“Reset settings”**. The status screen of a sensor shows its address. |

The list under **“User”** has a fourth value, **“Debug”**. It is for the manufacturer and has no use in the field.

A raise to **“Agronomist”** or **“Service”** asks for the PIN of that level. The PINs are different for every panel: the dealer gives them for your panel. Going down asks nothing. How: [Enable the Agronomist level](enable-agronomist-level.md).

In this manual a parameter or menu item says which level it needs. An item you do not see is above your level, or does not apply to the machine in the profile.

## What happens to the alarms while the level is high

> **IMPORTANT**
>
> **At “Agronomist” and “Service” the panel shows no alarm windows.** A fault on a sensor raises no window and no alarm signal until the level is back at **“Operator”**.

The only window that still comes is **“User is Agronomist! Alarms will not be shown!”** — once per session, as soon as the panel sees seeding at the higher level. See [User is Agronomist](alarms-access-level.md).

When you go back down to **“Operator”**, the panel drops the alarms that have cleared in the meantime and shows the ones that are still true, one after another.

## Back to Operator

- In **“Settings”** set **“User”** to **“Operator”** with **“MINUS”** and press **“MENU”**, or
- switch the panel off and on.

Do one of the two after every commissioning or repair, before the machine goes back to work.

## What is in the Service menu

The main menu shows **“Service”** from the **“Agronomist”** level on. What it holds:

| **Item** | **Level** | **What it is for** |
| --- | --- | --- |
| **“Profile”** | Service | The list of devices of the machine. [The profile](profile.md) |
| **“Sensors Configuration”** | Agronomist | Gives a new or replaced device its address. [Device configuration](device-configuration.md) |
| **“Electric motors”** | Service | The service screen of the dispenser motors; only with motors in the profile. |
| **“Count seeds always”** | Agronomist | **“Yes”**: the Seeding table and the Statistics screen count seeds also in the **“Flow”** and **“Hybrid”** modes, not only in **“Precise”**. |
| **“Enter key”** | Agronomist | Shown only on a panel with a time-limited licence: enter the licence key from the dealer. |

The remaining items of this menu are for the service engineer and the manufacturer.
