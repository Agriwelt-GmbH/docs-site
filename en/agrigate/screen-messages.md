---
title: Messages over the screen
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/screen-messages.html
---

# Messages over the screen

The red and yellow capsules that appear over every page — the link to the gateway, the sound, and seeding without control — what each means and what to do.

Besides the alarm window, the app speaks through small capsules over the page. They are not windows: they need no closing and disappear when the cause is gone.

## Red capsule in the middle of the screen — the link to the gateway

While the red capsule is shown, the app has no live data: the page is dimmed and shows the last reading.

| The capsule says | What it means | What to do |
| --- | --- | --- |
| **“Looking for the bridge…”** | The app is looking for its gateway. | Check that the gateway has power and the tablet is close to it. |
| **“Connecting to”** and a name | The gateway is found; the app is connecting. | Wait. |
| **“Connection to”** a name **“lost, searching…”** | The link dropped; the app is looking for the same gateway again. | Wait; check the gateway's power. After 3 seconds the window **“Bridge link lost”** opens. [Code 601](codes-6-gateway-link.md#c601) |
| **“Bridge is silent…”** | The link is there, but the gateway sends nothing. | Wait 10 seconds; if it stays, switch the gateway's power off and on. [Code 602](codes-6-gateway-link.md#c602) |
| **“Choose bridge”** | Several gateways are in range, or yours is not found. Tap the capsule to open the list. | Tap your gateway. [First connection](first-connection.md) |
| **“Bluetooth is off”** | Bluetooth is off on the tablet. | Switch it on. [Code 704](codes-7-tablet.md#c704) |
| **“No Bluetooth permission”** | The app may not use Bluetooth. | Allow it in the iPad settings. [Code 705](codes-7-tablet.md#c705) |

## Yellow capsule at the top — the sound

| The capsule says | What it means | What to do |
| --- | --- | --- |
| **“Volume is off”** | The tablet's volume is below 20 %: an alarm would not be heard. | Turn the volume up. [Code 701](codes-7-tablet.md#c701) |
| **“Sound in headphones”** | The sound goes to headphones, a Bluetooth speaker or another device. | Disconnect it. [Code 702](codes-7-tablet.md#c702) |

The same yellow line appears inside the alarm window, so that you know why you did not hear it.

## Yellow capsule over a band — control

| The capsule says | What it means | What to do |
| --- | --- | --- |
| **“NOT UNDER CONTROL”** and the rows of the band, blinking | Seed flows in the band, but fewer of its rows sow within the norm than the set share. The buzzer sounds. | Check the control line or the rate and the yellow and dark-red rows. [Code 207](codes-2-seeding.md#c207) |

> **SEE ALSO**
>
> [The alarm window](alarm-window.md) · [What you need](what-you-need.md)
