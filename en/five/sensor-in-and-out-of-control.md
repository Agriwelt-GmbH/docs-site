---
title: Take a sensor into or out of control
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/sensor-in-and-out-of-control.html
---

# Take a sensor into or out of control

Stop the panel from watching one sensor — a section that is shut off, a broken sensor — and take it back later.

A sensor **out of control** is not watched: the panel raises no alarm about it, whatever it reports. Take a sensor out of control when its section is out of work on purpose or when the sensor is broken and you must finish the field. Take it back as soon as you can.

## Take a sensor out of control

::: steps
1. On the home screen, **touch and hold** the sensor — its column on the diagram, or its icon. Its context menu opens.

   ![The context menu of a seed sensor.](figures/five-ctx-seed)

2. Tap **“Disable control”** to select it, and tap it again.

3. The first time in a session, the panel asks **“Are you sure that you want disable control?”**. Touch **“Yes”**. A touch outside the window cancels.

   ![The question before control is switched off.](figures/five-question-disable-control)

4. The column turns white with **!** (an icon alternates with a white [!]). The sensor is no longer watched.
:::

## Take it back into control

Do the same and choose **“Enable control”**. The first time in a session the panel asks **“Are you sure that you want enable control?”**; confirm with **“Yes”**. A seed sensor taken back into control shows a yellow **?** for a few seconds while it receives its settings.

> **IMPORTANT**
>
> **A switched-off sensor is blind, not quiet.** Nothing about it is reported, however wrong it goes.

## When the statistics must be erased

For some sensors the panel first asks to erase the statistics of the active field: it says **“Need to erase data, for selected field!”** and asks again.

- **“Yes”** erases the statistics of the active field and changes the control. At the Operator level the panel first asks for the PIN of a higher level; a wrong PIN shows **“Invalid PIN”** and nothing changes.
- **“No”** leaves both as they are.

The speed sensor cannot be taken out of control — its context menu has no such item. Motors are taken out of control the same way, from their tile on the [Motors screen](motors-screen.md), or with the chevrons on the [second home screen](second-home-screen.md). What the four combinations of control and product application mean: [The four states of a section](section-states.md#the-four-states-of-a-section).
