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

## ⚙️ Setup Instructions

Before you can play, you need to get everything running:

1. **Download the PlayerBot `.jar` file**

   * Your instructor will give you the file. Save it somewhere easy to find.

2. **Launch the Robocode Local Server**

   * Run the main Robocode Tank Royale launcher.
   * Start the **Local Server** from the launcher.

3. **Open the `server.properties` file**

   * This file is found inside the Robocode server folder.
   * Look for the `bots-secrets` value. Copy the secret key.

4. **Run PlayerBot**

   * Double-click or run the `PlayerBot.jar` file.
   * When it asks for a secret, paste the `bots-secrets` value you copied.
   * Now the PlayerBot should connect and appear in the battle!

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
* Survive more than 30 seconds

---

💡 *Understanding the game by playing it will make your AI robot smarter when you start programming it later!*
