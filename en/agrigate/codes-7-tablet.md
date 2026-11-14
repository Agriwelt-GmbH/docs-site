---
title: 7xx · iPad and iPhone
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes-7-tablet.html
---

# 7xx · iPad and iPhone

Codes 701–705: the tablet itself — volume, headphones, GNSS speed and Bluetooth.

Codes 7xx are about the iPad or iPhone that runs the Hectare app: things the tablet does that would hide an alarm or stop the app from reaching the gateway.

How to read a code, the four classes and how each looks in the app: [How service codes work](codes.md).

## 701 · Tablet volume off {#c701}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** The yellow capsule **“Volume is off”** at the top of the screen and in the alarm window. The media volume of the tablet is below 20 %: the buzzer runs, but nobody hears it.

**What to do:**

1. Turn the volume of the tablet up with its volume buttons. The side switch does not silence the alarm; the volume does.

## 702 · Sound goes to headphones {#c702}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** The yellow capsule **“Sound in headphones”**: the sound goes to headphones, a Bluetooth speaker, AirPlay or a car system, not to the tablet's own speaker.

**What to do:**

1. Disconnect the headphones or the external audio so that the buzzer plays from the tablet.

## 703 · No GNSS speed {#c703}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** The words **“no speed”** where the speed is shown (the speed sheet, **“GNSS speed”** in **“Settings”** › **“Machine”** › **“Bridge”**). No fresh speed for 2 seconds: Hybrid and Precision cannot judge the rows. No window opens.

**What to do:**

1. Move out under the open sky.
2. Check that the app may use the location: iPad Settings › Privacy & Security › Location Services › Hectare.
3. Check that this iPad has GNSS: Hybrid and Precision need an iPad with GNSS (Cellular).

## 704 · Bluetooth off {#c704}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** none.

**What you see.** The red capsule **“Bluetooth is off”** in the middle of the screen. The app cannot reach the gateway.

**What to do:**

1. Switch Bluetooth on in the tablet's Control Centre or Settings.

## 705 · Bluetooth not allowed {#c705}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** none.

**What you see.** The red capsule **“No Bluetooth permission”** in the middle of the screen. The app may not use Bluetooth and cannot reach the gateway.

**What to do:**

1. Allow Bluetooth for the app: iPad Settings › Hectare › Bluetooth.
