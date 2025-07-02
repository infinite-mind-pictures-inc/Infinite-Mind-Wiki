---
title: "2 - Debugging with Patience"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Welcome to **2 - Debugging with Patience** 🧘

# 🛠️ Debugging Your Bot in Robocode

Today we focus on *watching your robot carefully*. You’ll use the Robocode program to run your bot, see what it does, and fix any issues that come up.

---

## 🎯 Mission Objective

You will practice **testing and improving your robot** based on what you observe. This is a **coding day**, so get ready to experiment, break things, and fix them again. That’s how great robots are made!

---

## 🔧 Debugging Tools

Use these simple tricks to track down bugs:

* Print messages using `System.out.println()` to see what your bot is doing.
* Test your bot after *each small change*.
* Print out key values to double-check your thinking.

```java
System.out.println("Energy: " + getEnergy());
System.out.println("Heading: " + getDirection());
```

> These messages will show up in the terminal when your bot runs.

---

## 🕹️ Slow Down the Action

Robocode has built-in tools for slowing things down and pausing the game:

* Drag the **TPS slider** to reduce the speed.
* Use **Pause** and **Resume** to freeze and unfreeze the battle.
* Click **Next Turn** to advance one frame at a time.

> Analyzing your bot's behavior turn by turn helps you pinpoint exactly when things go wrong.

---

## 🔄 Step-by-Step Debugging Example

1. Run your bot and **observe** how it behaves.
2. Slow the game down using the TPS slider.
3. If something doesn't make sense, **pause** and add a debug print.
4. Run it again and read the output.
5. Try a tiny change. Repeat the test.

> Debugging is like being a detective. Use clues to solve the mystery.

---

## ⚠️ When Errors Appear

If you get a red error message, don’t panic. Here's what to do:

* Read the message carefully.
* Look at the line number mentioned.
* Print out variables near that line to help figure out what's missing.

```java
Exception in thread "main" java.lang.NullPointerException...
```

> This means something your code used was empty. Try printing it before the crash.

---

## 🏆 Bot Leaderboard: Start Small

You'll likely begin near the bottom of the rankings. That's okay! Watch how other bots behave and improve your own strategy.

| Rank | Name                           |
| ---- | ------------------------------ |
| 1    | Spin Bot 1.0                   |
| 2    | Walls 1.0                      |
| 3    | Crazy 1.0                      |
| 4    | Track Fire 1.0                 |
| 5    | Infinite Mind Pictures Bot 1.0 |
| 6    | Velocity Bot 1.0               |
| 7    | Ram Fire 1.0                   |
| 8    | My First Bot 1.0               |
| 9    | Painting Bot 1.0               |
| 10   | Fire 1.0                       |
| 11   | Corners 1.0                    |
| 12   | Target 1.0                     |

---

## 💡 Pro Tip

Everyone runs into bugs. Even the best coders! Debugging is not just about fixing errors — it’s *how* you learn how your robot really works.

Keep asking: "What did I *expect* to happen? What actually happened?"

---

## Navigation

⬅️ [Back: try/catch Basics](/robocode/Day-7/00_try_catch)
➡️ [Next: Day 8](/robocode/Day-8/index)
