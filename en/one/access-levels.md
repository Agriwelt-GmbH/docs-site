---
title: Access levels
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/access-levels.html
---

# Access levels

The three access levels of the Hectare One, what each one allows, and how to switch between them.

Not every setting is open to everyone. The panel has three working access levels. **After every power-on it starts at the lowest one, “Operator”.**

| Level | What it allows |
| --- | --- |
| **“Operator”** | Everyday work. Some parameters cannot be changed, and the statistics cannot be reset. |
| **“Agronomist”** | Resetting the statistics, the seeding machine parameters, the product rate error and the other commissioning settings. Needs a PIN. |
| **“Service”** | The profile and the reset-to-defaults items. For the service department. Needs a PIN. |

A fourth level, **“Debug”**, exists above **“Service”**. It is used at manufacture only; see [The Service menu](service-menu.md).

Every settings table in this manual names the level an item needs. An item above your level is not shown in the menu at all.

## Switch the level

The level is changed in the **“Settings”** menu, item **“User”**, and nowhere else — there is no button combination for it. Going **up** a level asks for the PIN; going **down** does not. Step by step, with the screens: [Enable the Agronomist level](enable-agronomist-level.md).

The PIN is different for every panel. Take it from the device passport or ask the service support.

> **IMPORTANT**
>
> **At “Agronomist” and “Service” no alarm windows are shown.** The panel warns about it in a red window — see [User is Agronomist](alarms-access-level.md). Return to **“Operator”** before you work — or switch the panel off and on.

## What happens to the alarms while the level is high

The alarms are not lost while they are hidden — they wait. When you lower the level, the panel drops the ones that have gone away in the meantime and shows the ones that are **still true**, one window after another. After an hour of commissioning at **“Agronomist”**, expect a short run of alarm windows on the way back down. It is the backlog, not a new fault. How the windows work: [How alarms work](how-alarms-work.md).
