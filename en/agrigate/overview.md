---
title: What Agrigate is
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/overview.html
---

# What Agrigate is

Agrigate in one page — a gateway that talks to the sensors of the seeder and the Hectare app on an iPad or iPhone in place of the cab monitor.

Agrigate is a seeding monitoring system made by Agriwelt. It watches the seed and fertilizer flow in every row of a seed drill or planter and raises an alarm when a row stops, falls behind or sows wrong. It has two parts:

- **The gateway.** A small unit in the cab, connected to the sensor line of the seeder. It reads every sensor on the line and passes what it reads to the tablet by Bluetooth. It has no screen of its own. In the app it is called the **“Bridge”**.
- **The Hectare app** on an iPad or iPhone. It shows the rows, judges them, raises the alarms, keeps the statistics and sets up the gateway and the sensors.

> **IMPORTANT**
>
> **This is a pre-release version.** The gateway and the app are still changing. These pages describe only what the app and the gateway do today. A function that is not described here should not be relied on.

## What replaces what

| With a Hectare monitor | With Agrigate |
| --- | --- |
| The monitor in the cab, wired to the sensor line | The gateway in the cab, wired to the sensor line |
| The monitor's screen and buttons | The Hectare app on an iPad or iPhone, linked to the gateway by Bluetooth |
| The monitor's buzzer | The tablet's speaker — the alarm sounds through the tablet |

The seed sensors, the HUB-8 hub and the tramline actuators on the seeder are the same Agriwelt devices that work with the Hectare monitors. The app shows them the way the Hectare monitors do: the same bar colours, the same alarm window, the same table and statistics.

## What it does today

- **Seed and fertilizer rows.** One bar per row, in seeds per second (Flow) or seeds per metre (Hybrid, Precision). See [The rows screen](rows-screen.md).
- **Alarms by row number.** A silent, clogged or faulty sensor, a row that does not sow, a row below or above the rate, doubles and skips. See [The alarm window](alarm-window.md).
- **Statistics of five fields** — area, sown and not-sown area, quality. See [Statistics](statistics-screen.md).
- **The devices of the machine** on the HUB-8 hub: hoppers, fans, metering units, work position, tractor inputs, flowmeter. See [HUB-8 inputs](hub8-inputs.md).
- **Tramline**: bouts and rhythm counted by the app, tramline actuators watched. See [Tramline](tramline.md).
- **Updating the gateway** from the app. See [Update the gateway](bridge-update.md).

Every alarm and fault has a three-digit service code. See [How service codes work](codes.md).

> **SEE ALSO**
>
> [What is in the kit](whats-in-the-kit.md) · [What you need](what-you-need.md) · [How the parts connect](how-it-connects.md)
