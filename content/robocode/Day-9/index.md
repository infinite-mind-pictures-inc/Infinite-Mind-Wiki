---
title: Day 9 - Build & Showcase

tags: ["robocode", "contents", "cs", "intermediate"]
---

> Today is a **full build day**. Team up with mentors and keep iterating on your robot.

## Agenda

- **Full build day with mentors** – pair up and keep coding.
- **Encourage cascade mentorship** – experienced students help newer ones.
- **Invite community check-ins and progress showcases** – show off your bots.

This day we look at each other's projects and discuss ideas one by one. We'll focus on programming the robot.

### Sweeping Left and Right

```java
public void updateOnScan(ScannedBotEvent e) {
    targetFound = true;
    scansSinceLastSeen = 0;
    turn_delta = 0;
}

/**
 * Sweep the gun looking for a target.
 *
 * @param bot reference to the controlling bot used for turning the gun
 * @return {@code true} if a target was found during the last scan
 */
public boolean findTarget(Bot bot) {
    targetFound = false; // Reset for next scan
    // Perform gun movement based on current direction
    double turn_angle = Math.max(0.1 * scansSinceLastSeen * scansSinceLastSeen, 1) + turn_delta;
    System.out.println("Scanning for targets, scans since last seen: " + scansSinceLastSeen + ", turning " + (sweepRight ? "right" : "left") + " by " + turn_angle + " degrees.");
    if (sweepRight) {
        bot.turnGunRight(turn_angle);
    } else {
        bot.turnGunRight(-turn_angle);
    }

    // Update next sweep direction based on scan results and current movement
    if (targetFound) {
        System.out.println("Target spotted!");
        // Maintain current direction if target was found
        // (sweepRight remains unchanged)
    } else {
        scansSinceLastSeen++;
        // If no target was found after several scans, reverse direction
        if(scansSinceLastSeen == 1){
            System.out.println("No target found, reversing direction.");
            sweepRight = !sweepRight;
            turn_delta += 5;
        }
    }
    return targetFound;
}
```

## Navigation

⬅️ [Back: Day 8](/robocode/Day-8/index)
➡️ [Next: Day 10+](/robocode/Day-10+/index)
