---
title: 9xx · Setup answers of the gateway
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes-9-setup.html
---

# 9xx · Setup answers of the gateway

Codes 901–921: the gateway refused or could not finish writing the machine profile, a setting or a sensor number.

Codes 9xx are the gateway's answers when the app writes something to it: the machine profile, a setting of a row group, the rate, or the number of a sensor. In this pre-release version the app shows a number after the words **“the bridge answered with code”**, after **“Error #”**, or at the end of a message such as **“write interrupted (code”**. Add 900 to that number to get the service code: “code 13” is 913. Some answers have their own words; they are given below.

How to read a code, the four classes and how each looks in the app: [How service codes work](codes.md).

## 901 · Setup data damaged on the way {#c901}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“the bridge rejected the profile (checksum)”**. Elsewhere: “code 1”.

**What to do:**

1. Write again, with the tablet close to the gateway.

## 902 · Profile too large for the gateway {#c902}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“too many rows for the bridge (up to”** and the largest number of rows.

**What to do:**

1. Reduce the number of rows and devices in the machine profile.

## 903 · Gateway does not know a channel role {#c903}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“the bridge doesn't understand this profile (code”** 3).

**What to do:**

1. Bring the app and the gateway firmware to the same version: update the app, then update the gateway.
2. Tell the service the code.

## 904 · Gateway does not know a measured kind {#c904}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“the bridge doesn't understand this profile (code”** 4).

**What to do:**

1. Bring the app and the gateway firmware to the same version: update the app, then update the gateway.
2. Tell the service the code.

## 905 · Gateway could not save {#c905}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“the bridge could not save the profile”**.

**What to do:**

1. Write again.
2. If it repeats, tell the service the code.

## 906 · Write broken off {#c906}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“write interrupted (code”** 6).

**What to do:**

1. Write again, with the tablet close to the gateway.

## 907 · Gateway does not know the command {#c907}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** **“the bridge answered with code”** 7, or **“Error #”**7.

**What to do:**

1. Bring the app and the gateway firmware to the same version: update the app, then update the gateway.
2. Tell the service the code.

## 908 · Profile version not supported {#c908}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“the bridge doesn't understand this profile (code”** 8).

**What to do:**

1. Bring the app and the gateway firmware to the same version: update the app, then update the gateway.
2. Tell the service the code.

## 909 · Setup data came too fast {#c909}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“write interrupted (code”** 9).

**What to do:**

1. Write again, with the tablet close to the gateway.

## 910 · Write timed out {#c910}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“write interrupted (code”** 10).

**What to do:**

1. Write again, with the tablet close to the gateway.

## 911 · Gateway does not know the device data {#c911}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** In the profile status line: **“the bridge doesn't understand this profile (code”** 11).

**What to do:**

1. Bring the app and the gateway firmware to the same version: update the app, then update the gateway.
2. Tell the service the code.

## 912 · Gateway busy: seeding or another operation {#c912}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** **“bridge busy: seeding under way”** in the profile status line; **“Bridge busy: seed is still flowing. Stop the seeder and retry in a minute.”** or **“Seed is still flowing — the bridge does not listen to the bus. Stop the seeder.”** when numbering a sensor.

**What to do:**

1. Stop seeding, or wait until the other setup operation is finished.
2. Try again.

## 913 · Sensor did not answer during numbering {#c913}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** When numbering a sensor: **“No connection”** followed by **“at step:”** and the step, for example **“saving”**.

**What to do:**

1. Check that the sensor is connected and that the sensor line has power.
2. Try again.

## 914 · More than one new sensor answered {#c914}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** When numbering a sensor: **“More than one device on the network!”**

**What to do:**

1. Leave only one new sensor connected.
2. Try again.

## 915 · Sensor refused the number {#c915}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** When numbering a sensor: **“Error #”**15 followed by the step.

**What to do:**

1. Try again.
2. If it repeats, tell the service the code and the number of the sensor.

## 916 · Number outside the allowed range {#c916}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** When numbering a sensor: **“Number outside 1…199”**; the button stays off.

**What to do:**

1. Choose a number in the allowed range — the number the app offers for the row.

## 917 · Gateway busy with another sensor operation {#c917}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** When numbering a sensor: **“The bridge is busy with another action, please wait.”**

**What to do:**

1. Wait until the current operation with the sensors is finished.
2. Try again.

## 918 · Row group setting refused {#c918}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** **“the bridge answered with code”** 18.

**What to do:**

1. Bring the app and the gateway firmware to the same version: update the app, then update the gateway.
2. Tell the service the code.

## 919 · Control mode refused {#c919}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** **“the bridge answered with code”** 19.

**What to do:**

1. Bring the app and the gateway firmware to the same version: update the app, then update the gateway.
2. Tell the service the code.

## 920 · Sensor number already taken {#c920}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** When numbering a sensor: **“Address taken”** — another sensor already answers on that number; the button stays off. Or **“Address 7 already used!”** (with your number) when the gateway finds the number taken.

**What to do:**

1. Choose a free number.
2. Or first give the sensor that holds this number another number.

## 921 · Motor setting refused {#c921}

**Class:** [Attention](codes.md#class-attention) · **Place:** none.

**What you see.** **“the bridge answered with code”** 21.

**What to do:**

1. Bring the app and the gateway firmware to the same version: update the app, then update the gateway.
2. Tell the service the code.
