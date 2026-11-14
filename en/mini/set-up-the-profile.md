---
title: Set up the profile
product: Hectare Mini
language: en
firmware: 2.2.8
url: https://docs.agriwelt.com/en/mini/set-up-the-profile.html
---

# Set up the profile

The steps to change the profile of the Hectare Mini — reach the profile menu at the Service level, enter the devices of the machine, save, and let the panel restart.

Set up the profile when the equipment of the machine changes — a device added, removed or of another kind. The items and their limits: [The profile](profile.md). The profile menu needs the **“Service”** level.

> **WARNING**
>
> **Change the profile only at commissioning, by the service.** A wrong profile makes the panel watch devices that are not there and ignore the ones that are.

::: steps
1. Connect all devices to the panel and power them as the wiring diagram in the data sheet of the system shows.

2. Switch the panel on. After the splash screen the home screen appears; what it shows depends on the present profile.

   ![The home screen after start-up.](figures/home-idle)

3. Raise the access level to **“Service”**: **“MENU”** → **“Settings”** → **“User”** → **“Service”**, **“MENU”**, PIN — as in [Enable the Agronomist level](enable-agronomist-level.md).

4. Press **“BACK”**. The main menu returns, now with **“Service”**.

5. Select **“Service”** and press **“MENU”**. The **“Service”** menu opens with **“Profile”** as its first item.

6. Select **“Profile”** and press **“MENU”**. The profile menu opens.

   ![The way to the profile: Settings with the Service level, the main menu, the Service menu, the profile menu.](figures/menu-to-profile)

7. Go through the items with **“UP”** / **“DOWN”** and set each with **“PLUS”** / **“MINUS”** to the equipment of the machine.

   ![The profile menu.](figures/menu-profile)

8. Select **“Save profile”**, the last item, and press **“MENU”**. The panel asks **“Are you sure?”** — press **“PLUS”** for **“Yes”**, **“MINUS”** for **“No”**.

9. The panel asks you to wait, then shows **“Saved”** and **“Restart system”**, and restarts by itself. The new profile is in force after the restart.

   ![Saving the profile: the item Save profile, the question, then the message Saved and Restart system.](figures/profile-save)
:::

**“BACK”** leaves the profile menu; the device numbers you changed are not saved. **“GPS”** is the exception: it is stored at once, like a setting of the **“Settings”** menu.

## When the profile is not saved

| **The panel shows** | **Meaning** |
| --- | --- |
| **“No changes”** | The profile is the same as the stored one. Nothing is saved, nothing restarts. |
| **“Invalid profile!”** | The profile breaks a rule — too few seed sensors, too many small indicators, too many fans and pressure sensors, or motors without a speed sensor. See [Rules the profile must keep](profile.md#rules-the-profile-must-keep). Correct it and save again. |

After the restart the panel is at the **“Operator”** level. Check the result as in [Check the profile and the connections](check-profile-and-connections.md), then, if the machine makes tramlines, set up the tramline rhythm — always after the profile — [Set up the tramline rhythm](tramline-rhythm.md).
