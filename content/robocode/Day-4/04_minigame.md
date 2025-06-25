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

* 🔴 **Red Dot** – Where the opponent robot was last seen
* 🔵 **Blue Dot** – Which way your gun (turret) is pointing
* 🟢 **Green Dot** – Which way your tank is pointing

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

Your instructor will give you two files:

* `PlayerBot.java`
* `run.cmd`

Save both files in the same folder. Create a new folder on your Desktop called `PlayerBot`, and place the files there.

---

### 2. 🧑‍💻 Open the Folder in VS Code

1. Open **VS Code**.
2. Click **File > Open Folder**.
3. Select the `PlayerBot` folder you created.

You should now see the `PlayerBot.java` and `run.cmd` files in the Explorer sidebar.

---

### 3. 🔐 Get Your Server Secret

1. Start the **Robocode Tank Royale Launcher**.
2. Click **Start Local Server** (this sets up your own battle arena).
3. Go to your Robocode server folder and open the file `server.properties`.
4. Find the line that says:


```
bots-secrets = YOUR\_SECRET\_KEY

```

5. Copy the long secret key after the `=`.

---

### 4. 📝 Paste the Secret in `PlayerBot.java`

1. In VS Code, open `PlayerBot.java`.
2. Find this part near the top:

```java
private static final String DEFAULT_URL = "ws://localhost:7654";
private static final String DEFAULT_SECRET = "Zur2Fpt1ExRc5G3WSO/8oM574f/pmEbZ22bqXHlm4/";
````

3. Replace the value of `DEFAULT_SECRET` with your copied secret. Example:

   ```java
   private static final String DEFAULT_SECRET = "your-real-secret-goes-here";
   ```

4. Save the file (**Ctrl+S** or **Cmd+S**).

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
