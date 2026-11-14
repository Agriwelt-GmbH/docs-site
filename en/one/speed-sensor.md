---
title: Travel speed sensor
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/speed-sensor.html
---

# Travel speed sensor

The parameters of the travel speed sensor — pulses, wheel diameter, speed limits, imitation — and what setting the imitation does by itself.

Everything the panel counts — area, rates, deviations — is worked out from the distance travelled. **A speed sensor that is out by a tenth makes every other figure on the panel wrong by a tenth.** Set its parameters first, then calibrate it ([Calibrate the speed sensor](calibrate-speed.md)).

Open the context menu of the speed sensor as described in [Sensor settings](sensor-settings.md). All its parameters need the **“Agronomist”** level ([Enable the Agronomist level](enable-agronomist-level.md)).

![The context menu of the speed sensor. A limit that is switched off reads “No”.](figures/ctx-speed)

The context menu also offers **“Speed calibration”** directly, under **“Information”**.

| Parameter | What it does | Range |
| --- | --- | --- |
| **“Pulses”** | The pulse figure of the sensor. Set it before the calibration, which corrects it. | 1 … 1000 |
| **“Count period”** | How many pulses of the sensor the panel averages the travel speed over; a higher value gives a steadier figure. Acts only on a speed sensor wired to the panel itself. | 1 … 1000 |
| **“Diameter, cm”** | The wheel diameter. Set it before the calibration. | 10 … 200 |
| **“Factor, %”** | The drive ratio to the wheel; 100 is a direct 1 : 1 drive. | 1 … 10000 |
| **“Seeding criteria”** | **“Yes”**: the alarms of the seed, dry fertilizer and liquid fertilizer sections are raised only while the machine moves. **“No”**: also while it stands. Hidden, and always **“Yes”**, in the **“Precise”** mode and on machines with metering motors or a liquid fertilizer pump controller. | **“No”** / **“Yes”** |
| **“Min speed, km/h”** | Below this speed the home screen shows **“FASTER”**. **0 switches the check off.** | 0 … 99 |
| **“Max speed, km/h”** | Above this speed the home screen shows **“SLOWER”**. **0 switches the check off.** | 0 … 99 |
| **“Imitation, km/h”** | A simulated speed. **0** = the real sensor is used. | **0 … 20** |
| **“Width, cm”** | The track between the two wheels of a two-sensor installation. | 0 … 10000 |
| **“GPS”**, **“GPS internal”** | Take the speed from a receiver instead of the wheel. | **“No”** / **“Yes”** |

The minimum must be below the maximum, otherwise the panel raises **“Error in settings of Min/Max”** ([Speed sensor alarms](alarms-speed-sensor.md)).

> **IMPORTANT**
>
> **Setting “Imitation, km/h” to anything but zero changes two other things by itself.** The panel sets **“Min speed, km/h”** and **“Max speed, km/h”** to zero — they mean nothing against a simulated speed — and it **locks the product application**, so that nothing is dosed while the machine stands. The lock is the hand icon on the home screen; hold **“HOME”** to release it ([Lock the application by hand](lock-application-by-hand.md)).

The imitated speed is also **held inside the range the dosing allows**: a value outside it is pulled back to the nearest limit as you enter it. While the speed is imitated, the status screen of the sensor shows **“IMITATION”** in yellow. Working without a speed sensor: [Work without a speed sensor](work-without-speed-sensor.md).

## The status screen

The status screen shows the pulse frequency **F=** in Hz (with two sensors **F1=** and **F2=**) and the two limits in force. See [The sensor status screen](sensor-status-screen.md#what-each-kind-of-sensor-adds).

![The status screen of a speed sensor wired to the panel.](figures/status-speed)
