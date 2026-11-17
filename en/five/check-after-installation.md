---
title: Check the system after installation
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/check-after-installation.html
---

# Check the system after installation

A step-by-step check to run once after mounting — every device answers, every seed sensor sits in its own row, the counting, work position, speed and the other sensors work — and what to record.

Run this check **once, after the system is mounted and before the first field**. Each step says what to do, what the screen must show, and where to go if it does not. Your machine may not have every device — skip the steps for what it does not have.

Start at the **“Operator”** level: it is the level at which alarm windows are shown ([Access levels](access-levels.md)). The panel starts at that level after every power-on.

::: steps
1. **Check that every device answers.** Switch the panel on and wait for the home screen ([Switching on](switching-on.md)).

   - The profile must match the machine: the number of seed sensors equals the number of rows, and the other devices are the ones the machine has ([The profile](profile.md)). The machine settings are in [Seeding machine parameters](seeding-machine-parameters.md); the sensor parameters to check are listed in [Quick start](quick-start.md).
   - No alarm window **“Connection lost”**, no red indicator with a **×**, no white indicator with **!**, no red indicator with **?** ([Indicators](indicators.md)).
   - Open the status screen of a device: touch and hold it, then **“Information”**. Swipe left or right through every device of the list. **“Link:”** must read **“Normal”** on each ([The sensor status screen](sensor-status-screen.md)).
   - A seed or fertilizer sensor must show **Status:** **Working**.

   **If it does not:** [Connection lost or wrong device](alarms-any-device.md) · [Sensor clogged or broken](alarms-sensor-state.md) · a device that is out of control: [Take a sensor into or out of control](sensor-in-and-out-of-control.md).

2. **Check that every seed sensor sits in its own row.** The machine stands still. Open the Table screen with a **long swipe to the left** on the home screen. Tap it with **two fingers** and touch **“Yes”** to the question **“Zero readings?”** ([Zero the readings](zero-the-readings.md)). Then drop a few seeds by hand through the seed tube of row 1, one after another. Instead of seeds you may pass any small object, for example a long cable tie, through the seed tube several times — each pass is counted. Do the same for row 2, row 3 and so on, up to the last row.

   - Only the line of the row you dropped into reacts. In the “Precise” mode, switch to the table of the seed counters with a **long** two-finger swipe — the count of that row grows ([The Table screen](table-screen.md)). Read the count on that table, which shows the number of seeds, not on the view with seeds per metre: that view shows values only while the machine moves. In the other modes, watch **sds/s** of that row.
   - A line of **another** row reacts: that sensor is connected in the wrong order. Correct the order of the connections and repeat the drop.
   - No line reacts: see step 1 for that sensor.

   **If it does not:** [Connection lost or wrong device](alarms-any-device.md) · [Sensor clogged or broken](alarms-sensor-state.md).

3. **Check the counting.** Zero the readings again, as in step 2. Drop a known number of seeds, for example 20, one by one through the seed tube of one row. Read the count of that row on the table of the seed counters (“Precise” mode), the table that shows the number of seeds. On a precision planter it matches the number you dropped to within one seed, provided the **“Fraction”** of the seed sensors is set for the size of the seed. Write both numbers down. Repeat for one more row.
   If the figure is clearly higher — up to twice the number — the fraction is set too small for this seed: a large seed, for example maize, is then counted as two. Set the fraction by the table in [Seed sensors and dry fertilizer sensors](seed-and-fertilizer-sensors.md#fraction-for-the-crop).

   **If it does not:** write down both figures and see [Before you contact support](before-you-contact-us.md).

4. **Check the work position sensor.** Lower the machine into the working position, then raise it into the transport position.

   - The implement position indicator is **green** when lowered, **yellow** and blinking when raised ([Indicators](indicators.md#implement-position)).
   - On the status screen of the sensor, **“Position: Working”** and **“Position: Transporting”** follow the machine.
   - If both are the wrong way round, check the setting **“Transporting position signal”** ([Hopper, work position and engine sensors](hopper-position-engine-sensors.md)).

5. **Check the speed.** Calibrate the speed sensor first if you have not ([Calibrate the speed sensor](calibrate-speed.md)). Then drive.

   - The speed field shows a white figure. It matches the speed of the tractor.
   - It does not show **XX.X**, **!!.!** or **????**.
   - On the status screen of the speed sensor, the frequency **F=** changes while you drive.

   **If it does not:** [Speed sensor alarms](alarms-speed-sensor.md) · [Travel speed sensor](speed-sensor.md) · [Work without the speed sensor](work-without-speed-sensor.md).

6. **Check the other sensors the machine has.** One short check each:

   - **Hopper.** The hopper icon is full and green with product in the hopper. [Hopper empty](alarms-hopper.md).
   - **Fan.** Start the fan. The fan icon is green and shows the speed in rpm. [Fan or dispenser shaft: speed alarms](alarms-rotation.md).
   - **Air pressure.** The pressure icon is green and shows the pressure in kPa while the fan runs. [Air pressure](alarms-pressure.md).
   - **Dispenser shaft.** While the shaft turns, the metering unit icon turns. [Fan or dispenser shaft: speed alarms](alarms-rotation.md).
   - **Markers.** Lower and raise the markers. The marker icon shows the arm or arms down or up ([Indicators](indicators.md#markers)).
   - **Dispenser motors and tramline actuators.** Open the Motors screen. Every tile shows its value; none has a red **×** ([The Motors screen](motors-screen.md)).
   - **Engine sensors.** The engine indicators the machine has are green; the ignition key is green with the ignition on ([Indicators](indicators.md#engine-sensors)).

7. **Record the result.**

   - Two-finger tap on the home screen, then **“About”**. Write down the firmware version and the serial number. Close the window with **“Close”**.
   - Write down the date and the machine.
   - Photograph the status screen of the sensors — at least the screens that show a device with its link and its state.
:::

Keep the record and the photos. If you need help later, they are the first thing support asks for ([Before you contact support](before-you-contact-us.md)).

## If a step fails

| **Step** | **Go to** |
| --- | --- |
| 1. A device does not answer | [Connection lost or wrong device](alarms-any-device.md) |
| 1. A seed sensor reports a fault | [Sensor clogged or broken](alarms-sensor-state.md) |
| 1. A device is out of control | [Take a sensor into or out of control](sensor-in-and-out-of-control.md) |
| 1. The profile does not match the machine | [The profile](profile.md) |
| 2, 3. A row does not react, reacts in another row, or the count is wrong | [Connection lost or wrong device](alarms-any-device.md), then [Before you contact support](before-you-contact-us.md) |
| 4. The position does not follow the machine | [Hopper, work position and engine sensors](hopper-position-engine-sensors.md) |
| 5. No speed or a wrong speed | [Speed sensor alarms](alarms-speed-sensor.md), [Calibrate the speed sensor](calibrate-speed.md), [Work without the speed sensor](work-without-speed-sensor.md) |
| 6. Hopper | [Hopper empty](alarms-hopper.md) |
| 6. Fan, dispenser shaft | [Fan or dispenser shaft: speed alarms](alarms-rotation.md) |
| 6. Air pressure | [Air pressure](alarms-pressure.md) |
| Any other fault | [How alarms work](how-alarms-work.md) |
