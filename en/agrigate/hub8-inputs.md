---
title: HUB-8 inputs — the devices of the machine
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/hub8-inputs.html
---

# HUB-8 inputs — the devices of the machine

Tell the app which devices the HUB-8 carries — hoppers, fans, metering units, tractor inputs, work position, flowmeter — which input each one takes, and how each is set up and alarms.

The HUB-8 hub brings the other devices of the machine onto the sensor line. The gateway only reads its inputs; what is wired to an input — a hopper sensor, a fan sensor, the work position — is known only to the app. So you tell the app what is on the machine, and the app works out which input each device takes.

Open **“Settings”** › **“Machine”** › **HUB-8**. The page **“Devices”** opens.

## Devices on the machine

Under **“Devices on the machine”** set how many of each kind the machine has, with **−** / **+**. The limits: 2 fans, 9 metering units, 9 hoppers, one of every other kind; metering units, hoppers and tractor inputs together at most 12. At a limit the **+** stays off.

## Which input each device takes

The devices take the inputs of the HUB-8 in a fixed order: speed sensor → fans → metering units → hoppers → tractor inputs → work position → flowmeter. The first device in this order is wired to input 1, the next to input 2, and so on. The list **“HUB-8 inputs”** shows every input with its device and its live state.

> **IMPORTANT**
>
> **Adding a device moves the devices after it.** Add a hopper, and the work position moves one input further. Rewire the HUB-8 to the new list. If the gateway holds the devices in another order, the page says **“Addresses in the bridge do not follow the ribbon”**; tap **“Lay out by the ribbon”**.

The markers are not on the HUB-8: they are wired to the tramline controller. Switch them on in the section of the markers at the bottom of the page.

The section **“Profile in the bridge”** shows whether the gateway has taken the list.

## The settings of each device

Tap a device in the list (or its tile on the rows screen) to open its page: its state and its **“Parameters”**.

| Device | Parameters | When it alarms |
| --- | --- | --- |
| **“Work position”** | **“Transport position signal”** (0 or 1), **“Alarm criterion”** | The state is shown as **“Work”** or **“Transport”**. In transport position — the seeder lifted out of work, on the headland turn too — **“Under allowable rate”**, **“Not seeding”**, a slow fan and a stopped metering unit stay silent. Seed sensor faults sound in transport position too. |
| **“Hopper”** | **“Signal “empty””** is 1 | Always, even with the machine standing: **“Hopper empty”**. |
| **“Fan”** | **“Pulses per revolution”** (1–60), **“Min, rpm”** and **“Max, rpm”** (500–9000) | Too fast — always; too slow — only while seeding. |
| **“Metering unit”** | **“Period, s”** (1–60) | Not turning for longer than the period while seeding: **“Dispenser not turning”**. |
| **“Oil pressure”**, **“Battery charge”** | **“Alarm signal”** (0 or 1), **“Delay, s”** (1–30) | The signal must hold for the delay. With an ignition input, only with the ignition on. |
| **“Fuel”**, **“Air filter”** | **“Alarm signal”**, **“Delay, s”** | The signal must hold for the delay. |
| **“Ignition”** | **“Signal “on””** | Never — it is a state that the oil pressure and battery charge depend on. |
| **“Flowmeter”** | **“Pulses per litre”** (1–60000) | — It shows litres per minute and the litres so far. |
| **“Left marker”**, **“Right marker”** | **“Signal “lowered””** | — They are shown as **“Lowered”** or **“Raised”**. |

The states shown in the list and on the tiles: **“no data”** — nothing read yet; **“silent”** — the input does not answer; **“wrong device”** — another kind of device answers. The alarms of these devices: [3xx · Hopper, fan, metering unit and tractor inputs](codes-3-machine-devices.md).

> **SEE ALSO**
>
> [The machine page](machine-screen.md) · [The tiles at the bottom](bottom-tiles.md)
