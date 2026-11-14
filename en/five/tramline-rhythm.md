---
title: Set up the tramline rhythm
product: Hectare 5
language: en
firmware: 1.0.20
url: https://docs.agriwelt.com/en/five/tramline-rhythm.html
---

# Set up the tramline rhythm

What a tramline rhythm is, worked out for your drill and sprayer, how to set it up on the panel by touch, and how the panel counts the bouts.

A **tramline** is the lane the sprayer will drive in later. You make it now, while sowing, by shutting off one or two sections on certain bouts so that nothing is sown where the sprayer wheels will go. Which bouts those are depends on the width of the drill against the width of the sprayer. That pattern, repeating across the field, is the **rhythm**.

## How a rhythm works — an example

A 6-metre drill and an 18-metre sprayer: every third bout must carry the lane. The rhythm is three bouts long, and actuator 1 shuts its sections off on one of them.

| **Bout** | **Actuator 1** | **What is sown** |
| --- | --- | --- |
| 1 | shuts its sections off | All rows except the tramline rows — the lane is made. |
| 2 | open | All rows. |
| 3 | open | All rows. |
| 1 again | shuts off | The next lane, 18 m further. |

> **IMPORTANT**
>
> **Get the rhythm wrong and the field looks perfect until the sprayer arrives and has nowhere to drive.** Check the bout count against the sprayer, not against the drill.

## What the panel allows

| | |
| --- | --- |
| **Rhythms stored** | **Three.** One is active at a time. |
| **Actuators in one rhythm** | **Four.** On a machine that makes tramlines by stopping dispenser motors, the motors take their place. |
| **Cut-off bouts per actuator** | **Four** different bouts of the same rhythm. |
| **Bouts in a rhythm** | 1 to 50. |

## Setting it up

The tramline items sit under **“Seeding machine parameters”**, which needs the **Agronomist** level: [Enable the Agronomist level](enable-agronomist-level.md). The **“Tramline”** item is shown only on a machine that can make tramlines.

::: steps
1. On the home screen tap with **two fingers**. Tap **“Settings”**, and tap it again.

2. Tap **“Seeding machine parameters”**, and tap it again.

3. Tap **“Tramline”**, and tap it again.

   ![The Tramline menu.](figures/five-menu-tramline)

4. Tap **“Tramline”** and swipe right to **“Yes”**. Then tap **“Tramline rhythm settings”** twice. The rhythm form opens with rhythm 1 selected.

5. On **“Rhythm”**, swipe right or left to choose the rhythm number. Tap with **two fingers** and choose **“Select”**. The word **“Active”** appears beside the number — without it the rhythm is stored but not used.

6. Swipe down to **“Bouts”**, tap with two fingers and set the number of bouts in the rhythm.

7. Swipe to the framed cell under the activation heading and tap with two fingers. Choose the number of the actuator, then the **bout** on which it must shut its sections off.

8. If the pattern needs it, add more bouts to the same actuator — up to four — with the framed cell at the end of its row, or another actuator with the cell on the empty row below.

9. Tap with **three fingers**. The rhythm is saved and the Tramline menu returns. Tap outside the menus until the home screen returns. The tramline indicator shows the current bout and the number of bouts.
:::

A touch and hold anywhere on the form saves the rhythm without leaving it. Return to the **Operator** level before you work — above it, no alarms are shown.

## The rhythm form

::: {.anatomy fig="five-tramline-rhythm-form"}
1. **“Rhythm”.** The number of the rhythm; a swipe right or left steps through the three.
2. **“Active”.** This rhythm is the one in use.
3. **“Bouts”.** The number of bouts in the rhythm.
4. **Activation heading.** **“Tramline actuators activation”** on a machine that makes tramlines with actuators; **“Tramline motors activation”** on one that stops dispenser motors. A machine with both shows both headings.
5. **Framed cell.** Adds an actuator (or motor) and its cut-off bout.

A new rhythm: one bout, nothing shut off yet.
:::

In the form, a swipe up or down moves between lines, a swipe right or left along a line, and a **two-finger tap** opens the selected cell. **“Reset rhythm settings”**, in the menu of the **“Rhythm”** line, returns the selected rhythm to its defaults.

## How the bout changes

The panel counts the bouts by itself. Something on the machine must tell it that a pass has ended:

| **On the machine** | **What ends a bout** |
| --- | --- |
| Marker sensors in the profile | At least one marker sensor **under control** and **answering**. The change of the marker position ends the bout. |
| No markers | The **work position sensor**, under control and answering. Raising the implement out of work ends the bout. |
| Neither | The bout does not change. |

When the bout cannot change by itself, the tramline icon on the home screen is **yellow** ([Tramline bout](indicators.md#tramline-bout)). Check the indicator on the home screen before you start a pass.
