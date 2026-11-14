---
title: The rows screen
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/rows-screen.html
---

# The rows screen

The main working page — one bar per row, the control line or the rate, the rate column at the right of every band, and the tiles at the bottom.

**“Rows”** is the main working page and, by default, the home page. Every row of the machine is a bar that grows up from the bottom line; its height is the flow of its row, its colour is the judgement.

::: {.anatomy fig="app-rows"}
1. **Sound warning.** Here **“Volume is off”**: an alarm would not be heard. [Messages over the screen](screen-messages.md)
2. **Rate column of the seed band.** On top the actual level of the band, under it the set value (grey), at the bottom the unit: **“s/m”** (seeds per metre, Hybrid and Precision) or **“s/s”** (seeds per second, Flow).
3. **A row in the tramline** — hatched grey. Over row 4 the seed is hatched red: that row sows into the tramline. [Tramline](tramline.md)
4. **Blue bar** — the row sows more than the rate allows (Hybrid and Precision).
5. **The rate line** across every column, with the tolerance lines above and below it (Hybrid and Precision). In Flow a single control line stands here.
6. **Green bar** — the row sows within its tolerance.
7. **Red column** — a sensor that has never answered since power-on blinks bright red. [Bar colours](bar-colours.md)
8. **Yellow bar** — the row sows less than allowed.
9. **Row numbers**, under the columns.
10. **Rate column of the fertilizer band**, here in seeds per second.
11. **Fertilizer band.** With fertilizer sensors in the profile, the seed rows stand in the top band and the fertilizer rows in the bottom band.
12. **The tiles** — speed, area, population and the devices of the machine. [The tiles at the bottom](bottom-tiles.md)

24 seed rows in Precision and 24 fertilizer rows in Flow, on the test bench.
:::

Without fertilizer sensors, up to 20 seed rows stand in one band; more stand in two bands, the first half on top.

## What you can do on this page

| To do this | Do this |
| --- | --- |
| Move the control line (Flow) or the rate (Hybrid, Precision) | Press and hold the digits in the rate column, then drag up or down. The value changes by one step for every 12 points of finger travel (a short move); the highlight goes out 5 seconds after the last touch. In Hybrid and Precision the new rate goes to the gateway when you lift the finger. |
| Open the menu of a row | Press and hold a bar: a loupe names the row under the finger; slide to the row you want and lift the finger. Or tap a band: the eight rows around the finger open large; tap one. [The row menu](row-menu.md) |
| Change the rate by typing it | Tap the **“Population”** or **“Rate”** tile. [The tiles at the bottom](bottom-tiles.md) |
| Go to another page | Swipe left or right, or tap a tab. [Moving around the app](app-navigation.md) |

## When the band is not under control

Control starts when enough rows sow within the norm for 3 seconds running — the share is set in **“Share of seeding rows”**. When seed flows but too few rows are within the norm, the band shows the blinking yellow capsule **“NOT UNDER CONTROL”** with its rows, and the buzzer sounds. No window opens. Check the control line or the rate, and the rows taken off control. [Code 207](codes-2-seeding.md#c207)

While the link to the gateway is down, the whole page is dimmed: the bars show the last reading, not the present.

> **SEE ALSO**
>
> [Bar colours](bar-colours.md) · [Products settings](settings-products.md) · [Control and Alarms settings](settings-control-alarms.md)
