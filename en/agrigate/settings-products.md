---
title: Settings — Products: control mode, fraction and rate
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/settings-products.html
---

# Settings — Products: control mode, fraction and rate

Choose how each group of rows is judged — Flow, Hybrid or Precision — set the fraction the sensors count as a seed, and set the rate in seeds per metre.

**“Settings”** › **“Products”** has a section **“Seed”** and, with fertilizer sensors in the profile, a section **“Fertilizer”**. Each group has its own settings.

## Control mode

**“Control mode”** decides how the rows of the group are judged.

| Mode | What it measures | What it needs |
| --- | --- | --- |
| Flow | Seeds per second in every row, against the control line you drag on the rows screen. A row below the line is yellow; a row without flow is red. | Nothing more: no speed, no area. |
| **“Hybrid”** | Seeds per metre of row, in whole numbers, from the iPad's GNSS speed. A row below the tolerance band shows **“Under allowable rate”**, above it **“Rate too high”**. Doubles and skips are not counted. | An iPad with GNSS and Location allowed. |
| **“Precision”** | Seeds per metre with tenths, from the GNSS speed. The sensors also count doubles and skips. Without a fresh speed for 2 seconds the row menu says **“Unknown: no speed”**. | An iPad with GNSS and Location allowed. |

Hybrid and Precision are offered only when the iPad gives a speed. The first time you pick one, the app shows **“Waiting for the iPad's GNSS speed…”**; if no speed comes, only Flow stays. See [What you need](what-you-need.md).

## Rate (Hybrid and Precision)

**“Rate”** — the seeds per metre you want, with **−** / **+**. Under it **“Thousand seeds/ha”** — the same rate per hectare, worked out from the working width — and the alarm band: the rate below and above which a row raises an alarm, from **“Rate tolerance”** in [Control and Alarms](settings-control-alarms.md).

You can also change the rate on the rows screen (drag the rate column), on the **“Population”** or **“Rate”** tile, and on the page **“Machine”**.

## Fraction

**“Fraction”** — the setting of the sensors for the size of the seed. Pick the crop or the seed size: **“Rapeseed”**, **“Wheat”**, **“Barley”**, **“Soybean”**, **“Peas”**, **“Beans”**, **“Maize”**, **“Sunflower”**, **“Small”**, **“Medium”**, **“Large”** or **“Pneumatic drill”**. The number in brackets is what the sensor receives.

There is one fraction for all seed rows and one for all fertilizer rows. The gateway sends it to every sensor of the group; the rows then show the setup bar one after another, a few seconds each.

**“Expert”** opens **“Value for the sensor”**, the number itself, for the service.

## Max seeding in tramline

**“Max seeding in tramline,%”** — shown on machines with a tramline. A row in the tramline that sows more than this share of the rate raises **“Seeding in tramline”**. From 0 to 50 %, 20 % unless changed. See [Tramline](tramline.md).

> **SEE ALSO**
>
> [Control and Alarms settings](settings-control-alarms.md) · [The rows screen](rows-screen.md)
