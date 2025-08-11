---
title: "5 - Reactionary Logic"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Time to explore **5 - Reactionary Logic** 🤖

# ⚡ Reacting to Battle Input

In Robocode, your bot needs to make decisions on the fly. This means combining loops (like `while`) and conditions (like `if`) with **event-driven logic**.

---

## 🔍 Full Example: Radar Scan + Distance Tracking

This example spins the radar and reacts to nearby bots using their X and Y position.

```java
import dev.robocode.tankroyale.botapi.*;
import dev.robocode.tankroyale.botapi.events.*;

public class ReactiveBot extends Bot {

    private double lastOpponentX = 0;
    private double lastOpponentY = 0;

    public ReactiveBot() {
        super(BotInfo.fromFile("ReactiveBot.json"));
    }

    @Override
    public void run() {
        while (true) {
            turnRadarRight(360);  // Spin radar to look for opponents
        }
    }

    @Override
    public void onScannedBot(ScannedBotEvent e) {
        lastOpponentX = e.getX();
        lastOpponentY = e.getY();

        double myX = getX();
        double myY = getY();

        double dx = lastOpponentX - myX;
        double dy = lastOpponentY - myY;
        double distance = Math.hypot(dx, dy);

        if (distance < 150) {
            fire(3);  // Use strong firepower when close
        } else {
            fire(1);  // Use weak firepower when far
        }
    }
}
```

---

## 🧠 How It Works

- `run()` spins the radar in a loop.
- When `onScannedBot` triggers, we store the opponent's location.
- We use `Math.hypot(dx, dy)` to calculate distance.
- The `if` statement checks that distance to decide firepower.

---

## Navigation

⬅️ [Back: Loops](/robocode/Day-6/03_loops)
➡️ [Next: Day 7](/robocode/Day-7/index)

<iframe src="https://axyl-casc.github.io/WikiMinigames/checklist.html"
  style="width: 100%; height: 100%; min-height: 600px; border: none; border-radius: 8px;"></iframe>
