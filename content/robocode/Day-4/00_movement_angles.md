---
title: "1 - Movement and Angles"
tags: [robocode, programming, beginner]
---
# Robocode Lab: Day 4 – Movement and Angles

Today you'll create your own robot from scratch. The focus is on how movement works in Robocode and how to use angles for precise turns.

## Step 1: Create a New Robot

1. Open the `robots` folder in your editor.
2. Create a new Java file named `MyMover.java`.
3. Define the class and extend `Robot`:

```java
package robots;

import robocode.Robot;

public class MyMover extends Robot {
    public void run() {
        while (true) {
            ahead(100);
            turnRight(90);
            back(100);
            turnLeft(90);
        }
    }
}
```

This simple loop moves the robot in a square. The `ahead` and `back` commands control distance, while `turnRight` and `turnLeft` use degrees for angles.

## Step 2: Experiment with Angles

Angles in Robocode follow the standard mathematical convention. Turning `90` moves a quarter-circle, `180` is a half turn, and `360` completes a full circle. Try changing the values and observe how your robot moves.

## Step 3: Try Smoother Motion

You can combine movement and turning to create arcs:

```java
public void run() {
    while (true) {
        ahead(50);
        turnRight(45);
    }
}
```

This pattern produces a spiral. Notice how small angle adjustments change the path. Practice with different distances and angles until you feel comfortable controlling the robot.

## Challenge: Triangle Pattern

As an extra exercise, try modifying the loop so that your tank travels in a triangle. Use `turnRight(120)` (or `turnLeft(120)`) after each move to create three equal sides.

---

## Navigation

⬅️ [Back: First Lines of Code](/robocode/Day-3/02_first_lines)
➡️ [Next: Robocode Intro](/robocode/Day-3/00_robocode_intro)
