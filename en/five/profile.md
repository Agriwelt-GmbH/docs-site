---
title: The profile
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/profile.html
---

# The profile

What the profile tells the panel, how to check it, what each profile item allows, when the panel refuses a profile, and how it is saved.

The profile tells the panel **which devices, and how many of each**, are on the machine. A panel usually arrives with the profile already set. **Check it before you set anything else**: a device missing from the profile is never watched, and a device in the profile that is not fitted raises **“Connection lost”**.

## Check the profile on the home screen

Switch the panel on and wait until the home screen appears. Then look at it:

- **No “Connection lost” alarm** — the panel has found every device the profile declares.
- **No white indicators with an exclamation mark** — no device is left out of control.
- **No red indicators with an “X”** — every device answers.

What the indicators mean: [Indicators](indicators.md). How to take a device into control or out of it: [Take a sensor into or out of control](sensor-in-and-out-of-control.md).

> **NOTE**
>
> A profile is sometimes supplied with devices that are **not in the delivery**, so that the system can be extended later. Those indicators stay out of control on purpose. Do not switch their control on.

## Open the profile

The profile needs the **“Agronomist”** level ([Enable the Agronomist level](enable-agronomist-level.md)). Tap the home screen with two fingers, then tap **“Service”** twice and **“Profile”** twice. Change the selected item with a swipe right or left.

![The top of the Profile menu.](figures/five-menu-profile)

## The profile items

| **Item** | **Range** |
| --- | --- |
| **“Seed sensors”** | **2 … 120.** The menu lets you set 1, but such a profile is refused when it is saved. |
| **“Fertilizer sensors”** | **0 … 60**; seed and fertilizer sensors together **not more than 120**. |
| **“Liq.fert.flow sensors”** | **0 … 60** — liquid fertilizer section sensors. |
| **“Hoppers”** | 0 … 9 |
| **“Dispensers”** | 0 … 9 — dispenser shaft sensors. |
| **“Speed”** | **“No”** / **“Control panel”** (sensor wired to the panel) / **“Input device”** (one wheel sensor on an input device) / **“Input device (2)”** (two wheel sensors on an input device). |
| **“Fans”** | 0 … 2 |
| **“Pressure sensors”** | 0 … 3 |
| **“Work position sensor”** | **“No”** / **“Yes”** |
| **“Markers”** | **“No”** / **“One”** / **“Both”** |
| **“No battery charge”**, **“Emergency oil pressure”**, **“Ignition”**, **“Low fuel”**, **“Air filter”** | The engine sensors — **“No”** / **“Yes”** each. |
| **“EMD of the seeds”** | **0 … 60** — seed dispenser electric motors. |
| **“EMD of the fertilizers”** | **0 … 30** — fertilizer dispenser electric motors; both motor groups together **not more than 60**. |
| **“Tramline actuators”** | 0 … 4 |
| **“Liq.fert.pump controller”** | 0 … 1 |

At the end of the menu follow **“Save settings”**, **“Load settings”**, the two memory card items and **“Save profile”** — see below and [Save and load settings](save-and-load-settings.md).

## When the panel refuses a profile

The panel checks the whole profile, not only the item you changed. It refuses a profile when:

- the hopper, dispenser and engine sensors together come to **more than 12**;
- they come to **more than 10** while the pressure and fan sensors together come to more than four;
- the pressure and fan sensors together come to **more than five**;
- there are **fertilizer motors but no seed motors**, or fertilizer motors but no fertilizer sensors;
- there are electric motors or a liquid fertilizer pump **but no speed sensor**.

## Save the profile

::: steps
1. After changing the profile, tap **“Save profile”** at the end of the menu, and tap it again.

2. If nothing was changed, the panel shows **“No changes”**. If the profile breaks one of the rules above, it shows **“Invalid profile!”** in red and saves nothing. Otherwise it asks **“Are you sure?”**.

   ![The question before the profile is saved.](figures/five-confirm-sure)

3. Tap **“Yes”**. The panel shows **“Wait...”**, then **“Saved”** and **“Restart system”**, and restarts by itself.
:::

A tap on **“No”**, or outside the question window, leaves the saved profile as it was.
