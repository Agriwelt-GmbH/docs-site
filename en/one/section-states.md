---
title: Column colours and the four states of a section
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/section-states.html
---

# Column colours and the four states of a section

What each colour and symbol of a column on the section diagram means, and the four combinations of control and product application a section can be in.

How the diagram is built — rate line, ticks, control line — is in [The section diagram](section-diagram.md). This page lists what a single column can look like.

## Column colours

| **What you see** | **What it means** |
| --- | --- |
| Green column | The row sows normally. |
| Blue column | The row sows **more** than the target allows (“Precise” and “Hybrid”). |
| Yellow column | The row sows **less** than the target allows (“Precise” and “Hybrid”). |
| Background blinking dark red, no column | The row sows almost nothing while the machine is seeding — a blocked or empty tube. |
| White column with **!** | The control of this section is switched off. Nothing about it is watched. |
| Red **×** | The sensor does not answer. |
| Red **?**, column blinking red | A device of the wrong kind answers in place of this sensor. |
| Yellow **?** | The sensor has just received its settings, or it counts seeds but the panel has no speed to judge them by. |
| Grey hatching over the whole column | The section is shut off for the tramline, or its product application is switched off. |
| Green hatching at the bottom of a grey column | A small flow in a shut-off section, still within what is tolerated. |
| Red hatching in a grey column | The shut-off section sows into the tramline. |

## The four states of a section

Each section has two independent switches: whether the panel **watches** it (control), and whether the machine **applies** through it (product application).

| **Control** | **Application** | **What it means** | **What the column shows** |
| --- | --- | --- | --- |
| on | on | Normal work. | The normal column. |
| on | off | Tramline: the row deliberately does not sow, and the panel knows it. | Grey hatching. |
| off | on | The row sows, but nobody is checking it. | White with **!** |
| off | off | The section is out of the work altogether. | White with **!** |

Control is switched in the context menu of the sensor: [Take a sensor into or out of control](sensor-in-and-out-of-control.md). **“Product application”** is an item of the same menu, at the Agronomist level; in tramline mode the actuators or motors switch the sections themselves and this item is ignored.
