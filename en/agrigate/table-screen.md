---
title: The table
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/table-screen.html
---

# The table

Every row in numbers — rate, quality, doubles, skips, population and deviation — on pages, with the summary line and the counters reset.

**“Table”** shows every row as a line of numbers. Use it when a bar tells you that something is wrong and you want the figures.

::: {.anatomy fig="app-table"}
1. **The page** — here **“Seed · k/ha”**. Tap the title to go to the next page.
2. **◄ ►** and the page number — go to the previous or the next page.
3. **“Reset”** — starts the counters of the table from zero. It asks first: **“Reset readings?”** — **“Yes”** or **“No”**.
4. **Column heads.** On this page: row number, **“s/m”** seeds per metre, **“Q.%”** quality, **“Db%”** doubles, **“Sk%”** skips, **“k/ha”** thousand seeds per hectare and **%** the deviation from the rate.
5. **A yellow cell** — the value is past half of its alarm level. Here row 3 has 14 % skips.
6. **A red cell** — the value is past its alarm level. Here row 5 has no flow: **-----** in place of the rate.
7. **The deviation from the rate**, red past the tolerance.
8. **Σ** — the summary line of all rows.

A planter in the Precision mode, on the test bench. The picture was taken earlier in the development; the top bar above the table is not shown.
:::

## The pages

What pages there are depends on the control mode of each group ([Products settings](settings-products.md)):

| Mode | Pages |
| --- | --- |
| Precision | Three seed pages: thousand seeds per hectare, seeds per metre, counters; then a fertilizer page if the fertilizer group is not in Precision |
| Hybrid | The counters page, in seeds per metre |
| Flow | The counters page, in seeds per second |

## Signs in the rate column

| Sign | Meaning |
| --- | --- |
| **-----** | No flow in the row |
| **!** | The row is taken off control |
| **X** | The sensor is not found |
| **?** | The device on the row's number is not a seed sensor |

Rows of the tramline are striped grey, as on the rows screen.

## What you can do

| To do this | Do this |
| --- | --- |
| Open the menu of a row | Tap its line. [The row menu](row-menu.md) |
| See more rows | Scroll the lines up or down. A sideways swipe turns the page of the app. |
| Start the counters from zero | **“Reset”** → **“Yes”** |

> **SEE ALSO**
>
> [Statistics](statistics-screen.md) · [The rows screen](rows-screen.md)
