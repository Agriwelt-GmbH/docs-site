---
title: The section diagram — columns, line and colours
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/section-diagram.html
---

# The section diagram — columns, line and colours

How to read the columns of the home screen in the "Precise" and the "Flow" mode, and what the control line means.

Each column of the diagram is one section — one seed or fertilizer sensor. Its height is the flow through that section. How the rest is drawn depends on the seeding control mode: **“Precise”** (seeds per metre, with skips and doubles) or **“Flow”** (seeds per second against an alarm level). The rate field stands at the right end of each diagram: the measured figure on top, the target or alarm level below it, the unit under them.

## “Precise” mode

::: {.anatomy fig="five-diagram-precise"}
1. **Target rate.** Grey, in seeds per metre (**s/m**). This is the figure you change by touch.
2. **Measured rate.** White — the average of the rows now.
3. **Scale of the bars.** The share of skips or doubles at which a bar reaches the top — **“Scale S&D,%”** in the settings.
4. **Rate line.** The target, drawn across all rows.
5. **Upper tick.** The upper limit of the tolerance, in each column.
6. **Lower tick.** The lower limit of the tolerance.
7. **Column.** Green — the row sows within the tolerance.
8. **Skips bar.** Yellow hatching on the left edge of a column. The taller it is, the more skips in that row.
9. **Doubles bar.** Blue hatching on the right edge of a column. The taller it is, the more doubles.
10. **Section number.**

An eight-row planter seeding; some rows skip, some double.
:::

## “Flow” mode

::: {.anatomy fig="five-home-flow-at-work"}
1. **Alarm level.** Grey, in seeds per second (**s/s**). The level under which a section counts as losing flow.
2. **Measured rate.** White — the average of the rows now.
3. **Control line.** The alarm level, drawn across all rows.
4. **Column above the line.** Green — the row works.
5. **Empty part of a column.** Dark grey above the green: the higher the green reaches, the more flow.
6. **Section numbers.** Fertilizer sections continue after the seed sections.
7. **Fertilizer diagram.** The same, for the fertilizer sensors.
8. **Fertilizer rate field.** Measured on top, alarm level below, in fertilizer per second (**f/s**).

A drill with seed and fertilizer rows, seeding. Every column stands above its line.
:::

To change the target or the alarm level, **touch and hold the diagram** until its target figure lights up, then swipe up or down — one step per swipe. A tap outside the diagrams ends it. See [Change the target rate](set-the-target-rate.md).

## The line: rows under it are not under control

The line is the boundary of a partial blockage, not a decoration. A column above the line is a row that works; a column that sinks under it is a row that is losing flow — long before it blocks completely.

::: {.anatomy fig="five-home-not-under-control"}
1. **“NOT UNDER CONTROL”.** The rows of this diagram are not watched.
2. **Columns under the line.** Every row delivers less than the level.
3. **Control line.** Dragged above the real flow.
4. **Alarm level.** Higher than the machine sows.
5. **Measured rate.** Lower than the alarm level.

A drill with the alarm level set too high. The diagrams have dropped out of control.
:::

**“NOT UNDER CONTROL”** opens no alarm window; at the Operator level the panel sounds the alarm instead. Rows under the line are not under control on purpose: the panel refuses to guard a level that was set above what the machine really delivers. Lower the level until the columns stand above the line, or let the panel set it with a double tap: [Set the alarm level automatically](set-the-alarm-level.md).

Whether the machine is seeding at all, the panel decides by the **share of rows that are seeding** — the sensor setting **“Percent of sowing,%”**, 20 % by default. On the headland the rows drop out of control; on the next pass they come back, with or without a work position sensor. The panel says so with sound: **three short beeps** when the seeding stops, **one short beep** when it starts again.

> **IMPORTANT**
>
> **Read the columns against the line, not against each other.** Above the line the section works. Down at the line it does not — whatever the neighbours do.

What every colour and symbol of a column means, and the four states of a section: [Column colours and section states](section-states.md).
