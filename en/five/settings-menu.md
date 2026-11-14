---
title: The Settings menu
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/settings-menu.html
---

# The Settings menu

Every item of the panel's own "Settings" menu — brightness, volume, language, touch sound, diagram settings, date and time, alarm delay, access level — with its range, default and access level.

The **“Settings”** menu holds the settings of the panel itself. Open it from the home screen: tap with **two fingers**, then tap **“Settings”** twice. The settings of the individual sensors are elsewhere — see [Sensor settings](sensor-settings.md).

::: {.anatomy fig="five-menu-settings"}
1. **“Brightness,%”** — the backlight. The selected item shows its value between **-** and **+**; swipe right or left to change it.
2. **“Volume”** — the loudness of the alarm sound.
3. **“Language”** — the language of the screens.
4. **“Buttons sound”** — a click on every touch the screen takes.
5. **“Seeding diagram settings”** — how the seed diagram is drawn. [Below](#diagram-settings).
6. **“Change Date&Time”** — the clock. [Below](#change-date-and-time).
7. **“Alarm delay”** — how long a fault must last before the alarm window opens.
8. **“User”** — the access level. [Access levels](access-levels.md).

The **“Settings”** menu of a planter with a speed sensor in the **“Precise”** mode, at the **“Operator”** level, with **“Brightness,%”** selected.
:::

> **IMPORTANT**
>
> **The menu does not always have the same items.** The access level, the machine in the profile and the modes of the diagrams change it. If an item named here is missing, check those three before looking for a fault.

## The items

| **Item** | **Range and default** | **Level** |
| --- | --- | --- |
| **“Brightness,%”** | 0 … 100, in steps of 10; default 100. 0 is the dimmest setting, not off. See [Screen brightness](screen-brightness.md). | Operator |
| **“Volume”** | 0 … 100, in steps of 10; default 100. | Operator |
| **“Language”** | English, Ukrainian, Polish, Hungarian, Romanian, Bulgarian. | Operator |
| **“Buttons sound”** | **“No”** / **“Yes”**; default **“Yes”**. | Operator |
| **“Seeding diagram settings”**, **“Fertil. diagram settings”**, **“Liq.fert. diagram settings”** | Submenus. Each is shown only when the machine has a speed sensor, its own sensors are in the profile and its diagram is **not** in the **“Flow”** mode. | Operator |
| **“Change Date&Time”** | Submenu. | Operator |
| **“Alarm delay”** | **2 … 20 s**; default 3 s. See [How alarms work](how-alarms-work.md). | Operator |
| **“Product rate error,%”** | **3 … 20 %**; default 5 %. How far a product dosed by weight, or the liquid fertilizer pump, may stand from its target before an alarm. Shown only when a product is dosed by weight or a pump controller is in the profile. | Agronomist |
| **“Seeding machine parameters”** | Submenu: width, modes, tramline, calibrations. Hidden when the machine has neither a speed sensor nor a tramline actuator. [Seeding machine parameters](seeding-machine-parameters.md) | Agronomist |
| **“User”** | **“Operator”** / **“Agronomist”** / **“Service”**. [Enable the Agronomist level](enable-agronomist-level.md) | Operator |
| **“Reset settings”** | Returns the settings to the factory values. | Service |

On a machine with two groups of seed sensors, the two diagram items read **“Seeding gr.A diagram”** and **“Seeding gr.B diagram”**.

**The settings are stored by themselves** a few seconds after the last change. Wait a moment before you switch the panel off.

## Diagram settings

![The diagram settings of the seed sensors.](figures/five-menu-diagram)

There are three of these menus — seed, dry fertilizer, liquid fertilizer. The liquid fertilizer menu has only **“Grid”** and **“Reset to defaults”**.

| **Item** | **What it does** |
| --- | --- |
| **“Skips & Doubles”** | **“Yes”** shows the skip and double bars over the last stretch of the path. **“Precise” mode only.** Default **“Yes”**. |
| **“Grid”** | **“No”** — only the rate line; **“Partial”** — only the tolerance limits; **“Full”** — both. Default **“Full”**. |
| **“Scale S&D,%”** | The height of the skip and double bars, **5 … 50 %** in steps of 5; default 20. **“Precise” mode only.** |
| **“Reset to defaults”** | Returns this menu to the factory values. **Service** level only. |

## Change Date and Time

::: steps
1. Tap **“Change Date&Time”**, and tap it again. The fields **“Year”**, **“Month”**, **“Day”**, **“Hours”**, **“Minutes”** and **“Seconds”** open, with **“Set”** at the end.

   ![The date and time fields.](figures/five-menu-datetime)

2. Tap a field and swipe right or left until it shows the value you need — one step per swipe. The days follow the month.

3. Tap **“Set”**, and tap it again. The clock takes the new values and the **“Settings”** menu returns.
:::

Leaving the fields with a tap outside the menu, without **“Set”**, keeps the old time.
