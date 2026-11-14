---
title: The section diagram — columns, line and colours
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/section-diagram.html
---

# The section diagram — columns, line and colours

How to read the columns of the home screen in the "Precise" and the "Flow" mode, and what the control line means.

Each column of the diagram is one section — one seed or fertilizer sensor. Its height is the flow through that section. How the rest is drawn depends on the seeding control mode: **“Precise”** (seeds per metre, with skips and doubles) or **“Flow”** (seeds per second against an alarm level).

## “Precise” mode

::: {.anatomy fig="one-diagram-precise"}
1. **Target rate.** Grey, in seeds per metre (**s/m**). This is the figure **“PLUS”** and **“MINUS”** change.
2. **Measured rate.** White — the average of the rows now.
3. **Tolerance.** The permitted deviation from the target, in per cent.
4. **Rate line.** The target, drawn across all rows.
5. **Upper tick.** The upper limit of the tolerance, in each column.
6. **Lower tick.** The lower limit of the tolerance.
7. **Column.** Green — the row sows within the tolerance.
8. **Skips bar.** Yellow hatching on the left edge of a column. The taller it is, the more skips in that row.
9. **Doubles bar.** Blue hatching on the right edge of a column. The taller it is, the more doubles.
10. **Section number.**

An eight-row planter seeding at about 5 seeds per metre against a target of 4.3. Rows 3, 6 and 7 skip; rows 5 and 7 double.
:::

## “Flow” mode

::: {.anatomy fig="one-home-flow-at-work"}
1. **Alarm level.** Grey, in seeds per second (**s/s**). The level under which a section counts as losing flow. **“PLUS”** and **“MINUS”** change it.
2. **Measured rate.** White — the average of the rows now.
3. **Control line.** The alarm level, drawn across all rows.
4. **Column above the line.** Green — the row works.
5. **Empty part of a column.** Dark grey above the green: the higher the green reaches, the more flow.
6. **Section numbers.** Fertilizer sections continue after the seed sections.
7. **Fertilizer diagram.** The same, for the fertilizer sensors.
8. **Fertilizer rate field.** Measured on top, alarm level below, in fertilizer per second (**f/s**).

A drill with 24 seed and 12 fertilizer rows, seeding at 12 km/h. Every column stands above its line.
:::

## The line: rows under it are not under control

The line is the boundary of a partial blockage, not a decoration. A column above the line is a row that works; a column that sinks under it is a row that is losing flow — long before it blocks completely.

::: {.anatomy fig="one-home-flow-not-under-control"}
1. **“NOT UNDER CONTROL”.** The rows of this diagram are not watched.
2. **Columns under the line.** Every row delivers less than the level.
3. **Control line.** Dragged above the real flow.
4. **Alarm level.** 18 seeds per second — more than the machine sows.
5. **Measured rate.** 15 seeds per second.

The same drill with a level set too high. Both diagrams have dropped out of control.
:::

Rows under the line are not under control on purpose: the panel refuses to guard a level that was set above what the machine really delivers. Lower the level until the columns stand above the line, or let the panel set it: [Set the alarm level automatically](set-the-alarm-level.md).

Whether the machine is seeding at all, the panel decides by the **share of rows that are seeding** — a sensor setting, 20 % by default. On the headland the rows drop out of control; on the next pass they come back, with or without a work position sensor. The panel says so with sound: **three short beeps** when the seeding stops, **one short beep** when it starts again.

> **IMPORTANT**
>
> **Read the columns against the line, not against each other.** Above the line the section works. Down at the line it does not — whatever the neighbours do.

What every colour and symbol of a column means, and the four states of a section: [Column colours and section states](section-states.md).
