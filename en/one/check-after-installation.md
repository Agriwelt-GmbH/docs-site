---
title: Check the system after installation
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/check-after-installation.html
---

# Check the system after installation

A one-time procedure for the installer — prove step by step that every device answers, every seed sensor sits in its own row and the machine reads correctly, then record the result.

Run this check once, when the panel and the devices are mounted and connected. Each step says what to do and what the screen must show. If a step does not give the result, the last column of the [table at the end](#if-a-step-fails) says where to go.

Your machine may not have every device — skip the steps for what it does not have. Stay at the **Operator** level: alarm windows are shown only there ([Access levels](access-levels.md)).

> **WARNING**
>
> **Keep clear of the fan, the dispenser shafts and the metering units while the machine is being tested.** Switch the drives off before you reach into a seed tube.

## The check

::: steps
1. **Check the profile and the devices.** Switch the panel on and wait for the home screen. There must be no **“Connection lost”** alarm, no white indicator with an exclamation mark and no red indicator with an **X**. Check the profile against the machine: the devices and the number of each ([The profile](profile.md)). Then open the status screen of every sensor ([Sensor settings](sensor-settings.md)) and step through them with **“PLUS”**. Every sensor shows **“Link:”** **“Normal”**; every seed sensor shows **Status:** **Working**. See [The sensor status screen](sensor-status-screen.md).

   A white indicator is correct only for a device that is not in your delivery ([The profile](profile.md)).

2. **Check that every seed sensor sits in its own row.** Open the Table screen with **“HOME”** and open the table with the seed counters ([The Table screen](table-screen.md)). It shows the number of seeds; read the count there, not on the view with seeds per metre, which shows values only while the machine moves. Zero the readings ([Zero the readings](zero-the-readings.md)). Drop a few seeds by hand through the seed tube of row 1; instead of seeds you may pass any small object, for example a long cable tie, through the seed tube several times — each pass is counted. Only the line of section 1 must react. Do the same with row 2, then with every other row in turn. A sensor that reacts in another row is connected in the wrong order — call your installation partner or the service support.

   ![The seed counter table of an eight-row planter: seeds per section, deviation bars, total.](figures/one-table-counters)

3. **Check the counting.** Only if your Table screen has the seed counter table. Zero the readings again. Drop a known number of seeds, for example 20, through one tube. Read the figure of that section on the seed counter table, which shows the number of seeds. On a precision planter it matches the number you dropped to within one seed, provided the **“Fraction”** of the seed sensors is set for the size of the seed. If the figure is clearly higher — up to twice the number — the fraction is set too small for this seed: a large seed, for example maize, is then counted as two; set the fraction by the table in [Seed and fertilizer sensors](seed-and-fertilizer-sensors.md). If the two differ in another way, write both numbers down and give them to the support ([Before you contact support](before-you-contact-us.md)).

4. **Check the work position sensor.** Only if the machine has one. Raise the implement, then lower it. The status screen of the sensor must change between **Position: Transporting** and **Position: Working**. If it shows the opposite, the setting **“Transporting position signal”** of the sensor is the wrong way round ([Hopper, implement position and engine sensors](hopper-position-engine-sensors.md)).

5. **Check the speed.** Drive. The speed field on the home screen must show a number in white. **XX.X** in red means the input device of the speed sensor does not answer. A yellow figure alternating with **“IMITATION”** means the speed is simulated, not measured. **“SLOWER”** and **“FASTER”** only say that you are outside the permitted range ([Indicators](indicators.md)). If the figure does not match the real speed, calibrate the sensor ([Calibrate the speed sensor](calibrate-speed.md)). If the sensor fails, see [Work without the speed sensor](work-without-speed-sensor.md).

6. **Check the other sensors the machine has.** One short check each:

   - **Hopper sensor.** Its status screen shows **Pin:** and the level, **“0”** or **“1”**. With the hopper filled the panel must not raise **“Hopper empty”** ([Hopper empty](alarms-hopper.md)).
   - **Fan sensor.** With the fan running, its status screen shows **F=** in Hz and no alarm **“Low speed of rotation”** or **“High speed of rotation”** ([Fan sensor](fan-sensor.md)).
   - **Pressure sensor.** With the fan running, its status screen shows **P=** in kPa and no alarm **“High pressure”** or **“Low pressure”** ([Pressure sensor](pressure-sensor.md)).
   - **Dispenser shaft sensor.** Turn the shaft. Its status screen shows **F=** in Hz and no alarm **“No rotation”** ([Dispenser sensor](dispenser-sensor.md)).
   - **Marker sensors.** Each shows **“Link:”** **“Normal”** on its status screen ([Marker sensors](marker-sensors.md)).
   - **Tramline actuator.** Its status screen shows **Status:** **Pulled in**, **Pulled out** or **Working** — not **Unknown** ([Tramline actuator](tramline-actuator.md)).

7. **Record the result.**
   - **The firmware version.** Press **“MENU”** on the home screen and choose **“Information”** in the main menu. The window shows the firmware version. Write it down.
   - Write down the date, the machine and the number of rows.
   - Take a photo of the status screen of a sensor, or of the sensors one after another, showing **“Link:”** **“Normal”**.

   Keep the notes and the photos. You need them if you must contact the support ([Before you contact support](before-you-contact-us.md)).
:::

## If a step fails {#if-a-step-fails}

| Step | What you see | Where to go |
| --- | --- | --- |
| 1 | **“Connection lost”** or **“No connection”** | [Any device: connection lost or wrong device type](alarms-any-device.md) |
| 1 | **“Wrong device type!”** | [Any device: connection lost or wrong device type](alarms-any-device.md) |
| 1 | White indicator for a device you have | [Take a sensor into or out of control](sensor-in-and-out-of-control.md) |
| 1 | **“Clogged”**, **“Light struck”**, **“Broken”** | [Seed or fertilizer sensor clogged, light-struck or broken](alarms-sensor-state.md) |
| 1 | Device missing from the profile | [The profile](profile.md) |
| 2, 3 | Wrong row reacts, or the count differs | [Before you contact support](before-you-contact-us.md) |
| 4 | Position does not change, or is reversed | [Hopper, implement position and engine sensors](hopper-position-engine-sensors.md) |
| 5 | No speed, or a wrong speed | [Speed sensor alarms](alarms-speed-sensor.md), [Calibrate the speed sensor](calibrate-speed.md), [Work without the speed sensor](work-without-speed-sensor.md) |
| 6 | Hopper, fan, pressure, dispenser | [Hopper empty](alarms-hopper.md), [Fan or dispenser shaft: speed alarms](alarms-rotation.md), [Air pressure too high or too low](alarms-pressure.md) |
