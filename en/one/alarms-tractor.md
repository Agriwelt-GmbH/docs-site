---
title: Tractor engine: oil pressure, battery charge, fuel, air filter
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/alarms-tractor.html
---

# Tractor engine: oil pressure, battery charge, fuel, air filter

What to do when one of the on-board engine sensors — oil pressure, battery charge, fuel level, air filter — raises an alarm.

All on-board engine sensors share one alarm text: **“FAILURE”**. **The name of the sensor above the text tells you which one has triggered.** How the window works: [How alarms work](how-alarms-work.md). The settings named below are described in [Hopper, implement position and engine sensors](hopper-position-engine-sensors.md).

## “Emergency oil pressure” — “FAILURE”

**What it means.** The low oil pressure sensor has triggered.

**What to check, in this order:**

1. The low oil pressure sensor is serviceable.
2. **“Activation signal”** in the settings of the low oil pressure sensor.
3. If an ignition key sensor is in the profile: is its monitoring switched on?
4. If an ignition key sensor is in the profile: is it serviceable?

## “No battery charge” — “FAILURE”

**What it means.** The battery is not being charged.

**What to check, in this order:**

1. The battery charge sensor is serviceable.
2. **“Activation signal”** in the settings of the battery charge sensor.
3. If an ignition key sensor is in the profile: is its monitoring switched on?
4. If an ignition key sensor is in the profile: is it serviceable?

## “Low fuel” — “FAILURE”

**What it means.** Little fuel is left in the tank.

**What to check, in this order:**

1. The fuel level sensor is serviceable.
2. **“Activation signal”** in the settings of the fuel level sensor.
3. **“Signal delay, sec”** in the settings of the fuel level sensor. The default is **15 seconds**.

## “Air filter” — “FAILURE”

**What it means.** The air filter is clogged.

**What to check, in this order:**

1. The air filter sensor is serviceable.
2. **“Activation signal”** in the settings of the air filter sensor.
3. **“Signal delay, sec”** in the settings of the air filter sensor. The default is **5 seconds**.

