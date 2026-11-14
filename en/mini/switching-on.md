---
title: Switching on and off
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/switching-on.html
---

# Switching on and off

What the Hectare Mini shows after power-on, which screen and access level it starts with, and when it is safe to switch off.

After the power is switched on, a splash screen with the logo appears. It stays until the panel has found every device connected to it — a few seconds — and then the panel changes to its first working screen.

![The splash screen with the logo.](figures/splash)

The logo on the splash screen depends on the supplier of the system and may differ from the picture.

> **NOTE**
>
> **If the splash screen stays much longer than usual,** the panel is waiting for a device that does not answer. Look at the alarms as soon as the working screen appears — see [How alarms work](how-alarms-work.md).

## What state the panel starts in

- **Access level: Operator.** After every power-on the panel is at the Operator level, whatever level was set before. Operator is the only level at which alarm windows are shown, so switching off and on is also the quickest way back to safe working. See [Access levels](access-levels.md).
- **The home screen** — with one exception: if the [rate control screen](rate-control-screen.md) was open when the panel was switched off, it opens again. It is the only screen the panel remembers.
- **Work paused, on a bench.** If speed imitation is switched on and the machine has dispenser motors, the panel starts with product application locked — see [Lock application by hand](lock-application-by-hand.md).

The version of the software, the serial number of the panel and its hardware identifier can be read at any time: press **“MENU”** on the home screen and choose the last item of the main menu. **“BACK”** or **“Close”** leaves the window.

## Switching off

| **What** | **When it is written** |
| --- | --- |
| Settings, target rates, alarm levels | By themselves, about one and a half seconds after the last change and the last touch of a button. |
| [Statistics](statistics-screen.md) of the active field | Every five minutes, and a few seconds after the machine stops. |
| Readings of the [Seeding table](table-screen.md) | Never — they belong to the working session and start from zero after every power-on. |

> **IMPORTANT**
>
> **Stop before you switch off, and wait a few seconds.** Otherwise the last stretch of work is missing from the statistics, and a value changed just before may not be stored.
