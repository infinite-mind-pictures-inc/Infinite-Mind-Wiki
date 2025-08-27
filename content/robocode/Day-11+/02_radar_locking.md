---
title: "3 - Radar Locking"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Keep your opponent in sight to maintain pressure.

Lock the radar by turning it twice as far as the gun:

```java
public void onScannedRobot(ScannedRobotEvent e) {
    double radarTurn = getHeadingRadians() + e.getBearingRadians() - getRadarHeadingRadians();
    setTurnRadarRightRadians(2 * Utils.normalRelativeAngle(radarTurn));
}
```

A locked radar provides continuous updates, improving targeting and situational awareness.

<iframe src="https://infinite-mind-pictures-inc.github.io/WikiMinigames/checklist.html"
  style="width: 100%; height: 100%; min-height: 600px; border: none; border-radius: 8px;"></iframe>
