---
title: How the parts connect
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/how-it-connects.html
---

# How the parts connect

The path of a reading from the sensor in the seed tube to the screen of the iPad — sensor line, gateway, Bluetooth, app — and what each part knows.

A reading travels this way:

1. **The sensor** in the seed tube counts the seeds of its row.
2. **The sensor line** on the seeder carries the readings of all sensors, the HUB-8 and the tramline actuators to the cab. Every device on the line has its own number; for a seed sensor it belongs to its row.
3. **The gateway** at the cab end of the sensor line asks every device in turn and collects the answers.
4. **Bluetooth** carries them from the gateway to the tablet, about twice a second.
5. **The Hectare app** draws the rows, judges them against the rate and raises the alarms.

## What each part knows

| Part | Knows | Does not know |
| --- | --- | --- |
| Sensor | Its own count and its own faults | Anything about the other rows |
| Gateway | Which devices are on the line, in which order, and what each one answers. It keeps the machine profile the app writes to it. | What a HUB-8 input means — a hopper, a fan, the work position. That lives in the app. |
| App | Everything you see: the rate, the control line, the alarms, the statistics, the meaning of every device | — |

So the judgement is made in the app: the alarm delay, the share of rows that must sow, the tolerance — all these are set in the app. See [Control and Alarms settings](settings-control-alarms.md).

## One gateway, one tablet

A gateway talks to one tablet at a time. The app remembers its gateway and connects only to it from then on; when several gateways are in range, it asks which one is yours. See [First connection to the gateway](first-connection.md).

## When the link is lost

When Bluetooth drops, or the gateway stops sending, the app dims the screen — every figure on it is old — and after 3 seconds opens the alarm window **“Bridge link lost”**. The window closes by itself when the gateway answers again. See [code 601](codes-6-gateway-link.md#c601).

> **SEE ALSO**
>
> [What is in the kit](whats-in-the-kit.md) · [Mount and connect the gateway](mount-and-connect.md)
