---
title: How service codes work
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes.html
---

# How service codes work

What the three digits of an Agrigate service code mean, how the place is shown beside it, the four classes and how each looks in the app, and how to find a code from the words on the screen.

Every alarm, fault and notable event of an Agrigate system has a service code of three digits. A code never changes its meaning: if you tell the service “102 on row 7”, they know what happened without seeing the screen.

## The three digits

The first digit is the part of the system; the other two are the kind of fault.

| Code | Part of the system |
| --- | --- |
| [1xx](codes-1-row-sensor.md) | The sensor of a row itself |
| [2xx](codes-2-seeding.md) | The seeding of a row — the sensor works, the row sows wrong |
| [3xx](codes-3-machine-devices.md) | The devices on the HUB-8: hopper, fan, metering unit, tractor inputs |
| [4xx](codes-4-tramline.md) | Tramline actuators |
| 5xx | Not used in this version |
| [6xx](codes-6-gateway-link.md) | The gateway and the link to it |
| [7xx](codes-7-tablet.md) | The iPad or iPhone |
| [8xx](codes-8-gateway-update.md) | Updating the gateway |
| [9xx](codes-9-setup.md) | The gateway's answers when the app sets something up |

## The place is shown beside the code

The code says *what*; the place says *where*. It is written beside the code, not in it: “102 · row 7”, “301 · hopper”, “404 · tramline actuator #2”. So the same code covers every row and every device.

## The four classes {#classes}

### Alarm {#class-alarm}

A window with a red title strip **“ALARM!”** and the buzzer. Something on the machine needs you now. [The alarm window](alarm-window.md)

### Device fault {#class-fault}

The same window with an orange title strip, and the buzzer. A device reports that it is faulty — clogged, light struck, the wrong kind of device.

### Attention {#class-attention}

No window. A yellow capsule or a line next to what you are doing — for example **“Volume is off”**, or a message on the setup page. Read it and act when you can. [Messages over the screen](screen-messages.md)

### Record {#class-record}

Nothing to do. The event is kept for the service.

## Finding a code from the screen

> **NOTE**
>
> **In this pre-release version the alarm window shows the words of the alarm, not its code.** Find the words in the code topics — every code there gives the words the app shows. The update of the gateway shows its codes on screen, for example **“804 · Bridge updated”**. For the setup answers of the gateway the app shows a number after the words; see [9xx](codes-9-setup.md).

Two codes share their words on screen: 201 and 202 both say **“Under allowable rate”**. The bar tells them apart — yellow for 201, dark red blinking for 202 — and so does the row menu (**“Not seeding”** for 202).

## When you call the service

Give the code (or the words on the screen), the place — the row or the device —, and from **“Settings”**: the version of the app (**“App”** › **“Version”**) and the firmware of the gateway (**“Machine”** › **“Bridge firmware”**).
