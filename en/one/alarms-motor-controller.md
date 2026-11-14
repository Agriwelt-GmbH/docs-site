---
title: Metering motor: jammed, electrical faults, bootloader
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/alarms-motor-controller.html
---

# Metering motor: jammed, electrical faults, bootloader

What to do when the controller of a dispenser electric motor reports a jam, a short circuit, over-current, a wrong supply voltage, overheating or an unknown fault.

These alarms come from the controller that drives an electric motor of a dispenser. The name in the alarm window tells you which motor. How the window works: [How alarms work](how-alarms-work.md).

## “Motor jammed!”

**What it means.** The controller does not see rotation while the motor should be running.

**What to check, in this order:**

1. The metering unit is serviceable and turns freely.
2. The rotation sensor of the motor is serviceable, and so is its connection to the controller — the cable and the connector.

## “Short circuit”

**What it means.** The controller has detected a short circuit.

**What to check, in this order:**

1. The cable connection: the cables and the connector are intact.
2. Replace the controller with a serviceable one to test it.

## “Over current”

**What it means.** The current has gone above the limit.

**What to check, in this order:**

1. The motor and the seeding mechanism for jamming.
2. The cable connection: the cables and the connector are intact.
3. Replace the controller with a serviceable one to test it.

## “Under voltage”

**What it means.** The supply voltage of the motor is below the allowed value. The motor cannot run.

**Measure the supply voltage first.**

**If it is too low:**

1. The alternator is serviceable.
2. The tension of the alternator belts.
3. The power harness is connected firmly to the battery or the alternator terminals, as the required supply voltage demands.
4. The cable connections make reliable electrical contact.

**If the supply voltage is in order:** replace the controller with a serviceable one to test it.

## “Over voltage”

**What it means.** The supply voltage of the motor is above the allowed value. The motor cannot run.

**Measure the supply voltage first.**

**If it is too high:**

1. The alternator is serviceable.
2. The power harness is connected firmly to the battery or the alternator terminals, as the required supply voltage demands.
3. The cable connections make reliable electrical contact.

**If the supply voltage is in order:** replace the controller with a serviceable one to test it.

## “Over temperature”

**What it means.** The motor has overheated.

**What to do, in this order:**

1. Let the motor cool down.
2. Replace the controller with a serviceable one to test it.

## “FAILURE”

**What it means.** The controller has detected an unusual fault that needs the service support.

**What to do, in this order:**

1. Read the fault code: context menu of the motor → **“Information”** → line **“Last fault”**. See [Read the motor fault code](motor-fault-codes.md).
2. Replace the controller with a serviceable one to test it.
3. Give the code and the number of the motor to the service support.

## “Device in bootloader!”

**What it means.** The controller has stayed in its firmware update mode and is not running its working program. It cannot drive the motor.

**What to do, in this order:**

1. Switch the power off and on.
2. If the message returns, the firmware update of the controller was not completed. Call the service support.

> **SEE ALSO**
>
> The liquid fertilizer pump controller raises the same electrical alarms — [Liquid fertilizer pump](alarms-pump-controller.md).
