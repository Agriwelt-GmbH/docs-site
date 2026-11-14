---
title: Tramline alarms: Illegal state, Stall
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-tramline.html
---

# Tramline alarms: Illegal state, Stall

What to do when a tramline actuator of the Hectare Mini reports both end positions at once, does not reach its position, or when seed passes a line shut off for a tramline.

A tramline actuator shuts off the seed lines of the tramline on the bouts the rhythm asks for ([Next tramline bout](next-tramline-bout.md)). The device line names it: **Tramline actuator: #1**.

## “Illegal state”

**What it means.** The actuator reports both end positions at the same time — pulled in and pulled out. Its end position switches contradict each other.

**What to check, in this order:**

1. The end position switches of the actuator and their wiring.
2. Dirt or ice holding a switch.
3. The actuator itself.

## “Stall”

**What it means.** The actuator was told to move but has not reached the position asked for.

**What to check, in this order:**

1. The shutter: blocked by seed, dirt or a bent part.
2. The power supply of the actuator.
3. The end position switch of the position asked for.
4. The actuator itself.

On its status screen the actuator shows **Status:** **“Pulled in”**, **“Pulled out”**, **“Working”** while it moves, or **“Unknown”** — [The sensor status screen](sensor-status-screen.md).

## “Seeding to tramline”

Raised by the seed sensor of a line that should be shut off. See [Seeding alarms](alarms-seeding.md#seeding-to-tramline).
