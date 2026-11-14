---
title: Menus, context menus, number pad and windows
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/interface-basics.html
---

# Menus, context menus, number pad and windows

The five things everything on the panel is done through — working screens, the main menu, the context menu of a device, the number pad, and the windows that ask or tell.

Everything on the panel happens through five things: the **working screens**, the **main menu**, the **context menu** of a device, the **number pad** and the **windows** that ask or tell you something. The working screens have their own topic: [Working screens](working-screens.md).

## The main menu

Press **“MENU”** on the home screen, or tap the screen with two fingers. The main menu opens over the home screen.

::: {.anatomy fig="menu-main"}
1. **Selected item.** Black text on a light blue band. **“UP”** and **“DOWN”** move the band; **“MENU”** enters the item. Here **“Fill the disks with seeds”** — see [Fill the disks](fill-the-disks.md).
2. **“Settings”.** The settings of the system and of the machine. See [The Settings menu](settings-menu.md).
3. **Arrow head.** The item opens another menu.
4. **“Service”.** Commissioning and service items. See [Service menu](service-menu.md).
5. **“Information”.** Opens the screen with the information about the system.

The main menu of a planter with dispenser motors in the “Precise” mode, standing still.
:::

In any menu, an item is read by what stands on its right:

| **What you see on the right** | **What it means** |
| --- | --- |
| An arrow head | The item opens another menu. Press **“MENU”**. |
| A value between **-** and **+** | Change it with **“PLUS”** and **“MINUS”**, right there in the list. |
| A value between **-[** and **]+** | **“PLUS”** or **“MINUS”** opens the number pad. |
| Nothing | The item performs an action. Press **“MENU”**. |

![A menu page with values: the year is edited on the number pad, the other values in the list.](figures/menu-datetime)

**“BACK”** leaves a menu and returns one level up.

## The context menu of a device

Every sensor, motor and indicator on the home screen has its own menu. **Touch and hold the device** — its icon or its column on the diagram — and its context menu opens. On the Motors screen and on the second home screen the same works for a motor tile.

![The context menu of a seed sensor: information, control on or off, and the parameters of the sensor.](figures/one-ctx-seed-sensor)

The first item, **“Information”**, opens the [status screen](sensor-status-screen.md) of the device. The second switches its control: **“Disable control”** or **“Enable control”** — see [Take a sensor into or out of control](sensor-in-and-out-of-control.md). Below them stand the parameters; which ones you see depends on the access level ([Access levels](access-levels.md)).

## Entering numbers

When a value is written between square brackets, changing it opens the number pad.

::: {.anatomy fig="menu-keypad"}
1. **Name of the parameter.** Here **“Width, cm”**.
2. **Value.** What you have typed so far.
3. **Backspace.** Deletes the last digit. Touch and hold it to clear the whole value.
4. **Digits.** **1** to **9** and **0**.
5. **Decimal point and minus.** A touch adds the point; touch and hold switches the minus sign, where a negative value is allowed.
6. **Zero.**
7. **“OK”.** Accepts the value. **“MENU”** does the same.

The number pad. **“BACK”**, or a touch outside the pad, leaves without changing anything.
:::

A value outside the permitted range is not taken as typed: the panel sets the nearest limit instead.

## Windows that ask, and windows that tell

Every window has the same shape: one box in the middle of the screen, a **coloured strip** along its top with a word in it, the message under the strip, and the buttons — if any — along the bottom. **Read the strip first:**

| **Strip** | **What kind of window** | **How it closes** |
| --- | --- | --- |
| **Yellow, “Confirmation”** | The panel asks. Nothing happens until you answer. | Touch **“Yes”** (green) or **“No”** (red). **“PLUS”** answers yes, **“MINUS”** no, **“BACK”** cancels. |
| **Blue, “Information”** | The panel tells you what happened. | Some close by themselves; others close with a touch, **“PLUS”** or **“BACK”**. |
| **Red, “FAILURE!”** | An alarm. | See below. |

![A confirmation window: the yellow strip, the question, Yes and No.](figures/question-zero-readings)

The information window below closes by itself.

![An information window: the blue strip, the word Information, the message Done.](figures/info-done)

## Alarm windows

An alarm window says **what happened**, **on what kind of device**, and **which devices** — their numbers are listed when several identical sensors report the same fault at once. While it is open, the panel beeps.

| **What you do** | **What happens** |
| --- | --- |
| Touch **“Close”** in the window, or press **“HOME”** | This alarm closes. The next one in the queue appears. |
| Hold **“HOME”** | The window closes and the panel returns to the home screen. |

The other six buttons are dark and do nothing while an alarm window is open.

> **IMPORTANT**
>
> **Closing the window stops the sound, not the fault.** Alarms arrive one at a time and are closed one at a time. What each alarm means is in [How alarms work](how-alarms-work.md).
