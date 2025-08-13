---
title: "1 - Predictive Firing"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Shoot where the opponent will be, not where it is.

Use opponent velocity and heading to estimate their future position:

```java
// Basic linear targeting
double bulletSpeed = 20 - 3 * firePower;
long time = (long)(opponentDistance / bulletSpeed);
double futureX = opponentX + Math.sin(opponentHeading) * opponentVelocity * time;
double futureY = opponentY + Math.cos(opponentHeading) * opponentVelocity * time;
bot.turnGunRightRadians(Utils.normalRelativeAngle(
    Math.atan2(futureX - bot.getX(), futureY - bot.getY()) - bot.getGunHeadingRadians()));
bot.fire(firePower);
```

This simple approach predicts a straight-line path. Experiment with different `firePower` values to balance accuracy and energy.
