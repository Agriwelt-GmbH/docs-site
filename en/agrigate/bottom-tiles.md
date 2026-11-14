---
title: The tiles at the bottom
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/bottom-tiles.html
---

# The tiles at the bottom

The strip of tiles under the rows and the field picture — what each tile shows, what a tap opens, how to choose what a place shows, and the alarm place at the right.

Under **“Rows”** and under **“Field”** stands a strip of tiles. Each tile shows one value: a word on top, the value in large figures, the unit, and an icon in a ring. The ring's colour is the state: green — normal, red — alarm (the ring blinks), yellow — attention, grey — no data or not answering.

The strip is there when the machine has something to show in it: a seed group in Hybrid or Precision, or devices on the HUB-8. A Flow machine without devices has no strip.

## What the tiles can show

| Tile | What it shows | A tap opens |
| --- | --- | --- |
| **“Speed”** | The ground speed in km/h from the iPad's GNSS | The speed sheet: the speed and where it comes from |
| **“Area”** | Hectares of the active field | **“Statistics”** |
| **“Population”** | Thousand seeds per hectare (Precision) | The rate sheet |
| **“Rate”** | The set rate in seeds per metre | The rate sheet |
| **“Operating time”** | Hours and minutes of work on the active field | **“Statistics”** |
| **“Field”** | The number of the active field | **“Statistics”** |
| **“Bout”** | The tramline bout, for example “2 / 4” | The bout menu. [Tramline](tramline.md) |
| A device — **“Hopper”**, **“Fan”**, **“Metering unit”**, **“Position”**, **“Flowmeter”** … | Its state in a word (**“Full”** / **“Empty”**, **“Running”** / **“Stopped”**, **“Work”** / **“Transport”**) or its value (rpm, l/min) | The page of that device. [HUB-8 inputs](hub8-inputs.md) |

## Choose what a place shows

The strip has as many places as fit across the screen: 3 on an iPhone held upright, up to 8 on an iPad held sideways.

::: steps
1. Press and hold a tile for half a second. The list **“Choose value”** opens under it: every value the machine can show, with its icon and current value; the one in this place is marked.

2. Tap the value you want. If it is already in another place, the two swap.
:::

The choice is kept for the machine profile. **“Default slots”** in **“Settings”** › **“Machine”** puts speed, area, population and the first devices back.

## The alarm place

The place at the right is also the alarm place. When a device that is in no place of the strip goes into alarm, its tile stands there with a blinking ring until the alarm is over; a tap opens its page. While it is there, holding it opens no choice — the alarm is not hidden by a choice.

## The rate sheet

The rate sheet shows the rate in seeds per metre in large figures and the population in thousand seeds per hectare under it. Change it with **−** / **+** (hold for steps of ten), or tap a number and type it. Nothing reaches the gateway until you press **“Accept”**; swiping the sheet down leaves the rate as it was.

> **SEE ALSO**
>
> [The rows screen](rows-screen.md) · [Field](field-screen.md)
