---
title: "1 - Predictive Firing"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Shoot where the enemy will be, not where it is.

Use enemy velocity and heading to estimate their future position:

```java
// Basic linear targeting
double bulletSpeed = 20 - 3 * firePower;
long time = (long)(enemyDistance / bulletSpeed);
double futureX = enemyX + Math.sin(enemyHeading) * enemyVelocity * time;
double futureY = enemyY + Math.cos(enemyHeading) * enemyVelocity * time;
bot.turnGunRightRadians(Utils.normalRelativeAngle(
    Math.atan2(futureX - bot.getX(), futureY - bot.getY()) - bot.getGunHeadingRadians()));
bot.fire(firePower);
```

This simple approach predicts a straight-line path. Experiment with different `firePower` values to balance accuracy and energy.
