---
title: Seeding alarms: rate, skips, doubles, NOT UNDER CONTROL
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-seeding.html
---

# Seeding alarms: rate, skips, doubles, NOT UNDER CONTROL

What to do when a seed or fertilizer line of the Hectare Mini sows too little or too much, has too many skips or doubles, sows into a tramline — or when the panel is not controlling at all.

These alarms come from the seed sensors and the fertilizer sensors. **The device line tells you which line** — for example **Seed sensor: #4**. The limits are the settings of the group ([Seed and fertilizer sensors](seed-and-fertilizer-sensors.md)). Check the speed first in every case: a wrong travel speed makes every rate per metre wrong.

## NOT UNDER CONTROL

**What it means.** Not an alarm window: the seed diagram shows **“NOT UNDER CONTROL”**. Seed flows, but not through enough lines to meet the condition for control — fewer than **“Percent of sowing,%”** of the seed lines sow within the target. Until the condition is met the panel watches no seeding fault.

**What to check, in this order:**

1. The speed on the panel matches the real speed.
2. The target rate — in **“Flow”** the alarm level — on the home screen: is it far above what the machine really sows? — [Change the target rate](set-the-target-rate.md).
3. **“Fraction”** of the seed sensors — too high a value hides small seeds.
4. Enough seed in the hoppers.

## “Under allowable rate”

**What it means.** A line sows less than permitted: in **“Flow”** below the alarm level, in **“Hybrid”** and **“Precise”** below the target by more than **“Rate error,%”**.

**What to check, in this order:**

1. The speed on the panel matches the real speed.
2. Enough seed in the hoppers.
3. The metering unit works and is set right.
4. **“Fraction”** of the sensors — it may have to be lowered.
5. The sensor itself — its state on the status screen ([The sensor status screen](sensor-status-screen.md#states-of-a-seed-or-fertilizer-sensor)).

## “Over allowable rate”

**What it means.** A line sows more than the target plus **“Rate error,%”**. Only in **“Hybrid”** and **“Precise”**.

**What to check, in this order:**

1. The speed on the panel matches the real speed.
2. The metering unit works and is set right.
3. **“Fraction”** of the sensors — it may have to be raised.
4. The sensor itself — its state on the status screen.

## “High % of doubles”

**What it means.** The share of doubles over the last stretch is above **“Doubles error,%”**. Only in **“Precise”**, and only if that setting is not **“No”**.

**What to check, in this order:**

1. The speed on the panel matches the real speed.
2. **“Doubles error,%”** of the seed sensors.
3. The metering unit: vacuum, singulator, disk for the seed.
4. **“Fraction”** — it may have to be raised.
5. The sensor itself — its state on the status screen.

## “High % of skips”

**What it means.** The share of skips over the last stretch is above **“Skips error,%”**. Only in **“Precise”**, and only if that setting is not **“No”**.

**What to check, in this order:**

1. The speed on the panel matches the real speed.
2. **“Skips error,%”** of the seed sensors.
3. Enough seed in the hoppers.
4. The metering unit: vacuum, singulator, disk for the seed.
5. **“Fraction”** — it may have to be lowered.
6. The sensor itself — its state on the status screen.

## “Seeding to tramline”

**What it means.** A line that should be shut off — in a tramline bout, or with **“Product application”** at **“No”** — passes more seed than **“Toler.sowing to tramline,%”** of the target rate.

**What to check, in this order:**

1. The tramline actuator of that line shuts off — see [Tramline alarms](alarms-tramline.md).
2. The setting **“Relation of sensors to actuators”** — the right lines assigned to the actuator ([Seeding machine parameters](seeding-machine-parameters.md)).
3. **“Toler.sowing to tramline,%”**.

## “Old firmware! Wrong S&D calc!”

**What it means.** A fertilizer sensor running in **“Precise”** has firmware too old to count skips and doubles correctly.

**What to check:** run the fertilizer sensors in **“Flow”** or **“Hybrid”**, or have the sensor replaced or updated by the service.
