---
title: The alarm window
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/alarm-window.html
---

# The alarm window

When the app opens the alarm window, what the window shows, how rows join it, how to close it, and how the buzzer and the alarm delay work.

An alarm is a window that opens over whatever page is on screen, with the buzzer. It tells you that a row, a device of the machine or the link to the gateway has a fault.

::: {.anatomy fig="app-alarm-window"}
1. **“ALARM!”** — the title strip of every alarm window; it blinks. Red for an alarm, orange for a device that reports itself faulty (**“Clogged”**, **“Light struck”**, **“Faulty”**, **“Wrong device type!”** …).
2. **The alarm** — here **“Hopper empty”**. Look it up by these words in the service codes.
3. **The sound line** — here **“Volume is off”**: the buzzer runs, but the tablet's volume is down. Turn it up.
4. **“Close”** — closes the window and stops the buzzer. The whole button takes the touch.
5. **The tile of the device in alarm**, with its ring blinking red.

An alarm of a HUB-8 device: the hopper is empty.
:::

For a row the window also names the sensor and the rows:

![The alarm window of four seed rows below the allowed rate.](figures/app-alarm-window-rows)

**“Seed sensor:”** or **“Fertilizer sensor:”** tells you which group, and the row numbers follow — **#4,12–14** means rows 4, 12, 13 and 14. For a tramline actuator the window says **“Tramline actuator”** and its number.

## How the window behaves

- **The fault must hold for the alarm delay** before the window opens — 3 seconds unless set otherwise in **“Settings”** › **“Control and Alarms”** › **“Alarm delay”** (2 to 20 seconds). A device that is not a seed sensor (**“Wrong device type!”**) is reported at once.
- **The same alarm in another row joins the open window**: its number is added. A different alarm waits until you close this one, then opens.
- **A closed alarm does not come back** while its fault lasts. It shows again only after the fault has gone and returned.
- **The link to the gateway comes first.** When the link has been down for 3 seconds, the window **“Bridge link lost”** replaces any other window: every figure on the screen is old. It closes by itself when the gateway answers again.
- **Closing the window does not repair the fault.** Active alarms stay in the list behind the bell — see [Moving around the app](app-navigation.md#the-list-of-alarms).

## The buzzer

The buzzer sounds while an alarm window is open: a short tone every two seconds, through the tablet's speaker. **“Close”** stops it. While a band is **“NOT UNDER CONTROL”** it sounds without a window.

In **“Settings”** › **“Control and Alarms”** › **“Alarm buzzer”**: **“Volume”** (**“Quiet”**, **“Medium”**, **“Loud”**), **“Test sound”**, and **“Quiet for 10 min”**. The silence mutes only the buzzer: the window still opens.

> **WARNING**
>
> **The tablet's own volume overrides the buzzer.** At zero volume the window opens in silence. Keep the volume up and watch for **“Volume is off”**.

> **SEE ALSO**
>
> [How service codes work](codes.md) · [Bar colours](bar-colours.md) · [Messages over the screen](screen-messages.md)
