---
title: Take a sensor into or out of control
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/sensor-in-and-out-of-control.html
---

# Take a sensor into or out of control

Stop the panel from watching one sensor — a section that is shut off, a broken sensor — and take it back later.

A sensor **out of control** is not watched: the panel raises no alarm about it, whatever it reports. Take a sensor out of control when its section is out of work on purpose or when the sensor is broken and you must finish the field. Take it back as soon as you can.

## Take a sensor out of control

::: steps
1. On the home screen, **touch and hold** the sensor — its column on the diagram, or its icon. Its context menu opens.

   ![The context menu of a seed sensor.](figures/one-ctx-seed-sensor)

2. Select **“Disable control”** with **“UP”** / **“DOWN”** and press **“MENU”**, or touch the item.

3. The panel asks **“Are you sure that you want disable control?”**. Touch **“Yes”**, or press **“PLUS”**.

   ![The confirmation before control is switched off.](figures/one-question-disable-control)

4. The column turns white with **!** (an icon alternates with a white [!]). The sensor is no longer watched.
:::

## Take it back into control

Do the same and choose **“Enable control”**. The panel asks **“Are you sure that you want enable control?”**; confirm with **“Yes”**. A seed sensor taken back into control shows a yellow **?** for a few seconds while it receives its settings.

> **IMPORTANT**
>
> **A switched-off sensor is blind, not quiet.** Nothing about it is reported, however wrong it goes.

## When the statistics must be erased

For some sensors the panel first asks to erase the statistics of the active field: it says **“Data for the selected field must be erased!”** and asks again. **“Yes”** erases the statistics of the active field — at the Operator level only after the Agronomist PIN — and changes the control; **“No”** leaves both as they are.

The speed sensor cannot be taken out of control. Motors are taken out of control the same way, from their tile on the [Motors screen](motors-screen.md) or with the chevrons on the [second home screen](second-home-screen.md). What the four combinations of control and product application mean: [The four states of a section](section-states.md#the-four-states-of-a-section).
