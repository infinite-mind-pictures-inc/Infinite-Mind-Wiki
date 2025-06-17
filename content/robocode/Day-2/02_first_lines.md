---

title: "3 - First Lines of Code"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
enableToc: true
----

# 🤖 Robocode Lab: Day 3 – First Lines of Code

Welcome to Day 3! Today’s the day you bring your robot to life with its very first lines of code. Let’s dive in and make it move, scan, and fire like a champ — all using **Visual Studio Code**!

---

> Curious about **3 - First Lines of Code** 😀

## 🧰 Initial Setup (Make Robocode Recognize Your Bot!)

Before your robot can roll into battle, Robocode needs to know it exists. Let’s build its identity and home base.

### 🔧 Step 0: Create Your Root Directory

Robocode looks for robots inside a special folder. Think of this as a garage for all your future bots!

* **Windows:** `C:\bots`
* **macOS/Linux:** `~/bots`

Once created, open Robocode and go to **Preferences → Bot Root Configuration**. Add this folder so the game can find your creations.

### 🏗️ Step 0.1: Make Your Bot's Personal Folder

Inside your new bots garage, create a personal bot room:

```bash
~/bots/MyFirstBot
```

Your `.java` file and a metadata file (coming up next) will go here. Everything must match the bot name exactly — it's picky like that.

### 🪪 Step 0.2: Build a JSON Bot Profile

Time to give your bot a name, a backstory, and a badge. Create a file inside your bot folder called `MyFirstBot.json` with the following:

```json
{
  "name": "My First Bot",
  "version": "1.0",
  "authors": ["Your Name"],
  "description": "My first bot",
  "homepage": "https://your-robot-homepage.com",
  "countryCodes": ["us"],
  "platform": "Java",
  "programmingLang": "Java"
}
```

✅ Required fields: `name`, `version`, `authors`
🔍 Optional fields: everything else (but they're cool to include!)

---

## 💻 Step 1: Open the Project

Launch **Visual Studio Code** and use **File → Open Folder** to select the Robocode Lab folder you unzipped earlier. Inside it, find the `robots/` folder and open up `MyFirstRobot.java`.

---

## 🧠 Step 2: Understand the Robot Template

Let’s peek inside the file and see what’s going on:

```java
package robots;

import robocode.Robot;
import robocode.ScannedRobotEvent;

public class MyFirstRobot extends Robot {
    public void run() {
        while (true) {
            ahead(100);
            turnGunRight(360);
            back(100);
            turnGunRight(360);
        }
    }

    public void onScannedRobot(ScannedRobotEvent e) {
        fire(1);
    }
}
```

Here’s what’s happening:

* Your robot moves forward, spins its gun in a full circle, moves backward, then spins again.
* When it detects another robot? **Zap!** It fires with power level 1.

---

## ✏️ Step 3: Customize and Save

Want your bot to pack more punch? Try this:

```java
fire(3);  // Much stronger blast!
```

Then hit `Ctrl + S` (or `Cmd + S` on Mac) to save.

---

## 🎮 Step 4: Run It in Robocode

Time for the fun part. Open the **Robocode app**, go to **Battle → New Battle...**, click **Add**, and choose your robot (`MyFirstRobot`). Toss in a few enemies and let the chaos begin!

Watch your bot dash, scan, and fire based on your code. 🎉

---

## 🚀 Next Up:

We’ll dive deeper into event handling and how to fine-tune your robot’s reactions. But for now, congrats — you’ve launched your first custom robot!

## 🔗 Navigation

⬅️ [Back: Setting Up](/robocode/Day-2/01_setting_up)
➡️ [Next: Java Datatypes](/robocode/Day-3/00_variables_and_datatypes)
