---
title: Tramline actuator
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/tramline-actuator.html
---

# Tramline actuator

The two parameters of the tramline actuator, where the rest of its settings live, and what its status screen shows.

The tramline actuator shuts the sections of the tramline bout. It has two parameters of its own, in its context menu ([Sensor settings](sensor-settings.md)):

| Parameter | Values | Level |
| --- | --- | --- |
| **“Cutoff position”** | **“Pulled out”** / **“Pulled in”** — the position of the actuator in which its sections are shut off. Default **“Pulled out”**. | Agronomist |
| **“Switch”** | **“when seeding”** / **“always”** — when the actuator is switched. Default **“when seeding”**. | Agronomist |

The rest of its settings live elsewhere:

| What | Where |
| --- | --- |
| The address and the marker channels of its controller | [Configure a tramline actuator controller](configure-tramline-actuator.md) |
| The rhythm — which bout shuts which actuator | [Tramline rhythm](tramline-rhythm.md) |
| Which sections belong to the actuator | **“Actuators to sensors mapping”** — [Seeding machine parameters](seeding-machine-parameters.md#actuators-to-sensors-mapping) |

The status screen of the actuator shows **Status:** **Pulled in**, **Pulled out**, **Working** while the shutter is moving, or **Unknown**. Alarms: [Tramline alarms](alarms-tramline.md).

> **NOTE**
>
> **One actuator controller carries three things:** the actuator itself and **both** marker sensors of the bout. That is why a machine with markers and a tramline needs only one such controller.
