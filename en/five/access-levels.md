---
title: Access levels
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/access-levels.html
---

# Access levels

The three access levels of the Hectare 5, what each one opens, and what happens to the alarms while a higher level is set.

Not every setting is open to everyone. The panel has three access levels. **After every power-on it starts at the lowest one, “Operator”.**

| **Level** | **What it opens** |
| --- | --- |
| **“Operator”** | Everyday work: brightness, volume, language, alarm delay, the clock, the target rates and alarm levels, taking a sensor into or out of control, the mass calibrations. Resetting the statistics asks for a PIN at this level. |
| **“Agronomist”** | The commissioning settings: **“Seeding machine parameters”**, **“Product rate error,%”**, most sensor parameters, the speed and dispenser calibrations, and the **“Service”** menu with the profile and the device configuration. Needs a PIN. |
| **“Service”** | Everything above, plus the reset-to-defaults items, **“Reset settings”**, **“Save factory defaults”**, the serial number, the trial period and **“Imitation mode”**. For the service department. Needs a PIN. |

Every settings table in this manual names the level an item needs. **An item above your level is not shown in the menu at all** — if an item named here is missing, check the level first.

## Switch the level

The level is changed in one place only: **“Settings”** → **“User”**. Going **up** a level asks for the PIN of that level; going **down** does not. Step by step: [Enable the Agronomist level](enable-agronomist-level.md).

Ask your dealer or the service support for the PIN.

> **IMPORTANT**
>
> **At “Agronomist” and “Service” no alarm windows are shown.** When seeding starts at such a level, the panel warns once in a red window — see [User is Agronomist](alarms-access-level.md). Return to **“Operator”** before you work, or switch the panel off and on.

## What happens to the alarms while the level is high

The alarms are not lost while they are hidden — they wait. When you lower the level to **“Operator”**, the panel drops the ones that have gone away in the meantime and shows the ones that are **still true**, one window after another — also those you had already closed before you raised the level. After an hour of commissioning at **“Agronomist”**, expect a short run of alarm windows on the way back down. It is the backlog, not a new fault. How the windows work: [How alarms work](how-alarms-work.md).
