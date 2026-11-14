---
title: 6xx · Gateway and link
product: Agrigate
language: en
firmware: 
url: https://docs.agriwelt.com/en/agrigate/codes-6-gateway-link.html
---

# 6xx · Gateway and link

Codes 601–602: the Bluetooth link to the gateway is lost, or the gateway is connected but sends nothing.

Codes 6xx are about the gateway and the radio link between the gateway and the iPad or iPhone. While the link is down, every figure on the screen is old: the screen is dimmed and the alarms of the rows wait.

How to read a code, the four classes and how each looks in the app: [How service codes work](codes.md).

## 601 · Link to the gateway lost {#c601}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** none.

**What you see.** The alarm window with **“Bridge link lost”**, after the link has been down for 3 seconds. A red capsule in the middle of the screen says what the app is doing, for example **“Looking for the bridge…”**. The window closes by itself when the gateway answers again.

**What to do:**

1. Check that the gateway has power.
2. Check that the iPad or iPhone is still in the cab, close to the gateway.
3. Wait: the app reconnects by itself. If it does not, use **“Reconnect”** in **“Settings”** › **“Machine”** › **“Bridge”**.

## 602 · Gateway silent {#c602}

**Class:** [Alarm](codes.md#class-alarm) · **Place:** none.

**What you see.** The red capsule **“Bridge is silent…”**: the link is there, but no data comes. The screen is dimmed; after 3 seconds the window **“Bridge link lost”** opens as for code 601.

**What to do:**

1. Wait 10 seconds.
2. If it stays, switch the power of the gateway off and on.
