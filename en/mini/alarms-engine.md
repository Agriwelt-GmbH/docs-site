---
title: Engine alarms: oil pressure, battery charge, fuel, air filter
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-engine.html
---

# Engine alarms: oil pressure, battery charge, fuel, air filter

What to do when a sensor of the separate fan-drive engine of the Hectare Mini reports low oil pressure, no battery charge, low fuel or a dirty air filter.

The sensors of a separate fan-drive engine all raise the same alarm text, **“FAILURE”**. **The device line names the sensor** — that line is what you look up here. The settings of these sensors: [Engine sensors of the fan drive](engine-sensors.md).

The ignition sensor raises no alarm. It keeps the oil pressure and battery charge alarms quiet while the ignition is off.

## “Emergency oil pressure”

**What it means.** The low oil pressure sensor of the engine has triggered — with the ignition on, if there is an ignition sensor.

**What to check, in this order:**

1. Stop the engine and check the oil level and the oil pressure.
2. The oil pressure sensor is serviceable.
3. **“Activation signal”** of the oil pressure sensor: compare **Pin:** on its status screen with the real state.
4. If the alarm comes with the engine off: is the ignition sensor in the profile and under control? Is it serviceable?

## “No battery charge”

**What it means.** The battery is not being charged by the engine — with the ignition on, if there is an ignition sensor.

**What to check, in this order:**

1. The alternator, its belt and the charging circuit of the engine.
2. The battery charge sensor is serviceable.
3. **“Activation signal”** of the battery charge sensor.
4. If the alarm comes with the engine off: is the ignition sensor in the profile and under control? Is it serviceable?

## “Low fuel”

**What it means.** Little fuel is left in the tank of the engine.

**What to check, in this order:**

1. Refuel.
2. The fuel level sensor is serviceable.
3. **“Activation signal”** of the fuel level sensor.
4. **“Signal delay, sec”** — fuel slopping in the tank on rough ground can trigger it; the default is 15 seconds.

## “Air filter”

**What it means.** The air filter of the engine is dirty.

**What to check, in this order:**

1. Clean or replace the air filter.
2. The air filter sensor is serviceable.
3. **“Activation signal”** of the air filter sensor.
4. **“Signal delay, sec”** — the default is 5 seconds.
