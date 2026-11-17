---
title: Check the system after installation
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/check-after-installation.html
---

# Check the system after installation

The checks to run once after mounting a Hectare Mini — every sensor in its own row, counting, work position, speed and the other sensors — with what the screen must show at each step and where to go when it does not.

Run these checks once, when the system is mounted and before the first field. Each step says what to do and what the screen must show. If a step fails, the last column of the table at the end tells you where to go. Do not skip a step because the one before it was fine.

You need a few seeds of the crop and a helper. All checks are done at the **“Operator”** level, where the panel shows its alarm windows.

## 1. The profile and the connections

Do the three checks of [Check the profile and the connections](check-profile-and-connections.md). **Passed** means: the profile list matches the machine, no window **“Connection lost”** appears after a few seconds on the home screen, and no indicator shows a red cross or a not-controlled sign. The home screen then looks like this:

![All devices answer and are under control.](figures/home-all-ok)

Go on only when this is so.

## 2. Every seed sensor sits in its own row

Each seed sensor must stand under the number of its own row. Check it row by row:

::: steps
1. Switch the panel on and press **“HOME”**. The Seeding table opens. Press **“PLUS”** until the **Seed counters** table is shown, with one row per seed line. Read the count on this table, which shows the number of seeds — not on the view with seeds per metre: that view shows values only while the machine moves.

   ![The Seed counters table.](figures/mini-table-counters)

2. Press **“MENU”** and **“PLUS”** for **“Yes”**, to zero the readings — [Zero the readings of the Seeding table](zero-the-readings.md).

3. Drop a few seeds by hand through the seed tube of row 1. Instead of seeds you may pass any small object, for example a long cable tie, through the seed tube several times — each pass is counted. Watch the table: the figures of row 1 must change.

4. Do the same for row 2, then for every other row, one after the other. After each row, look at which row of the table reacted.

5. Write down every row where another row reacted, or none did.
:::

A sensor that reacts in another row is connected in the wrong order. A row that does not react at all needs a look at its sensor.

If the order is wrong, give the sensor the number of its row — [Configure a seed sensor](configure-seed-sensor.md). If a row stays silent, open the status screen of its sensor (step 7 shows how): **Status:** must read **“Working”**. For any other state, see [Seed sensor state](alarms-sensor-state.md); for a sensor that does not answer, see [Device does not answer](alarms-any-device.md).

## 3. Counting

::: steps
1. Zero the readings as in step 2 of the previous check.

2. Count a known number of seeds, for example 20, and drop them through the seed tube of one row.

3. Read the figure of that row on the **Seed counters** table. On a precision planter it matches the number you dropped to within one seed, provided the **“Fraction”** of the seed sensors is set for the size of the seed.
:::

If the figure is clearly higher — up to twice the number — the fraction is set too small for this seed: a large seed, for example maize, is then counted as two. Set the fraction by the table in [Seed and fertilizer sensors](seed-and-fertilizer-sensors.md#fraction-for-the-crop).

## 4. The work position sensor

Skip this step if the profile has no work position sensor.

::: steps
1. Lower the machine into the working position. The status screen of the work position sensor must read **“Position: Working”**.

2. Raise the machine into the transport position. The status screen must read **“Position: Transporting”**, and on the home screen the implement indicator blinks yellow.

3. Lower and raise it once more. The state must follow every time.
:::

![The status screen of the work position sensor.](figures/status-workpos)

If the state is the wrong way round, or does not change, see [Hopper and work position sensors](hopper-and-work-position-sensors.md): the parameter **“Transporting position signal”** must match what the sensor gives with the machine raised.

## 5. Speed

::: steps
1. Drive the machine slowly in the working position.

2. The speed indicator on the home screen must show a speed, not zero and not a red cross.

3. Compare it with the speedometer of the tractor or a GPS navigator, as in [Quick start](quick-start.md).
:::

If no speed is shown, see [Speed sensor alarms](alarms-speed-sensor.md). If the speed is wrong by a constant share, calibrate the sensor — [Calibrate the speed sensor](calibrate-speed.md).

## 6. The other sensors of the profile

Check only the sensors your profile lists. For each, open its status screen as in step 7 and look at the **“Link:”** line: it must read **“Normal”**.

| **Sensor** | **What to do** | **What the screen must show** | **If not** |
| --- | --- | --- | --- |
| Fan | Start the fan. | On the home screen a fan speed in rpm, not red. On the status screen **F=** in Hz. | [Fan or dispenser shaft: speed alarms](alarms-rotation.md) |
| Pressure | Start the fan. | **P=** in kPa on the status screen, no alarm window. | [Pressure alarms](alarms-pressure.md) |
| Hopper | Look at the status screen with product in the hopper. | **Pin:** reads **"0"** while product covers the sensor. | [Hopper empty](alarms-hopper.md) |
| Dispenser shaft | Open the status screen. | **F=** in Hz, and no alarm window **“No rotation”** while the machine sows or moves. | [Fan or dispenser shaft: speed alarms](alarms-rotation.md) |

## 7. Record the result {#record-the-result}

Write down, or take a photo of, what you need if you later have to ask for help:

::: steps
1. **The firmware version.** On the home screen press **“MENU”** and choose the last item of the main menu. The window shows the version of the software, the serial number of the panel and its hardware identifier. **“BACK”** closes it.

2. **The date** of the check.

3. **A photo of the sensor status screen** of every sensor that gave you trouble, and of one sensor that works. To reach it, hold **“MENU”** on the home screen until the speed indicator has a white background, select the sensor with **“UP”** / **“DOWN”**, press **“MENU”**, then select **“Information”** and press **“MENU”**. **“BACK”** leaves — [The sensor status screen](sensor-status-screen.md).
:::

## If a step fails

| **Step** | **Go to** |
| --- | --- |
| 1. Profile and connections | [Set up the profile](set-up-the-profile.md), [Device does not answer](alarms-any-device.md) |
| 2. Sensor in the wrong row | [Configure a seed sensor](configure-seed-sensor.md) |
| 2. A row does not react | [Seed sensor state](alarms-sensor-state.md), [Device does not answer](alarms-any-device.md) |
| 3. Counting | [Seed and fertilizer sensors](seed-and-fertilizer-sensors.md) |
| 4. Work position | [Hopper and work position sensors](hopper-and-work-position-sensors.md) |
| 5. Speed | [Speed sensor alarms](alarms-speed-sensor.md), [Calibrate the speed sensor](calibrate-speed.md) |
| 6. Fan, dispenser shaft | [Fan or dispenser shaft: speed alarms](alarms-rotation.md) |
| 6. Pressure | [Pressure alarms](alarms-pressure.md) |
| 6. Hopper | [Hopper empty](alarms-hopper.md) |
| Still not clear | [Before you contact support](before-you-contact-us.md) |
