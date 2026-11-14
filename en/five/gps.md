---
title: The built-in GPS receiver
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/gps.html
---

# The built-in GPS receiver

What the satellite symbol on the home screen tells you, how the panel can take the travel speed from GPS, and what happens when the signal is poor.

The Hectare 5 has a GPS receiver of its own. The panel uses it in two ways: it shows how many satellites it receives, and — if it is set to — it takes the **travel speed** from the satellites instead of from a wheel sensor.

## The satellite symbol

On a machine with a speed sensor in the profile, a **satellite symbol** stands in the right-hand column of the home screen, with the number of satellites in use beside it.

| **What you see** | **What it means** |
| --- | --- |
| Satellite **grey** | The receiver works, but the speed is not taken from it. The number shows what it receives. |
| Satellite **green** | The speed comes from GPS; more than 6 satellites — a good signal. |
| Satellite **yellow** | The speed comes from GPS; 4 to 6 satellites. Usable, watch it. |
| Satellite **red** | The speed comes from GPS; fewer than 4 satellites. The speed cannot be trusted. |

![The satellite symbol in its four states — grey, green, yellow, red — with the number of satellites in use.](figures/five-gps-icon)

## Speed from GPS

Whether the speed comes from the receiver is the setting **“GPS internal”** in the context menu of the speed sensor (touch and hold the speed field). It needs the Agronomist level. See [Speed sensor](speed-sensor.md).

When GPS is the speed source and fewer than four satellites are received, the panel raises the alarm **“Poor GPS signal quality”**. Everything the panel calculates from the speed — area, rates, deviations, the drive of the dispenser motors — then depends on a weak signal. Move into the open, or switch back to the wheel sensor.

![The alarm of a weak GPS signal.](figures/five-gps-alarm-poor-signal)

> **IMPORTANT**
>
> **Under trees, buildings or a shed roof the receiver loses satellites.** Start the work only when the satellite symbol is green or yellow.

## The GPS screen

On the [second home screen](second-home-screen.md), a tap on the GPS symbol opens a screen with the receiver's own data: the speed it measures, the date and time it receives (UTC, not the local time of the panel), and the number of satellites in use and in view. Below them runs a log of the receiver for the service engineer. The texts on this screen are in English in every panel language. Leave it with a long swipe up.

![The GPS screen opened from the second home screen.](figures/five-gps-test)
