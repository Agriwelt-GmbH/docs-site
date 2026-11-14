---
title: Device does not answer: Connection lost, Wrong device type!
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/alarms-any-device.html
---

# Device does not answer: Connection lost, Wrong device type!

The two alarms every sensor, motor or actuator of the Hectare Mini can raise — no answer from the device, or an answer from the wrong kind of device — and what to check.

Every device on the sensor network can raise these two alarms. **The device line of the alarm window tells you which one** — see [How alarms work](how-alarms-work.md).

## “Connection lost”

**What it means.** The device has not answered three polls in a row. The panel no longer knows its state: nothing about it is watched until it answers again. Its indicator shows a red cross or **XXXX**; its status screen shows **“No connection”**.

**What to check, in this order:**

1. Was the device recently added to the profile? Then it may not have its address yet — [Device configuration](device-configuration.md).
2. The connectors of the device and of the harness: plugged in fully, pins clean and straight, no water inside.
3. The cable of the device and the harness: crushed, chafed or torn, especially at hinges and folding points.
4. The power supply of the device. It must match the values in the data sheet of the system.
5. The profile: does it list a device that the machine does not have? — [Check the profile and the connections](check-profile-and-connections.md).
6. The device itself: swap it with a device of the same kind that works. If the fault moves with it, the device is faulty.

When several devices of one kind are lost at once, look first at what they share: one input device, one HUB-8 concentrator, one branch of the harness.

## “Wrong device type!”

**What it means.** Something answers on the address of this device, but not the kind of device the profile expects there — for example an input device where a pressure sensor should be.

**What to check, in this order:**

1. The profile: the kind of each device as installed — [The profile](profile.md).
2. Was a device replaced or re-addressed recently? Two devices may now share an address, or one has the address meant for another. Address it again — [Device configuration](device-configuration.md).
3. On a HUB-8 concentrator: the type of each channel — [Configure a HUB-8 concentrator](configure-hub8.md).

If you have to keep working with a device that does not answer, you can take it out of control until it is repaired — [Take a sensor into or out of control](sensor-in-and-out-of-control.md). It is then not watched at all.
