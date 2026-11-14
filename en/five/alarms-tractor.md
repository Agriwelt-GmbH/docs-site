---
title: Engine: oil pressure, battery charge, fuel, air filter
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/alarms-tractor.html
---

# Engine: oil pressure, battery charge, fuel, air filter

What to do when one of the engine sensors — oil pressure, battery charge, fuel level, air filter — raises an alarm.

All engine sensors share one alarm text: **“FAILURE”**. **The name of the sensor under the text tells you which one has triggered.** Oil pressure and battery charge are watched only while the ignition is on; fuel level and air filter always. How the window works: [How alarms work](how-alarms-work.md). The settings named below are described in [Hopper, work position and engine sensors](hopper-position-engine-sensors.md).

## “FAILURE” — “Emergency oil pressure”

**What it means.** The low oil pressure sensor has triggered.

**What to check, in this order:**

1. The low oil pressure sensor is serviceable.
2. **“Activation signal”** in the settings of the low oil pressure sensor.
3. If an ignition sensor is in the profile: is its control switched on?
4. If an ignition sensor is in the profile: is it serviceable?

## “FAILURE” — “No battery charge”

**What it means.** The battery is not being charged.

**What to check, in this order:**

1. The battery charge sensor is serviceable.
2. **“Activation signal”** in the settings of the battery charge sensor.
3. If an ignition sensor is in the profile: is its control switched on?
4. If an ignition sensor is in the profile: is it serviceable?

## “FAILURE” — “Low fuel”

**What it means.** Little fuel is left in the tank.

**What to check, in this order:**

1. The fuel level sensor is serviceable.
2. **“Activation signal”** in the settings of the fuel level sensor.
3. **“Signal delay, sec”** in the settings of the fuel level sensor. The default is **15 seconds**.

## “FAILURE” — “Air filter”

**What it means.** The air filter is clogged.

**What to check, in this order:**

1. The air filter sensor is serviceable.
2. **“Activation signal”** in the settings of the air filter sensor.
3. **“Signal delay, sec”** in the settings of the air filter sensor. The default is **5 seconds**.

The ignition sensor itself never raises an alarm window: a yellow key on the home screen only says the ignition is off ([Indicators](indicators.md#engine-sensors)).
