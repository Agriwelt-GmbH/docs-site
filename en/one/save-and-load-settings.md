---
title: Save and load settings
product: Hectare One
language: en
firmware: 1.2.3
url: https://docs.agriwelt.com/en/one/save-and-load-settings.html
---

# Save and load settings

Keep a copy of all the settings of the current profile in the panel or on a memory card, and bring it back — for example to move one panel between implements.

For the current profile the panel can **save all the settings** and restore them later — useful before you try something out. With a memory card in the slot, a profile can also be saved to the card together with its settings, so one panel can serve several implements.

| Item in the **“Profile”** menu | What it does |
| --- | --- |
| **“Save settings”** / **“Load settings”** | Keep a copy of the settings inside the panel, and bring it back. |
| **“Save to SD-card”** / **“Load from SD-card”** | The same with the memory card; the profile travels with its settings. Without a card, saving ends with **“Insert SD-card”**. |

At the **“Service”** level the menu also holds **“Save factory defaults”**: after **“Are you sure?”** it saves the settings as **“Save settings”** does and also keeps them, with the profile, as the panel's factory copy, which no menu item of this firmware loads back.

::: steps
1. Raise the level ([Enable the Agronomist level](enable-agronomist-level.md) — choose **“Service”**) and open **“MENU”** → **“Service”** → **“Profile”** ([The profile](profile.md)).

2. Scroll down to the item you need and press **“MENU”**. **“Save settings”** and **“Load settings”** ask **“Are you sure?”**.

   ![The confirmation window.](figures/confirm-sure)

3. Touch **“Yes”**. The panel answers **“Saved”** or **“Loaded”**.

   ![The panel confirms with “Saved”.](figures/info-saved)
:::

## Profile files on the memory card

- Files are named automatically **P0001.pfl** and stored in the **PROFILES** folder of the card. You may rename a file — keep the name to eight characters, Latin letters and digits.
- **“Load from SD-card”** opens a list of the profiles on the card. A profile file written by one firmware version is very likely **not readable** by another: an incompatible profile is shown in **red** in that list.
