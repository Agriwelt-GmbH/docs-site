---
title: Statistics
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/statistics-screen.html
---

# Statistics

The statistics of five fields — distance, area, time, sown and not-sown area, quality, population — and how to select a field or reset its statistics.

**“Statistics”** keeps the record of the work in five fields. One of them is active: everything the machine sows is counted into it.

::: {.anatomy fig="app-statistics"}
1. **The field on screen.** **(A)** marks the active field.
2. **◄ ►** and **1/5** — look at the other four fields.
3. **The menu …** — **“Select field”** and **“Reset statistics”**. [Below](#select-a-field-or-reset-it)
4. **“Field work”** — **“Distance”**, **“Area”**, **“Operating time”** and the average **“Ground speed”**.
5. When the work in this field **“Started”** and **“Ended”**.
6. **“Control”** — **“Without alarm control”** and **“Out of speed range”**. In this version both show a dash.
7. **The quality bar** of **“Seeding”**: **“Quality”**, **“Doubles”**, **“Skips”** and **“Not sown”** as shares of one bar (Precision).
8. **“Seeds sown”** (in thousands), **“Population”** and **“Rate”**: the actual value large, the set value under it, and the actual as a percentage of the set value — red past the tolerance.
9. **“Sown”**, **“Not sown”**, **“Unknown”** — in hectares when there is a speed; as shares of the time without one.
10. **The rows one by one** — the same figures for every sensor (**“Seed sensors”**, then the fertilizer sensors).

The statistics of a field on the test bench, after many hours of simulated work.
:::

What the **“Seeding”** block shows depends on the control mode of the group. In Precision you get the quality bar, the seeds sown, population and rate. In Flow and Hybrid you get the three amounts **“Sown”**, **“Not sown”** and **“Unknown”**. With two groups in Precision a page switch in the block's title shows the other group.

## Select a field or reset it

::: steps
1. Use **◄ ►** to bring the field you want onto the screen.

2. Tap **…** at the right of the title.

3. Choose:
   - **“Select field”** — this field becomes the active one. If it already holds statistics, the app first tells you **“Data must be erased to select this field!”**: **“Yes”** makes it active with its counters from zero.
   - **“Reset statistics”** — the app asks **“Are you sure?”**; **“Yes”** starts the statistics of this field from zero.
:::

**“Select field”** is offered only when the field on screen is not the active one.

> **IMPORTANT**
>
> **A reset cannot be undone.** The statistics of the field are gone. Changing the working width with statistics in the active field resets them too — the app asks first. See [Set up the machine profile](machine-profile.md).

> **SEE ALSO**
>
> [Table](table-screen.md) · [The tiles at the bottom](bottom-tiles.md)
