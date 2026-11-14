---
title: Update the gateway
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/bridge-update.html
---

# Update the gateway

Update the firmware of the gateway from the app over Bluetooth — when it is offered, the conditions, the three stages and what each result means.

The Hectare app carries the firmware for the gateway. When the app holds a newer version than the gateway runs, it offers the update. The update goes over Bluetooth and takes about 3 minutes. The gateway writes the new firmware into a spare part of its memory; the working firmware stays untouched and keeps working until the new one has proved itself. Your machine settings (the row profile) are not erased by the update.

Open **“Settings”** › **“Machine”** › **“Bridge”** › **“Bridge update”**. The row **“Bridge update”** shows at its right the version the app can install; empty means there is nothing to install. The page shows **“Version in the bridge”** and **“Version in the app”**.

| The page says | Meaning |
| --- | --- |
| **“Update the bridge to”** and a version | An update is offered. |
| **“The bridge has the newest version”** | Nothing to do. |
| **“The bridge is not connected”** | Connect first: [First connection to the gateway](first-connection.md). |
| **“The bridge cannot be updated over Bluetooth”** | This gateway cannot take an update from the app. Ask Agriwelt. |

The app offers only firmware made for this gateway board, and only a version newer than the one the gateway runs. Anything else is not offered at all.

## Run the update

::: steps
1. Stop the machine. Keep the gateway powered and your device — tablet or phone — close to it.

2. Tap **“Update the bridge to”**. The conditions appear under **“Before the update”**: **“The bridge is powered, the device is near it.”** · **“The machine stands: do not seed during the update.”** · **“Takes about 3 minutes.”** · **“Do not leave the app or lock the screen.”**

3. Tap **“Start the update”** (or **“Cancel”**). Three stages follow: **“Firmware transfer”** with a percentage, **“Bridge restart”**, **“Checking the new firmware”**. Do not leave the app and do not walk away with the device. The screen does not dim and the back button is hidden until the result appears.

4. The result appears with its code, for example **“804 · Bridge updated”**. Tap **“Done”**.
:::

The whole update takes 2 to 2.5 minutes: the transfer 1 to 1.5 minutes (57 seconds on an iPhone XS, 95 seconds on an iPad), the restart 12 to 25 seconds, the check about 25 seconds.

## After the restart {#after-the-restart}

About 20 seconds after the new firmware starts, the gateway checks itself — its radio, the sensor line, its settings and its device description — and keeps the new firmware only if everything is in order. If the check fails, the app restarts the gateway once more after 50 seconds and it returns to the previous firmware (code 805); this takes about 2.5 minutes. If no device with the app is near at that moment, the gateway keeps working on the unconfirmed firmware until it is switched off and on, and then returns to the previous one by itself.

During the update the rows are not watched: the app raises no **“Bridge link lost”** and the buzzer is silent.

## The results

| Result | What to do |
| --- | --- |
| **804 · “Bridge updated”** | Nothing. The gateway runs the new firmware and works as before. |
| **805 · “The bridge went back to its previous firmware”** | The new firmware failed its check; the gateway runs the previous one and works. Tell the service the code. |
| **806 · “The bridge refused the firmware: the signature does not match”** | Update the app and try again. If it repeats, tell the service the code. |
| **807 · “The bridge refused the firmware: it is not newer”** | Nothing. The gateway keeps its own firmware. |
| **808 · “Firmware transfer interrupted”** | Keep the device near the gateway and try again; the transfer starts over. |
| **809 · “The bridge is busy: no update now”** or **“The machine is seeding: the update did not start”** | Finish seeding, clear the active alarm, wait a minute and try again. |
| **810 · “The bridge did not come back after the restart”** | Check the gateway's power, wait a minute. Not back — switch its power off and on and open this page again. |

Every result: [8xx · Gateway update](codes-8-gateway-update.md).

> **WARNING**
>
> **Do not switch the gateway off during the update.** If the transfer breaks off, the gateway stays on its previous firmware; start again.
