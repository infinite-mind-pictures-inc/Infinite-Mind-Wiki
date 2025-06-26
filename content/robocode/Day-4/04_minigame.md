---
title: "Minigame"
tags: ["robocode"]
---

# 🎮 Try the PlayerBot! (WASD + Q/E + Space)

Before you start coding your own AI tank, it's important to understand how Robocode movement and firing actually *feel*. To help you do that, we’ve built a special tank that YOU can drive around!

---

## 🧠 What is PlayerBot?

PlayerBot is a manually-controlled robot that you can move using your keyboard. It’s a great way to get a sense of how turning, moving, and firing bullets works in the arena.

---

<img src="/images/low/robocode/playerBot.webp" alt="image of playerbot GUI" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">

---

# 🧭 What Your Robot Sees (HUD Guide)

Your robot has a special heads-up display (HUD) to help you see what’s going on during the match! Here's what everything means:

---

## 🎯 Dots on the Compass

Use this guide to understand the colored dots on PlayerBot’s on‑screen compass.

| Dot Colour    | Meaning                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| 🔴 **Red**    | Opponent’s **current** location (shown right after a scan).                                                           |
| 🟡 **Yellow** | Opponent’s **previous** location. The red dot turns yellow once the enemy moves, so you can see where they were last. |
| 🔵 **Blue**   | Direction your **gun turret** is pointing.                                                                            |
| 🟢 **Green**  | Direction your **tank body** is pointing.                                                                             |

Keep an eye on how the red dot switches to yellow—this tells you the enemy has changed position since your last scan.

---

## 💚 Health Bars

* 🔴 **Red Bar** – The opponent tank's energy
* 🟢 **Green Bar** – Your robot’s energy

---

## 📡 Visibility Info

This section shows what your robot *currently sees* using its scanner. If it hasn't scanned an opponent recently, it will say "No opponent scanned."

When you *do* scan an opponent, you’ll see:

* **Angle** – Where the opponent was spotted
* **Opponent ID** – Their unique robot number
* **Opponent X/Y** – The position of the opponent on the map
* **Opponent Energy** – How much health they have
* **Opponent Direction** – Which way they’re moving
* **Opponent Speed** – How fast they’re going

---

## 🤖 Your Robot’s Stats

These numbers help you understand your own tank:

* **Energy** – Your robot’s current health
* **X/Y** – Your robot’s position on the map
* **Heading** – Which direction your robot is facing
* **Gun Heading** – Which way your gun is pointing
* **Radar Heading** – Which way your radar is scanning
* **Gun Heat** – How hot your gun is (can’t fire until it cools!)
* **Speed** – How fast you’re moving

Use this info to aim, dodge, and stay in the fight!

---


## ⚙️ Setup Instructions

Follow these steps to set up your PlayerBot and get it running in a Robocode Tank Royale match!

---

### 1. 📁 Download the Files

Your instructor will give you a file:

* `PlayerBotLauncher.jar`

Save this file somewhere easy to find, such as a folder on your Desktop. You can name the folder `PlayerBot`.

---

### 2. 🧑‍💻 Open the Launcher

1. Double-click `PlayerBotLauncher.jar` to run it.
2. A small window will appear asking you to enter two things:

   * **Server Address** – this should start with `ws://`
   * **Server Secret** – you'll get this from your local server setup.

---

### 3. 🔐 Get Your Server Secret

1. Start the **Robocode Tank Royale Launcher**.

2. Click **Start Local Server** (this sets up your own battle arena).

3. Go to your Robocode server folder and open the file `server.properties`.

4. Find the line that says:

   ```
   bots-secrets = YOUR_SECRET_KEY
   ```

5. Copy the long secret key after the `=` sign.

---

### 4. 🚀 Launch Your Bot

1. Paste the address (usually `ws://localhost:7654`) into the address box.
2. Paste your secret key into the secret box.
3. Click the **Launch Bot** button.
4. If everything is set up correctly, you’ll see your bot appear in the list of ready bots when starting a match.

---

You're now ready to battle! 🎯

If something doesn’t work, double-check the address and secret you typed in. Make sure your local server is running before launching the bot.

---

### 5. 🧪 Start the Local Server (If Not Already Running)

Make sure the Local Server is still running in the Robocode Launcher.

---

### 6. 🚀 Run the PlayerBot

In VS Code:

1. Open the terminal (**View > Terminal**).
2. Type this and press Enter:

```
PlayerBot.cmd

```

PlayerBot will start, and you should see some logs in the terminal.

---

### 7. ✅ Confirm It's Working

Go back to the Robocode Launcher and click **Start Game**.

* In the list of bots, you should now see **PlayerBot** listed as "Ready".

You're all set! Have fun driving your robot!

```

---

## 🎮 Controls

Use these keys to drive:

* `W` – Move forward
* `S` – Move backward
* `A` – Strafe left (turn body left)
* `D` – Strafe right (turn body right)
* `Q` – Rotate turret counterclockwise
* `E` – Rotate turret clockwise
* `Space` – Fire!

> Try spinning in place, dodging bullets, or chasing down an enemy.

---

## 🔍 What to Look For

* How fast can you turn?
* How long does it take for your gun to cool down?
* What happens when you hit a wall?
* How do bullets travel?

Use this play session to explore how the basic physics and rules of Robocode work.

---

## ✅ Challenge

See if you can:

* Hit a moving enemy
* Dodge incoming fire
* Defeat "Target" in a 1v1 match

---

💡 *Understanding the game by playing it will make your AI robot smarter when you start programming it later!*
