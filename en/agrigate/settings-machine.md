---
title: Settings — Machine
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/settings-machine.html
---

# Settings — Machine

The machine profile, the working width, the numbering of the sensors, the HUB-8 devices, the tramline and the gateway — what each section of the group Machine holds.

**“Settings”** › **“Machine”** holds everything the app and the gateway need to know about the seeder. The page **“Machine”** of the ring leads here with **“Open in Settings”**.

| Section | What is in it | Where it is explained |
| --- | --- | --- |
| **“Machine profile”** | **“Rows”**, **“Fertilizer sensors”**, **“Sensors on the bus now”**, the status line of the profile in the gateway; in Hybrid and Precision **“Width, cm”** and **“Row spacing”**; the button **“Number the sensors”**. | [Set up the machine profile](machine-profile.md) · [Number the sensors](sensor-numbering.md) |
| **“Devices”** | **HUB-8** — the devices of the machine and the inputs they take; **“Default slots”** — puts the default values back into the tiles at the bottom. | [HUB-8 inputs](hub8-inputs.md) · [The tiles at the bottom](bottom-tiles.md) |
| **“Tramline”** | The number of tramline actuators, the switch **“Tramline”**, the rhythm, the mapping of actuators to rows and every actuator. Shown only on machines that can have a tramline. | [Tramline](tramline.md) |
| **“Bridge”** | The link and its signal, **“My bridge”**, **“Reconnect”**, **“Forget bridge”**, **“Bridge firmware”**, **“Hardware revision”**, **“Bridge update”** and the link counters; in Hybrid and Precision also **“GNSS speed”** with its age in seconds. | [First connection to the gateway](first-connection.md) · [Update the gateway](bridge-update.md) |

## The profile status line

Under the numbers of the profile a line says what the gateway did with it:

| The line says | Meaning |
| --- | --- |
| **“profile read from the bridge at”** and a time | The app read the profile from the gateway on connecting. |
| **“writing the profile to the bridge…”** | A change is on its way. |
| **“profile written to the bridge at”** and a time | The gateway took the change. |
| **“profile not yet read from the bridge”** | Nothing has been read since the app started. |
| A message with a code | The gateway refused. See [9xx · Setup answers of the gateway](codes-9-setup.md). |

## GNSS speed

**“GNSS speed”** shows the speed the iPad gives and how many seconds old it is, for example “10.0 km/h · 0 s”. When there is no fresh speed it shows **“no speed”** in orange. [Code 703](codes-7-tablet.md#c703)

> **SEE ALSO**
>
> [Settings](settings.md) · [The machine page](machine-screen.md)
