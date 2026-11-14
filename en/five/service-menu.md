---
title: The Service menu
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/service-menu.html
---

# The Service menu

Every item of the "Service" menu, its access level, and which ones an engineer should leave alone.

Tap the home screen with two fingers, then tap **“Service”** twice. The menu itself is shown from the **“Agronomist”** level up; which items you see depends on the level ([Access levels](access-levels.md)).

![The Service menu at the Service level.](figures/five-menu-service)

| **Item** | **Level** | **What it is** |
| --- | --- | --- |
| **“Profile”** | Agronomist | Which devices the machine has, and how many. [The profile](profile.md) |
| **“Sensors Configuration”** | Agronomist | Giving devices their address. [Device configuration](device-configuration.md) |
| **“Registers”** | Agronomist | A raw register view. Not part of any procedure. |
| **“Electric motors”** | Agronomist | The diagnostic screen and the configuration of the metering motor controllers. [Configure the motor controllers](configure-motor-controllers.md) |
| **“Serial number”** | Service | The serial number of the panel, entered once at manufacture. |
| **“Imitation mode”** | Service | **“No”** / **“Yes”** — the panel works from simulated data. See the warning below. |
| **“Count seeds always”** | Agronomist | **“No”** / **“Yes”** — **“Yes”** shows the seed counters in the **“Flow”** and **“Hybrid”** modes too; otherwise they are shown in the **“Precise”** mode only. |
| **“Enter key”** | Agronomist | Enters the licence key that takes the panel out of the demonstration state. Shown only while the panel is in that state. |
| **“Set trial”** | Service | Starts the demonstration period. |
| **“Trial, hours”** | Service | 1 … 999 — how long that period lasts. |

Four further items — the tracker protocol, two switches for logging to the memory card and the display type — exist in the firmware but are set never to be shown. They cannot be reached at any level.

> **WARNING**
>
> **“Imitation mode” is not a test aid to be left on.** With it on, the panel works from figures it makes up: every number on every screen and every entry in the statistics is invented. The clock slot of the home screen shows **IMITAT** in yellow while it is on. Switch it off before the machine goes to work — and check it if a panel reports a plausible field it never sowed.

**“Imitation mode”** is shown in English whatever language the panel is set to.
