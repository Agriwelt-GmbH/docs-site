---
title: 4xx · Tramline actuators
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes-4-tramline.html
---

# 4xx · Tramline actuators

Codes 401–404: a tramline actuator is silent, is the wrong device, does not know its position or is jammed.

Codes 4xx come from the tramline actuators. The window names the device **“Tramline actuator”** and gives its number, for example “#1”. How the tramline is set up: [Tramline](tramline.md).

How to read a code, the four classes and how each looks in the app: [How service codes work](codes.md).

## 401 · Tramline actuator not answering {#c401}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the tramline actuator.

**What you see.** The alarm window with **“Connection lost”**, **“Tramline actuator”** and its number.

**What to do:**

1. Check the cable and the power of the tramline actuator.

## 402 · Not a tramline actuator {#c402}

**Class:** [Device fault](codes.md#class-fault) · **Place:** the tramline actuator.

**What you see.** The alarm window with an orange title, **“Wrong device type!”**, **“Tramline actuator”** and its number. It comes at once, without delay.

**What to do:**

1. Another device answers in the place of this actuator: check the numbering of the devices on the machine.

## 403 · Tramline actuator position unknown {#c403}

**Class:** [Device fault](codes.md#class-fault) · **Place:** the tramline actuator.

**What you see.** The alarm window with an orange title, **“Unknown state”**, **“Tramline actuator”** and its number.

**What to do:**

1. Check the shutter mechanism.
2. Open **“Settings”** › **“Machine”** › the actuator › **“Registers”** and press **“Reset”** to clear the state.

## 404 · Tramline actuator jammed {#c404}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the tramline actuator.

**What you see.** The alarm window with **“Jammed”**, **“Tramline actuator”** and its number.

**What to do:**

1. Free the shutter mechanism.
2. Open **“Settings”** › **“Machine”** › the actuator › **“Registers”** and press **“Reset”** to clear the state.
