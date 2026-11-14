---
title: 3xx · Hopper, fan, metering unit and tractor inputs
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes-3-machine-devices.html
---

# 3xx · Hopper, fan, metering unit and tractor inputs

Codes 301–311: the devices on the HUB-8 hub — hopper, fan, metering unit, work position and tractor inputs.

Codes 3xx come from the devices wired to the HUB-8 hub: hopper level, fan speed, metering unit rotation and the tractor inputs (oil pressure, battery charge, fuel, air filter). The place is the device, for example “301 · hopper”. How the devices are set up: [HUB-8 inputs](hub8-inputs.md).

How to read a code, the four classes and how each looks in the app: [How service codes work](codes.md).

## 301 · Hopper empty {#c301}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Hopper empty”**. The hopper tile shows **“Empty”** with a red ring. This alarm sounds even when the machine stands.

**What to do:**

1. Fill the hopper.
2. If the hopper is full, check the level sensor and its setting: [HUB-8 inputs](hub8-inputs.md).

## 302 · Fan too slow {#c302}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Fan speed too low”**. The fan tile shows the speed in rpm with a red ring. Only while seeding.

**What to do:**

1. Raise the fan speed: hydraulic flow, engine speed.
2. Check **“Min, rpm”** and **“Pulses per revolution”** of the fan: [HUB-8 inputs](hub8-inputs.md).

## 303 · Fan too fast {#c303}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Fan speed too high”**. The fan tile shows the speed in rpm with a red ring.

**What to do:**

1. Lower the fan speed.
2. Check **“Max, rpm”** and **“Pulses per revolution”** of the fan: [HUB-8 inputs](hub8-inputs.md).

## 304 · Metering unit not turning {#c304}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Dispenser not turning”**. The metering unit tile shows **“Stopped”** with a red ring. Only while seeding, after the time set in **“Period, s”**.

**What to do:**

1. Stop: the metering unit does not turn.
2. Check its drive, the chain and the clutch.
3. If it does turn, check the shaft sensor and **“Period, s”**.

## 305 · Oil pressure low {#c305}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Emergency oil pressure”**. With an ignition input it sounds only with the ignition on.

**What to do:**

1. Stop the engine.
2. Check the oil level.

## 306 · Battery not charging {#c306}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“No battery charge”**. With an ignition input it sounds only with the ignition on.

**What to do:**

1. Check the alternator and its belt.

## 307 · Fuel low {#c307}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Low fuel”**.

**What to do:**

1. Refuel.

## 308 · Air filter clogged {#c308}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Air filter clogged”**.

**What to do:**

1. Clean or replace the air filter.

## 309 · Machine device not answering {#c309}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Connection lost:”** followed by the name of the device, for example the hopper. Its tile has a grey ring.

**What to do:**

1. Check the cable of the named device to the HUB-8.
2. Check the power and the cable of the HUB-8 itself, if all its devices are silent.

## 310 · Wrong device on a HUB-8 input {#c310}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Wrong device type:”** followed by the name of the device. Its tile shows **“Wrong”**.

**What to do:**

1. Check that the device is wired to its own input.
2. Check that the kind of the device is right in the machine's devices: [HUB-8 inputs](hub8-inputs.md).

## 311 · Tractor input in alarm {#c311}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the device.

**What you see.** The alarm window with **“Alarm:”** followed by the name of the device.

**What to do:**

1. Check the device named in the window.
