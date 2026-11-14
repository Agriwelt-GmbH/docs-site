---
title: Settings — Control and Alarms
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/settings-control-alarms.html
---

# Settings — Control and Alarms

When the machine counts as seeding, how long a fault must hold before an alarm, the tolerance and the doubles and skips levels, and the alarm buzzer.

**“Settings”** › **“Control and Alarms”** decides how the rows are judged and how loud the alarm is.

## Flow control

| Setting | What it does | Range | Default |
| --- | --- | --- | --- |
| **“Share of seeding rows”** | Control starts when at least this share of the rows sows within the norm for 3 seconds running, and stops at once when the share is lost. While it is under control, the machine counts as seeding. | 5–80 %, steps of 5 | 20 % |
| **“Alarm delay”** | How long a fault of a row must hold before the alarm window opens. | 2–20 s | 3 s |
| **“Separate share for fertilizer”** | With fertilizer sensors: gives the fertilizer band a share of its own, **“Share of seeding fertilizer rows”**. Off — it uses the seed share. | — | Off |

The machine counts as seeding when at least one band — seed or fertilizer — is under control.

> **TIP**
>
> **If the app alarms too often on a rough field, raise “Alarm delay” first.** A short delay reacts to every bump; a long one lets a real fault run longer before you hear it.

## Hybrid and precision seeding

Shown when a group is in Hybrid or Precision. One value for the whole machine.

| Setting | What it does | Range | Default |
| --- | --- | --- | --- |
| **“Rate tolerance”** | The band around the rate: below it **“Under allowable rate”**, above it **“Rate too high”**. | 5–95 %, steps of 5 | 50 % |
| **“Doubles alarm level”** | Share of doubles in the last 20 m above which **“Too many doubles”** is raised. **“No”** — no alarm. | No, 1–95 % | No |
| **“Skips alarm level”** | The same for skips: **“Too many skips”**. | No, 1–95 % | No |
| **“Skips & doubles”** | Narrow bars beside each row's column: skips at the left, doubles at the right. The figures are always in the table. | On / Off | Off |

## Alarm buzzer

| Setting | What it does |
| --- | --- |
| **“Volume”** | **“Quiet”**, **“Medium”** or **“Loud”** (default). The tablet's own volume still limits it. |
| **“Test sound”** | Plays one beep at the chosen volume. |
| **“Quiet for 10 min”** | Mutes the buzzer for 10 minutes. **“Silence”** shows the minutes left; **“Cancel silence”** ends it. |

> **IMPORTANT**
>
> **“Quiet for 10 min” mutes the buzzer, not the alarm.** The alarm window always opens; only the sound is held back for those ten minutes.

> **SEE ALSO**
>
> [The alarm window](alarm-window.md) · [Products settings](settings-products.md)
