---
title: "3 - First Lines of Code"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---
# Robocode Lab: Day 3 – First Lines of Code

Now that your workspace is set up and the files are ready, it's time to write your first robot in **Visual Studio Code**.

## Step 1: Open the Project

Open **Visual Studio Code** and select the unzipped Robocode Lab folder using **File → Open Folder**. Inside, locate the `robots/` folder. You should see a file named `MyFirstRobot.java`.



## Step 2: Understand the Template

Open `MyFirstRobot.java`. It might look something like this:

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

In this template, the robot moves forward and backward while spinning its gun to search for enemies. When it detects another robot, it fires an energy beam.

---

## Step 3: Edit and Save

Try modifying the robot's behavior. For example, change `fire(1);` to `fire(3);` to emit a more powerful energy beam.

Save your changes using `Ctrl + S` or `Cmd + S`.

---

## Step 4: Run It in Robocode

Open the **Robocode application**, go to **Battle → New Battle...**, click **Add**, and select your robot (e.g., `MyFirstRobot`). Add enemy robots and start the battle.

Watch your robot in action as it follows your logic and fires energy beams at opponents.

---

## Navigation

⬅️ [Back: Setting Up](/robocode/Day-2/01_setting_up)
➡️ [Next: Movement and Angles](/robocode/Day-3/00_variables_and_datatypes)
