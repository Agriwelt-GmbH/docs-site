---
title: Liquid fertilizer pump: pressure and rate alarms
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-pump-controller.html
---

# Liquid fertilizer pump: pressure and rate alarms

What to do when the liquid fertilizer pump controller reports too much pressure, a failed pressure sensor, or a rate it cannot hold.

The pump controller is built on the same electronics as the controller of a metering motor. Besides the alarms on this page it raises **the electrical alarms of the metering motor controller** — **“Short circuit”**, **“Over current”**, **“Under voltage”**, **“Over voltage”**, **“Over temperature”**, **“FAILURE”** and **“Device in bootloader!”** — with the same meaning and the same actions: see [Metering motor alarms](alarms-motor-controller.md). How the window works: [How alarms work](how-alarms-work.md).

## “High pressure”

**What it means.** The measured liquid pressure has reached **“Max pressure, Bar”**.

**What to do, in this order:**

1. Reduce the travel speed.
2. In the settings of the pump controller, check **“Max pressure, Bar”** and, if the line allows it, increase it — see [Liquid fertilizer](liquid-fertilizer.md).

## “Pressure sensor failure!”

**What it means.** The signal from the pressure sensor has fallen well below its 4–20 mA working range.

**What to check, in this order:**

1. The connection of the sensor to the controller — the cable and the connector are intact.
2. **“Pressure sensor”** in the settings of the pump controller names the input the sensor is really wired to.
3. The sensor is serviceable. If it has failed, replace it.

The status screen of the pump controller shows the pressure and the raw sensor signal in mA — see [The sensor status screen](sensor-status-screen.md#what-each-kind-of-sensor-adds).

## “Rate low”

**What it means.** The pump controller cannot reach the set rate: the actual rate is below the target by more than **“Product rate error,%”**.

**What to check, in this order:**

1. The travel speed on the panel matches the real speed and is reasonably steady.
2. The working load of the pump. **Above 90 %:** drive more slowly.
3. **Load under 90 %, or jumping strongly:** increase **“Product rate error,%”** in the **“Settings”** menu, at the **“Agronomist”** level — see [The Settings menu](settings-menu.md).
4. The pump is serviceable.

## “Rate high”

**What it means.** The pump controller applies more than the set rate: the actual rate is above the target by more than **“Product rate error,%”**.

**What to check, in this order:**

1. The travel speed on the panel matches the real speed and is reasonably steady.
2. The working load of the pump. **Under 10 %:** drive faster.
3. **Load above 10 %, or jumping strongly:** increase **“Product rate error,%”** in the **“Settings”** menu.
4. The pump is serviceable.
