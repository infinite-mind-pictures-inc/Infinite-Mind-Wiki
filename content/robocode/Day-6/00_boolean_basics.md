---
title: "1 - Boolean Basics"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Let's tackle **1 - Boolean Basics** 😎

# Understanding Booleans

`boolean` values represent **true** or **false**. In Robocode you often use them to track basic on/off states.

```java
boolean targetLocked = false;
```

You can flip the value when a condition is met:

```java
if (getGunHeat() == 0) {
    targetLocked = true;
}
```

Booleans help your robot remember whether something has happened yet.

---

## Navigation

⬅️ [Back: HitByBulletEvent](/robocode/Day-4/03_hit_by_bullet_event)
➡️ [Next: If Statements](/robocode/Day-6/01_if_statements)
