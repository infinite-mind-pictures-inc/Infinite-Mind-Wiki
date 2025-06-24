---
title: "2 - Debugging with Patience"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Ready for **2 - Debugging with Patience** 😀

# 🐞 Using the Robocode Program to Debug

This class is about watching your robot **closely**. You’ll run your bot in the Robocode program, observe what it does, and learn to fix problems step by step.

---

## 🎯 Your Goal

You’ll be improving and troubleshooting your own robot using real-time feedback. This is a **programming day**, so you'll test ideas and fix bugs by watching how your bot behaves in the arena.

---

## 🛠️ Simple Techniques

Here are easy tools to help you debug:

* **Print messages** with `System.out.println()` — show when actions happen.
* **Test often** — run your robot after each small change.
* **Check assumptions** — print out variables like energy, position, or direction.

```java
System.out.println("Energy: " + getEnergy());
System.out.println("Heading: " + getDirection());
```

> These messages appear in the terminal when your bot runs.

---

## ⏱️ Control the Game Speed

The Robocode program includes tools to help you analyze each turn:

* Use the **TPS slider** to slow down the game.
* Use **Pause** and **Resume** to stop and start the match.
* Click **Next Turn** to move forward one tick at a time — perfect for step-by-step analysis since the game is technically turn-based.

> Watching your robot frame-by-frame can reveal exactly where things go wrong.

---

## 🔍 Example Flow

1. Run your robot and **watch what it does**.
2. Use the TPS slider to slow things down if needed.
3. If something looks weird, **pause and add a print**.
4. Run again and check if your guess was right.
5. Make one small change. Test again.

> Stay curious. Fixing bugs is about being a **detective**.

---

## 💬 If Something Breaks

* Read the error message slowly.
* See what line it talks about.
* Try changing one thing at a time.

```java
Exception in thread "main" java.lang.NullPointerException...
```

> This means something wasn't set up. Print what you expected to be there.

---

## 💡 Final Advice

Be kind to yourself. Everyone gets bugs. Debugging is **how** you learn. The more you observe, the better you'll build.

---

## Navigation

⬅️ [Back: try/catch Basics](/robocode/Day-7/00_try_catch)
➡️ [Next: Day 8](/robocode/Day-8/index)
