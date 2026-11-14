---
title: 2xx · Seeding alarms
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes-2-seeding.html
---

# 2xx · Seeding alarms

Codes 201–207: the sensor works, but the row sows too little, too much, with doubles or skips, into the tramline, or without control.

Codes 2xx mean that the sensor of the row works and the seeding itself is wrong: the cause is on the seeder, not in the electronics. The place is the row.

How to read a code, the four classes and how each looks in the app: [How service codes work](codes.md).

## 201 · Row below the allowed rate {#c201}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the row.

**What you see.** The alarm window with **“Under allowable rate”** and the row numbers. The bar of the row is yellow: below the control line (Flow) or below the tolerance band (Hybrid, Precision).

**What to do:**

1. Check the metering unit and the seed tube of this row.
2. Check that there is seed above the metering unit.

## 202 · Row not seeding {#c202}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the row.

**What you see.** The alarm window with **“Under allowable rate”** and the row numbers — the same words as code 201. The column of the row blinks dark red; the row menu says **“Not seeding”**. The sensor answers, no seed passes it, while most rows sow.

**What to do:**

1. Stop: the row does not sow.
2. Check the metering unit, its drive and the seed tube of this row.
3. Check that there is seed in the hopper.

## 203 · Row above the allowed rate {#c203}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the row.

**What you see.** The alarm window with **“Rate too high”** and the row numbers. The bar of the row is blue. Only in the Hybrid and Precision modes.

**What to do:**

1. Check the setting of the metering unit of this row.

## 204 · Too many doubles {#c204}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the row.

**What you see.** The alarm window with **“Too many doubles”** and the row numbers. Only in the Precision mode, and only when **“Doubles alarm level”** is not set to **“No”**.

**What to do:**

1. Check the seed disc, the doubles eliminator and the vacuum of this row.

## 205 · Too many skips {#c205}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the row.

**What you see.** The alarm window with **“Too many skips”** and the row numbers. Only in the Precision mode, and only when **“Skips alarm level”** is not set to **“No”**.

**What to do:**

1. Check the seed disc and the vacuum of this row.
2. Check the ground speed: drive slower if it is too high for the disc.

## 206 · Seeding into the tramline {#c206}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the row.

**What you see.** The alarm window with **“Seeding in tramline”** and the row numbers. The column of the row is hatched grey (tramline) and the seed over it is hatched red.

**What to do:**

1. Check the shutter or the clutch of the tramline on this row.
2. If the row should sow, check the tramline rhythm and the actuator settings: [Tramline](tramline.md).

## 207 · Seeding without control {#c207}

**Class:** [Attention](codes.md#class-attention) · **Place:** the row.

**What you see.** No window. The yellow capsule **“NOT UNDER CONTROL”** with the rows of the band blinks over the band, and the buzzer sounds. Seed flows in the band, but fewer of its rows sow within the norm than **“Share of seeding rows”** asks for — for example when the control line or the rate is far from what the rows really sow.

**What to do:**

1. Check the control line or the rate against what the rows really sow.
2. Check the rows that are yellow or dark red: [Bar colours](bar-colours.md).
