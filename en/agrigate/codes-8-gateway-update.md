---
title: 8xx · Gateway update
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes-8-gateway-update.html
---

# 8xx · Gateway update

Codes 801–810: the steps and the results of updating the gateway's firmware from the app.

Codes 8xx belong to the update of the gateway's firmware from the app. The update screen shows the code in front of the result, for example “804 · Bridge updated”. How to run the update: [Update the gateway](bridge-update.md).

How to read a code, the four classes and how each looks in the app: [How service codes work](codes.md).

## 801 · Update transfer started {#c801}

**Class:** [Record](codes.md#class-record) · **Place:** none.

**What you see.** On the update screen this is the start of the stage **“Firmware transfer”**; no code is shown. The gateway keeps it as a record.

**What to do.** Nothing. This code is a record for the service.

## 802 · Update transferred in full {#c802}

**Class:** [Record](codes.md#class-record) · **Place:** none.

**What you see.** On the update screen this is the end of the stage **“Firmware transfer”**, after which the screen moves on to **“Bridge restart”**; no code is shown. The gateway keeps it as a record. The image is transferred and accepted; its signature is checked later, when the gateway switches to it, and a refusal then comes as [806](codes-8-gateway-update.md#c806).

**What to do.** Nothing. This code is a record for the service.

## 803 · Update activated {#c803}

**Class:** [Record](codes.md#class-record) · **Place:** none.

**What you see.** On the update screen this is the stage **“Bridge restart”**; no code is shown. The gateway keeps it as a record of its restart onto the new firmware.

**What to do:**

1. Wait up to a minute and do not switch the gateway off.

## 804 · Gateway updated {#c804}

**Class:** [Record](codes.md#class-record) · **Place:** none.

**What you see.** On the update screen: **“804 · Bridge updated”** and **“The new firmware passed its check and runs. The monitor works as before.”**

**What to do.** Nothing. This code is a record for the service.

## 805 · Gateway went back to the previous firmware {#c805}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** On the update screen: **“805 · The bridge went back to its previous firmware”**. The new firmware failed its own check; the gateway runs the previous one and works.

**What to do:**

1. Go on working.
2. Tell the service the code.

## 806 · Firmware refused: signature {#c806}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** On the update screen: **“806 · The bridge refused the firmware: the signature does not match”**. The gateway keeps its firmware.

**What to do:**

1. Update the Hectare app and try again.
2. If it repeats, tell the service the code.

## 807 · Firmware refused: not newer {#c807}

**Class:** [Record](codes.md#class-record) · **Place:** none.

**What you see.** On the update screen: **“807 · The bridge refused the firmware: it is not newer”** and **“The bridge runs its own firmware. Nothing to do.”**

**What to do.** Nothing. This code is a record for the service.

## 808 · Update transfer interrupted {#c808}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** On the update screen: **“808 · Firmware transfer interrupted”**. The gateway runs its previous firmware.

**What to do:**

1. Keep the tablet close to the gateway.
2. Start the update again; the transfer starts from the beginning.

## 809 · Update not possible now {#c809}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** On the update screen: **“809 · The bridge is busy: no update now”**, or **“809 · The machine is seeding: the update did not start”**. Nothing was sent.

**What to do:**

1. Finish seeding and stop the machine.
2. Clear the active alarm on the seeder.
3. Wait a minute and try again.

## 810 · Gateway did not come back after the restart {#c810}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** On the update screen: **“810 · The bridge did not come back after the restart”**. The app waited 2 minutes for the gateway after its restart.

**What to do:**

1. Check the power of the gateway and wait a minute.
2. If it is still not back, switch the power of the gateway off and on and open the update screen again.
