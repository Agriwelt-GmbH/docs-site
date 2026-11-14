---
title: Bar colours and the three reds
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/bar-colours.html
---

# Bar colours and the three reds

What every colour, hatching and sign of a row's bar means on the rows screen, and the three different reds.

In the cab you read the colour, not the text. Every bar of [the rows screen](rows-screen.md) takes one of the looks below.

## The bar itself

| What you see | What it means |
| --- | --- |
| Green bar | The row sows within the norm. |
| Yellow bar | The row sows below the control line (Flow) or below the tolerance band (Hybrid, Precision). |
| Blue bar | The row sows above the tolerance band. Only in Hybrid and Precision. |
| Yellow and blue narrow bars on both sides of a green one | Skips (yellow, left) and doubles (blue, right) of the row. Only in Precision, with **“Skips & doubles”** switched on. |

## The three reds

| What you see | What it means | What to do |
| --- | --- | --- |
| **Bright red, blinking**, with a red ✕ | The sensor has **never answered** since the gateway was switched on. | Check the sensor's plug and cable. [Code 101](codes-1-row-sensor.md#c101) |
| **Grey background with a red ✕** | The sensor answered, then **went silent**. | Check the sensor's plug and cable. [Code 101](codes-1-row-sensor.md#c101) |
| **Dark red, blinking** | The sensor is there, but **no seed passes it**. | Check the metering unit and the seed tube. [Code 202](codes-2-seeding.md#c202) |

A bright red column blinking with a “?” means that the device on this row's number is not a seed sensor. [Code 106](codes-1-row-sensor.md#c106)

## Other looks

| What you see | What it means |
| --- | --- |
| White column with a black “!” | The row is taken off control: it raises no alarms and does not count toward the share of seeding rows. [The row menu](row-menu.md) |
| Grey hatching | The row is in the tramline and should not sow. [Tramline](tramline.md) |
| Red hatching over the grey | The row sows although it is in the tramline. [Code 206](codes-2-seeding.md#c206) |
| A “?” on top of an empty column | Nothing is known about the row yet. |
| A bar filling slowly with a yellow “?” | The gateway is sending the sensor a new setting, for example a new **“Fraction”**. The rows do this one after another; it takes a few seconds each. |

A sensor that reports a fault — clogged, light struck, faulty — keeps its bar; the reason comes in the alarm window. [1xx · Row sensor faults](codes-1-row-sensor.md)

The same colours are in the built-in help: **“Settings”** › **“App”** › **“Help”** › **“Bar colours and the three reds”**.
