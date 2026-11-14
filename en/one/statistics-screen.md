---
title: The Statistics screen
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/statistics-screen.html
---

# The Statistics screen

The report of the work on each field, block by block and line by line — and the menu that chooses the field, saves the report and erases it.

The Statistics screen is the report of the work: how far you drove, how much you covered, how much you sowed, and how evenly. It is kept **separately for each field** and survives switching off. Open it with **“HOME”** from the Table screen (twice from the home screen); leave it with **“BACK”**.

The report is one long list. Scroll it with **“UP”** and **“DOWN”**, or swipe up and down.

## The head and the work on the field

::: {.anatomy fig="one-stat-precise-head"}
1. **Field number.** The field whose report you see. **“MINUS”** and **“PLUS”** — or a two-finger swipe — show another field.
2. **(A).** This is the active field — the one the panel writes to now.
3. **Date and time.** Today's date and the time of day.
4. **Path.** Distance driven, in km.
5. **Area.** Area covered, in ha.
6. **Operating time.** Hours, minutes and seconds of work.
7. **Movement speed.** The average travel speed.
8. **Started / Ended.** When the work on this field began and ended.
9. **Seeding.** The next block — see below.

The head of the report of an eight-row planter in the “Precise” mode, empty.
:::

## The seeding block

::: {.anatomy fig="one-stat-precise-seeding"}
1. **Seeds sown (x1000).** The total, in thousands of seeds.
2. **Quality.** The share of seeds placed singly, as intended. Judge the work by this number.
3. **Doubles.** Two seeds where one was intended.
4. **Skips.** A gap where a seed was intended.
5. **Not sown.** The share of the run when nothing came out at all.
6. **Actual / Target.** What was applied against what was set.
7. **Population, ths/ha.** In thousands per hectare; the deviation in brackets.
8. **Rate, s/m.** In seeds per metre; the target on the right.
9. **Sown / Not sown / Unknown.** The field split three ways, in hectares.
10. **Bar.** The same split as a coloured bar: green sown, red not sown, grey unknown.
11. **Seed sensors.** The next block — section by section.
:::

**Unknown** is the area driven while the panel could not judge — not a fault, but not proof of work either.

> **NOTE**
>
> **A large deviation is not always a fault of the machine.** Before changing anything on the drill, check that the speed the panel sees matches the real one — a wrong speed moves every rate figure with it.

## Section by section

::: {.anatomy fig="one-stat-precise-sensors"}
1. **Seed sensors.** One block per section follows.
2. **Seed sensor 1.** The section number, and the seeds it counted.
3. **q d s n.** Quality, doubles, skips and not sown for this section.
4. **Sown / not sown / unknown.** The share of each for this section (**s**, **n**, **?**) and the bar.
5. **Population.** Thousands per hectare for this section, with its deviation.
6. **Spacing.** Seeds per metre for this section, with its deviation.
:::

This is where an uneven drill shows itself. A section with a lower quality than the rest, or a longer red part of its bar, points at that row: a blocked outlet, a worn disk, a sensor that needs cleaning.

## Blocks that appear on other machines

| **Block** | **What it holds** |
| --- | --- |
| **Work without alarms control** | The part of the work the panel was **not** watching — driven with the control switched off or locked. |
| **Speed control** | How far and how long you drove outside the permitted speed range. |
| **Fertilizing**, **Liquid fertilizer** | Fertilized / not fertilized / unknown, if the machine applies them. |
| **Product** | For a product applied by weight: the quantity applied, and the actual against the target rate in kg/ha. |

![The report of a drill with a product applied by weight.](figures/one-stat-1-field)

## The menu of the screen

Press **“MENU”**, or tap with two fingers.

![The menu of the Statistics screen.](figures/one-stat-menu)

| **Item** | **What it does** |
| --- | --- |
| **“Select field”** | Makes the field shown the active one — the panel writes to it from now on. Shown only while you look at a field that is not active. A field whose statistics are not empty cannot be selected until its data is erased; the panel says so and asks. |
| **“Statistics”** | Switches the report between **short** and **full**. The short report keeps the totals and drops the per-section detail. |
| **“Mileage”** | Path in km and area in ha over the whole life of the system. These totals cannot be reset. Without a speed sensor, the accumulated running time instead. |
| **“Save to SD-card”** | Writes one field, or all of them, to the memory card. Shown while a card is in the slot. |
| **“Zero statistics”** | Erases the statistics. |

> **IMPORTANT**
>
> **The statistics are also erased by something else.** Changing the seeding control mode between “Precise” and the others asks for confirmation and, if you confirm, **erases the statistics of every field**. Save what you need to the memory card first.
