---
title: First connection to the gateway
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/first-connection.html
---

# First connection to the gateway

How the Hectare app finds the gateway the first time, how to pick yours when several are in range, and how to change or forget it later.

The app finds the gateway by itself. You only pick it when more than one gateway is in range.

::: steps
1. Power the gateway and keep the tablet in the cab, close to it.

2. Open the Hectare app. The first time, iPadOS asks whether the app may use Bluetooth. Allow it — without Bluetooth the app cannot reach the gateway.

3. The app looks for the gateway. A red capsule in the middle of the screen says **“Looking for the bridge…”**, and the row pages say **“The bridge sends the row count once connected.”**

4. **One gateway in range:** after a few seconds the app connects to it by itself and remembers it. The capsule shows **“Connecting to”** and the name of the gateway, then disappears.

   **Several gateways in range:** the list **“Choose bridge”** opens. Every gateway is a line with its name, its signal bars and its signal strength; the strongest — usually the nearest — is at the top. Tap the gateway of your seeder.

5. The rows of the machine appear on the rows screen. If they do not match your seeder, set the machine profile: [Set up the machine profile](machine-profile.md).
:::

From now on the app connects only to this gateway — it is **“My bridge”** in **“Settings”** › **“Machine”** › **“Bridge”**. If the remembered gateway is not found for a few seconds while others are in range, the list **“Choose bridge”** opens again.

## The bridge section in Settings

**“Settings”** › **“Machine”**, section **“Bridge”**:

| Line | What it is |
| --- | --- |
| The first line | The link: a green dot and the name of the gateway when connected, or what the app is doing, with the signal strength. |
| **“My bridge”** | The remembered gateway, or **“not chosen”**. Tap it to open the list **“Choose bridge”** and pick another one. |
| **“Reconnect”** | Drops the link and connects again to the same gateway. |
| **“Forget bridge”** | The app forgets the gateway, disconnects and offers the list again. It asks first: **“The app will disconnect and let you choose the bridge again.”** — **“Forget”** or **“No”**. |
| **“Bridge firmware”**, **“Hardware revision”** | What the gateway reports about itself. Give them to the service when asked. |
| **“Bridge update”** | See [Update the gateway](bridge-update.md). |
| **“Frames received”**, **“Snapshots”**, **“Dropped frames”** | Counters of the link, for the service. |

> **NOTE**
>
> **A gateway talks to one tablet at a time.** A second tablet near the machine can take the link away from the first. Keep one tablet per machine.

> **SEE ALSO**
>
> [Messages over the screen](screen-messages.md) · [code 601](codes-6-gateway-link.md#c601) · [code 704](codes-7-tablet.md#c704)
