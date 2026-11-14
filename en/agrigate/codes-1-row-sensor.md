---
title: 1xx · Row sensor faults
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes-1-row-sensor.html
---

# 1xx · Row sensor faults

Codes 101–106: a seed or fertilizer sensor of a row is silent, blocked, dazzled, faulty or is not a seed sensor.

Codes 1xx belong to the sensor of a row itself: the sensor does not answer, or it reports that it cannot count. The place is the row: tell the service, for example, “102 · row 7”. The window title is orange for a device fault and red for an alarm.

How to read a code, the four classes and how each looks in the app: [How service codes work](codes.md).

## 101 · Row sensor not answering {#c101}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** the row.

**What you see.** The alarm window with **“Connection lost”**, **“Seed sensor:”** or **“Fertilizer sensor:”** and the row numbers. The bar of the row shows a red ✕ on a grey background. When several rows lose the link, their numbers join one window.

**What to do:**

1. Check the plug and the cable of the sensor of this row.
2. If several rows next to each other are silent, look for a broken main cable or lost power before the first of them.
3. If only this row is silent and its cable is good, replace the sensor: [Number the sensors](sensor-numbering.md).

## 102 · Row sensor clogged {#c102}

**Class:** [Device fault](codes.md#class-fault) · **Place:** the row.

**What you see.** The alarm window with an orange title, **“Clogged”** and the row number. The bar of the row keeps showing its level.

**What to do:**

1. Stop.
2. Clean the seed tube and the window of the sensor of this row.

## 103 · Row sensor light struck {#c103}

**Class:** [Device fault](codes.md#class-fault) · **Place:** the row.

**What you see.** The alarm window with an orange title, **“Light struck”** and the row number.

**What to do:**

1. Shade the sensor from direct light: check its cover and the position of the seed tube.
2. If it comes back in the shade too, tell the service the code and the row number.

## 104 · Row sensor faulty {#c104}

**Class:** [Device fault](codes.md#class-fault) · **Place:** the row.

**What you see.** The alarm window with an orange title, **“Faulty”** and the row number.

**What to do:**

1. Unplug the sensor and plug it in again.
2. If the fault stays, replace the sensor (row menu, **“Replace the sensor”**). Until then you can take the row off control: **“Disable control”** in the row menu.

## 105 · Row sensor reports another fault {#c105}

**Class:** [Device fault](codes.md#class-fault) · **Place:** the row.

**What you see.** The alarm window with an orange title, **“Other fault”** and the row number.

**What to do:**

1. Tell the service the code and the row number.
2. You can take the row off control (**“Disable control”** in the row menu) and go on seeding.

## 106 · Not a seed sensor on this row {#c106}

**Class:** [Device fault](codes.md#class-fault) · **Place:** the row.

**What you see.** The alarm window with an orange title, **“Wrong device type!”** and the row number. The bar blinks bright red with a “?”. This alarm comes at once, without the alarm delay.

**What to do:**

1. Check that a seed sensor, not another device, is connected for this row.
2. Correct the numbering: [Number the sensors](sensor-numbering.md).
