---
title: Seed sensor state: Clogged, Light struck, Broken
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-sensor-state.html
---

# Seed sensor state: Clogged, Light struck, Broken

What to do when a seed or fertilizer sensor of the Hectare Mini reports that its optical channel is blocked, that it is blinded by sunlight, or that it has failed.

These three alarms are reported by the seed or fertilizer sensor itself about its own state. The device line names the sensor. Its status screen shows the same state in the line **Status:** — [The sensor status screen](sensor-status-screen.md#states-of-a-seed-or-fertilizer-sensor).

## “Clogged”

**What it means.** Something blocks the optical channel of the sensor. The coulter or the seed tube may be blocked.

**What to check, in this order:**

1. The coulter and the seed tube: soil, a stone, wet seed.
2. The optical channel of the sensor: remove the blockage, clean off dust.
3. The power supply of the sensor — it must match the values in the data sheet of the system.

## “Light struck”

**What it means.** Too much light falls into the optical channel; the sensor cannot count. The panel reports it only while the machine moves (or always, without a speed sensor) — a raised implement at the headland does not cause it.

**What to check:** keep direct sunlight out of the optical channel — the seat of an open sensor on its coulter, the covers, the position of the sensor.

## “Broken”

**What it means.** The sensor has detected a fault in itself. On its status screen it reads **“Faulty”**. The sensor may have to be replaced.

**What to check, in this order:**

1. The power supply of the sensor — it must match the values in the data sheet of the system.
2. Disconnect and connect the sensor.
3. If it stays **“Faulty”**, replace the sensor. A new seed sensor needs the number of its row — [Configure a seed sensor](configure-seed-sensor.md).
