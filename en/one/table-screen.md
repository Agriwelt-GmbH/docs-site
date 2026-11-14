---
title: The Table screen
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/table-screen.html
---

# The Table screen

The readings of every section in figures — which tables your machine has, what each column means, and how to read the colours.

The Table screen shows the readings of every section as figures, one line per section. It answers the question the diagram cannot: *which section exactly, and by how much.* Open it from the home screen with **“HOME”**; leave it with **“BACK”**.

## A planter in the “Precise” mode

::: {.anatomy fig="one-table-precise-at-work"}
1. **#.** The number of the section.
2. **sds/m.** Seeds per metre, measured now.
3. **Q.%.** Quality — the share of seeds placed singly, as intended.
4. **Db%.** Doubles — two seeds where one was intended.
5. **Sk%.** Skips — a gap where a seed was intended.
6. **ks/Ha.** The applied rate in thousands of seeds per hectare (in the second table: seeds per metre).
7. **%.** The deviation of this section from the rate that was set.
8. **Table number.** This table and how many there are, between **(−)** and **(+)** — **“MINUS”** and **“PLUS”** switch tables.
9. **Section number on yellow.** Something in this line has drifted towards its limit.
10. **Value on yellow.** The figure that drifted — here the skips of section 7.
11. **Totals.** The same columns for the whole machine.

The first of three tables of an eight-row planter, while seeding.
:::

A value on **yellow** is drifting towards its limit; on **red** it is beyond it. A whole line in **grey** with **!** is a section taken out of control; a line in **red** with **×** is a sensor that does not answer, with **?** a device of the wrong kind.

> **NOTE**
>
> **Read the deviation column first.** A section 20 % below the others has a problem the average will not show — a partly blocked outlet, a worn disk, a sensor that needs cleaning.

## A drill in the “Flow” mode

::: {.anatomy fig="table-1"}
1. **#.** The number of the section.
2. **sds/s.** Seeds per second. Dashes while nothing is counted.
3. **Deviation scale.** From −50 % through 0 to +50 %.
4. **Deviation bar.** How far this section stands from the rate that was set.
5. **%.** The same deviation as a figure.
6. **Table number.** Table 1 of 2 — the second holds the fertilizer sections.
7. **Lowest deviation.** The section furthest below the rate.
8. **Highest deviation.** The section furthest above the rate.
9. **Recalculation interval.** The stretch over which the figures are gathered — **“Recalculation,m”** of the sensors.

The seed table of a drill with 24 seed and 12 fertilizer rows, standing still.
:::

## Which tables your machine has

| **Table** | **Shown when** |
| --- | --- |
| **Seed counters** — seeds per second or per metre, with the deviation bars | Always. |
| **Rate per area** (thousands per hectare) and **rate per distance** (seeds per metre) | Only in the **“Precise”** seeding control mode. |
| **Dry fertilizer** | The machine has fertilizer sensors and the fertilizer control mode is not “Precise”. |
| **Liquid fertilizer** | The machine has liquid fertilizer sensors. |

In the “Precise” mode the planter above has three tables: rate per area (1/3), rate per distance (2/3), and the seed counters (3/3) — the count of seeds each section has sown, beside the deviation bars, with the total for the machine in thousands at the bottom.

![The seed counter table of the eight-row planter: seeds per section, deviation bars, total.](figures/one-table-counters)

## Working with the screen

| **What you want** | **Button** | **Or gesture** |
| --- | --- | --- |
| Next or previous table | **“PLUS”** / **“MINUS”** | Long swipe left or right with two fingers |
| Scroll the lines | **“UP”** / **“DOWN”** | Swipe up or down |
| Zero the readings | **“MENU”** | Tap with two fingers |
| Go to Statistics | **“HOME”** | Swipe left |
| Back to the home screen | **“BACK”** | Swipe right |

Zeroing: [Zero the readings](zero-the-readings.md).

## The table while seeding

The lines change with every count; a line that drifts turns yellow.

![The table of the 24-row drill while seeding, seeds and fertilizer.](figures/one-table-live-24-12)

On large machines the rows do not fit on one page: **“UP”** and **“DOWN”** scroll them.

![The table of the 96-row machine while seeding.](figures/one-table-live-48-48)
