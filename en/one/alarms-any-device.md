---
title: Any device: connection lost or wrong device type
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/alarms-any-device.html
---

# Any device: connection lost or wrong device type

The two alarms any sensor, actuator, controller or input device can raise — no answer from the device, or the wrong kind of device answering.

These two alarms are not tied to one kind of device. The name of the device in the alarm window tells you which one is affected. How the window works: [How alarms work](how-alarms-work.md).

## “Connection lost”

**What it means.** The panel has received no answer from the device in three polls in a row. This applies to sensors, actuators, controllers and the input device alike.

**What to check, in this order:**

1. The device is connected to the network.
2. The cable and the connector of the device.
3. The power supply of the device. It must meet the values in the device passport.

## “Wrong device type!”

**What it means.** A device of another kind answers where the panel expects a device of this kind. The cause is either a wrong setting in the system profile or a wrong configuration of the device itself.

**What to do:** call the service support. Do not try to correct it by changing the profile or the device configuration at random — see [Device configuration](device-configuration.md).

> **SEE ALSO**
>
> The status screen of a sensor shows the same two states as **“No connection”** and **“Wrong device type!”** in red — see [The sensor status screen](sensor-status-screen.md).
