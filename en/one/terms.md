---
title: Terms
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/terms.html
---

# Terms

The words this manual uses for rates, control, sensors, tramlines and devices — what each means on the Hectare One.

## Rates and control

| **Term** | **Meaning** |
| --- | --- |
| **Rate** | The target intensity the operator sets. The panel compares the actual intensity against it and reports a deviation that is too large. |
| **Rate error** | How far the actual intensity may stand from the rate before that becomes an alarm. Set per sensor group, in per cent (**“Rate error,%”**). |
| **Product application control** | The panel does not judge the sowing at every moment: it starts watching once the conditions are met — the implement is lowered and moving. Until then a silent section is not a fault. |
| **Minimum alarm rate** | The lowest intensity still counted as normal — the control line of the diagram. Below it the section is reported, whatever the neighbours do. See [The section diagram](section-diagram.md). |
| **Path interval** | The stretch of the run over which skips, doubles and the other figures are gathered before they are redrawn. Set by **“Recalculation,m”**, which the panel renames **“Recalculation,sec”** when the seeding mode counts in seconds instead of metres. |
| **Manual lock** | Stopping all product application by hand, with a long press of **“HOME”**. A yellow hand on the home screen shows the lock is on. See [Lock application by hand](lock-application-by-hand.md). |
| **Control (of a sensor)** | Whether the panel watches a sensor. A sensor out of control is shown with **!** and reports nothing. See [Take a sensor into or out of control](sensor-in-and-out-of-control.md). |

## Seeding control modes

| **Mode** | **Meaning** |
| --- | --- |
| **“Precise”** | Seeds per metre, with skips and doubles — row-crop planters. |
| **“Flow”** | Seeds per second against an alarm level — grain drills. |
| **“Hybrid”** | Seeds per metre, with a rate error as in “Precise”; the alarm level can be set automatically as in “Flow”. |

## Sensors

| **Term** | **Meaning** |
| --- | --- |
| **Section control sensor** | The common name for a seed, dry fertilizer or liquid fertilizer sensor. One per section of the implement. |
| **Seed sensor** | Counts the seed passing one section. On a **row-crop planter** it also separates **doubles** and **skips**; on a grain drill it measures intensity only — the seeds arrive too close together to be told apart. |
| **Dry fertilizer sensor** | The same device, watching a granular fertilizer line. |
| **Liquid fertilizer sensor** | A flow meter counting the volume through one section. |
| **Speed sensor** | Measures the travel speed. Distance, area and every rate are calculated from it. |
| **Dispenser sensor** | Watches that the dispenser shaft turns. |
| **Fan sensor** | Watches the fan speed against a set minimum and maximum. |
| **Pressure sensor** | Watches positive pressure or vacuum, depending on how it is plumbed. |
| **Hopper sensor** | Reports when the product has fallen below the point where the sensor sits. |
| **Work position sensor** | Tells the panel whether the implement is lowered into work or raised for transport. |
| **Marker sensors** | Report which mechanical marker is down, so that the tramline bout can advance by itself. |

## Tramline

| **Term** | **Meaning** |
| --- | --- |
| **Tramline** | A driving lane left unsown, made by shutting off one or several sections on chosen bouts. |
| **Rhythm** | The repeating sequence of bouts, with the bouts marked on which particular sections must not sow. See [Set up the tramline rhythm](tramline-rhythm.md). |
| **Bout** | One pass of the implement across the field. The rhythm counts them and returns to the first when it runs out. |
| **Tramline actuator** | The device that shuts the sections off. **One actuator controller carries three things:** the actuator itself and **both** marker sensors. |

## Devices

| **Term** | **Meaning** |
| --- | --- |
| **HUB8** (input device) | An eight-channel hub for sensors that have no controller of their own. It watches them and reports each to the panel as if it were a device. |
| **Electric motor controller** | Drives one or two dispenser motors, or the liquid fertilizer pump. Motors and pump share one controller design — which is why a machine cannot have a pump without also having the controller a motor would use. |
| **SCM** | Section Control Module — the interface through which a third-party navigation system can shut sections off. |
| **microSD** | The memory card, for reports, profiles and firmware updates. **FAT16 or FAT32** only. |
| **Profile** | The list of what the machine carries. The panel draws its screens from it. See [Profile](profile.md). |

## Access levels

| **Level** | **What it is for** |
| --- | --- |
| **Operator** | The level the panel starts at after every power-on. Everyday work. Only at this level are alarm windows shown. |
| **Agronomist** | The commissioning settings and resetting the statistics. Needs a **PIN**, which is different for every panel and is given in the device passport. |
| **Service** | The profile, the readdressing of devices, the “Reset to defaults” items. Used by the service department. |

Details: [Access levels](access-levels.md).
